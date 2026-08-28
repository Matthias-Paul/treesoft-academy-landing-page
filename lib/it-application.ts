import { itStudentTrackSlugs } from "@/lib/it-student";

export const IT_PROGRAM_LEVELS = [
  "300 Level",
  "400 Level",
  "ND",
  "HND",
  "Other",
] as const;

export type ItApplicationPayload = {
  fullName: string;
  email: string;
  phone: string;
  track: string;
  schoolName: string;
  department: string;
  programLevel: string;
  itStatus: "current" | "upcoming";
  itStartDate?: string;
  itEndDate?: string;
  notes?: string;
};

export type UploadedDocumentRef = {
  url: string;
  publicId: string;
};

export type ItApplicationSubmitBody = ItApplicationPayload & {
  schoolId: UploadedDocumentRef;
  itLetter: UploadedDocumentRef;
};

export function isValidTrack(track: string) {
  return (itStudentTrackSlugs as readonly string[]).includes(track);
}

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function parseDocumentRef(value: unknown, label: string): UploadedDocumentRef {
  if (!value || typeof value !== "object") {
    throw new Error(`${label} upload is required`);
  }

  const record = value as Record<string, unknown>;
  const url = readString(record.url);
  const publicId = readString(record.publicId);

  if (!url || !publicId) {
    throw new Error(`${label} upload is required`);
  }

  return { url, publicId };
}

export function parseItApplicationBody(body: unknown): ItApplicationSubmitBody {
  if (!body || typeof body !== "object") {
    throw new Error("Invalid application data");
  }

  const record = body as Record<string, unknown>;

  const fullName = readString(record.fullName);
  const email = readString(record.email);
  const phone = readString(record.phone);
  const track = readString(record.track);
  const schoolName = readString(record.schoolName);
  const department = readString(record.department);
  const programLevel = readString(record.programLevel);
  const itStatus = readString(record.itStatus);
  const itStartDate = readString(record.itStartDate);
  const itEndDate = readString(record.itEndDate);
  const notes = readString(record.notes);

  if (!fullName || !email || !phone) {
    throw new Error("Name, email, and phone are required");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Enter a valid email address");
  }

  if (!isValidTrack(track)) {
    throw new Error("Select a valid program track");
  }

  if (!schoolName || !department || !programLevel) {
    throw new Error("School name, department, and program level are required");
  }

  if (itStatus !== "current" && itStatus !== "upcoming") {
    throw new Error("Select your IT / SIWES status");
  }

  return {
    fullName,
    email,
    phone,
    track,
    schoolName,
    department,
    programLevel,
    itStatus,
    itStartDate: itStartDate || undefined,
    itEndDate: itEndDate || undefined,
    notes: notes || undefined,
    schoolId: parseDocumentRef(record.schoolId, "School ID"),
    itLetter: parseDocumentRef(record.itLetter, "IT letter"),
  };
}

export function parseItApplicationFields(formData: FormData): ItApplicationPayload {
  const fullName = String(formData.get("fullName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const track = String(formData.get("track") ?? "").trim();
  const schoolName = String(formData.get("schoolName") ?? "").trim();
  const department = String(formData.get("department") ?? "").trim();
  const programLevel = String(formData.get("programLevel") ?? "").trim();
  const itStatus = String(formData.get("itStatus") ?? "").trim();
  const itStartDate = String(formData.get("itStartDate") ?? "").trim();
  const itEndDate = String(formData.get("itEndDate") ?? "").trim();
  const notes = String(formData.get("notes") ?? "").trim();

  if (!fullName || !email || !phone) {
    throw new Error("Name, email, and phone are required");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Enter a valid email address");
  }

  if (!isValidTrack(track)) {
    throw new Error("Select a valid program track");
  }

  if (!schoolName || !department || !programLevel) {
    throw new Error("School name, department, and program level are required");
  }

  if (itStatus !== "current" && itStatus !== "upcoming") {
    throw new Error("Select your IT / SIWES status");
  }

  return {
    fullName,
    email,
    phone,
    track,
    schoolName,
    department,
    programLevel,
    itStatus,
    itStartDate: itStartDate || undefined,
    itEndDate: itEndDate || undefined,
    notes: notes || undefined,
  };
}

export function parseOptionalDate(value?: string) {
  if (!value) return undefined;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    throw new Error("Enter a valid date");
  }
  return date;
}
