export function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function useScrollSpy() {
  if (typeof window === "undefined") return "";
  const sections = ["home", "mission", "services", "solutions", "industries", "about", "contact"];
  const scrollPos = window.scrollY + 100;

  for (const section of sections) {
    const el = document.getElementById(section);
    if (el) {
      const top = el.offsetTop;
      const bottom = top + el.offsetHeight;
      if (scrollPos >= top && scrollPos < bottom) {
        return section;
      }
    }
  }
  return "";
}
