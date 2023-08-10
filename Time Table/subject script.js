document.addEventListener("DOMContentLoaded", () => {
    //과목객체
    const sbject = [{ 
        name: "빅데이터 분석",
        teacher: "설희준",
        classroom: "ai실",
        band: "나"
    }, { //Two teacher
        name: "공학 일반",
        teacher: "기술과강사1",
        teacherB: "최세원",
        classroom: "기술실",
        band: "바"
    }, {
        name: "창의 경영",
        teacher: "강대영",
        classroom: "3-4",
        band: "마"
    }, {
        name: "스포츠와 생활",
        teacher: "강은일",
        classroom: "체육관",
        band: "라"
    }, {
        name: "입체 조형",
        teacher: "박영환",
        classroom: "미술실",
        band: "가" 
    }, {
        name: "물리학 실험",
        teacher: "정혁준",
        classroom: "물리실",
        band: "다"
    }, { //Two teacher
        name: "논리학",
        teacherA: "이민경",
        teacherB: "허선아",
        classroom: "3-4",
        band: "사"
    }, {
        name: "한국사",
        teacher: "이계완",
        classroom: "3-4",
        band: "라"
    }, {
        name: "진로활동",
        teacher: "김성경",
        classroom: "3-4",
        band: NaN
    }, {
        name: "자율활동",
        teacher: "류세영",
        classroom: "3-4",
        band: NaN
    }]

    function currentSubjectCard(subjectNumber) {
        document.querySelector("classLogo").src = `./painting/Logo/${subject[subjectNumber].name}.png`
        document.querySelector("#name").textContent = sbject[subjectNumber].name
        document.querySelector("#teacher").textContent += sbject[subjectNumber].teacher
        document.querySelector("#classroom").textContent += sbject[subjectNumber].classroom
        document.querySelector("#band").textContent += `(${sbject[subjectNumber].band}) Band`
    }

    currentSubjectCard(0)
})