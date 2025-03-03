             var fruit = {
                name : "banana", //배열 생성
                color : "yello",
                origin : "Puerto Rico",
                weight : 230,
                size : 17
                //add properties here
            };

            var aFruit = []; //배열 객체 선언

            for (var p in fruit) {
                console.log(p + ":" + fruit[p]); //출력
                aFruit.push(fruit[p]); //array 객체의 메소드 push
            };

            console.log(aFruit); //배열에 입력된 데이터 출력
            
            alert(aFruit[1]);