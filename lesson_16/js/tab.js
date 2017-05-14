var tab = $('.tab-c');
tab.click(function(){
	console.log('Клик по табу');
var target = $(this).attr('data-target');
	console.log('Закладка' + target);
$('.tab-c-content').hide();
$('.'+target).show();

});