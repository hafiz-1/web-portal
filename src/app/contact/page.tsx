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
    <Section className="bg-[#f8fbf7]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500">
              Contact
            </p>

            <h1 className="page-title mt-4">
              Let&apos;s talk.
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Tell us what you&apos;re looking to achieve and
              we&apos;ll help you find the right solution.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="surface-card space-y-5 p-6 sm:p-8"
          >
            <input
              required
              placeholder="Name"
              className="field"
            />

            <input
              required
              type="email"
              placeholder="Email"
              className="field"
            />

            <select className="field">
              <option>Sales Inquiry</option>
              <option>Existing Customer</option>
              <option>Partnership</option>
              <option>General Inquiry</option>
            </select>

            <textarea
              required
              placeholder="How can we help?"
              rows={6}
              className="field resize-y"
            />

            <button
              type="submit"
              className="button-motion rounded-full bg-[#7BC96F] px-7 py-3 text-black hover:bg-[#91D985]"
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
