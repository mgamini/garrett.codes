(function () {
  function Random(el) {
    this.el = el;
    this.target = document.querySelector(this.el.getAttribute('data-rotation-target'));
    this.content = [].slice.call(el.children);

    this.target.appendChild(this.content[Math.floor(Math.random() * this.content.length)].cloneNode(true));
  }

  [].slice.call(document.querySelectorAll('.rotator')).forEach(function(el) { new Random(el) });

})();