$(function() {
	//弹出模态框
	$(".visible").click(function(){
		$("#dialog").dialog({
				modal : true,
				width : 590,
				height : 380,
				buttons: {
					"确定": function() {
						$( this ).dialog( "close" );
					}
				}
		});
	});
});