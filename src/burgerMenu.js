var line = $('.line-block');
var crossBurg = $('.cross-burger');

crossBurg.click(function(){
	if(!crossBurg.hasClass('active')){
		crossBurg.addClass('active');
		line.eq(1).animate({'width': 0},50);
		setTimeout(function(){
			line.eq(0).addClass('line-block-new-pos');
			line.eq(2).addClass('line-block-new-pos-2');
		},250);	
	} else{
		line.eq(0).removeClass('line-block-new-pos');
		line.eq(2).removeClass('line-block-new-pos-2');
		setTimeout(function(){
			line.eq(1).css('width','75%');
		},200);	
		crossBurg.removeClass('active');
	}
});
// ---------------------------------------------------
var circle = $('.line-circle');
var circleBurg = $('.circle-burger');

circleBurg.click(function(){
	if(!circleBurg.hasClass('active')){
		circleBurg.addClass('active');
		circle.eq(0).css('opacity','0');
		circle.eq(2).css('opacity','0');	
		circle.eq(1).addClass('circle-new');
	} else{
		circle.eq(0).css('opacity','1');
		circle.eq(2).css('opacity','1');	
		circle.eq(1).removeClass('circle-new');
		circleBurg.removeClass('active');
	}
});
// ---------------------------------------------------
var arrow = $('.line-arrow');
var arrowBurg = $('.arrow-burger');

arrowBurg.click(function(){
	if(!arrowBurg.hasClass('active')){
		arrowBurg.addClass('active');
		arrow.eq(0).addClass('arrow-block');
		arrow.eq(2).addClass('arrow-block-2');
	} else{
		arrowBurg.removeClass('active');
		arrow.eq(0).removeClass('arrow-block');
		arrow.eq(2).removeClass('arrow-block-2');
	}
});
// -------------------------------------------------
var twistBurg = $('.twist-burger');
var twist = $('.line-twist');

twistBurg.click(function(){
	if(!twistBurg.hasClass('active')){
		twistBurg.addClass('active');
		twistBurg.css('transform','rotate(180deg)');
		twist.eq(1).css('opacity','0');
		twist.eq(0).addClass('line-block-new-pos');
		twist.eq(2).addClass('line-block-new-pos-2');
	} else{
		twistBurg.css('transform','rotate(0deg)');
		twist.eq(0).removeClass('line-block-new-pos');
		twist.eq(1).css('opacity','1');
		twist.eq(2).removeClass('line-block-new-pos-2');
		twistBurg.removeClass('active');
	}
});
// ----------------------------------------------------
var anCircleBurg = $('.animate-circle-burger');
var round = $('.line-round');



