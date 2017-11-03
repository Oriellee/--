$(function() {

	//人员可见性
	$(".visible").click(function(){ 
		$("#dialog2").dialog({
				modal : true,
				width : 590,
				height : 500,
				buttons: {
					"确定": function() {
						$( this ).dialog( "close" );
					}
				}
		});
	});
					
	//input框获得焦点
	$(".input-tip2").click(function(evt){
		var evt = window.event || arguments[0]; 
		onFoucs2();	
		//在空白处点击弹出框消失
		$(document).one("click",function(){
			orgHide2();	
		});
		if (window.event) { 
			//IE 阻止事件冒泡
			evt.cancelBubble = true; 
		}else if (evt.stopPropagation){
			//Mozilla、 Opera 阻止事件冒泡
			evt.stopPropagation(); 
		} 
	}); 
	
	$(".organization-list2,.dept-list,.input-field2").click(function (evt){ 
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
	$(".selected-list2").on("click",".selected-item .remove-h",function(){						
		//input框中的变化
		$(this).parent().remove();
		//名字列表中的变化
		$(this).parent().removeClass("selected-item");
		var className = $(this).parent().attr("class");
		$("#"+className).removeClass("seleceted");
		//树形结构的变化
				
		//缺少此处代码
				
		//如果此时选人框是显示状态，则判断它的位置变化
		if($(".organization-list2").css("display")=="block"){	
			orgShow2();
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
				orgShow2();
			}else{
				flag+=1;
				$(this).attr("id","flag"+flag);
				$(this).addClass("seleceted");
				var str = $(this).html();
				$(".selected-list2").append("<li class='selected-item flag"+flag+"'><span class='item-name'>"+str+"</span><span class='remove-h'>×</span></li>");	
				orgShow2();
			}
					
		});
	});	
	
});
					
	//获取当前选人和部门的弹出框位置
	function getPos2(){
		var x,y,height;
		if($(".input-tip2").css('display')=="none"){
			y = $(".input-field2").offset().top+10;
			x = $(".input-field2").offset().left;
			height = $(".input-field2").height();
		}else{
			y = $(".input-wrapper2").offset().top;
			x = $(".input-wrapper2").offset().left+85;
			 height = $(".input-wrapper2").height();
		}
		return [x,y+height];	
	}
		
	//出现选人弹出框
	function orgShow2(){
		$(".organization-list2").show();
		var arry = getPos2();
		$(".organization-list2").css({"display":"block","top":arry[1],"left":arry[0]});	
	}
		
	//在空白处点击 选人框消失
	function orgHide2(){
		$(".organization-list2").hide();
		$(".input-tip2").show();
		$(".input-field2").hide();
	}
		
	//input框中获取焦点 选人框出现
	function onFoucs2(){
		$(".input-tip2").hide();
		$(".input-field2").show().focus();
		orgShow2();
	}
	
		var setting2 = {
			view: {
				showIcon: showIconForTree2
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
				onCheck: Onappend2
			}
		};

		var zNodes2 =[
			{ id:1, pId:0, name:"全公司2", open:true},
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
		
		var code2;
		
		function setCheck2() {
			var zTree = $.fn.zTree.getZTreeObj("treeDemo2");
			setting2.check.chkboxType = { "Y" : "ps", "N" : "ps" };
		}
		function showCode2(str) {
			if (!code2) code2 = $("#code2");
			code2.empty();
			code2.append("<li>"+str+"</li>");
		}
		
		$(document).ready(function(){
			$.fn.zTree.init($("#treeDemo2"), setting2, zNodes2);
			setCheck2();
			$("#py").bind("change", setCheck2);
			$("#sy").bind("change", setCheck2);
			$("#pn").bind("change", setCheck2);
			$("#sn").bind("change", setCheck2);
		});
		
		function showIconForTree2(treeId, treeNode2) {
			return !treeNode2;
		};
		//从树形结构中添加、删除人或部门
		function Onappend2(event,treeId, treeNode2){
			//alert(treeNode2.tId + ", " + treeNode2.name + "," + treeNode2.checked);
			if(treeNode2.checked==true){
				//删除联系方式可见性中的全员可见
				var length = $(".selectbar1 ul").find("p").size();
				if(length>0){
					$(".selectbar1 ul p").hide();
				}
				$(".selected-list2").append("<li class='selected-item tem"+treeNode2.tId+"'><span class='item-name'>"+treeNode2.name+"</span><span class='remove-h'>×</span></li>");
	
			}else{
				//缺少此处代码
			}
			orgShow2();
		} 
