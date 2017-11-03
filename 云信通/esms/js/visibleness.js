$(function() {
	
	
	
	//设置人员可见性和设置此人的联系方式可被谁可见切换显示
	$(".set-person-visi").click(function(){
		$(".set-visibleness li").removeClass("select");
		$(this).addClass("select");
		$(".box").show();
		$(".contact-box").hide();
	});
	$(".set-contact").click(function(){
		$(".set-visibleness li").removeClass("select");
		$(this).addClass("select");
		$(".contact-box").show();
		$(".box").hide();
	});
	
	//弹出部门可见性模态框
	$(".btn_visible").click(function(){ 
		$("#dialog").dialog({
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
	

	//可见性继承
	$(".visible").click(function(){
		$(".inherit").toggle();
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
	//显示职级列表
	$(".by-person").click(function(){
		$(".search_list").show();
		$(".tree_list").hide();
		$(".search_tab").hide();
	});
	//显示树形结构
	$(".by-org").click(function(){
		$(".tree_list").show();
		$(".search_list").hide();
		$(".search_tab").hide();
	});
	//显示搜索
	$(".by-search").click(function(){
		$(".tree_list").hide();
		$(".search_list").hide();
		$(".search_tab").show();
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

	//可见性中按人员选择的全选、全不选
		$("#checkAll").click(function() {
             $('input[name="check-box"]').prop("checked",this.checked); 
        });
        var $subBox = $("input[name='check-box']");
        $subBox.click(function(){
           $("#checkAll").prop("checked",$subBox.length == $("input[name='check-box']:checked").length ? true : false);
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
			{ id:1, pId:0, name:"全公司1", open:true},
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
