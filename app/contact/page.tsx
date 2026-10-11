"use client";

import { FormEvent, useState } from "react";
import PageHeader from "../components/PageHeader";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Tell us about your study project"
        description="Share information about your academic background, current situation and objectives. Our team will contact you as soon as possible."
      />

      <section className="bg-slate-50 px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="rounded-3xl bg-[#052f63] p-8 text-white md:p-10">
            <h2 className="text-2xl font-extrabold">Contact information</h2>

            <p className="mt-4 leading-7 text-slate-200">
              Contact NOVA EDUCATION for information about educational
              counselling, applications and administrative support.
            </p>

            <div className="mt-9 space-y-7">
              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-[#f4cf68]">
                  Address
                </p>

                <p className="mt-2 leading-7 text-slate-200">
                  41 Rue du Petit Bois
                  <br />
                  94000 Créteil
                  <br />
                  France
                </p>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-[#f4cf68]">
                  Phone / WhatsApp
                </p>

                <a
                  href="tel:+33660294156"
                  className="mt-2 block leading-7 text-slate-200 transition hover:text-white"
                >
                  +33 6 60 29 41 56
                </a>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-wider text-[#f4cf68]">
                  Email
                </p>

                <a
                  href="mailto:contact@nova-education.fr"
                  className="mt-2 block leading-7 text-slate-200 transition hover:text-white"
                >
                  contact@nova-education.fr
                </a>
              </div>
            </div>
          </aside>

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
                Thank you. Your form has been completed. The form must now be
                connected to an email or form-processing service before it can
                send information to NOVA EDUCATION.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
                    className="w-full resize-y rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#052f63] focus:ring-2 focus:ring-[#052f63]/10"
                  />
                </div>

                <label className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 accent-[#052f63]"
                  />

                  <span>
                    I agree that the information provided may be used to respond
                    to my enquiry in accordance with the Privacy Policy.
                  </span>
                </label>

                <button
                  type="submit"
                  className="rounded-full bg-[#052f63] px-8 py-3.5 font-bold text-white hover:bg-[#031f42]"
                >
                  Send My Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
