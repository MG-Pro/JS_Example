document.addEventListener('DOMContentLoaded', () => {
  const sliderElem = document.querySelector('.range');
  const thumbMin = document.querySelector('.thumb-min');
  const thumbMax = document.querySelector('.thumb-max');
  const sliderCoords = getCoords(sliderElem);
  const rangeEnd = sliderElem.offsetWidth - thumbMin.offsetWidth;

  let min = parseInt(getComputedStyle(thumbMin).left);
  let max = parseInt(getComputedStyle(thumbMax).left);

  thumbMin.onmousedown = function (e) {
    const thumbCoords = getCoords(thumbMin);
    const shiftX = e.pageX - thumbCoords.left;

    document.onmousemove = function (e) {
      let newLeft = e.pageX - shiftX - sliderCoords.left;

      if (newLeft < 0) {
        newLeft = 0;
      }

      if (newLeft > max - thumbMin.offsetWidth / 2) {
        newLeft = max - thumbMin.offsetWidth / 2;
      }

      min = newLeft;
      thumbMin.style.left = newLeft + 'px';
    };

    document.onmouseup = function () {
      document.onmousemove = document.onmouseup = null;
    };
    return false;
  };

  thumbMax.onmousedown = function (e) {
    const thumbCoords = getCoords(thumbMax);
    const shiftX = e.pageX - thumbCoords.left;

    document.onmousemove = function (e) {
      let newLeft = e.pageX - shiftX - sliderCoords.left;

      if (newLeft < min + thumbMin.offsetWidth / 2) {
        newLeft = min + thumbMin.offsetWidth / 2;
      }

      if (newLeft > rangeEnd) {
        newLeft = rangeEnd;
      }
      max = newLeft;
      thumbMax.style.left = newLeft + 'px';
    };

    document.onmouseup = function () {
      document.onmousemove = document.onmouseup = null;
    };
    return false;
  };

  thumbMin.ondragstart = function () {
    return false;
  };

  function getCoords(elem) {
    const box = elem.getBoundingClientRect();
    return {
      top: box.top + window.pageYOffset,
      left: box.left + window.pageXOffset,
    };
  }
});
