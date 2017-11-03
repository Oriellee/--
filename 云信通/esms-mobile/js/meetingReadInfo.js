$(function(){

	//请假理由输入框默认文本
	var textarea=document.getElementById('textarea');
	if(textarea!=null){
	$(textarea).css("color","#a5a5a5");
		textarea.value="填写请假事由(非必填，最多200字)";
		textarea.onfocus=function(){
		$(textarea).css("color","#000");
  　　　　 if(this.value=='填写请假事由(非必填，最多200字)'){
  　　　　　　this.value='';
 　　　　	};
 　　	};
 
		textarea.onblur=function(){
 　　　　 if(!this.value){
			$(textarea).css("color","#a5a5a5");
 　　　　　　this.value = '填写请假事由(非必填，最多200字)';
 　　　　 };
 　　  };
	}
		
 
 
	$(".operate").click(function(){
		$(".bottom").show();
		$(".overlay").show();
		$(".overlay").one("click", function () {
            $(".bottom").hide();
			$(".overlay").hide();
			$(".refuse-reason-box").hide();
        });
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
	//设为迟到
	$(".set-late").click(function(){
		 $(".bottom").hide();
		 $(".overlay").hide();
	});
	//设为缺勤
	$(".set-leave").click(function(){
		 $(".bottom").hide();
		 $(".overlay").hide();
	});
	
	//活动通知和会议通知设为参加
	$(".set-join").click(function(){
		 $(".bottom").hide();
		 $(".overlay").hide();
	});
	//会议通知，设为请假
	$(".set-unjoin").click(function(){
		 $(".bottom").hide();
		 $(".refuse-reason-box").show();
	});

	//活动通知和会议通知设为待定
	$(".set-undetermined").click(function(){
		 $(".bottom").hide();
		 $(".overlay").hide();
	});

	//取消,发表
	$(".cancel,.publish").click(function(){
		 $(".refuse-reason-box").hide();
		 $(".bottom").hide();
		 $(".overlay").hide();
	});
});