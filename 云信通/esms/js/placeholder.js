$(function(){
	if( !('placeholder' in document.createElement('input')) ){  
   
    $('input[placeholder],textarea[placeholder]').each(function(){   
      var that = $(this),   
      text= that.attr('placeholder'); 	  
      if(that.val()===""){   
        that.val(text).css("color","#b1a7a7");   
      }   
      that.focus(function(){   
        if(that.val()===text){   
          that.val("").css("color","#000");   
        }   
      })   
      that.blur(function(){   
        if(that.val()===""){   
          that.val(text).css("color","#b1a7a7");   
        }   
      })   
     that.closest('form').submit(function(){   
        if(that.val() === text){   
          that.val('');   
        }   
      });   
    });   
  }
})