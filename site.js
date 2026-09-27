(function () {
  var btn = document.getElementById("menuToggle");
  var drawer = document.getElementById("navDrawer");
  if (!btn || !drawer) return;
  function setOpen(open) {
    drawer.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    drawer.setAttribute("aria-hidden", open ? "false" : "true");
  }
  btn.addEventListener("click", function () {
    setOpen(!drawer.classList.contains("open"));
  });
  drawer.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { setOpen(false); });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });
})();
