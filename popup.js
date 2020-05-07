breakwall.onclick = function (element) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: `

// For Bloomberg //
els = document.getElementsByClassName("main-column-v2")
if (els.length > 0) {
  el = els[0]
  blocker = el.getElementsByClassName("paywall-inline-tout")[0]
  blocker.style.display = "none";

  paragraphs = el.getElementsByTagName("p")
  for(let i=0; i < paragraphs.length; i++) {
    if (paragraphs[i].style.display === "none") {
      paragraphs[i].style.display = "";
    }
  }

  tables = el.getElementsByTagName("p")
  for(let i=0; i < tables.length; i++) {
    if (tables[i].style.display === "none") {
      tables[i].style.display = "";
    }
  }
}

// For Economist //
articles = document.getElementsByTagName("article");
if (articles.length > 0) {
  article = articles[0]
  chrome.storage.local.get(window.location.href, function(result) {
    console.log(result[window.location.href])
    article.innerHTML = result[window.location.href]
  });
}

// els = document.getElementsByClassName("paywall")
// if (els.length > 0) {
//   el = els[0]
//   el.style.position = "absolute";
//   el.style.x  = -10000;
//   el.style.y = -10000;

// }

`,
    });
  });
};
