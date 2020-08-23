$(document).on('mouseover', '.container .column', function(){
    $(this).addClass('active').siblings().removeClass('active');
})

const audio = document.querySelector('audio');
document.addEventListener("click", function(event) { 
    audio.play();
  });
