*!
 * Asit's GitHub Pages Root
 * Copyright 2022 Asit Piri
 * Licensed under the MIT Licence 
 */
!function(a){"use strict";a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=a(this.hash);if((t=t.length?t:a("[name="+this.hash.slice(1)+"]")).length)return a("html, body").animate({scrollTop:t.offset().top-48},1e3,"easeInOutExpo"),!1}}),a(".js-scroll-trigger").click(function(){a(".navbar-collapse").collapse("hide")}),a("body").scrollspy({target:"#mainNav",offset:54});var t=function(){a("#mainNav").offset().top>100?a("#mainNav").addClass("navbar-shrink"):a("#mainNav").removeClass("navbar-shrink")};t(),a(window).scroll(t)}(jQuery),$("#eml").attr("href","mailto:"+atob("YW1pdGhrdW1hcmFuQGdtYWlsLmNvbQ==")).text(atob("YW1pdGhrdW1hcmFuQGdtYWlsLmNvbQ==")),new TypeIt("#typewriter",{strings:["Android apps","full stack solutions","web apps","Django apps"],speed:100,breakLines:!1,autoStart:!0,loop:!0});
