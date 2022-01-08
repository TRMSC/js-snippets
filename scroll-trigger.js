/* Scroll Trigger v.1.1 - Copyright (C) 2022, TRMSC - https://trmsc1.wordpress.com/ */
/* GNU General Public Licence 3.0 - http://www.gnu.de/documents/gpl-3.0.en.html */

/* NEED TO LOAD JQUERY. IN MOODLE YOU CAN USE: */
/* https://github.com/TRMSC/moodle-editor-inline-codes/blob/main/jquery%20in%20moodle.html */

triggerIdCount = 0;
scrollTrigger ("#id .class or element", "right or left"); // ADJUST THIS LINE. COPY THIS LINE FOR MORE SCROLL TRIGGERED ELEMENTS

function scrollTrigger (trg, trgDir) {
    if(trg.includes("#")) {
        console.log("Scroll Trigger found: " + trg);
        triggerFromLeft(trg);
    } else {
        jQuery(trg).each(function () {
            if(this.id == 0) {
                jQuery(this).attr("id", "triggerID" + triggerIdCount);
                console.log("Scroll Trigger added: #triggerID" + triggerIdCount);
                triggerIdCount ++;
            } else {
                console.log("Scroll Trigger found: #" + this.id);
            }
            triggerFromLeft("#" + this.id);
        });
    }
    console.log('Start scroll-trigger from left for ' + trg + " from " + trgDir);
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
           if (trgDir == "right") {
               jQuery(trg).css("transform", "translate(50px, 0px)");
           } else {
               jQuery(trg).css("transform", "translate(-50px, 0px)");
           }
       }
    });
    return;
}
