import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", company: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0 -z-0">
        <div className="absolute left-0 top-0 h-[400px] w-[400px] rounded-full bg-brand-600/20 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-accent-600/15 blur-[140px]" />
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="container-x relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-brand-300 backdrop-blur-sm">
              Become a Partner
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
              成为合作伙伴
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-300">
              这里，您将拥有广阔的舞台来施展个人才华，与一群充满激情的专业人士共同探索新技术、开发新产品，
              并见证它们如何改变行业格局。
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  label: "联系电话",
                  value: "400-1600-575",
                  icon: "M3 5C3 3.89543 3.89543 3 5 3H7L9 7L7 8C8 10 10 12 12 13L13 11L17 13V15C17 16.1046 16.1046 17 15 17C9.47715 17 5 12.5228 5 7C5 5.89543 5.89543 5 7 5",
                },
                {
                  label: "电子邮箱",
                  value: "contact@data-match.cn",
                  icon: "M3 5H21V19H3V5ZM3 5L12 13L21 5",
                },
                {
                  label: "公司地址",
                  value: "湖北省武汉市佩尔中心B座11楼",
                  sub: "湖北省武汉市东湖高新区滨湖路26号",
                  icon: "M12 2C8.13 2 5 5.13 5 9C5 13.5 12 22 12 22C12 22 19 13.5 19 9C19 5.13 15.87 2 12 2ZM12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11Z",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                    <svg className="h-6 w-6 text-brand-300" viewBox="0 0 24 24" fill="none">
                      <path d={item.icon} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{item.label}</div>
                    <div className="text-base font-medium text-white">{item.value}</div>
                    {item.sub && <div className="text-sm text-gray-400">{item.sub}</div>}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-xl bg-white p-2">
                <img src="/qrcode.png" alt="数配技术公众号二维码" className="h-full w-full object-contain" />
              </div>
              <div>
                <div className="text-base font-semibold text-white">扫码关注我们</div>
                <div className="mt-1 text-sm text-gray-400">微信扫一扫，关注数配技术官方公众号</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:p-10">
            {submitted ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-growth-500/20">
                  <svg className="h-10 w-10 text-growth-400" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="mt-6 text-2xl font-bold text-white">提交成功！</h3>
                <p className="mt-2 text-gray-400">我们会尽快与您联系，请保持电话畅通。</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white">免费咨询</h3>
                  <p className="mt-2 text-sm text-gray-400">填写以下信息，我们将为您提供专属方案</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-300">姓名 *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-brand-400 focus:bg-white/10"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-gray-300">联系电话 *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-brand-400 focus:bg-white/10"
                      placeholder="请输入联系电话"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-300">电子邮箱 *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-brand-400 focus:bg-white/10"
                    placeholder="请输入电子邮箱"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-300">公司名称 *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-brand-400 focus:bg-white/10"
                    placeholder="请输入公司名称"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-gray-300">需求描述</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-brand-400 focus:bg-white/10"
                    placeholder="简要描述您的数智化需求..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/30 transition-all duration-300 hover:bg-brand-700 hover:shadow-xl active:scale-[0.98]"
                >
                  提交咨询
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
