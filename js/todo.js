$(document).ready(function () {
	$('.hdrinput').focus(function(){
			$(this).keyup(function(event){
						if(event.keyCode==13){
							var val=$('.hdrinput').val();
							if(val){
								addTodos();//添加新项目
								$('.hdrinput').val('');//
								addMouseEvent();
								delTodos();
								todoChecked();
								
							}
						}
			})
	});
	var Linum = 0;//统计添加的item
	var Checked = 0;//统计选中的item
	//添加新项目，如果是第一次添加，则footer栏也一并添加
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
		var $newLi = $("<li><input class='chkbox' type='checkbox' value='unchecked'></li>");
		var $newSpan = $("<span class='content'></span>");
		var	$newimg = $("<img class='del' src='images/del.png'>")
		$newSpan.html($('.hdrinput').val());
		$('.itemList').append($newLi);
		$newSpan.appendTo($newLi);
		$newimg.appendTo($newLi);
		Linum++;	
		changeItemStatus();
	}
	//添加li的鼠标移动事件
	function addMouseEvent() {
		$('li').each(function(index) {
			$(this).mouseover(function () {
				$(this).children('img').addClass('del1');
			})
			$(this).mouseout(function () {
				$(this).children('img').removeClass('del1');
			})
		});
	}
	//删除项目。
	function delTodos() {
		$('.del').unbind('click').click(function() { //在对新的‘.del’集合绑定click事件前，先清除老的’.del‘集合绑定的click事件。
			$(this).parent().remove();
			$(this).parent().next().children('img').addClass('del1');
			//*如果删除的是未完成的项目，itemleft数目减一;如果删除已完成项目，itemleft不变。
			if(!$(this).parent().children('.chkbox').prop('checked')) {
			 	Linum--;
			 	changeItemStatus();
			}else
			{
				changeItemStatus();
			}
			
			
		});
	}
	//*判断项目是否被选中
	function todoChecked() {		
			$('.chkbox').unbind('click').click(function(){
				if ($(this).prop('checked')) {
					$(this).next().css({'text-decoration':'line-through','color':'#ccc'});
					$(this).prop('value','checked');
					Checked++;
					console.log(Checked);
					changeItemStatus();
					$('#clear').addClass('clear1');//显示Clear completed按钮
					showActive();
					showAll();
					showCompleted();
					clearCompleted();
				} else {
					$(this).next().removeAttr('style');	
					$(this).prop('value','unchecked');
					Checked--;
					console.log(Checked);
					changeItemStatus();
					if (Checked==0) {
						$('#clear').removeClass('clear1');//隐藏Clear completed按钮
					}
					showActive();
					showAll();
					showCompleted();
					clearCompleted();
				}
			})
			
		}
	//*显示未完成的项目个数
	function changeItemStatus() {
			$('#unchecked').html(Linum - Checked);
		} 
	//显示所有未完成的项目。用checkbox的value使用进行筛选
	function showActive() {
		$('#active').click(function () {
			$(".chkbox[value='checked']").parent().addClass('lihidden');
			$(".chkbox[value='unchecked']").parent().removeClass('lihidden');
		})
		}
	//显示所有项目
	function showAll() {
		$('#all').click(function () {
			$(".chkbox[value='checked']").parent().removeClass('lihidden');
			$(".chkbox[value='unchecked']").parent().removeClass('lihidden');
		})
		}
	//显示所有完成的项目
	function showCompleted() {
		$('#completed').click(function () {
			$(".chkbox[value='unchecked']").parent().addClass('lihidden');
			$(".chkbox[value='checked']").parent().removeClass('lihidden');
		})
		}	
	//删除所有已完成的项目
	function clearCompleted() {
		$('.clear').click(function () {
			$(".chkbox[value='checked']").parent().remove();
			$(".chkbox[value='checked']").prop('value',unchecked);

		})
		}



})































