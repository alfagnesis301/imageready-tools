"use client";

import { Loader2, Mail } from "lucide-react";
import { FormEvent, useState } from "react";

type FormStatus = "idle" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submitMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("idle");
    setIsSubmitting(true);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          name,
          email,
          message
        }).toString()
      });

      if (!response.ok) {
        throw new Error("The message could not be sent.");
      }

      setName("");
      setEmail("");
      setMessage("");
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={submitMessage}
      className="panel grid gap-4 p-5"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Do not fill this out: <input name="bot-field" tabIndex={-1} />
        </label>
      </p>
      <div className="grid gap-2">
        <label htmlFor="name" className="label">
          Name
        </label>
        <input
          id="name"
          name="name"
          className="input"
          value={name}
          onChange={(event) => setName(event.target.value)}
          autoComplete="name"
          required
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="input"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="email"
          required
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="input min-h-36"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
      </div>
      <button type="submit" className="button-primary" disabled={isSubmitting}>
        {isSubmitting ? (
          <Loader2 size={17} className="animate-spin" aria-hidden="true" />
        ) : (
          <Mail size={17} aria-hidden="true" />
        )}
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
      {status === "success" ? (
        <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-900 dark:border-emerald-900/70 dark:bg-emerald-950/40 dark:text-emerald-200" role="status">
          Thanks. Your message was sent.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800 dark:border-red-900/70 dark:bg-red-950/40 dark:text-red-200" role="alert">
          The message could not be sent. Please email hello@publishpixel.net directly.
        </p>
      ) : null}
    </form>
  );
}
