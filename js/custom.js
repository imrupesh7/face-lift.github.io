


var telInput = $(".phone"),
  errorMsg = $("#error-msg"),
  validMsg = $("#valid-msg");

// initialise plugin
telInput.intlTelInput({

  allowExtensions: true,
  formatOnDisplay: true,
  autoFormat: true,
  autoHideDialCode: true,
  autoPlaceholder: true,
  defaultCountry: "in",
  ipinfoToken: "yolo",

  nationalMode: false,
  numberType: "MOBILE",
  //onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
  preferredCountries: ['in', 'sa', 'ae', 'qa', 'om', 'bh', 'kw', 'ma'],
  preventInvalidNumbers: true,
  separateDialCode: true,
  initialCountry: "in",
  geoIpLookup: function (callback) {
    $.get("http://ipinfo.io", function () { }, "jsonp").always(function (resp) {
      var countryCode = (resp && resp.country) ? resp.country : "";
      callback(countryCode);
    });
  },
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.9/js/utils.js"
});

var reset = function () {
  telInput.removeClass("error");
  errorMsg.addClass("hide");
  validMsg.addClass("hide");
};

// on blur: validate
telInput.blur(function () {
  reset();
  if ($.trim(telInput.val())) {
    if (telInput.intlTelInput("isValidNumber")) {
      validMsg.removeClass("hide");
    } else {
      telInput.addClass("error");
      errorMsg.removeClass("hide");
    }
  }
});

// on keyup / change flag: reset
telInput.on("keyup change", reset);




//slider//

$('.whyus-cpa').owlCarousel({
  loop: true,
  rewind: true,
  items: 4,
  margin: 15,
  autoplayTimeout: 500,
  dragEndSpeed: 500,
  smartSpeed: 500,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
      stagePadding: 80,
    },
    600: {
      nav: false
    },
    1000: {
      nav: true,
    }
  }
});


$('.uscpa-jobs-seek-slider').owlCarousel({
  loop: false,
  rewind: true,
  items: 4,
  margin: 30,
  autoplayTimeout: 500,
  dragEndSpeed: 500,
  smartSpeed: 500,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
      margin: 20,
      stagePadding: 50,
    },
    600: {
      nav: false
    },
    1000: {
      nav: false,
    }
  }
});

$('.demo-class-videos-slider').owlCarousel({
  loop: false,
  rewind: true,
  items: 3,
  margin: 30,
  autoplayTimeout: 500,
  dragEndSpeed: 500,
  smartSpeed: 500,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
      margin: 20,
      stagePadding: 40,
    },
    600: {
      nav: false
    },
    1000: {
      nav: false,
    }
  }
});


$('.happy-stdnt-slider').owlCarousel({
  loop: true,
  rewind: true,
  items: 2,
  margin: 15,
  autoplayTimeout: 500,
  dragEndSpeed: 500,
  smartSpeed: 500,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
      stagePadding: 30,
    },
    600: {
      nav: false
    },
    1000: {
      nav: true,
    }
  }
});

$('.demo-clases-slider').owlCarousel({
  loop: true,
  rewind: true,
  items: 2,
  margin: 15,
  autoplayTimeout: 500,
  dragEndSpeed: 500,
  smartSpeed: 500,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
      stagePadding: 30,
    },
    600: {
      nav: false
    },
    1000: {
      nav: true,
    }
  }
});


$('.what-students-aboutus-slider').owlCarousel({
  loop: true,
  rewind: true,
  items: 1,
  margin: 15,
  autoplayTimeout: 500,
  dragEndSpeed: 500,
  smartSpeed: 500,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
      stagePadding: 30,
    },
    600: {
      nav: false
    },
    1000: {
      nav: true,
    }
  }
});



$(".table_container").scroll(function () {
  var topPosition = $(".table_container").scrollTop();
  $("#MVCGridTable_Grid thead tr th").css({ "top": (topPosition) });
});



jQuery('.play i').click(function (event) {
  event.preventDefault();
  //var url = $(this).html(); //this will not work	
  $(".js-video").append('<iframe width="100%" height="490" src="https://www.youtube.com/embed/Vs9LLdjZPPw?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
  $(this).hide();
  $('.video-poster').hide();
});


$(".arrows").click(function () {
  $(".how-edumont-better .table_container").css({
    "height": "auto",
  })

});



// var moveSlider = false;
// $(document).ready(function(){
//     $(".ba-Slider").each(function(i){
//         $(this).children(".slider").mousedown(function(){
//              moveSlider = true;
//             $(this).parent().children("#before").removeClass("ease");
//             $(this).removeClass("ease");
//         });
//         $(this).children(".slider").mouseup(function(){
//             moveSlider = false;
//             $(this).parent().children("#before").addClass("ease");
//             $(this).addClass("ease");
//             var minmax = $(this).parent().width() / 8;
//             if($(this).parent().children("#before").width() > $(this).parent().width() - minmax){
//                 $(this).parent().children("#before").width("100%");
//                 var sOffset = $(this).parent().width() - 16.5;
//                 $(this).css("left", sOffset);
//             }else if($(this).parent().children("#before").width() < minmax){
//                 $(this).parent().children("#before").width(0);
//                 var sOffset = -16.5;
//                 $(this).css("left", sOffset);
//              }
            
//         });
        
//         $(this).mouseup(function(){
//             moveSlider = false;
//             $(this).children("#before").addClass("ease");
//             $(this).children(".slider").addClass("ease");
//             var minmax = $(this).width() / 8;
//             if($(this).children("#before").width() > $(this).width() - minmax){
//                 $(this).children("#before").width("100%");
//                 var sOffset = $(this).width() - 16.5;
//                 $(this).children(".slider").css("left", sOffset);
//             }else if($(this).children("#before").width() < minmax){
//                 $(this).children("#before").width(0);
//                 var sOffset = -16.5;
//                 $(this).children(".slider").css("left", sOffset);
//              }
            
            
//         });
//         $(this).mousemove(function(e){
//             if(moveSlider == true){
//                 var pOffset = $(this).offset(); 
//                 var mouseX = e.pageX - pOffset.left;
//                 $(this).children("#before").width(mouseX - 0.5);
//                 var sOffset = mouseX - 16.5;
//                 $(this).children(".slider").css("left", sOffset);
//             }
            
//         });
//     });
// });


$('.bfre-aftr-gyncmsta-slider').owlCarousel({
  center: true,
    items:3,
    autoplay:true,
    autoplayHoverPause: true,
     autoplayTimeout:5000,
    loop:true,
    margin:35,
  responsive: {
    0: {
    items:1,
    },
    600: {
      items:2
    },
    1000: {
      items:3,
      dots: false,
    
    }
  },
});


