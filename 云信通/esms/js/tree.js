	<!--
		var setting = {
			edit: {
				enable: true,
				showRemoveBtn: false,
				showRenameBtn: false
			},
			view:{
				showLine: false,
				showIcon:false
			},
			data: {
				simpleData: {
					enable: true
				}
			},
			callback: {
				beforeDrag: beforeDrag,
				beforeDrop: beforeDrop
			},
			check:{
				enable: true
			}
		};

		var zNodes =[
			{ id:1, pId:0, name:"随意拖拽 1", open:true},
				{ id:11, pId:1, name:"随意拖拽 1-1"},
				{ id:12, pId:1, name:"随意拖拽 1-2", open:true},
					{ id:121, pId:12, name:"随意拖拽 1-2-1"},
					{ id:122, pId:12, name:"随意拖拽 1-2-2"},
					{ id:123, pId:12, name:"随意拖拽 1-2-3"},
				{ id:13, pId:1, name:"禁止拖拽 1-3", open:true, drag:false},
					{ id:131, pId:13, name:"禁止拖拽 1-3-1", drag:false},
					{ id:132, pId:13, name:"禁止拖拽 1-3-2", drag:false},
					{ id:133, pId:13, name:"随意拖拽 1-3-3"},
			{ id:2, pId:0, name:"随意拖拽 2", open:true},
				{ id:21, pId:2, name:"随意拖拽 2-1"},
				{ id:22, pId:2, name:"禁止拖拽到我身上 2-2", open:true, drop:false,drag:false},
					{ id:221, pId:22, name:"随意拖拽 2-2-1"},
					{ id:222, pId:22, name:"随意拖拽 2-2-2"},
					{ id:223, pId:22, name:"随意拖拽 2-2-3"},
				{ id:23, pId:2, name:"随意拖拽 2-3"}
		];
		var code;
		function beforeDrag(treeId, treeNodes) {
			for (var i=0,l=treeNodes.length; i<l; i++) {
				if (treeNodes[i].drag === false) {
					return false;
				}
			}
			return true;
		}
		function beforeDrop(treeId, treeNodes, targetNode, moveType) {
			return targetNode ? targetNode.drop !== false : true;
		}
		function setCheck() {
			var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
			isCopy = $("#copy").attr("checked"),
			isMove = $("#move").attr("checked"),
			prev = $("#prev").attr("checked"),
			inner = $("#inner").attr("checked"),
			next = $("#next").attr("checked");
			zTree.setting.edit.drag.isCopy = isCopy;
			zTree.setting.edit.drag.isMove = isMove;
			showCode(1, ['setting.edit.drag.isCopy = ' + isCopy, 'setting.edit.drag.isMove = ' + isMove]);

			zTree.setting.edit.drag.prev = prev;
			zTree.setting.edit.drag.inner = inner;
			zTree.setting.edit.drag.next = next;
			showCode(2, ['setting.edit.drag.prev = ' + prev, 'setting.edit.drag.inner = ' + inner, 'setting.edit.drag.next = ' + next]);
		}
		function setCheck1(){
			var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
			py = $("#py").attr("checked")? "p":"",
			sy = $("#sy").attr("checked")? "s":"",
			pn = $("#pn").attr("checked")? "p":"",
			sn = $("#sn").attr("checked")? "s":"",
			type = { "Y":py + sy, "N":pn + sn};
			zTree.setting.check.chkboxType = type;
			showCode1('setting.check.chkboxType = { "Y" : "' + type.Y + '", "N" : "' + type.N + '" };');
		}
		function showCode1(str) {
			if (!code) code = $("#code");
			code.empty();
			code.append("<li>"+str+"</li>");
		}
		function showCode(id, str) {
			var code = $("#code" + id);
			code.empty();
			for (var i=0, l=str.length; i<l; i++) {
				code.append("<li>"+str[i]+"</li>");
			}
		}
		$(document).ready(function(){
			$.fn.zTree.init($("#treeDemo"), setting, zNodes);
			setCheck();
			setCheck1();
			$("#copy").bind("change", setCheck);
			$("#move").bind("change", setCheck);
			$("#prev").bind("change", setCheck);
			$("#inner").bind("change", setCheck);
			$("#next").bind("change", setCheck);
			$("#py").bind("change", setCheck1);
			$("#sy").bind("change", setCheck1);
			$("#pn").bind("change", setCheck1);
			$("#sn").bind("change", setCheck1);
		});