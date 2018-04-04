# ScoreComparator
- - -

	let dom_parser = new DOMParser();
	let document_obj = null; //return type document
    document_obj = dom_parser.parseFromString(text_html,"text/html");
    // returns a Document, but not a SVGDocument nor a HTMLDocument

**documentType referance**
https://developer.mozilla.org/en-US/docs/Web/API/Document

    ECMA6 import/export
    (sup.js)
    export default function exfunc() {
        console.log('hi');
    }

    (test.js)
    import exfunc from './sup.js';


**ajax async: false**
http://nahosung.tistory.com/102

How To Use ECMA6
-
https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Control_flow_and_error_handling

try...catch 문법
try...catch 문법은 시도할 블록을 표시하고, 예외가 발생하였을때, 하나 이상의 반응을 명시합니다. 만약 예외가 발생하였을때, try...catch 문법은 예외를 잡아냅니다.

try...catch 문법은 하나 이상의 문장을 포함한 try 블록과, try 블록 에서 예외가 발생하였을때, 어떤 것을 할 것인지 명시된 문장을 포함한 0개 이상의 catch 블록으로 구성됩니다. try 블록이 성공하길 원하고, try 블록이 성공하지 않았다면, 제어를 catch 블록으로 넘기고 싶을 것입니다. 만약 try 블록(또는 try 블록에서 호출하는 함수) 의 문장이 예외를 발생시켰을때, 제어는 즉시 catch 블록으로 이동합니다. 만약 try 블록에서 예외가 발생하지 않았을 때, catch 블록을 건너뜁니다. finally 블록은 try 블록과 catch 블록의 시행이 끝나고 try...catch 문법 다음의 문장이 시행 되기 전에 시행됩니다.

다음의 예제는 try...catch 문법을 사용합니다. 예제는 함수에 전해진 값을 토대로 달의 이름을 검색하는 함수를 호출합니다. 만약 값이 달 숫자값(1-12) 에 일치하지 않으면,"InvalidMonthNo" 라는 값과 함께 예외가 발생하고 catch 블록의 문장들이 monthName 변수를 unknown 값으로 설정합니다.

    function getMonthName (mo) {
      mo = mo-1; // Adjust month number for array index (1=Jan, 12=Dec)
      var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul",
                    "Aug","Sep","Oct","Nov","Dec"];
      if (months[mo] != null) {
        return months[mo];
      } else {
        throw "InvalidMonthNo"; //throw keyword is used here
      }
    }

    try { // statements to try
      monthName = getMonthName(myMonth); // function could throw exception
    }
    catch (e) {
      monthName = "unknown";
      logMyErrors(e); // pass exception object to error handler
    }
catch 블록
try 블록에서 발생할수 있는 모든 예외를 처리하기 위해 catch 블록을 사용할 수 있습니다.

    catch (catchID) {
      statements
    }
catch 블록은 throw문장에 의해 명시된 값을 가지고 있는 식별자(앞 구문의 catchID)를 명시합니다; 이 식별자를 발생된 예외에 대한 정보를 얻기 위하여 사용할 수 있습니다. 자바스크립트는 catch 블록에 진입했을때 식별자를 생성합니다; 식별자는 catch 블록에 있는 동안만 유지됩니다; catch 블록의 시행이 끝난 후, 식별자는 더이상 사용하실 수 없습니다.

예를 들어, 다음의 코드는 예외를 발생시킵니다. 예외가 발생하였을때, 제어는 catch 블록으로 넘어갑니다.

    try {
      throw "myException" // generates an exception
    }
    catch (e) {
      // statements to handle any exceptions
      logMyErrors(e) // pass exception object to error handler
    }
finally 블록
finally 블록은 try 블록과 catch 블록이 시행되고, try...catch 문법 다음 문장이 시행되기 전에 시행되는 문장들을 포함하고 있습니다. finally 블록은 예외가 발생하든 안하든 수행됩니다. 만약 예외가 발생하였을때, finally 블록 안의 문장들은 어떤 catch 블록도 예외를 처리하지 않더라도 시행됩니다.

finally 블록을 예외가 발생하였을때 여러분의 스크립트가 우아하게 실패하도록 만들기 위하여 사용할 수 있습니다. 예를 들어, 여러분의 스크립트가 묶어둔 자원들을 풀어줄 필요가 있습니다. 다음의 예제는 파일을 열고, 파일을 사용하는 문장(서버 측 자바스크립트는 파일에 접근하는 것을 허가합니다)을 시행합니다. 만약 파일이 열린 동안 예외가 발생했다면, finally 블록은 스크립트가 실패하기 전에 파일을 닫아줍니다.

    openMyFile();
    try {
      writeMyFile(theData); //This may throw a error
    } catch(e) {  
      handleError(e); // If we got a error we handle it
    } finally {
      closeMyFile(); // always close the resource
    }
    만약 finally 블록이 값을 반환하였을 경우, try 블록과 catch블록의 return 문장과 상관없이 전체 try-catch-finally 생산물의 반환값이 됩니다:

    function f() {
      try {
        console.log(0);
        throw "bogus";
      } catch(e) {
        console.log(1);
        return true; // this return statement is suspended
                     // until finally block has completed
        console.log(2); // not reachable
      } finally {
        console.log(3);
        return false; // overwrites the previous "return"
        console.log(4); // not reachable
      }
      // "return false" is executed now  
      console.log(5); // not reachable
    }
    f(); // alerts 0, 1, 3; returns false
    finally 블록에 의한 반환값 덮어쓰기는 예외가 발생하거나 다시 예외가 발생했을때 또한 적용됩니다.

    function f() {
      try {
        throw "bogus";
      } catch(e) {
        console.log('caught inner "bogus"');
        throw e; // this throw statement is suspended until 
                 // finally block has completed
      } finally {
        return false; // overwrites the previous "throw"
      }
      // "return false" is executed now
    }

    try {
      f();
    } catch(e) {
      // this is never reached because the throw inside
      // the catch is overwritten
      // by the return in finally
      console.log('caught outer "bogus"');
    }

    // OUTPUT
    // caught inner "bogus"