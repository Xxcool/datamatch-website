import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-950 py-12">
      <div className="container-x">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5">
              <img src="/logo-footer.png" alt="数配技术" className="h-10 w-auto" />
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-400">
              数配技术有限公司，专注于为中小企业提供 AI 数智化供应链解决方案。
              将复杂的 AI 数智化转型问题简单化，助您轻松赢在数字时代。
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white">快速导航</h4>
            <ul className="mt-4 space-y-2">
              {[
                { label: "我们的使命", href: "/#mission" },
                { label: "核心服务", href: "/#services" },
                { label: "解决方案", href: "/#solutions" },
                { label: "行业覆盖", href: "/#industries" },
                { label: "最新消息", href: "/#news" },
                { label: "联系我们", href: "/#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-gray-400 transition-colors hover:text-brand-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white">联系我们</h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-400" viewBox="0 0 24 24" fill="none">
                  <path d="M3 5C3 3.89543 3.89543 3 5 3H7L9 7L7 8C8 10 10 12 12 13L13 11L17 13V15C17 16.1046 16.1046 17 15 17C9.47715 17 5 12.5228 5 7C5 5.89543 5.89543 5 7 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>400-1600-575</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-400" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 13.5 12 22 12 22C12 22 19 13.5 19 9C19 5.13 15.87 2 12 2ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>湖北省武汉市佩尔中心B座11楼<br />(湖北省武汉市东湖高新区滨湖路26号)</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white">解决方案</h4>
            <ul className="mt-4 space-y-2">
              {[
                { label: "食材供应链", to: "/solutions/food-supply-chain" },
                { label: "生果供应链", to: "/solutions/fruit-supply-chain" },
                { label: "快消品供应链", to: "/solutions/fmcg-supply-chain" },
                { label: "平面智能仓库", to: "/solutions/flat-ai-warehouse" },
                { label: "更多行业方案", to: "/#solutions" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-sm text-gray-400 transition-colors hover:text-brand-400">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-500">
              (c) {new Date().getFullYear()} 数配技术有限公司. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/legal/privacy-policy" className="text-sm text-gray-500 transition-colors hover:text-gray-300">隐私政策</Link>
              <Link to="/legal/disclaimer" className="text-sm text-gray-500 transition-colors hover:text-gray-300">免责声明</Link>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 transition-colors hover:text-brand-400"
            >
              鄂ICP备2022014340号
            </a>
            <span className="text-gray-700">|</span>
            <a
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42018502006953"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-brand-400"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L4 5V11C4 16 7 20 12 22C17 20 20 16 20 11V5L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              鄂公网安备42018502006953号
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
