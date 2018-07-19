<template>
	<div class="banner">
		<div class="bgc">
		<div class="imglist">
			<ul class="box">
				<li class="list1"><img src="../../../static/img/banner/pic1.png" alt=""></li>
				<li class="list2"><img src="../../../static/img/banner/pic2.png" alt=""></li>
				<li class="list3"><img src="../../../static/img/banner/pic3.png" alt=""></li>
				<li class="list4"><img src="../../../static/img/banner/pic4.png" alt=""></li>
				<li class="list5"><img src="../../../static/img/banner/pic5.png" alt=""></li>
				<li class="list6"><img src="../../../static/img/banner/pic6.png" alt=""></li>
				<li class="list7"><img src="../../../static/img/banner/pic7.png" alt=""></li>
				<li class="list8"><img src="../../../static/img/banner/pic8.png" alt=""></li>
			</ul>
		</div>
		<div class="linelist">
			<a href=""></a>
			<a href=""></a>
			<a href=""></a>
			<a href=""></a>
			<a href=""></a>
			<a href=""></a>
			<a href=""></a>
			<a href=""></a>
		</div>
		</div>
	</div>
</template>
<script type="text/javascript">
export default {
	name:'banner',
	data(){
		return {
			banner_timer:'' //定时器
		}
	},
	mounted:function(){
		var aLi=document.querySelectorAll(".banner li");
		var aLine=document.querySelectorAll(".banner a");
		var wrap=document.querySelector(".banner .imglist");
		var box=document.querySelector(".banner .box");
		var aLeft=[]; //存放所有li的偏移量
		var bLeft=[]; //临时所有li的偏移量
		var index=0; //一开始第几个按钮变颜色
		var mixLeft,maxLeft; //偏移量最小最大值

		var wrapWidth = wrap.offsetWidth; //盒子宽
		var aLiWidth = box.offsetWidth; //ul以及li宽
		var marginAround=10; //图片之间的边距

		aLi.forEach(function(item,index){
			item.style.position='absolute';
			item.style.top='0px';
			item.style.left=(wrapWidth-aLiWidth)/2-(marginAround+aLiWidth)*2+(index)*(marginAround+aLiWidth)+'px';
			aLeft.push(item.style.left);
		});
		mixLeft=aLeft[0];
		maxLeft=aLeft[aLeft.length-1];  

		function nextPic(){
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
			
			index++;
			if(index>aLi.length-1){
				index=0
			}
			lineColor();
		}

		function prePic(){
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
			index--;
			if(index<0){
				index=aLi.length-1;
			}
			lineColor();
		}

		function lineColor(){
			for(var item of aLine){
				item.style.backgroundColor="#ccc";
			}
			aLine[index].style.backgroundColor="#D43C33";
		}

		lineColor();

		this.banner_timer=setInterval(function(){
			nextPic();	
		},6000);

		// 初始化手指坐标点
		var startPoint = 0;
		var startEle = 0;

		//手指按下
		wrap.addEventListener("touchstart",function(e){
			clearInterval(this.banner_timer);
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
		    this.banner_timer=setInterval(function(){
				nextPic();	
			},6000);
		})
	}
}
	
</script>
<style type="text/css">
.banner {
	width: 100%;
	height: 170px;
	margin-top: 76px;
	overflow: hidden;
}
.banner .bgc {
	width: 100%;
	height: 90px;
	background-color: #D43C33;
}
.banner .imglist {
	position: relative;
	width: 100%;
	height: 150px;
	/*overflow: hidden;*/
}
.banner .imglist ul {
	width: 98%;
	height: 100%;
	position: relative;
	left: 0px;
	top: 0px;
}
.banner .imglist li {
	width: 100%;
	height: 100%;
	border-radius: 5px;
}
.banner .imglist li img {
	width: 100%;
	height: 100%;	
	border-radius: 5px;
}
.banner .linelist {
	position: relative;
	width: 100%;
	height: 31px;
	text-align: center;
	margin-top: -26px;
}
.banner .linelist a {
	display: inline-block;
	width: 6px;
	height: 6px;
	border-radius: 3px;
	background-color: #ccc;
}
</style>