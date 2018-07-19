<template>
	<div class="first-con">
		<div class="head"></div>
		<appFstuser></appFstuser>
		<appFstlist></appFstlist>
		<appCrtesongs></appCrtesongs>
		<appCollsongs></appCollsongs>
	</div>
</template>
<script type="text/javascript">
import	appFstuser from '../../page1/fstuser.vue';
import	appFstlist from '../../page1/fstlist.vue';
import  appCrtesongs from '../../page1/crtesongs.vue';
import  appCollsongs from '../../page1/collsongs.vue';

export default {
	name: 'first',
	components: {
		appFstuser,
		appFstlist,
		appCrtesongs,
		appCollsongs
	}
}	
</script>
<style type="text/css">
.first-con {
	width: 100%;
}
.first-con .head {
	width: 100%;
	height: 48px;
	background-color: #D43C33;
}
</style>