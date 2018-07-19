<template>
	<div class="localmusic">
		<div class="head">
			<el-row>
			  <el-col :span="3"><router-link to="/app/first"><div class="grid-content back"><i class="iconfont icon-zuojiantou" style="font-size:20px;"></i></div></router-link></el-col>
			  <el-col :span="15"><div class="grid-content text" style="font-size:20px;">本地音乐</div></el-col>
			  <el-col :span="3"><div class="grid-content"><i class="iconfont icon-sousuo"></i></div></el-col>
			  <el-col :span="3"><div class="grid-content"><i class="iconfont icon-caidan"></i></div></el-col>
			</el-row>
		</div>
		<div class="item">
			<el-row>
			  <el-col :span="6"><router-link to="/localmusic/localsongs"><div class="grid-content"><span class="current" @click="changeC">单曲</span></div></router-link></el-col>
			  <el-col :span="6"><router-link to="/localmusic/localsonger"><div class="grid-content"><span @click="changeC">歌手</span></div></router-link></el-col>
			  <el-col :span="6"><router-link to="/localmusic/localalbum"><div class="grid-content"><span @click="changeC">专辑</span></div></router-link></el-col>
			  <el-col :span="6"><router-link to="/localmusic/localfolder"><div class="grid-content"><span @click="changeC">文件夹</span></div></router-link></el-col>
			</el-row>
		</div>
		<router-view></router-view>
	</div>
</template>
<script type="text/javascript">
export default {
	name: 'localmusic',
	methods:{
		changeC(e){
			var spanLis=document.getElementsByClassName('item')[0].getElementsByTagName('span');
			[...spanLis].forEach(function(item){
				item.className="";
			});
			e.target.className="current";
		}/*,
		back(){
			this.$router.go(-1);
		}*/
	}
}
</script>
<style type="text/css">
.localmusic {
	width: 100%;
}
.localmusic .head {
	width: 100%;
	position: fixed;
	left: 0px;
	top: 0px;
	z-index: 999;
}
.localmusic .head i {
	color: #fff;
}
.localmusic .head .text {
	text-align: left;
	color: #fff;
}
.localmusic .head .back:active i{
	background-color: #999;
}
.localmusic .item {
	width: 100%;
	position: fixed;
	left: 0px;
	top: 46px;
	z-index: 998;	
}
.localmusic .item span {
	color: #bbb;
	font-size: 15px;
}
.localmusic .item .current {
	color: #fff;
	font-weight: 500;
	padding-bottom: 2px;
	border-bottom: 2px solid #fff;
}
.localmusic .el-row {
	background-color: #D43C33;
}
.grid-l {
	text-align: left;
	margin-left: 8px;
}
.grid-r {
	text-align: right;
	margin-right: 8px;
}
.l-light {
	color: #fff;
}
.r-light {
	color: #fff;
}
.light {
	color: #fff;
}
.localmusic .item .grid-content {
	transition: 0.5s;
}
.localmusic .item .grid-content:active {
	background-color: #000;
	opacity: 0.2;
}
</style>