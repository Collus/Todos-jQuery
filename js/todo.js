$(document).ready(function () {
	$('.hdrinput').focus(function(){
			$(this).keyup(function(event){
						if(event.keyCode==13){
							var val=$('.hdrinput').val();
							if(val){
								addTodos();
								$('.hdrinput').val('');
								addMouseEvent();
							}
						}
			})

	});
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
		var $newLi = $("<li><input class='chkbox' type='checkbox' ></li>");
		var $newSpan = $("<span></span>");
		var	$newimg = $("<img class='del' src='images/del.png'>")
		$newSpan.html($('.hdrinput').val());
		$('.content').append($newLi);
		$newSpan.appendTo($newLi);
		$newimg.appendTo($newLi);
		Linum++;	
	}

	//添加li的鼠标移动事件，以及元素删除
	function addMouseEvent() {
		$('li').each(function(index) {
			$(this).mouseover(function () {
				$(this).children('img').addClass('del1');
				$(this).children('img').click(function () {
					$(this).parent().remove();
				});
			})
			$(this).mouseout(function () {
				$(this).children('img').removeClass('del1');
			})
		});
	}
	//*判断项目是否被选中
	function todoChecked() {
		$('.chkbox').each(function (index) {
			// if ($(this).children('input').prop('checked')) {

			// 	$(this).children('span').css({'text-decoration':'line-through','color':'#ccc'});
			// }
			if ($(this).prop('checked')) {
				console.log('checked');
				$(this).next().css({'text-decoration':'line-through','color':'#ccc'});
			}
		});		
		} 
	


})































