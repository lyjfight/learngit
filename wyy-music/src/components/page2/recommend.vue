<template>
	<div>
		<appBanner></appBanner>
		<appGroup></appGroup>
		<appReclist></appReclist>
		<appLsmusic></appLsmusic>
		<appAnchorst></appAnchorst>
		<appMember></appMember>
	</div>
</template>
<script type="text/javascript">
import appBanner from '../recommend-all/banner.vue';
import appGroup from '../recommend-all/grouping.vue';
import appReclist from '../recommend-all/recolist.vue';
import appLsmusic from '../recommend-all/lsmusic.vue';
import appAnchorst from '../recommend-all/anchorst.vue';
import appMember from '../recommend-all/member.vue';

export default {
	name:'recommend',
	components:{
		appBanner,
		appGroup,
		appReclist,
		appLsmusic,
		appAnchorst,
		appMember
	}
}	
</script>