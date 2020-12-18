$(document).ready(function(){
  if (
    window.location.hash == '#introduction' ||
    window.location.hash == '#terms' ||
    window.location.hash == '#thx' ||
    window.location.hash == '#service'
    ) {
    pos = window.location.hash;
  } else {
    pos = "#introduction";
  }
  $(".tab").hide();
  $(pos).show();
  $("#menu ul li a").click(function(){
    if (pos!=$(this).attr("href")){
      $(pos).hide();
      $($(this).attr("href")).show();
      pos=$(this).attr("href");
      window.location.hash=pos;
    }
    return false;
  });
});
