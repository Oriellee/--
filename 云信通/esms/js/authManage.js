$(function() {
	//弹出模态框
	$(".input-tip2").click(function(){
		$("#dialog").dialog({
				modal : true,
				width : 640,
				height : 350,
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
		
	//按人员查看和权限查看切换
	$(".auth_title,.select,.person_title").click(function(){
		$(".f-g-options-wrapper").toggle();
		$(".select").toggleClass("up");
	});
	
	$(".qx").click(function(){
		$(".g-select-options li").removeClass("state-selected");
		$(this).addClass("state-selected");
		$(".authority").css("display","block");
		$(".person").css("display","none");
		$(".select").toggleClass("up");
		$(".f-g-options-wrapper").hide();
	});
	$(".ry").click(function(){
		$('#scrollbar1').tinyscrollbar({sizethumb: 45,size:163,wheel: 10});
		$(".g-select-options li").removeClass("state-selected");
		$(this).addClass("state-selected");
		$(".person").css("display","block");
		$(".authority").css("display","none");
		$(".select").toggleClass("up");
		$(".f-g-options-wrapper").hide();
	});
		
	//选同事input框获得焦点
	$(".input-tip").click(function(evt){
		var evt = window.event || arguments[0]; 
		deptHide();	
		orgHide();	
		onFoucs(this);
		temp = this;
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
		//在空白处点击弹出框消失
		$(document).one("click",function(){
			orgHide();	
		});
		if (window.event) { 
			//IE 阻止事件冒泡
			evt.cancelBubble = true; 
		}else if (evt.stopPropagation) { 
			//Mozilla、 Opera 阻止事件冒泡
			evt.stopPropagation(); 
		} 
	});
	//选部门input框获得焦点
	$(".input-tip4").click(function(evt){
		var evt = window.event || arguments[0]; 
		orgHide();	
		onFoucs(this);
		temp_dept = this;
		//在空白处点击弹出框消失
		$(document).one("click",function(){
			deptHide();	
		});
		//在空白处点击弹出框消失
		$(document).one("click",function(){
			orgHide();	
		});
		if (window.event) { 
			//IE 阻止事件冒泡
			evt.cancelBubble = true; 
		}else if (evt.stopPropagation) { 
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
			
	//从点击×号删除已选的人或部门
	$(".selected-list").on("click",".selected-item .remove-h",function(){
		var obj = $(this).parent().parent().next().children("span").get(0);
		//input框中的变化
		$(this).parent().remove();
				
		//如果此时选人框是显示状态，则判断它的位置变化
		if($(".organization-list").css("display")=="block"){
			orgShow(obj);
		}
		//名字列表中的变化
		$(this).parent().removeClass("selected-item");
		var className = $(this).parent().attr("class");
		$("#"+className).removeClass("seleceted");
		//树形结构的变化
				
		//缺少此处代码
				
				
	});
							
	//按姓名列表添加、删除人和部门
	var flag=1;
	$(".search_ul li").each(function(){
		$(this).click(function(){
			if($(this).hasClass("seleceted")){
				var className = $(this).attr("id");
				$("."+className).remove();
				$(this).removeClass("seleceted");
				orgShow(temp);
			}else{
				flag+=1;
				$(this).attr("id","flag"+flag);
				$(this).addClass("seleceted");
				var str = $(this).html();
				$(temp).parent().prev().append("<li class='selected-item flag"+flag+"'><span class='item-name'>"+str+"</span><span class='remove-h'>×</span></li>");	
				orgShow(temp);
			}		
		});
	});
			
	//点击授权，弹出授权框
	$(".input-tip3").click(function(evt){
		var evt = window.event || arguments[0]; 
		$(".accredit").animate({right:"10px"});
		//在空白处点击弹出框消失
		$(document).one("click",function(){
			$(".accredit").animate({right:"-452px"});	
		});
		//在空白处点击弹出框消失
		$(document).one("click",function(){
			orgHide();	
		});
		if (window.event) { 
			//IE 阻止事件冒泡
			evt.cancelBubble = true; 
		}else if (evt.stopPropagation) { 
			//Mozilla、 Opera 阻止事件冒泡
			evt.stopPropagation(); 
		} 
	});
	$(".accredit").click(function (evt){
		var evt = window.event || arguments[0]; 			
		//在空白处点击弹出框消失
		$(document).one("click",function(){
			orgHide();	
		});
		if (window.event) { 
			//IE 阻止事件冒泡
			evt.cancelBubble = true; 
		}else if (evt.stopPropagation) { 
			//Mozilla、 Opera 阻止事件冒泡
			evt.stopPropagation(); 
		} 
	});
		//点击确定 收回授权弹出框
		$(".sq_btn .btn").click(function(){
			$(".accredit").animate({right:"-452px"});
		});
		//授权中的全选、全不选
		$("#checkAll").click(function() {
             $('input[name="subBox"]').prop("checked",this.checked); 
        });
        var $subBox = $("input[name='subBox']");
        $subBox.click(function(){
           $("#checkAll").prop("checked",$subBox.length == $("input[name='subBox']:checked").length ? true : false);
         });
});
	 var temp;
	 var temp_dept;
	//获取当前选人和部门的弹出框位置
	function getPos(obj){
		var x,y,height;
		if($(obj).css('display')=="none"){
			y = $(obj).next().offset().top+10;
			x = $(obj).next().offset().left-100;
			height = $(obj).next().height();
		}else{
			y =  $(obj).parent().offset().top;
			x =  $(obj).parent().offset().left+85-100;
			height = $(obj).parent().height();
		}
		return [x,y+height];	
	}
		
	//选人和部门弹出框消失
	function orgHide(){
		$(".organization-list").hide();
		$(".input-tip").show();
		$(".input-field").hide();
	}
	//选部门弹出框消失
	function deptHide(){
		$(".dept-list").hide();
		$(".input-tip4").show();
		$(".input-field").hide();
	}
	//input框中获取焦点 选人框出现
	function onFoucs(obj){
		$(obj).hide();
		$(obj).next().show().focus();
		if($(obj).hasClass("input-tip4")){
			deptShow(obj);
		}else{
			orgShow(obj);
		}		
	}
	//出现选人弹出框
	function orgShow(obj){
		$(".organization-list").show();
		var arry = getPos(obj);
		$(".organization-list").css({"display":"block","top":arry[1],"left":arry[0]});	
	}
	//出现选部门弹出框
	function deptShow(obj){
		$(".dept-list").show();
		var arry = getPos(obj);
		$(".dept-list").css({"display":"block","top":arry[1],"left":arry[0]});	
	}
	//部门人员树
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
		 if(treeNode.checked==true){
			$(temp).parent().prev().append("<li class='selected-item tem"+treeNode.tId+"'><span class='item-name'>"+treeNode.name+"</span><span class='remove-h'>×</span></li>");
		 }else{
			//缺少此处代码
		 }
		orgShow(temp);
		} 
		
		//部门列表树
		var setting_dept = {
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
				onCheck: Onappenddept
			}
		};

		var zNodes_dept =[
			{ id:1, pId:0, name:"全公司", open:true},
			{ id:11, pId:1, name:"总裁办", open:true},
			{ id:12, pId:1, name:"融合通信", open:true},
			{ id:121, pId:12, name:"安卓开发部"},
			{ id:122, pId:12, name:"web开发部"},
			{ id:123, pId:12, name:"ios开发部"},
			{ id:2, pId:1, name:"研发中心", checked:true, open:false},
			{ id:3, pId:1, name:"综合部"},
			
		];
		
		var code_dept;
		
		function setCheck() {
			var zTree = $.fn.zTree.getZTreeObj("treeDemo1");
			setting_dept.check.chkboxType = { "Y" : "ps", "N" : "ps" };
		}
		function showCode(str) {
			if (!code_dept) code_dept = $("#code_dept");
			code_dept.empty();
			code_dept.append("<li>"+str+"</li>");
		}
		
		$(document).ready(function(){
			$.fn.zTree.init($("#treeDemo1"), setting_dept, zNodes_dept);
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
		function Onappenddept(event,treeId, treeNode){
			if(treeNode.checked==true){
				$(temp_dept).parent().prev().append("<li class='selected-item tem"+treeNode.tId+"'><span class='item-name'>"+treeNode.name+"</span><span class='remove-h'>×</span></li>");
			}else{
			
			//缺少此处代码
			
			}
			deptShow( temp_dept);
		} 