<template>
	<div class="header">
		<div class="head-nav">
			<el-row>
			  <el-col :span="6"><div class="grid-content grid-l"><i @click="" class="l-light iconfont icon-menulines1188101easyiconnet"></i></div></el-col>
			  <el-col :span="4"><div class="grid-content"><router-link to="/app/first"><i @click="changeC" class="midS iconfont icon-yinyue" style="font-size:20px;"></i></router-link></div></el-col>
			  <el-col :span="4"><div class="grid-content"><router-link to="/app/second/recommend"><i @click="changeC" class="light midS iconfont icon-wangyiyunyinle"></i></router-link></div></el-col>
			  <el-col :span="4"><div class="grid-content grid-color-c"><router-link to="/app/third"><i @click="changeC" class="midS iconfont icon-shipin"></i></router-link></div></el-col>
			  <el-col :span="6"><div class="grid-content grid-r"><i class="r-light iconfont icon-sousuo"></i></div></el-col>
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
	},
	mounted(){
		var mids=document.getElementsByClassName('midS');
			[...mids].forEach(function(item){
				item.classList.remove('light');
			});
		switch(this.$route.path.split('/')[2]){
			case 'first':mids[0].classList.add('light');break;
			case 'second':mids[1].classList.add('light');break;
			case 'third':mids[2].classList.add('light');break;
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

.grid-content {
	min-height: 45px;
	text-align: center;
	line-height: 45px;
	
}
.head-nav .el-row {
	background-color: #D43C33;
}
.head-nav .grid-content i {
	/*transition: 0.5s;*/
	border-radius: 50%;
}
.head-nav .grid-content i:active {
	background-color: #000;
	opacity: 0.2;
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