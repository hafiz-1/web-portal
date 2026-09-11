"use client";

import { FormEvent, useState } from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Section>
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500">
              Contact
            </p>

            <h1 className="mt-4 text-5xl font-semibold">
              Let&apos;s talk.
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Tell us what you&apos;re looking to achieve and
              we&apos;ll help you find the right solution.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input
              required
              placeholder="Name"
              className="w-full rounded-xl border p-4"
            />

            <input
              required
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border p-4"
            />

            <select className="w-full rounded-xl border p-4">
              <option>Sales Inquiry</option>
              <option>Existing Customer</option>
              <option>Partnership</option>
              <option>General Inquiry</option>
            </select>

            <textarea
              required
              placeholder="How can we help?"
              rows={6}
              className="w-full rounded-xl border p-4"
            />

            <button
              type="submit"
              className="button-motion rounded-full bg-black px-7 py-3 text-white"
            >
              Submit Inquiry
            </button>

            {submitted && (
              <p className="text-sm text-green-600">
                Thank you. Your inquiry has been submitted.
              </p>
            )}
          </form>
        </div>
      </Container>
    </Section>
  );
}