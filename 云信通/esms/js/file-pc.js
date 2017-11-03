$(function(){
	//弹出提示先选择要删除的文件
	$(".scwj").click(function(){
		$(".deleteTip").show();
		$(".cover").show();
	});
	//关闭提示先选择要删除的文件
	$(".deleteTip .close,.deleteTip .publish").click(function(){
		$(".deleteTip").hide();
		$(".deleteFile").show();
	});
	//确定删除所选文件
		$(".deleteFile .close,.deleteFile .publish").click(function(){
		$(".deleteFile").hide();
		$(".cover").hide();
	});
	//新建文件夹弹出框
	$(".xjwj").click(function(){
		$(".sel-dialog").show();
		$(".cover").show();
	});
	//关闭新建文件夹弹出框
	$(".sel-dialog .close,.sel-dialog .publish").click(function(){
		$(".sel-dialog").hide();
		$(".cover").hide();
	});
	 
	 //全选、全不选
	$('#checkboxFiveInput11,#checkbox11,#checkboxFive11,#checkA1l,#checkInput11').click(function() {
		$('input[name="subBox"]').prop("checked",this.checked); 
	});
	var $subBox = $("input[name='subBox']");
	$subBox.click(function(){
		$("#checkboxFiveInput11,#checkbox11,#checkboxFive11,#checkA1l,#checkInput11").prop("checked",$subBox.length == $("input[name='subBox']:checked").length ? true : false);
	});
	
	//弹出文件上传框
	$(".shcwj").click(function(){
		$(".upload").show();
		$(".cover").show();
	});
	//关闭文件上传框
	$(".upload .close,.upload .qx").click(function(){
		$(".upload").hide();
		$(".cover").hide();
	});
})
