<template>
	<div class="playsong">
		<div class="bg"></div>
		<div class="main">
			<div class="head">
				<router-link to="/localmusic/localsongs"><div class="back"><i style="font-size:24px;" class="iconfont icon-zuojiantou"></i></div></router-link>
				<div class="text">
					<p class="name" style="font-weight: 500;font-size:18px;">年轮</p>
					<p class="author" style="font-size:12px;color:#666">汪苏泷 ></p>
				</div>
				<div class="share"><i style="font-size:30px;" class="iconfont icon-20"></i></div>
			</div>
			<router-view></router-view>
			<div class="foot">
				<div class="progress-box">
					<p class="current-time">{{currentTime}}</p>
					<div class="current-progress" id="current-progress">
						<div class="yuan"></div>
					</div>
					<p class="total-time">{{totalTime}}</p>	
				</div>
				<div class="option">
					<el-row>
						<el-col :span="4"><div class="grid-content"><i class="iconfont icon-liebiaoxunhuan" style="font-size: 30px"></i></div></el-col>
						<el-col :span="5"><div class="grid-content"><i class="iconfont icon-bofangqixiashou1"></i></div></el-col>
						<el-col :span="6"><div @click="toggleplay" class="grid-content"><i :class="['iconfont', play?'icon-zanting':'icon-bofang2']" style="font-size:42px"></i></div></el-col>
						<el-col :span="5"><div class="grid-content"><i class="iconfont icon-bofangqixiashou"></i></div></el-col>
						<el-col :span="4"><div class="grid-content"><i class="iconfont icon-caidan1" style="font-size: 28px"></i></div></el-col>
					</el-row>
				</div>
			</div>
			<audio id="audio" src="../../../../../static/audio/test.mp3"></audio>
		</div>
	</div>
</template>
<script type="text/javascript">
export default {
	data(){
		return {
			play:false, //播放开关
			playsong_timer:'', //定时器开关
			deg:0, //唱片旋转度数
			currentTime:'00:00', //当前时长
			totalTime:'00:00'  //总时长
		}
	},
	/*computed:{
		cTime:function(){
			return this.timeToggle(this.currentTime);
		},
		tTime:function(){
			return this.timeToggle(this.totalTime);
		}
	},*/
	mounted(){
		var oAudio=document.getElementById('audio');
		var oprogress=document.getElementById('current-progress');
		var oYuan=oprogress.children[0];
		oAudio.volume=0.3;
		oAudio.addEventListener("timeupdate",function(){ //监控播放时长
			var oboxwidth=oprogress.offsetWidth;	
			var nowTime=oAudio.currentTime;//获取当前视频的播放时间
			this.currentTime=this.timeToggle(nowTime);
			var totalTime=oAudio.duration;//获取视频的总时长
			this.totalTime=this.timeToggle(totalTime);
			var rate=(nowTime/totalTime)*100+'%';//小数 -> 百分比
			// var rate=(nowTime/totalTime);
			oprogress.style.background="linear-gradient(to right,red "+rate+",#bab3b3 "+rate+")"; 
			oYuan.style.left=-7+oboxwidth*parseFloat(rate)/100+'px';
			if(rate=='100%') clearInterval(this.playsong_timer);
		}.bind(this));
		oprogress.addEventListener('click',function(e){ //进度条快进
			var oboxwidth=oprogress.offsetWidth;
			var currentP=oboxwidth/0.8-oboxwidth;
			var rate=e.clientX-currentP+2.25;
			if(rate<-7) rate=-7;
			oYuan.style.left=rate+'px';
			oAudio.currentTime=(rate+7)/oboxwidth*(oAudio.duration);
			if(rate+7==oboxwidth) clearInterval(this.playsong_timer);
		});
	},
	methods:{
		toggleplay(){
			var czDom=document.getElementById('cz');
			var cdDom=document.getElementById('cd');
			var audio=document.getElementById('audio');
			this.play=!this.play;
			if(this.play){
				audio.play();
				if(this.$route.path=='/playsong/diskcd'){
					czDom.style.transform="rotate(0deg)";
					this.playsong_timer=setInterval(function(){
						this.deg+=0.1;	
						cdDom.style.transform="rotate("+this.deg+"deg)";
					}.bind(this),1);
				}		
			}else{
				audio.pause();
				if(this.$route.path=='/playsong/diskcd'){
					czDom.style.transform="rotate(-30deg)";
				}
				clearInterval(this.playsong_timer);
			}
		},
		timeToggle(time){
			var ctime=parseInt(time);
			var s=ctime%60;
		    var d=parseInt(ctime/60);
		    var ge=s%10;
		    var shi=parseInt(s/10);
		    var bai=d%10;
		    var qian=parseInt(d/10);
		    return (""+qian+bai+":"+shi+ge);
		}
	}
}
</script>
<style type="text/css">
.playsong {
	width: 100%;
	height: 100%;
	position: relative;
}
.playsong .bg {
	width: 100%;
	height: 100%;
	background-image: url(../../../../../static/img/recolist/pic1.png);
	background-size: 100% 100%;
	filter: blur(50px);
	overflow: hidden;
}
.playsong .main {
	width: 100%;
	height: 100%;
	position: absolute;
	left:0;
	top:0;
}
.playsong .main .head {
	width: 100%;
	height: 50px;
}
.playsong .main .head i {
	color: #fff;
	font-weight: 600;
}
.playsong .main .head .back {
	width: 18%;
	height: 100%;
	line-height: 50px;
	float: left;
	text-align: center;
}
.playsong .main .head .text {
	width: 60%;
	height: 100%;
	line-height: 50px;
	float: left;
	text-align: left;
}
.playsong .main .head .text p {
	margin:0;
	color:#fff;
	line-height: 20px;
}
.playsong .main .head .text p.name {
	margin-top: 6px;
}
.playsong .main .head .share {
	width: 18%;
	height: 100%;
	line-height: 45px;
	float: right;
	text-align: center;
}
.playsong .main .foot {
	position: absolute;
	left: 0px;
	bottom: 0px;
	width: 100%;
	height: 80px;
}
.playsong .main .foot .progress-box {
	width: 100%;
	height: 20%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 12px;
}
.playsong .main .foot .progress-box p {
	color: #fff;
}
.playsong .main .foot .progress-box .current-progress {
	width: 70%;
    background: linear-gradient(to right, red 0%,#bab3b3 0%);
    height: 3px;
    position: relative;
    top: 0px;
    left: 0px;
}
.playsong .main .foot .progress-box .current-progress .yuan {
	width: 14px;
	height: 14px;
	border-radius: 7px;
	background: radial-gradient(3px at 7px 7px, red, white);
	position: absolute;
	left: -7px;
	top: -6px;
}
.playsong .main .foot .option {
	width: 100%;
	height: 60%;
	margin-top: 10px;
}
.playsong .main .foot .option .grid-content {
	height: 100%;
	line-height: 45px;
}
.playsong .main .foot .option .el-row {
	background-color: transparent;
}
.playsong .main .foot .option i {
	color: #fff;
}
</style>