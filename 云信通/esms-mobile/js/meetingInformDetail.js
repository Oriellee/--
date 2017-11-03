$(function(){
	//	请假理由输入框默认文本
	var textarea=document.getElementById('textarea');
	if(textarea!=null){
	$(textarea).css("color","#a5a5a5");
	document.getElementById('textarea').value="填写请假事由(非必填，最多200字)";
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
		
 
		
	//会议纪要-参会人员
	$(".person-list").click(function(){
		$(this).hide();
		$(".person-list-all").show();
	});
	$(".person-list-all").click(function(){
		$(this).hide();
		$(".person-list").show();
	});
	//请假申请记录--按条件检索
	$(".select span,.select img").click(function(){
		$(".search-all").toggle();
	});
	$(".search-all li").click(function(){
		var content = $(this).text();
		$(".search-all li img").hide();
		$(this).find("img").show();
		$(".search-all").hide();
		
		$(".select span").text(content);
	});
	//请假申请记录--点击操作按钮
	$(".opt-btn").click(function(){
		$(".bottom").show();
		$(".overlay").show();
		$(".overlay").one("click", function () {
            $(".bottom").hide();
			$(".overlay").hide();
			$(".refuse-reason-box").hide();
        });
		 event.stopPropagation();
	});
	//请假申请记录--审批同意
	$(".yes").click(function(){
		$(".bottom").hide();
		$(".overlay").hide();
	});
	//请假申请记录--审批不同意
	$(".no").click(function(){
		$(".bottom").hide();
		$(".refuse-reason-box").show();
	});
	//请假记录--审批不同意理由取消
	$(".cancel,.publish").click(function(){
		$(".overlay").hide();
		$(".refuse-reason-box").hide();
	});
	
	//请假申请详情页--默认头像颜色设置
	$(".bg-color").each(function(arr){
		var arr = ['#ff9852','#70b45a','#11b7f5','#fdcc09','#4683d5','#fe7c7b'];
		var n = getRandom(6);
		var color = arr[n];
		 $(this).css("background",color);
	})

	var h = $(".reason-detail div").height();
		//请假申请详情页--点修改按钮
	$(".edit a").one("click",(function(){
		$(".reason-detail div").html("<textarea>不能及时赶回出差中，不能及时赶回出差中，不能及时赶回出差中</textarea>");
		$(".reason-detail div textarea").height(h);
		$(".reason-detail div textarea").focus();
		$(".approve-result").hide();
		$(".edit a").text("提交");	
	}));
	//点击参加按钮
	$(".reply-btn .join").click(function(){
		$(".reply-btn").hide();
		$(".reply-answer").show();
		$(".idea .join-info").text("参加");
	});
	
	//点击请假按钮
	$(".reply-btn .unjoin").click(function(){
		//页面跳转到新建请假申请页面
		//window.location.href="newLeaveApply.html";
		$(".reply-btn").hide();
		$(".reply-answer").show();
		$(".idea .join-info").text("请假");
		$(".idea .join-info").append("<a href='#' style='color:#FFAD1D'>审批中</a>");
		//$(".idea .join-info").append("<a href='#' style='color:#168F06'>已同意</a>");
		//$(".idea .join-info").append("<a href='#' style='color:#FD3130'>不同意</a>");
	});
	//点击待定按钮
	$(".reply-btn .undetermined").click(function(){
		$(".reply-btn").hide();
		$(".reply-answer").show();
		$(".idea .join-info").text("待定中");
	});
	
	//点击更改决定
	$(".reply-answer .change-idea").click(function(){
		$(".reply-btn").show();
		$(".reply-answer").hide();
	});
	//点击底部更多按钮
	$(".more a").click(function(){
		$(".more-oprate").show();
		$(".overlay").show();
		$(".overlay").one("click", function () {
            $(".more-oprate").hide();
			$(".overlay").hide();
        });
		 event.stopPropagation();
	});
	//点击更多弹出页的取消
	$(".more-oprate .cancel").click(function(){
		$(".more-oprate").hide();
		$(".overlay").hide();
	});
	
	/*$(window).scroll(function(){  //只要窗口滚动,就触发下面代码 
		var scrollt = document.documentElement.scrollTop + document.body.scrollTop; //获取滚动后的高度 
		
		if( scrollt >1 ){ 
			$(".reply-btn,.reply-answer").addClass("fixed");
		}else{
			$(".reply-btn,.reply-answer").removeClass("fixed");
		}
	});*/
	
	//生成随机数
	function getRandom(n){
        return Math.floor(Math.random()*n)
       }
})