 var link = $('.modal-link'),
         popup = $('.popup'),
         close = $('.popup-close'),
         overley = $('.popup-overlay');
     link.click(function(){
        overley.fadeIn();
        popup.fadeIn();
     });
     close.click(function(){
      overley.fadeOut();
      popup.fadeOut();
     });
     overley.click(function(){
      overley.fadeOut();
      popup.fadeOut();
     });