import nodemailer from "nodemailer";

function stripEnvQuotes(value: string) {
  return value.replace(/^["']|["']$/g, "").trim();
}

export function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const secure = process.env.SMTP_SECURE === "true";
  const fromRaw =
    process.env.SMTP_FROM ??
    (user ? `Treesoft Academy <${user}>` : undefined);
  const from = fromRaw ? stripEnvQuotes(fromRaw) : undefined;
  const adminEmail = stripEnvQuotes(
    process.env.ADMIN_EMAIL ?? process.env.CONTACT_EMAIL ?? "",
  );
  const adminCcEmails = (process.env.ADMIN_CC_EMAIL ?? "")
    .split(",")
    .map((email) => stripEnvQuotes(email))
    .filter(Boolean);

  if (!host || !user || !pass || !from) {
    throw new Error(
      "SMTP is not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASS, and SMTP_FROM in .env.local",
    );
  }

  if (!adminEmail) {
    throw new Error("ADMIN_EMAIL must be set in .env.local");
  }

  return {
    host,
    port,
    secure,
    user,
    pass,
    from,
    adminEmail,
    adminCcEmails,
  };
}

export function createMailTransport() {
  const { host, port, secure, user, pass } = getSmtpConfig();

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    requireTLS: !secure && port === 587,
    tls: {
      // Shared hosting certs are often mismatched; still encrypt the session.
      minVersion: "TLSv1.2",
    },
    connectionTimeout: 20_000,
    greetingTimeout: 20_000,
    socketTimeout: 30_000,
  });
}
