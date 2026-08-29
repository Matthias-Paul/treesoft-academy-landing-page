import { siteConfig } from "@/lib/site";
import {
  emailBrand as brand,
  emailShell,
  escapeHtml,
  simpleLinkRow,
  simpleRow,
} from "@/lib/mail/templates/shared";

export type ItApplicationEmailData = {
  fullName: string;
  email: string;
  phone: string;
  trackTitle: string;
  schoolName: string;
  department: string;
  programLevel: string;
  itStatus: "current" | "upcoming";
  itStartDate?: string;
  itEndDate?: string;
  notes?: string;
  applicationId: string;
  schoolIdUrl: string;
  itLetterUrl: string;
};

function formatItStatus(status: ItApplicationEmailData["itStatus"]) {
  return status === "current" ? "Currently on IT / SIWES" : "Upcoming IT / SIWES";
}

function formatOptionalDate(value?: string) {
  if (!value) return "Not provided";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-NG", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function buildApplicantConfirmationEmail(data: ItApplicationEmailData) {
  const firstName = data.fullName.split(" ")[0] || data.fullName;
  const subject = `We got your IT application, ${firstName}`;

  const html = emailShell({
    preview: `Hi ${firstName} — your IT student application is with our team now.`,
    bodyHtml: `
      <p style="margin:0 0 16px;">Hi ${escapeHtml(firstName)},</p>
      <p style="margin:0 0 16px;color:${brand.muted};">
        Thanks for applying to the IT student pathway at ${escapeHtml(siteConfig.name)}.
        Your application for <strong style="color:${brand.text};font-weight:600;">${escapeHtml(data.trackTitle)}</strong>
        is with our team and we will review it shortly.
      </p>
      <p style="margin:0 0 8px;color:${brand.muted};">Quick summary:</p>
      <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 20px;">
        ${simpleRow("Track", data.trackTitle)}
        ${simpleRow("School", data.schoolName)}
        ${simpleRow("Department", data.department)}
        ${simpleRow("Level", data.programLevel)}
      </table>
      <p style="margin:0 0 16px;color:${brand.muted};">
        No action needed from you right now. This mailbox is not monitored.
        If anything comes up, email
        <a href="mailto:${escapeHtml(siteConfig.contactEmail)}" style="color:${brand.mid};text-decoration:none;">${escapeHtml(siteConfig.contactEmail)}</a>
        or visit our
        <a href="${escapeHtml(siteConfig.url)}/contact" style="color:${brand.mid};text-decoration:none;">contact page</a>.
      </p>
      <p style="margin:0;">
        Best,<br />
        <span style="color:${brand.text};">${escapeHtml(siteConfig.name)}</span>
      </p>
    `,
  });

  const text = [
    `Hi ${firstName},`,
    "",
    `Thanks for applying to the IT student pathway at ${siteConfig.name}. Your application for ${data.trackTitle} is with our team and we will review it shortly.`,
    "",
    `Track: ${data.trackTitle}`,
    `School: ${data.schoolName}`,
    `Department: ${data.department}`,
    `Level: ${data.programLevel}`,
    "",
    `This mailbox is not monitored. Questions? Email ${siteConfig.contactEmail} or visit ${siteConfig.url}/contact.`,
    "",
    "Best,",
    siteConfig.name,
  ].join("\n");

  return { subject, html, text };
}

export function buildAdminApplicationEmail(data: ItApplicationEmailData) {
  const subject = `IT application from ${data.fullName}`;

  const html = emailShell({
    preview: `${data.fullName} applied for ${data.trackTitle}.`,
    bodyHtml: `
      <p style="margin:0 0 16px;">
        New IT student application to review.
      </p>
      <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 18px;">
        ${simpleRow("Name", data.fullName)}
        ${simpleRow("Email", data.email)}
        ${simpleRow("Phone", data.phone)}
        ${simpleRow("Track", data.trackTitle)}
        ${simpleRow("School", data.schoolName)}
        ${simpleRow("Department", data.department)}
        ${simpleRow("Level", data.programLevel)}
        ${simpleRow("IT status", formatItStatus(data.itStatus))}
        ${simpleRow("IT start", formatOptionalDate(data.itStartDate))}
        ${simpleRow("IT end", formatOptionalDate(data.itEndDate))}
        ${simpleRow("Notes", data.notes?.trim() || "None")}
        ${simpleLinkRow("School ID", data.schoolIdUrl)}
        ${simpleLinkRow("IT letter", data.itLetterUrl)}
      </table>
      <p style="margin:0;color:${brand.muted};font-size:14px;">
        Reply to this email to reach ${escapeHtml(data.fullName.split(" ")[0] || data.fullName)} directly.
      </p>
    `,
  });

  const text = [
    "New IT student application to review.",
    "",
    `Name: ${data.fullName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Track: ${data.trackTitle}`,
    `School: ${data.schoolName}`,
    `Department: ${data.department}`,
    `Level: ${data.programLevel}`,
    `IT status: ${formatItStatus(data.itStatus)}`,
    `IT start: ${formatOptionalDate(data.itStartDate)}`,
    `IT end: ${formatOptionalDate(data.itEndDate)}`,
    `Notes: ${data.notes?.trim() || "None"}`,
    `School ID: ${data.schoolIdUrl}`,
    `IT letter: ${data.itLetterUrl}`,
  ].join("\n");

  return { subject, html, text };
}
