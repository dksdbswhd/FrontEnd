function strMethod(){
    var len;
    len = prompt('문자열 입력.');
    console.log(len);
    document.write('문자열 길이 :' + len.length);
}

function startNo(){
    var start;
    start = prompt('문자열추출 start 입력.');
    console.log(start);
    document.writeln(start.indexOf('start'));
}

function endNo(){
    var endNo;
    endNo = prompt('문자열추출 end 입력.');
    console.log(endNo);
    document.writeln(end.indexOf('end'));
}
