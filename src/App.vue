<template>
  <div id="nav">
    <ul>
      <li><router-link to="/">WORKS</router-link></li>
      <li><router-link to="/about">ABOUT</router-link></li>
      <li><router-link to="/careers">CAREERS</router-link></li>
      <li><router-link to="/Swiper">SWIPER</router-link></li>
    </ul>
    <div class="menu-animation-line active--index"></div>
  </div>
  <router-view/>
</template>

<style>
html {overflow-y:scroll;}
body {font-size:16px; line-height:1.5; font-weight:400; color:#000; font-family: AppleSDGothicNeo-Regular,'Malgun Gothic','맑은 고딕',dotum,'돋움',sans-serif}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {margin:0; padding:0;}
ol, ul {list-style:none;}
table {border-collapse:collapse; border-spacing:0;}
img, fieldset {border:0;}
input, select, textarea {vertical-align:middle;}
button, select {text-transform:none;}
textarea {overflow:auto; resize:vertical;}
label {cursor:pointer;}
a {color:#000; text-decoration:none;}
a:active, a:hover, a:focus { text-decoration:none;}
button{margin:0px; padding:0px; cursor:pointer; border:0px; background:none;}
a:focus, button:focus{
	outline:none;
}

/* input 기본 스타일 초기화 */
input:not(input[type="checkbox"], input[type="radio"]),
select{border-radius:0; appearance:none;}
input:not(input[type="checkbox"], input[type="radio"])::-ms-clear,
select::-ms-expand{display: none;}
#app {}

#nav {position:fixed; top:50px; right:45px; z-index:9999;
  transition: opacity 2s;
  transition-property: opacity;
  transition-duration: 2s;
  transition-timing-function: ease;
  transition-delay: 0s;
  transition:opacity 2s;
}
#nav ul {display:flex;}
#nav ul li {padding: 0 15px;}
#nav a {font-size:14px; color:#000; font-weight:600; letter-spacing:-0.2px;}

#nav a.router-link-exact-active {
  color: #42b983;
}
.menu-animation-line {position:absolute; left:0; bottom:-1px; height:1px; background-color:#000;
  transition: transform .9s cubic-bezier(.785,.135,.15,.86),width .9s cubic-bezier(.785,.135,.15,.86),-webkit-transform .9s cubic-bezier(.785,.135,.15,.86);
}

.menu-animation-line.active--index {width:33%; transform: translateX(21px);}
.menu-animation-line.active--about {width:33%; transform: translateX(98px);}
.menu-animation-line.active--carres {width:33%; transform: translateX(251px);}
</style>

<script>
// eslint-disable-next-line no-unused-vars

export default {
  setup() {
    // eslint-disable-next-line no-unused-vars
    const menuAnimation = document.querySelector('menu-animation-line');
    function menuMotion() {
      menuAnimation.addEventListener('mouserover', function(){
        menuAnimation.classList.toggle('on');
      });
    }
    menuMotion;

  }
}
</script>
