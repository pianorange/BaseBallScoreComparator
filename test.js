// import exfunc from './sup.js';

const yahoo = "https://baseball.yahoo.co.jp/npb/game/2018033001/text?manual=1";
var text_html = "";
var urlString = "";

$(document).on('click', '#button01', function () {
    //クリックした後の処理
    console.log("button clicked");

    //urlを取得する。
    //this.urlString = $('#url').val();
    this.urlString = yahoo;
    console.log("URL = " + this.urlString);

    //5秒毎にYahooからデータを呼び出す。
    setInterval(compareScoreData, 5000, this.urlString);

});


// function test() {
//     exfunc();
// }

function compareScoreData() {

   let standardScore = getStandardScore(yahoo);
   console.log("compareScoreData resultval" + standardScore);


}

//get standard of comparison From Yahoo
function getStandardScore(urlString) {

    let document_str = getTargetSiteDomStr(urlString);
    let document_obj = ParsingStringToDomObject(document_str) || 'notexist';

    // パースに成功した
    console.log("print document_obj" + document_obj);
    if (document_obj == null) {
        console.log('getStandardScore :  document_obj == null');
    }
    // 出力テスト
    var ScoreTableElements = document_obj.getElementById("yjSNLiveTextscoreboard")
        .getElementsByTagName("div")[0]
        .getElementsByTagName("table")[0]
        .getElementsByTagName("tbody")[0]
        .querySelectorAll("tr.yjMS td.sum");

    //TargetNodeから取得した点数を取得して、Arrayに変換する。
    // var testDivs = Array.prototype.filter.call(ScoreTableElements, function (ScoreTableElement) {
    //     return ScoreTableElement.innerText;
    // });

    var scoreObj = new ScoreDataObject('',-1,'',-1,'','',true);

    for (item in ScoreTableElements) {
        var testval = Number(ScoreTableElements[item].innerText);
        if(testval.length == 0){
            throw new 'EmptyScoreData';
        }
        if (scoreObj.score_A < 0) {
            scoreObj.score_A = testval;
        }else if (scoreObj.score_B < 0) {
            scoreObj.score_B = testval;
        }
    }

    return scoreObj;
}


function getTargetSiteDomStr(urlString) {
    console.log("url in ajax" + urlString);
    var target_result = '';
    $.ajax({
        type: 'GET',
        url: encodeURI(urlString),
        dataType: 'html',
        async: false,
        success: function (data) {
            console.log('ajax result' + data);
            target_result = data;
        },
        error: function () {
            alert('問題がありました。');
        }
    });
    console.log('gettargetsitedomobj' + target_result);
    return target_result;
}

function ParsingStringToDomObject(data) {

    let text_html = data;

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

    //url null 入っても、エラーにならない、ローカルホストのDOM取得してしまうので処理必要
    if (document_obj.getElementsByTagName("parsererror").length) {
        document_obj = null;
    }

    return document_obj;
}

class ScoreDataObject {

    constructor(teamName_A, score_A, teamName_B, score_B, recoredTime, site, compareFlag) {
        this.teamName_A = teamName_A;
        this.score_A = score_A;
        this.teamName_B = teamName_B;
        this.score_B = score_B;
        this.recoredTime = recoredTime;
        this.site = site;
        this.compareFlag = compareFlag;
    }

}

class ScoreViewModel{
    constructor(ScoreDataObjectList){
        this.ScoreDataObjectList = ScoreDataObjectList;
    }

}