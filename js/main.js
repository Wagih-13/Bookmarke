var siteNameinp = document.querySelector("#bookName");
var seteUrlinp = document.querySelector("#websiteUrl");
var Bookmarks = [];

if (localStorage.getItem("BookmarksSave")) {
  Bookmarks = JSON.parse(localStorage.getItem("BookmarksSave"));
}

function namevalidate() {
  if (siteNameinp.value.length > 3) {
    return true;
  } else {
    alert("pleas enter valedeat name");
  }
}
function inpValidate() {
  if (URL.canParse(seteUrlinp.value)) {
    return true;
  } else {
    alert("pleas enter valedeat url");
  }
}
function addSite() {
  if (inpValidate() === true && namevalidate() === true) {
    var tableContent = {
      siteName: siteNameinp.value,
      siteUrl: seteUrlinp.value,
    };
    Bookmarks.push(tableContent);
    localStorage.setItem("BookmarksSave", JSON.stringify(Bookmarks));
  }
}
function displaySite() {
  var blockOfTags = "";
  for (let i = 0; i < Bookmarks.length; i++) {
    blockOfTags += `<tr>
          <td>${i}</td>
          <td>${Bookmarks[i].siteName}</td>
          <td><a href = "${Bookmarks[i].siteUrl}" target = "blank" >vist</a></td>
          <td><button onclick= "Delete(${i})">delete</button></td>
          </tr>`;
  }
  document.querySelector("#tbody").innerHTML = blockOfTags;
}
function clearInput() {
  siteNameinp.value = "";
  seteUrlinp.value = "";
}
function Delete(index) {
  Bookmarks.splice(index, 1);
  document.querySelector("#tbody").innerHTML = "";
  displaySite();
  localStorage.setItem("BookmarksSave", JSON.stringify(Bookmarks));
}

displaySite();

document.querySelector("button").addEventListener("click", function () {
  addSite();
  clearInput();
  displaySite();
});
