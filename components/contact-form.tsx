"use client";

import { FormEvent, useState } from "react";

type StatusState = {
  kind: "idle" | "sending" | "success" | "error";
  message: string;
};

const initialState: StatusState = {
  kind: "idle",
  message: "This form is ready to connect to AWS SES through API Gateway + Lambda.",
};

export function ContactForm() {
  const [status, setStatus] = useState<StatusState>(initialState);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name")?.toString().trim(),
      email: formData.get("email")?.toString().trim(),
      issue: formData.get("issue")?.toString().trim(),
    };

    if (!endpoint) {
      setStatus({
        kind: "error",
        message:
          "Add NEXT_PUBLIC_CONTACT_ENDPOINT to your environment and this form will post directly to your AWS SES workflow.",
      });
      return;
    }

    setStatus({ kind: "sending", message: "Sending..." });

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      setStatus({
        kind: "success",
        message: "Your request was sent. You should hear back within a few hours.",
      });
    } catch {
      setStatus({
        kind: "error",
        message:
          "The request could not be sent right now. Please verify the API Gateway endpoint and CORS settings.",
      });
    }
  }

  return (
    <form className="card contactForm" onSubmit={handleSubmit}>
      <label className="field">
        <span className="fieldLabel">Name</span>
        <input className="fieldInput" type="text" name="name" autoComplete="name" required />
      </label>

      <label className="field">
        <span className="fieldLabel">Email</span>
        <input className="fieldInput" type="email" name="email" autoComplete="email" required />
      </label>

      <label className="field">
        <span className="fieldLabel">Issue Description</span>
        <textarea
          className="fieldTextarea"
          name="issue"
          rows={8}
          required
          placeholder="What is failing, what you’ve tried, and any deadlines or urgency."
        />
      </label>

      <button className="button buttonPrimary" type="submit">
        Send Request
      </button>

      <p className="formStatus" data-kind={status.kind}>
        {status.message}
      </p>
    </form>
  );
}
