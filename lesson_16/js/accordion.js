
	$(document).ready(function(){
	var tab = $('.tab-line');
	tab.click(function(){
		var target_ac = $(this).attr('href');
		$('.content_ac').hide();
		$(target_ac).show();
	});
});
