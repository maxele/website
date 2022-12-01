// document.getElementById('sidebar-button').value = "C\nL\nO\nS\nE"
document.getElementById('sidebar-button').value = "M\nE\nN\nU"

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
document.getElementById('div1').setAttribute("style", str)

var myScrollFunc = function () {
  var y = window.scrollY
  if (y >= document.getElementById('div1').clientHeight) {
    document.getElementById("sidebar").classList.replace('noscroll', 'scroll');
  } else {
    document.getElementById("sidebar").classList.replace('scroll', 'noscroll');
  }

  if (y == 0) {
    document.getElementById('scroll-button').style = ""
  } else {
    document.getElementById('scroll-button').style = "display: none !important"
  }
};

window.addEventListener("scroll", myScrollFunc);

var sizeCheck = function () {
  myScrollFunc()
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

  if (vw / vh < 1.5) {
    document.getElementById('div1').className = 'nofull'
    document.getElementById('div2').className = 'nofull'
    document.getElementById('scroll-button').style = "display: none !important"
  } else {
    document.getElementById('div1').className = 'full'
    document.getElementById('div2').className = 'full'
    document.getElementById('scroll-button').style = ""
  }

  if (vw < 1000) {
    document.getElementById('sidebar').style.transform = "translate(-100%)"
    document.getElementById('text').style = "width: 90%"
    document.getElementById('mobile-menu-button').style.display = ""

    document.getElementById('sidebar-button').style.transform = "translateY(-50%) translateX(-100%)"
  } else {
    exitMobileMenu();
    document.getElementById('sidebar').style.transform = "translate(0%)"
    document.getElementById('text').style = "width: 50%"
    document.getElementById('mobile-menu-button').style.display = 'none'

    document.getElementById('sidebar-button').style.transform = "translateY(-50%) translateX(-50%)"
  }
}
addEventListener("resize", sizeCheck);

var mobileMenu = function () {
  document.getElementById('mobile-menu-button').value = "CLOSE"
  document.getElementById('mobile-menu-button').style = "transform: translate(-50%, 50%);\
    bottom: 60%;"
  document.getElementById('mobile-menu').style = "bottom: 0px;"
  document.getElementById('mobile-menu-button').onclick = exitMobileMenu
}

var exitMobileMenu = function () {
  document.getElementById('mobile-menu-button').value = "MENU"
  document.getElementById('mobile-menu-button').style = "transform: translate(-50%);\
    bottom: 10px;"
  document.getElementById('mobile-menu').style = "bottom: -65%;"
  document.getElementById('mobile-menu-button').onclick = mobileMenu
}

var sidebar = function() {
  // document.getElementById('sidebar-button').value = "C\nL\nO\nS\nE"
  document.getElementById('sidebar-button').style.transform = "translateY(-50%) translateX(-50%)"
  document.getElementById('sidebar-button').onclick = exitSidebar

  document.getElementById('sidebar').style.transform = "translateX(0%)"

  document.getElementById('text').style.width = '50%'
}

var exitSidebar = function() {
  // document.getElementById('sidebar-button').value = "M\nE\nN\nU"
  document.getElementById('sidebar-button').style.transform = "translateY(-50%) translateX(50%)"
  document.getElementById('sidebar-button').onclick = sidebar

  document.getElementById('sidebar').style.transform = "translateX(-100%)"

  document.getElementById('text').style.width = '80%'
}

myScrollFunc()
sizeCheck()
exitSidebar()
