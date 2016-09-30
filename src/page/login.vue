<!-- 登录界面 -->
<style scoped>
.offset1{
    margin-top: 200px;
    position: relative;
    border: 1px solid #ddd;
    background-color: #fff;
    position: relative;
    max-width: 400px;
    padding: 0;
}
.owl-login{
    width: 211px;
    height: 108px;
    background-image: url("../img/owl-login.png");
    position: absolute;
    top: -100px;
    left: 50%;
    margin-left: -111px;
}
.owl-login .hand{
    width: 34px;
    height: 34px;
    -webkit-border-radius: 40px;
    border-radius: 40px;
    background-color: #472d20;
    -webkit-transform: scaleY(0.6);
    -moz-transform: scaleY(0.6);
    -o-transform: scaleY(0.6);
    -ms-transform: scaleY(0.6);
    transform: scaleY(0.6);
    -webkit-transition: 0.3s ease-out;
    -moz-transition: 0.3s ease-out;
    -o-transition: 0.3s ease-out;
    -ms-transition: 0.3s ease-out;
    transition: 0.3s ease-out;
    position: absolute;
    left: 14px;
    bottom: -8px;
}
.owl-login .hand.hand-r{
    left: 170px;
}
.owl-login .arms{
    top: 58px;
    position: absolute;
    width: 100%;
    height: 41px;
    overflow: hidden;
}
.loginform .pad{
    overflow: hidden;
    padding: 30px;
}
.loginform .controls{
    position: relative;
    margin-bottom: 10px;
}
.loginform label {
    position: absolute;
    top: 13px;
    left: 13px;
    font-size: 16px;
    color: rgba(0,0,0,0.3);
}
.loginform input {
    padding: 9px 6px 9px 40px;
    height: auto;
}
.loginform input{
    color: #444;
}
.loginform .form-actions{
    border-top: 1px solid #e4e4e4;
    background-color: #f7f7f7;
    padding: 15px 30px;
    text-align: right;
}
.pull-left {
    float: left !important;
}
</style>
<template>
<div class='login-container' v-if='loginshowflag'>
	<div class='container offset1 loginform'>
		<div class='owl-login'>
			<div class='hand'></div>
			<div class='hand hand-r'></div>
			<div class='arms'></div>
		</div>
		<div class='pad'>
			<div class='control-group'>
				<div class='controls'>
					<label class='glyphicon glyphicon-user'></label>
					<input type="text" class='form-control input-medium' placeholder="登录名" tabindex="1" v-model='loginName'>
				</div>
			</div>
			<div class='control-group'>
				<div class='controls'>
					<label class='glyphicon glyphicon-asterisk'></label>
					<input type="password" class='form-control input-medium' placeholder="Password" tabindex="2" v-model='passWord'>
				</div>
			</div>
		</div>
		<div class='form-actions'>
			<a href="#" class='btn pull-left btn-link text-muted'>Forgot password?</a>
			<a href="#" class='btn btn-link text-muted'>Sign Up</a>
			<button type="submit"  class='btn btn-primary' @click='loginFun'>Login</button>
		</div>
	</div>
</div>
</template>

<script>
export default {
	props: {
    	loginshowflag:{
    		required:true,
    	}
	},
	components: {
	},
	ready: function() {
	},
	methods: {
		loginFun:function(){
			if(this.loginName=='小颖'&&this.passWord=='123'){
				this.loginshowflag=false;
			}else{
				alert('登录名或密码错误!');
			}
		}
	},
	data() {
		return {
			loginName:'',
			passWord:''
		}
	}
}
</script>

