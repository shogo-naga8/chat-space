$("#new_message").on('submit', function(e) {
  e.preventDefault();
  var formData = new FormData(this);
  var url = $(this).attr('action');
$.ajax({
  url: url,
  type: "POST",
  data: formData,
  dataType: 'json',
  processData: false,
  contentType: false
  })
})







  // $(function(){
  //   $('.form__submit').on('click', function(e){
  //     console.log("aaaaaaaa");
  //     e.preventDefault()
  //   })
  // })