const services = [
  {
    title: "方案咨询",
    desc: "我们根据您的实际情况，提供针对性解决方案。深入调研企业现状，量身定制数智化转型路径。",
    features: ["需求调研", "方案设计", "可行性评估"],
    icon: (
      <>
        <path d="M21 15.5C21 17.433 19.433 19 17.5 19H7L3 22V6.5C3 4.567 4.567 3 6.5 3H17.5C19.433 3 21 4.567 21 6.5V15.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 9H16M8 13H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
    color: "brand",
  },
  {
    title: "快速实施",
    desc: "我们助您以最快速度、最低成本实施。标准化流程加上专业团队，最快48小时上线运行。",
    features: ["标准化流程", "专业团队", "快速上线"],
    icon: (
      <>
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </>
    ),
    color: "accent",
  },
  {
    title: "数智供应链",
    desc: "提供适配各场景的订单管理、智能采购、数字工厂、智慧物流、金融服务、数据分析等全方位全流程数智供应链解决方案。",
    features: ["订单管理", "智能采购", "智慧物流", "数据分析"],
    icon: (
      <>
        <path d="M3 7H21M3 12H21M3 17H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="7" cy="7" r="1.5" fill="currentColor" />
        <circle cx="14" cy="12" r="1.5" fill="currentColor" />
        <circle cx="10" cy="17" r="1.5" fill="currentColor" />
      </>
    ),
    color: "growth",
  },
  {
    title: "金融服务",
    desc: "我们将金融服务嵌入供应链流程中，并对接多家金融机构，满足各环节结算与融资需求。",
    features: ["供应链金融", "多机构对接", "结算融资"],
    icon: (
      <>
        <path d="M12 1V23M17 5H9.5C8.5717 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.5717 6 8.5C6 9.4283 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.5717 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    color: "brand",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
            Our Services
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
            我们的服务
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            我们提供一系列数智化供应链解决方案，能灵活快速满足您的数智化转型需求，
            助您把握数字时代机遇，在市场经营中脱颖而出。
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div
                className={`absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-10 transition-all duration-300 group-hover:scale-150 ${
                  service.color === "brand"
                    ? "bg-brand-500"
                    : service.color === "accent"
                    ? "bg-accent-500"
                    : "bg-growth-500"
                }`}
              />

              <div
                className={`relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${
                  service.color === "brand"
                    ? "bg-brand-50 text-brand-600"
                    : service.color === "accent"
                    ? "bg-accent-50 text-accent-600"
                    : "bg-growth-50 text-growth-600"
                } transition-transform duration-300 group-hover:scale-110`}
              >
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
                  {service.icon}
                </svg>
              </div>

              <h3 className="relative text-xl font-bold text-gray-900">{service.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-gray-600">{service.desc}</p>

              <div className="relative mt-5 flex flex-wrap gap-2">
                {service.features.map((feat) => (
                  <span
                    key={feat}
                    className="rounded-lg bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-600"
                  >
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {["数智化策略", "方案咨询", "快速实施", "社区建设", "全天候支持"].map((tag) => (
            <div
              key={tag}
              className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700"
            >
              <svg className="h-4 w-4 text-growth-500" viewBox="0 0 24 24" fill="none">
                <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
