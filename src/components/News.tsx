import { Link } from "react-router-dom";

const news = [
  {
    id: "8014620",
    title: "农业食材数字供应链成功上线",
    date: "2025-02-10",
    desc: "数配技术公司成功发布首个农业食材数字供应链智能交易系统。通过数字化技术，解决了农业食材供应链中小而散、环节繁多、数据不共享及食品安全隐患等问题，为金融机构提供嵌入式供应链金融服务。",
    tag: "食材供应链",
    color: "growth",
    icon: (
      <>
        <path d="M12 2C8 2 5 5 5 9C5 12 7 14 12 22C17 14 19 12 19 9C19 5 16 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </>
    ),
  },
  {
    title: "首个城市生果供应链成功上线",
    date: "2025-02-10",
    desc: "数配技术公司成功推出城市生果数字供应链智能交易系统，解决了传统生果供应链中小而散、损耗大、信息孤岛、新鲜度不足等难题，确保生果质量的稳定性。",
    tag: "生果供应链",
    color: "accent",
    icon: (
      <>
        <path d="M12 3C10 3 8 5 8 8C8 12 12 21 12 21C12 21 16 12 16 8C16 5 14 3 12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 3C12 3 13 2 15 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    id: "8014856",
    title: "首个快消品供应链成功上线",
    date: "2025-02-10",
    desc: "数配技术公司推出首个快消品数字供应链智能交易系统。通过数字化手段解决了社区商店及超市面临的小而散、物流成本高、数据孤岛及补货不及时等难题。",
    tag: "快消品供应链",
    color: "brand",
    icon: (
      <>
        <path d="M3 7H17V17H3V7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M17 10H20L22 12V15H17" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="7" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
      </>
    ),
  },
  {
    id: "8014863",
    title: "首个平面智能仓库成功上线",
    date: "2025-02-10",
    desc: "数配技术公司成功推出首个平面智能仓库解决方案，借助数字化技术，解决了传统仓储面临的智能出入库、移货、数据物联及库位动态管理等核心难题，成为平面智能仓储发展的重要里程碑。",
    tag: "平面智能仓库",
    color: "brand",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 9H21M9 3V21" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 13L17 16L14 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
];

export default function News() {
  return (
    <section id="news" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
            Latest News
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
            最新消息
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            了解数配技术最新动态与行业资讯
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {news.map((item, i) => (
            <article
              key={i}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* 图片占位区 - 渐变背景 + 图标 */}
              <div
                className={`relative flex h-44 items-center justify-center overflow-hidden ${
                  item.color === "brand"
                    ? "bg-gradient-to-br from-brand-100 to-brand-50"
                    : item.color === "accent"
                    ? "bg-gradient-to-br from-accent-100 to-accent-50"
                    : "bg-gradient-to-br from-growth-100 to-growth-50"
                }`}
              >
                <div
                  className={`absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-20 transition-all duration-500 group-hover:scale-150 ${
                    item.color === "brand"
                      ? "bg-brand-300"
                      : item.color === "accent"
                      ? "bg-accent-300"
                      : "bg-growth-300"
                  }`}
                />
                <svg
                  className={`h-16 w-16 transition-transform duration-500 group-hover:scale-110 ${
                    item.color === "brand"
                      ? "text-brand-500"
                      : item.color === "accent"
                      ? "text-accent-500"
                      : "text-growth-500"
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  {item.icon}
                </svg>
                <span
                  className={`absolute bottom-3 left-3 rounded-md bg-white/90 px-2.5 py-1 text-xs font-semibold backdrop-blur-sm ${
                    item.color === "brand"
                      ? "text-brand-700"
                      : item.color === "accent"
                      ? "text-accent-700"
                      : "text-growth-700"
                  }`}
                >
                  {item.tag}
                </span>
              </div>

              {/* 内容区 */}
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M3 9H21M8 3V7M16 3V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  {item.date}
                </div>
                <h3 className="mt-2 text-sm font-bold leading-snug text-gray-900 line-clamp-2">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-gray-500 line-clamp-4">
                  {item.desc}
                </p>
                <Link
                  to={`/news/${item.id}`}
                  className={`mt-4 inline-flex items-center gap-1 text-xs font-semibold ${
                    item.color === "brand"
                      ? "text-brand-700 hover:text-brand-900"
                      : item.color === "accent"
                      ? "text-accent-700 hover:text-accent-900"
                      : "text-growth-700 hover:text-growth-900"
                  }`}
                >
                  阅读更多
                  <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
