var tab = $('.tab');
tab.click(function(){
	console.log('Клик по табу');
var target = $(this).attr('data-target');
	console.log('Закладка' + target);
$('.tab-content').hide();
$('.'+target).show();

});