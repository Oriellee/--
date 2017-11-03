$(function(){
	//点击参加按钮
	$(".reply-btn .join").click(function(){
		$(".reply-btn").hide();
		$(".reply-answer").show();
		$(".idea .join-info").text("参加");
		$(".idea .img").hide();
		$(".refuse-reason-text").hide();
	});
	
	//点击不参加按钮--弹出填写理由框
	$(".reply-btn .unjoin").click(function(){
		$(".overlay").show();
		$(".refuse-reason").show();
	});
	
	//拒绝理由弹出框--取消
	$(".refuse-btn .cancel").click(function(){
		$(".overlay").hide();
		$(".refuse-reason").hide();
	});
	
	//拒绝理由弹出框--发表
	$(".refuse-btn .publish").click(function(){
		$(".overlay").hide();
		$(".refuse-reason").hide();
		$(".reply-btn").hide();
		$(".reply-answer").show();
		$(".idea .join-info").text("不参加");
		$(".idea .img").show();
		$(".idea .img").removeClass("up");
		$(".refuse-reason-text").hide();
	});
	
	//点击待定按钮
	$(".reply-btn .undetermined").click(function(){
		$(".reply-btn").hide();
		$(".reply-answer").show();
		$(".idea .join-info").text("待定中");
		$(".idea .img").hide();
		$(".refuse-reason-text").hide();
	});
	
	//点击更改决定
	$(".reply-answer .change-idea").click(function(){
		$(".reply-btn").show();
		$(".reply-answer").hide();
	});
	
	
	$(window).scroll(function(){  //只要窗口滚动,就触发下面代码 
		var scrollt = document.documentElement.scrollTop + document.body.scrollTop; //获取滚动后的高度 
		
		if( scrollt >1 ){ 
			$(".reply-btn,.reply-answer").addClass("fixed");
		}else{
			$(".reply-btn,.reply-answer").removeClass("fixed");
		}
	});
})