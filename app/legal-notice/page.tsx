import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "Legal Notice",
};

export default function LegalNoticePage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal Information"
        title="Legal Notice"
        description="Information concerning the publisher, activity, hosting and intellectual property of the NOVA EDUCATION website."
      />

      <section className="bg-white px-5 py-20 lg:px-8">
        <article className="mx-auto max-w-4xl space-y-10 leading-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-extrabold text-[#052f63]">
              Website Publisher
            </h2>

            <div className="mt-4">
              <p className="font-bold text-slate-800">NOVA EDUCATION</p>
              <p>Operated by Sujan Banjara, Entrepreneur Individuel (EI)</p>
              <p>41 Rue du Petit Bois</p>
              <p>94000 Créteil, France</p>
              <p className="mt-3">SIREN: 130 509 557</p>
              <p>SIRET: 13050955700018</p>
              <p>Email: YOUR_PROFESSIONAL_EMAIL</p>
              <p>Phone: +33 6 60 29 41 56</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-[#052f63]">Activity</h2>

            <p className="mt-4">
              NOVA EDUCATION provides international education consultancy,
              student orientation, application assistance and administrative
              support for students wishing to study or continue their studies in
              France.
            </p>

            <p className="mt-3">
              Our services do not constitute legal advice or legal
              representation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-[#052f63]">
              Publication Director
            </h2>

            <p className="mt-4">Sujan Banjara, Entrepreneur Individuel (EI)</p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-[#052f63]">Hosting</h2>

            <p className="mt-4">
              Add the hosting company name, address and phone number here after
              choosing the website hosting provider.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-[#052f63]">
              Intellectual Property
            </h2>

            <p className="mt-4">
              The content of this website, including text, images, logos and
              other materials, is protected by applicable intellectual property
              laws. Unauthorised reproduction or use is prohibited, except where
              permitted by law.
            </p>
          </section>
        </article>
      </section>
    </>
  );
}
