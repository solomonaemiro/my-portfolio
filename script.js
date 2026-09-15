document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("menuToggle");
  const nav = document.querySelector(".nav ul");
  btn &&
    btn.addEventListener("click", () => {
      if (!nav) return;
      const visible = nav.style.display === "flex";
      nav.style.display = visible ? "none" : "flex";
      nav.style.flexDirection = "column";
      nav.style.background = "var(--bg-2)";
      nav.style.padding = "12px";
      nav.style.position = "absolute";
      nav.style.right = "20px";
      nav.style.top = "64px";
      nav.style.borderRadius = "8px";
    });

  // close mobile menu when a link is clicked
  document.querySelectorAll(".nav a").forEach((a) => {
    a.addEventListener("click", () => {
      const navList = document.querySelector(".nav ul");
      if (window.innerWidth <= 900 && navList) navList.style.display = "none";
    });
  });

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href.length > 1) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  });
});
