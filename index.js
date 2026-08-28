document.querySelectorAll("a[href]").forEach((a) => {
  const href = a.getAttribute("href");
  if (!href || href.startsWith("#")) return;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
});

document.querySelectorAll(".steam-id").forEach((el) => {
  el.title = "Copy Steam manifest ID";
  const original = el.textContent;
  const id = original.replace(" (Steam)", "").trim();
  let copied;
  el.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(id);
      el.textContent = "Copied!";
      clearTimeout(copied);
      copied = setTimeout(() => {
        el.textContent = original;
      }, 1000);
    } catch {}
  });
});

const navLinks = [...document.querySelectorAll(".sidenav a")];
const miscFold = document.querySelector("#miscellaneous-info details");

function openMiscIfNeeded(hash) {
  if (hash === "#miscellaneous-info" && miscFold) {
    miscFold.open = true;
  }
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => openMiscIfNeeded(link.hash));
});

openMiscIfNeeded(location.hash);

const targets = navLinks
  .map((link) => document.querySelector(link.hash))
  .filter(Boolean);

const setActive = (id) => {
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.hash === `#${id}`);
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((e) => e.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    if (visible[0]) setActive(visible[0].target.id);
  },
  { rootMargin: "0px 0px -65% 0px", threshold: 0.05 }
);

targets.forEach((el) => observer.observe(el));