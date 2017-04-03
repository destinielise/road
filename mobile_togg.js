$(document).ready(function() {
    $('.toggleElements > .first').on("click", function() {
        deactivatePaths();
        $('.first').removeClass('show_elem').addClass('hide_elem');
        $('.second').removeClass('show_elem');
        $(this).next().addClass('show_elem');
    });
    
    $('.toggleElements > .second').on('click', function() {
        $(this).removeClass('show_elem');
        $('.first').removeClass('hide_elem').addClass('show_elem');
    });
});