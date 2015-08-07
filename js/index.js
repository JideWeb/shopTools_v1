/*
  index.js
*/

$(".J_makeAPop").click(function(){
  var me = $(this);
  new popAlert({
    id: 'whatever',
    title: '',
    text: '定义了纯文本提示文案，就不用再定义HTML结构了。如果使用HTML结构来渲染窗里的内容，就不用再定义纯文本了。',
    textAlign: 'center',
    html: '',
    clsName: 'whatever',
    style: 'warning', // 如果需要提示成功，则用congrates；如果不需要背景图，用nobg
    btns: [{
        text: '我是确定',
        handler: function(){
          me.removeClass("btn-grey btn-red").addClass("btn-long180 btn-green").html("你刚才点了确定");
        }
      }, {
        text: '我是取消',
        handler: function(){
          me.removeClass("btn-green btn-red").addClass("btn-long180 btn-grey").html("你刚才点了取消");
        }
      }]
  }).Alert();
});

$(".J_makeAInput").click(function(){
  var U_myUserName = new Input({
    id: 'Whatever',
    name: 'password',
    type: 'text', // 这里的值是input的type值，目前支持text和password
    validType: ['REG_Phone'],
    clsName: 'whatever',
    maxlength: 11,
    placeholder: '请输入您的手机号码',
    errorMsg: '手机号不正确哦',
    style: 'U_inputPrimary flex100' // flex100表示输入框宽度自适应父容器宽
  });
  U_myUserName.renderTo( $(".J_inputDiv") );
  $(".J_checkInput").bind("click", function(){
    checkInput( U_myUserName );  
  });
});

function checkInput( obj ) {
  if( obj.validation ){
    new popAlert({
      text: '验证通过了哦！手机号是 ' + obj.value,
      textAlign: 'center',
      style: 'congrates',
      btns: [{text: 'OK'}]
    }).Alert();
  }else{
    new popAlert({
      text: '验证失败了哦！继续输入……',
      textAlign: 'center',
      btns: [{
        text: '好吧',
        handler: function(){
          $("#U_input_" + obj.id).focus();
        }
      }, {
        text: '无视'
      }]
    }).Alert();
  }
};
