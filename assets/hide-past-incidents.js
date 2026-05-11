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
}

window.addEventListener("load", runSoon);
window.addEventListener("popstate", runSoon);
window.addEventListener("hashchange", runSoon);

const observer = new MutationObserver(runSoon);

window.addEventListener("DOMContentLoaded", function () {
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});

runSoon();