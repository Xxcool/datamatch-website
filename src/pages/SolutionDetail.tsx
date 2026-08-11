import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { getSolutionById, solutions } from "../data/solutions";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const colorClasses = {
  brand: {
    gradient: "from-brand-100 to-brand-50",
    circle: "bg-brand-300",
    text: "text-brand-500",
    tag: "text-brand-700",
    bg: "bg-brand-50",
    border: "border-brand-200",
    feature: "bg-brand-50/50 text-brand-700",
    button: "bg-brand-600 hover:bg-brand-700",
    hover: "text-brand-700",
  },
  accent: {
    gradient: "from-accent-100 to-accent-50",
    circle: "bg-accent-300",
    text: "text-accent-500",
    tag: "text-accent-700",
    bg: "bg-accent-50",
    border: "border-accent-200",
    feature: "bg-accent-50/50 text-accent-700",
    button: "bg-accent-600 hover:bg-accent-700",
    hover: "text-accent-700",
  },
  growth: {
    gradient: "from-growth-100 to-growth-50",
    circle: "bg-growth-300",
    text: "text-growth-500",
    tag: "text-growth-700",
    bg: "bg-growth-50",
    border: "border-growth-200",
    feature: "bg-growth-50/50 text-growth-700",
    button: "bg-growth-600 hover:bg-growth-700",
    hover: "text-growth-700",
  },
};

export default function SolutionDetail() {
  const { id } = useParams<{ id: string }>();
  const solution = id ? getSolutionById(id) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!solution) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <svg className="h-10 w-10 text-gray-400" viewBox="0 0 24 24" fill="none">
              <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">解决方案未找到</h1>
          <p className="mt-2 text-gray-500">您访问的解决方案不存在或已被移除</p>
          <Link
            to="/#solutions"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            返回解决方案
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const c = colorClasses[solution.color];
  const otherSolutions = solutions.filter((s) => s.id !== solution.id);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero banner */}
      <div className={`bg-gradient-to-br ${c.gradient} pt-28 pb-16 lg:pt-32`}>
        <div className="container-x max-w-4xl">
          <Link
            to="/#solutions"
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            返回解决方案
          </Link>

          <div className="flex items-start gap-5">
            <div className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-white/80 ${c.text} backdrop-blur-sm`}>
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
            <div>
              <span className={`inline-flex items-center rounded-md bg-white/80 px-3 py-1 text-xs font-semibold ${c.tag} backdrop-blur-sm`}>
                {solution.tag}
              </span>
              <h1 className="mt-3 text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
                {solution.title}
              </h1>
            </div>
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-700">
            {solution.desc}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {solution.features.map((feat) => (
              <span
                key={feat}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium bg-white/80 ${c.tag} backdrop-blur-sm`}
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {feat}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Case studies */}
      <section className="section-padding">
        <div className="container-x max-w-5xl">
          <div className="mb-12 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-600">
              Case Studies
            </div>
            <h2 className="text-3xl font-bold text-gray-900">案例展示</h2>
            <p className="mt-3 text-gray-500">
              {solution.cases.length} 个成功案例
            </p>
          </div>

          <div className="space-y-10">
            {solution.cases.map((caseItem, ci) => (
              <div
                key={ci}
                className="overflow-hidden rounded-3xl border border-gray-100 shadow-sm"
              >
                {/* Case image */}
                <div className="relative overflow-hidden">
                  <img
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full object-cover"
                    style={{ maxHeight: "500px" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-sm font-bold text-gray-900 shadow-md backdrop-blur-sm">
                    {ci + 1}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="inline-flex items-center gap-1.5 rounded-md bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700 backdrop-blur-sm">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M3 9H21M8 3V7M16 3V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      {caseItem.date}
                    </span>
                    <h3 className="mt-3 text-2xl font-bold text-white">
                      {caseItem.title}
                    </h3>
                  </div>
                </div>

                {/* Case content */}
                <div className="bg-white p-8 lg:p-10">
                  <p className="text-base leading-relaxed text-gray-700">
                    {caseItem.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-3xl bg-gray-900 p-10 text-center lg:p-14">
            <h3 className="text-2xl font-bold text-white">对该解决方案感兴趣？</h3>
            <p className="mt-3 text-gray-400">
              欢迎联系我们，获取专属的解决方案咨询
            </p>
            <Link
              to="/#contact"
              className={`mt-6 inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold text-white transition-colors ${c.button}`}
            >
              联系我们
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* More solutions */}
      <section className="bg-gray-50 py-16">
        <div className="container-x max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900">更多解决方案</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {otherSolutions.map((item) => {
              const rc = colorClasses[item.color];
              return (
                <Link
                  key={item.id}
                  to={`/solutions/${item.id}`}
                  className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${rc.bg} ${rc.text}`}>
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                      {item.iconPath.split(" M").map((d, idx) => (
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
                  <span className={`mt-4 inline-block w-fit rounded-full px-2.5 py-0.5 text-xs font-semibold ${rc.tag} ${rc.bg}`}>
                    {item.tag}
                  </span>
                  <h3 className="mt-2 text-base font-bold leading-snug text-gray-900 group-hover:text-brand-600">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500 line-clamp-3">
                    {item.desc}
                  </p>
                  <span className={`mt-3 inline-flex items-center gap-1 text-xs font-semibold ${rc.hover}`}>
                    查看详情
                    <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
