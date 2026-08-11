import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { legalDocs } from "../data/legal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LegalPage() {
  const { type } = useParams<{ type: string }>();
  const doc = type ? legalDocs[type] : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  if (!doc) {
    return (
      <>
        <Navbar />
        <div className="flex min-h-[60vh] items-center justify-center pt-20">
          <div className="text-center">
            <p className="text-lg text-gray-500">页面未找到</p>
            <Link to="/" className="mt-4 inline-block text-brand-600 hover:text-brand-700">
              返回首页
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      {/* Hero banner */}
      <div className="bg-gradient-to-br from-brand-600 to-brand-800 pt-28 pb-16 lg:pt-32">
        <div className="container-x max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/70">
            <Link to="/" className="transition-colors hover:text-white">
              首页
            </Link>
            <span>/</span>
            <span className="text-white">{doc.title}</span>
          </nav>
          <h1 className="mt-6 text-4xl font-bold text-white lg:text-5xl">
            {doc.title}
          </h1>
          <p className="mt-3 text-lg text-white/80">{doc.subtitle}</p>
          <p className="mt-2 text-sm text-white/60">最后更新：{doc.lastUpdated}</p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-gray-50 py-16 lg:py-20">
        <div className="container-x max-w-4xl">
          <div className="rounded-3xl bg-white p-8 shadow-sm lg:p-12">
            <div className="space-y-10">
              {doc.sections.map((section, si) => (
                <div key={si}>
                  {/* Section heading */}
                  {section.heading && (
                    <h2 className="text-xl font-bold text-gray-900 lg:text-2xl">
                      {section.heading}
                    </h2>
                  )}
                  {section.subheading && (
                    <h3 className="mt-4 text-lg font-semibold text-brand-700">
                      {section.subheading}
                    </h3>
                  )}

                  {/* Intro paragraph */}
                  {section.intro && (
                    <p className="mt-4 leading-relaxed text-gray-700">
                      {section.intro}
                    </p>
                  )}

                  {/* Bullet list */}
                  {section.bullets && (
                    <ul className="mt-4 space-y-2.5">
                      {section.bullets.map((bullet, bi) => (
                        <li key={bi} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500" />
                          <span className="leading-relaxed text-gray-700">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Paragraphs */}
                  {section.paragraphs && (
                    <div className="mt-4 space-y-4">
                      {section.paragraphs.map((para, pi) => (
                        <p key={pi} className="leading-relaxed text-gray-700">
                          {para}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Divider + back */}
            <div className="mt-12 border-t border-gray-100 pt-8">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 12H5M5 12L12 19M5 12L12 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                返回首页
              </Link>
            </div>
          </div>

          {/* Related links */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="text-sm text-gray-500">相关文档：</span>
            {type !== "privacy-policy" && (
              <Link
                to="/legal/privacy-policy"
                className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-brand-300 hover:text-brand-600"
              >
                隐私政策
              </Link>
            )}
            {type !== "disclaimer" && (
              <Link
                to="/legal/disclaimer"
                className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-brand-300 hover:text-brand-600"
              >
                免责声明
              </Link>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
