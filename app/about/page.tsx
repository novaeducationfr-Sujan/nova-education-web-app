import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the mission and personalised approach of NOVA EDUCATION.",
};

const values = [
  {
    title: "Personalised Guidance",
    description:
      "Support based on each student's academic background, study project and professional objectives.",
  },
  {
    title: "Clear Information",
    description:
      "Practical explanations that help students better understand their options and responsibilities.",
  },
  {
    title: "Informed Decisions",
    description:
      "Guidance designed to help students compare available pathways and make thoughtful decisions.",
  },
  {
    title: "Long-Term Perspective",
    description:
      "Support that considers academic progress, administrative preparation and future professional goals.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Supporting international students throughout their journey in France"
        description="NOVA EDUCATION provides personalised educational guidance and practical administrative support for students planning to study or continue their education in France."
      />

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#b7800b]">
              Our Mission
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#052f63]">
              Helping students build successful academic and professional
              pathways
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              Our mission is to provide personalised guidance and practical
              support to international students throughout their educational
              journey in France.
            </p>

            <p>
              From choosing a programme and educational institution to preparing
              applications, changing study pathways, managing administrative
              procedures and planning a professional future, we support students
              at different stages of their journey.
            </p>

            <p>
              We aim to help students understand their options, make informed
              decisions and create an academic pathway connected to their
              objectives.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.2em] text-[#b7800b]">
              Our Approach
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#052f63] sm:text-4xl">
              Guidance designed around each student
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Every student has a different academic background, career
              objective and personal situation. We therefore provide guidance
              based on the individual profile, study project and future goals of
              each student.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-5 h-1 w-14 rounded-full bg-[#d9a321]" />

                <h3 className="text-xl font-bold text-[#052f63]">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#052f63] px-5 py-16 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold">
              Tell us about your study project
            </h2>

            <p className="mt-3 max-w-2xl text-slate-200">
              Contact our team and provide information about your academic
              background, current situation and objectives.
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
