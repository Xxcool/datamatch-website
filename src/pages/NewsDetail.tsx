import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { getNewsById, newsArticles } from "../data/news";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NewsDetail() {
  const { id } = useParams<{ id: string }>();
  const article = id ? getNewsById(id) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <svg className="h-10 w-10 text-gray-400" viewBox="0 0 24 24" fill="none">
              <path d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">文章未找到</h1>
          <p className="mt-2 text-gray-500">您访问的文章不存在或已被移除</p>
          <Link
            to="/#news"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            返回新闻列表
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedNews = newsArticles.filter((n) => n.id !== article.id).slice(0, 3);

  const colorClasses = {
    brand: {
      gradient: "from-brand-100 to-brand-50",
      circle: "bg-brand-300",
      text: "text-brand-500",
      tag: "text-brand-700",
      bg: "bg-brand-50",
      border: "border-brand-200",
    },
    accent: {
      gradient: "from-accent-100 to-accent-50",
      circle: "bg-accent-300",
      text: "text-accent-500",
      tag: "text-accent-700",
      bg: "bg-accent-50",
      border: "border-accent-200",
    },
    growth: {
      gradient: "from-growth-100 to-growth-50",
      circle: "bg-growth-300",
      text: "text-growth-500",
      tag: "text-growth-700",
      bg: "bg-growth-50",
      border: "border-growth-200",
    },
  };
  const c = colorClasses[article.color];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <article>
        {/* Hero banner */}
        <div className={`bg-gradient-to-br ${c.gradient} pt-28 pb-16 lg:pt-32`}>
          <div className="container-x max-w-3xl">
            <Link
              to="/#news"
              className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              返回新闻列表
            </Link>
            <div className="flex items-center gap-3">
              <span className={`inline-flex items-center rounded-md bg-white/80 px-3 py-1 text-xs font-semibold ${c.tag} backdrop-blur-sm`}>
                {article.tag}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-gray-500">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M3 9H21M8 3V7M16 3V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                {article.date}
              </span>
            </div>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
              {article.title}
            </h1>
          </div>
        </div>

        {/* Article body */}
        <div className="container-x max-w-3xl py-12">
          <div className="space-y-6">
            {article.content.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-gray-700">
                {para}
              </p>
            ))}
          </div>

          {/* Share / back */}
          <div className="mt-12 flex items-center justify-between border-t border-gray-100 pt-8">
            <Link
              to="/#news"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              返回列表
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-400">分享：</span>
              <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-brand-50 hover:text-brand-600">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 5.125 15.0077 5.2475 15.0225 5.3675L8.085 9.42C7.5475 8.555 6.5925 8 5.5 8C3.84315 8 2.5 9.34315 2.5 11C2.5 12.6569 3.84315 14 5.5 14C6.5925 14 7.5475 13.445 8.085 12.58L15.0225 16.6325C15.0077 16.7525 15 16.8775 15 17C15 18.6569 16.3431 20 18 20C19.6569 20 21 18.6569 21 17C21 15.3431 19.6569 14 18 14C16.9075 14 15.9525 14.555 15.415 15.42L8.4775 11.3675C8.4923 11.2475 8.5 11.125 8.5 11C8.5 10.875 8.4923 10.7525 8.4775 10.6325L15.415 6.58C15.9525 7.445 16.9075 8 18 8Z" fill="currentColor" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Related news */}
        <section className="bg-gray-50 py-16">
          <div className="container-x max-w-5xl">
            <h2 className="text-2xl font-bold text-gray-900">更多文章</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {relatedNews.map((item) => {
                const rc = colorClasses[item.color];
                return (
                  <Link
                    key={item.id}
                    to={`/news/${item.id}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className={`relative flex h-32 items-center justify-center overflow-hidden bg-gradient-to-br ${rc.gradient}`}>
                      <div className={`absolute -right-4 -top-4 h-16 w-16 rounded-full opacity-20 transition-all duration-500 group-hover:scale-150 ${rc.circle}`} />
                      <span className={`rounded-md bg-white/90 px-2.5 py-1 text-xs font-semibold ${rc.tag} backdrop-blur-sm`}>
                        {item.tag}
                      </span>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                          <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M3 9H21M8 3V7M16 3V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        {item.date}
                      </div>
                      <h3 className="mt-2 text-sm font-bold leading-snug text-gray-900 line-clamp-2 group-hover:text-brand-600">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-gray-500 line-clamp-2">
                        {item.summary}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  );
}
