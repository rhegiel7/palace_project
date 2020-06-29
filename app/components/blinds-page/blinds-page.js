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
  };
})();
