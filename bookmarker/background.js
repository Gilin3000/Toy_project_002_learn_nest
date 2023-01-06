chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url && tab.url.includes("youtube.com/watch")) {
    const queryParameters = changeInfo.url.split("?")[1];
    const urlParameters = new URLSearchParams(queryParameters);

    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      videoId: urlParameters.get("v"),
    });
  }
});

chrome.runtime.onConnect.addListener(function (port) {
  port.onMessage.addListener(function (msg) {
    port.postMessage({ counter: msg.counter + 1 });
  });
});
