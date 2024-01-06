const randomColor = function () {    // generate a random color
    const hex = '123456789ABCDEF';
    let color = '#';
    for (i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  console.log(randomColor());
  
  let intervalStopper;
  
  const startChangingColor = function () {
    function changeBGcolor() {
      document.body.style.backgroundColor = randomColor();
    }
  
    if (!intervalStopper) {
      intervalStopper = setInterval(changeBGcolor, 1000);
    }
  };
  
  const stopChangingColor = function () {
    clearInterval(intervalStopper);
    intervalStopper = null;
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor);
  