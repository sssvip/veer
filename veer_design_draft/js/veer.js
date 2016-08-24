
/*初始置空内容*/
$("#username").click(function(){
	var temp_string=$(this).attr("value");
	if(temp_string=="your name"){
		$(this).attr("value","");
	}
})


function username_check(){
	var temp_string=$("#username").attr("value");
	if(temp_string==""||temp_string=="your name"){
		alert("请输入您的用户名！");
		$("#username").attr("value","");
		$("#username").focus();
		return false;
	}else{
		return true;
	}
}	

function password_check(){
	var temp_string=$("#password").attr("value");
	if(temp_string==""){
		alert("请输入密码.");
		$("#password").attr("value","");
		$("#password").focus();
		return false;
	}else{
		return true;
	}
}

/*密码确认验证*/
function password1_check(){
	var temp_string=$("#password1").attr("value");
	if(temp_string==""){
		alert("请输入确认密码.");
		$("#password1").attr("value","");
		$("#password1").focus();
		return false;
	}else if($("#password").attr("value")!=$("#password1").attr("value")){
		alert("两次密码输入不一致.");
		$("#password1").attr("value","");
		$("#password1").focus();
	}else{
		return true;
	}
}
/*登录验证*/
function login_check(form){
	if(!username_check()){
		return false;
	}else if(!password_check()){
		return false;
	} else 
	return true;

}

/*注册验证*/
function register_check(form){
	if(!username_check()){
		return false;
	}else if(!password_check()){
		return false;
	}else if(!password1_check()){
		return false;
	} else
	return true;
}