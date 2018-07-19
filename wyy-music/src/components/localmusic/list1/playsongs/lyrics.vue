<template>
	<div class="lyrics">
		<div class="con">
			<div class="voice-box">
				<div class="current-voice" id="current-voice">
					<div class="yuan"></div>
					<div class="laba" @click="voiceToggle"><i :class="['iconfont', voiceplay?'icon-xiaolaba':'icon-jingyin']"></i></div>
				</div>
			</div>
			<router-link to="/playsong/diskcd">
			<div class="lyrics-box">
				
			</div>
			</router-link>
		</div>
	</div>
</template>
<script type="text/javascript">
export default {
	data(){
		return {
			voiceplay:true
		}
	},
	mounted(){
		var oVoice=document.getElementById('current-voice');
		var oAudio=document.getElementById('audio');
		var oYuan=oVoice.children[0];
		oVoice.addEventListener('click',function(e){ //进度条快进
			var oboxwidth=oVoice.offsetWidth;
			var currentP=(oboxwidth/0.7-oboxwidth)/2;
			var rate=e.clientX-currentP-5;
			if(rate<-5) rate=-5;
			oYuan.style.left=rate+'px';
			oAudio.volume=(rate+5)/oboxwidth;
			if(oAudio.volume>0)	this.voiceplay=true;
			var pes=(rate+5)/oboxwidth*100+'%';
			oVoice.style.background="linear-gradient(to right,#bab4b4 "+pes+",rgba(200,200,200,0.3) "+pes+")";
		}.bind(this));
	},
	methods:{
		voiceToggle(){
			this.voiceplay=!this.voiceplay;
		}
	}
}
</script>
<style type="text/css">
.lyrics {
	width: 100%;
}
.lyrics .con {
	width: 70%;
	margin: 0 auto;
}
.lyrics .con .voice-box {
	width: 100%;
	height: 12px;
}
.lyrics .con .voice-box .current-voice {
	width: 100%;
    background: linear-gradient(to right,#bab4b4 30%,rgba(200,200,200,0.3) 30%);
    height: 2px;
    position: relative;
    top: 5px;
    left: 0px;
}
.lyrics .con .voice-box .current-voice .yuan {
	width: 10px;
	height: 10px;
	border-radius: 5px;
	background-color: #fff;
	position: absolute;
	left: 75.5px;
	top: -4px;
}	
.lyrics .con .voice-box .current-voice .laba {
	position: absolute;
	left: -35px;
	top: -8px;
}
.lyrics .con .voice-box .current-voice .laba i {
	font-size: 18px;
	color: #ccc;
}
.lyrics .con .voice-box .current-voice .laba i.icon-jingyin {
	font-size: 15px;
}
.lyrics .con .lyrics-box {
	width: 100%;
	height: 200px;
	margin-top: 100px;
}
</style>