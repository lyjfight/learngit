<template>
	<div>
		<div class="foot-nav">
			<el-row>
			  <el-col :span="8"><div class="grid-content"><router-link to="/second/recommend"><span class="current" @click="changeC">推荐</span></router-link></div></el-col>
			  <el-col :span="8"><div class="grid-content"><router-link to="/second/friends"><span @click="changeC">朋友</span></router-link></div></el-col>
			  <el-col :span="8"><div class="grid-content"><router-link to="/second/radio"><span @click="changeC">电台</span></router-link></div></el-col>
			</el-row>
		</div>
		<router-view></router-view>
	</div>
</template>
<script type="text/javascript">
export default {
	name: 'second',
	methods:{
		changeC(e){
			var spanLis=document.getElementsByClassName('foot-nav')[0].getElementsByTagName('span');
			[...spanLis].forEach(function(item){
				item.className="";
			});
			e.target.className="current";
		}
	}
}	
</script>
<style type="text/css">
.foot-nav{
	position: fixed;
	left: 0px;
	top: 40px;
	z-index: 998;
	width: 100%;
	bottom-top: 1px solid #D43C33;
}
.foot-nav span {
	color: #bbb;
	font-size: 15px;
}
.foot-nav .current {
	color: #fff;
	font-weight: 500;
	padding-bottom: 2px;
	border-bottom: 2px solid #fff;
}
</style>