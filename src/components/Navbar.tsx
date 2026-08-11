import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "首页", href: "/#home" },
  { label: "使命", href: "/#mission" },
  { label: "服务", href: "/#services" },
  { label: "解决方案", href: "/#solutions" },
  { label: "行业", href: "/#industries" },
  { label: "最新消息", href: "/#news" },
  { label: "联系我们", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On non-home pages, always show solid background
  const navBg = !isHome || scrolled
    ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100"
    : "bg-transparent";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <nav className="container-x flex h-16 items-center justify-between lg:h-20">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/logo-header.png" alt="数配技术" className="h-9 w-auto lg:h-10" />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link to="/#contact" className="btn-primary !py-2.5 !text-sm">
            免费咨询
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <div className="container-x space-y-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-700"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/#contact" className="btn-primary mt-2 w-full" onClick={() => setMobileOpen(false)}>
              免费咨询
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
