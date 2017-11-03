$(function(){
	$(".btn-addnews").click(function(){
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
	
	$(".delete-channel").click(function(){
		$("#dialog2").dialog({
				modal : true,
				width : 350,
				height : 180,
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
	
	$(".modify-channel").click(function(){
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
	
	
})


