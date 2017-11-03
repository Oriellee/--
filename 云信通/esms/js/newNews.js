$(function(){

	//提交页面 弹出提示框
	$(".publish-btn").click(function(){
			var x = $(".publish-btn").offset().left;
			var y = $(".publish-btn").offset().top;
			$(".toast").show();
			$(".toast").offset({top:y-300,left:x-100});
			setTimeout("$('.toast').css('display','none')",1500);
		});
	$(".news-prise").mouseover(function(){
		$(this).find(".work-notice-status").show();
	});
	$(".news-prise").mouseleave(function(){
		$(this).find(".work-notice-status").hide();
	});
	$(".read-info").mouseleave(function(){
		$(this).find(".work-notice-status-tip").hide();
	});
	//全选、全不选
	$("#checkAll,#checkAll1").click(function() {
		$('input[name="subBox"]').prop("checked",this.checked); 
	});
	var $subBox = $("input[name='subBox']");
	$subBox.click(function(){
		$("#checkAll,#checkAll1").prop("checked",$subBox.length == $("input[name='subBox']:checked").length ? true : false);
	});
	
	
	//草稿、被驳回、审批中、已发布切换显示
	$(".search_left a").click(function(){
		$(".search_left a").removeClass("active");
		$(this).addClass("active");
		var a = $(this).index();
		$(".table_list").hide();
		$(".table_list:eq("+a+")").show();
		if(a==0||a==1){
			$(".del-remove").show();
		}
		if(a==2||a==3){
			$(".del-remove").hide();
		}
	});
	
	//待审批、已驳回、已撤回、已发布切换显示
	$(".search_left1 a").click(function(){
		$(".search_left1 a").removeClass("active");
		$(this).addClass("active");
		var a = $(this).index();
		$(".table_list").hide();
		$(".table_list:eq("+a+")").show();
		if(a==0||a==1){
			$(".del-remove1").hide();
			$(".btn-remove").hide();
		}
		if(a==2||a==3){
			$(".del-remove1").show();
			$(".btn-remove").hide();
		}
		if(a==3){
			$(".btn-remove").show();
		}
	});
	//删除新闻
	$(".btn-del").click(function(){
		var checkedValue = $("input[name='subBox']:checked").length;
		if(checkedValue==0){
			$("#dialog").dialog({
				modal : true,
				width : 350,
				height : 160,
				buttons: {
					"确定": function() {
						$( this ).dialog( "close" );
					},
					 "取消": function() {
						$( this ).dialog( "close" );
					}
				}
			});
		}
	});
	
	//频道迁移
	$(".btn-remove").click(function(){
			$("#dialog1").dialog({
				modal : true,
				width : 350,
				height : 160,
				buttons: {
					"确定": function() {
						$( this ).dialog( "close" );
					},
					 "取消": function() {
						$( this ).dialog( "close" );
					}
				}
			});
	});
	
	//删除某一条新闻
	$(".delete").click(function(){
		$("#dialog2").dialog({
				modal : true,
				width : 350,
				height : 160,
				buttons: {
					"确定": function() {
						$( this ).dialog( "close" );
					},
					 "取消": function() {
						$( this ).dialog( "close" );
					}
				}
			});
	});
	
	//发布某一条新闻
	$(".publish").click(function(){
		$("#dialog3").dialog({
				modal : true,
				width : 350,
				height : 160,
				buttons: {
					"确定": function() {
						$( this ).dialog( "close" );
					},
					 "取消": function() {
						$( this ).dialog( "close" );
					}
				}
			});
	});
	
	//撤回某一条新闻
	$(".ch").click(function(){
		$("#dialog4").dialog({
				modal : true,
				width : 350,
				height : 160,
				buttons: {
					"确定": function() {
						$( this ).dialog( "close" );
					},
					 "取消": function() {
						$( this ).dialog( "close" );
					}
				}
			});
	});
	
	//上传封面图片
	$(".input-tip").click(function(){
		$("#dialog6").dialog({
				modal : true,
				width : 900,
				height : 640,
				buttons: {
					"确定": function() {
						$(".cover-img").show();
						$( this ).dialog( "close" );
					},
					 "取消": function() {
						$( this ).dialog( "close" );
					}
				}
			});
	});
	
	
	
	//选择置顶
	$(".top").change(function(){
		if($(".top").prop("checked")==true){
			$(".time-list").show();
		}else{
			$(".time-list").hide();
		}
	});
	//自定义时间
	$(".zdy").change(function(){
		if($(this).prop("checked")==true){
			$(".time-show").show();
		}
	});
	$(".gd").change(function(){
		if($(this).prop("checked")==true){
			$(".time-show").hide();
		}
	});
	
	//驳回理由
	var reasonLength = $('input:radio[name="bh-reason"]:checked').length;
	var reasonLast = $('input:radio[class="other"]:checked').length;
	var reasonOther = $(".other-reason textarea").val();
	$(".reason-lsit li input").change(function(){
		reasonLength = $('input:radio[name="bh-reason"]:checked').length;
	    reasonLast = $('input:radio[class="other"]:checked').length;
	});
	$(".other-reason textarea").change(function(){
		reasonOther = $(".other-reason textarea").val();
	});

	$(".tg-bh").click(function(){
		$("#dialog5").dialog({
				modal : true,
				width : 400,
				height : 370,
				buttons: {
					"确定": function() {
						//选中其中一项了
						if(reasonLength>0){
							//选中C
							if(reasonLast==1){
								//没有填驳回理由
								if(reasonOther==""){
									$(".reason-tip").show();
								}else{
									//选中C 并且填写了驳回理由
									$(this).dialog( "close" );
									$(".reason-tip").hide();
								}	
							}else{
								//选中A/B中任一项，即可关闭窗口
								$(this).dialog( "close" );
								$(".reason-tip").hide();
								}
							}else{
								//任何一项都没有选择
								$(".reason-tip").show();
							}
					},
					 "取消": function() {
						$( this ).dialog( "close" );
					}
				}
			});
	});	
	
});

	function uploadImg(){
		$(".upload-img label").text("重新上传");
	}

