// create variable tabGroups and set it to an empty array
var tabGroupTitles = [];

// Using chrome.tabGroups API, get all tab group IDs
chrome.tabGroups.query({}, function(tabGroups) {
  // For each tab group, add the ID to the tabGroupIds array
  tabGroups.forEach(function(tabGroup) {
    tabGroupTitles.push(tabGroup.title);
  });
});


// pretty print the array
console.log(tabGroupTitles);



// // create function listTabGroups
// function listTabGroups() {
//   // create variable tabGroupList and set it to the element with the id "tabGroupList"
//   var tabGroupList = document.getElementById("tabGroupList");
//   // set the innerHTML of tabGroupList to an empty string
//   tabGroupList.innerHTML = "";
//   // create variable tabGroupsListItems and set it to an empty string
//   var tabGroupsListItems = "";
//   // for each tabGroup in tabGroups
//   for (var tabGroup of tabGroups) {
//     // set tabGroupsListItems to tabGroupsListItems plus a new list item with the tabGroup name
//     tabGroupsListItems += "<li>" + tabGroup.name + "</li>";
//   }
//   // set the innerHTML of tabGroupList to tabGroupsListItems
//   tabGroupList.innerHTML = tabGroupsListItems;
// }
