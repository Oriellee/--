$(function(){
	//编辑职级
	$(".editRank").click(function(){
		$(".runkName").removeAttr("disabled");
	})
	
	
		//弹出模态框 删除职级
	$(".delete-rank").click(function(){
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
		});
		
		//弹出模态框 保存职级
		$(".saveRank").click(function(){
			$("#dialog1").dialog({
				modal : true,
				width : 350,
				height : 160,
				buttons: {
					"确定": function() {
						$(".runkName").attr('disabled',"true");
						$( this ).dialog( "close" );
					},
					 "取消": function() {
						$( this ).dialog( "close" );
					}
				}
			});
		});
})