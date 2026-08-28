"use client";

import { useState } from "react";
import { Button, Input, Label, Textarea } from "@/components/ui";
import { contactSubjects } from "@/lib/contact";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const selectClassName =
  "w-full rounded-md border border-border bg-white px-4 py-3 text-base text-foreground transition-colors duration-250 ease-[var(--ease)] hover:border-border-strong focus-visible:border-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate() {
    if (!form.fullName.trim()) return "Please enter your full name.";
    if (!form.email.trim()) return "Please enter your email address.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      return "Please enter a valid email address.";
    }
    if (!form.subject) return "Please choose a subject.";
    if (!form.message.trim() || form.message.trim().length < 10) {
      return "Please write a short message (at least 10 characters).";
    }
    return null;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setSubmitting(true);
    // Frontend-only for now — success UI; wire to an API later.
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-md border border-brand/25 bg-brand-soft px-6 py-10 text-center sm:px-8"
        role="status"
      >
        <p className="font-display text-2xl font-semibold text-brand-dark">
          Message received
        </p>
        <p className="mx-auto mt-3 max-w-md text-base text-text-soft">
          Thanks, {form.fullName.split(" ")[0]}. We&apos;ll review your note and
          get back to you shortly.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => {
            setForm(initialState);
            setSubmitted(false);
            setError(null);
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="contact-name" required>
            Full name
          </Label>
          <Input
            id="contact-name"
            name="fullName"
            autoComplete="name"
            value={form.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            placeholder="Your full name"
          />
        </div>
        <div>
          <Label htmlFor="contact-email" required>
            Email
          </Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="contact-phone">Phone</Label>
          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="Optional"
          />
        </div>
        <div>
          <Label htmlFor="contact-subject" required>
            Subject
          </Label>
          <select
            id="contact-subject"
            name="subject"
            className={selectClassName}
            value={form.subject}
            onChange={(event) => updateField("subject", event.target.value)}
          >
            <option value="" disabled>
              Select a topic
            </option>
            {contactSubjects.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <Label htmlFor="contact-message" required>
          Message
        </Label>
        <Textarea
          id="contact-message"
          name="message"
          rows={5}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="How can we help?"
        />
      </div>

      {error ? (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}

      <div className="pt-1">
        <Button type="submit" size="lg" disabled={submitting}>
          {submitting ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  );
}
