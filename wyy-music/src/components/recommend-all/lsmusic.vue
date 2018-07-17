<template>
	<div class="lsmusic">
		<div class="item">
			<h2>最新音乐<i class="iconfont icon-dayuhao"></i></h2>
		</div>
		<div class="content">
			<div class="con">
				<ul>
					<li><div class="pic"><img src="../../../static/img/lsmusic/pic1.png" alt=""></div><p>此时盛夏</p><span class="aut">萨沙</span></li>
					<li><div class="pic"><img src="../../../static/img/lsmusic/pic2.png" alt=""></div><p>平凡的一天</p><span class="aut">毛不易</span></li>
					<li><div class="pic"><img src="../../../static/img/lsmusic/pic3.png" alt=""></div><p>The GREAT YOGA 数位Live 精选</p><span class="aut">林宥嘉</span></li>
					<li class="btm"><div class="pic"><img src="../../../static/img/lsmusic/pic4.png" alt=""></div><p>Over My Skin</p><span class="aut">Tiffany Young</span></li>
					<li class="btm"><div class="pic"><img src="../../../static/img/lsmusic/pic5.png" alt=""></div><p>Scorpion</p><span class="aut">Drake</span></li>
					<li class="btm"><div class="pic"><img src="../../../static/img/lsmusic/pic6.png" alt=""></div><p>偶遇</p><span class="aut">王菲</span></li>
				</ul>
			</div>		
		</div>
	</div>
</template>
<script type="text/javascript">
	
</script>
<style type="text/css">
.lsmusic {
	width: 100%;
	/*height: 395px;*/
	margin-top:10px;
}
.lsmusic .item {
	width: 100%;
	height: 48px;
	line-height: 48px;
}
.lsmusic .item h2 {
	color: #000;
	font-weight: 600;
	font-size: 17px;
	text-align: left;
	padding-left: 8px;
}
.lsmusic .item h2 i {
	margin-left: 3px;
	font-size: 17px;
}
.lsmusic .content {
	box-sizing: border-box;
	width: 100%;
	height: 350px;
	margin-top: -16px;
	padding: 0 4.5px; 
}
.lsmusic .content ul {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}
.lsmusic .content li {
	width: 32%;
	height: 170px;
	border-radius: 4px;
}
.lsmusic .content li.btm {
	margin-top: 10px;
}
.lsmusic .content li .pic {
	width: 100%;
	border-radius: 4px;
}
.lsmusic .content li .pic img {
	width: 100%;
	border-radius: 4px;
}
.lsmusic .content li p {
	display: inline-block;
	text-align: left;
	width: 100%;
	height: 12px;
	font-size: 12px;
	line-height: 12px;
	color: #000;
	margin-top: 8px;
	font-weight: 400;
	text-overflow: ellipsis;
	overflow: hidden; 
}	
.lsmusic .content li span {
	display: block;
	width: 100%;
	color: #999;
	font-size: 12px;
	text-align: left;
	margin-top: 0px;
}
</style>