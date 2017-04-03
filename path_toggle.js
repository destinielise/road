$(document).ready(function(){
 $(".product_button").click(function () {
     togglePaths(this);
     return false;
  });

});

function togglePaths(elem){
    if($(elem).hasClass('active')) {
         //deactive buttons
        $(elem).next(".product_path"). fadeOut ('slow')
        $(elem).removeClass ("active")
     } else {
    
    //deactive buttons
     $('.product_button.active').next(".product_path"). fadeOut ('slow')
     $('.product_button.active').removeClass ("active")
    
     
       $(elem).addClass ('active')
       $(elem).next(".product_path").fadeIn ("slow");
         
     }
}

function deactivatePaths(){
    console.log('here');
    $(".product_path").hide();
    $(".product_button.active").removeClass("active");
    $(".product_desc.active").hide();
    $(".product_desc.active").removeClass("active");
}