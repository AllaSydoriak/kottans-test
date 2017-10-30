
$(function(){
  var btn = $('button.keyboard__button');
  var input = $('.form__result');
  btn.on('click', function(){
      input.val(input.val() + $(this).attr('value')) ;
  })
});

$(function(){
  var input = $('.form__result');
  var enter = $('.enter');
  enter.on('click', function(){
    alert(input.val());
  })
});

$(function(){
  var input = $('.form__result');
  var clear = $('.clear');
  clear.on('click', function(){
    input.val('');
  })
});

$(function(){
  var input = $('.form__result');
  var cancel = $('.cancel');
  cancel.on('click', function(){
    input.val(input.val().substring(0, input.val().length-1));
  })
});

$(function(){
  var input = $('.form__result');
  var hide = $('.hide');
  hide.on('click', function(){
    if (input.attr('type') == 'text') input.attr('type', 'password');
    else input.attr('type', 'text');
  })
})
