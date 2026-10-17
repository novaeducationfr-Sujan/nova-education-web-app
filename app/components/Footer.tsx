import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#052f63] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full bg-white/10">
                <Image
                  src="/images/pathora-logo.png"
                  alt="PATHORA EDUCATION logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">PATHORA EDUCATION</h3>
                <p className="text-sm text-slate-300">
                  Connecting Dreams to Destinations
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-6">
              International education consultancy helping students study,
              succeed, and build their future in France.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>

            <div className="flex flex-col gap-2 text-slate-300">
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/services">Services</Link>
              <Link href="/study-in-france">Study in France</Link>
              <Link href="/institutions">Partners</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Our Services</h4>

            <div className="flex flex-col gap-2 text-slate-300 text-sm">
              <p>Educational Counselling</p>
              <p>University Selection</p>
              <p>Application Assistance</p>
              <p>Visa Guidance</p>
              <p>Accommodation Support</p>
              <p>Career Support</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>

            <div className="space-y-3 text-slate-300 text-sm">
              <p>
                <a
                  href="mailto:contact@pathoraeducation.fr"
                  className="hover:text-white transition-colors"
                >
                  ✉️ contact@pathoraeducation.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+33660294156"
                  className="hover:text-white transition-colors"
                >
                  📞 +33 6 60 29 41 56
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            © 2026 PATHORA EDUCATION. All rights reserved.
          </p>

          <div className="flex gap-5 text-sm text-slate-400">
            <Link href="/legal-notice">Legal Notice</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
