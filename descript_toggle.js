$(document).ready(function(){
    $("#demand_button").click(function(){
        $("#enterprise_description").hide();
        $("#demand_description").fadeToggle();
        $(".product_desc.active").removeClass('active');
        $("#demand_description").addClass('active');
    });
    
    $("#enterprise_button").click(function(){
        $("#demand_description").hide();
        $("#enterprise_description").fadeToggle();
        $(".product_desc.active").removeClass('active');
        $("#enterprise_description").addClass('active');
    });
});