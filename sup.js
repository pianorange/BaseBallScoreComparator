
export default function exfunc() {
    console.log('hi');
}

  //TargetNodeから取得した点数を取得して、Arrayに変換する。
    // var testDivs = Array.prototype.filter.call(ScoreTableElements, function (ScoreTableElement) {
    //     return ScoreTableElement.innerText;
    // });

    // var scoreObj = new ScoreDataObject('', -1, '', -1, '', '', true);

    // for (item in ScoreTableElements) {
    //     var testval = Number(ScoreTableElements[item].innerText);
    //     if (testval.length == 0) {
    //         throw new 'EmptyScoreData';
    //     }
    //     if (scoreObj.score_A < 0) {
    //         scoreObj.score_A = testval;
    //     } else if (scoreObj.score_B < 0) {
    //         scoreObj.score_B = testval;
    //     }
    // }

    // console.log("matches" + matches);
    // var namelist = [];
    // var namelist2 = [];
    // var scorelist = [];
    // var scorelist2 = [];
    // var scoreObjList = [];
    // for (var i = 0; i < matches.length; i++) {
    //     var nameA = matches[i].children[0].children[0].children[1].children[0].children[0].innerText;
    //     namelist.push(nameA);
    //     var nameB = matches[i].children[0].children[1].children[1].children[0].children[0].innerText;
    //     namelist2.push(nameB);
    //     var ScoreA = matches[i].children[0].children[0].children[2].children[0].children[0].children[0].children[0].innerText;
    //     scorelist.push(ScoreA);
    //     var ScoreB = matches[i].children[0].children[0].children[2].children[0].children[0].children[2].children[0].innerText;
    //     scorelist2.push(ScoreB);

    //     var scoreObj = new ScoreDataObject(nameA, Number(ScoreA), nameB, Number(ScoreB), timestamp, yahoo, true);
    //     console.log(scoreObj);
    //     scoreObjList.push(scoreObj);
        
    // }