$(function(){
		var audio;	
		$(".bf").click(function(){
			var a = $(this);
			var b = a.hasClass("zt");
			var audioList = document.getElementsByTagName("audio");
			//播放当前声音时，先将别的都关闭
			for(i=0;i<audioList.length;i++){
				audioList[i].pause();
				$(audioList[i]).next().removeClass("zt");
				if(b){
					a.addClass("zt");
				}				
			}
			
			audio = a.prev()[0];
			//正在播放状态，点击后停止
			if(a.hasClass("zt")){
				audio.pause();
				a.removeClass("zt");	
			}else{
			//未播放状态，点击后从头播放
				audio.currentTime=0;
				audio.play();
				a.addClass("zt");	
				//每隔100ms检测当前的播放时长是否等于总时长，如果相等，将按钮的状态切换
						
			}
			setInterval(function(){
				if (audio.duration == audio.currentTime) {
					a.removeClass("zt");
					audio.currentTime = 0;
				}},100);				
		});	
  });
