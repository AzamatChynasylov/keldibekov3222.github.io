$(window).on("load", function() {
	if($("#site").width()>991){
		new WOW().init();
	};	
});
$(document).ready(function(){
	if($("#site").width()>991){
		$('.parallax_top').parallax({
			limitY:0
		});
		$('.parallax_serv').parallax({

		});
		$('.parallax_steps').parallax({

		});
	};
	$('.navbar-nav a[href^="#"], a.logo').on('click',function(){
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop: $(target).offset().top - 100}, 800);
		return false;
	});	
	$('.nav-tabs a').on('click', function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})	
	$('.top__navbar a[href^="#"]').on('click',function(){
		var target = $(this).attr('href');
		$('html, body').animate({scrollTop: $(target).offset().top - 50}, 800);
		return false;
	});	
	$('.cases_list .cases_link').on('click', function(){
		$('.cases_link').parent('li').removeClass('active');
		$('.cases_link').removeClass('active');
		$(this).parent('li').addClass('active');
		if($(window).width() < 992) {
			var activCase = $(this).parents('.cases_block').find('.case_case .tab-pane.active');
			$('html, body').animate({scrollTop: $(activCase).offset().top - 50}, 800);
		}
	});
	$('.cases_list .cases_header_link').on('click', function(){
		$('.cases_link').parent('li').removeClass('active');
		var firstLi = $(this).parents('.cases_list').find('.collapse ul > li:first-child');
		firstLi.addClass('active');
		var slideNumb = firstLi.find('a').attr('href');
		$('.case_case .tab-pane').removeClass('show active');
		$(slideNumb).tab('show');
	});
	/*$('#casesAccord').on('shown.bs.collapse', function () {
		$('.cases_list .collapse.show').css({'max-height': '150px'});
	})*/		

	$("input[type='tel']").inputmask({
		alias: "phonemy",
    });	
	$("#modal_freeConsultPhone").validate({
		rules: {
			tel: "required",
			name: "required"
		}
	});
	$("#modal_backCall").validate({
		rules: {
			tel: "required",
			name: "required"
		}
	});
	$("#modal_freeConsult").validate({
		rules: {
			tel: "required",
			name: "required",
			text: "required"
		}
	});
	$("#help").validate({
		rules: {
			tel: "required",
			name: "required"
		}
	});
	$("#consultation").validate({
		rules: {
			tel: "required",
			name: "required"
		}
	});
	function form_send(form){
		if(form.find("input[type='tel']").inputmask("getmetadata")["cd"] == "no" || !form.find("input[type='tel']").inputmask("isComplete")){
			form.find("input[type='tel']").val("");	
		}
		if(form.valid()){
 	  		var msg  = form.serialize();
        	$.ajax({
          		type: 'POST',
          		url: '/wp-content/themes/uristlider/include/mail.php',
          		data: msg,
          		success: function(data) {
					console.log(msg);
					form.parents('.modal').modal('hide');
					setTimeout(function() {$("#thanksModal").modal('show');}, 350);
          		},
          		error:  function(xhr, str){
	    			alert('Возникла ошибка: ' + xhr.responseCode);
          		}
        	});
		}
	}
	$("[type='submit']").on('click', function(){
		form_send($(this).parents("form"));
		return false;
	});

});