document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("myModal");
    let closeAdvBtn = document.getElementById("closeAdvBtn");
    let advertismentTimer = document.getElementById("advertismentTimer");
  
    setTimeout(function() {
        modal.style.display = "block";
        startTimer();
    }, 10000);

    closeAdvBtn.onclick = function() {
      modal.style.display = "none";
    }
  
    function startTimer() {
        let remainTime = 3; 
    
        let intervalId = setInterval(function() {
            advertismentTimer.innerHTML = "Ad closes in " + remainTime + " seconds.";
    
            if (remainTime <= 0) {
                clearInterval(intervalId); 
                advertismentTimer.innerHTML = "Ad closed.";
                closeAdvBtn.style.display = "block";
            }
    
            remainTime--;
        }, 1000); 
    } 
  });
