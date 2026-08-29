import { getContactSubjectLabel } from "@/lib/contact-message";
import { siteConfig } from "@/lib/site";
import {
  emailBrand as brand,
  emailShell,
  escapeHtml,
  simpleRow,
} from "@/lib/mail/templates/shared";

export type ContactEmailData = {
  fullName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  messageId: string;
};

export function buildContactUserConfirmationEmail(data: ContactEmailData) {
  const firstName = data.fullName.split(" ")[0] || data.fullName;
  const subjectLabel = getContactSubjectLabel(data.subject);
  const subject = `Thanks for writing in, ${firstName}`;

  const html = emailShell({
    preview: `Hi ${firstName} — we got your message and will reply soon.`,
    bodyHtml: `
      <p style="margin:0 0 16px;">Hi ${escapeHtml(firstName)},</p>
      <p style="margin:0 0 16px;color:${brand.muted};">
        Thanks for getting in touch. We received your note about
        <strong style="color:${brand.text};font-weight:600;">${escapeHtml(subjectLabel)}</strong>
        and someone from the team will reply as soon as we can.
      </p>
      <p style="margin:0 0 8px;color:${brand.muted};">Here is what you sent:</p>
      <p style="margin:0 0 20px;padding:14px 16px;background:#fafafa;color:${brand.text};white-space:pre-wrap;">
${escapeHtml(data.message)}
      </p>
      <p style="margin:0 0 16px;color:${brand.muted};">
        This mailbox is not monitored. If you need to add anything, email us at
        <a href="mailto:${escapeHtml(siteConfig.contactEmail)}" style="color:${brand.mid};text-decoration:none;">${escapeHtml(siteConfig.contactEmail)}</a>
        or use our
        <a href="${escapeHtml(siteConfig.url)}/contact" style="color:${brand.mid};text-decoration:none;">contact page</a>.
      </p>
      <p style="margin:0;">
        Talk soon,<br />
        <span style="color:${brand.text};">${escapeHtml(siteConfig.name)}</span>
      </p>
    `,
  });

  const text = [
    `Hi ${firstName},`,
    "",
    `Thanks for getting in touch. We received your note about ${subjectLabel} and someone from the team will reply as soon as we can.`,
    "",
    "Here is what you sent:",
    data.message,
    "",
    `This mailbox is not monitored. If you need to add anything, email ${siteConfig.contactEmail} or visit ${siteConfig.url}/contact.`,
    "",
    "Talk soon,",
    siteConfig.name,
  ].join("\n");

  return { subject, html, text };
}

export function buildContactAdminEmail(data: ContactEmailData) {
  const subjectLabel = getContactSubjectLabel(data.subject);
  const subject = `${data.fullName} wrote in (${subjectLabel})`;

  const html = emailShell({
    preview: `${data.fullName} sent a message about ${subjectLabel}.`,
    bodyHtml: `
      <p style="margin:0 0 16px;">
        New message from the contact form.
      </p>
      <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 18px;">
        ${simpleRow("Name", data.fullName)}
        ${simpleRow("Email", data.email)}
        ${simpleRow("Phone", data.phone?.trim() || "Not provided")}
        ${simpleRow("Topic", subjectLabel)}
      </table>
      <p style="margin:0 0 8px;color:${brand.muted};">Message</p>
      <p style="margin:0 0 18px;padding:14px 16px;background:#fafafa;white-space:pre-wrap;">
${escapeHtml(data.message)}
      </p>
      <p style="margin:0;color:${brand.muted};font-size:14px;">
        Reply to this email to respond to ${escapeHtml(data.fullName.split(" ")[0] || data.fullName)}.
      </p>
    `,
  });

  const text = [
    "New message from the contact form.",
    "",
    `Name: ${data.fullName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone?.trim() || "Not provided"}`,
    `Topic: ${subjectLabel}`,
    "",
    data.message,
  ].join("\n");

  return { subject, html, text };
}
