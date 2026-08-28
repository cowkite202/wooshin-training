const questions = [
[
"성폭력 예방을 위해 가장 바람직한 태도는 무엇입니까?",
[
"상대방의 의사를 확인하고 경계를 존중한다.",
"친한 사이면 동의가 필요 없다.",
"불편함을 표현하지 않으면 괜찮다.",
"상대방이 참아야 한다."
],
0
],
[
"직장 내 성희롱이 발생했을 때 적절하지 않은 행동은 무엇입니까?",
[
"신뢰할 수 있는 담당자에게 상담한다.",
"피해자의 이야기를 경청한다.",
"피해자에 대한 소문을 퍼뜨린다.",
"관련 절차를 확인한다."
],
2
],
[
"성폭력 피해 발생 시 2차 피해에 해당할 수 있는 것은?",
[
"피해 사실을 믿고 지지한다.",
"피해자에게 책임을 묻거나 비난한다.",
"상담기관 정보를 안내한다.",
"개인정보를 보호한다."
],
1
],
[
"디지털 성범죄 예방과 관련하여 옳은 것은?",
[
"동의 없는 촬영·유포·공유는 해서는 안 된다.",
"친구끼리는 자유롭게 공유해도 된다.",
"삭제 요청을 받으면 무시해도 된다.",
"온라인에서는 책임이 없다."
],
0
],
[
"상대방이 불편함을 표현했을 때 가장 적절한 행동은?",
[
"장난이므로 계속한다.",
"상대방이 예민하다고 말한다.",
"즉시 행동을 멈추고 의사를 존중한다.",
"다른 사람에게 이야기한다."
],
2
],
[
"성폭력 예방은 누구의 책임입니까?",
[
"피해자 개인만의 책임",
"가해자와 피해자만의 문제",
"모든 구성원이 함께 만드는 조직문화의 과제",
"관리자만의 책임"
],
2
],
[
"성적 농담이나 외모 평가에 대한 설명으로 옳은 것은?",
[
"상대방이 불편할 수 있으므로 주의해야 한다.",
"웃으면 항상 동의한 것이다.",
"친한 동료에게는 문제가 없다.",
"한 번만 하면 괜찮다."
],
0
],
[
"피해 사실을 알게 된 동료의 적절한 태도는?",
[
"사실 여부를 단정하고 비난한다.",
"피해자의 의사를 존중하고 필요한 도움을 안내한다.",
"소문을 확인하기 위해 여러 사람에게 묻는다.",
"개인 SNS에 공유한다."
],
1
],
[
"성폭력 예방을 위한 조직문화로 가장 적절한 것은?",
[
"위계와 친분에 따라 기준을 다르게 적용한다.",
"문제 제기를 어렵게 만든다.",
"상호 존중과 안전한 의사표현을 보장한다.",
"불편함을 개인적으로 참게 한다."
],
2
],
[
"교육 내용을 실천하는 방법으로 적절한 것은?",
[
"내 행동이 상대방에게 불편하지 않은지 살핀다.",
"상대방의 경계를 가볍게 여긴다.",
"문제가 생기면 무조건 숨긴다.",
"피해자에게 먼저 책임을 묻는다."
],
0
]
];

let userName = "";
let score = 0;

/* =========================

교육 시작
========================= */

function startTraining() {
const nameInput = document.getElementById("name");

userName = nameInput.value.trim();

if (!userName) {
alert("성명을 입력해 주세요.");
nameInput.focus();
return;
}

document.getElementById("start").classList.add("hidden");
document.getElementById("training").classList.remove("hidden");

window.scrollTo({
top: 0,
behavior: "smooth"
});
}

/* =========================
2. 확인 퀴즈 표시
========================= */

function showQuiz() {
document.getElementById("training").classList.add("hidden");
document.getElementById("quizSection").classList.remove("hidden");

const form = document.getElementById("quizForm");

let html = "";

questions.forEach(function (q, i) {

html += '<div class="question">';
html += '<p><strong>' + (i + 1) + '. ' + q[0] + '</strong></p>';

q[1].forEach(function (choice, j) {

  html +=
    '<label class="choice">' +
    '<input type="radio" name="q' + i + '" value="' + j + '"> ' +
    String.fromCharCode(9312 + j) +
    ' ' +
    choice +
    '</label>';

});

html += '</div>';

});

form.innerHTML = html;

window.scrollTo({
top: 0,
behavior: "smooth"
});
}

/* =========================
3. 퀴즈 채점
========================= */

function gradeQuiz() {

let answered = 0;
score = 0;

questions.forEach(function (q, i) {

const selected = document.querySelector(
  'input[name="q' + i + '"]:checked'
);

if (selected) {

  answered++;

  if (Number(selected.value) === q[2]) {
    score++;
  }

}

});

if (answered < questions.length) {
alert("10문항 모두 답해 주세요.");
return;
}

const points = score * 10;
const pass = points >= 80;

document.getElementById("quizSection").classList.add("hidden");

const result = document.getElementById("result");

result.classList.remove("hidden");

if (pass) {

result.innerHTML =
  '<h2>채점 결과</h2>' +
  '<p><strong>' + userName + '</strong> 선생님의 점수는 ' +
  '<strong>' + points + '점</strong>입니다.</p>' +
  '<p class="pass">🎉 교육 이수 기준을 충족했습니다.</p>' +
  '<button onclick="showSurvey()">만족도 조사로 이동</button>';

} else {

result.innerHTML =
  '<h2>채점 결과</h2>' +
  '<p><strong>' + userName + '</strong> 선생님의 점수는 ' +
  '<strong>' + points + '점</strong>입니다.</p>' +
  '<p class="fail">아쉽지만 80점 이상이 필요합니다. 다시 응시해 주세요.</p>' +
  '<button onclick="retryQuiz()">다시 응시하기</button>';

}

window.scrollTo({
top: 0,
behavior: "smooth"
});

}

/* =========================
4. 퀴즈 다시 응시
========================= */

function retryQuiz() {

document.getElementById("result").classList.add("hidden");

document.getElementById("quizSection").classList.remove("hidden");

const radios = document.querySelectorAll(
'#quizForm input[type="radio"]'
);

radios.forEach(function (radio) {
radio.checked = false;
});

window.scrollTo({
top: 0,
behavior: "smooth"
});

}

/* =========================
5. 만족도 조사
========================= */

function showSurvey() {

document.getElementById("result").classList.add("hidden");

document.getElementById("survey").classList.remove("hidden");

window.scrollTo({
top: 0,
behavior: "smooth"
});

}

/* =========================
6. 교육 완료 및 기록 저장
========================= */

function completeTraining() {

const understanding = document.getElementById("understanding").value;

const usefulness = document.getElementById("usefulness").value;

const comment = document.getElementById("comment").value.trim();

const record = {

name: userName,

score: score * 10,

completedAt: new Date().toLocaleString("ko-KR"),

understanding: understanding,

usefulness: usefulness,

comment: comment

};

let records;

try {

records = JSON.parse(
  localStorage.getItem("wooshinTrainingRecords") || "[]"
);

} catch (error) {

records = [];

}

records.push(record);

localStorage.setItem(
"wooshinTrainingRecords",
JSON.stringify(records)
);

document.getElementById("survey").classList.add("hidden");

const complete = document.getElementById("complete");

complete.classList.remove("hidden");

complete.innerHTML =
'<h2>🎉 교육 이수가 완료되었습니다</h2>' +
'<p><strong>' + userName +
'</strong> 선생님의 교육 이수 기록이 저장되었습니다.</p>' +
'<p>' +
'이수 점수: ' + score * 10 + '점<br>' +
'완료 일시: ' + record.completedAt +
'</p>';

window.scrollTo({
top: 0,
behavior: "smooth"
});

}
