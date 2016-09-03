$(document).ready(function () {
	$('.hdrinput').focus(function(){
			$(this).keyup(function(event){
						if(event.keyCode==13){
							var val=$('.hdrinput').val();
							if(val){
								addTodos();
								$('.hdrinput').val('');
								addMouseEvent();
								delTodos();
								todoChecked();
							}
						}
			})
	});
	//添加新项目，并判断是否为第一次添加
	var Linum = 0;//统计添加的item
	var Checked = 0;//统计选中的item
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
		var $newSpan = $("<span class=''></span>");
		var	$newimg = $("<img class='del' src='images/del.png'>")
		$newSpan.html($('.hdrinput').val());
		$('.itemList').append($newLi);
		$newSpan.appendTo($newLi);
		$newimg.appendTo($newLi);
		Linum++;	
	}
	//添加li的鼠标移动事件，以及元素删除
	function addMouseEvent() {
		$('li').each(function(index) {
			$(this).mouseover(function () {
				$(this).children('img').addClass('del1');
				// $(this).children('img').click(function () {
				// 	$(this).parent().remove();
				// });
			})
			$(this).mouseout(function () {
				$(this).children('img').removeClass('del1');
			})
		});
	}
	//删除项目。
	// function delTodos() {
	// 	$('li').each(function (index) {
	// 		$(this).children('img').click(function () {
	// 			Linum--;console.log(Linum);
	// 			$(this).parent().remove();
	// 		})
	// 	})
	// }
	function delTodos() {
		$('.del').click(function() {
			$(this).parent().remove();
			console.log(Linum);
		});
	}
	//*判断项目是否被选中
	function todoChecked() {		
			console.log('chkbox: '+$('.chkbox').size());
			$('.chkbox').click(function(){
				if ($(this).prop('checked')) {
					$(this).next().css({'text-decoration':'line-through','color':'#ccc'});
					Checked = $(".chkbox[checked='true']").size();
					console.log(Checked);
				} else {
					$(this).next().removeAttr('style');	
				}
			})
			
		} 
	//*统计Checked的条目数
	// function countChecked() {
	// 	Checked = 0;
	// 	Checked = $(".chkbox[checked=true]").size();
	// 	console.log(Checked);
	// }


})































