import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore educational counselling, application assistance and student support services from NOVA EDUCATION.",
};

const services = [
  {
    number: "01",
    title: "Personalised Educational Counselling",
    description:
      "We help students understand their study options in France and explore programmes that may correspond to their academic background and career objectives.",
    items: [
      "Understanding your academic profile",
      "Exploring suitable programmes",
      "Comparing study options",
      "Understanding the French education system",
      "Planning your academic pathway",
    ],
  },
  {
    number: "02",
    title: "School, University and Programme Selection",
    description:
      "We assist students in identifying and comparing different types of institutions and programmes.",
    items: [
      "Universities",
      "Grandes Écoles",
      "Private higher-education institutions",
      "Specialised schools",
      "Bachelor's and Master's programmes",
    ],
  },
  {
    number: "03",
    title: "Application Assistance",
    description:
      "We provide educational and administrative support throughout the application process.",
    items: [
      "Admission requirements",
      "Application documents",
      "CV preparation",
      "Motivation-letter support",
      "Online application assistance",
      "Application follow-up",
    ],
  },
  {
    number: "04",
    title: "Visa and Administrative Support",
    description:
      "We provide general information and administrative assistance concerning the student visa process.",
    items: [
      "General visa requirements",
      "Supporting-document organisation",
      "Online procedures",
      "Document uploads",
      "Appointment preparation",
    ],
  },
  {
    number: "05",
    title: "Support for Students Already in France",
    description:
      "We help students who wish to change or continue their educational pathway in France.",
    items: [
      "Changing an institution",
      "Changing a programme",
      "Finding a new educational institution",
      "Preparing a new application",
      "Internship and apprenticeship guidance",
    ],
  },
  {
    number: "06",
    title: "Residence Permit and Renewal Support",
    description:
      "We provide general information and administrative assistance with residence-related procedures.",
    items: [
      "Understanding the procedure",
      "Organising required documents",
      "Online procedure assistance",
      "Preparing an administrative file",
      "Administrative follow-up guidance",
    ],
  },
  {
    number: "07",
    title: "Pre-Departure Support",
    description: "We help students prepare before travelling to France.",
    items: [
      "Pre-departure guidance",
      "Life in France",
      "Transport information",
      "Cultural orientation",
      "Post-arrival administrative information",
    ],
  },
  {
    number: "08",
    title: "Accommodation and Arrival Support",
    description:
      "We provide general guidance for preparing an arrival and searching for accommodation.",
    items: [
      "Student residences",
      "Private accommodation",
      "Rental procedures",
      "Housing documents",
      "Transport and daily life",
    ],
  },
  {
    number: "09",
    title: "Post-Arrival Support",
    description:
      "We help students better understand their new environment after arriving in France.",
    items: [
      "Administrative procedures",
      "Student life",
      "Local services",
      "Academic adaptation",
      "Understanding the French environment",
    ],
  },
  {
    number: "10",
    title: "Career and Professional Support",
    description:
      "We help students prepare for their professional future in France.",
    items: [
      "Career orientation",
      "CV improvement",
      "Motivation-letter support",
      "Job-search preparation",
      "Transitioning from studies to professional life",
    ],
  },
  {
    number: "11",
    title: "Alumni and Networking Support",
    description:
      "Depending on available opportunities, we help students prepare for life after graduation.",
    items: [
      "Career-networking guidance",
      "Professional opportunity information",
      "Career planning",
      "Transition guidance",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Practical support for every stage of your education journey"
        description="From programme selection and application preparation to arrival and career guidance, we help students better understand each stage of studying in France."
      />

      <section className="bg-slate-50 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-8">
          {services.map((service) => (
            <article
              key={service.number}
              className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10 lg:grid-cols-[120px_1fr]"
            >
              <div>
                <span className="text-4xl font-extrabold text-[#d9a321]">
                  {service.number}
                </span>
              </div>

              <div>
                <h2 className="text-2xl font-extrabold text-[#052f63]">
                  {service.title}
                </h2>

                <p className="mt-4 max-w-4xl leading-7 text-slate-600">
                  {service.description}
                </p>

                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-slate-700"
                    >
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#d9a321] text-xs font-bold text-[#031f42]">
                        ✓
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#fffaf0] px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl border border-[#d9a321]/30 bg-white p-8 text-center shadow-sm md:p-12">
          <h2 className="text-2xl font-extrabold text-[#052f63]">
            Important information
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-7 text-slate-600">
            NOVA EDUCATION provides educational consultancy, general information
            and administrative assistance. We do not provide legal advice or
            legal representation, and we do not guarantee admission, visa
            approval, residence permit approval, employment, internships or any
            particular academic or professional outcome.
          </p>
          <div className="mt-6 text-center text-sm text-slate-500">
            <Link
              href="/contact"
              className="rounded-full bg-[#031f42] mt-6 px-5 py-3 text-center font-bold text-white hover:bg-[#052f63]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
