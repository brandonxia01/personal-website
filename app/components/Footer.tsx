import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">
              About
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              A passionate developer building clean, modern web experiences with Next.js and Tailwind CSS.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">
              Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-gray-600 hover:text-black transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-gray-600 hover:text-black transition-colors text-sm"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-600 hover:text-black transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors text-sm"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors text-sm"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@example.com"
                  className="text-gray-600 hover:text-black transition-colors text-sm"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-600 text-sm">
            © {currentYear} Brandon Xia. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link
              href="#"
              className="text-gray-600 hover:text-black transition-colors text-sm"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-black transition-colors text-sm"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
