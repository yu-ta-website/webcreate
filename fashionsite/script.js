$(function () {

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

 // カルーセル
 $('.carousel').slick({
  autoplay: true,
  dots: true,
  infinite: true,
  autoplaySpeed: 5000,
  arrows: false,
});

});

// 送信ボタンクリック時の処理
$('#submit').on('click', function(event) {
    // formタグによる送信を拒否
    event.preventDefault();

     // 入力チェックをした結果をresultに格納
     let result = inputCheck();

     // エラー判定とメッセージを取得
     let error = result.error;
     let message = result.message;

     // エラーが無かったらフォームを送信する
   if (error == false) {
        // フォーム送信は実際には行わず、送信成功メッセージのみ表示する
        alert('お問い合わせを送信しました。')
      } else {
        // エラーメッセージを表示する
        alert(message);
      }
});

 // フォーカスが外れたとき（blur）にフォームの入力チェックをする
 $('#name').blur(function() {
    inputCheck();
 });
 $('#furigana').blur(function () {
    inputCheck();
  });
  $('#email').blur(function () {
    inputCheck();
  });
  $('#tel').blur(function () {
    inputCheck();
  });
  $('#message').blur(function () {
    inputCheck();
  });
  $('#agree').click(function () {
    inputCheck();
  });

  $('#prefecture').blur(function () {
    inputCheck();
  });

// お問い合わせフォームの入力チェック
function inputCheck() {
   // エラーのチェック結果
   let result;

   // エラーメッセージのテキスト
   let message = '';

   // エラーがなければfalse、エラーがあればtrue
   let error = false;

   // お名前のチェック
   if($('#name').val() == '') {
    // エラーあり
    $('#name').css('background-color', '#f79999');
      error = true;
      message += 'お名前を入力してください。\n';
   } else {
    // エラーなし
    $('#name').css('background-color', '#fafafa');
   }

    // フリガナのチェック
    if ($('#furigana').val() == '') {
        // エラーあり
        $('#furigana').css('background-color', '#f79999');
        error = true;
        message += 'フリガナを入力してください。\n';
      } else {
        // エラーなし
        $('#furigana').css('background-color', '#fafafa');
      }
  
      // お問い合わせのチェック
      if ($('#message').val() == '') {
        // エラーあり
        $('#message').css('background-color', '#f79999');
        error = true;
        message += 'お問い合わせ内容を入力してください。\n';
      } else {
        // エラーなし
        $('#message').css('background-color', '#fafafa');
      }

       // メールアドレスのチェック
    if ($('#email').val() == '' || $('#email').val().indexOf('@') == -1 || $('#email').val().indexOf('.') == -1) {
        // エラーあり
        $('#email').css('background-color', '#f79999');
        error = true;
        message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';
      } else {
        // エラーなし
        $('#email').css('background-color', '#fafafa');
      }

       // 電話番号のチェック（未入力はOK、未入力でない場合は-が必要）
    if ($('#tel').val() != '' && $('#tel').val().indexOf('-') == -1) {
        // エラーあり
        $('#tel').css('background-color', '#f79999');
        error = true;
        message += '電話番号に「-」が含まれていません。\n';
      } else {
        // エラーなし
        $('#tel').css('background-color', '#fafafa');
      }

       // エラーの有無で送信ボタンを切り替え
       if (error == true) {
        $('#submit').attr('src', 'img/button-submit.png');
      } else {
        $('#submit').attr('src', 'img/button-submit.png');
      }

       // オブジェクトでエラー判定とメッセージを返す
       result = {
        error: error,
      message: message
       }

       // 戻り値としてエラーがあるかどうかを返す
    return result;
}