"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Button,
  Heading,
  Input,
  Label,
  Section,
  Text,
  Textarea,
} from "@/components/ui";
import { cn } from "@/lib/cn";
import type { UploadedDocumentRef } from "@/lib/it-application";
import { IT_PROGRAM_LEVELS } from "@/lib/it-application";
import { getItStudentTracks } from "@/lib/it-student";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  track: string;
  schoolName: string;
  department: string;
  programLevel: string;
  itStatus: "" | "current" | "upcoming";
  itStartDate: string;
  itEndDate: string;
  notes: string;
};

type UploadedDoc = UploadedDocumentRef & {
  fileName: string;
  mimeType: string;
};

type DocumentUploadState = {
  status: "idle" | "uploading" | "done" | "error";
  doc?: UploadedDoc;
  error?: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  track: "",
  schoolName: "",
  department: "",
  programLevel: "",
  itStatus: "",
  itStartDate: "",
  itEndDate: "",
  notes: "",
};

const steps = [
  { id: 1, title: "About you" },
  { id: 2, title: "School & IT" },
  { id: 3, title: "Documents" },
] as const;

function FormStepper({ currentStep }: { currentStep: number }) {
  return (
    <nav aria-label="Application progress" className="mb-10">
      <ol className="flex list-none items-start p-0">
        {steps.map((item, index) => {
          const isActive = currentStep === item.id;
          const isComplete = currentStep > item.id;
          const isLast = index === steps.length - 1;

          return (
            <li
              key={item.id}
              className={cn("flex items-start", isLast ? "shrink-0" : "flex-1")}
              aria-current={isActive ? "step" : undefined}
            >
              <div className="flex shrink-0 flex-col items-center">
                <div
                  className={cn(
                    "flex size-9 items-center justify-center rounded-full text-sm font-semibold transition-colors duration-250 ease-[var(--ease)]",
                    isActive &&
                      "bg-brand text-white shadow-[0_0_0_4px_var(--brand-soft)]",
                    isComplete && !isActive && "bg-brand text-white",
                    !isActive &&
                      !isComplete &&
                      "bg-surface-muted text-text-muted",
                  )}
                >
                  {item.id}
                </div>
                <span
                  className={cn(
                    "mt-2 max-w-[6.5rem] text-center text-xs leading-snug sm:max-w-none sm:text-sm",
                    isActive && "font-semibold text-foreground",
                    isComplete && !isActive && "font-medium text-foreground",
                    !isActive && !isComplete && "text-text-muted",
                  )}
                >
                  {item.title}
                </span>
              </div>

              {!isLast ? (
                <div
                  className={cn(
                    "mx-3 mt-[1.125rem] h-0.5 min-w-[1.5rem] flex-1 rounded-full transition-colors duration-250",
                    isComplete ? "bg-brand" : "bg-border",
                  )}
                  aria-hidden="true"
                />
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

const selectClassName =
  "w-full rounded-md border border-border bg-white px-4 py-3 text-base text-foreground transition-colors duration-250 ease-[var(--ease)] hover:border-border-strong focus-visible:border-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30";

async function uploadDocument(file: File, kind: "schoolId" | "itLetter") {
  const body = new FormData();
  body.append("file", file);
  body.append("kind", kind);

  const response = await fetch("/api/it-applications/upload", {
    method: "POST",
    body,
  });

  const data = (await response.json()) as {
    success?: boolean;
    url?: string;
    publicId?: string;
    fileName?: string;
    mimeType?: string;
    error?: string;
  };

  if (!response.ok || !data.url || !data.publicId) {
    throw new Error(data.error ?? "Upload failed");
  }

  return {
    url: data.url,
    publicId: data.publicId,
    fileName: data.fileName ?? file.name,
    mimeType: data.mimeType ?? file.type,
  } satisfies UploadedDoc;
}

function DocumentPreview({ doc }: { doc: UploadedDoc }) {
  return (
    <div className="mt-3 overflow-hidden rounded-md border border-border bg-surface-muted/50">
      <div className="relative aspect-[4/3] max-h-48 w-full bg-white">
        <Image
          src={doc.url}
          alt={doc.fileName}
          fill
          sizes="400px"
          className="object-contain object-center p-2"
        />
      </div>
      <div className="border-t border-border px-3 py-2 text-xs text-text-muted">
        {doc.fileName}
      </div>
    </div>
  );
}

function DocumentUploadField({
  id,
  label,
  kind,
  state,
  onStateChange,
}: {
  id: string;
  label: string;
  kind: "schoolId" | "itLetter";
  state: DocumentUploadState;
  onStateChange: (next: DocumentUploadState) => void;
}) {
  async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";

    if (!file) return;

    onStateChange({ status: "uploading" });

    try {
      const doc = await uploadDocument(file, kind);
      onStateChange({ status: "done", doc });
    } catch (uploadError) {
      onStateChange({
        status: "error",
        error:
          uploadError instanceof Error
            ? uploadError.message
            : "Upload failed",
      });
    }
  }

  function handleClear() {
    onStateChange({ status: "idle" });
  }

  return (
    <div>
      <Label htmlFor={id} required>
        {label}
      </Label>
      <Input
        key={`${id}-${state.status === "idle" ? "empty" : "set"}`}
        id={id}
        name={id}
        type="file"
        accept="image/*"
        disabled={state.status === "uploading"}
        onChange={handleFileChange}
      />
      <p className="mt-1.5 text-xs text-text-muted">
        Images only · max 5MB · uploads immediately
      </p>

      {state.status === "uploading" ? (
        <p className="mt-3 text-sm text-text-muted">Uploading…</p>
      ) : null}

      {state.status === "error" && state.error ? (
        <p className="mt-3 text-sm text-red-600">{state.error}</p>
      ) : null}

      {state.status === "done" && state.doc ? (
        <>
          <DocumentPreview doc={state.doc} />
          <button
            type="button"
            onClick={handleClear}
            className="mt-2 text-sm font-medium text-brand-dark hover:text-brand"
          >
            Replace file
          </button>
        </>
      ) : null}
    </div>
  );
}

export function ItStudentApplyForm() {
  const tracks = useMemo(() => getItStudentTracks(), []);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialState);
  const [schoolIdUpload, setSchoolIdUpload] = useState<DocumentUploadState>({
    status: "idle",
  });
  const [itLetterUpload, setItLetterUpload] = useState<DocumentUploadState>({
    status: "idle",
  });
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function validateStep(currentStep: number) {
    if (currentStep === 1) {
      if (!form.fullName.trim() || !form.email.trim() || !form.phone.trim()) {
        return "Fill in your name, email, and phone number.";
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
        return "Enter a valid email address.";
      }
      if (!form.track) {
        return "Select the program track you want to apply for.";
      }
    }

    if (currentStep === 2) {
      if (!form.schoolName.trim() || !form.department.trim() || !form.programLevel) {
        return "Fill in your school name, department, and program level.";
      }
      if (!form.itStatus) {
        return "Tell us whether you are currently on IT or about to start.";
      }
    }

    if (currentStep === 3) {
      if (schoolIdUpload.status === "uploading" || itLetterUpload.status === "uploading") {
        return "Wait for your documents to finish uploading.";
      }
      if (!schoolIdUpload.doc) {
        return "Upload a clear photo of your school ID.";
      }
      if (!itLetterUpload.doc) {
        return "Upload your IT / SIWES letter.";
      }
    }

    return null;
  }

  function goNext() {
    const message = validateStep(step);
    if (message) {
      setError(message);
      return;
    }
    setError(null);
    setStep((current) => Math.min(current + 1, 3));
  }

  function goBack() {
    setError(null);
    setStep((current) => Math.max(current - 1, 1));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = validateStep(3);
    if (message) {
      setError(message);
      return;
    }

    if (!schoolIdUpload.doc || !itLetterUpload.doc) return;

    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/it-applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          fullName: form.fullName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          schoolName: form.schoolName.trim(),
          department: form.department.trim(),
          notes: form.notes.trim() || undefined,
          schoolId: {
            url: schoolIdUpload.doc.url,
            publicId: schoolIdUpload.doc.publicId,
          },
          itLetter: {
            url: itLetterUpload.doc.url,
            publicId: itLetterUpload.doc.publicId,
          },
        }),
      });

      const data = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok || !data.success) {
        throw new Error(data.error ?? "Unable to submit your application");
      }

      setSubmitted(true);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to submit your application",
      );
    } finally {
      setSubmitting(false);
    }
  }

  const selectedTrack = tracks.find((track) => track.slug === form.track);
  const uploadsInProgress =
    schoolIdUpload.status === "uploading" ||
    itLetterUpload.status === "uploading";

  if (submitted) {
    return (
      <Section spacious className="!pt-10 md:!pt-14">
        <div className="mx-auto max-w-xl text-center">
          <Heading as={1} size="h2">
            Application received
          </Heading>
          <Text size="lead" tone="muted" className="mt-4">
            Thanks, {form.fullName.split(" ")[0]}. Our team will review your
            details and get back to you by email about your IT student discount
            and next steps.
          </Text>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/it-student"
              className="inline-flex min-h-10 items-center justify-center rounded-md border border-brand-mid px-5 text-sm font-medium text-brand-dark transition-colors hover:bg-brand-dark hover:text-white"
            >
              Back to IT page
            </Link>
            <Link
              href="/courses"
              className="inline-flex min-h-10 items-center justify-center rounded-md bg-brand px-5 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
            >
              Browse courses
            </Link>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section spacious className="!pt-4 md:!pt-7">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8">
          <Heading as={1} size="h2" >
            IT student application
          </Heading>
          <Text size="lead" tone="muted" className="mt-3">
            Three short steps. Upload your documents on the last step — we
            review every application before confirming your 50% discount.
          </Text>
        </div>

        <FormStepper currentStep={step} />

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 ? (
            <div className="space-y-5">
              <div>
                <Label htmlFor="fullName" required>
                  Full name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  autoComplete="name"
                  value={form.fullName}
                  onChange={(event) =>
                    updateField("fullName", event.target.value)
                  }
                />
              </div>
              <div>
                <Label htmlFor="email" required>
                  Email address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="phone" required>
                  Phone number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="track" required>
                  Program track
                </Label>
                <select
                  id="track"
                  name="track"
                  className={selectClassName}
                  value={form.track}
                  onChange={(event) => updateField("track", event.target.value)}
                >
                  <option value="">Select a track</option>
                  {tracks.map((track) => (
                    <option key={track.slug} value={track.slug}>
                      {track.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="space-y-5">
              <div>
                <Label htmlFor="schoolName" required>
                  School / institution
                </Label>
                <Input
                  id="schoolName"
                  name="schoolName"
                  value={form.schoolName}
                  onChange={(event) =>
                    updateField("schoolName", event.target.value)
                  }
                />
              </div>
              <div>
                <Label htmlFor="department" required>
                  Department / course of study
                </Label>
                <Input
                  id="department"
                  name="department"
                  placeholder="e.g. Computer Science, Economics, Agriculture"
                  value={form.department}
                  onChange={(event) =>
                    updateField("department", event.target.value)
                  }
                />
              </div>
              <div>
                <Label htmlFor="programLevel" required>
                  Program level
                </Label>
                <select
                  id="programLevel"
                  name="programLevel"
                  className={selectClassName}
                  value={form.programLevel}
                  onChange={(event) =>
                    updateField("programLevel", event.target.value)
                  }
                >
                  <option value="">Select level</option>
                  {IT_PROGRAM_LEVELS.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <Label htmlFor="itStatus" required>
                  IT / SIWES status
                </Label>
                <select
                  id="itStatus"
                  name="itStatus"
                  className={selectClassName}
                  value={form.itStatus}
                  onChange={(event) =>
                    updateField(
                      "itStatus",
                      event.target.value as FormState["itStatus"],
                    )
                  }
                >
                  <option value="">Select status</option>
                  <option value="current">Currently on IT / SIWES</option>
                  <option value="upcoming">Starting IT / SIWES soon</option>
                </select>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="itStartDate">IT start date</Label>
                  <Input
                    id="itStartDate"
                    name="itStartDate"
                    type="date"
                    value={form.itStartDate}
                    onChange={(event) =>
                      updateField("itStartDate", event.target.value)
                    }
                  />
                </div>
                <div>
                  <Label htmlFor="itEndDate">IT end date</Label>
                  <Input
                    id="itEndDate"
                    name="itEndDate"
                    type="date"
                    value={form.itEndDate}
                    onChange={(event) =>
                      updateField("itEndDate", event.target.value)
                    }
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="notes">Anything else we should know?</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={form.notes}
                  onChange={(event) => updateField("notes", event.target.value)}
                />
              </div>
            </div>
          ) : null}

          {step === 3 ? (
            <div className="space-y-5">
              <div className="rounded-[10px] border border-border bg-surface-muted/60 p-5 text-sm leading-relaxed text-text-soft">
                <p className="font-medium text-foreground">Review</p>
                <p className="mt-2">
                  {form.fullName} · {form.email} · {form.phone}
                </p>
                <p className="mt-1">
                  {selectedTrack?.title ?? "Track not selected"} ·{" "}
                  {form.schoolName} · {form.department} · {form.programLevel}
                </p>
              </div>

              <DocumentUploadField
                id="schoolId"
                label="School ID (clear photo or scan)"
                kind="schoolId"
                state={schoolIdUpload}
                onStateChange={setSchoolIdUpload}
              />

              <DocumentUploadField
                id="itLetter"
                label="IT / SIWES letter"
                kind="itLetter"
                state={itLetterUpload}
                onStateChange={setItLetterUpload}
              />
            </div>
          ) : null}

          {error ? (
            <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </p>
          ) : null}

          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
            {step > 1 ? (
              <Button type="button" variant="outline" onClick={goBack}>
                Back
              </Button>
            ) : (
              <span />
            )}

            {step < 3 ? (
              <Button type="button" variant="primary" onClick={goNext}>
                Continue
              </Button>
            ) : (
              <Button
                type="submit"
                variant="primary"
                disabled={submitting || uploadsInProgress}
              >
                {submitting ? "Submitting…" : "Submit application"}
              </Button>
            )}
          </div>
        </form>
      </div>
    </Section>
  );
}
