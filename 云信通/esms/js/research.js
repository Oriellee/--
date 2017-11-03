$(function(){
	//已发布、已撤回、草稿切换
	$(".left a").click(function(){
			$(".left a").removeClass("selected");
			$(this).addClass("selected");
			if($(this).hasClass("yfb")){
				$(".published").show();
				$(".un-published").hide();
				$(".draft").hide();
			}else if($(this).hasClass("wfb")){
				$(".draft").hide();
				$(".published").hide();
				$(".un-published").show();
			}else{
				$(".published").hide();
				$(".un-published").hide();
				$(".draft").show();
			}
	});

	//已投票、未读投票人员查看
	$(".vote-info,.vote-bar").mouseenter(function(){
		$(this).find(".work-notice-status-tip").show();
	});
	$(".vote-info,.vote-bar").mouseleave(function(){
		$(this).find(".work-notice-status-tip").hide();
	});
	
	
	//删除回复信息列表
	$(".del-repaly").click(function(){
		$(this).parent().parent().remove();
	});
	
});
 