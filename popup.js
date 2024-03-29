breakwall.onclick = function (element) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: `

// For Bloomberg //
el = document.getElementById('graphics-paywall-overlay')
if (el) {
  el.style.display = "none";
}

el = document.getElementById('fortress-paywall-container-root')
if (el) {
  el.style.display = "none";
}


b = document.getElementsByTagName("body")[0]
if (b) {
  b.setAttribute('data-paywall-overlay-status', '')
  b.style.overflow = '';
}

overlay = document.getElementById("fortress-modal-paywall-root");
if (overlay) {
  overlay.style.display = "none";
}

// els = document.getElementsByClassName("main-column-v2")
// if (els.length > 0) {
//   el = els[0]
//   blocker = el.getElementsByClassName("paywall-inline-tout")[0]
//   blocker.style.display = "none";

//   paragraphs = el.getElementsByTagName("p")
//   for(let i=0; i < paragraphs.length; i++) {
//     if (paragraphs[i].style.display === "none") {
//       paragraphs[i].style.display = "";
//     }
//   }

//   tables = el.getElementsByTagName("p")
//   for(let i=0; i < tables.length; i++) {
//     if (tables[i].style.display === "none") {
//       tables[i].style.display = "";
//     }
//   }
// }


// For Economist & Bloomberg //
chrome.storage.local.get(window.location.href, function(result) {
  if (result[window.location.href]) {
    articles = document.getElementsByTagName("article");
    if (articles.length > 0) {
      article = articles[0]    
      article.innerHTML = result[window.location.href]
    }
  }
});

// For Economists //
els = document.getElementsByClassName("layout-article-regwall")
if (els.length > 0) {
  el = els[0]
  if (el) {
    el.style.display = "none";
  }
}

els = document.getElementsByClassName("paywall")
for(i=0; i < els.length; i++) {
  el = els[i]
  if (el) {
    el.style.display = "none";
  }
}

`
    })
  })
}
