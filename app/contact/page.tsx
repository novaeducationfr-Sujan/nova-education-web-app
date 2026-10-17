"use client";

import { useState, type FormEvent } from "react";
import PageHeader from "../components/PageHeader";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "c2ea6e14-05d1-4efb-8d95-d1bb8d43d826");
    formData.append("subject", "New enquiry from PATHORA EDUCATION website");
    formData.append("from_name", "PATHORA EDUCATION Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        form.reset();
        setSubmitted(true);
      } else {
        console.error("Web3Forms error:", data);

        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Contact form error:", error);

      setError(
        "We could not send your request. Please try again or contact us directly.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Tell us about your study project"
        description="Share information about your academic background, current situation and objectives. Our team will contact you as soon as possible."
      />

      <section className="bg-slate-50 px-5 py-20 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <aside className="rounded-3xl bg-[#052f63] p-8 text-white md:p-10">
            <h2 className="text-2xl font-extrabold">Contact information</h2>

            <p className="mt-4 leading-7 text-slate-200">
              Contact PATHORA EDUCATION for information about educational
              counselling, applications and administrative support.
            </p>

            <div className="mt-9 space-y-7">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-[#e69c1d]">
                  Email
                </p>

                <a
                  href="mailto:contact@pathoraeducation.com"
                  className="mt-2 block leading-7 text-slate-200 transition hover:text-white"
                >
                  contact@pathoraeducation.com
                </a>
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-[#e69c1d]">
                  Phone / WhatsApp
                </p>

                <a
                  href="tel:+33660294156"
                  className="mt-2 block leading-7 text-slate-200 transition hover:text-white"
                >
                  +33 6 60 29 41 56
                </a>
              </div>
            </div>
          </aside>

          {/* Contact Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
            <h2 className="text-2xl font-extrabold text-[#052f63]">
              Contact form
            </h2>

            <p className="mt-3 text-slate-600">
              Complete the form and provide some information about your study
              project.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6 text-green-800">
                <h3 className="font-bold">
                  Thank you for contacting PATHORA EDUCATION.
                </h3>

                <p className="mt-2 leading-7">
                  Your request has been sent successfully. Our team will get
                  back to you as soon as possible.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-5 font-semibold text-[#052f63] hover:underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-2 block text-sm font-bold text-slate-700"
                    >
                      First name
                    </label>

                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      maxLength={50}
                      autoComplete="given-name"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#052f63] focus:ring-2 focus:ring-[#052f63]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-2 block text-sm font-bold text-slate-700"
                    >
                      Last name
                    </label>

                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      maxLength={50}
                      autoComplete="family-name"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#052f63] focus:ring-2 focus:ring-[#052f63]/10"
                    />
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-bold text-slate-700"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={254}
                      autoComplete="email"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#052f63] focus:ring-2 focus:ring-[#052f63]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-bold text-slate-700"
                    >
                      Phone or WhatsApp
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      maxLength={25}
                      autoComplete="tel"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#052f63] focus:ring-2 focus:ring-[#052f63]/10"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="country"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    Country of residence
                  </label>

                  <input
                    id="country"
                    name="country"
                    type="text"
                    required
                    maxLength={60}
                    autoComplete="country-name"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#052f63] focus:ring-2 focus:ring-[#052f63]/10"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    Service required
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-[#052f63] focus:ring-2 focus:ring-[#052f63]/10"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    <option>Educational counselling</option>
                    <option>Programme selection</option>
                    <option>Application assistance</option>
                    <option>Visa administrative support</option>
                    <option>Support for students in France</option>
                    <option>Residence renewal administrative support</option>
                    <option>Arrival and accommodation guidance</option>
                    <option>Career guidance</option>
                    <option>Institutional partnership</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    Tell us about your study project
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    required
                    minLength={20}
                    maxLength={2000}
                    className="w-full resize-y rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#052f63] focus:ring-2 focus:ring-[#052f63]/10"
                  />
                  <p className="mt-2 text-right text-xs text-slate-400">
                    Maximum 2000 characters
                  </p>
                </div>
                <label className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                  <input
                    type="checkbox"
                    name="privacyConsent"
                    value="Accepted"
                    required
                    className="mt-1 h-4 w-4 accent-[#052f63]"
                  />

                  <span>
                    I agree that the information provided may be used to respond
                    to my enquiry in accordance with the{" "}
                    <a
                      href="/privacy-policy"
                      className="text-blue-500 underline hover:text-blue-700"
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>

                {/* Error */}
                {error && (
                  <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-full bg-[#052f63] px-8 py-3.5 font-bold text-white transition hover:bg-[#031f42] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send My Request"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
