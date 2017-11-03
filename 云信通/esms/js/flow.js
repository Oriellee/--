$(function(){
	$(".btnDel").click(function(){
		$("#dialog").dialog({
				modal : true,
				width : 390,
				height : 200,
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
	
	//删除只会人
	$(".remove-h").click(function(){
		$(".knowPerson").remove();
	});
	//弹出选人框
	$(".input-tip").click(function(){
		$(".organization-list").show();	
	});

	//在空白处点击弹出框消失
		$(document).bind("click",function(){
			$(".organization-list").hide();	
		});
		
	$(".organization-list,.input-tip").click(function (evt){ 
		var evt = window.event || arguments[0]; 
		if (window.event) { 
			//IE 阻止事件冒泡
			evt.cancelBubble = true; 
		}else if (evt.stopPropagation){
			//Mozilla、 Opera 阻止事件冒泡
			evt.stopPropagation(); 
		} 
	});	

	
});
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