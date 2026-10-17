import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Educational Counselling",
    description:
      "Understand your study options and identify programmes that correspond to your academic profile and future goals.",
  },
  {
    number: "02",
    title: "Programme Selection",
    description:
      "Compare universities, schools, specialised institutions and higher-education programmes in France.",
  },
  {
    number: "03",
    title: "Application Assistance",
    description:
      "Receive support with admission requirements, documents, CVs, motivation letters and applications.",
  },
  {
    number: "04",
    title: "Administrative Support",
    description:
      "Get general information and assistance for organising visa, residence and other administrative documents.",
  },
  {
    number: "05",
    title: "Arrival Support",
    description:
      "Prepare for accommodation, transport, student life and important administrative steps after arrival.",
  },
  {
    number: "06",
    title: "Career Guidance",
    description:
      "Prepare your CV, improve your job-search approach and plan your transition into professional life.",
  },
];

const steps = [
  "Tell us about your academic background",
  "Define your study and career objectives",
  "Explore appropriate study options",
  "Prepare your documents and applications",
  "Get ready for your arrival in France",
];

export default function Home() {
  return (
    <>
      <section
        className="relative min-h-170 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/bg-hero-home.png')",
        }}
      >
        <div className="relative mx-auto flex min-h-170 max-w-7xl items-center px-5 py-20 lg:px-8">
          <div>
            <p className="inline-flex rounded-full border border-[#e69c1d]/50 bg-[#e69c1d]/10 px-4 py-2 text-sm font-semibold text-[#e69c1d]">
              International Education Consultancy
            </p>

            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Build your academic future{" "}
              <span className="text-[#e69c1d]">in France</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Personalised guidance for international students choosing,
              applying to and continuing their education in France.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                className="rounded-full bg-[#0c3567] px-5 py-3 text-center font-bold text-white hover:bg-[#e69c1d] hover:text-[#031f42]"
                href="/contact"
              >
                Contact Us
              </Link>

              <Link
                className="rounded-full bg-[#e69c1d] px-5 py-3 text-center font-bold text-[#031f42] hover:bg-[#0c3567] hover:text-white"
                href="/services"
              >
                Explore Our Services
              </Link>
            </div>

            <ul className="mt-10 space-y-3 text-sm text-slate-200">
              <li className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e69c1d] font-bold text-[#031f42]">
                  ✓
                </span>
                Personalised educational guidance
              </li>

              <li className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e69c1d] font-bold text-[#031f42]">
                  ✓
                </span>
                Application and document assistance
              </li>

              <li className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e69c1d] font-bold text-[#031f42]">
                  ✓
                </span>
                Support before and after arrival
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#e69c1d]">
              Welcome to PATHORA EDUCATION
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#052f63] sm:text-4xl">
              Clear guidance throughout your education journey
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-600">
              We support international students at different stages of their
              journey in France. This includes choosing a programme, preparing
              applications, understanding administrative procedures, changing an
              existing study pathway and planning a professional future.
            </p>
            <div className="mt-6 text-lg leading-8 text-slate-600">
              <Link
                href="/about"
                className="rounded-full bg-[#031f42] px-5 py-3 text-center font-bold text-white hover:bg-[#052f63]"
              >
                Learn more about us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-[#e69c1d]">
              Our Services
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#052f63] sm:text-4xl">
              Support adapted to your study project
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Explore practical educational and administrative support for
              studying and building your future in France.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-extrabold text-[#e69c1d]">
                  {service.number}
                </span>

                <h3 className="mt-4 text-xl font-bold text-[#052f63]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full bg-[#031f42] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#052f63]"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#e69c1d]">
              Personalised Approach
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#052f63] sm:text-4xl">
              Every student has a different journey
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Your academic background, study objectives and personal situation
              are unique. Our approach begins by understanding your profile and
              helping you explore options that correspond to your future goals.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-[#031f42] px-5 py-3 text-center font-bold text-white transition hover:bg-[#052f63]"
              >
                Tell Us About Your Project
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#052f63] font-extrabold text-white">
                  {index + 1}
                </span>

                <p className="font-semibold text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e69c1d] px-5 py-16 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-[#031f42]">
              Ready to discuss your study project?
            </h2>

            <p className="mt-3 max-w-2xl text-lg text-[#031f42]/80">
              Tell us about your academic background, objectives and plans for
              studying or continuing your education in France.
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
