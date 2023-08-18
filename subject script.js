document.addEventListener("DOMContentLoaded", () => {
    //과목객체
    const subject = [{ //0
        name: "빅데이터 분석",
        teacher: "설희준",
        classroom: "ai실",
        band: "나",
        color: "rgb(130, 118, 185)"
    }, { //1
        name: "공학 일반", //Two teacher
        teacher: "기술과강사1",
        classroom: "기술실",
        band: "바",
        color: "rgb(130, 118, 185)"
    }, { //2
        name: "공학 일반", //Two teacher
        teacher: "최세원",
        classroom: "기술실",
        band: "바",
        color: "rgb(130, 118, 185)"
    }, { //3
        name: "창의 경영",
        teacher: "강대영",
        classroom: "3-4",
        band: "마",
        color: "rgb(130, 118, 185)"
    }, { //4
        name: "스포츠와 생활",
        teacher: "강은일",
        classroom: "체육관",
        band: "라",
        color: "rgb(130, 118, 185)"
    }, { //5
        name: "입체 조형",
        teacher: "박영환",
        classroom: "미술실",
        band: "가",
        color: "rgb(130, 118, 185)"
    }, { //6
        name: "물리학 실험",
        teacher: "정혁준",
        classroom: "물리실",
        band: "다",
        color: "rgb(130, 118, 185)"
    }, { //7
        name: "논리학", //Two teacher
        teacher: "이민경",
        classroom: "3-4",
        band: "사",
        color: "rgb(130, 118, 185)"
    }, { //8
        name: "논리학", //Two teacher
        teacher: "허선아",
        classroom: "3-4",
        band: "사",
        color: "rgb(130, 118, 185)"
    }, { //9
        name: "한국사",
        teacher: "이계완",
        classroom: "3-4",
        band: "라",
        color: "rgb(130, 118, 185)"
    }, { //10
        name: "진로활동",
        teacher: "김성경",
        classroom: "3-4",
        band: NaN,
        color: "rgb(130, 118, 185)"
    }, { //11
        name: "자율활동",
        teacher: "류세영",
        classroom: "3-4",
        band: NaN,
        color: "rgb(130, 118, 185)"
    }, { //12
        name: "동아리",
        teacher: "",
        classroom: "",
        band: NaN,
        color: ""
    }]

    //자바스크립트식 3차원 배열
    //교실 배열
    //모르는쌤: 김희? 박승? 강대영 방인? 장성? 강성경 허성? 박성? 박선? 강은일 손혜? 무학? 이수? 장지? 신광? 서종? 박승? 은태?...
    //모르는썜 풀내임: 강대영 김성경 강은일 
    //쌤 리스트: 주정운 설희준 장가영 허선아 이민경 박선아 이계완 류효정 여지영 박영환 정혁준
    const classroomArrays = [
        [ //월요일
            //3-1,    3-2,     3-3,    3-4,     3-5 ,   3-6,    3-7,    3-8,  통합교과1실, 통합교과2실, 지정교과실
            ["주정운", "김희?", "설희준", "장가영", "허선아", "이민경", "박선아", "박승?", "강대영", "이계완", "류효정"], //1교시
            ["주정운", "방인?", "장가영", "여지영", "장성?", "강성경", "이민경", "이계완", "허성?", "", ""], //2교시
            ["주정운", "방인?", "장가영", "장성?", "여지영", "강성경", "이민경", "박승?", "허성?", "", ""], //3교시
            ["여지영", "허선아", "박성?", "강은일", "박선?", "강대영", "이계완", "허성?", "이수?", "류효정", ""], //4교시
            ["박영환", "허선아", "박성?", "강은일", "박선?", "강은일", "손혜?", "무학?", "이수?", "", ""], //5교시 여기 왜 강은일쌤 2반하냐? 밴드도 같은데
            ["장성?", "김희?", "설희준", "박선?", "여지영", "이민경", "강은일", "무학?", "박영환", "이계완", ""], //6교시
            ["", "", "", "", "", "", "", "", "", "", ""] //7교시
        ], [ //화요일
            ["여지영", "허선아", "박성?", "강은일", "박선?", "강대영", "은태?", "허성?", "이수?", "류효정", ""], //1교시
            ["여지영", "김희?", "설희준", "박선?", "장성?", "이민경", "강은일", "허성?", "박영환", "이계완", ""], //2교시
            ["주정운", "김희?", "설희준", "장가영", "허선아", "이민경", "박선?", "이계완", "강대영", "은태?", "류효정"], //3교시
            ["송영?", "허선아", "이민경", "류세영", "강성경", "박경?", "이재?", "허성?", "", "", ""], //4교시
            ["정혁준", "류효정", "장성?", "주정운", "강은일", "장지영", "허성?", "무학?", "이계완", "", ""], //5교시
            ["장성?", "이민경", "주정운", "장가?", "서종?", "여지영", "박영환", "무학?", "신광?", "", ""], //6교시
            ["", "", "", "", "", "", "", "", "", "", ""] //7교시
        ], [ //수요일
            ["정혁준", "류효정", "장성?", "주정운", "강은일", "장지?", "허성?", "박승?", "신광?", "", ""], //1교시
            ["박영환", "허선아", "박성?", "강은일", "박선?", "이계완", "손혜?", "조수?", "이수?", "", ""], //2교시
            ["여지영", "이민경", "주정운", "장가영", "서종?", "장성?", "박영환", "박승?", "신광?", "", ""], //3교시
            ["주정운", "최세원", "장가영", "여지영", "장성?", "강성경", "이민경", "무학?", "이계완", "", ""], //4교시
            ["여지영", "김희?", "설희준", "박선?", "장성?", "이민경", "장지?", "무학?", "박영환", "신광?", ""], //5교시
            ["", "", "", "", "", "", "", "", "", "", ""], //6교시
            ["", "", "", "", "", "", "", "", "", "", ""] //7교시
        ], [ //목요일
            ["주정운", "김희?", "설희준", "장가영", "허선아", "이민경", "박선?", "허성?", "강대영", "강은일", "류효정"], //1교시
            ["장성?", "허선아", "박성?", "강은일", "박선?", "강대영", "이계완", "박승?", "이수?", "류효정", ""], //2교시
            ["장성?", "허선아", "주정운", "장가영", "서종?", "여지영", "박영환", "허성?", "이계완", "", ""], //3교시
            ["장성?", "김희?", "설희준", "박선?", "여지영", "이민경", "장지?", "박승?", "박영환", "신광?", ""], //4교시
            ["주정운", "최세원", "장가영", "장성?", "여지영", "강성경", "이민경", "무학?", "이계완", "", ""], //5교시
            ["박영환", "허선아", "박성?", "강은일", "박선?", "강은일", "손혜?", "무학?", "이수?", "", ""], //6교시
            ["정혁준", "류효정", "여지영", "주정운", "장지?", "강은일", "허성?", "무학?", "신광?", "", ""] //7교시
        ], [ //금요일
            ["주정운", "김희?", "설희준", "장가영", "허선아", "이민경", "박선?", "박승?", "강대영", "이계완", "류효정"], //1교시
            ["장성?", "허선아", "박성?", "강은일", "박선?", "강대영", "은태?", "이민경", "이수?", "류효정", ""], //2교시
            ["정혁준", "류효정", "여지영", "주정운", "장지영", "강은", "허성?", "박승?", "이계완", "", ""], //3교시
            ["여지영", "허선아", "주정운", "장가영", "서종?", "장성?", "박영환", "무학?", "이계완", "", ""], //4교시
            ["박성?", "박경?", "이재?", "강성경", "박정?", "송영?", "허선아", "무학?", "", "", ""], //5교시
            ["박영환", "허선아", "박성?", "강은", "박선?", "이계완", "손혜?", "무학?", "이수?", "", ""], //6교시
            ["", "", "", "", "", "", "", "", "", "", ""] //7교시
        ]
    ]

    //카드 생성 함수 함수(생성할 카드 수)
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

                        //<img src="" alt="" class="classLogo" width="40px" height="30px">
                        const classLogo = document.createElement('img')
                        classLogo.setAttribute('class', 'classLogo')
                        classLogo.setAttribute('width', "30px")
                        classLogo.setAttribute('height', "30px")
                        titleLine.appendChild(classLogo)

                        //<h3 class="name details">1교시 </h2>
                        const name = document.createElement('h3')
                        name.setAttribute('class', 'name details')
                        name.textContent = `${i+1}교시 `
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
            
            //점심시간 판단용
            if (i === 3) {
                //점심시간 생성
                //<div class="card" id="lunchTime"></div>
                const lunchTime = document.createElement('div')
                lunchTime.setAttribute('class', 'card')
                lunchTime.setAttribute('id', 'lunchTime')
                main.appendChild(lunchTime)
                    //<h3 class="lunchTimeTitle">점심시간</h3>
                    const lunchTimeTitle = document.createElement('h3')
                    lunchTimeTitle.setAttribute('class', 'lunchTimeTitle')
                    lunchTimeTitle.textContent = "점심시간"
                    lunchTime.appendChild(lunchTimeTitle)
            }
        }
    }

    //시간확인
    let today = new Date()
    let day = today.getDay() //요일
    //alert(day)
    //let day = 1 //실험용

    //카드 내용 설정 함수 함수(설정할 카드 번호, 과목코드)
    function currentSubjectCard(i, subjectNumber) {
        //객체 조작
        //cardi아래로 선택해서 하면 한번에 바꿀수 있지 않을까
        document.querySelector(`#card${i} .titleLine`).setAttribute('style', `background-image: url("./painting/card background/${subject[subjectNumber].name}.png");`) //이거 스타일로 꽃아버리니까 안됨
        
        const card_classLogo = document.querySelector(`#card${i} .classLogo`)

        let currentClassName = subject[subjectNumber].name
        card_classLogo.setAttribute('src', `./painting/Logo/${currentClassName}.png`)
        card_classLogo.setAttribute('alt', currentClassName)
        document.querySelector(`#card${i} .name`).textContent += currentClassName

        let currentTeacher = subject[subjectNumber].teacher
        document.querySelector(`#card${i} .teacher`).textContent += currentTeacher

        //교실설정
        const currentClassroom = document.querySelector(`#card${i} .classroom`)
        //document.querySelector(`#card${i} .classroom`).textContent += classroomArrays[day-1][i][classroomArrays[day-1][i-1].indexOf(subject[subjectNumber].teacher)]
        //document.querySelector(`#card${i} .classroom`).textContent += "hello"
        //alert(classroomArrays[4][0].indexOf("설희준"))
        //alert(`${i}교시 ${classroomArrays[day-1][i-1].indexOf(currentTeacher)}교실 ${currentTeacher}쌤`)
        //예외교실
        if (currentTeacher === "설희준") {
            currentClassroom.textContent += "SW 교육실"
        } else if (currentTeacher === "박영환") {
            currentClassroom.textContent += "미술실"
        } else if (currentClassName === "자율활동" || currentClassName === "진로활동") {
            currentClassroom.textContent += "본인 반"
        } else if (currentClassName === "동아리") {
            currentClassroom.textContent += "알아서 가라"
        } else {
            switch (classroomArrays[day-1][i-1].indexOf(currentTeacher)) {
                case -1:
                    //없음
                    document.querySelector(`#card${i} .classroom`).textContent += "bug"
                    break
                case 0:
                    //3-1
                    document.querySelector(`#card${i} .classroom`).textContent += "3-1"
                    break
                case 1:
                    //3-2
                    document.querySelector(`#card${i} .classroom`).textContent += "3-2"
                    break
                case 2:
                    //3-3
                    document.querySelector(`#card${i} .classroom`).textContent += "3-3"
                    break
                case 3:
                    //3-4
                    document.querySelector(`#card${i} .classroom`).textContent += "3-4"
                    break
                case 4:
                    //3-5
                    document.querySelector(`#card${i} .classroom`).textContent += "3-5"
                    break
                case 5:
                    //3-6
                    document.querySelector(`#card${i} .classroom`).textContent += "3-6"
                    break
                case 6:
                    //3-7
                    document.querySelector(`#card${i} .classroom`).textContent += "3-7"
                    break
                case 7:
                    //3-8
                    document.querySelector(`#card${i} .classroom`).textContent += "3-8"
                    break
                case 8:
                    //통합교과1실
                    document.querySelector(`#card${i} .classroom`).textContent += "통합교과1실"
                    break
                case 9:
                    //통합교과2실
                    document.querySelector(`#card${i} .classroom`).textContent += "통합교과2실"
                    break
                case 10:
                    //지정교과실
                    document.querySelector(`#card${i} .classroom`).textContent += "지정교과실"
                    break
            }
        }

        document.querySelector(`#card${i} .band`).textContent += `(${subject[subjectNumber].band}) Band`
    }

    //현재 뭐하는 시간인지
    //CurrentTimeTable 홀수는 수업, 짝수는 쉬는시간
    //예외 : 9 점심시간, 11 청소
    let CurrentTimeTable = 0
    function CurrentTimeTableChecker() {
        let hours = today.getHours() //시간
        let minutes = today.getMinutes() //분

        //상남자식 무식 버전 분으로 계산
        let currentMinustes = hours * 60 + minutes
        if (currentMinustes >= 520 && currentMinustes < 570) {
            CurrentTimeTable = 1 //1교시
        } else if (currentMinustes < 580) {
            CurrentTimeTable = false
        } else if (currentMinustes < 630) {
            CurrentTimeTable = 2 //2교시
        } else if (currentMinustes < 640) {
            CurrentTimeTable = false
        } else if (currentMinustes < 690) {
            CurrentTimeTable = 3 //3교시
        } else if (currentMinustes < 700) {
            CurrentTimeTable = false
        } else if (currentMinustes < 750) {
            CurrentTimeTable = 4 //4교시
        } else if (currentMinustes < 810) {
            CurrentTimeTable = "lunchtime" //점심시간
        } else if (currentMinustes < 860) {
            CurrentTimeTable = 5 //5교시
        } else if(currentMinustes < 880) {
            CurrentTimeTable = "cleaningtime" //청소시간
        }else if (currentMinustes < 930) {
            CurrentTimeTable = 6 //6교시
        } else if (currentMinustes < 940) {
            CurrentTimeTable = false
        } else if (currentMinustes < 990) {
            CurrentTimeTable = 7 //7교시
        } else {
            CurrentTimeTable = 0
        }

        return CurrentTimeTable
    }
    CurrentTimeTable = CurrentTimeTableChecker()
    //alert(CurrentTimeTable)

    //오늘 시간표 생성
    function todayTimeTable(...classArrays) {
        const numberOfClass = classArrays.length //오늘 수업 개수
        //const classArrays = [0, 1, 2, 3, 4, 5] //수업 종류

        //classArray 배열 길이 재서 자동으로 numberOfClass설정하자

        //카드 생성
        creatTimelineCard(numberOfClass)
        /* currentSubjectCard(1,0) */
        for(let i = 0; i < numberOfClass; i++) {
            currentSubjectCard(i+1, classArrays[i])
            //쉬는시간 함수
        }
    }

    //지금 시간표 강조 표시
    function todaytimeTableHighlight() {
        
    }

    //오늘 요일 표시

    //요일 체크
    function dayOfWeek(setDay) {
        document.querySelector(`#day${setDay}`).setAttribute("style", "background-color: red;")
        switch (setDay) {
            case 1:
                //월요일
                //자연어 넣는 변수 넣기
                todayTimeTable(0, 1, 1, 3, 4, 5)
                break
            case 2:
                //화요일
                todayTimeTable(3, 5, 0, 11, 6, 7)
                break
            case 3:
                //수요일
                todayTimeTable(6, 9, 7, 2, 5, 12, 12)
                break
            case 4:
                //목요일
                todayTimeTable(0, 3, 8, 5, 2, 4, 6)
                break
            case 5:
                //금요일
                todayTimeTable(0, 3, 6, 8, 10, 9)
                break
        }
    }
    dayOfWeek(day)

    todaytimeTableHighlight()
    //alert(CurrentTimeTableNaturalLanguge)
    //지금 시간 함수
    function CurrentTimeTableNaturalLanguge() {
        if (CurrentTimeTable === 0) {
            //학교 시간이 아닐떄
            document.querySelector("#currentClass").textContent = "not time"
        } else if (typeof CurrentTimeTable === "number") { //이거 의왜로 문자로 적어야하내
            //수업시간
            document.querySelector("#currentClass").textContent = "NOW " + CurrentTimeTable
        } else if (CurrentTimeTable === false) {
            //쉬는시간
            document.querySelector("#currentClass").textContent = "Break Time!"
        } else {
            //점심, 청소시간
            document.querySelector("#currentClass").textContent = CurrentTimeTable
        }
    }
    //document.querySelector("#currentClass").textContent = CurrentTimeTable
    CurrentTimeTableNaturalLanguge()

    //다른 요일 생성
    document.querySelectorAll(".oneDay").addEventListener("click", () => {
        //있던거 지우는 함수
        dayOfWeek(document.querySelector(".oneDay").getAttribute("id").strip("day"))
    })


    //시간 설정
    //1초마다 시간 갱신
    setInterval(function() {
        if (CurrentTimeTable !== CurrentTimeTableChecker()) { //값 다를때만 변경
            CurrentTimeTable = CurrentTimeTableChecker()
            todaytimeTableHighlight()
            //현재시간 표시
            CurrentTimeTableNaturalLanguge()
        } 
    }, 600); //600 = 1초

    //실험 실행
    /* creatTimelineCard(7)
    currentSubjectCard(1, 0) */
})