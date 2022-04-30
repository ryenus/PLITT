// ==UserScript==
// @name        Google Sharp
// @namespace   ryenus.toys
// @description Number google search results
// @copyright   2014+ (https://github.com/ryenus)
// @license     MIT
// @version     2.3

// @homepageURL https://github.com/ryenus/g_sharp
// @homepageURL https://openuserjs.org/scripts/ryenus/Google_Sharp

// @updateURL   https://openuserjs.org/meta/ryenus/Google_Sharp.meta.js
// @downloadURL https://openuserjs.org/install/ryenus/Google_Sharp.min.user.js

// @include     http://www.google.tld/*
// @include     https://www.google.tld/*
// @include     http://www.google.co.tld/*
// @include     https://www.google.co.tld/*
// @include     http://www.google.com.tld/*
// @include     https://www.google.com.tld/*
// @grant       none
// ==/UserScript==

/* jshint esversion: 6 */
(function (d) {
  var done = false, fn = function () {
    var arr = d.querySelectorAll('.g a[data-ved]:not([role]):not([gnum])');
    if (arr.length > 0) {
      Array.from(arr, function (a, i) {
        a.setAttribute('gnum', '');
        var elem = (a.querySelector('h3') || a), tag = elem.tagName.match(/h3/i) ? 'h3' : 'span';
        elem.insertAdjacentHTML("beforebegin", `<a href='${a.href}'` +
          `target='_blank' rel='noopener noreferrer' style='display:inline' gnum>` +
          `<${tag} style='display:inline'>[#${i}]</${tag}></a>&nbsp;`);
      });
      done = true;
    }
  };

  var timer = setInterval(function () {
    done ? clearInterval(timer) : fn();
  }, 300);
})(document);
