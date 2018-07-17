<template>
	<div class="member" id="member">
		<div class="bg"></div>
		<div class="item">会员专区</div>
		<div class="imglist">
			<ul class="box">
				<li class="list1"><img src="../../../static/img/member/pic1.png" alt=""><p>荒废了时间 相隔于天边</p>
				</li>
				<li class="list2"><img src="../../../static/img/member/pic2.png" alt=""><p>这一切都是命运石之门的选择</p></li>
				<li class="list3"><img src="../../../static/img/member/pic3.png" alt=""><p>华语&日语 hit your heart</p></li>
				<li class="list4"><img src="../../../static/img/member/pic4.png" alt=""><p>那些有你的日子 不见不散</p></li>
				<li class="list5"><img src="../../../static/img/member/pic5.png" alt=""><p>生活不易且行且珍惜</p></li>
			</ul>
		</div>
		<div class="item-enter">进入会员中心<i class="iconfont icon-dayuhao"></i></div>
	</div>
</template>
<script type="text/javascript">
export default {
	name:'member',
	mounted:function(){
		var bg=document.querySelector(".member .bg");
		var aLi=document.querySelectorAll(".member li");
		var aLine=document.querySelectorAll(".member a");
		var wrap=document.querySelector(".member .imglist");
		var box=document.querySelector(".member .box");
		var aLeft=[]; //存放所有li的偏移量
		var bLeft=[]; //临时所有li的偏移量
		var aName = []; //存放类名
		var mixLeft,maxLeft; //偏移量最小最大值

		var wrapWidth = wrap.offsetWidth; //盒子宽
		var aLiWidth = box.offsetWidth; //ul以及li宽
		var marginAround=10; //图片之间的边距

		for(var item of aLi){
			aName.push(item.classList[0]);
		}

		aLi.forEach(function(item,index){
			item.style.position='absolute';
			item.style.top='0px';
			item.style.left=(wrapWidth-aLiWidth)/2-(marginAround+aLiWidth)*2+(index)*(marginAround+aLiWidth)+'px';
			aLeft.push(item.style.left);
		});
		mixLeft=aLeft[0];
		maxLeft=aLeft[aLeft.length-1];  

		function nextPic(){
			aName.unshift(aName[aName.length-1]);//往数组的第一个位置放置一个元素
			aName.pop();//删除数组的最后一个元素

			aLeft.unshift(aLeft[aLeft.length-1]);//往数组的第一个位置放置一个元素
			aLeft.pop();//删除数组的最后一个元素
			aLi.forEach(function(item,index){
				if(aLeft[index]==maxLeft){
					item.style.transition="";
					item.style.left=aLeft[index];
				}
			});
			setTimeout(function(){
				aLi.forEach(function(item,index){
					item.style.transition="0.5s";
					item.style.left=aLeft[index];
				});
			},50);
			aLi.forEach(function(item,index){
				item.setAttribute("class",aName[index]);
			});
			bg.style.backgroundImage="url("+document.querySelector(".member .list3").children[0].src+")";	
		}

		function prePic(){
			aName.push(aName[0]);//往数组的第一个位置放置一个元素
			aName.shift();//删除数组的最后一个元素

			aLeft.push(aLeft[0]);//往数组的第一个位置放置一个元素
			aLeft.shift();//删除数组的最后一个元素
			aLi.forEach(function(item,index){
				if(aLeft[index]==mixLeft){
					item.style.transition="";
					item.style.left=aLeft[index];
				}
			});
			setTimeout(function(){
				aLi.forEach(function(item,index){
					item.style.transition="0.5s";
					item.style.left=aLeft[index];
				});
			},50);
			aLi.forEach(function(item,index){
				item.setAttribute("class",aName[index]);
			});
			bg.style.backgroundImage="url("+document.querySelector(".member .list3").children[0].src+")";	
		}

		// 初始化手指坐标点
		var startPoint = 0;
		var startEle = 0;

		//手指按下
		wrap.addEventListener("touchstart",function(e){
			aLi.forEach(function(item){
				item.style.transition="";
			})
			aLeft.forEach(function(item,index){
				bLeft[index]=item;
			})
			//clearInterval(time1);
		    startPoint = e.changedTouches[0].pageX;
		    startEle = e.target.parentNode.offsetLeft;
		});
		//手指滑动
		wrap.addEventListener("touchmove",function(e){
		    var currPoint = e.changedTouches[0].pageX;
		    var disX = currPoint - startPoint;
		    var left = startEle + disX;
		   	aLi.forEach(function(item,index){
		   		item.style.left=parseInt(aLeft[index])-(wrapWidth-aLiWidth)/2+left+'px';
		   	});
		});
		//当手指抬起的时候，判断图片滚动离左右的距离，当
		wrap.addEventListener("touchend",function(e){
		    var left = e.target.parentNode.offsetLeft;

		    if(left<=0){
		    	if((-left+marginAround)<=(aLiWidth/2)){
		    		aLi.forEach(function(item,index){
		    			item.style.transition='0.5s';
		   				item.style.left=bLeft[index];
		   			});
		    	}else{
		    		nextPic();
		   		}
		   	}
		    if(left>0){
		    	if((left-marginAround)<=(aLiWidth/2)){
		        	aLi.forEach(function(item,index){
		        		item.style.transition='0.5s';
		       			item.style.left=bLeft[index];
		       		});
		        }else{
		    		prePic();
		    	}
		    }
		})
	}
}	
</script>
<style type="text/css">
.member {
	width: 100%;
	height: 340px;
	margin: 20px auto;
	overflow: hidden;
	position: relative;
}
.member .bg {
	width: 100%;
	height: 100%;
	background-image: url(../../../static/img/member/pic3.png);
	background-size: cover;
	background-repeat: no-repeat;
	/*transition: 1.5s;   */
	filter: blur(20px);
}
.member .item {
	position: absolute;
	left: 41%;
	top: 28px;
	color: #fff;
	font-size: 18px;
	z-index: 10;
}
.member .item-enter {
	position: absolute;
	left: 32%;
	bottom: 20px;
	font-size: 16px;
	width: 145px;
	height: 35px;
	border: 1px solid #fff;
	border-radius: 20px;
	color: #fff;
	line-height: 35px;
}
.member .item-enter i {
	color: #fff;
	font-size: 18px;
}

.member .imglist {
	width: 100%;
	height: 140px;
	position: absolute;
	left: 0;
	top: -15px;
	margin-top: 80px;
}
.member .imglist ul {
	width: 90%;
	height: 100%;
	position: relative;
	left: 0px;
	top: 0px;
	border-radius: 8px;
}
.member .imglist li {
	width: 100%;
	height: 100%;
}
.member .imglist li img {
	width: 100%;
	height: 100%;	
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
}
.member .imglist li p {
	box-sizing: border-box;
	width: 100%;
	height: 40px;
	text-align: left;
	padding-left: 10px;
	line-height: 40px;
	background-color: #fff;
	color: #000;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
}
</style>