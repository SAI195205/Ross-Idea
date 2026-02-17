(() => {
  const burger = document.getElementById("burger");
  const drawer = document.getElementById("drawer");
  const closeBtn = document.getElementById("drawerClose");
  const backdrop = document.getElementById("backdrop");

  if (!burger || !drawer || !closeBtn || !backdrop) return;

  const open = () => document.body.classList.add("nav-open");
  const close = () => document.body.classList.remove("nav-open");

  burger.addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  backdrop.addEventListener("click", close);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });

  drawer.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
})();
