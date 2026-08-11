export default function Mission() {
  return (
    <section id="mission" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 -z-10 dot-pattern opacity-30" />

      <div className="container-x">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-growth-50 px-4 py-1.5 text-sm font-medium text-growth-700">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            Our Mission
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
            我们的使命
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600 lg:text-xl">
            将复杂的 <span className="font-semibold text-brand-700">AI 数智化转型</span> 问题简单化，
            为各行各业中小企业 AI 数智化转型，提供
            <span className="font-semibold text-brand-700"> 花费最少、开箱即用、自动升级</span> 的软硬件解决方案。
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: (
                <path d="M9 12L11 14L15 10M21 12C21 16.971 16.971 21 12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3C16.971 3 21 7.029 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              ),
              title: "简单化",
              desc: "将复杂的数智化转型拆解为简单可执行的步骤，降低企业转型门槛",
              color: "brand",
            },
            {
              icon: (
                <>
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </>
              ),
              title: "快速化",
              desc: "以最快速度、最低成本实施，让企业在最短时间内看到转型效果",
              color: "accent",
            },
            {
              icon: (
                <>
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M19.4 15A1.65 1.65 0 0019.5 14.82L20.8 14.06A1.65 1.65 0 0020.8 11.94L19.5 11.18A1.65 1.65 0 0019.4 11M12 2L13.09 8.26L22 9.27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </>
              ),
              title: "自动化",
              desc: "开箱即用、自动升级，企业无需专门维护，系统持续迭代进化",
              color: "growth",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${
                  item.color === "brand"
                    ? "bg-brand-50 text-brand-600"
                    : item.color === "accent"
                    ? "bg-accent-50 text-accent-600"
                    : "bg-growth-50 text-growth-600"
                } transition-transform group-hover:scale-110`}
              >
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
                  {item.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
