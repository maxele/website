sections = 20
  function randomvalue(i, prev) {
    ret = prev + Math.random() * 10 - 5 - (100 / sections)
    if (ret < 0)
      ret = 0
    else if (ret > 100)
      ret = 100
    return ret;
  }
  str = "clip-path: polygon(0% 0%,"
  prev = 100;
  for (let i = 0; i < 50; i++) {
    prev = randomvalue(i, prev)
    str += (i * 100 / sections) + "% " + prev + "%,"
  }
  str += 100 + "% " + 0 + "%"
  str += ")"
  document.getElementsByClassName('div1')[0].setAttribute("style", str)

  var myScrollFunc = function () {
    var y = window.scrollY
    if (y >= document.getElementsByClassName('div1')[0].clientHeight) {
      document.getElementsByClassName("sidebar")[0].classList.replace('noscroll', 'scroll');
    } else {
      document.getElementsByClassName("sidebar")[0].classList.replace('scroll', 'noscroll');
    }

    if (y == 0) {
      document.getElementById('scroll-button').className = "show"
    } else {
      document.getElementById('scroll-button').className = "hide"
    }
  };

  window.addEventListener("scroll", myScrollFunc);

  var sizeCheck = function () {
    myScrollFunc()
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    if (vw / vh < 1.5) {
      document.getElementsByClassName('div1')[0].className = 'div1 nofull'
      document.getElementsByClassName('div2')[0].className = 'div2 nofull'
      document.getElementById('scroll-button').className = 'hide'
    } else {
      document.getElementsByClassName('div1')[0].className = 'div1 full'
      document.getElementsByClassName('div2')[0].className = 'div2 full'
      document.getElementById('scroll-button').className = 'show'
    }

    if (vw < 1000) {
      document.getElementsByClassName('sidebar')[0].classList.replace('show', 'hide')
      document.getElementById('text').style = "width: 90%"
      document.getElementById('mobile-menu-button').className = 'show'
    } else {
      document.getElementsByClassName('sidebar')[0].classList.replace('hide', 'show')
      document.getElementById('text').style = "width: 50%"
      document.getElementById('mobile-menu-button').className = 'hide'
    }
  }
  addEventListener("resize", sizeCheck);

  var mobileMenu = function () {
    document.getElementById('mobile-menu-button').value = "CLOSE"
    document.getElementById('mobile-menu-button').style = "transform: translate(-50%, 50%);animation-name: menuButtonOpen;\
    bottom: 60%;"
    document.getElementById('mobile-menu').style = "animation-name: menuOpen;\
    bottom: 0px;"
    setTimeout(() => {
      document.getElementById('mobile-menu-button').style = "transform: translate(-50%, 50%);\
      bottom: 60%;"
    }, 300);
    document.getElementById('mobile-menu-button').onclick = exitMobileMenu
  }

  var exitMobileMenu = function () {
    document.getElementById('mobile-menu-button').value = "MENU"
    document.getElementById('mobile-menu-button').style = "transform: translate(-50%);animation-name: menuButtonClose;\
    bottom: 10px;"
    document.getElementById('mobile-menu').style = "animation-name: menuClose;\
    bottom: -65%;"
    setTimeout(() => {
      document.getElementById('mobile-menu-button').style = "transform: translate(-50%); bottom: 10px;"
    }, 300);
    document.getElementById('mobile-menu-button').onclick = mobileMenu
  }

  myScrollFunc()
  sizeCheck()