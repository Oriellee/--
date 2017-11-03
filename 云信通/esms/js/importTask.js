	$(function(){
		$('#startTimes').datetimepicker({
		});
		$('#endTimes').datetimepicker({
		});
		
		$("input:radio[name='import']").change(function(){
			if($(".all-import").prop("checked")==true){
				$(".import-time,.dept-list").hide();
			}else if($(".import-dept").prop("checked")==true){
				$(".import-time").hide();
				$(".dept-list").show();
			}else if($(".import-date").prop("checked")==true){
				$(".dept-list").hide();
				$(".import-time").show();
					
			}
		});
	});