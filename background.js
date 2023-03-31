let isBlocked = false;

chrome.action.onClicked.addListener((tab) => {
  isBlocked = !isBlocked;
  chrome.action.setIcon({
    path: isBlocked ? "icons/off-48.png" : "icons/on-48.png"
  });
});

chrome.tabs.onCreated.addListener((tab) => {
  if (isBlocked) {
    chrome.tabs.remove(tab.id);
  }
});