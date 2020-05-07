// For Economist //

articles = document.getElementsByTagName("article");
if (articles.length > 0) {
  article = articles[0];
  store = {};
  store[window.location.href] = article.innerHTML;
  chrome.storage.local.set(store, function () {
    console.log(
      "cached " + window.location.href + " with " + article.innerHTML.length
    );
  });
}
