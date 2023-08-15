document.addEventListener("DOMContentLoaded", () => {
    let today = new Date()
    let day = today.getDay() //요일

    //현재 뭐하는 시간인지
    //CurrentTimeTable 홀수는 수업, 짝수는 쉬는시간
    //예외 : 9 점심시간, 11 청소
    function CurrentTimeTableChecker() {
        let hours = today.getHours() //시간
        let minutes = today.getMinutes() //분

        if (hours >= 8 && minutes >= 40 && hours < 9 && minutes < 30) {
            let CurrentTimeTable = 1 //1교시
        } else if (hours < 9 && minutes < 40) {
            let CurrentTimeTable = 2 //1교시 쉬는시간
        } else if (hours < 10 && minutes < 30) {
            let CurrentTimeTable = 3 //2교시
        } else if (hours < 10 && minutes < 40) {
            let CurrentTimeTable = 4 
        } else if (hours < 11 && minutes < 30) {
            let CurrentTimeTable = 5 //3교시
        } else if (hours < 11 && minutes < 40) {
            let CurrentTimeTable = 6
        } else if (hours < 12 && minutes < 30) {
            let CurrentTimeTable = 7 //4교시
        } else if (hours < 13 && minutes < 30) {
            let CurrentTimeTable = 8 //점심시간
        } else if (hours < 14 && minutes < 20) {
            let CurrentTimeTable = 9 //5교시
        } else if (hours < 14 && minutes < 40) {
            let CurrentTimeTable = 10 //청소
        } else if (hours < 15 && minutes < 30) {
            let CurrentTimeTable = 11 //6교시
        } else if (hours < 15 && minutes < 40) {
            let CurrentTimeTable = 12 
        } else if (hours < 16 && minutes < 30) {
            let CurrentTimeTable = 13 //7교시
        } else {
            let CurrentTimeTable = 0
        }
    }

    //요일별 시간표

    //월요일
    function mondayTimeTable() {
        switch (CurrentTimeTable) {
            case 0:
                //아무것도 아님
                let CurrentTimeTableNaturalLanguge = "NaN"
                break
            case 1:
                //1.빅데이터분석(설희준)
                CurrentTimeTableNaturalLanguge = "1교시"
                break
            case 3:
                //2.공학 일반(기술과 강사1)
                CurrentTimeTableNaturalLanguge = "2교시"
                break
            case 5:
                //3.공학 일반(기술과 강사1)
                CurrentTimeTableNaturalLanguge = "3교시"
                break
            case 7:
                //4.창의 경영(강대영)
                CurrentTimeTableNaturalLanguge = "4교시"
                break
            case 9:
                //5.스포츠 생활(강은일)
                CurrentTimeTableNaturalLanguge = "5교시"
                break
            case 11:
                //6.입체조형(박영환)
                CurrentTimeTableNaturalLanguge = "6교시"
                break
            case 13:
                //7.???
                CurrentTimeTableNaturalLanguge = "7교시"
                break
            case 8:
                //점심시간
                CurrentTimeTableNaturalLanguge = "점심시간"
                break
            case 10:
                //청소기간
                CurrentTimeTableNaturalLanguge = "청소시간"
                break
        }
    }

    //현재 시간 표시
    document.querySelector("#currentClass").textContent += CurrentTimeTableNaturalLanguge

    //요일 체크
    function dayCheaker() {
        switch (day) {
            case 0:
                //월요일
                //자연어 넣는 변수 넣기
                mondayTimeTable()
                break
            case 1:
                //화요일
                mondayTimeTable()
                break
            case 2:
                //수요일
                mondayTimeTable()
                break
            case 3:
                //목요일
                mondayTimeTable()
                break
            case 4:
                //금요일
                mondayTimeTable()
                break
        }
    }

    //쉬는 시간 체크
    function breakTimeCheaker() {
        switch (CurrentTimeTable % 2) {
            case 0:
                //쉬는시간
                break
            case 1:
                //수업
                dayCheaker()
                break
        }
    }
})