/* Scroll Trigger v.1.0.2 - Copyright (C) 2022, TRMSC - https://trmsc1.wordpress.com/ */
/* GNU General Public Licence 3.0 - http://www.gnu.de/documents/gpl-3.0.en.html */

/* NEED TO LOAD JQUERY. IN MOODLE YOU CAN USE: */
/* https://github.com/TRMSC/moodle-editor-inline-codes/blob/main/jquery%20in%20moodle.html */

controlTrigger("#ID OR .CLASS"); // COPY AND ADJUST THIS LINE FOR MORE SCROLL TRIGGERED ELEMENTS

/* --- */

function controlTrigger(trg) {
    console.log('Start scroll-trigger for ' + trg);
    jQuery(trg).css("transition", "all 0.7s ease-in 0s");
    jQuery(window).scroll(function() {

       var hT = jQuery(trg).offset().top,
           hH = jQuery(trg).outerHeight(),
           wH = jQuery(window).height(),
           wS = jQuery(this).scrollTop();
       if ((wS > (hT-600)) && (wS < (hT+hH-180))) {
           jQuery(trg).css("opacity", "1");
           jQuery(trg).css("transform", "translate(0px, 0px)");
       } else {
           jQuery(trg).css("opacity", "0");
           jQuery(trg).css("transform", "translate(-50px, 0px)");
       }
    });
}
