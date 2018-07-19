<template>
	<div class="localsongs">
		<div class="playall">
			<ul>
				<li><i class="iconfont icon-bofang1"></i></li>
				<li>播放全部<span>(共<em>8</em>首)</span></li>
				<li><i class="iconfont icon-duoxuan"></i></li>
				<li>多选</li>
			</ul>
		</div>
		<div class="playlist">
			<ul>
				<li v-for="item of playlist" @click="toggleplay(item)">
					<div class="play" v-show="item.play"><i class="iconfont icon-voice"></i></div>
					<div class="itema">
						<p class="name">{{item.name}}</p>
						<p class="author"><i class="iconfont icon-gou-blue"></i>{{item.author}}</p>
					</div>
					<div class="fuhao"><i class="iconfont icon-caidan"></i></div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script type="text/javascript">
export default {
	data(){
		return {
			playlist:[
			{
				name:'那些你很冒险的梦',
				author:'林俊杰-那些你很冒险的梦',
				play:false
			},
			{
				name:'That Girl',
				author:'Olly Murs-24 HRS(Deluxe)',
				play:false
			},
			{
				name:'爱的魔法',
				author:'金莎-他不爱我',
				play:false
			},
			{
				name:'广东十年爱情故事',
				author:'广东雨神-广东十年爱情故事',
				play:false
			},
			{
				name:'红昭愿',
				author:'音阙诗听-红昭愿',
				play:false
			},
			{
				name:'就是爱你',
				author:'陶喆-太平盛世',
				play:false
			},
			{
				name:'苦笑',
				author:'汪苏泷-好安静',
				play:false
			},
			{
				name:'空空如也',
				author:'任然-空空如也',
				play:false
			},
			{
				name:'我们不一样',
				author:'大壮-我们不一样',
				play:false
			},
			{
				name:'有点甜',
				author:'汪苏泷/By2-万有引力',
				play:false
			}]
		}
	},
	methods:{
		toggleplay(item){
			if(item.play){
				this.$router.push({path:'/playsong/diskcd'});
				return;
			}
			this.playlist.forEach(function(item){
				item.play=false;
			});
			item.play=true;
		}
	}
}
</script>
<style type="text/css">
.localsongs {
	width: 100%;
}	
.localsongs .playall {
	width: 100%;
	height: 56px;
	line-height: 56px;
	border-bottom: 1px solid #ddd;
	margin-top: 92px;
}
.localsongs .playall ul {
	width: 100%;
	height: 100%;
	transition: 0.5s;
}
.localsongs .playall ul:active {
	background-color: #999;
	opacity: 0.2;	
}

.localsongs .playall ul li {
	float: left;
	display: block;
	text-align: center;
}
.localsongs .playall ul li:nth-child(1){
	width: 10%;
	height: 100%;
}
.localsongs .playall ul li:nth-child(2){
	width: 70%;
	height: 100%;
	text-align: left;
}
.localsongs .playall ul li:nth-child(2) span {
	color: #999;
	font-size: 14px;
}
.localsongs .playall ul li:nth-child(2) span em {
	font-style: normal;
}
.localsongs .playall ul li:nth-child(3){
	width: 10%;
	height: 100%;
	text-align: right;
}
.localsongs .playall ul li:nth-child(3) i {
	font-size: 22px;
}
.localsongs .playall ul li:nth-child(4){
	width: 10%;
	height: 100%;
	font-size: 14px;
}
.localsongs .playall ul li i {
	color: #000;
}
.localsongs .playall ul li:nth-child(1) i {
	font-size: 32px;
}
.localsongs .playlist {
	width: 100%;
}
.localsongs .playlist ul {
	width: 100%;
	margin: 0px;
}
.localsongs .playlist ul li {
	width: 100%;
	height: 56px;
	border-bottom: 1px solid #ddd;
	display: block;
	transition: 0.5s;
}
.localsongs .playlist ul li:active {
	background-color: #999;
	opacity: 0.2;	
}
.localsongs .playlist ul li .play {
	float: left;
	width: 8%;
	height: 100%;
	line-height: 56px;
	text-align: right; 
}
.localsongs .playlist ul li .play i {
	color: red;
	font-size: 22px;
	font-weight: 500;
}

.localsongs .playlist ul li .itema {
	float: left;
	width: 60%;
	height: 56px;
	margin-left: 10px;
	text-align: left;
}
.localsongs .playlist ul li .itema p {
	margin: 0px;
	line-height: 20px;
}
.localsongs .playlist ul li .itema p.name {
	font-size: 15px;
	margin-top: 10px;
}
.localsongs .playlist ul li .itema p.author {
	font-size: 12px;
	color: #666;
	position: relative;
	padding-left: 20px;
}
.localsongs .playlist ul li .itema p.author i {
	color: skyblue;
	font-size: 17px;
	position: absolute;
	left: 0px;
	top: 1px;
}
.localsongs .playlist ul li .fuhao {
	float: right;
	width: 20%;
	height: 100%;
	line-height: 56px;
	text-align: right;
	margin-right: 18px;
}
.localsongs .playlist ul li .fuhao i {
	font-size: 30px;
}
</style>