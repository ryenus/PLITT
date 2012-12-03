// ==UserScript==
// @name	PLITT
// @namespace	 ryenus.toys
// @include		 http://www.google.tld/*
// @include		 https://www.google.tld/*
// @include		 http://www.google.co.tld/*
// @include		 https://www.google.co.tld/*
// @include		 http://www.google.com.tld/*
// @include		 https://www.google.com.tld/*
// @Description allow visiting search result without the redirection overhead
// ==/UserScript==

(function(d) {
	if (! (d.forms[0] && d.forms[0].action.match(/search/))) return;
	var t = 0;
	d.addEventListener('DOMSubtreeModified', function() {
		if (t == 0) t = setTimeout(function() {
			var a = d.getElementsByClassName('l');
			if (a.length > d.getElementsByClassName('plitt').length) {
				for (var i = 0; i < a.length; i++) {
					var l = a[i];
					if (l.previousElementSibling) continue;
					l.insertAdjacentHTML("beforebegin",
						"<a href='" + l.href + "' target='_blank' class='plitt'>[#]</a>&nbsp;");
				}
			}
			t = 0;
		}, 500);
	}, false);
})(document);

