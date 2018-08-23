var hosts = [];
var source = $('#hosts-template').html();
var template = Handlebars.compile(source);

$('.send').on('click', function () {
    let url_host = $('.url').val();
$.ajax({
    method: "GET",
    url: url_host, //'https://hunter.serveo.net/message/Ann',
    dataType: "json",
    success: function (data) {
    console.log("get",data);
     hosts.push(data);
    AppendData({"hosts":hosts});
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  });
})

function AppendData(data_array){
    $('.text').empty();
    var newHTML = template(data_array);
    $('.text').append(newHTML);
}

//   $('.sendPost').on('click', function () {
//     let text = $('.message').val();
//     alert(text);
//     $.ajax({
//       method: "POST",
//       url: 'filenew',
//       data: {"text": text},
//       dataType: "json",
//       success: function(data) {
//         console.log("HERE",data.text);
//         $('.data').append("here" + data.text);
//       },
//       error: function(jqXHR, textStatus, errorThrown) {
//         console.log("textstatus",textStatus);
//       }
//     });
//     })
 