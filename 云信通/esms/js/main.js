$(function(){
	var minJs = {
		init:function(){
			var that = this,
				organ = $(".organization"),
				regForm = $(".reg_cont_form"),
				admin = $(".admin");
			that.organization(organ);
			that.adminManager(admin);
			that.register(regForm);
			that.isNull();
			that.isLogin();
			that.tree();
		},
		tree:function(){
			var container = $(".content_wrap"),
				treeSure = container.find(".treeSure"),
				treeReset = container.find(".treeReset");

			treeSure.click(function(){
				container.css("display","none");
			});
			treeReset.click(function(){
				container.css("display","none");
			});
		},
		register:function(regForm){
			var reg_form = regForm.find(".reg_form"),
				btn_login = reg_form.find(".btn_login"),
				btn_submit = reg_form.find(".btn_submit"),
				that = this;
				btn_login.click(function(){
					var flag = that.isLogin();
					if(flag){
						reg_form.submit();
					}
				});
				btn_submit.click(function(){
					var flag = that.isNull();
					if(flag){
						reg_form.submit();
					}
				});
		},
		isLogin:function(){
			var username = $('.reg_form').find(".username"),
				password = $('.reg_form').find(".password");

				username.blur(function(){
					if($(this).val()!=""){
						$(this).siblings(".help_line").css("display","none");
					}else{
						$(this).siblings(".help_line").css("display","block");
					}
				});
				password.blur(function(){
					if($(this).val()!="" && $(this).val().length<=15){
						$(this).siblings(".help_line").css("display","none");
					}else{
						$(this).siblings(".help_line").css("display","block");
					}
				});
		},
		isNull:function(){
			var company = $('.reg_form').find(".company"),
				reg_form = $('.reg_form'),
				people = $('.reg_form').find(".people"),
				isEmail = $('.reg_form').find(".email"),
				phone = $('.reg_form').find(".phone"),
				pwd = $('.reg_form').find(".pwd"),
				that = this,
				flag = false,
				isPwd = $('.reg_form').find(".isPwd");
			$('.reg_form').find("input").focus(function(){
				$(this).siblings(".help_line").css("display","none");
			});
			isEmail.blur(function(){
				that.isEmail(reg_form);
			});
			phone.blur(function(){
				that.isPhone(reg_form);
			});
			pwd.blur(function(){
				that.isPwd(reg_form);
			});
			isPwd.blur(function(){
				that.isEqual(reg_form);
			});
			company.blur(function(){
				that.isNu($(this));
			});
			people.blur(function(){
				that.isNu($(this));
			});
			var f1 = that.isEqual(reg_form),
				//f2 = that.isPwd(reg_form),
				f3 = that.isEmail(reg_form),
				f4 = that.isPhone(reg_form),
				f5= that.isNu(people),
				f6 = that.isNu(company);
			flag = f1 && f3 && f4 && f5 && f6;
			return flag;
		},
		isNu:function(that){
			var val = that.val(),
				flag = false;
			if(val==""){
				flag =false;
				that.siblings(".help_line").css("display","block");
			}else{
				flag =true;
				that.siblings(".help_line").css("display","none");
			}
			return flag;
		},
		isEqual:function(reg_form){
			var pwd = reg_form.find(".pwd").val(),
				isPwd = reg_form.find(".isPwd").val();
				flag = false;
			if(pwd==isPwd){
				flag = true;
				reg_form.find(".isPwd").siblings(".help_line").css("display","none");
			}else{
				reg_form.find(".isPwd").siblings(".help_line").css("display","block");
			}
			return flag;
		},
		// isPwd:function(reg_form){
		// 	var pwd = reg_form.find(".pwd").val(),
		// 		flag = false;
		// 	if(pwd.length>0 && pwd.length<15){
		// 		flag = true;
		// 		reg_form.find(".pwd").siblings(".help_line").css("display","none");
		// 	}else{
		// 		reg_form.find(".pwd").siblings(".help_line").css("display","block");
		// 	}
		// 	return flag;
		// },
		isEmail:function(reg_form){
			var isEmail = reg_form.find(".email").val(),
				flag = false,
				reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
			if(reg.test(isEmail)){
				flag=true;
				reg_form.find(".email").siblings(".help_line").css("display","none");
			}else{
				reg_form.find(".email").siblings(".help_line").css("display","block");
			}
			return flag;
		},
		isPhone:function(reg_form){
			var isPhone = reg_form.find(".phone").val(),
				flag = false,
				reg = /1[3|5|7|8|][0-9]{9}/;
			if(reg.test(isPhone)){
				flag=true;
				reg_form.find(".phone").siblings(".help_line").css("display","none");
			}else{
				reg_form.find(".phone").siblings(".help_line").css("display","block");
			}
			return flag;
		},
		adminManager:function(admin){
		var btnAddAdmin = admin.find(".btnAddAdmin"),
			confirm = $(".confirm"),
			btnClose = confirm.find(".btnClose");

			btnAddAdmin.click(function(){
				confirm.css("display","block");
			});
			btnClose.click(function(){
				confirm.css("display","none");
			});
		},
		organization:function(organ){
		//组织架构全选操作
			var check_all = organ.find("input[name='check_all']"),
				check_only = organ.find("input[name='check_only']"),
				len = check_only.length;
			check_all.click(function(){
				var status = $(this).prop("checked");
				if(status==true)
					check_only.prop("checked",true);
				else
					check_only.prop("checked",false);
			});
			check_only.click(function(){
				var length = organ.find("input[name='check_only']:checked").length;
				if(length == len)
					check_all.prop("checked",true);
				else
					check_all.prop("checked",false);
			});
			//左侧树形菜单导航
			var tree = organ.find(".tree");
			tree.find("a").click(function(){
				var id = $(this).parent().attr("data-id"),
					cl = $(this).parent().attr("class");
				debugger
				if(cl == "open parent_node" || cl == "parent_node open"){
					$(this).parent().siblings(".childNode"+id).css("display","none");
					$(this).parent().removeClass("open");
				}else{
					$(this).parent().siblings(".childNode"+id).css("display","block");
					$(this).parent().addClass("open");
				}
				// if($(this).parent().siblings(".childNode"+id).length>0){
				// 	$(this).siblings(".ht1").toggle();
				// }
				// var status = $(this).parent().siblings(".childNode"+id).css("display")=="block"?"none":"block";
				// $(this).parent().siblings(".childNode"+id).css("display",status);
				// if(child_tree.size()>0){
				// 	child_tree.toggle();
				// 	var status = child_tree.css("display");
				// 	if(status=="block"){
				// 		$(this).find("span").text("-");
				// 	}else{
				// 		$(this).find("span").text("+");
				// 	}
				// }
			});
			tree.find(".parent_node").hover(function(){
				$(this).find(".operate").css("display","block");
			},function(){
				$(this).find(".operate").css("display","none");
			});

			var btn_Add = organ.find(".btnAdd"),
				btn_Del = organ.find(".btnDel"),
				btn_Edit = organ.find(".edit"),
				btn_Remove = organ.find(".btn_remove"),
				btn_Close = $(".addOranization").find(".btnClose");
				head_photo_Close = $(".addOranization").find(".head_photo_Close");
				head_photo = $("#organztionBox").find(".head_photo");
			btn_Add.click(function(){
				$("#organztionBox").css("display","block");
			});
			btn_Close.click(function(){
				$("#organztionBox").css("display","none");
			});		
			head_photo_Close.click(function(){
				$("#head_photo").css("display","none");
			});
			btn_Remove.click(function(){
				$(".content_wrap").css("display","block");
			});
			btn_Edit.click(function(){
				$(this).parent().siblings(".edit_input").css("display","block");
			});
			head_photo.click(function(){
				$("#head_photo").css("display","block");
			});
		}
	}
	minJs.init();
});