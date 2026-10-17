import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "Study in France",
  description:
    "Understand higher-education opportunities and institution types in France.",
};

const studyFields = [
  "Business and management",
  "Engineering",
  "Computer science and technology",
  "Health and life sciences",
  "Social sciences",
  "Arts and design",
  "Hospitality and tourism",
  "Law",
  "Architecture",
  "Communication",
];

const institutions = [
  {
    title: "Universities",
    description:
      "French universities offer a wide range of academic programmes and research opportunities.",
  },
  {
    title: "Grandes Écoles",
    description:
      "Grandes Écoles offer selective and specialised programmes in areas such as business, engineering and public administration.",
  },
  {
    title: "IUT and Professional Programmes",
    description:
      "IUT and other professional programmes provide practical and career-oriented education.",
  },
  {
    title: "Specialised Schools",
    description:
      "Specialised institutions offer programmes in areas such as art, design, architecture, journalism and hospitality.",
  },
];

export default function StudyInFrancePage() {
  return (
    <>
      <PageHeader
        eyebrow="Study in France"
        title="Explore higher-education opportunities in France"
        description="France offers universities, professional programmes, specialised schools and selective institutions across a wide range of academic disciplines."
      />

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#e69c1d]">
              Study Opportunities
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#052f63]">
              Find a field connected to your academic and career goals
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Students can explore higher-education programmes in many fields.
              Programme availability and admission requirements depend on the
              institution, study level and individual applicant profile.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {studyFields.map((field) => (
              <div
                key={field}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 font-semibold text-slate-700"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#e69c1d]" />
                {field}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-[#e69c1d]">
              Types of Institutions
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#052f63] sm:text-4xl">
              Understand the different study environments
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {institutions.map((institution) => (
              <article
                key={institution.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-bold text-[#052f63]">
                  {institution.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {institution.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-[#052f63] p-8 text-white md:p-12">
            <p className="font-bold uppercase tracking-[0.2em] text-[#e69c1d]">
              Degree Structure
            </p>

            <h2 className="mt-4 text-3xl font-extrabold">
              The European LMD structure
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white/10 p-6">
                <p className="text-2xl font-extrabold text-[#e69c1d]">
                  Licence
                </p>
                <p className="mt-2 text-slate-200">Bachelor&apos;s level</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6">
                <p className="text-2xl font-extrabold text-[#e69c1d]">Master</p>
                <p className="mt-2 text-slate-200">Master&apos;s level</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6">
                <p className="text-2xl font-extrabold text-[#e69c1d]">
                  Doctorat
                </p>
                <p className="mt-2 text-slate-200">Doctoral level</p>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-[#e69c1d]/30 bg-[#fffaf0] p-7">
            <h2 className="text-xl font-bold text-[#052f63]">
              Application procedures
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Admission procedures vary according to nationality, country of
              residence, academic level and chosen programme. Students applying
              from countries covered by the Études en France procedure may need
              to use Campus France and other relevant French platforms. Always
              verify the latest requirements through the appropriate official
              sources before submitting an application.
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="rounded-full bg-[#031f42] px-5 py-3 text-center font-bold text-white hover:bg-[#052f63]"
            >
              Discuss Your Study Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
