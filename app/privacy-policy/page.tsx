import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

const collectedInformation = [
  "Name and contact details",
  "Country of residence",
  "Educational and professional background",
  "CV and motivation letter",
  "Diplomas and academic documents",
  "Information about your study project",
  "Application-related documents",
  "Communications with our consultancy",
];

const informationUses = [
  "Responding to enquiries",
  "Providing educational guidance",
  "Assisting with applications",
  "Providing administrative support",
  "Communicating with authorised institutions or partners when necessary",
  "Managing services and administrative obligations",
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Personal Data"
        title="Privacy Policy"
        description="This policy explains the types of personal information PATHORA EDUCATION may collect and how that information may be used."
      />

      <section className="bg-white px-5 py-20 lg:px-8">
        <article className="mx-auto max-w-4xl space-y-10 leading-8 text-slate-600">
          <section>
            <h2 className="text-2xl font-extrabold text-[#052f63]">
              1. Who We Are
            </h2>

            <p className="mt-4">
              This website is operated by PATHORA EDUCATION, operated by Sujan
              Banjara, Entrepreneur Individuel (EI), 41 Rue du Petit Bois, 94000
              Créteil, France.
            </p>

            <p className="mt-3">Email: contact@pathoraeducation.com</p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-[#052f63]">
              2. Information We Collect
            </h2>

            <ul className="mt-4 space-y-2">
              {collectedInformation.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="font-bold text-[#e69c1d]">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-[#052f63]">
              3. How We Use Your Information
            </h2>

            <ul className="mt-4 space-y-2">
              {informationUses.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="font-bold text-[#e69c1d]">•</span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-4 font-bold text-slate-800">
              We do not sell personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-[#052f63]">
              4. Sharing Information
            </h2>

            <p className="mt-4">
              Relevant information may be shared with educational institutions,
              partners or service providers when necessary for the requested
              service, with your authorisation where appropriate, or when
              required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-[#052f63]">
              5. Your Rights
            </h2>

            <p className="mt-4">
              Under applicable data-protection laws, you may have rights to
              access, correct, delete or restrict the processing of your
              personal information and to object to certain processing.
            </p>

            <p className="mt-3">
              To exercise your rights, contact: contact@pathoraeducation.com.
            </p>

            <p className="mt-3">
              You may also contact the CNIL, the French data-protection
              authority.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-[#052f63]">
              6. Cookies
            </h2>

            <p className="mt-4">
              This website may use essential cookies. If non-essential cookies
              or analytics tools requiring consent are used, consent will be
              requested where required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-[#052f63]">
              7. Security
            </h2>

            <p className="mt-4">
              Reasonable measures are taken to protect personal information
              against unauthorised access, loss or misuse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-[#052f63]">
              8. Updates
            </h2>

            <p className="mt-4">
              This Privacy Policy may be updated when necessary. The latest
              version will be published on this page.
            </p>
          </section>
        </article>
      </section>
    </>
  );
}
