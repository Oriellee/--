$(function(){
		var audio;	
		$(".bf").click(function(){
			var a = $(this);
			var b = a.hasClass("zt");
			var audioList = document.getElementsByTagName("audio");
			//���ŵ�ǰ����ʱ���Ƚ���Ķ��ر�
			for(i=0;i<audioList.length;i++){
				audioList[i].pause();
				$(audioList[i]).next().removeClass("zt");
				if(b){
					a.addClass("zt");
				}				
			}
			
			audio = a.prev()[0];
			//���ڲ���״̬�������ֹͣ
			if(a.hasClass("zt")){
				audio.pause();
				a.removeClass("zt");	
			}else{
			//δ����״̬��������ͷ����
				audio.currentTime=0;
				audio.play();
				a.addClass("zt");	
				//ÿ��100ms��⵱ǰ�Ĳ���ʱ���Ƿ������ʱ���������ȣ�����ť��״̬�л�
						
			}
			setInterval(function(){
				if (audio.duration == audio.currentTime) {
					a.removeClass("zt");
					audio.currentTime = 0;
				}},100);				
		});	
  });
