import type { ContactMessagePayload } from "@/lib/contact-message";
import {
  buildContactAdminEmail,
  buildContactUserConfirmationEmail,
  type ContactEmailData,
} from "@/lib/mail/templates/contact";
import { createMailTransport, getSmtpConfig } from "@/lib/mail/transport";

function toEmailData(
  payload: ContactMessagePayload,
  messageId: string,
): ContactEmailData {
  return {
    fullName: payload.fullName,
    email: payload.email,
    phone: payload.phone,
    subject: payload.subject,
    message: payload.message,
    messageId,
  };
}

export async function sendContactEmails(
  payload: ContactMessagePayload,
  messageId: string,
) {
  const { from, adminEmail, adminCcEmails, user: smtpUser } = getSmtpConfig();
  const transport = createMailTransport();
  const data = toEmailData(payload, messageId);

  const userMail = buildContactUserConfirmationEmail(data);
  const adminMail = buildContactAdminEmail(data);

  // Send one at a time — shared SMTP hosts often drop concurrent sends.
  const userResult = await transport.sendMail({
    from,
    to: payload.email,
    replyTo: smtpUser,
    subject: userMail.subject,
    text: userMail.text,
    html: userMail.html,
    envelope: {
      from: smtpUser,
      to: payload.email,
    },
  });

  console.info("[contact] user confirmation sent", {
    to: payload.email,
    messageId: userResult.messageId,
    response: userResult.response,
  });

  const adminResult = await transport.sendMail({
    from,
    to: adminEmail,
    cc: adminCcEmails.length ? adminCcEmails : undefined,
    replyTo: payload.email,
    subject: adminMail.subject,
    text: adminMail.text,
    html: adminMail.html,
    envelope: {
      from: smtpUser,
      to: [adminEmail, ...adminCcEmails],
    },
  });

  console.info("[contact] admin alert sent", {
    to: adminEmail,
    cc: adminCcEmails,
    messageId: adminResult.messageId,
    response: adminResult.response,
  });
}
