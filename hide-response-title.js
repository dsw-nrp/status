function hideResponseTitle() {
  const path = window.location.pathname.replace(/\/$/, "");

  if (!path.startsWith("/status/history/")) {
    return;
  }

  document.querySelectorAll("h2").forEach(function (heading) {
    if (heading.textContent.trim().toLowerCase().includes("response time")) {
      heading.style.display = "none";
    }
  });
}

function initHideResponseTitle() {
  hideResponseTitle();

  const observer = new MutationObserver(hideResponseTitle);
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  setTimeout(hideResponseTitle, 500);
  setTimeout(hideResponseTitle, 1500);
}

if (document.body) {
  initHideResponseTitle();
} else {
  window.addEventListener("DOMContentLoaded", initHideResponseTitle);
}