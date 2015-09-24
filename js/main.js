$(document).ready(function() {
    

  var navpos = $('.navbar-nav').offset();
    $(window).bind('scroll', function() {
      if ($(window).scrollTop() > navpos.top) {
       $('.navbar-nav').addClass('fixed');
              }
       else {
         $('.navbar-nav').removeClass('fixed');
       }
    });

    /*Zoom in plugun*/

$(document).ready(function(){
                $('.my-zoom-1').WMZoom();
                $('.my-zoom-2').WMZoom({
                    config : {
                        inner : true
                    }
                });
            });
/*Zoom plugin-closing*/


 $('.differntviews .smallRingImg .view img').mouseover(function(e){
 /*alert($(e.currentTarget).attr('src'));*/
 $('#categorylist #ringImageBlock .wm-zoom-default-img').attr('src', $(e.currentTarget).attr('src'));
$('.wm-zoom-default-img').attr('data-hight-src', $(e.currentTarget).attr('src'));
$('.wm-zoom-hight-img').attr('data-hight-src', $(e.currentTarget).attr('src'));

});

$('#jewmodal .jewmodalbody .childimg img').click(function(e){
$('#jewmodal .jewmodalbody .parentImageBlock').attr('src', $(e.currentTarget).attr('src'));
});

$("#avlSizes .sizGuide").click(function(){
$("#tooltipMainWrapper1 #tooltipWrapper1").show();
});

$("#tooltipMainWrapper1 #tooltipWrapper1").mouseleave(function(){
$("#tooltipMainWrapper1 #tooltipWrapper1").hide();
});

$("#categorylist .refineSearch .viewmore").mouseover(function(){
$("#categorylist .refineSearch .viewmore").hide();
$("#categorylist #animatedslide").slideDown();
});

$("#categorylist .refineSearch .viewLess").mouseleave(function(){
$("#categorylist .refineSearch .viewmore").show();
$("#categorylist #animatedslide").slideUp(500);
});

$("#categorylist .refineSearch a").mouseover(function(e){
$("#categorylist .refineSearch a .itemSub").hide();
var currentTarget=$(e.currentTarget).attr('id');
$('.'+currentTarget).toggle(); 
});



$(".listItemCommon .views").click(function(e){
var currentTarget=$(this).attr('data-showTarget');
$('.'+currentTarget).toggle();
});


$(".header-bottom .mainmenu li").mouseover(function(e){
var currentTarget=$(e.currentTarget).attr('id');
$(".sub-menu").hide();
$("."+currentTarget).show();
});
$(".header-bottom .mainmenu .sub-menu,.header-bottom .mainmenu li").mouseleave(function() {
$(".sub-menu").hide();    
});

$(".header_top .qucik-order-popup").click(function(){
$("#header .header_top .panel").show('slide', {direction: 'right'}, 1000);
});


$("#header .panel .closeBtn").click(function(){
$("#header .header_top .panel").hide('slide', {direction: 'right'}, 1000);
});

});
$(function() {
    $( "#datepicker" ).datepicker({
      changeMonth: true,
      changeYear: true
    });
  });



function sameAsAbove(){    
      if($('#sameas').is(":checked")) {
            $("#shipping_name").val($("#billing_name").val());
            $("#shipping_Lastname").val($("#billing_lastname").val());
            $("#shipping_address1").val($("#billing_address1").val());
            $("#shipping_address2").val($("#billing_address2").val());
            $("#shipping_landmark").val($("#billing_landmark").val());
            $("#shipping_city").val($("#billing_city").val()); 
            $(".shipping_state").val($(".billing_state").val()); 
            $(".shipping_country").val($(".billing_country").val());
            $("#shipping_email").val($("#billing_email").val()); 
            $("#shipping_phoneno").val($("#billing_phoneno").val()); 
            $("#shipping_extn").val($("#billing_extn").val()); 
            $("#shipping_Zipcode").val($("#billing_Zipcode").val()); 

      }else{
            $("#shipping_name").val('');
            $("#shipping_Lastname").val('');
            $("#shipping_address1").val('');
            $("#shipping_address2").val('');
            $("#shipping_landmark").val('');
            $("#shipping_city").val('');
            $("#shipping_country").val('');
            $("#shipping_email").val('');
            $("#shipping_phoneno").val('');
            $("#shipping_extn").val('');
            $("#shipping_Zipcode").val('');
          }
    }

$(document).ready(function () {
    $('.paypal').hide();
        $('.box').hide();
        $('#billing_address').show();
        $('#selectField').change(function () {
            $('.box').hide();
            $('#'+$(this).val()).show();
           
        });
$("#product_descrption #breadcrumbs a").click(function(e){
$("#product_descrption #breadcrumbs a").removeClass('selectedClass');
$(e.currentTarget).addClass('selectedClass');
});  

$(".payment_page .radio").click(function(e){
$(".container .Creditcard").hide();
$(".container .paypal").hide();
var currentTarget=$(e.currentTarget).attr('data-showTarget');
$(".commonHide").hide();
$(".paypal").hide();
$('.'+currentTarget).show();
}); 


});

   function validate() {
        var state = document.getElementById('iagree');
        if (state.checked) {
            
        } else {
            alert("Please agree terms and conditions to continue checkout");
        }
    }

$(document).ready(function(){ 
$('.carousel').carousel({
    pause:true,
    interval:0
    });

function sliderChange(val){
    document.getElementById('silderstatus').innerHTML=val;
}


$('.SliderRight .thumbnail').hover(function(e) {
    $('.quickview').hide();
    $(e.currentTarget).find('.quickview').show();
    $(e.currentTarget).find('.quickview').fadeIn("slow");
    /* Stuff to do when the mouse enters the element */
},
function(e) {
    $('.quickview').hide();
    
});





$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({
        placement : 'top'
    });
});



$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip({
        placement : 'top'
    });
});

/*js for popup hide and show start here*/
$(".infoimg").click(function(){
$("#tooltipMainWrapper #tooltipWrapper").show();
});

$(".Change").click(function(){
        $(".Edit_payment").show();
 
});

$(".change_details").click(function(){
        $(".change_details1").show();

});


$("#closeIcon").click(function(){
$("#tooltipMainWrapper #tooltipWrapper").hide();
});
/*js for popup hide and show end here*/

});
/*js for popup hide and show Size chart*/
$(".infoimg1").click(function(){
$("#tooltipMainWrapper1 #tooltipWrapper1").show();
});

/*js for popup hide and show end here*/


$(document).ready(function(){
$( "#accordion" ).accordion({
      collapsible: true
    });


$("#expandAll").click(function(event) {
    $('#accordion .ui-accordion-header:not(.ui-state-active)').next().slideToggle();

    $(this).text($(this).text() == 'Expand all' ? 'Collapse all' : 'Expand all');
    
    if($(this).text() === "Collapse all"){
        $('.ui-accordion-header').removeClass('ui-corner-all').addClass('ui-accordion-header-active ui-state-active ui-corner-top').attr({'aria-selected':'true','tabindex':'0'});
        $('.ui-accordion-header .ui-icon').removeClass('ui-icon-triangle-1-e').addClass('ui-icon-triangle-1-s');
        $('.ui-accordion-content').addClass('ui-accordion-content-active').attr({'aria-expanded':'true','aria-hidden':'false'}).show();
    }else{
        $('.ui-accordion-header').removeClass('ui-accordion-header-active ui-state-active ui-corner-top').addClass('ui-corner-all').attr({'aria-selected':'false','tabindex':'-1'});
        $('.ui-accordion-header .ui-icon').removeClass('ui-icon-triangle-1-s').addClass('ui-icon-triangle-1-e');
        $('.ui-accordion-content').removeClass('ui-accordion-content-active').attr({'aria-expanded':'false','aria-hidden':'true'}).hide();
    }
    event.stopImmediatePropagation();
    event.preventDefault();
    return false;
});

    
});

 /*$(window).load(function(){
        $('#myModal').modal('show');
    });
*/
/*jQuery(function($){
 $('a.zoom').easyZoom();

});
*/
  
 

 
$(function(){
 
    $(document).on( 'scroll', function(){
 
        if ($(window).scrollTop() > 100) {
            $('.scroll-top-wrapper').addClass('show');
        } else {
            $('.scroll-top-wrapper').removeClass('show');
        }
    });
});

 
$(function(){
 
    $(document).on( 'scroll', function(){
 
        if ($(window).scrollTop() > 100) {
            $('.scroll-top-wrapper').addClass('show');
        } else {
            $('.scroll-top-wrapper').removeClass('show');


        }
    });
 
    $('.scroll-top-wrapper').on('click', scrollToTop);
});
 
function scrollToTop() {
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    element = $('body');
    offset = element.offset();
    offsetTop = offset.top;
    $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}


$(document).ready(function(){
    $(".testing").hide();
    $(".testimg").hover(function(e){
    $(e.currentTarget).find('.testing').show();
    $(e.currentTarget).find('.testing').SliderRight("slow");
});

});
$(document).ready(function(){
    $(".fa-bell").click(function(){
        $("#hd").modal('show');
    });
});


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});



$(document).ready(function(){
$(".add-new-address").click(function(){
$(".myaccount-add-address").show();
$(".address-table").hide();
$(".add-new-address").hide();
$(".address_type").show();
});
});//

$(function() {
    $('.rating-container .star').click(function() {
        $('.rating-container .star').prop('src', 'images/My account/rating.png');
        $(this).prevAll('.star').addBack().prop('src', 'images/My account/rating-fire.png');
    });





var z={};
function tdClicks(){
var x="",y="";
$(".editableTable tr td ").click(function(){
    z=$(this);
    x = $(this).text() || $(this).find("input[type='text']").val();
    if(!x){
        x="";
    }
    $(this).html("<input type='text'  value='"+"' />");
    $(this).unbind("click");
    $(this).find("input[type='text']").bind("blur", function(){
        catchme($(this).val());
        tdClicks();
    });
});
}

tdClicks();
});

$(document).ready(function(){
    $(".fa-question").popover({
        placement : 'right'
    });
    
function blink(selector){
$(selector).fadeOut('slow', function(){
    $(this).fadeIn('slow', function(){
        blink(this);
    });
});
}

blink('.blink');
});
/*$("#accordion > li > span").click(function() {
    $(this).toggleClass("active").next('div').slideToggle(250)
    .closest('li').siblings().find('span').removeClass('active').next('div').slideUp(250);
});*/

