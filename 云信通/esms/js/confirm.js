/*
使用方法
Confirm(msg,callback);
delete,edit 2种类型
msg:传递的参数，显示的内容
callback:回调函数
 */
$(function(){
	var Confirm = function(){};
	Confirm.prototype = {
		//删除操作
		del:function(msg,callback){
			var that = this,
				template = "";
				template += "<div class='modify-pwd-box' id='confirmBox'>";
				template += "<div class='modify-shadow'></div>";
				template += "<div class='confirm'>";
				template += "<div class='conf_header'>";
				template += "<span class='mt5 ml5 fl'>删除</span>";
				template += "<a href='javascript:;' class='btnClose close'><i class='sprite'></i></a>";
				template += "</div>";
				template += "<div class='conf_conter fl'>"+msg+"</div>";
				template += "<div class='conf_footer fl'><a href='javascript:;' class='btn default fl btnOk'>确定</a></div>";
				template += "</div></div>";
				that.append(template,callback);
		},
		//权限操作
		edit:function(msg,callback){
			var that = this,
				template = "";
				template += "<div class='modify-pwd-box' id='confirmBox'>";
				template += "<div class='modify-shadow'></div>";
				template += "<div class='confirm'>";
				template += "<div class='conf_header'>";
				template += "<span class='mt5 ml5 fl'></span>";
				template += "<a href='javascript:;' class='btnClose close'><i class='sprite'></i></a>";
				template += "</div>";
				template += "<div class='conf_conter fl'>呼叫权限<select class=''><option>内部</option></select></div>";
				template += "<div class='conf_footer fl'><a href='javascript:;' class='btn default fl btnOk'>确定</a></div>";
				template += "</div></div>";
				that.append(template,callback);
		},
		//重置密码
		updatePwd:function(msg,callback){
				var that = this,
				template = "";
				template += "<div class='modify-pwd-box' id='confirmBox'>";
				template += "<div class='modify-shadow'></div>";
				template += "<div class='confirm'>";
				template += "<div class='conf_header'>";
				template += "<span class='mt5 ml5 fl'></span>";
				template += "<a href='javascript:;' class='btnClose close'><i class='sprite'></i></a>";
				template += "</div>";
				template += "<div class='conf_conter fl'>"+msg+"</div>";
				template += "<div class='conf_footer fl'><div class='radio_group'><input type='checkbox'/>短信发送</div><div class='radio_group'><input type='checkbox'/>邮件发送</div><a href='javascript:;' class='btn default fl btnOk btn_ok'>确定</a></div>";
				template += "</div></div>";
				that.append(template,callback);
		},
		//拼接
		append:function(template,callback){
			$('body').append(template);
			var confirmBox = $("#confirmBox"),
				bClose = confirmBox.find(".btnClose"),
				bOk = confirmBox.find(".btnOk");

				confirmBox.css("display","block");
			bOk.on('click',function(){
			    callback(true);
				confirmBox.remove()
			});
			bClose.on('click',function(){
				callback(false);
				confirmBox.remove();
			});
		}
	}
	var confirm = new Confirm(),
		organ = $(".organization"),
		btn_del = organ.find(".btnDel"),
		btn_edit = organ.find(".btn_edit"),
		btn_delete = organ.find(".delete"),
		update_pwd = organ.find(".update_pwd");
	//删除操作
	btn_del.click(function(){
		confirm.del("",function(callback){
		});
	});
	//修改密码
	update_pwd.click(function(){
		confirm.updatePwd("",function(callback){
		});
	});
	//权限编辑
	btn_edit.click(function(){
		confirm.edit("",function(callback){
		});
	});
	btn_delete.click(function(){
		confirm.del("",function(callback){
		});
	});
});