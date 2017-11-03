$(function(){
	//新建类型
	$(".btnAddFolder").click(function(){
		$("#dialog").dialog({
				modal : true,
				width : 390,
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
		 
	//删除类型
	$(".btnDelFolder").click(function(){
		$("#dialog2").dialog({
				modal : true,
				width : 390,
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
	
	//编辑类型
	$(".btnEditType").click(function(){
		$("#dialog3").dialog({
				modal : true,
				width : 390,
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
})
