$(function(){
	//新建文件夹
	$(".btnAddFolder").click(function(){
		$("#dialogNew").dialog({
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
	//选中一条信息，下载、删除按钮才可用
		var $subBox = $("input[name='check_only']");
        $subBox.click(function(){
			if($("input[name='check_only']:checked").length>0){
				$(".btnDelFolder").removeClass("disabledBg");
				$(".btnDelFolder").removeAttr("disabled"); 
				$(".btnDownloadFolder").removeClass("disabledBg");
				$(".btnDownloadFolder").removeAttr("disabled"); 
			}else{
				$('.btnDelFolder').attr('disabled',"true");
				$(".btnDelFolder").addClass("disabledBg");
				$('.btnDownloadFolder').attr('disabled',"true");
				$(".btnDownloadFolder").addClass("disabledBg");
			}
         });
		 
	//删除文件夹
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
})
