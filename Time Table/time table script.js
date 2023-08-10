document.addEventListener("DOMContentLoaded", () => {
    const today = new Date()
    const day = today.getDay() //요일
    const hours = today.getHours() //시간
    const minutes = today.getMinutes() //분

    //현재 뭐하는 시간인지
    //CurrentTimeTable 홀수는 수업, 짝수는 쉬는시간
    //예외 : 9 점심시간, 11 청소
    function CurrentTimeTableChecker(hours, minutes) {
        if (hours >= 8 && minutes >= 40 && hours < 9 && minutes < 30) {
            const CurrentTimeTable = 1 //1교시
        } else if (hours < 9 && minutes < 40) {
            const CurrentTimeTable = 2 //1교시 쉬는시간
        } else if (hours < 10 && minutes < 30) {
            const CurrentTimeTable = 3 //2교시
        } else if (hours < 10 && minutes < 40) {
            const CurrentTimeTable = 4 
        } else if (hours < 11 && minutes < 30) {
            const CurrentTimeTable = 5 //3교시
        } else if (hours < 11 && minutes < 40) {
            const CurrentTimeTable = 6
        } else if (hours < 12 && minutes < 30) {
            const CurrentTimeTable = 7 //4교시
        } else if (hours < 13 && minutes < 30) {
            const CurrentTimeTable = 8 //점심시간
        } else if (hours < 14 && minutes < 20) {
            const CurrentTimeTable = 9 //5교시
        } else if (hours < 14 && minutes < 40) {
            const CurrentTimeTable = 10 //청소
        } else if (hours < 15 && minutes < 30) {
            const CurrentTimeTable = 11 //6교시
        } else if (hours < 15 && minutes < 40) {
            const CurrentTimeTable = 12 
        } else if (hours < 16 && minutes < 30) {
            const CurrentTimeTable = 13 //7교시
        } else {
            const CurrentTimeTable = 0
        }
    }

    //요일별 시간표

    //월요일
    function mondayTimeTable(CurrentTimeTable) {
        switch (CurrentTimeTable) {
            case 0:
                //아무것도 아님
                break
            case 1:
                //1.빅데이터분석(설희준)
                break
            case 3:
                //2.공학 일반(기술과 강사1)
                break
            case 5:
                //3.공학 일반(기술과 강사1)
                break
            case 7:
                //4.창의 경영(강대영)
                break
            case 9:
                //5.스포츠 생활(강은일)
                break
            case 11:
                //6.입체조형(박영환)
                break
            case 13:
                //7.
                break
            case 8:
                //점심시간
                break
            case 10:
                //청소기간
                break
        }
    }

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