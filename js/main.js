function OnButtonClick() {

  //入力テキストの反映処理を追加
  getInputBox();
  //プリントしたいエリアの取得
  //  var printArea = document.getElementsByClassName("print-area");
  var printArea = document.getElementsByClassName("print-area");
  //プリント用の要素「#print」を作成し、上で取得したprintAreaをその子要素に入れる。
  $('body').append('<div id="print" class="printBc"></div>');
  $(printArea).clone().appendTo('#print');
  //プリントしたいエリア意外に、非表示のcssが付与されたclassを追加
  $('body > :not(#print)').addClass('print-off');
  window.print();
  //window.print()を実行した後、作成した「#print」と、非表示用のclass「print-off」を削除
  $('#print').remove();
  $('.print-off').removeClass('print-off');
}

function OnButtonClick2() {

  //入力テキストの反映処理を追加
  getInputBox2();
  //プリントしたいエリアの取得
  //  var printArea = document.getElementsByClassName("print-area");
  var printArea = document.getElementsByClassName("print-area");
  //プリント用の要素「#print」を作成し、上で取得したprintAreaをその子要素に入れる。
  $('body').append('<div id="print" class="printBc"></div>');
  $(printArea).clone().appendTo('#print');
  //プリントしたいエリア意外に、非表示のcssが付与されたclassを追加
  $('body > :not(#print)').addClass('print-off');
  window.print();
  //window.print()を実行した後、作成した「#print」と、非表示用のclass「print-off」を削除
  $('#print').remove();
  $('.print-off').removeClass('print-off');
}

window.onload = function () {
  // ページ読み込み時に実行したい処理
  let subForm = document.getElementById("sub-form");
  let subForm2 = document.getElementById("sub-form2");

  subForm.style.display = "";
  subForm2.style.display = "none";
}

function buttonClick() {
  let btnHide = document.getElementById("hide");
  let subForm = document.getElementById("sub-form");
  let subForm2 = document.getElementById("sub-form2");
  let txtArea = document.getElementById("txt-area");
  if (btnHide.checked) {
    subForm.style.display = "none";
    subForm2.style.display = "";
    txtArea.value = "";
  } else {
    subForm.style.display = "";
    subForm2.style.display = "none";
  }
}

function getInputBox() {
  document.getElementById('01').innerHTML = document.getElementsByName("_name")[0].value;
  document.getElementById('02').innerHTML = document.getElementsByName("_hurigana")[0].value;
  document.getElementById('10').innerHTML = document.getElementsByName("_honseki")[0].value;
  document.getElementById('20').innerHTML = document.getElementsByName("_genjusho")[0].value;
  document.getElementById('30').innerHTML = document.getElementsByName("_gakureki")[0].value;
  document.getElementById('40').innerHTML = document.getElementsByName("_syokureki")[0].value;
  document.getElementById('50').innerHTML = document.getElementsByName("_shikaku")[0].value;
  document.getElementById('60').innerHTML = document.getElementsByName("_syumi")[0].value;
  document.getElementById('70').innerHTML = document.getElementsByName("_tokugi")[0].value;
  document.getElementById('80').innerHTML = document.getElementsByName("_syuukyou")[0].value;
  document.getElementById('90').innerHTML = document.getElementsByName("_sintyou")[0].value;
  document.getElementById('100').innerHTML = document.getElementsByName("_taijuu")[0].value;
  document.getElementById('110').innerHTML = document.getElementsByName("_kenkoujoutai")[0].value;
}

function getInputBox2_init() {


}

function getInputBox2() {
  document.getElementsByName("text_box")[0].value;
}
