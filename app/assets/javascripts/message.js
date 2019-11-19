$(function(){
  $('#newcomment').on('submit', function(e){
    e.preventDefault();
    var formdata = new FormData(this);
  })
})