"use client";

import { Mail } from "lucide-react";
import { FormEvent, useState } from "react";
import { CONTACT_EMAIL } from "@/lib/constants";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function createEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`PublishPixel message from ${name || "website visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={createEmail} className="panel grid gap-4 p-5">
      <div className="grid gap-2">
        <label htmlFor="name" className="label">
          Name
        </label>
        <input id="name" className="input" value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="input"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="email"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="label">
          Message
        </label>
        <textarea
          id="message"
          className="input min-h-36"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>
      <button type="submit" className="button-primary">
        <Mail size={17} aria-hidden="true" />
        Create email
      </button>
    </form>
  );
}
