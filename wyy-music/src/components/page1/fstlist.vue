<template>
	<div class="fstlist">
		<ul>
			<li>
				<router-link to="/localmusic/localsongs">
				<div class="fuhao"><i class="iconfont icon-yinyue"></i></div>
				<div class="item">
					<span>本地音乐 <em>(13)</em></span>
				</div>
				</router-link>
			</li>
			<li>
				<router-link to="/localmusic/localsongs">
				<div class="fuhao"><i class="iconfont icon-bofang"></i></div>
				<div class="item">
					<span>最近播放 <em>(101)</em></span>
				</div>
				</router-link>
			</li>
			<li>
				<router-link to="/localmusic/localsongs">
				<div class="fuhao"><i class="iconfont icon-xiazai2"></i></div>
				<div class="item">
					<span>下载管理 <em>(13)</em></span>
				</div>
				</router-link>
			</li>
			<li>
				<router-link to="/localmusic/localsongs">
				<div class="fuhao"><i class="iconfont icon-diantaibaoshe"></i></div>
				<div class="item">
					<span>我的电台 <em>(0)</em></span>
				</div>
				</router-link>
			</li>
			<li class="last">
				<router-link to="/localmusic/localsongs">
				<div class="fuhao"><i class="iconfont icon-wodeshoucang"></i></div>
				<div class="item">
					<span>我的收藏 <em>(专辑/歌手/视频/专栏)</em></span>
				</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript"></script>
<style type="text/css">
.fstlist {
	width: 100%;
}
.fstlist ul {
	width: 100%;
}
.fstlist ul li {
	width: 100%;
	height: 60px;
	display: block;
	transition: 0.5s;
}
.fstlist ul li:active {
	background-color: #999;
	opacity: 0.2;
}
.fstlist ul li .fuhao {
	width: 15%;
	height: 100%;
	display: inline-block;
	float: left;
	text-align: center;
	line-height: 64px;
}
.fstlist ul li .fuhao i {
	font-size: 22px;
	color: #D43C33;
}
.fstlist ul li .item {
	float: right;
	width: 85%;
	height: 100%;
	line-height: 60px;
	border-bottom: 1px solid #ccc;
	display: inline-block;
	box-sizing: border-box;
	text-align: left;
}
.fstlist ul li.last .item {
	border-bottom: 1px solid transparent;
}
.fstlist ul li .item span {
	color: #000;
}
.fstlist ul li .item span em {
	color: #999;
	font-size: 14px;
	font-style: normal;
}
</style>