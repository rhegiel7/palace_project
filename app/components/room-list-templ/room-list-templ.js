

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

// document.getElementById("rooms-dropdown").addEventListener(
//   click(function (event) {
//     // The event won't be propagated up to the document NODE and
//     // therefore delegated events won't be fired
//     event.stopPropagation();
//   })
// );
