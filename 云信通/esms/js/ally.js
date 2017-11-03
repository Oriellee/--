$(function(){

	//列表全选、不全选
	$("#checkAll").click(function() {
             $('input[name="subBox"]').prop("checked",this.checked); 
        });
        var $subBox = $("input[name='subBox']");
        $subBox.click(function(){
           $("#checkAll").prop("checked",$subBox.length == $("input[name='subBox']:checked").length ? true : false);
         });
		 
	//撤回
	$(".recall").click(function(){
		$("#dialog-recall").dialog({
				modal : true,
				width : 350,
				height : 200,
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
	//删除
	$(".btnAddDel").click(function(){
		$("#dialog-del").dialog({
				modal : true,
				width : 350,
				height : 200,
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
	//发布
	$(".publish").click(function(){
		$("#dialog-publish").dialog({
				modal : true,
				width : 350,
				height : 200,
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
	$(".join-notice").click(function(){
		$("#dialog-notice").dialog({
				modal : true,
				width : 500,
				height : 320,
				buttons: {
					"发布": function() {
						$( this ).dialog( "close" );
					},
					 "取消": function() {
						$( this ).dialog( "close" );
					}
				}
		});
	});
	//上传个人风采图片
	$(".label-up").click(function(){
		$("#dialog-upload").dialog({
				modal : true,
				width : 500,
				height :430,
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
	//上传企业logo
	$(".label-up2").click(function(){
		$("#dialog-upload2").dialog({
				modal : true,
				width : 500,
				height :430,
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
	//添加行业
	$(".input-tip").click(function(){
		$("#dialog-industry").dialog({
				modal : true,
				width : 500,
				height :280,
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
	
	//选择行业
	var i=0;
	$(".industry-name").each(function(){
	   i= i+1;
		$(this).attr("name","order"+i);
	});
	$(".industryList span").bind("click",function(){
		//获取所选择行业的名字
	    var text = $(this).text();
		//获取所选行业的name
		var name = $(this).attr("name");	
		$(this).toggleClass("selected");
		if($(this).hasClass("selected")){
			$(".selected-list").append("<li class='selected-item' name="+name+"><span class='item-name'>"+text+"</span><span class='remove-h'>×</span></li>");
		}else{
		var curName = $(this).attr("name");
		 $("li[name='"+curName+"']").remove();
		}
	});
	
	//删除已选的行业
	$(".selected-list").on("click",".remove-h",function(){	
		//列出来的行业被删除
		$(this).parent().remove();
		//下面所有行业中去掉被选标志
		var curName = $(this).parent().attr("name");	
		 $("span[name='"+curName+"']").removeClass("selected");
	});
})