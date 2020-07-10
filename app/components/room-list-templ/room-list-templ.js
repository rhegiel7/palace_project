var roomListTemplModule = (function () {
  "use strict";

  let outputValue = true;

  /**
   * Initialize Method
   */
  function onInit() {
    serviceModule.addEmulatorScenarioBrowserOnly(
      "./components/room-list-templ/room-list-templ-emulator.json"
    );
  }

  /**
   * Declare your Public Methods here
   */
  function getOutput() {
    return outputValue;
  }

  /**
   * All public or private methods which need to call onInit
   */
  const roomListTemplPage = document.querySelector("#room-list-templ-page");
  if (roomListTemplPage !== null) {
    roomListTemplPage.addEventListener("afterLoad", onInit);
  }

  /**
   * All public method and properties are exported here
   */
  return {
    getOutput: getOutput,
  };
})();

function dropDown() {
  event.stopPropagation();
}
function addAnimation() {
  let dropdown = document.getElementById("rooms-dropdown");
  dropdown.classList.add("animate__slideOutLeft");
}
function removeAnimation() {
  let dropdown = document.getElementById("rooms-dropdown");
  dropdown.classList.remove("animate__slideOutLeft");
}

function closeDropdown() {
  let dropdown = document.getElementById("rooms-dropdown");
  setTimeout(addAnimation, 300);
  setTimeout(removeAnimation, 900);
  setTimeout(function () {
    dropdown.classList.remove("show");
  }, 600);
}

function resetTransform() {
  let firstFloor = document.getElementById("floor-btn-0");
  let list = document.getElementById("cr-id-18");
  if (firstFloor) {
    list.style.transform = "translate3d(0px, 0px, 0px)";
  }
}

// document.getElementById("rooms-dropdown").addEventListener(
//   click(function (event) {
//     // The event won't be propagated up to the document NODE and
//     // therefore delegated events won't be fired
//     event.stopPropagation();
//   })
// );
