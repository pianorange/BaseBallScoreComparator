import exfunc from './sup.js';

const yahoo = "https://baseball.yahoo.co.jp/npb/game/2018033001/text?manual=1";
var text_html = "";
var urlString = "";

$(document).on('click', '#button01', function () {
    //クリックした後の処理
    console.log("button clicked");
    test();

    //urlを取得する。
    this.urlString = $('#url').val();
    console.log("URL = " + this.urlString);

    //5秒毎にYahooからデータを呼び出す。
    setInterval(compareScoreData, 5000, this.urlString);

});


function test() {
    exfunc();
}

function compareScoreData(){

    getStandardScore(yahoo);


}

//get standard of comparison From Yahoo
function getStandardScore(urlString){

 //   let document_str = getTargetSiteDomStr(urlString);
    let document_str = null;
    let document_obj = ParsingStringToDomObject(document_str) || 'notexist';


    // パースに成功した
    console.log("print document_obj"+document_obj);
    if (document_obj == null) {
        console.log('getStandardScore :  document_obj == null');
    }
        // 出力テスト
        var scoreboard = document_obj.getElementById("yjSNLiveTextscoreboard")
            .getElementsByTagName("div")[0]
            .getElementsByTagName("table")[0]
            .getElementsByTagName("tbody")[0];
        console.log(scoreboard);
        // for(item in scoreboard){
        //     console.log(item.val);
        // }
        console.log(scoreboard);
        $('#sample01').append(document_obj.getElementById("yjSNLiveTextscoreboard"));
}


function getTargetSiteDomStr(urlString) {
    console.log("url in ajax" + urlString);
    var target_result = '';
    $.ajax({
        type: 'GET',
        //url: 'https://baseball.yahoo.co.jp/npb/game/2018033001/text?manual=1',
        url: encodeURI(urlString),
        dataType: 'html',
        async:false,
        success: function (data) {
            console.log('ajax result'+data);
            target_result = data;
        },
        error:function() {
            alert('問題がありました。');
        }
    });
    console.log('gettargetsitedomobj'+target_result);
    return target_result;
}

function ParsingStringToDomObject(data){

    let text_html = '';

    // ------------------------------------------------------------
    // DOMParser オブジェクトを作成する
    // ------------------------------------------------------------
    let dom_parser = new DOMParser();

    // ------------------------------------------------------------
    // html 文字列から Document オブジェクトを作成する
    // ------------------------------------------------------------
    let document_obj = null;
        // ------------------------------------------------------------
        // html 文字列から Document オブジェクトを作成する
        // ------------------------------------------------------------
        document_obj = dom_parser.parseFromString(text_html, "text/html");

        // ------------------------------------------------------------
        // パースに失敗したか調べる
        // ------------------------------------------------------------
        if (document_obj.getElementsByTagName("parsererror").length) {
            document_obj = null;
        }

    return document_obj;
}
