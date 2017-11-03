$(function(){
	$(".option-box").click(function(){
		if($(this).find("input").prop('checked')){
			$(this).find("label").addClass("bg");
		}else{
			$(this).find("label").removeClass("bg");
		};

	});
	$(".option-radio").click(function(){
		if($(this).find("input").prop('checked')){
			$(".option-radio label").removeClass("bg");
			$(this).find("label").addClass("bg");
		}
	});
	
	$(".votePiao button").click(function(){
		$(".unVoteTip").show(300).delay(2000).hide(300);

	});
	
});