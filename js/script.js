//Variables
let Q = document.querySelector(".Q");
let question = document.querySelector(".quetion");
let allDivs = document.querySelectorAll("div");
let divA = document.querySelectorAll("div")[0];
let divB = document.querySelectorAll("div")[1];
let divC = document.querySelectorAll("div")[2];
let divD = document.querySelectorAll("div")[3];
let firstTP = document.querySelectorAll(".trackingPoints")[0];
let secondTP = document.querySelectorAll(".trackingPoints")[1];
let thirdTP = document.querySelectorAll(".trackingPoints")[2];
let fourthTP = document.querySelectorAll(".trackingPoints")[3];
let btn = document.querySelector("button");
let article = document.querySelector("article");
let aside = document.querySelector("aside");
let h1 = document.querySelector("h1");
let h4 = document.querySelector("h4");
let p1 = document.querySelectorAll("p")[0];
let p2 = document.querySelectorAll("p")[1];
let p3 = document.querySelectorAll("p")[2];
let retest = document.querySelectorAll("button")[1];

//array of quetion numbers
let QArr = [
    "Q1:",
    "Q2:",
    "Q3:",
    "Q4:"
];
//array of quetions
let questionArr = [
    "What is the capital of morocco ?",
    "what is the official religion of morocco ?",
    "who is the king of morocco ?",
    "what is the population of morocco ?"
];
//array of first quetion choices
let firstQuetionChoices = [
    "A. rabat",
    "B. casablanca",
    "C. Marrakech",
    "D. fes"
];
//array of second quetion choices
let secondQuetionChoices = [
    "A. christianity",
    "B. islam",
    "C. judaism",
    "D. Atheism"
];
//array of third quetion choices
let thirdQuetionChoices = [
    "A. alexander the great",
    "B. i don't know",
    "C. muhamed 6",
    "D. adolf hitler"
];
//array of fourth quetion choices
let fourthQuetionChoices = [
    "A. 40 million",
    "B. 10 million",
    "C. 1 million",
    "D. 37 million"
];

//arrays of true or false choices
const firstAnswer = [];
const secondAnswer = [];
const thirdAnswer = [];
const fourthAnswer = [];
//variables to count time
let timeThen;
let timeNow;
let time;

btn.innerHTML = "beggin";
timeThen = new Date().getTime();
btn.onclick = () => {
    time = new Date().getTime();
    btn.innerHTML = "next";
    Q.innerHTML = QArr[0];
    question.innerHTML = questionArr[0];
    divA.innerHTML = firstQuetionChoices[0];
    divB.innerHTML = firstQuetionChoices[1];
    divC.innerHTML = firstQuetionChoices[2];
    divD.innerHTML = firstQuetionChoices[3];
    firstTP.classList.add("active");

    allDivs.forEach((x) => {
        x.onclick = () => {
            if (Q.innerHTML == "Q1:") {
                if (x.innerHTML == "A. rabat") {
                    x.classList.add("trueAnswer");
                    firstAnswer.push(true);
                } else {
                    x.classList.add("falseAnswer");
                    firstAnswer.push(false);
                }
            }
        };
    });

    btn.onclick = () => {
        Q.innerHTML = QArr[1];
        question.innerHTML = questionArr[1];
        divA.innerHTML = secondQuetionChoices[0];
        divB.innerHTML = secondQuetionChoices[1];
        divC.innerHTML = secondQuetionChoices[2];
        divD.innerHTML = secondQuetionChoices[3];
        secondTP.classList.add("active");
        allDivs.forEach((x) => {
            x.classList.remove("trueAnswer");
            x.classList.remove("falseAnswer");
        });

        allDivs.forEach((x) => {
            x.onclick = () => {
                if (Q.innerHTML == "Q2:") {
                    if (x.innerHTML == "B. islam") {
                        x.classList.add("trueAnswer");
                        secondAnswer.push(true);
                    } else {
                        x.classList.add("falseAnswer");
                        secondAnswer.push(false);
                    }
                }
            };
        });

        btn.onclick = () => {
            Q.innerHTML = QArr[2];
            question.innerHTML = questionArr[2];
            divA.innerHTML = thirdQuetionChoices[0];
            divB.innerHTML = thirdQuetionChoices[1];
            divC.innerHTML = thirdQuetionChoices[2];
            divD.innerHTML = thirdQuetionChoices[3];
            thirdTP.classList.add("active");
            allDivs.forEach((x) => {
                x.classList.remove("trueAnswer");
                x.classList.remove("falseAnswer");
            });

            allDivs.forEach((x) => {
                x.onclick = () => {
                    if (Q.innerHTML == "Q3:") {
                        if (x.innerHTML == "C. muhamed 6") {
                            x.classList.add("trueAnswer");
                            thirdAnswer.push(true);
                        } else {
                            x.classList.add("falseAnswer");
                            thirdAnswer.push(false);
                        }
                    }
                };
            });
            btn.onclick = () => {
                Q.innerHTML = QArr[3];
                question.innerHTML = questionArr[3];
                divA.innerHTML = fourthQuetionChoices[0];
                divB.innerHTML = fourthQuetionChoices[1];
                divC.innerHTML = fourthQuetionChoices[2];
                divD.innerHTML = fourthQuetionChoices[3];
                fourthTP.classList.add("active");
                allDivs.forEach((x) => {
                    x.classList.remove("trueAnswer");
                    x.classList.remove("falseAnswer");
                });

                allDivs.forEach((x) => {
                    x.onclick = () => {
                        if (Q.innerHTML == "Q4:") {
                            if (x.innerHTML == "D. 37 million") {
                                x.classList.add("trueAnswer");
                                fourthAnswer.push(true);
                            } else {
                                x.classList.add("falseAnswer");
                                fourthAnswer.push(false);
                            }
                        }
                    };
                    timeNow = new Date().getTime();
                });

                btn.innerHTML = "result";

                btn.onclick = () => {
                    time = timeNow - timeThen;
                    let result = [
                        firstAnswer[0],
                        secondAnswer[0],
                        thirdAnswer[0],
                        fourthAnswer[0],
                    ];

                    if (result.every((x) => x == true)) {
                        h1.innerHTML = "you passed the quiz";
                        h4.innerHTML = `it took you ${Math.floor(
                            time / 1000
                        )} seconds to complete the quiz`;
                        p1.innerHTML = `you answerd all the quetions`;
                        p2.innerHTML = `4 correct answers`;
                        p3.innerHTML = `0 incorrect answer`;
                    } else if (result.every((x) => x == false)) {
                        h1.innerHTML = "you failed the quiz";
                        h4.innerHTML = `it took you ${Math.floor(
                            time / 1000
                        )} seconds to complete the quiz`;

                        p1.innerHTML = `you answerd all the quetions`;
                        p2.innerHTML = ` 0 correct answers`;
                        p3.innerHTML = `4 incorrect answer`;
                    } else if (result.every((x) => x == undefined)) {
                        h1.innerHTML = "you failed the quiz";
                        h4.innerHTML = `it took you ${Math.floor(
                            time / 1000
                        )} seconds to complete the quiz`;

                        p1.innerHTML = `you answerd 0  quetion`;
                        p2.innerHTML = ` 0 correct answers`;
                        p3.innerHTML = `0 incorrect answer`;
                    } else if (
                        result.some((x) => x == true) &&
                        result.some((x) => x == false) &&
                        !result.some((x) => x == undefined)
                    ) {
                        let filter1 = result.filter((x) => {
                            return x == true;
                        });
                        let filter2 = result.filter((x) => {
                            return x == false;
                        });
                        h1.innerHTML = "you failed the quiz";
                        h4.innerHTML = `it took you ${Math.floor(
                            time / 1000
                        )} seconds to complete the quiz`;

                        p1.innerHTML = `you answerd all the quetions`;
                        p2.innerHTML = `  ${filter1.length} correct answers`;
                        p3.innerHTML = `${filter2.length} incorrect answer`;
                    } else if (
                        result.some((x) => x == true) &&
                        result.some((x) => x == false) &&
                        result.some((x) => x == undefined)
                    ) {
                        let filter1 = result.filter((x) => {
                            return x == true;
                        });
                        let filter2 = result.filter((x) => {
                            return x == false;
                        });
                        let filter3 = result.filter((x) => {
                            return x == undefined;
                        });
                        h1.innerHTML = "you failed the quiz";
                        h4.innerHTML = `it took you ${Math.floor(
                            time / 1000
                        )} seconds to complete the quiz`;

                        p1.innerHTML = `you didn't answer ${filter3.length}  quetions`;
                        p2.innerHTML = `  ${filter1.length} correct answers`;
                        p3.innerHTML = `${filter2.length} incorrect answer`;
                    } else if (
                        result.some((x) => x == true) &&
                        result.some((x) => x == undefined)
                    ) {
                        let filter1 = result.filter((x) => {
                            return x == false;
                        });
                        let filter2 = result.filter((x) => {
                            return x == true;
                        });
                        let filter3 = result.filter((x) => {
                            return x == undefined;
                        });
                        h1.innerHTML = "you failed the quiz";
                        h4.innerHTML = `it took you ${Math.floor(
                            time / 1000
                        )} seconds to complete the quiz`;

                        p1.innerHTML = `you didn't answer ${filter3.length}  quetions`;
                        p2.innerHTML = `  ${filter2.length} correct answers`;
                        p3.innerHTML = `${filter1.length} incorrect answer`;
                    } else if (
                        result.some((x) => x == false) &&
                        result.some((x) => x == undefined)
                    ) {
                        let filter1 = result.filter((x) => {
                            return x == false;
                        });
                        let filter2 = result.filter((x) => {
                            return x == true;
                        });
                        let filter3 = result.filter((x) => {
                            return x == undefined;
                        });
                        h1.innerHTML = "you failed the quiz";
                        h4.innerHTML = `it took you ${Math.floor(
                            time / 1000
                        )} seconds to complete the quiz`;

                        p1.innerHTML = `you didn't answer ${filter3.length}  quetions`;
                        p2.innerHTML = `  ${filter2.length} correct answers`;
                        p3.innerHTML = `${filter1.length} incorrect answer`;
                    }
                    article.style.display = "block";
                    aside.classList.add("overlay");

                    retest.onclick = () => {
                        location.reload();
                    };
                };
            };
        };
    };
};
