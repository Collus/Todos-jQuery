$(document).ready(function () {
	$('.hdrinput').focus(function(){
			$(this).keyup(function(event){
						if(event.keyCode==13){
							var val=$('.hdrinput').val();
							if(val){
								addTodos();
								//$Lis=$('li');//将新添加的li复制给数组Lis；
								addMouseEvent();
								$('.hdrinput').val('');
							}
						}
			})
	})
	//添加li的鼠标事件
	function addMouseEvent() {
		$('li').each(function(index, el) {
			$('li').mouseover(function() {				
				console.log('mouseover success');
				var $img = $('li');
				console.log($img);
			});
			$('li').mouseout(function() {
				console.log('mouseout success');				
			});
		});
	}
	//添加新项目，并判断是否为第一次添加
	var Linum = 0;
	function addTodos() {
		if(Linum){
			addTodoBody();
			console.log(Linum);
		}else{
			addTodoBody()
			$('#footer').addClass('footer1');
			console.log(Linum);
		}
	}
	//*添加新的项目
	function addTodoBody() {
		var $newLi = $("<li><input class='chkbox' type='checkbox'></li>");
		var $newSpan = $("<span></span>");
		var	$newimg = $("<img class='del' src='images/del.png'>")
		$newSpan.html($('.hdrinput').val());
		$('.content').append($newLi);
		$newSpan.appendTo($newLi);
		$newimg.appendTo($newLi);
		Linum++;	
	}


})































