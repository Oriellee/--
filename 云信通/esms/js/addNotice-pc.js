
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
	
	//新建新闻--选择频道select
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
		}
		//点击空白处时收回选项
		if(target.closest(".option").length == 0&&target.closest(".select dt").length == 0){ 
			$(".option").hide(); 
		}
	}) 
	
	//新建新闻--删除封面图片
	
	$(".item-bar .del").click(function(){
	$(this).parent().css("height","40px");
		$(".pImg,.del").hide();
	});
	
	//新建新闻--添加封面图片弹出
	$(".addImg").click(function(){
		$(".addImg-dialog").show();
		$(".cover").show();
	});
	
	//新建新闻--关闭添加封面图片弹出框
	$(".addImg-dialog .sure,.addImg-dialog .cancle,.addImg-dialog .close").click(function(){
		$(".addImg-dialog").hide();
		$(".cover").hide();
	})
	
	//新建调查--添加选项
	$(".add-option").click(function(){
				var  order = $(".input-list label").length;
				order = order+1;
				$(".input-list").append("<label class='num'>"+order+"、</label><input class='option-append' placeholder='最多40字'><span class='del-option'>删除</span>");
			});
			
			$(".input-list").on('click',".del-option", function(){
				
				$(this).prev().prev().remove();
				$(this).prev().remove();
				$(this).remove();
				//对所有label标签重新赋值
				$(".input-list label").each(function(i){
					$(this).html(i+1+"、");
				});
			});	
			
			//请输入选项提示的位置计算
			var h = $(".option-list").height();
			var top = (h-16)/2;
			$(".vote-xx label").css("margin-top",top);
			
	//新闻审核--待审批、已驳回、已撤回、已发布切换显示
	$(".item a").click(function(){
		$(".item a").removeClass("selectBtn");
		$(this).addClass("selectBtn");
		var a = $(this).index();
		$(".table_list").hide();
		$(".table_list:eq("+a+")").show();
		if(a==0||a==1||a==2){
			$(".del-remove1").hide();
			$(".btn-remove").hide();
		}
		if(a==3){
			$(".del-remove1").show();
			$(".btn-remove").hide();
			$(".btn-del").show();
		}
		if(a==4){
			$(".del-remove1").show();
			$(".btn-del").hide();
			$(".btn-remove").show();
		}
	});
	
	//新闻审核--驳回弹出框
	$(".tg-bh").click(function(){
		$(".bo-dialog").show();
		$(".cover").show();
	});
  //新闻审核--关闭驳回弹出框
  $(".bo-dialog .close,.bottom2 .publish,.bottom2 .save").click(function(){
	$(".bo-dialog").hide();
	$(".cover").hide();
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
	 //全选、全不选
	$('#checkboxFiveInput11,#checkbox11,#checkboxFive11,#checkA1l,#checkInput11').click(function() {
		$('input[name="subBox"]').prop("checked",this.checked); 
	});
	var $subBox = $("input[name='subBox']");
	$subBox.click(function(){
		$("#checkboxFiveInput11,#checkbox11,#checkboxFive11,#checkA1l,#checkInput11").prop("checked",$subBox.length == $("input[name='subBox']:checked").length ? true : false);
	});
	
	//新闻审核--弹出删除新闻框
	$(".delete-btn").click(function(){
		$(".deleteNews").show();
		$(".cover").show();
	});
	//新闻审核--关闭删除新闻框
	$(".deleteNews .close,.bottom2 .publish,.bottom2 .save").click(function(){
		$(".deleteNews").hide();
		$(".cover").hide();
	});
	//新闻审核--弹出批量删除新闻提示框
	$(".btn-del").click(function(){
		$(".deleteTip").show();
		$(".cover").show();
	});
	//新闻审核--关闭批量删除新闻提示框
	$(".deleteTip .close,.deleteTip .publish").click(function(){
		$(".deleteTip").hide();
		$(".cover").hide();
	});
	//新闻审核--弹出撤回新闻弹出框
	$(".return-btn").click(function(){
		$(".returnNews").show();
		$(".cover").show();
	});
	//新闻审核--关闭撤回新闻弹出框
	$(".returnNews .close,.returnNews .publish,.returnNews .save").click(function(){
		$(".returnNews").hide();
		$(".cover").hide();
	});
	
	//新闻审核--弹出提示选择新闻弹出框
	$(".btn-remove").click(function(){
		$(".removeTip").show();
		$(".cover").show();
	});
	//新闻审核--关闭提示选择新闻弹出框
	$(".removeTip .close,.removeTip .publish,.removeTip .save").click(function(){
		$(".removeTip").hide();
		$(".sel-dialog").show();
		$(".cover").hide();
	});
	//新闻审核--关闭迁移新闻弹出框
	$(".sel-dialog .close,.sel-dialog .publish,.sel-dialog .save").click(function(){
		$(".sel-dialog").hide();
		$(".cover").hide();
	});

	
	//我创建的--发布新闻弹出框
	$(".publish-btn").click(function(){
		$(".returnNews").show();
		$(".cover").show();
	});
	
	//新闻审核--关闭发布新闻弹出框
	$(".returnNews .close,.returnNews .publish,.returnNews .save").click(function(){
		$(".returnNews").hide();
		$(".cover").hide();
	});
	//所有页面校验提示信息弹出框位置
	$(".bottom .publish").click(function(){
		var screenHeight = $(window).height();  //当前浏览器窗口的高度
		var scrolltop = $(document).scrollTop();//获取当前窗口距离页面顶部高度
		var objTop = (screenHeight - $(".tips").height())/2 + scrolltop;
		$(".tips").css({top: objTop + 'px','display': 'block'}).delay(1000).fadeOut();;
	});
	
	//我创建的新闻--草稿、被驳回、审批中、已发布切换显示
	$(".item2 a").click(function(){
		$(".item2 a").removeClass("selectBtn");
		$(this).addClass("selectBtn");
		var a = $(this).index();
		$(".table_list").hide();
		$(".table_list:eq("+a+")").show();
		if(a==2){
			$(".del-remove1").show();
			$(".btn-del").show();
		}else{
		
			$(".del-remove1").hide();
		}

	});
	
	//置顶新闻--选择置顶时，弹出置顶时间框
	$(".selZd").click(function(){
		if ($(".selZd").is(":checked")) {
			$(".zd").show();
		} 
	});
	//置顶新闻--去消置顶时，取消置顶时间框
	$(".selZd").click(function(){
		if (!$(".selZd").is(":checked")) {
			$(".zd").hide();
		} 
	});
	
	//置顶新闻--选择自定义时，弹出日历
	$("#radioBox5").click(function(){
		if ($("#radioBox5").is(":checked")) {
			$(".diyTime").css("display","inline-block");
		} 
	});
	
	//置顶新闻--取消自定义时，日历消失
	$("input[name='zding']").click(function(){
		if ($("input[name='zding']").is(":checked")) {
		if (!$("#radioBox5").is(":checked")) {
			$(".diyTime").css("display","none");
		} 
	}	
	});
})
