<template>
	<div class="group">
		<el-row class='group-el-row'>
		  <el-col :span="6"><div class="grid-content"><div class="group-y"><router-link to="/second/recommend"><i class="iconfont icon-Radio"></i></router-link></div><span>私人FM</span></div></el-col>
		  <el-col :span="6"><div class="grid-content"><div class="group-y"><router-link to="/second/recommend"><i class="iconfont icon-rili"></i></router-link></div><span>每日推荐</span></div></el-col>
		  <el-col :span="6"><div class="grid-content"><div class="group-y"><router-link to="/second/recommend"><i class="iconfont icon-gedan"></i></router-link></div><span>歌单</span></div></el-col>
		  <el-col :span="6"><div class="grid-content"><div class="group-y"><router-link to="/second/recommend"><i class="iconfont icon-paixingbang"></i></router-link></div><span>排行榜</span></div></el-col>
		</el-row>
	</div>
</template>
<script type="text/javascript">
	
</script>
<style type="text/css">
.group {
	width: 100%;
	height: 85px;
	margin-top: 20px;
}
.group .group-el-row {
	width: 100%;
	height: 100%;
	background-color: #fff;
}
.group .group-el-row .grid-content {
	display: inline-block;
}
.group .group-el-row .grid-content .iconfont {
	font-size: 26px;
	color: #fff;
}
.group .group-el-row .grid-content span {
	display: block;
	margin-top: -8px;
	color: #000;
	font-size: 12px;
}
.group .group-el-row .grid-content .group-y {
	display: block;
	background-color: #D43C33;
	border-radius: 25px;
	width: 50px;
	height: 50px;
	line-height: 50px;
	text-align: center;
}
</style>