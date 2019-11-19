$(function() {
  
  function buildHTML(message){
    var content = message.content ? `${ message.content }` : "";
    var img = message.image ? `<img src= ${ message.image }>` : "";
  	  var html =
  	    `<div class="message-header" data-message-id= "${message.id}">
          <div class="message-data__name">
            <div class="message-data__name__d">
              ${message.user_name}
            </div>
            <div class="message-data__name__message">
              ${message.time}
            </div>
          </div>
          <div class="message__text">
            <p class="message__text__content">
              ${content}
            </p>
          </div>
          ${img}
        </div>`
    return html; 
  }
  $('#new_message').on('submit',function(e) {
    e.preventDefault()
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
	  .done(function(message){
      var html = buildHTML(message);
	  	$('.message').append(html);
	  	$('#new_message')[0].reset('');
      $(".form__submit").prop('disabled', false);
      $('.message').animate({ scrollTop: $('.message')[0].scrollHeight});
	  })
	  .fail(function(){
      alert('メッセージ送信に失敗しました');
	  })
  })
}); 