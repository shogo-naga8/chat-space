// $(function(){
//   $("#user-search-field").on("keyup", function() {
//     var input = $("#user-search-field").val();

//     $.ajax({
//       type: 'GET',
//       url: '/users',
//       data: { keyword: input },
//       dataType: 'json'
//     })
//     .done(function(users) {
//       console.log("成功です");
//     })
//     .fail(function() {
//       console.log("失敗です");
//     });
//   });
// });

$(function() {
  $("#group_name").on("keyup", function() {
    let input = $("#group_name").val();
    console.log(input);
  });
});