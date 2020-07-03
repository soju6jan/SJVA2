

function m_row_start(padding='10', align='center') {
  var str = '<div class="row" style="padding-top: '+padding+'px; padding-bottom:'+padding+'px; align-items:'+align+';">';
  return str;
}
function m_row_start_hover(padding='10', align='center') {
  var str = '<div class="row my_hover" style="padding-top: '+padding+'px; padding-bottom:'+padding+'px; align-items:'+align+';">';
  return str;
}
function m_row_start_top(padding='10') {
  return m_row_start(padding, 'top');
}
function m_row_start_color(padding='10', align='center', color='') {
  var str = '<div class="row" style="padding-top: '+padding+'px; padding-bottom:'+padding+'px; align-items:'+align+'; background-color:'+color+'">';
  return str;
}
function m_row_start_color2(padding='10', align='center') {
  var str = '<div class="row bg-dark text-white" style="padding-top: '+padding+'px; padding-bottom:'+padding+'px; align-items:'+align+';">';
  return str;
}

function m_row_end() {
  var str = '</div>';
  return str;
}

//border
function m_col(w, h, align='left') {
  var str = '<div class="col-sm-' + w + ' " style="text-align: '+align+'; word-break:break-all;">';
  str += h
  str += '</div>';
  return str
}

function m_col2(w, h, align='left') {
  var str = '<div class="col-sm-' + w + ' " style="padding:5px; margin:0px; text-align: '+align+'; word-break:break-all;">';
  str += h
  str += '</div>';
  return str
}


function m_button_group(h) {
  var str = '<div class="btn-group btn-group-sm flex-wrap mr-2" role="group">';
  str += h
  str += '</div>';
  return str;
}

function m_button(id, text, data) {
  var str = '<button id="'+id+'" name="'+id+'" class="btn btn-sm btn-outline-success" '
  for ( var i in data) {
    str += ' data-' + data[i].key + '="' + data[i].value+ '" '
  }
  str += '>' + text + '</button>';
  return str;
}

function m_hr(margin='5') {
  var str = '<hr style="width: 100%; margin:'+margin+'px;" />';
  return str;
}


function m_hr_black() {
  var str = '<hr style="width: 100%; color: black; height: 2px; background-color:black;" />';
  return str;
}
// 체크박스는 자바로 하면 on/off 스크립트가 안먹힘.


function m_modal(data='EMPTY', title='JSON', json=true) {
  document.getElementById("modal_title").innerHTML = title;
  if (json) {
    data = JSON.stringify(data, null, 2);
  }
  document.getElementById("modal_body").innerHTML = "<pre>"+ data + "</pre>";;
  $("#large_modal").modal();
}

function m_tab_head(name, active) {
  if (active) {
    var str = '<a class="nav-item nav-link active" id="id_'+name+'" data-toggle="tab" href="#'+name+'" role="tab">'+name+'</a>';
  } else {
    var str = '<a class="nav-item nav-link" id="id_'+name+'" data-toggle="tab" href="#'+name+'" role="tab">'+name+'</a>';
  }
  return str;
}

function m_tab_content(name, content, active) {
  if (active) {
    var str = '<div class="tab-pane fade show active" id="'+name+'" role="tabpanel" >';
  } else {
    var str = '<div class="tab-pane fade show" id="'+name+'" role="tabpanel" >';
  }
  str += content;
  str += '</div>'
  return str;
}

function m_progress(id, width, label) {
  var str = '';
  str += '<div class="progress" style="height: 25px;">'
  str += '<div id="'+id+'" class="progress-bar"  style="background-color:yellow;width:'+width+'%"></div>';
  str += '<div id="'+id+'_label" class="justify-content-center d-flex w-100 position-absolute" style="margin-top:2px">'+label+'</div>';
  str += '</div>'
  return str;
}


function m_progress2(id, width, label) {
  var str = '';
  str += '<div class="progress" style="height: 25px;">'
  str += '<div id="'+id+'" class="progress-bar"  style="background-color:yellow;width:'+width+'%"></div>';
  str += '<div id="'+id+'_label" class="justify-content-center d-flex w-100 position-absolute" style="margin:0px; margin-top:2px">'+label+'</div>';
  str += '</div>'
  return str;
}

  
  
function make_page_html(data) {
  str = ' \
    <div class="d-inline-block"></div> \
      <div class="row"> \
        <div class="col-sm-12"> \
          <div class="btn-toolbar" style="justify-content: center;" role="toolbar" aria-label="Toolbar with button groups" > \
            <div class="btn-group btn-group-sm mr-2" role="group" aria-label="First group">'
  if (data.prev_page) {
    str += '<button id="page" data-page="' + (data.start_page-1) + '" type="button" class="btn btn-secondary">&laquo;</button>'
  }

  for (var i = data.start_page ; i <= data.last_page ; i++) {
    str += '<button id="page" data-page="' + i +'" type="button" class="btn btn-secondary" ';
    if (i == data.current_page) {
      str += 'disabled';
    }
    str += '>'+i+'</button>';
  }
  if (data.next_page) {
    str += '<button id="page" data-page="' + (data.last_page+1) + '" type="button" class="btn btn-secondary">&raquo;</button>'
  }

  str += '</div> \
    </div> \
    </div> \
    </div> \
  '
  document.getElementById("page1").innerHTML = str;
  document.getElementById("page2").innerHTML = str;  
}

function use_collapse(div, reverse=false) {
  var ret = $('#' + div).prop('checked'); 
  if (reverse) {
    if (ret) {
      $('#' + div + '_div').collapse('hide')
    } else {
      $('#' + div + '_div').collapse('show')
    }
  } else {
    if (ret) {
      $('#' + div + '_div').collapse('show')
    } else {
      $('#' + div + '_div').collapse('hide')
    }
  }
}
  

/////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
  var protocol = window.location.protocol;
  var socket = io.connect(protocol + "//" + document.domain + ":" + location.port + "/framework");
  //var socket = io.connect("http://" + document.domain + ":" + location.port + "/framework", {transports:['websocket']},  {'force new connection': true});
  socket.on('notify', function(data){
    $.notify({
      message : data['msg'],
      url: data['url'],
      target: '_self'
    },{
      type: data['type'],
    });
  });

  socket.on('command_modal_add_text', function(data){
    document.getElementById("command_modal_textarea").innerHTML += data ;
    document.getElementById("command_modal_textarea").scrollTop = document.getElementById("command_modal_textarea").scrollHeight;
  });

  socket.on('command_modal_show', function(data){
    command_modal_show(data)
  });

  socket.on('command_modal_clear', function(data){
    document.getElementById("command_modal_textarea").innerHTML = ""
  });
});

$(document).ready(function(){
  $('.loading').hide();
  //$('#modal_loading').hide();
})
.ajaxStart(function(){
  $('.loading').show();
  //$('#modal_loading').show();
})
.ajaxStop(function(){
  $('.loading').hide();
  //$('#modal_loading').hide();
});

$(document).ready(function(){
  $("body").on('click', '#open_url_btn', function(e) {
    e.preventDefault();
    url = $(this).data('url')
    window.open(url, "_blank");
  });
  
});

///////////////////////////////////////////////////////////////////////////////
// 공용 버튼
///////////////////////////////////////////////////////////////////////////////

$("body").on('click', '#global_link_btn', function(e) {
  e.preventDefault();
  url = $(this).data('url')
  window.open(url, "_blank");
});


//  global_cache_confirm_btn => global_offcloud_cache_confirm_btn
$("body").on('click', '#global_offcloud_cache_confirm_btn', function(e){
  e.preventDefault();
  hash = $(this).data('hash');
  $.ajax({
    url: '/offcloud2/ajax/hash',
    type: "POST", 
    cache: false,
    data:{hash:hash},
    dataType: "json",
    success: function (data) {
      if (data == 'true') {
        $.notify('<strong>캐쉬 되어 있습니다.</strong>', {
          type: 'success'
        });
      } else if (data == 'false') {
        $.notify('<strong>캐쉬 되어 있지 않습니다.</strong>', {
          type: 'warning'
        });
      } else if (data == 'fail') {
        $.notify('<strong>캐쉬 확인 실패</strong>', {
          type: 'warning'
        });
      }
    }
  });
  //$(location).attr('href', '/offcloud/cache?magnet=' + hash)
});

//global_add_remote_btn -> global_offcloud_add_btn
$("body").on('click', '#global_offcloud_add_btn', function(e) {
  e.preventDefault();
  hash = $(this).data('hash');
  $.ajax({
    url: '/offcloud2/ajax/add_remote',
    type: "POST", 
    cache: false,
    data: {hash:hash},
    dataType: "json",
    success: function (data) {
      m_modal(data)
    }
  });
});


$("body").on('click', '#global_downloader_add_btn', function(e){
  e.preventDefault();
  download_url = $(this).data('hash');
  $.ajax({
    url: '/downloader/ajax/add_download',
    type: "POST", 
    cache: false,
    data: {download_url:download_url},
    dataType: "json",
    success: function (data) {
      show_result_add_download(data);
    }
  });
});


// 사용 on / off
$('#global_scheduler').change(function() {
  var ret = $(this).prop('checked');
  $.ajax({
    url: '/'+package_name+'/ajax/scheduler',
    type: "POST", 
    cache: false,
    data: {scheduler : ret},
    dataType: "json",
    success: function (list) {
    }
  });
});

$('#global_scheduler_sub').change(function() {
  var ret = $(this).prop('checked');
  $.ajax({
    url: '/'+package_name+'/ajax/scheduler',
    type: "POST", 
    cache: false,
    data: {scheduler : ret, sub:sub},
    dataType: "json",
    success: function (list) {
    }
  });
});

//설정 저장
$("#global_setting_save_btn").click(function(e) {
  e.preventDefault();
  var formData = get_formdata('#setting');
  $.ajax({
    url: '/'+package_name+'/ajax/setting_save',
    type: "POST", 
    cache: false,
    data: formData,
    dataType: "json",
    success: function (ret) {
      if (ret) {
        $.notify('<strong>설정을 저장하였습니다.</strong>', {
          type: 'success'
        });
      } else {
        $.notify('<strong>설정 저장에 실패하였습니다.</strong>', {
          type: 'warning'
        });
      }
    }
  });
});

$("#global_one_execute_btn").click(function(e) {
//$("body").on('click', '#one_execute_btn', function(e){
  e.preventDefault();
  $.ajax({
    url: '/' + package_name + '/ajax/one_execute',
    type: "POST", 
    cache: false,
    data: {},
    dataType: "json",
    success: function (ret) {
      if (ret=='scheduler' || ret=='thread') {
        $.notify('<strong>작업을 시작하였습니다. ('+ret+')</strong>', {
          type: 'success'
        });
      } else if (ret == 'is_running') {
        $.notify('<strong>작업중입니다.</strong>', {
          type: 'warning'
        });
      } else {
        $.notify('<strong>작업 시작에 실패하였습니다.</strong>', {
          type: 'warning'
        });
      }
    }
  });
});
  
$("#global_one_execute_sub_btn").click(function(e) {
//$("body").on('click', '#one_execute_btn', function(e){
  e.preventDefault();
  $.ajax({
    url: '/' + package_name + '/ajax/one_execute',
    type: "POST", 
    cache: false,
    data: {sub:sub},
    dataType: "json",
    success: function (ret) {
      if (ret=='scheduler' || ret=='thread') {
        $.notify('<strong>작업을 시작하였습니다. ('+ret+')</strong>', {
          type: 'success'
        });
      } else if (ret == 'is_running') {
        $.notify('<strong>작업중입니다.</strong>', {
          type: 'warning'
        });
      } else {
        $.notify('<strong>작업 시작에 실패하였습니다.</strong>', {
          type: 'warning'
        });
      }
    }
  });
});
  
$("body").on('click', '#global_reset_db_btn', function(e){
  e.preventDefault();
  document.getElementById("confirm_title").innerHTML = "DB 삭제";
  document.getElementById("confirm_body").innerHTML = "전체 목록을 삭제 하시겠습니까?";
  $('#confirm_button').attr('onclick', "global_db_delete();");
  $("#confirm_modal").modal();
  return;
});
  
function global_db_delete() {
  $.ajax({
    url: '/' + package_name + '/ajax/reset_db',
    type: "POST", 
    cache: false,
    data: {},
    dataType: "json",
    success: function (data) {
      if (data) {
        $.notify('<strong>삭제하였습니다.</strong>', {
          type: 'success'
        });
      } else {
        $.notify('<strong>삭제에 실패하였습니다.</strong>',{
          type: 'warning'
        });
      }
    }
  });
}

$("body").on('click', '#global_reset_db_sub_btn', function(e){
  e.preventDefault();
  document.getElementById("confirm_title").innerHTML = "DB 삭제";
  document.getElementById("confirm_body").innerHTML = "전체 목록을 삭제 하시겠습니까?";
  $('#confirm_button').attr('onclick', "global_db_delete_sub();");
  $("#confirm_modal").modal();
  return;
});
  
function global_db_delete_sub() {
  $.ajax({
    url: '/' + package_name + '/ajax/reset_db',
    type: "POST", 
    cache: false,
    data: {sub:sub},
    dataType: "json",
    success: function (data) {
      if (data) {
        $.notify('<strong>삭제하였습니다.</strong>', {
          type: 'success'
        });
      } else {
        $.notify('<strong>삭제에 실패하였습니다.</strong>',{
          type: 'warning'
        });
      }
    }
  });
}







function command_modal_show(title) {
  ClientHeight = window.innerHeight
  document.getElementById("command_modal_title").innerHTML = title
  $("#command_modal").height(ClientHeight-100);
  $("#command_modal_textarea").height(ClientHeight-380);
  $("#command_modal").modal();
}


function FormatNumberLength(num, length) {
  var r = "" + num;
  while (r.length < length) {
      r = "0" + r;
  }
  return r;
}



// 토렌트 프로그램에 다운로드 추가할 결과를 보여주는
function show_result_add_download(data) {
  try {
    sub = ''
    program = '토렌트'
    if (data.default_torrent_program == '0') {
      program = '트랜스미션에 토렌트'
      sub = 'transmission'
    } else if (data.default_torrent_program == '1') {
      program = '다운로드스테이션에 토렌트'
      sub = 'downloadstation'
    } else if (data.default_torrent_program == '2') {
      program = '큐빗토렌트다에 토렌트'
      sub = 'qbittorrent'
    } else if (data.default_torrent_program == '3') {
      program = 'aria2에 토렌트'
      sub = 'aria2'
    }
  }
  catch {
  }
  if (data.ret == 'success') {
    $.notify({message:'<strong>'+ program +'를 추가하였습니다.</strong><br>클릭시 다운로드 상태창으로 이동', url:'/downloader/'+sub+'/status',
      target: '_self'}, {
      type: 'success',
    });
  } else if (data.ret == 'success2') {
    $.notify('<strong>일반 파일 다운로드를 시작하였습니다.</strong>', {
      type: 'success'
    });
  } else if (data.ret == 'fail') {
    $.notify('<strong>'+ program +' 추가에 실패하였습니다.</strong>', {
      type: 'warning'
    });
  } else {
    $.notify('<strong>'+ program +' 추가 에러<br>'+data.error+'</strong>', {
      type: 'warning'
    });
  }
}

function humanFileSize(bytes) {
    var thresh = 1024;
    if(Math.abs(bytes) < thresh) {
        return bytes + ' B';
    }
    var units = ['KB','MB','GB','TB','PB','EB','ZB','YB']
    var u = -1;
    do {
        bytes /= thresh;
        ++u;
    } while(Math.abs(bytes) >= thresh && u < units.length - 1);
    return bytes.toFixed(1)+' '+units[u];
}


$("body").on('click', '#global_torrent_info_btn', function(e) {
  e.preventDefault();
  hash = $(this).data('hash');
  $.ajax({
    url: '/torrent_info/ajax/torrent_info',
    type: "POST", 
    cache: false,
    data: {hash:hash},
    dataType: "json",
    success: function (data) {
      m_modal(data, "토렌트 정보")
    }
  });
});

function get_torrent_program_name(p) {
  if (p == '0') return  '트랜스미션'
  else if (p == '1') return '다운로드스테이션'
  else if (p == '2') return '큐빗토렌트'
  else if (p == '3') return 'aria2'
}

