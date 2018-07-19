<template>
	<div class="crtesongs">
		<div class="head" @click="toggleShow($event)">
			<div class="fuhao"><i :class="[isActive, show?'icon-moreunfold':'icon-dayuhao']"></i></div>
			<div class="item">
				<span>创建的歌单(<em>1</em>)</span>
			</div>
			<div class="shezhi"><i class="iconfont icon-shezhi"></i></div>
		</div>
		<div class="con" v-show="show">
			<div class="pic"><img src="../../../static/img/crtesongs/pic1.png" alt=""></div>
			<div class="item">
				<span class="name">我喜欢的音乐</span>
				<span class="count"><i class="iconfont icon-gougou"></i>46首，已下载9首</span>
			</div>
			<div class="fuhao"><i class="iconfont icon-caidan"></i></div>
		</div>
	</div>
</template>
<script type="text/javascript">
export default {
	data(){
		return {
			show:true,
			isActive:'iconfont',
			iconfont:true
		}
	},
	methods:{
		toggleShow(event){
			// e.target.children[0].children[0].classList.remove("icon-moreunfold").classList.add("icon-dayuhao");
			console.log(event.target)
			this.show=!this.show;
		}
	}
}	
</script>
<style type="text/css">
.crtesongs {
	width: 100%;
}
.crtesongs .head {
	width: 100%;
	height: 30px;
	background-color: #eaeaea;
}
.crtesongs .head i {
	font-size: 16px;
	color: #666;
}
.crtesongs .head .fuhao {
	float: left;
	width: 10%;
	height: 100%;
	line-height: 30px;
}
.crtesongs .head .item {
	float: left;
	width: 30%;
	height: 100%;
	line-height: 30px;
	text-align: left;
}
.crtesongs .head .item span {
	font-size: 13px;
}
.crtesongs .head .item span em {
	font-style: normal;
}
.crtesongs .head .shezhi {
	float: right;
	width: 10%;
	height: 100%;
	line-height: 30px;
}
.crtesongs .con {
	width: 100%;
	height: 58px;
}
.crtesongs .con .pic {
	float: left;
	width: 60px;
	height: 100%;
}
.crtesongs .con .pic img {
	margin-top: 4px;
	margin-left: 6px;
	width: 54px;
	height: 54px;
	border-radius: 5px;
}
.crtesongs .con .item {
	float: left;
	width: 50%;
	height: 100%;
	text-align: left;
	margin-left: 10px;
}
.crtesongs .con .item span {
	display: inline-block;
	width: 100%;
	height: 15px;
}
.crtesongs .con .item span.name {
	margin-top: 10px;
	font-size: 14px;
}
.crtesongs .con .item span.count {
	margin-top: -5px;
	font-size: 12px;
}
.crtesongs .con .item span.count i {
	font-size: 13px;
	font-weight: 700;
	color: skyblue;
	margin-right: 8px;
}
.crtesongs .con .fuhao {
	float: right;
	width: 10%;
	height: 100%;
	line-height: 58px;
	text-align: left;
	transition: 0.7s;
}
.crtesongs .con .fuhao:active {
	background-color: #000;
	opacity: 0.2;
}
.crtesongs .con .fuhao i {
	margin-left: 2px;
}
</style>