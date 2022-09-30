// Add a listener to the OK button
document.getElementById("renameTab").addEventListener("click", function () {
  // Get the new name from the input field
  var newName = document.getElementById("tabRenameInput").value;
  // Send the new name to the background script
  chrome.runtime.sendMessage({ newName: newName });
});
