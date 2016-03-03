// ==UserScript==
// @name         Twitter - Scroll to last tweet
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Scrolls to latest tweet after pressing "View X new tweets" button
// @author       TETYYS
// @match        https://twitter.com/
// @grant        none
// @run-at       document-idle
// ==/UserScript==
/* jshint -W097 */
'use strict';

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    var last = $('.stream ol li').get(0);
    var bar = $('.js-new-tweets-bar');
    if (bar.length != 0) {
        var num = $('.js-new-tweets-bar').text().trim().match(/\d+/);
        if (num > 5) {
            bar.click(function() {
                setTimeout(function() { last.scrollIntoView(); }, 500);
            });
        }
    }
});

observer.observe(document, {
  subtree: true,
  attributes: true
});
