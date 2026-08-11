const features = [
  {
    title: "最小化成本",
    desc: "遵循最小化成本原则，为中小企业提供性价比最高的数智化方案",
    icon: "M12 1V23M17 5H9.5C8.5717 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.5717 6 8.5C6 9.4283 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.5717 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6",
  },
  {
    title: "开箱即用",
    desc: "无需复杂配置，快速部署上线，让企业立即享受数智化带来的效率提升",
    icon: "M21 16V8C21 6.34315 19.6569 5 18 5H6C4.34315 5 3 6.34315 3 8V16M21 16C21 17.6569 19.6569 19 18 19H6C4.34315 19 3 17.6569 3 16M21 16L15.5 12L12 14.5L8 11L3 16",
  },
  {
    title: "自动升级",
    desc: "系统持续迭代进化，自动升级免维护，始终保持最新技术能力",
    icon: "M12 2L13.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z",
  },
  {
    title: "社区建设",
    desc: "建立用户社区，汇聚行业智慧，共享数智化转型经验与最佳实践",
    icon: "M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6435 16.1429M17 20V18C17 17.2714 16.8038 16.5818 16.4592 16M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95557 15 6.80691 15.4468 7.35652 16.1429M7 20V18C7 17.2714 7.19618 16.5818 7.54076 16M12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15Z",
  },
  {
    title: "全天候支持",
    desc: "专业技术团队7x24小时在线支持，随时响应您的需求与问题",
    icon: "M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",
  },
  {
    title: "灵活适配",
    desc: "适配各场景、各行业的灵活方案，满足不同企业的个性化需求",
    icon: "M12 3C7.029 3 3 7.029 3 12C3 16.971 7.029 21 12 21S21 16.971 21 12C21 7.029 16.971 3 12 3ZM12 3V21M3 12H21",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-brand-100/30 blur-[120px]" />
        <div className="absolute left-0 bottom-20 h-[300px] w-[300px] rounded-full bg-accent-100/20 blur-[100px]" />
      </div>

      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
              Our Vision
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
              为什么选择数配技术
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              我们将 AI 数智化视为通往未来的桥梁，助力中小企业简单快捷实现数智化转型，
              从而促进数字时代的创新、增长和繁荣。
            </p>

            <div className="mt-8 space-y-4">
              {[
                "独特且可靠的数智化转型伙伴",
                "最小化成本、最大化利益原则",
                "简单快捷的实施方案",
                "全流程数智供应链覆盖",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-growth-50">
                    <svg className="h-5 w-5 text-growth-600" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-base font-medium text-gray-800">{point}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50/50 p-6">
              <p className="text-sm leading-relaxed text-gray-700">
                <span className="font-semibold text-brand-700">我们的愿景：</span>
                将 AI 数智化视为通往未来的桥梁，助力中小企业简单快捷实现数智化转型，
                从而促进数字时代的创新、增长和繁荣。
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-transform group-hover:scale-110">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                    <path d={feature.icon} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
