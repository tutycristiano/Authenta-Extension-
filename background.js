chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.removeAll(() => {
    chrome.contextMenus.create({
      id: "detectMedia",
      title: "Authenta Login",
      contexts: ["all"]
    });
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "detectMedia") {
    chrome.windows.create({
      url: chrome.runtime.getURL("login.html"),
      type: "popup",
      width: 400,
      height: 400
    });
  }
});
