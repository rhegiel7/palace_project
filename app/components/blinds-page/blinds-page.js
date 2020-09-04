var blindsPageModule = (function () {
  "use strict";

  let outputValue = true;

  /**
   * Initialize Method
   */
  function onInit() {
    serviceModule.addEmulatorScenarioBrowserOnly(
      "./components/blinds-page/blinds-page-emulator.json"
    );
  }

  /**
   * Declare your Public Methods here
   */
  function getOutput() {
    return outputValue;
  }

  // (HORIZONTAL SHADES AND BLACKOUT) Methods for opening, closing and stoping blinds
  var shadesListLengthHoriz = document.getElementById("cr-id-26").childNodes
    .length;
  var blackoutListLengthHoriz = document.getElementById("cr-id-30").childNodes
    .length;

  var rightShadesHoriz = document.getElementsByClassName(
    "shade-horizontal-right"
  );
  var leftShadesHoriz = document.getElementsByClassName(
    "shade-horizontal-left"
  );
  var rightBlackoutHoriz = document.getElementsByClassName(
    "blackout-horizontal-right"
  );
  var leftBlackoutHoriz = document.getElementsByClassName(
    "blackout-horizontal-left"
  );
  var openHorizShadesButtons = document.getElementsByClassName(
    "open-horiz-shades-button"
  );
  var closeHorizShadesButtons = document.getElementsByClassName(
    "close-horiz-shades-button"
  );
  var openHorizBlackoutButtons = document.getElementsByClassName(
    "open-horiz-blackout-button"
  );
  var closeHorizBlackoutButtons = document.getElementsByClassName(
    "close-horiz-blackout-button"
  );

  // for (var idx = 0; idx < shadesListLengthHoriz; idx++) {
  //   openHorizShadesButtons[idx].addEventListener("click", function (e) {
  //     if (openHorizShadesButtons[idx] == e.target) {
  //       console.log(e.target);
  //       console.log("button was clicked");
  //       openHorizonShades(idx);
  //     }
  //   });
  // }

  function openShades(idx) {
    for (let idx = 0; idx < shadesListLengthHoriz; idx++) {
      openHorizShadesButtons[idx].addEventListener(
        "click",
        openHorizonShades(idx)
      );
    }
    // if (openHorizShadesButtons[idx] == event.target) {
    //   openHorizonShades(idx);
    // }
  }
  function closeShades() {
    for (let idx = 0; idx < shadesListLengthHoriz; idx++) {
      closeHorizShadesButtons[idx].addEventListener(
        "click",
        closeHorizonShades(idx)
      );
    }
  }
  function openBlackout(idx) {
    for (let idx = 0; idx < blackoutListLengthHoriz; idx++) {
      openHorizBlackoutButtons[idx].addEventListener(
        "click",
        openHorizonBlackout(idx)
      );
    }
  }
  function closeBlackout() {
    for (let idx = 0; idx < blackoutListLengthHoriz; idx++) {
      closeHorizBlackoutButtons[idx].addEventListener(
        "click",
        closeHorizonBlackout(idx)
      );
    }
  }

  function openHorizonShades(idx) {
    rightShadesHoriz[idx].style.transform = "translateX(100%)";
    leftShadesHoriz[idx].style.transform = "translateX(-100%)";
  }
  function closeHorizonShades(idx) {
    rightShadesHoriz[idx].style.transform = "translateX(0)";
    leftShadesHoriz[idx].style.transform = "translateX(0)";
  }
  function openHorizonBlackout(idx) {
    rightBlackoutHoriz[idx].style.transform = "translateX(100%)";
    leftBlackoutHoriz[idx].style.transform = "translateX(-100%)";
  }
  function closeHorizonBlackout(idx) {
    rightBlackoutHoriz[idx].style.transform = "translateX(0)";
    leftBlackoutHoriz[idx].style.transform = "translateX(0)";
  }

  /**
   * All public or private methods which need to call onInit
   */
  const blindsPagePage = document.querySelector("#blinds-page-page");
  if (blindsPagePage !== null) {
    blindsPagePage.addEventListener("afterLoad", onInit);
  }

  /**
   * All public method and properties are exported here
   */
  return {
    getOutput: getOutput,
    openShades: openShades,
    closeShades: closeShades,
    openBlackout: openBlackout,
    closeBlackout: closeBlackout,
  };
})();
