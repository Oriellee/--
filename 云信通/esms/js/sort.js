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
			{ id:1, pId:0, name:"平治东方", open:true},
			{ id:11, pId:1, name:"单位云事业部", open:true},
			{ id:12, pId:1, name:"开发部", open:true},
			{ id:13, pId:1, name:"测试部"},
			{ id:14, pId:1, name:"销售部"},
			{ id:15, pId:1, name:"综合部"}
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
				//删除联系方式可见性中的全员可见
				var length = $(".selectbar ul").find("p").size();
				if(length>0){
					$(".selectbar ul p").hide();
				}
				$(".selected-list").append("<li class='selected-item tem"+treeNode.tId+"'><span class='item-name'>"+treeNode.name+"</span><span class='remove-h'>×</span></li>");
			}else{
				//缺少此处代码
			}
		
			orgShow();
			
		} 
