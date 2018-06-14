var timer = 4000;

var i = 0;
var max = $('#c > li').length;

	$("#c > li").eq(i).addClass('active').css('left','0');
	$("#c > li").eq(i + 1).addClass('active').css('left','20%');
	$("#c > li").eq(i + 2).addClass('active').css('left','40%');
	$("#c > li").eq(i + 3).addClass('active').css('left','60%');
	$("#c > li").eq(i + 4).addClass('active').css('left','80%');


	setInterval(function(){

		$("#c > li").removeClass('active');

		$("#c > li").eq(i).css('transition-delay','1s');
		$("#c > li").eq(i + 1).css('transition-delay','1.5s');
		$("#c > li").eq(i + 2).css('transition-delay','2s');
		$("#c > li").eq(i + 3).css('transition-delay','2.5s');
		$("#c > li").eq(i + 4).css('transition-delay','3s');

		if (i < max-5) {
			i = i+5;
		}

		else {
			i = 0;
		}

		$("#c > li").eq(i).css('left','0').addClass('active').css('transition-delay','1.5s');
		$("#c > li").eq(i + 1).css('left','20%').addClass('active').css('transition-delay','2s');
		$("#c > li").eq(i + 2).css('left','40%').addClass('active').css('transition-delay','2.50s');
		$("#c > li").eq(i + 3).css('left','60%').addClass('active').css('transition-delay','3s');
		$("#c > li").eq(i + 4).css('left','80%').addClass('active').css('transition-delay','3.50s');

	}, timer);
