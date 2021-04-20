$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
        $('.top-bar__sections').toggleClass('sections--active');
	});
});