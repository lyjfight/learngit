<template>
	<div class="collsongs">
		<div class="head" @click="toggleShow">
			<div class="fuhao"><i :class="[isActive, show?'icon-moreunfold':'icon-dayuhao']"></i></div>
			<div class="item">
				<span>收藏的歌单(<em>1</em>)</span>
			</div>
			<div class="shezhi"><i class="iconfont icon-shezhi"></i></div>
		</div>
		<div class="con" v-show="show">
			<div class="pic"><img src="../../../static/img/collsongs/pic1.png" alt=""></div>
			<div class="item">
				<span class="name">青青青青青青山、</span>
				<span class="count"><i class="iconfont icon-gougou"></i>290首by悠依、，已下载3首</span>
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
		toggleShow(){
			this.show=!this.show;
		}
	}
}	
</script>
<style type="text/css">
.collsongs {
	width: 100%;
	margin-top: 4px;
}
.collsongs .head {
	width: 100%;
	height: 30px;
	background-color: #eaeaea;
}
.collsongs .head i {
	font-size: 16px;
	color: #666;
}
.collsongs .head .fuhao {
	float: left;
	width: 10%;
	height: 100%;
	line-height: 30px;
}
.collsongs .head .item {
	float: left;
	width: 30%;
	height: 100%;
	line-height: 30px;
	text-align: left;
}
.collsongs .head .item span {
	font-size: 13px;
}
.collsongs .head .item span em {
	font-style: normal;
}
.collsongs .head .shezhi {
	float: right;
	width: 10%;
	height: 100%;
	line-height: 30px;
}
.collsongs .con {
	width: 100%;
	height: 58px;
}
.collsongs .con .pic {
	float: left;
	width: 60px;
	height: 100%;
}
.collsongs .con .pic img {
	margin-top: 4px;
	margin-left: 6px;
	width: 54px;
	height: 54px;
	border-radius: 5px;
}
.collsongs .con .item {
	float: left;
	width: 50%;
	height: 100%;
	text-align: left;
	margin-left: 10px;
}
.collsongs .con .item span {
	display: inline-block;
	width: 100%;
	height: 15px;
}
.collsongs .con .item span.name {
	margin-top: 10px;
	font-size: 14px;
}
.collsongs .con .item span.count {
	margin-top: -5px;
	font-size: 12px;
}
.collsongs .con .item span.count i {
	font-size: 13px;
	font-weight: 700;
	color: skyblue;
	margin-right: 8px;
}
.collsongs .con .fuhao {
	float: right;
	width: 10%;
	height: 100%;
	line-height: 58px;
	text-align: left;
	transition: 0.7s;
}
.collsongs .con .fuhao:active {
	background-color: #000;
	opacity: 0.2;
}
.collsongs .con .fuhao i {
	margin-left: 2px;
}
</style>