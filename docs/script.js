document.querySelectorAll("[data-countup]").forEach((el) => {
  const end = Number(el.dataset.countup);
  const prefix = el.dataset.prefix || "";
  const duration = 1200;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    el.textContent = prefix + end.toLocaleString("zh-TW");
    return;
  }

  el.textContent = prefix + "0";

  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    const startedAt = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = prefix + Math.round(end * eased).toLocaleString("zh-TW");
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
    observer.disconnect();
  }, { threshold: 0.35 });

  observer.observe(el);
});
