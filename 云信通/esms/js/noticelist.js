$(function(){
	//已发布和未发布通知切换
	$(".left a").click(function(){
			$(".left a").removeClass("selected");
			$(this).addClass("selected");
			if($(this).hasClass("yfb")){
				$(".published").show();
				$(".un-published").hide();
				$(".recallList").hide();
			}else if($(this).hasClass("ch")){
				$(".published").hide();
				$(".un-published").hide();
				$(".recallList").show();
			}else{
				$(".published").hide();
				$(".un-published").show();
				$(".recallList").hide();
			}
	});

	//已读、未读、已确定人员查看
	$(".read-info").mouseenter(function(){
		$(this).find(".work-notice-status-tip").show();
	});
	$(".read-info").mouseleave(function(){
		$(this).find(".work-notice-status-tip").hide();
	});
	
	
	//删除回复信息列表
	$(".del-repaly").click(function(){
		$(this).parent().parent().remove();
	});
	
});
 