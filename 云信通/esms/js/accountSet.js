$(function() {
	//个人信息
	$(".name").click(function(){
		$("#dialog").dialog({
				modal : true,
				width : 590,
				height : 600,
				buttons: {
					"确定": function() {
						$( this ).dialog( "close" );
					}
				}
		});
	});
	//锁定帐号
	$(".lock").click(function(){
		$("#dialog-lock").dialog({
				modal : true,
				width : 390,
				height : 160,
				buttons: {
					"确定": function() {
						$( this ).dialog( "close" );
						$(".toast").text("锁定成功").show().delay(2000).hide(0);		
					},
					"取消": function() {
						$( this ).dialog( "close" );
					}
				}
		});
	});
	//解锁帐号
	$(".unlock").click(function(){
		$("#dialog-unlock").dialog({
				modal : true,
				width : 390,
				height : 160,
				buttons: {
					"确定": function() {
						$( this ).dialog( "close" );
						$(".toast").text("解锁成功").show().delay(2000).hide(0);		
					},
					"取消": function() {
						$( this ).dialog( "close" );
					}
				}
		});
	});
	//重置密码
	$(".reset").click(function(){
		$("#dialog-reset").dialog({
				modal : true,
				width : 390,
				height : 200,
				buttons: {
					"确定": function() {
						$( this ).dialog( "close" );
						$(".toast").text("密码重置成功").show().delay(2000).hide(0);		
					},
					"取消": function() {
						$( this ).dialog( "close" );
					}
				}
		});
	});
	//鼠标悬浮在设备ID上
	$(".setId").mouseover(function(){
		$(".bubble-box").show();
	});
	$(".setId").mouseout(function(){
		$(".bubble-box").hide();
	});
	//设备加入黑名单
	$(".add-blacklist").click(function(){
		$("#add-blacklist").dialog({
				modal : true,
				width : 300,
				height : 220,
				buttons: {
					"确定": function() {
						$( this ).dialog( "close" );
						//输入管理员密码
						$("#admin-pwd").dialog({
							modal : true,
							width : 270,
							height : 200,
							buttons: {
								"确定": function() {
									$( this ).dialog( "close" );
									$(".toast").text("加入黑名单成功，清楚除指令已发出").show().delay(2000).hide(0);		
								},
					"取消": function() {
						$( this ).dialog( "close" );
					}
				}
		});
						//$(".toast").text("锁定成功").show().delay(2000).hide(0);		
					},
					"取消": function() {
						$( this ).dialog( "close" );
					}
				}
		});
	});
	//取消黑名单
	$(".remove-blacklist").click(function(){
		$("#remove-blacklist").dialog({
				modal : true,
				width : 300,
				height : 160,
				buttons: {
					"确定": function() {
						$( this ).dialog( "close" );
						//输入管理员密码
						$("#admin-pwd").dialog({
							modal : true,
							width : 270,
							height : 200,
							buttons: {
								"确定": function() {
									$( this ).dialog( "close" );
									$(".toast").text("操作成功").show().delay(2000).hide(0);		
								},
					"取消": function() {
						$( this ).dialog( "close" );
					}
				}
		});
						//$(".toast").text("锁定成功").show().delay(2000).hide(0);		
					},
					"取消": function() {
						$( this ).dialog( "close" );
					}
				}
		});
	});
	//解绑设备
	$(".unlock").click(function(){
		$("#dialog-unbund").dialog({
				modal : true,
				width : 390,
				height :180,
				buttons: {
					"确定": function() {
						$( this ).dialog( "close" );
						$(".toast").text("操作成功").show().delay(2000).hide(0);		
					},
					"取消": function() {
						$( this ).dialog( "close" );
					}
				}
		});
	});
	//设备与安全的tab切换
	$(".loginLi").click(function(){
		$(".loginDiv").show();
		$(".weakupDiv").hide();		
	});
	$(".weakupLi").click(function(){
		$(".weakupDiv").show();	
		$(".loginDiv").hide();	
	});
	
	//
	$(".save").click(function(){
			$("#admin-pwd").dialog({
				modal : true,
				width : 270,
				height : 200,
				buttons: {
					"确定": function() {
						$( this ).dialog( "close" );
						$(".toast").text("操作成功").show().delay(2000).hide(0);		
					},
					"取消": function() {
						$( this ).dialog( "close" );
					}
				}
		});
	});
	//吐司位置
	screenWidth = $(window).width();
    screenHeight = $(window).height();
    scrolltop = $(document).scrollTop();          
    objLeft = (screenWidth - $(".toast").width())/2 ;
    objTop = (screenHeight - $(".toast").height())/2 + scrolltop;       
    $(".toast").css({left: objLeft + 'px', top: objTop + 'px'});
			
});
//浏览器有滚动条时 吐司位置
 $(window).scroll(function() {
    screenWidth = $(window).width();
    screenHeight = $(window).height();
    scrolltop = $(document).scrollTop();          
    objLeft = (screenWidth - $(".toast").width())/2 ;
    objTop = (screenHeight - $(".toast").height())/2 + scrolltop;       
    $(".toast").css({left: objLeft + 'px', top: objTop + 'px'});
});