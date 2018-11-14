(function () {
  function Rotator(el) {
    this.el = el;
    this.target = document.querySelector(this.el.getAttribute('data-rotation-target'));
    this.rotationContent = [].slice.call(el.children);
    this.rotationLength = this.rotationContent.length;
    this.currentContent = 0;

    this.rotate = function() {      
      this.target.innerHTML = '';

      if (this.currentContent === this.rotationLength) 
        this.currentContent = 0;

      this.target.appendChild(this.rotationContent[this.currentContent].cloneNode(true));

      this.currentContent++;
    }

    this.rotate();

    this.interval = setInterval(this.rotate.bind(this), 5000);
  }

  function Random(el) {
    
  }

  [].slice.call(document.querySelectorAll('.rotator')).forEach(function(el) { new Rotator(el) });

})();