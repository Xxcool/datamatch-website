import { Link } from "react-router-dom";
import { solutions } from "../data/solutions";

const colorClasses = {
  brand: {
    bg: "bg-brand-50",
    text: "text-brand-600",
    tag: "bg-brand-50 text-brand-700",
    hover: "text-brand-700 hover:text-brand-900",
    blob: "bg-brand-500",
    feature: "bg-brand-50/50 text-brand-700",
  },
  accent: {
    bg: "bg-accent-50",
    text: "text-accent-600",
    tag: "bg-accent-50 text-accent-700",
    hover: "text-accent-700 hover:text-accent-900",
    blob: "bg-accent-500",
    feature: "bg-accent-50/50 text-accent-700",
  },
  growth: {
    bg: "bg-growth-50",
    text: "text-growth-600",
    tag: "bg-growth-50 text-growth-700",
    hover: "text-growth-700 hover:text-growth-900",
    blob: "bg-growth-500",
    feature: "bg-growth-50/50 text-growth-700",
  },
};

export default function Solutions() {
  return (
    <section id="solutions" className="section-padding">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent-50 px-4 py-1.5 text-sm font-medium text-accent-700">
            Digital Transformation Solution
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
            数智化转型解决方案
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            数配技术作为一家科技公司，我们将自己定位为赋能中小企业数智化转型独特且可靠的伙伴。
            遵循最小化成本、最大化利益的原则，帮助中小企业突显简单快捷实施方案的重要性。
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {solutions.map((solution) => {
            const c = colorClasses[solution.color];
            return (
              <div
                key={solution.id}
                className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl lg:p-10"
              >
                <div
                  className={`absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-5 transition-all duration-500 group-hover:scale-150 ${c.blob}`}
                />

                <div className="relative flex items-start gap-5">
                  <div
                    className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl ${c.bg} ${c.text} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none">
                      {solution.iconPath.split(" M").map((d, idx) => (
                        <path
                          key={idx}
                          d={idx === 0 ? d : "M" + d}
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      ))}
                    </svg>
                  </div>

                  <div className="flex-1">
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${c.tag}`}>
                      {solution.tag}
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-gray-900 lg:text-2xl">
                      {solution.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600 lg:text-base">
                      {solution.desc}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {solution.features.map((feat) => (
                        <span
                          key={feat}
                          className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium ${c.feature}`}
                        >
                          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {feat}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center gap-4">
                      <Link
                        to={`/solutions/${solution.id}`}
                        className={`inline-flex items-center gap-1.5 text-sm font-semibold ${c.hover}`}
                      >
                        查看详情
                        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                      <span className="text-xs text-gray-400">
                        {solution.cases.length} 个案例
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
