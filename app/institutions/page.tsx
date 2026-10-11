import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "Educational Partners",
  description:
    "Discover how NOVA EDUCATION works with institutions and education-sector partners.",
};

const partnerServices = [
  "International student orientation",
  "Student information and guidance",
  "Promotion of educational programmes",
  "Support with international student enquiries",
  "Student recruitment and referral activities",
  "International visibility support",
  "Communication with prospective students",
  "International student engagement support",
];

export default function InstitutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Educational Partners"
        title="Connecting educational institutions with international students"
        description="NOVA EDUCATION works with educational institutions and education-sector partners interested in international student engagement, programme visibility and student orientation."
      />

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#b7800b]">
              Partnership Support
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#052f63] sm:text-4xl">
              Professional relationships based on clear student information
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We aim to create professional relationships between educational
              institutions and international students while helping prospective
              students access clear and useful information about available
              programmes.
            </p>
          </div>

          <div className="grid gap-4">
            {partnerServices.map((service) => (
              <div
                key={service}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#d9a321] text-sm font-bold text-[#031f42]">
                  ✓
                </span>

                <p className="font-semibold text-slate-700">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#052f63] px-5 py-16 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold">
              Interested in working with NOVA EDUCATION?
            </h2>

            <p className="mt-3 max-w-2xl text-slate-200">
              Contact our team and tell us about your institution, programmes
              and international student objectives.
            </p>
          </div>

          <Link
            href="/contact"
            className="rounded-full bg-[#031f42] px-5 py-3 text-center font-bold text-white hover:bg-[#052f63]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
