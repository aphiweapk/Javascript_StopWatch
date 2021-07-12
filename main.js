let seconds = document.querySelector("i");
      let minutes = document.querySelector("span");
      let hours = document.querySelector("em");
      let btn = document.querySelectorAll("button");

      let interval;

      function click() {
        btn[0].innerText = "Start";
        interval = setInterval(() => {
            seconds.innerText = parseFloat(seconds.innerText, 10) + 1;
          
          if (parseFloat(seconds.innerText, 10) === 59) {
            seconds.innerText = 0;
            if (parseFloat(minutes.innerText, 10) < 9) {
              minutes.innerText = "0" + (parseFloat(minutes.innerText, 10) + 1);
            } else {
              minutes.innerText = parseFloat(minutes.innerText, 10) + 1;
            }
          }

          if (parseFloat(minutes.innerText, 10) === 59) {
            minutes.innerText = 0;
            if (parseFloat(hours.innerText, 10) < 9) {
              hours.innerText = "0" + (parseFloat(hours.innerText, 10) + 1);
            } else {
              hours.innerText = parseFloat(hours.innerText, 10) + 1;
            }
          }
        }, 1000);
        btn[0].removeEventListener("click", click);
      }

      // start/resume button
      btn[0].addEventListener("click", click);

      // pause button
      btn[1].addEventListener("click", cInterval);

      // reset button
      btn[2].addEventListener("click", () => {
        seconds.innerText = 0;
        cInterval();
        btn[0].addEventListener("click", click);
        btn[0].innerText = "Start";
      });

      function cInterval() {
        clearInterval(interval);
        btn[0].addEventListener("click", click);
        btn[0].innerText = "Resume";
      }