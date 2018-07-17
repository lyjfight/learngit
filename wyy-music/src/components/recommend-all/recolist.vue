<template>
	<div class="reclist">
		<div class="item">
			<h2>推荐歌单<i class="iconfont icon-dayuhao"></i></h2>
		</div>
		<div class="content">
			<div class="con">
				<ul>
					<li><div class="pic"><img src="../../../static/img/recolist/pic1.png" alt=""></div><p>二次演绎｜爵士与萌元素的浪漫邂逅</p><span>181万</span></li>
					<li><div class="pic"><img src="../../../static/img/recolist/pic2.png" alt=""></div><p>Mello Gaming</p><span>24万</span></li>
					<li><div class="pic"><img src="../../../static/img/recolist/pic3.png" alt=""></div><p>致巨蟹|想要拥抱你柔软的心</p><span>838万</span></li>
					<li class="btm"><div class="pic"><img src="../../../static/img/recolist/pic4.png" alt=""></div><p>新的一天，别忘了带上阳光和微笑</p><span>565万</span></li>
					<li class="btm"><div class="pic"><img src="../../../static/img/recolist/pic5.png" alt=""></div><p>不得了！这些英文歌的热评信息量好大……</p><span>128万</span></li>
					<li class="btm"><div class="pic"><img src="../../../static/img/recolist/pic6.png" alt=""></div><p>为什么你不想要最好的？</p><span>2191万</span></li>
				</ul>
			</div>		
		</div>
	</div>
</template>
<script type="text/javascript">
	
</script>
<style type="text/css">
h2 {
	margin: 0px;
	padding: 0px;
}
p {
	margin: 0px;
	padding: 0px;
}
.reclist {
	width: 100%;
	/*height: 395px;*/
	margin-top:10px;
}
.reclist .item {
	width: 100%;
	height: 48px;
	line-height: 48px;
}
.reclist .item h2 {
	color: #000;
	font-weight: 600;
	font-size: 17px;
	text-align: left;
	padding-left: 8px;
}
.reclist .item h2 i {
	margin-left: 3px;
	font-size: 17px;
}
.reclist .content {
	box-sizing: border-box;
	width: 100%;
	height: 350px;
	margin-top: -16px;
	padding: 0 4.5px; 
}
.reclist .content ul {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}
.reclist .content li {
	width: 32%;
	height: 170px;
	border-radius: 4px;
	position: relative;
}
.reclist .content li.btm {
	margin-top: 10px;
}
.reclist .content li .pic {
	width: 100%;
	border-radius: 4px;
}
.reclist .content li .pic img {
	width: 100%;
	border-radius: 4px;
}
.reclist .content li p {
	display: inline-block;
	text-align: left;
	width: 100%;
	height: 32px;
	font-size: 12px;
	line-height: 16px;
	color: #000;
	margin-top: 8px;
	font-weight: 400;
	word-wrap: break-word;
  	word-break: break-all;
}
.reclist .content li span {
	position: absolute;
	right: 5px;
	top: 3px;
	color: #fff;
	font-size: 12px;
}
.reclist .content li span:before {
	display: block;
	content: "";
	width: 12px;
	height: 12px;
	background-image: url(../../../static/img/recolist/icon_listen.png);
	background-size: 100% 100%;
	position: absolute;
	top: 2px;
	left: -13px;
}
</style>