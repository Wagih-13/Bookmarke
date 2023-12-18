let siteNameinp = document.querySelector("#bookName");
let seteUrlinp = document.querySelector("#websiteUrl");
let Bookmarks = [];

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
  if (inpValidate() && namevalidate()) {
    let tableContent = {
      siteName: siteNameinp.value,
      siteUrl: seteUrlinp.value,
    };
    Bookmarks.push(tableContent);
    localStorage.setItem("BookmarksSave", JSON.stringify(Bookmarks));
  }
}
function displaySite() {
  let blockOfTags = "";
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

document.querySelector(".btnSubmit").onclick = function () {
  addSite();
  clearInput();
  displaySite();
};

document.querySelector(".btnSubmit").addEventListener("touchend", handleEnd) = function () {
  addSite();
  clearInput();
  displaySite();
};
