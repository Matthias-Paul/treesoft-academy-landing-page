import { getCourseBySlug } from "@/lib/courses";
import type { ItApplicationSubmitBody } from "@/lib/it-application";
import {
  buildAdminApplicationEmail,
  buildApplicantConfirmationEmail,
  type ItApplicationEmailData,
} from "@/lib/mail/templates/it-application";
import { createMailTransport, getSmtpConfig } from "@/lib/mail/transport";

function toEmailData(
  payload: ItApplicationSubmitBody,
  applicationId: string,
): ItApplicationEmailData {
  const course = getCourseBySlug(payload.track);

  return {
    fullName: payload.fullName,
    email: payload.email,
    phone: payload.phone,
    trackTitle: course?.title ?? payload.track,
    schoolName: payload.schoolName,
    department: payload.department,
    programLevel: payload.programLevel,
    itStatus: payload.itStatus,
    itStartDate: payload.itStartDate,
    itEndDate: payload.itEndDate,
    notes: payload.notes,
    applicationId,
    schoolIdUrl: payload.schoolId.url,
    itLetterUrl: payload.itLetter.url,
  };
}

export async function sendItApplicationEmails(
  payload: ItApplicationSubmitBody,
  applicationId: string,
) {
  const { from, adminEmail, adminCcEmails, user: smtpUser } = getSmtpConfig();
  const transport = createMailTransport();
  const data = toEmailData(payload, applicationId);

  const applicant = buildApplicantConfirmationEmail(data);
  const admin = buildAdminApplicationEmail(data);

  // Send one at a time — shared SMTP hosts often drop concurrent sends.
  const userResult = await transport.sendMail({
    from,
    to: payload.email,
    replyTo: smtpUser,
    subject: applicant.subject,
    text: applicant.text,
    html: applicant.html,
    envelope: {
      from: smtpUser,
      to: payload.email,
    },
  });

  console.info("[it-applications] applicant confirmation sent", {
    to: payload.email,
    messageId: userResult.messageId,
    response: userResult.response,
  });

  const adminResult = await transport.sendMail({
    from,
    to: adminEmail,
    cc: adminCcEmails.length ? adminCcEmails : undefined,
    replyTo: payload.email,
    subject: admin.subject,
    text: admin.text,
    html: admin.html,
    envelope: {
      from: smtpUser,
      to: [adminEmail, ...adminCcEmails],
    },
  });

  console.info("[it-applications] admin alert sent", {
    to: adminEmail,
    cc: adminCcEmails,
    messageId: adminResult.messageId,
    response: adminResult.response,
  });
}
