$(function(){
	$(".extendNum").click(function(){
		$("#dialog").dialog({
				modal : true,
				width : 320,
				height : 140,
				buttons: {
					"确定": function() {
						$( this ).dialog( "close" );
					}
				}
		});
	});
})