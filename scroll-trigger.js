/* Scroll Trigger v.1.2 - Copyright (C) 2022, TRMSC - https://trmsc1.wordpress.com/ */
/* GNU General Public Licence 3.0 - http://www.gnu.de/documents/gpl-3.0.en.html */

/* NEED TO LOAD JQUERY. IN MOODLE YOU CAN USE: */
/* https://github.com/TRMSC/moodle-editor-inline-codes/blob/main/scroll-trigger.html */

console.log('Scroll Trigger v.1.2');
triggerIdCount = 0;

/* ADD A SELECTOR + DIRECTION IN LINE 13 AND REMOVE THE TWO SLASHS TO ACTIVATE ELEMENT FOR SCROLL TRIGGERING 📌 */ 
/* COPY THE LINE FOR TRIGGERING MORE ELEMENTS ✨ */

// scrollTrigger ("#id .class or element", "right or left"); 


function scrollTrigger(trg, trgDir) {
    if (jQuery(trg).val() != 0) {
        console.log("Scroll Trigger: " + trg + " doesn't exist");
        return;
    }
    if (trg.includes("#")) {
        console.log("Scroll Trigger found: " + trg);
        startTrigger(trg, trgDir);
    } else {
        jQuery(trg).each(function() {
            if (this.id == 0) {
                jQuery(this).attr("id", "triggerID" + triggerIdCount);
                trg = "#" + this.id;
                console.log("Scroll Trigger added: " + trg);
                triggerIdCount++;
                startTrigger(trg, trgDir);
            } else {
                trg = "#" + this.id;
                console.log("Scroll Trigger found: " + trg);
                startTrigger(trg, trgDir);
            }
        });
    }
    return;
}

function startTrigger(trg, trgDir) {
    trg = "#region-main " + trg;
    console.log("Start scroll-trigger from " + trgDir + " for " + trg);
    jQuery(trg).css("transition", "all 0.7s ease-in 0s");
    jQuery(window).scroll(function() {
        var hT = jQuery(trg).offset().top,
            hH = jQuery(trg).outerHeight(),
            wH = jQuery(window).height(),
            wS = jQuery(this).scrollTop();
        if ((wS > (hT - 600)) && (wS < (hT + hH - 180))) {
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
