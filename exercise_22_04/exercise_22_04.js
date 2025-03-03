// 면적 계산 함수
function calculateArea(n1, n2) {
    return n1 * n2; //길이 * 넓이 리턴
}

// 버튼 클릭 시 호출되는 함수
function calculate() {
    var length = parseFloat(document.getElementById("num1").value);
    var width = parseFloat(document.getElementById("num2").value);

    //계산 함수 호출
    var area = calculateArea(length, width);
    
    // 결과 출력
    document.getElementById("result").textContent = "계산된 면적: " + area;
}