$(function(){
	//�ѷ�����δ����֪ͨ�л�
	$(".left a").click(function(){
			$(".left a").removeClass("selected");
			$(this).addClass("selected");
			if($(this).hasClass("yfb")){
				$(".published").show();
				$(".un-published").hide();
				$(".recallList").hide();
			}else if($(this).hasClass("ch")){
				$(".published").hide();
				$(".un-published").hide();
				$(".recallList").show();
			}else{
				$(".published").hide();
				$(".un-published").show();
				$(".recallList").hide();
			}
	});

	//�Ѷ���δ������ȷ����Ա�鿴
	$(".read-info").mouseenter(function(){
		$(this).find(".work-notice-status-tip").show();
	});
	$(".read-info").mouseleave(function(){
		$(this).find(".work-notice-status-tip").hide();
	});
	
	
	//ɾ���ظ���Ϣ�б�
	$(".del-repaly").click(function(){
		$(this).parent().parent().remove();
	});
	
});
 