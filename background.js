rename_title = "";

// on shortcut "rename" pressed, rename the current tab group
chrome.commands.onCommand.addListener(function (command) {
  if (command === "rename") {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      chrome.tabGroups.query(
        { windowId: tabs[0].windowId },
        function (tabGroups) {
          tabGroups.forEach(function (tabGroup) {
            if (tabGroup.id === tabs[0].groupId) {
              // ask user for rename_title
              rename_title = prompt("Rename tab group to:", tabGroup.title);
              chrome.tabGroups.update(tabGroup.id, { title: rename_title });
            }
          });
        }
      );
    });
  }
});

// Add a listener to the background script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // get current window tab group's id using chrome.tabgroups.query
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    chrome.tabGroups.query(
      { windowId: tabs[0].windowId },
      function (tabGroups) {
        tabGroups.forEach(function (tabGroup) {
          if (tabGroup.id === tabs[0].groupId) {
            // update the tab group's title
            chrome.tabGroups.update(tabGroup.id, { title: request.newName });
          }
        });
      }
    );
  });
});
