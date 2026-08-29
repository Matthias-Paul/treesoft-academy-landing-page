import {
  contactSubjects,
  type ContactSubject,
} from "@/lib/contact";

export type ContactMessagePayload = {
  fullName: string;
  email: string;
  phone?: string;
  subject: ContactSubject;
  message: string;
};

export function getContactSubjectLabel(subject: string) {
  return (
    contactSubjects.find((item) => item.value === subject)?.label ?? subject
  );
}

export function isContactSubject(value: string): value is ContactSubject {
  return contactSubjects.some((item) => item.value === value);
}

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function parseContactMessageBody(body: unknown): ContactMessagePayload {
  if (!body || typeof body !== "object") {
    throw new Error("Invalid contact form data");
  }

  const record = body as Record<string, unknown>;
  const fullName = readString(record.fullName);
  const email = readString(record.email);
  const phone = readString(record.phone);
  const subject = readString(record.subject);
  const message = readString(record.message);

  if (!fullName) {
    throw new Error("Please enter your full name");
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Please enter a valid email address");
  }

  if (!isContactSubject(subject)) {
    throw new Error("Please choose a subject");
  }

  if (!message || message.length < 10) {
    throw new Error("Please write a short message (at least 10 characters)");
  }

  return {
    fullName,
    email,
    phone: phone || undefined,
    subject,
    message,
  };
}
