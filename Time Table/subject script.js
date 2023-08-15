document.addEventListener("DOMContentLoaded", () => {
    //과목객체
    const subject = [{ //0
        name: "빅데이터 분석",
        teacher: "설희준",
        classroom: "ai실",
        band: "나",
        color: 
    }, { //1
        name: "공학 일반", //Two teacher
        teacher: "기술과강사1",
        classroom: "기술실",
        band: "바"
    }, { //2
        name: "공학 일반", //Two teacher
        teacher: "최세원",
        classroom: "기술실",
        band: "바"
    }, { //3
        name: "창의 경영",
        teacher: "강대영",
        classroom: "3-4",
        band: "마"
    }, { //4
        name: "스포츠와 생활",
        teacher: "강은일",
        classroom: "체육관",
        band: "라"
    }, { //5
        name: "입체 조형",
        teacher: "박영환",
        classroom: "미술실",
        band: "가" 
    }, { //6
        name: "물리학 실험",
        teacher: "정혁준",
        classroom: "물리실",
        band: "다"
    }, { //7
        name: "논리학", //Two teacher
        teacher: "이민경",
        classroom: "3-4",
        band: "사"
    }, { //8
        name: "논리학", //Two teacher
        teacherB: "허선아",
        classroom: "3-4",
        band: "사"
    }, { //9
        name: "한국사",
        teacher: "이계완",
        classroom: "3-4",
        band: "라"
    }, { //10
        name: "진로활동",
        teacher: "김성경",
        classroom: "3-4",
        band: NaN
    }, { //11
        name: "자율활동",
        teacher: "류세영",
        classroom: "3-4",
        band: NaN
    }]

    function creatTimelineCard(recurringGeneration) {
        const main = document.querySelector("main")

        for (let i = 0; i < recurringGeneration; i++) {
            //객체 생성
            //이거 반복 조질라면 const다 let으로 바꾸든가 아님 const = creatElement다 밖으로 빼서 반복 안되게 해야함 저거 상수라 안바꿔짐
            //<div class="card" id="cardi">
            const card = document.createElement('div')
            card.setAttribute('class', "card")
            card.setAttribute('id', `card${i+1}`)
            main.appendChild(card)

                //<div class="cardInset">
                const cardInset = document.createElement('div')
                cardInset.setAttribute('class', 'cardInset')
                card.appendChild(cardInset)

                    //<flex class="titleLine">
                    const titleLine = document.createElement("flex")
                    titleLine.setAttribute('class', 'titleLine')
                    cardInset.appendChild(titleLine)

                        //<img src="" alt="" class="classLogo" width="40px">
                        const classLogo = document.createElement('img')
                        classLogo.setAttribute('class', 'classLogo')
                        classLogo.setAttribute('width', "40px")
                        titleLine.appendChild(classLogo)

                        //<h3 class="name details">1교시 </h2>
                        const name = document.createElement('h3')
                        name.setAttribute('class', 'name details')
                        titleLine.appendChild(name)

                    //<div class="classImpormaition">
                    const classImpormaition = document.createElement('div')
                    classImpormaition.setAttribute('class', 'classImpormaition')
                    cardInset.appendChild(classImpormaition)

                        //<h5 class="teacher details">Teacher: </h5>
                        const teacher = document.createElement('h5')
                        teacher.setAttribute('class', 'teacher details')
                        teacher.textContent = "Teacher: "
                        classImpormaition.appendChild(teacher)

                        //<h5 class="classroom details">Classroom: </h5>
                        const classroom = document.createElement('h5')
                        classroom.setAttribute('class', 'classroom details')
                        classroom.textContent = "Classroom: "
                        classImpormaition.appendChild(classroom)

                        //<h5 class="band details"></h5>
                        const band = document.createElement('h5')
                        band.setAttribute('class', 'band details')
                        classImpormaition.appendChild(band)
        }
    }

    function currentSubjectCard(i, subjectNumber) {
        //객체 조작
        //cardi아래로 선택해서 하면 한번에 바꿀수 있지 않을까
        document.querySelector(`#card${i} .titleLine`).setAttribute('style', `background-image: url("./painting/card background/${subject[subjectNumber].name}.png");`)
        document.querySelector(`#card${i} .classLogo`).setAttribute('src', `./painting/Logo/${subject[subjectNumber].name}.png`)
        document.querySelector(`#card${i} .classLogo`).setAttribute('alt', subject[subjectNumber].name)
        document.querySelector(`#card${i} .name`).textContent += subject[subjectNumber].name
        document.querySelector(`#card${i} .teacher`).textContent += subject[subjectNumber].teacher
        document.querySelector(`#card${i} .classroom`).textContent += subject[subjectNumber].classroom
        document.querySelector(`#card${i} .band`).textContent += `(${subject[subjectNumber].band}) Band`
    }

    //시간확인
    let today = new Date()
    let day = today.getDay() //요일
    //alert(day)
    //let day = 1 //실험용 월요일

    //현재 뭐하는 시간인지
    //CurrentTimeTable 홀수는 수업, 짝수는 쉬는시간
    //예외 : 9 점심시간, 11 청소
    function CurrentTimeTableChecker() {
        let hours = today.getHours() //시간
        let minutes = today.getMinutes() //분
        let CurrentTimeTable = 0

        //가뜩이나 했깔리는데 최적화 때리니까 더했깔리내
        if (hours >= 8 && hours < 9) {
            if (minutes >= 40 && minutes < 30) {
              CurrentTimeTable = 1; // 1교시
            } else if (minutes < 40) {
              CurrentTimeTable = 2; // 1교시 쉬는 시간
            }
          } else if (hours <= 10) {
            if (minutes < 30) {
              CurrentTimeTable = 3; // 2교시
            } else if (minutes < 40) {
              CurrentTimeTable = 4;
            }
          } else if (hours <= 11) {
            if (minutes < 30) {
              CurrentTimeTable = 5; // 3교시
            } else if (minutes < 40) {
              CurrentTimeTable = 6;
            }
          } else if (hours <= 12 && minutes < 30) {
            CurrentTimeTable = 7; // 4교시
          } else if (hours <= 13 && minutes < 30) {
            CurrentTimeTable = 8; // 점심시간
          } else if (hours <= 14) {
            if (minutes < 20) {
              CurrentTimeTable = 9; // 5교시
            } else if (minutes < 40) {
              CurrentTimeTable = 10; // 청소
            }
          } else if (hours <= 15) {
            if (minutes < 30) {
              CurrentTimeTable = 11; // 6교시
            } else if (minutes < 40) {
              CurrentTimeTable = 12;
            }
          } else if (hours <= 16) {
            if (minutes < 30) {
              CurrentTimeTable = 13; // 7교시
            }
          }

        return CurrentTimeTable
    }

    //미리 현재 시간 값넣어주기
    let CurrentTimeTable = CurrentTimeTableChecker()

    //요일별 시간표

    //월요일
    function mondayTimeTable() {
        //카드 생성
        const numberOfClass = 6 //오늘 수업 개수
        const classArray = [0, 1, 2, 3, 4, 5] //수업 종류
        for(let i = 1; i < 4; i++) {
            currentSubjectCard(i, classArray[0])
            //쉬는시간 함수
        }

        //지금 시간표 강조 표시
        /* var CurrentTimeTableNaturalLanguge = "NaN"
        switch (CurrentTimeTable % 2) {
            case 0:
                //쉬는시간
                CurrentTimeTableNaturalLanguge = "쉬는시간"
                break
            case 1:
                //수업
                switch (CurrentTimeTable) {
                    case 0:
                        //아무것도 아님
                        CurrentTimeTableNaturalLanguge = "NaN"
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
                break
        } */
        
        //현재 시간 표시
        document.querySelector("#currentClass").textContent += CurrentTimeTableNaturalLanguge
    }

    //화요일

    //수요일

    //목요일
    
    //금요일

    // //요일 체크
    // switch (day) {
    //     case 1:
    //         //월요일
    //         //자연어 넣는 변수 넣기
    //         mondayTimeTable()
    //         break
    //     case 2:
    //         //화요일
    //         mondayTimeTable()
    //         break
    //     case 3:
    //         //수요일
    //         mondayTimeTable()
    //         break
    //     case 4:
    //         //목요일
    //         mondayTimeTable()
    //         break
    //     case 5:
    //         //금요일
    //         mondayTimeTable()
    //         break
    // }

    //시간 설정
    //1초마다 시간 갱신
    setInterval(function() {
        if (CurrentTimeTable !== CurrentTimeTableChecker()) { //값 다를때만 변경
            CurrentTimeTable = CurrentTimeTableChecker()
        }
    }, 600); //600 = 1초

    //실험 실행
    /* creatTimelineCard(7)
    currentSubjectCard(1, 0) */
})