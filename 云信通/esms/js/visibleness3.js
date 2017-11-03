$(function() {
/*-----新加js开始-----*/
	
	//点击查看并删除人员，出现弹出框
	$(".see-del-btn").click(function(){
		x = $(this).offset().left;
		y = $(this).offset().top+28;
		$(".organization-list3").hide();
		$(".see-del-person").show();
		$(".see-del-person").css({"top":y,"left":x});
		//在空白处点击弹出框消失
		var evt = window.event || arguments[0]; 	
		$(document).one("click",function(){
			$(".see-del-person").hide();
		});
		if (window.event) { 
			//IE 阻止事件冒泡
			evt.cancelBubble = true; 
		}else if (evt.stopPropagation){
			//Mozilla、 Opera 阻止事件冒泡
			evt.stopPropagation(); 
		}
	});
	
	//点击确定按钮，查看并删除人员弹出框消失
	$(".see-del-submit").click(function(){
		$(".see-del-person").hide();
	});
	
	
		
	/*-----新加js结束-----*/

	//联系方式可见性
	$(".tel-visible").click(function(){ 
		$("#dialog3").dialog({
				modal : true,
				width : 790,
				height : 630,
				buttons: {
					"确定": function() {
						$( this ).dialog( "close" );
					}
				}
		});
	});
	
	//同步设置联系方式可见性
	$(".test").change(function(){
		var options=$(this).find("option:selected");
		var length = options.length;
			var value =	options.val();
				if(value!="未选"){		
					$(".dialog-contact").show();
					$(".contact-way").text(value);
			}
	});
	
	//关闭同步设置联系方式弹出框
	$(".contact-btn a").click(function(){
		$(".dialog-contact").hide();
	});
		
	//input框获得焦点
	$(".input-tip3").click(function(evt){
		var evt = window.event || arguments[0]; 
		//onFoucs3();
		$(".see-del-person").hide();
		orgShow3();		
		//在空白处点击弹出框消失
		$(document).one("click",function(){
			orgHide3();	
		});
		if (window.event) { 
			//IE 阻止事件冒泡
			evt.cancelBubble = true; 
		}else if (evt.stopPropagation){
			//Mozilla、 Opera 阻止事件冒泡
			evt.stopPropagation(); 
		} 
	}); 
	
	$(".organization-list3,.dept-list,.input-field3,.see-del-person").click(function (evt){ 
		var evt = window.event || arguments[0]; 
		if (window.event) { 
			//IE 阻止事件冒泡
			evt.cancelBubble = true; 
		}else if (evt.stopPropagation){
			//Mozilla、 Opera 阻止事件冒泡
			evt.stopPropagation(); 
		} 
	});
	//隐藏树形结构，显示名字列表
	$(".by-person").click(function(){
		$(".tree_list").hide();
		$(".search_list").show();
	});
	//显示树形结构，隐藏名字列表
	$(".by-org").click(function(){
		$(".tree_list").show();
		$(".search_list").hide();
	});
	//姓名列表搜索内容清除
	$(".img_cancle").click(function(){
		$(".searchbyname").val("");
	});
			
	//点击×号删除已选的人或部门
	$(".selected-list3").on("click",".selected-item .remove-h",function(){						
		//input框中的变化
		$(this).parent().remove();
		//名字列表中的变化
		$(this).parent().removeClass("selected-item");
		var className = $(this).parent().attr("class");
		$("#"+className).removeClass("seleceted");
		//树形结构的变化
				
		//缺少此处代码
				
		//如果此时选人框是显示状态，则判断它的位置变化
		if($(".organization-list3").css("display")=="block"){	
			orgShow3();
		}
	});
							
	//按姓名列表添加、删除人和部门
	var flag=1;
	$(".search_ul li").each(function(){
		$(this).click(function(){
			if($(this).hasClass("seleceted")){
				var className = $(this).attr("id");
				$("."+className).remove();
				$(this).removeClass("seleceted");
				orgShow3();
			}else{
				flag+=1;
				$(this).attr("id","flag"+flag);
				$(this).addClass("seleceted");
				var str = $(this).html();
				$(".selected-list3").append("<li class='selected-item flag"+flag+"'><span class='item-name'>"+str+"</span><span class='remove-h'>×</span></li>");	
				orgShow3();
			}
					
		});
	});	

});
					
	//获取当前选人和部门的弹出框位置
	function getPos3(){
		var x,y,height;
		if($(".input-tip3").css('display')=="none"){
			y = $(".input-field3").offset().top+10;
			x = $(".input-field3").offset().left;
			height = $(".input-field3").height();
		}else{
			y = $(".input-wrapper3").offset().top;
			x = $(".input-wrapper3").offset().left+85;
			 height = $(".input-wrapper3").height();
		}
		return [x,y+height];	
	}
		
	//出现选人弹出框
	function orgShow3(){
		$(".organization-list3").show();
		var arry = getPos3();
		$(".organization-list3").css({"display":"block","top":arry[1],"left":arry[0]});	
	}
		
	//在空白处点击 选人框消失
	function orgHide3(){
		$(".organization-list3").hide();
		$(".input-tip3").show();
		$(".input-field3").hide();
	}
		
	//input框中获取焦点 选人框出现
	/*function onFoucs3(){
		$(".input-tip3").hide();
		$(".input-field3").show().focus();
		orgShow3();
	}*/
	
		var setting3 = {
			view: {
				showIcon: showIconForTree3
			},
			check: {
				enable: true
			},
			data: {
				simpleData: {
					enable: true
				}
			},
			callback: {
				onCheck: Onappend3
			}
		};

		var zNodes3 =[
			{ id:1, pId:0, name:"全公司3", open:true},
			{ id:11, pId:1, name:"总裁办", open:true},
			{ id:111, pId:11, name:"范总"},
			{ id:12, pId:1, name:"融合通信", open:true},
			{ id:121, pId:12, name:"web开发部"},
			{ id:1211, pId:121, name:"李妮"},
			{ id:122, pId:12, name:"ios开发部"},
			{ id:1221, pId:122, name:"陈浩"},
			{ id:123, pId:12, name:"安卓开发部"},
			{ id:1231, pId:123, name:"刘宏伟"},
			{ id:1232, pId:123, name:"郝冬冬"},
			{ id:2, pId:1, name:"研发中心", checked:true, open:false},
			{ id:21, pId:2, name:"李四"},
			{ id:22, pId:2, name:"张三"},
			{ id:3, pId:1, name:"综合部"},
			{ id:4, pId:3, name:"张某某", checked:true, open:false}
		];
		
		var code3;
		
		function setCheck3() {
			var zTree = $.fn.zTree.getZTreeObj("treeDemo3");
			setting3.check.chkboxType = { "Y" : "ps", "N" : "ps" };
		}
		function showCode3(str) {
			if (!code3) code3 = $("#code3");
			code3.empty();
			code3.append("<li>"+str+"</li>");
		}
		
		$(document).ready(function(){
			$.fn.zTree.init($("#treeDemo3"), setting3, zNodes3);
			setCheck3();
			$("#py").bind("change", setCheck3);
			$("#sy").bind("change", setCheck3);
			$("#pn").bind("change", setCheck3);
			$("#sn").bind("change", setCheck3);
		});
		
		function showIconForTree3(treeId, treeNode3) {
			return !treeNode3;
		};
		//从树形结构中添加、删除人或部门
		function Onappend3(event,treeId, treeNode3){
			//alert(treeNode3.tId + ", " + treeNode3.name + "," + treeNode3.checked);
			if(treeNode3.checked==true){
				if($(".rang-see").text()=="全员可见"){
					$(".rang-see").text("");
					$(".rang-see").append("<span>"+treeNode3.name+"、</span>");
				}else{
					$(".rang-see").append("<span>"+treeNode3.name+"、</span>");
				}
				
			
			}else{
				//缺少此处代码
			}
			orgShow3();
		} 
