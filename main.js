
function func() {
    $(document).ready(function () {
        var $nav = $(".fix_side");
        var maxWidth = parseInt($(".fix_side").css('width'));
        var $h = $nav.offset().top;
        $(window).scroll(function () {
            if ($(window).scrollTop() > $h) {
                $nav.addClass("fixed");
                $nav.css('max-width', maxWidth);
            } else {
                $nav.removeClass("fixed");
            }
        });

    })

}
setTimeout(func, 1000);
function Timer() {
	function e(e) {
		var i = t(new Date(e).getHours()),
			o = t(new Date(e).getMinutes()),
			n = t(new Date(e).getSeconds());
		s.each(function () {
			$(this).find(".hours").text(i), $(this).find(".minutes").text(o), $(this).find(".seconds").text(n)
		})
	}

	function t(e) {
		return e >= 10 ? e : "0" + e
	}

	function i() {
		a == r ? clearInterval(d) : (a -= 1e3, e(a))
	}

	function o() {
		d = setInterval(i, 1e3)
	}
	var s = $(".timer"),
		n = new Date,
		r = 60 * n.getTimezoneOffset() * 1e3,
		l = new Date((new Date).getTime() + 864e5);
	l.setHours(0), l.setMinutes(0), l.setSeconds(0);
	var a = l - n + r;
	i(), o();
	var d
}
Timer();