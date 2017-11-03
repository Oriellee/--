$(function(){
	//提交页面 弹出提示框
	/*$(".publish-btn").click(function(){
			var x = $(".publish-btn").offset().left;
			var y = $(".publish-btn").offset().top;
			$(".toast").show();
			$(".toast").offset({top:y-300,left:x-100});
			setTimeout("$('.toast').css('display','none')",1500);
		});
	*/
	//点击保存后，提示进入草稿箱
	$(".save-btn").click(function(){
		$(".save-tip").fadeIn(400).delay(2000).fadeOut(300);
	});
	//删除附件
	$(".file-list").on("click",".file-name .file-remove-l",function(){
		var len = $(".file-list").find("li").length;
		if(len==1){
			$(this).parent().remove();
			//如果当前没有附件了，删除提示语
			$(".file_total").remove();
		}else{
			$(this).parent().remove();
		}	
	});
	
	//全部删除附件
	$(".accessory").on("click",".file_total .del_all",function(){
		$(".file-list").children().remove();
		$(".file_total").remove();
	});
	
	//自定义时间
	$(".zdy").change(function(){
		if($(this).prop("checked")==true){
			$(".time-show").show();
		}
	});
	$(".gd").change(function(){
		if($(this).prop("checked")==true){
			$(".time-show").hide();
		}
	});
	
	//选择置顶
	$(".top").change(function(){
		if($(".top").prop("checked")==true){
			$(".time-list").show();
		}else{
			$(".time-list").hide();
		}
	});
	
			
	//input框获得焦点
	$(".input-tip").click(function(evt){
		var evt = window.event || arguments[0]; 
		onFoucs();	
		//在空白处点击弹出框消失
		$(document).one("click",function(){
			orgHide();	
		});
		if (window.event) { 
			//IE 阻止事件冒泡
			evt.cancelBubble = true; 
		}else if (evt.stopPropagation){
			//Mozilla、 Opera 阻止事件冒泡
			evt.stopPropagation(); 
		} 
	}); 
	
	$(".organization-list,.dept-list,.input-field").click(function (evt){ 
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
	$(".search_btn").click(function(){
		$(".tree_list").hide();
		$(".search_list").show();
	});
	//显示树形结构，隐藏名字列表
	$(".search_cancle").click(function(){
		$(".tree_list").show();
		$(".search_list").hide();
	});
	//姓名列表搜索内容清除
	$(".img_cancle").click(function(){
		$(".searchbyname").val("");
	});
			
	//点击×号删除已选的人或部门
	$(".selected-list").on("click",".selected-item .remove-h",function(){						
		//input框中的变化
		$(this).parent().remove();
		//名字列表中的变化
		$(this).parent().removeClass("selected-item");
		var className = $(this).parent().attr("class");
		$("#"+className).removeClass("seleceted");
		//树形结构的变化
				
		//缺少此处代码
				
		//如果此时选人框是显示状态，则判断它的位置变化
		if($(".organization-list").css("display")=="block"){	
			orgShow();
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
				orgShow();
			}else{
				flag+=1;
				$(this).attr("id","flag"+flag);
				$(this).addClass("seleceted");
				var str = $(this).html();
				$(".selected-list").append("<li class='selected-item flag"+flag+"'><span class='item-name'>"+str+"</span><span class='remove-h'>×</span></li>");	
				orgShow();
			}
					
		});
	});	
});

//获取当前选人和部门的弹出框位置
	function getPos(){
		var x,y,height;
		if($(".input-tip").css('display')=="none"){
			y = $(".input-field").offset().top+10;
			x = $(".input-field").offset().left;
			height = $(".input-field").height();
		}else{
			y = $(".input-wrapper").offset().top;
			x = $(".input-wrapper").offset().left+85;
			 height = $(".input-wrapper").height();
		}
		return [x,y+height];	
	}
		
	//出现选人弹出框
	function orgShow(){
		$(".organization-list").show();
		var arry = getPos();
		$(".organization-list").css({"display":"block","top":arry[1],"left":arry[0]});	
	}
		
	//在空白处点击 选人框消失
	function orgHide(){
		$(".organization-list").hide();
		$(".input-tip").show();
		$(".input-field").hide();
	}
		
	//input框中获取焦点 选人框出现
	function onFoucs(){
		$(".input-tip").hide();
		$(".input-field").show().focus();
		orgShow();
	}
	
		var setting = {
			view: {
				showIcon: showIconForTree
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
				onCheck: Onappend
			}
		};

		var zNodes =[
			{ id:1, pId:0, name:"全公司", open:true},
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
		
		var code;
		
		function setCheck() {
			var zTree = $.fn.zTree.getZTreeObj("treeDemo");
			setting.check.chkboxType = { "Y" : "ps", "N" : "ps" };
		}
		function showCode(str) {
			if (!code) code = $("#code");
			code.empty();
			code.append("<li>"+str+"</li>");
		}
		
		$(document).ready(function(){
			$.fn.zTree.init($("#treeDemo"), setting, zNodes);
			setCheck();
			$("#py").bind("change", setCheck);
			$("#sy").bind("change", setCheck);
			$("#pn").bind("change", setCheck);
			$("#sn").bind("change", setCheck);
		});
		
		function showIconForTree(treeId, treeNode) {
			return !treeNode;
		};
		//从树形结构中添加、删除人或部门
		function Onappend(event,treeId, treeNode){
			//alert(treeNode.tId + ", " + treeNode.name + "," + treeNode.checked);
			if(treeNode.checked==true){
				$(".selected-list").append("<li class='selected-item tem"+treeNode.tId+"'><span class='item-name'>"+treeNode.name+"</span><span class='remove-h'>×</span></li>");
			}else{
				//缺少此处代码
			}
			orgShow();
		} 
