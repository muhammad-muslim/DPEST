document.getElementById("toggleBtn").addEventListener("click", function () {
  var inputContainer = document.getElementById("inputContainer");
  if (inputContainer.classList.contains("hide")) {
    inputContainer.classList.remove("hide");
  } else {
    inputContainer.classList.add("hide");
  }
});



document.getElementById("toggle").addEventListener("click", function () {
  var inputContainer = document.getElementById("Container");
  if (inputContainer.classList.contains("hidden")) {
    inputContainer.classList.remove("hidden");
  } else {
    inputContainer.classList.add("hidden");
  }
});

function switchTab(tabId) {
  const selectedTab = document.getElementById(tabId);
  const isActive = selectedTab.classList.contains("active");

  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach((tab) => tab.classList.remove("active"));

  const tabButtons = document.querySelectorAll(".tab");
  tabButtons.forEach((button) => button.classList.remove("active"));

  if (!isActive) {
    selectedTab.classList.add("active");

    const selectedTabButton = document.querySelector(
      `.tab[data-tab="${tabId}"]`
    );
    selectedTabButton.classList.add("active");
  }
}

document.querySelectorAll(".tab").forEach((tabElement) => {
  tabElement.addEventListener("click", function (event) {
    const tabId = event.currentTarget.getAttribute("data-tab");
    switchTab(tabId);
  });
});






function myfunc() {
  var navbar = document.getElementById('navbar');
  navbar.classList.toggle('show');
}

window.onscroll = function () {
  stickyNavbar();

};



var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function stickyNavbar() {
  if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky-navbar");
  }
  else {
      navbar.classList.remove("sticky-navbar");
  }
}
