$(document).ready(function () {
	if(localStorage){
		var Linum=0;
		$(function(){
			if(!Linum){
				var $newLi = $("<li><input class='chkbox' type='checkbox'><label for='chkbox'></label></li>");
				Linum++;
				var val = $(".hdrinput").val();
				$('label').html(val);
				$('.content').append($newLi);
				$('.footer').addClass('footer1');
			}
			else{
				Linum++;
				$newLi.val() = $(".hdrinput").val();
				$('.content').append($newLi);
			}
		});
	}
});