$(document).ready(function() {
  $(".toggleElements").each(function() {
    var parent = $(this);
    $(this).find(".first").click(function() {
      $(this).fadeToggle();
      $(parent).find(".second").fadeToggle();
    });
    $(this).find(".second").click(function() {
      $(this).fadeToggle();
      $(parent).find(".first").fadeToggle();
    });
  });
});