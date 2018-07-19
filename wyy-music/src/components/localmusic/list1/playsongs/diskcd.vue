<template>
	<div class="diskcd">
		<router-link to="/playsong/lyrics">
		<div class="con">
			<img class="cz" id="cz" src="../../../../../static/img/diskcd/changzhen.png" alt="">
			
			<div class="cd">
				<img id="cd" src="../../../../../static/img/collsongs/pic1.png" alt="">
			</div>
			<div class="list">
				<el-row>
					<el-col :span="2"><div class="grid-content"></div></el-col>
					<el-col :span="5"><div class="grid-content"><i style="color: red" class="iconfont icon-aixin1"></i></div></el-col>
					<el-col :span="5"><div class="grid-content"><i class="iconfont icon-xiazai"></i></div></el-col>
					<el-col :span="5"><div class="grid-content"><i class="iconfont icon-pinglun"></i></div></el-col>
					<el-col :span="5"><div class="grid-content"><i class="iconfont icon-caidan"></i></div></el-col>
					<el-col :span="2"><div class="grid-content"></div></el-col>
				</el-row>
			</div>
		</div>
		</router-link>
	</div>
</template>
<script type="text/javascript">
	
</script>
<style type="text/css">
.diskcd {
	width: 100%;
}
.diskcd .con {
	width: 100%;
	border-top: 1px solid #999;
	margin: 0 auto;
	overflow: hidden;
}
.diskcd .con .cd {
	width: 230px;
	height: 230px;
	margin: -58px auto 0;
	background-image: url(../../../../../static/img/diskcd/changpian.jpg);
	background-size: 100% 100%;
	border-radius: 50%;
	overflow: hidden;
}
.diskcd .con .cz {
	position: relative;
	left: 47%;
	top: -13px; 
	width: 75px;
	transform-origin: 23% 0%;
	transition: 0.5s;
	transform: rotate(-30deg);
}
.diskcd .con .cd img {
	width: 160px;
	height: 160px;
	border-radius: 50%;
	margin: 35px auto;
	/*transform: rotate(30deg);*/
}
.diskcd .con .list {
	margin-top: 20px;
}
.diskcd i {
	color: #fff;
}
.diskcd .con .list .el-row {
	background-color: transparent;
}
</style>