// $(document).ready(function () {
// 	if(localStorage){
// 		var Linum=0;
// 		$(function(){
// 			if(!Linum){
// 				var $newLi = $("<li><input class='chkbox' type='checkbox'><label for='chkbox'></label></li>");
// 				Linum++;
// 				var val = $(".hdrinput").val();
// 				$('label').html(val);
// 				$('.content').append($newLi);
// 				$('.footer').addClass('footer1');
// 			}
// 			else{
// 				Linum++;
// 				$newLi.val() = $(".hdrinput").val();
// 				$('.content').append($newLi);
// 			}
// 		});
// 	}
// });

// var Linum=0;

// function Todos(argument) {
// 	// body...
// }
// //添加一个新的item
// Todos.prototype.addTodos = function () {
// 	$('.hdrinput').keyup(event)	{
// 		if(event.keyCode==13){

// 				Linum++;
// 			}
// 		}
// 	}
// }

$(document).ready(function () {
	$('.hdrinput').focus(function(){
			$(this).keyup(function(event){
						if(event.keyCode==13){
							var val=$('.hdrinput').val();
							if(val){
								console.log(val); 
								addTodos();
								$('.hdrinput').val('');
							}
						}
			})

	})
	// $('li').mouseover(function () {
	// 	console.log('mouseover');
	// 	$delimg = $("this:last-child");
	// 	$dekimg.addClass('.del1')
	// 	deleteTodos(this);
	// })


	var Linum = 0;
	//添加新项目，并判断是否为第一次添加
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































