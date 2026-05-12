function hideResponseTitle() {
  const path = window.location.pathname.replace(/\/$/, "");

  if (path !== "/status") {
    return;
  }

  document.querySelectorAll("h2").forEach(function (heading) {
    if (heading.textContent.trim() === "7-day response time") {
      heading.style.display = "none";
    }
  });
}

window.addEventListener("load", hideResponseTitle);

const observer = new MutationObserver(hideResponseTitle);

observer.observe(document.body, {
  childList: true,
  subtree: true
});