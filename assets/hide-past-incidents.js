function hidePastIncidents() {
  const path = window.location.pathname.replace(/\/$/, "");

  if (path !== "/status") {
    return;
  }

  document.querySelectorAll("section").forEach(function (section) {
    const heading = section.querySelector("h2");

    if (heading && heading.textContent.trim() === "Past Incidents") {
      section.style.display = "none";
    }
  });
}

function runSoon() {
  hidePastIncidents();
  setTimeout(hidePastIncidents, 100);
  setTimeout(hidePastIncidents, 500);
  setTimeout(hidePastIncidents, 1000);
}

function hookHistory(method) {
  const original = history[method];

  history[method] = function () {
    const result = original.apply(this, arguments);
    runSoon();
    return result;
  };
}

hookHistory("pushState");
hookHistory("replaceState");

window.addEventListener("popstate", runSoon);
window.addEventListener("hashchange", runSoon);
window.addEventListener("load", runSoon);
document.addEventListener("DOMContentLoaded", runSoon);

const observer = new MutationObserver(runSoon);
observer.observe(document.documentElement, {
  childList: true,
  subtree: true
});

runSoon();