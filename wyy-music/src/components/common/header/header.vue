<template>
	<div class="header">
		<div class="head-nav">
			<el-row>
			  <el-col :xs="6" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content grid-l"><i @click="" class="l-light iconfont icon-menulines1188101easyiconnet"></i></div></el-col>
			  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content"><router-link to="/first"><i @click="changeC" class="midS iconfont icon-yinyue"></i></router-link></div></el-col>
			  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content"><router-link to="/second/recommend"><i @click="changeC" class="light midS iconfont icon-wangyiyunyinle"></i></router-link></div></el-col>
			  <el-col :xs="4" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content grid-color-c"><router-link to="/third"><i @click="changeC" class="midS iconfont icon-shipin"></i></router-link></div></el-col>
			  <el-col :xs="6" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content grid-r"><i class="r-light iconfont icon-sousuo"></i></div></el-col>
			</el-row>			
		</div>
	</div>
</template>
<script type="text/javascript">
export default {
	name: 'aheader',
	methods:{
		changeC(e){
			var mids=document.getElementsByClassName('midS');
			[...mids].forEach(function(item){
				item.classList.remove('light');
			})
			e.target.classList.add('light');
		}
	}
}
</script>
<style type="text/css">
.header {
	width: 100%;
	position: fixed;
	left: 0px;
	top: 0px;
	z-index: 999;
}
.iconfont {
	font-size: 24px;
	color: #9e9e9e;
}
.el-row {
	background-color: #D43C33;
}
.grid-content {
	min-height: 45px;
	text-align: center;
	line-height: 45px;
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
</style>