$(function(){
	//上传为轮播页新闻
	$(".set-news").click(function(){
		$("#dialog").dialog({
				modal : true,
				width : 900,
				height : 640,
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
	
	//从轮播页移除此新闻
	$(".remove").click(function(){
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
	
	//图片库添加默认图片
	$(".sel-pic,.sel-pic1").click(function(){
		$("#dialog3").dialog({
				modal : true,
				width : 900,
				height : 640,
				buttons: {
					"确定": function() {
						$(".picture-list").append("<li><input type='radio' name='pic-default' class='pic-default1'><img src='images/pic.png'><a class='delete-default-img' href='javascript:;'>删除</a></li>");
						$( this ).dialog( "close" );
					},
					 "取消": function() {
						$( this ).dialog( "close" );
					}
				}
			});
	});
	
	//删除图片库中默认图片
	$(".picture-list").on("click","li .delete-default-img",function(){
		var a = $(this);
		$("#dialog4").dialog({
				modal : true,
				width : 350,
				height : 160,
				buttons: {
					"确定": function() {
						$(this ).dialog( "close" );
						a.parent().remove();
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
	
	
