import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 8, suffix: "+", label: "行业覆盖", desc: "深耕多个垂直领域" },
  { value: 100, suffix: "%", label: "开箱即用", desc: "自动升级免维护" },
  { value: 48, suffix: "h", label: "快速实施", desc: "最快48小时上线" },
  { value: 24, suffix: "/7", label: "全天候支持", desc: "专业技术团队" },
];

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50 via-white to-white" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-brand-200/30 blur-[120px]" />
        <div className="absolute left-0 top-40 h-[400px] w-[400px] rounded-full bg-accent-200/20 blur-[100px]" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
      </div>

      <div className="container-x">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50/80 px-4 py-1.5 text-sm font-medium text-brand-700 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-growth-500 animate-pulse" />
            AI 驱动的数智化供应链解决方案
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            <span className="text-gradient">AI 数智化</span>
            <br />
            轻松赢在数字时代
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 lg:text-xl">
            为中小企业提供花费最少、开箱即用、自动升级的软硬件解决方案。
            将复杂的 AI 数智化转型问题简单化，助您在商业竞争中领先。
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#contact" className="btn-primary group">
              开始数智化转型
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#solutions" className="btn-secondary">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
              </svg>
              了解解决方案
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 lg:mt-20 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute right-4 top-4 h-8 w-8 rounded-full bg-brand-50 transition-colors group-hover:bg-brand-100" />
              <div className="relative">
                <div className="text-3xl font-extrabold text-brand-700 lg:text-4xl">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2 text-sm font-semibold text-gray-900">{stat.label}</div>
                <div className="mt-1 text-xs text-gray-500">{stat.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
