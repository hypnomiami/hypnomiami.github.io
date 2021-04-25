(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
var wl;

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
function em1(){var c="";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}
function em2(){var c="bnzAizqopfttfodf/dpn!";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}
var notifyyt,notifyqueue;function onYouTubeIframeAPIReady(){notifyyt(),window.loadyt=function(e){e()}}window.loadyt=function(e){var t=document.createElement("script");t.src="https://www.youtube.com/player_api";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n),notifyqueue||(notifyqueue=[],notifyyt=function(){var e;for(e=0;e<notifyqueue.length;++e){(0,notifyqueue[e])()}}),notifyqueue.push(e)};window.plstp||(window.plstp=[]),plst=function(p,w){for(f in window.plstp)window.plstp[f]();window.plstp=[],window.plstp[p]=w},plrm=function(p){delete window.plstp[p]};ldsrcset=function(t){var e,r=document.querySelectorAll(t);for(e=0;e<r.length;e++){var c=r[e].getAttribute("data-srcset");r[e].setAttribute("srcset",c)}},ldsrc=function(t){var e=document.querySelector(t),r=e.getAttribute("data-src");e.setAttribute("src",r)};!function(){if("Promise"in window){var e,t,r=document,n=function(){return r.createElement("link")},o=new Set,a=n(),i=a.relList&&a.relList.supports&&a.relList.supports("prefetch"),s=location.href.replace(/#[^#]+$/,"");o.add(s);var c=function(e){var t=location,r="http:",n="https:";if(e&&e.href&&e.origin==t.origin&&[r,n].includes(e.protocol)&&(e.protocol!=r||t.protocol!=n)){var o=e.pathname;if(!(e.hash&&o+e.search==t.pathname+t.search||".html"!=o.substr(-5)&&".html"!=o.substr(-5)&&"/"!=o.substr(-1)))return!0}},u=function(e){var t=e.replace(/#[^#]+$/,"");if(!o.has(t)){if(i){var a=n();a.rel="prefetch",a.href=t,r.head.appendChild(a)}else{var s=new XMLHttpRequest;s.open("GET",t,s.withCredentials=!0),s.send()}o.add(t)}},f=function(e){return e.target.closest("a")},p=function(t){var r=t.relatedTarget;r&&f(t)==r.closest("a")||e&&(clearTimeout(e),e=void 0)},l={capture:!0,passive:!0};r.addEventListener("touchstart",function(e){t=performance.now();var r=f(e);c(r)&&u(r.href)},l),r.addEventListener("mouseover",function(r){if(!(performance.now()-t<1200)){var n=f(r);c(n)&&(n.addEventListener("mouseout",p,{passive:!0}),e=setTimeout(function(){u(n.href),e=void 0},80))}},l)}}();

$(function(){
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){var a='data-src';var e=document.querySelector('.js4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/strong-girl-e1467346487831-1000.jpg');
var e=document.querySelector('.js2');e.setAttribute('src',(dpi>1)?'images/france-500.png':'images/france-250.png');}else if($(window).width()>=960){var a='data-src';var e=document.querySelector('.js4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/strong-girl-e1467346487831-800.jpg');
var e=document.querySelector('.js2');e.setAttribute('src',(dpi>1)?'images/france-400.png':'images/france-200.png');}else if($(window).width()>=768){var a='data-src';var e=document.querySelector('.js4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/strong-girl-e1467346487831-640.jpg');
var e=document.querySelector('.js2');e.setAttribute('src',(dpi>1)?'images/france-320.png':'images/france-160.png');}else if($(window).width()>=480){var a='data-src';var e=document.querySelector('.js4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/strong-girl-e1467346487831-798.jpg':'images/strong-girl-e1467346487831-399.jpg');
var e=document.querySelector('.js2');e.setAttribute('src',(dpi>1)?'images/france-344.png':'images/france-172.png');}else{var a='data-src';var e=document.querySelector('.js4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/strong-girl-e1467346487831-532.jpg':'images/strong-girl-e1467346487831-266.jpg');
var e=document.querySelector('.js2');e.setAttribute('src',(dpi>1)?'images/france-230.png':'images/france-115.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
window.loadyt(function(){var p=new YT.Player('pl1',{host:'https://www.youtube-nocookie.com',videoId: '3fUMWrWnpTU',playerVars:{'playsinline':1,'rel':0},events:{onStateChange:function(e){1===e.data&&plst('pl1',function(){e.target.pauseVideo()}),2===e.data&&plrm('pl1')}}});});initMenu($('#m1')[0]);
ldsrc('.js4');ldsrcset('.js66 source');$('.c40').Stickyfill();
wl=new woolite();
wl.init();
wl.addAnimation($('.js1')[0], "1.50s", "0.00s", 1, 100);
wl.addAnimation($('.js3')[0], "1.50s", "1.00s", 1, 100);
wl.addAnimation($('.js5')[0], "2.00s", "0.00s", 1, 100);
wl.addAnimation($('.js6')[0], "0.80s", "0.00s", 1, 100);
wl.addAnimation($('.js7')[0], "1.00s", "0.20s", 1, 100);
wl.addAnimation($('.js8')[0], "1.00s", "0.30s", 1, 100);
wl.addAnimation($('.js9')[0], "1.00s", "0.40s", 1, 100);
wl.addAnimation($('.js10')[0], "1.80s", "0.00s", 1, 100);
wl.addAnimation($('.js11')[0], "1.80s", "0.00s", 1, 100);
wl.addAnimation($('.js12')[0], "1.80s", "0.00s", 1, 100);
wl.addAnimation($('.js13')[0], "1.80s", "0.00s", 1, 100);
wl.start();

});