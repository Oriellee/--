$(function(){
	//�ѷ������ѳ��ء��ݸ��л�
	$(".left a").click(function(){
			$(".left a").removeClass("selected");
			$(this).addClass("selected");
			if($(this).hasClass("yfb")){
				$(".published").show();
				$(".un-published").hide();
				$(".draft").hide();
			}else if($(this).hasClass("wfb")){
				$(".draft").hide();
				$(".published").hide();
				$(".un-published").show();
			}else{
				$(".published").hide();
				$(".un-published").hide();
				$(".draft").show();
			}
	});

	//��ͶƱ��δ��ͶƱ��Ա�鿴
	$(".vote-info,.vote-bar").mouseenter(function(){
		$(this).find(".work-notice-status-tip").show();
	});
	$(".vote-info,.vote-bar").mouseleave(function(){
		$(this).find(".work-notice-status-tip").hide();
	});
	
	
	//ɾ���ظ���Ϣ�б�
	$(".del-repaly").click(function(){
		$(this).parent().parent().remove();
	});
	
});
 