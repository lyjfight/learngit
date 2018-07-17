(function (Vue) {
	'use strict';
	//自定义指令，自动获取焦点
	Vue.directive('focus',{
		//当被绑定的元素插入到DOM中执行
		inserted:function(el){
			//聚焦元素
			//console.log(el);
			el.focus();
		}
	});

	var res=new Vue({
		el:"#todoapp",
		data:{
			todos:[
			{
				id:1,
				title:"预习",
				completed:false
			},
			{
				id:2,
				title:"睡觉",
				completed:true
			},
			{
				id:3,
				title:"LOL",
				completed:false
			}
			],
			currentItem:null,
			filterState:"all"
		},
		directives:{
			'editing-focus':{
				update:function(el,binding){
					if(binding.value){
						//console.log("123");
						//el.parentElement.nextElementSibling.focus();
						el.focus();
					}			
				}
			}
		},
		computed:{
			leftNum:function(){
				return	this.todos.filter(item=>!item.completed).length;
			},
			filterTodos:function(){
				if(this.filterState=="all"){
					return	this.todos;
				}else if(this.filterState=="active"){
					return 	this.todos.filter(item=>!item.completed);
				}else {
					return	this.todos.filter(item=>item.completed);
				}
			},
			completedAll:function(){
				//var count=0;
				return this.todos.every(item=>item.completed
					/*if(item.completed){
						count++;
					}*/		
				);
				/*if(this.todos.length==count){
					return true;
				}else{
					return false;
				}*/
			}
		},
		methods:{
			//添加任务
			addTodo(event){
				var id=this.todos.length+1;
				var title=event.target.value.trim();//表示去掉空格的字符串
				if(title==""){
					return;
				}
				// if(event.keyCode==13){
				this.todos.push({
					id,
					title,
					completed:false
				});
				event.target.value="";
				// }
			},
			//切换所有完成/未完成
			toggleAll(event){
				var completed=event.target.checked;		
				this.todos.forEach(item=>item.completed=completed)
			},
			//删除单个任务
			removeTodo(index,$event){
				//console.log($event);
				this.todos.splice(index,1);
			},
			//删除所有已完成的任务
			removeCompleted(){
				/*删除的时候会导致索引的错位
				this.todos.forEach(function(item,index){
					if(item.completed){
						this.todos.splice(index,1);
					}
				}.bind(this));*/

				/* 可行的方案
				for(let i=0;i<this.todos.length;i++){
					if(this.todos[i].completed){
						this.todos.splice(i,1);
						i--;
					}
				}*/
				this.todos=this.todos.filter(item=>!item.completed)
			},
			/*leftNum(){
				return this.todos.filter(item=>!item.completed).length;
			}*/

			//保存编辑 按回车或失去焦点
			saveEdit(item,index,event){
				//1拿到文本框的值
				var editText=event.target.value.trim();
				//2对文本框值进行非空校验
				if(!editText.length){
					//从todos数组中删除该元素
					return this.todos.splice(index,1);
				}
				//加入文本框值不是空
				item.title=editText;
				//3去除editing样式
				this.currentItem=null;
			}
		}
	});
	window.onhashchange=function(){
		var hash=window.location.hash.substr(2) || "all";
		res.filterState=hash;
	}
	window.onhashchange();
})(Vue);