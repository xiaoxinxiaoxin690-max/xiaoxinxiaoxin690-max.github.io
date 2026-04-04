// 导航栏 - 滚动阴影
window.addEventListener("scroll", () => {
  document.querySelector(".navbar").classList.toggle("scrolled", window.scrollY > 10);
});

// 移动端菜单
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));

navLinks.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

// 滚动显示动画
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  }),
  { threshold: 0.1 }
);

document.querySelectorAll("section, .hero-content").forEach(el => {
  el.classList.add("fade-in");
  observer.observe(el);
});

// 当前页面高亮高亮
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  const sy = window.scrollY + 80;
  sections.forEach(s => {
    const link = document.querySelector(`.nav-links a[href="#${s.id}"]`);
    if (!link) return;
    link.style.color =
      sy >= s.offsetTop && sy < s.offsetTop + s.offsetHeight
        ? "var(--brown-dark)"
        : "";
  });
});
