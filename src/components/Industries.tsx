const industries = [
  { name: "汽车配件", icon: "M5 11L7 7H17L19 11M5 11V17H7M5 11H19M19 11V17H17M9 17H15M7 11H9M15 11H17" },
  { name: "社区药店", icon: "M4 4H20V20H4V4ZM4 8H20M10 8V20M14 8V20" },
  { name: "家庭装修", icon: "M3 12L12 3L21 12M5 10V21H19V10M9 21V15H15V21" },
  { name: "烟酒茶零售", icon: "M6 2H18V8L12 12L6 8V2ZM6 8L2 10V14L6 12M18 8L22 10V14L18 12" },
  { name: "小五金配件", icon: "M14 10L10 14M7 7L17 17M12 3L21 12L12 21L3 12L12 3Z" },
  { name: "城乡饲料", icon: "M12 2C8 6 6 10 6 14C6 18 9 21 12 21C15 21 18 18 18 14C18 10 16 6 12 2Z" },
  { name: "医疗耗材", icon: "M12 2V22M2 12H22M5 5L19 19M19 5L5 19" },
  { name: "蛋糕甜品", icon: "M4 20H20V12C20 8 16 4 12 4C8 4 4 8 4 12V20ZM4 12H20" },
];

export default function Industries() {
  return (
    <section id="industries" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-growth-50 px-4 py-1.5 text-sm font-medium text-growth-700">
            More Solutions
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
            专为您量身定制数智化解决方案
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            更多面向中小企业的数智化解决方案，覆盖多个行业场景
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((industry, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gray-50 text-gray-400 transition-all duration-300 group-hover:bg-brand-50 group-hover:text-brand-600">
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
                  <path d={industry.icon} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-gray-700 transition-colors group-hover:text-brand-700">
                {industry.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="btn-primary">
            咨询更多行业方案
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
