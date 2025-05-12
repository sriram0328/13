// music
function playMusic() {
    const music = document.getElementById('background-music');
    music.play();
  }
  window.addEventListener('DOMContentLoaded', function() {
    playMusic();
  });
  document.body.addEventListener('click', playMusic, { once: true });
  const content = document.getElementById('content');
  const footer = document.getElementsByTagName('footer')[0];
  const timer = document.getElementById('timer');
  
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
  let countDown = new Date('May 13, 2025 10:00:00').getTime(),
    x = setInterval(function () {
      let now = new Date().getTime(),
        distance = countDown - now;
      // document.getElementById('days').innerText = Math.floor(distance / (day)),
      document.getElementById('hours').innerText = Math.floor(distance / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
  
      if (distance < 0) {
  
        timer.classList.add('d-none');
        confetti();
        clearInterval(x);
        _slideSatu();
      } 
  
    }, second)
  
  const _slideSatu = function () {
    const tap = document.getElementById('tap');
    const slideSatu = document.getElementById('slideSatu');
    slideSatu.classList.remove('d-none');
    setTimeout(function () {
      tap.classList.remove('d-none');
      document.body.addEventListener('click', function () {
        _slideDua();
      })
    }, 7000);
  };
  
  const _slideDua = function () {
    const slideSatu = document.getElementById('slideSatu');
    const tap = document.getElementById('tap');
    const slideDua = document.getElementById('slideDua');
  
    setTimeout(function () {
      slideSatu.classList.replace('animate__slideInDown', 'animate__backOutDown');
      tap.classList.add('d-none');
      setTimeout(function () {
        slideSatu.classList.add('d-none');
      }, 1000);
    }, 1000);
  
    slideDua.classList.remove('d-none');
    setTimeout(function () {
      tap.classList.remove('d-none');
      document.body.addEventListener('click', function () {
        slideDua.classList.replace('animate__zoomInDown', 'animate__fadeOutLeft');
        slideDua.classList.remove('animate__delay-2s', 'animate__slow');
        tap.classList.add('d-none');
        setTimeout(function () {
          slideDua.remove();
          _slideTiga();
        }, 1000);
      })
    }, 50000);
  };
  
  const _slideTiga = function () {
    const tap = document.getElementById('tap');
    const slideTiga = document.getElementById('slideTiga');
  
    slideTiga.classList.remove('d-none');
    setTimeout(function () {
      tap.classList.remove('d-none');
      document.body.addEventListener('click', function () {
        slideTiga.classList.remove('animate__delay-2s', 'animate__slow');
        slideTiga.classList.replace('animate__fadeInRight', 'animate__fadeOut');
        tap.remove();
        setTimeout(function () {
          slideTiga.remove();
          _slideEmpat();
        }, 1000);
      })
    }, 50000);
  }
  
  function getRandomPosition(element) {
    var x = document.body.offsetHeight - element.clientHeight;
    var y = document.body.offsetWidth - element.clientWidth;
    var randomX = Math.floor(Math.random() * 500);
    var randomY = Math.floor(Math.random() * y);
    return [randomX, randomY];
  };
  
  const _slideEmpat = function () {
    const slideEmpat = document.getElementById('slideEmpat');
    const btn = document.getElementsByTagName('button');
    slideEmpat.classList.remove('d-none');
  
    btn[0].addEventListener('click', function () {
      var xy = getRandomPosition(slideEmpat);
      slideEmpat.style.top = xy[0] + 'px';
      // slideEmpat.style.left = xy[1] + 'px';
    });
  
    btn[1].addEventListener('click', function () {
      slideEmpat.classList.replace('animate__fadeInDown', 'animate__bounceOut');
      slideEmpat.classList.remove('animate__delay-2s');
      setTimeout(function () {
        slideEmpat.remove()
        setTimeout(() => {
          _slideLima();
        }, 500);
      }, 1000);
    })
  };


const _slideLima = function () {
  const slideLima = document.getElementById('slideLima');
  slideLima.classList.remove('d-none');

  const trims = document.getElementById('trims');

  setTimeout(() => {
    // Reset trims content & animation
    trims.classList.remove('d-none', 'animate__fadeOut', 'animate__delay-3s');
    trims.innerHTML = ''; // Clear any old content

    // Create a fresh span inside #trims to attach TypeIt
    const typeTarget = document.createElement('span');
    typeTarget.id = 'typeTarget';
    trims.appendChild(typeTarget);

    // Start typing
    new TypeIt("#typeTarget", {
      strings: ["ILUuuuuu Vrooooo alwaysss my dumb kiddooo🫶🏻"],
      speed: 40,
      loop: false,
      waitUntilVisible: true,
    }).go();
  }, 1000);

  // After 3 seconds, start transition out
  setTimeout(() => {
    slideLima.classList.add('animate__delay-3s');
    slideLima.classList.replace('animate__bounceIn', 'animate__fadeOut');

    trims.classList.add('animate__animated', 'animate__fadeOut', 'animate__delay-3s');

    setTimeout(() => {
      trims.remove();
      setTimeout(() => {
        slideLima.remove();
        _slideVideo(); // Proceed to next slide
      }, 1000);
    }, 6000);
  }, 3000); // Wait 3 seconds
};



const _slideVideo = function () {
  const slideVideo = document.getElementById("slideVideo");
  const video = document.getElementById("myVideo");

  slideVideo.classList.remove("d-none");

  video.addEventListener("ended", function () {
    slideVideo.classList.replace("animate__fadeIn", "animate__fadeOut");

    setTimeout(() => {
      slideVideo.remove();
      _slideEnam();
    }, 1000);
  });
};

  /*
  const _slideLima = function () {
    const slideLima = document.getElementById('slideLima');
    slideLima.classList.remove('d-none');
    const trims = document.getElementById('trims');
  
    setTimeout(() => {
      trims.classList.remove('d-none');
    }, 1000);
  
    slideLima.addEventListener('animationend', () => {
      slideLima.classList.add('animate__delay-3s')
      slideLima.classList.replace('animate__bounceIn', 'animate__fadeOut');
      trims.classList.add('animate__animated', 'animate__fadeOut', 'animate__delay-3s');
      setTimeout(() => {
        trims.remove();
        setTimeout(() => {
          slideLima.remove();
          _slideEnam();
        }, 1000);
      }, 6000);
    });
  };

  */
  
  const _slideEnam = function () {
    const slideEnam = document.getElementById('slideEnam');
    slideEnam.classList.remove('d-none');
  };
  
  
  new TypeIt("#teks1", {
    strings: ["You've always been more than just a favorite person—you hold a special place in my heart. There have been countless moments filled with love, laughter, and sharing. I proudly said, \"I'm her best friend,\" when you treated me like a mom with all your care and love. Your encouragement and support never went unnoticed. You always teach me what you learn, wishing the best for me. You genuinely want me to grow—and that means everything.\n\nYou were the reason behind my smile every single day. When you're around, you make me feel better. I still remember the little moments—like buying Kinder Joy or your sweet reactions when I gave you something. Those tiny gestures—rubbing my hair, sitting by my side when I was alone, proudly calling my name in front of others—made me feel happy and loved. Even your so-called \"show attitude\" hair flip on PPT day, laughing uncontrollably, and doing cringy things on our YOLO video call—those were the best moments. Your voice, your presence, your smile, your vibe—they were enough."],
    startDelay: 4000,
    speed: 75,
    waitUntilVisible: true
  }).go();
  
  new TypeIt("#teks2", {
    strings: ["That random reel you posted: \"Whom you don’t wanna lose?\"—you tagged me. That melted me completely. Spending an hour with you in the library healed my whole week's mental stress. These simple moments are enough to make me happy and feel like someone’s there for me.\n\nSometimes you did small things for me, and even that little bit meant so much. You made me laugh, made me feel important, and helped me believe that I do matter. You didn’t have to do big things—just the way you acted showed how special I was to you. Even now, I still feel like I’m your best friend. And I really love that feeling. This is a series of happy moments, vrooo!\n\n              Happiest birthday to my prettiest girl! Lots of love 🫶🏻❤️"],
    startDelay: 2000,
    speed: 75,
    waitUntilVisible: true
  }).go();
  
/*  
  new TypeIt("#trims", {
    strings: ["ILUuuuuu Vrooooo alwaysss my dumb kiddooo🫶🏻"],
    startDelay: 2000,
    speed: 40,
    loop: false,
    waitUntilVisible: true,
  }).go();
  
  */
  
  'use strict';
  
  var onlyOnKonami = false;
  
  function confetti() {
    // Globals
    var $window = $(window),
      random = Math.random,
      cos = Math.cos,
      sin = Math.sin,
      PI = Math.PI,
      PI2 = PI * 2,
      timer = undefined,
      frame = undefined,
      confetti = [];
  
    var runFor = 2000
    var isRunning = true
  
    setTimeout(() => {
      isRunning = false
    }, runFor);
  
    // Settings
    var konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
      pointer = 0;
  
    var particles = 150,
      spread = 20,
      sizeMin = 5,
      sizeMax = 12 - sizeMin,
      eccentricity = 10,
      deviation = 100,
      dxThetaMin = -.1,
      dxThetaMax = -dxThetaMin - dxThetaMin,
      dyMin = .13,
      dyMax = .18,
      dThetaMin = .4,
      dThetaMax = .7 - dThetaMin;
  
    var colorThemes = [
      function () {
        return color(200 * random() | 0, 200 * random() | 0, 200 * random() | 0);
      },
      function () {
        var black = 200 * random() | 0;
        return color(200, black, black);
      },
      function () {
        var black = 200 * random() | 0;
        return color(black, 200, black);
      },
      function () {
        var black = 200 * random() | 0;
        return color(black, black, 200);
      },
      function () {
        return color(200, 100, 200 * random() | 0);
      },
      function () {
        return color(200 * random() | 0, 200, 200);
      },
      function () {
        var black = 256 * random() | 0;
        return color(black, black, black);
      },
      function () {
        return colorThemes[random() < .5 ? 1 : 2]();
      },
      function () {
        return colorThemes[random() < .5 ? 3 : 5]();
      },
      function () {
        return colorThemes[random() < .5 ? 2 : 4]();
      }
    ];
  
    function color(r, g, b) {
      return 'rgb(' + r + ',' + g + ',' + b + ')';
    }
  
    // Cosine interpolation
    function interpolation(a, b, t) {
      return (1 - cos(PI * t)) / 2 * (b - a) + a;
    }
  
    // Create a 1D Maximal Poisson Disc over [0, 1]
    var radius = 1 / eccentricity,
      radius2 = radius + radius;
  
    function createPoisson() {
      // domain is the set of points which are still available to pick from
      // D = union{ [d_i, d_i+1] | i is even }
      var domain = [radius, 1 - radius],
        measure = 1 - radius2,
        spline = [0, 1];
      while (measure) {
        var dart = measure * random(),
          i, l, interval, a, b, c, d;
  
        // Find where dart lies
        for (i = 0, l = domain.length, measure = 0; i < l; i += 2) {
          a = domain[i], b = domain[i + 1], interval = b - a;
          if (dart < measure + interval) {
            spline.push(dart += a - measure);
            break;
          }
          measure += interval;
        }
        c = dart - radius, d = dart + radius;
  
        for (i = domain.length - 1; i > 0; i -= 2) {
          l = i - 1, a = domain[l], b = domain[i];
          // c---d          c---d  Do nothing
          //   c-----d  c-----d    Move interior
          //   c--------------d    Delete interval
          //         c--d          Split interval
          //       a------b
          if (a >= c && a < d)
            if (b > d) domain[l] = d; // Move interior (Left case)
            else domain.splice(l, 2); // Delete interval
          else if (a < c && b > c)
            if (b <= d) domain[i] = c; // Move interior (Right case)
            else domain.splice(i, 0, c, d); // Split interval
        }
  
        for (i = 0, l = domain.length, measure = 0; i < l; i += 2)
          measure += domain[i + 1] - domain[i];
      }
  
      return spline.sort();
    }
  
    var container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '0';
    container.style.overflow = 'visible';
    container.style.zIndex = '9999';
  
    // Confetto constructor
    function Confetto(theme) {
      this.frame = 0;
      this.outer = document.createElement('div');
      this.inner = document.createElement('div');
      this.outer.appendChild(this.inner);
  
      var outerStyle = this.outer.style,
        innerStyle = this.inner.style;
      outerStyle.position = 'absolute';
      outerStyle.width = (sizeMin + sizeMax * random()) + 'px';
      outerStyle.height = (sizeMin + sizeMax * random()) + 'px';
      innerStyle.width = '100%';
      innerStyle.height = '100%';
      innerStyle.backgroundColor = theme();
  
      outerStyle.perspective = '50px';
      outerStyle.transform = 'rotate(' + (360 * random()) + 'deg)';
      this.axis = 'rotate3D(' +
        cos(360 * random()) + ',' +
        cos(360 * random()) + ',0,';
      this.theta = 360 * random();
      this.dTheta = dThetaMin + dThetaMax * random();
      innerStyle.transform = this.axis + this.theta + 'deg)';
  
      this.x = $window.width() * random();
      this.y = -deviation;
      this.dx = sin(dxThetaMin + dxThetaMax * random());
      this.dy = dyMin + dyMax * random();
      outerStyle.left = this.x + 'px';
      outerStyle.top = this.y + 'px';
  
      // Create the periodic spline
      this.splineX = createPoisson();
      this.splineY = [];
      for (var i = 1, l = this.splineX.length - 1; i < l; ++i)
        this.splineY[i] = deviation * random();
      this.splineY[0] = this.splineY[l] = deviation * random();
  
      this.update = function (height, delta) {
        this.frame += delta;
        this.x += this.dx * delta;
        this.y += this.dy * delta;
        this.theta += this.dTheta * delta;
  
        // Compute spline and convert to polar
        var phi = this.frame % 7777 / 7777,
          i = 0,
          j = 1;
        while (phi >= this.splineX[j]) i = j++;
        var rho = interpolation(
          this.splineY[i],
          this.splineY[j],
          (phi - this.splineX[i]) / (this.splineX[j] - this.splineX[i])
        );
        phi *= PI2;
  
        outerStyle.left = this.x + rho * cos(phi) + 'px';
        outerStyle.top = this.y + rho * sin(phi) + 'px';
        innerStyle.transform = this.axis + this.theta + 'deg)';
        return this.y > height + deviation;
      };
    }
  
  
    function poof() {
      if (!frame) {
        // Append the container
        document.body.appendChild(container);
  
        // Add confetti
  
        var theme = colorThemes[onlyOnKonami ? colorThemes.length * random() | 0 : 0],
          count = 0;
  
        (function addConfetto() {
  
          if (onlyOnKonami && ++count > particles)
            return timer = undefined;
  
          if (isRunning) {
            var confetto = new Confetto(theme);
            confetti.push(confetto);
  
            container.appendChild(confetto.outer);
            timer = setTimeout(addConfetto, spread * random());
          }
        })(0);
  
  
        // Start the loop
        var prev = undefined;
        requestAnimationFrame(function loop(timestamp) {
          var delta = prev ? timestamp - prev : 0;
          prev = timestamp;
          var height = $window.height();
  
          for (var i = confetti.length - 1; i >= 0; --i) {
            if (confetti[i].update(height, delta)) {
              container.removeChild(confetti[i].outer);
              confetti.splice(i, 1);
            }
          }
  
          if (timer || confetti.length)
            return frame = requestAnimationFrame(loop);
  
          // Cleanup
          document.body.removeChild(container);
          frame = undefined;
        });
      }
    }
  
    $window.keydown(function (event) {
      pointer = konami[pointer] === event.which ?
        pointer + 1 :
        +(event.which === konami[0]);
      if (pointer === konami.length) {
        pointer = 0;
        poof();
      }
    });
  
    if (!onlyOnKonami) poof();
  };
