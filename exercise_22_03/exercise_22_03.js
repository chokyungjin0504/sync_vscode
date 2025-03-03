var todoList = []; //할 일을 입력 할 배열 객체

//종료 시 까지 진행
while(true) {
    var input = prompt("1: 입력 2: 삭제 3: 종료");

    if (input == 1) {
        var todo = prompt("할 일 추가");
        todoList.push(todo);
    }
    else if (input == 2 ) {
        // var removetd = prompt("할 일 제거");
        // for (var j = 0; j < todo.length; j++) {
        //     if (todoList[j] == removetd) {
        //         todoList.remove(todoList[j]);
        //     }
        // }
        var removetd = prompt("삭제할 일의 번호를 입력하세요.");
        var removetd2 = parseInt(removetd);
        removetd2--;
        
        todoList.splice(removetd2, 1);
    }
    else if (input == 3) {
        break;
    }
};

console.log("최종 할 일 목록:", todoList);
// document.write(todoList);

for (let i = 0; i < todoList.length; i++) {
    document.write(i+1, '. ' + todoList[i] + '<br>');
};