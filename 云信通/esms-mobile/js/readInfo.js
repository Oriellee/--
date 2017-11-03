$(function(){
	$(".operate").click(function(){
		$(".bottom").show();
		$(".overlay").show();
		$(".overlay").one("click", function () {
            $(".bottom").hide();
			$(".overlay").hide();
        });
		 event.stopPropagation();
	});
	 $(".bottom").click(function (event){
        event.stopPropagation();
    });
	//普通通知设为已读
	$(".set-readed").click(function(){
		 $(".bottom").hide();
		 $(".overlay").hide();
	});
	//普通通知设为已确定
	$(".set-cofirm").click(function(){
		 $(".bottom").hide();
		 $(".overlay").hide();
	});
	
	//活动通知和会议通知设为参加
	$(".set-join").click(function(){
		 $(".bottom").hide();
		 $(".overlay").hide();
	});

	//活动通知和会议通知，设为不参加
	$(".set-unjoin").click(function(){
		 $(".bottom").hide();
		 $(".overlay").hide();
	});

	//活动通知和会议通知设为待定
	$(".set-undetermined").click(function(){
		 $(".bottom").hide();
		 $(".overlay").hide();
	});

	//取消
	$(".cancel").click(function(){
		 $(".bottom").hide();
		 $(".overlay").hide();
	});
});