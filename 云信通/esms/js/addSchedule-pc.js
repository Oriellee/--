$(function(){

 //点×和取消关闭日期弹出框
	$(".close,.cancle").click(function(){
		$(".time-dialog").hide();
		$(".cover").hide();
	});
	////点确定关闭日期弹出框
	$(".sure").click(function(){
		$(".time-dialog").hide();
		$(".cover").hide();
	});
	//弹出日期框
	$(".dateIcon").click(function(){
		$(".time-dialog").show();
		$(".cover").show();
	});
 /**
	 * 发送范围框开始
	 */
	//弹出发送范围框
	$(".addIcon").click(function(){
		$(".range-dialog").show();
		$(".cover").show();
	});
    //点取消关闭发送范围弹出框
	$(".range-dialog .cancel").click(function(){
		$(".range-dialog").hide();
		$(".cover").hide();
	});
	//点确定关闭发送范围弹出框
	$(".range-dialog .confirm").click(function(){
		$(".range-dialog").hide();
		$(".cover").hide();
	});
	//清空搜索输入框
	$(".clean_input").click(function(){
		$(this).prev().val("");
		rangeSearch();
	});
	/**
	 * 发送范围框结束
	 */
	 
	 //所有页面校验提示信息弹出框位置
	$(".bottom .publish").click(function(){
		var screenHeight = $(window).height();  //当前浏览器窗口的高度
		var scrolltop = $(document).scrollTop();//获取当前窗口距离页面顶部高度
		var objTop = (screenHeight - $(".tips").height())/2 + scrolltop;
		$(".tips").css({top: objTop + 'px','display': 'block'}).delay(1000).fadeOut();;
	});
	
	//提醒设置选择
	/*====================点击事件=====================*/
	$(document).bind("click",function(e){ 
		var target = $(e.target);  //判断点击的目标对象
		
		//点击目标 标题栏(.select dt)时,收回全部选项表,展开当前选项表
		if(target.closest(".select dt").length != 0){  
			$(".option").hide();
			target.next('div').show();
		}
		//点击目标 选项(.select dd)时,改变选值到标题栏(dt),存储选值到title,收回选项表
		if(target.closest(".option dd").length != 0){
			$(".option dd").removeClass("selAct");
			target.parent('div').prev('dt').text(target.text());
			target.addClass("selAct");
			target.parent('div').prev('dt').attr('title',target.text());
			target.parent('div').hide();
			if(target.text()=="自定义提醒"){
				$(".time-dialog").show();
				$(".cover").show();
			}
			if(target.text()=="重复次数"){
				$(".cb").hide();
				$(".crq").hide();
				$(".cs").css("display","inline-block");
			}
			if(target.text()=="结束日期"){
				$(".cb").hide();
				$(".cs").hide();
				$(".crq").css("display","inline-block");
			}
			if(target.text()=="从不"){
				$(".cb").css("display","inline-block");
				$(".cs").hide();
				$(".crq").hide();
			}
			//重复--弹出按周框
			if(target.text()=="按周"){
				$(".byWeek").show();
				$(".cover").show();
			}
			if(target.text()=="按月"){
				$(".byMonth").show();
				$(".cover").show();
			}
			if(target.text()=="不重复"){
				$(".repeatType").hide();
			}
			if(target.text()=="自定义"){
				$(".userDefined").show();
				$(".cover").show();
			}
			
		}
		//点击空白处时收回选项
		if(target.closest(".option").length == 0&&target.closest(".select dt").length == 0){ 
			$(".option").hide(); 
		}
	}) 
	
	//重复--关闭按周框
	$(".byWeek .close,.byWeek .sure,.byWeek .cancle").click(function(){
		$(".byWeek").hide();
		$(".cover").hide();
		$(".repeatType").show();
	});
	//重复--关闭按自定义框
	$(".userDefined .close,.userDefined .sure,.userDefined .cancle").click(function(){
		$(".userDefined").hide();
		$(".cover").hide();
		$(".repeatType").show();
	});
	
	//重复--按月
	$(".dateMonth ul li").click(function(){
		$(this).toggleClass("active");
	});
	//重复--关闭按月框
	$(".byMonth .close,.byMonth .sure,.byMonth .cancle").click(function(){
		$(".byMonth").hide();
		$(".cover").hide();
		$(".repeatType").show();
	});
})
