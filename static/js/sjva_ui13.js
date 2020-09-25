

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
      <div class="row mb-3"> \
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
  

