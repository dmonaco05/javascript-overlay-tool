// THIS FUNCTION ALLOWS YOU TO OVERLAY AN IMAGE OF YOUR SITE DESIGN TO HELP LAYOUTS
// DONT FORGET TO REMOVE THE FUNCTION WHEN YOU ARE DONE OTHERWISE THE TRIGGER IN THE CORNER WILL ALWAYS BE THERE
function overlay(image, x, y){
    $('body').prepend('<div class="bg_overlay" style="display:none; position:absolute; top:0; bottom:0; left:0; right:0; z-index:9998; background:url('+image+') no-repeat '+x+' '+y+'; opacity:.5; height:5000px"></div><a href="#" class="trigger" style="position:fixed; z-index:9999; display:block; text-indent:-9999px; width:50px; height:20px; background:#000;">Trigger</a>');
    $('a.trigger').click(function(){
        if($('.bg_overlay').hasClass('showing')===true){
            $('.bg_overlay').removeClass('showing').css('display', 'none');
        }else{
            $('.bg_overlay').addClass('showing').css('display', 'block');
        }
        return false;
    });
}

// REPLACE INSERT FILENAME HERE WITH PATH TO FILE FOLLOWED BY THE X AXIS THEN THE Y AXIS VALUES
$(function(){
   overlay('INSERT FILENAME HERE','50%','0px');
};
