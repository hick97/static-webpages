( function ( $ ) {
    "use strict";

	$(function() {	
		showAlert();
		closeAlert();
		tabPanel();
		statusCheckbox();
		checkAll();
		slideToggleBrand();
	});

	function statusCheckbox() {
	  // If the checkbox is checked, disabled inputs
	  $('input[type="checkbox"]').on("click", function(){			
	  	if ($('#unlimited-projects').is(':checked')){
	    	$('.personal-info input[name="number-projects"]').prop("disabled", true).prop("value", "");
	  	} else {
	    	$('.personal-info input[name="number-projects"]').prop("disabled", false).prop("value", "0");
	  	}
	  	if ($('#unlimited-post').is(':checked')){
	    	$('.personal-info input[name="number-post"]').prop("disabled", true).prop("value", "");
	  	} else {
	    	$('.personal-info input[name="number-post"]').prop("disabled", false).prop("value", "0");
	  	}
	  	if ($('#unlimited-trackeds').is(':checked')){
	    	$('.personal-info input[name="number-trackeds"]').prop("disabled", true).prop("value", "");
	  	} else {
	    	$('.personal-info input[name="number-trackeds"]').prop("disabled", false).prop("value", "0");
	  	}
	  	if ($('#unlimited-crm').is(':checked')){
	    	$('.personal-info input[name="number-crm"]').prop("disabled", true).prop("value", "");
	  	} else {
	    	$('.personal-info input[name="number-crm"]').prop("disabled", false).prop("value", "0");
	  	}
	  	if ($('#unlimited-crawling').is(':checked')){
	    	$('.projects-info input[name="number-crawling"]').prop("disabled", true).prop("value", "");
	  	} else {
	    	$('.projects-info input[name="number-crawling"]').prop("disabled", false).prop("value", "0");
	  	}
	  	if ($('#check-extra-post').is(':checked')){
	    	$('.consumption-info input[name="number-extra-post"]').prop("disabled", false).prop("value", "0");
	  	} else {
	    	$('.consumption-info input[name="number-extra-post"]').prop("disabled", true).prop("value", "");
	  	}
	  });
	  
	}
	function checkAll(){
		$('#check-all').on("click", function(){			
			if ($('#check-all').is(':checked')){
		    	$('.personal-info input[type="number"]').prop("disabled", true).prop("value", "");
		    	$('.personal-info input[type="checkbox"]').prop("checked", true);
		  	} else {
		    	$('.personal-info input[type="number"]').prop("disabled", false).prop("value", "0");
		    	$('.personal-info input[type="checkbox"]').prop("checked", false);
		  	}
		});
	}
	function showAlert(){
		$('.btn-search').on("click", function(){			
			$('.trigger-box').css("display", "block");
			$('.TabControl').css("display", "block");
			$('.submit-tab').css("display", "block");
		});
	}
	function closeAlert(){
		$('.close').on("click", function(){			
			$('.trigger-box').css("display", "none");
		});
	}
	function tabPanel(){
		$("#content div:nth-child(1)").show();
      	$(".abas li:first div").addClass("selected");       
      	$(".aba").click(function(){
          $(".aba").removeClass("selected");
          $(this).addClass("selected");
          var indice = $(this).parent().index();
          indice++;
          $("#content div").hide();
          $("#content div:nth-child("+indice+")").show();
      	});
      
     	$(".aba").hover(
          	function(){$(this).addClass("ativa")},
        	function(){$(this).removeClass("ativa")}
    	); 
	}
	function slideToggleBrand(){
		$('.brand-name i').on("click", function(){
			$(this).toggleClass('flip');			
			$('.consumption-info:last-child .part-left').slideToggle();
			$('.consumption-info:last-child .part-right').slideToggle();
		});
	}

})(jQuery);


