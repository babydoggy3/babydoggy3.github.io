(() => {
  document.documentElement.classList.add("js");


  // Highlight the tab for the section in view.
  const tabs = [...document.querySelectorAll(".tabs a")];
  const byId = new Map(tabs.map((a) => [a.getAttribute("href").slice(1), a]));
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        tabs.forEach((t) => t.removeAttribute("aria-current"));
        byId.get(e.target.id)?.setAttribute("aria-current", "true");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    byId.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
  }

  // Composer: build a ready-to-send message and open Viber, SMS or email.
  const form = document.getElementById("composer");
  const biz = document.getElementById("biz");
  const err = document.getElementById("composer-error");
  const PHONE = "+639176225100";
  const EMAIL = "daigan.claude@gmail.com";
  let via = "viber";
  form.querySelectorAll("[data-via]").forEach((b) => b.addEventListener("click", () => { via = b.dataset.via; }));
  biz.addEventListener("input", () => { biz.removeAttribute("aria-invalid"); err.hidden = true; });

  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const name = biz.value.trim();
    if (!name) {
      biz.setAttribute("aria-invalid", "true");
      err.hidden = false;
      biz.focus();
      return;
    }
    const want = form.querySelector('input[name="want"]:checked')?.value || "the free online check-up";
    const text = `Hi Claude! This is ${name}. I'd like ${want}.`;
    const enc = encodeURIComponent(text);
    const url = via === "viber"
      ? `viber://chat?number=${encodeURIComponent(PHONE)}&draft=${enc}`
      : via === "sms"
        ? `sms:${PHONE}?&body=${enc}`
        : `mailto:${EMAIL}?subject=${encodeURIComponent(`${name}: ${want}`)}&body=${enc}`;
    window.location.href = url;
  });
})();
