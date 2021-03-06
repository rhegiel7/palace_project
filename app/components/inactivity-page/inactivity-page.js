/**
 * Copyright (C) 2020 to the present, Crestron Electronics, Inc.
 * All rights reserved.
 * No part of this software may be reproduced in any form, machine
 * or natural, without the express written consent of Crestron Electronics.
 * Use of this source code is subject to the terms of the Crestron Software License Agreement
 * under which you licensed this source code.
 *
 * This code was automatically generated by Crestron's code generation tool.
 */
/*jslint es6 */
/*global serviceModule */

var inactivityPageModule = (function () {
  "use strict";

  let outputValue = true;

  /**
   * Initialize Method
   */
  function onInit() {
    serviceModule.addEmulatorScenarioBrowserOnly(
      "./components/inactivity-page/inactivity-page-emulator.json"
    );
  }

  /**
   * Declare your Public Methods here
   */
  function getOutput() {
    return outputValue;
  }

  // Display Clock in the inactivity page
  function inactivityClockDate() {
    var clock = new Date();
    var days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    var months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];

    let hour = clock.getHours();
    if (hour < 10) {
      hour = "0" + hour;
    }
    let minutes = clock.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    let seconds = clock.getSeconds();
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    let day = clock.getDay();
    let date = clock.getDate();
    let month = clock.getMonth();

    let print_clock = hour + " : " + minutes;

    let print_date = days[day] + " " + date + " " + months[month];

    document.getElementById("inactivity-page-time").innerHTML = print_clock;
    document.getElementById("inactivity-page-date").innerHTML = print_date;

    // setTimeout(newClock, 1000);
  }
  setTimeout(inactivityClockDate, 1000);

  /**
   * All public or private methods which need to call onInit
   */
  const inactivityPagePage = document.querySelector("#inactivity-page-page");
  if (inactivityPagePage !== null) {
    inactivityPagePage.addEventListener("afterLoad", onInit);
  }

  /**
   * All public method and properties are exported here
   */
  return {
    getOutput: getOutput,
  };
})();
