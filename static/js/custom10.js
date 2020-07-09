$.notify({ 
    // options
    icon: 'glyphicon glyphicon-ok',
    title: 'SJVA',
    message: '',
    url: '',
    target: '_blank'
},{
    // settings
    element: 'body',
    position: null,
    type: "info",
    allow_dismiss: true,
    newest_on_top: false,
    showProgressbar: false,
    placement: {
        from: "top",
        align: "right"
    },
    offset: 20,
    spacing: 10,
    z_index: 1031,
    delay: 10000,
    timer: 1000,
    url_target: '_blank',
    mouse_over: null,
    animate: {
        enter: 'animated fadeInDown',
        exit: 'animated fadeOutUp'
    },
    onShow: null,
    onShown: null,
    onClose: null,
    onClosed: null,
    icon_type: 'class',
    template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
        '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
        '<span data-notify="icon"></span> ' +
        '<span data-notify="title" style="word-break:break-all;">{1}</span> ' +
        '<span data-notify="message" style="word-break:break-all;">{2}</span>' +
        '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
        '</div>' +
        '<a href="{3}" target="{4}" data-notify="url"></a>' +
    '</div>' 
  });

function duration_str(duration) {
    duration = duration / 100;
    var minutes = parseInt(duration / 60);
    var hour = parseInt(minutes / 60);
    var min = parseInt(minutes % 60);
    var sec = parseInt((duration/60 - parseInt(duration/60)) * 60);
    return pad(hour, 2) + ':' + pad(min, 2) + ':' + pad(sec,2);

}
// 자리맞춤
function pad(n, width) {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}

  // jquery extend function
// post로 요청하면서 리다이렉트
// 푹 자동에서 푹 기본 검색할때 사용
$.extend(
{
    redirectPost: function(location, args)
    {
        var form = '';
        $.each( args, function( key, value ) {
            //console.log(key);
            //console.log(value);
            value = value.split('"').join('\"')
            form += '<input type="hidden" name="'+key+'" value="'+value+'">';
        });
        $('<form action="' + location + '" method="POST">' + form + '</form>').appendTo($(document.body)).submit();
    }
});

function get_formdata(form_id) {
  // on, off 일수도 있으니 모두 True, False로 통일하고
  // 밑에서는 False인 경우 값이 추가되지 않으니.. 수동으로 넣어줌
  var checkboxs = $(form_id + ' input[type=checkbox]');
  //for (var i in checkboxs) {
  for (var i =0 ; i < checkboxs.length; i++) {
    if ( $(checkboxs[i]).is(':checked') ) {
      $(checkboxs[i]).val('True');
    } else {
      $(checkboxs[i]).val('False');
    }
  }
  var formData = $(form_id).serialize();
  $.each($(form_id + ' input[type=checkbox]')
    .filter(function(idx) {
      return $(this).prop('checked') === false 
    }), 
    function(idx, el) { 
      var emptyVal = "False"; 
      formData += '&' + $(el).attr('name') + '=' + emptyVal; 
    }
  );
  formData = formData.replace("&global_scheduler=True", "")
  formData = formData.replace("&global_scheduler=False", "")
  formData = formData.replace("global_scheduler=True&", "")
  formData = formData.replace("global_scheduler=False&", "")
  return formData;
}
