const questions = [
  {
    question: "성폭력 예방을 위해 가장 바람직한 태도는 무엇입니까?",
    choices: [
      "상대방의 의사를 확인하고 경계를 존중한다.",
      "친한 사이면 동의가 필요 없다.",
      "불편함을 표현하지 않으면 괜찮다.",
      "상대방이 참아야 한다."
    ],
    answer: 0,
    explanation: "친한 관계인지 여부와 관계없이 상대방의 의사와 개인적 경계를 존중하는 것이 중요합니다."
  },
  {
    question: "직장 내 성희롱이 발생했을 때 적절하지 않은 행동은 무엇입니까?",
    choices: [
      "신뢰할 수 있는 담당자에게 상담한다.",
      "피해자의 이야기를 경청한다.",
      "피해자에 대한 소문을 퍼뜨린다.",
      "관련 절차를 확인한다."
    ],
    answer: 2,
    explanation: "피해 사실을 소문으로 퍼뜨리는 행동은 피해자에게 추가적인 고통을 주는 2차 피해가 될 수 있습니다."
  },
  {
    question: "성폭력 피해 발생 시 2차 피해에 해당할 수 있는 것은?",
    choices: [
      "피해 사실을 믿고 지지한다.",
      "피해자에게 책임을 묻거나 비난한다.",
      "상담기관 정보를 안내한다.",
      "개인정보를 보호한다."
    ],
    answer: 1,
    explanation: "피해자에게 책임을 묻거나 비난하는 것은 피해 이후 추가적인 피해를 줄 수 있는 대표적인 2차 피해입니다."
  },
  {
    question: "디지털 성범죄 예방과 관련하여 옳은 것은?",
    choices: [
      "동의 없는 촬영·유포·공유는 해서는 안 된다.",
      "친구끼리는 자유롭게 공유해도 된다.",
      "삭제 요청을 받으면 무시해도 된다.",
      "온라인에서는 책임이 없다."
    ],
    answer: 0,
    explanation: "디지털 공간에서도 상대방의 동의와 개인정보 보호가 중요하며 동의 없는 촬영과 공유는 해서는 안 됩니다."
  },
  {
    question: "상대방이 불편함을 표현했을 때 가장 적절한 행동은?",
    choices: [
      "장난이므로 계속한다.",
      "상대방이 예민하다고 말한다.",
      "즉시 행동을 멈추고 의사를 존중한다.",
      "다른 사람에게 이야기한다."
    ],
    answer: 2,
    explanation: "상대방이 불편함을 표현하면 자신의 의도와 관계없이 즉시 행동을 멈추고 의사를 존중해야 합니다."
  },
  {
    question: "성폭력 예방은 누구의 책임입니까?",
    choices: [
      "피해자 개인만의 책임",
      "가해자와 피해자만의 문제",
      "모든 구성원이 함께 만드는 조직문화의 과제",
      "관리자만의 책임"
    ],
    answer: 2,
    explanation: "성폭력 예방과 안전한 조직문화 조성은 특정 개인만의 책임이 아니라 모든 구성원이 함께 만들어 가야 합니다."
  },
  {
    question: "성적 농담이나 외모 평가에 대한 설명으로 옳은 것은?",
    choices: [
      "상대방이 불편할 수 있으므로 주의해야 한다.",
      "웃으면 항상 동의한 것이다.",
      "친한 동료에게는 문제가 없다.",
      "한 번만 하면 괜찮다."
    ],
    answer: 0,
    explanation: "성적 농담이나 외모 평가는 관계와 횟수에 관계없이 상대방에게 불편함이나 피해를 줄 수 있으므로 주의해야 합니다."
  },
  {
    question: "피해 사실을 알게 된 동료의 적절한 태도는?",
    choices: [
      "사실 여부를 단정하고 비난한다.",
      "피해자의 의사를 존중하고 필요한 도움을 안내한다.",
      "소문을 확인하기 위해 여러 사람에게 묻는다.",
      "개인 SNS에 공유한다."
    ],
    answer: 1,
    explanation: "피해자의 의사를 존중하고 개인정보를 보호하며 필요한 상담과 지원 정보를 안내하는 것이 중요합니다."
  },
  {
    question: "성폭력 예방을 위한 조직문화로 가장 적절한 것은?",
    choices: [
      "위계와 친분에 따라 기준을 다르게 적용한다.",
      "문제 제기를 어렵게 만든다.",
      "상호 존중과 안전한 의사표현을 보장한다.",
      "불편함을 개인적으로 참게 한다."
    ],
    answer: 2,
    explanation: "누구나 안전하게 자신의 의견과 불편함을 표현할 수 있는 상호 존중의 조직문화가 중요합니다."
  },
  {
    question: "교육 내용을 실천하는 방법으로 적절한 것은?",
    choices: [
      "내 행동이 상대방에게 불편하지 않은지 살핀다.",
      "상대방의 경계를 가볍게 여긴다.",
      "문제가 생기면 무조건 숨긴다.",
      "피해자에게 먼저 책임을 묻는다."
    ],
    answer: 0,
    explanation: "일상생활에서 자신의 행동이 상대방에게 불편함을 주지 않는지 살피고 서로의 경계를 존중하는 것이 예방의 시작입니다."
  }
];


/* =========================
   Google Apps Script 연결
========================= */

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyl6Qq03k4zIjHv8buA_TqtYVy4vLVmeYde2j68LD59XqpKBATQFaetN36EDyMTPLi2mQ/exec";

const TRAINING_NAME =
  "2026 교직원 성폭력 교육";


let userName = "";
let currentQuestion = 0;
let answers = [];
let score = 0;

let canvas;
let ctx;
let drawing = false;
let hasSignature = false;


/* =========================
   시작
========================= */

function startTraining() {
  const nameInput =
    document.getElementById("name");

  userName =
    nameInput.value.trim();

  if (!userName) {
    alert("성명을 입력해 주세요.");
    nameInput.focus();
    return;
  }

  hideAllSteps();

  document
    .getElementById("videoStep")
    .classList
    .remove("hidden");

  scrollTop();
}


/* =========================
   모든 단계 숨기기
========================= */

function hideAllSteps() {

  const steps = [
    "start",
    "videoStep",
    "summaryStep",
    "quizStep",
    "resultStep",
    "wrongStep",
    "messageStep",
    "surveyStep",
    "completeStep"
  ];

  steps.forEach(function(id) {

    const element =
      document.getElementById(id);

    if (element) {
      element.classList.add("hidden");
    }

  });

}


/* =========================
   STEP 1 영상 보기
========================= */

function watchVideo() {

  document
    .getElementById("videoChoice")
    .classList
    .add("hidden");

  document
    .getElementById("videoPlayer")
    .classList
    .remove("hidden");

  document
    .getElementById("videoNextButton")
    .classList
    .remove("hidden");

}


/* =========================
   영상 나중에 보기
========================= */

function skipVideo() {

  const confirmed =
    confirm(
      "영상을 나중에 시청하시겠습니까?\n교육 내용 요점 정리로 이동합니다."
    );

  if (confirmed) {
    showSummary();
  }

}


/* =========================
   STEP 2 요점 정리
========================= */

function showSummary() {

  hideAllSteps();

  document
    .getElementById("summaryStep")
    .classList
    .remove("hidden");

  scrollTop();

}


/* =========================
   STEP 3 퀴즈 시작
========================= */

function startQuiz() {

  currentQuestion = 0;
  answers = [];
  score = 0;

  hideAllSteps();

  document
    .getElementById("quizStep")
    .classList
    .remove("hidden");

  renderQuestion();

  scrollTop();

}


/* =========================
   문제 표시
========================= */

function renderQuestion() {

  const question =
    questions[currentQuestion];

  const progress =
    document.getElementById(
      "quizProgress"
    );

  const content =
    document.getElementById(
      "quizContent"
    );

  progress.innerHTML =
    '<div class="quiz-progress">' +
    '문제 ' +
    (currentQuestion + 1) +
    ' / ' +
    questions.length +
    '</div>';

  let html = '';

  html += '<div class="question">';

  html +=
    '<h3>' +
    question.question +
    '</h3>';

  question.choices.forEach(
    function(choice, index) {

      html +=
        '<label class="choice">' +
        '<input type="radio" name="quizAnswer" value="' +
        index +
        '"> ' +
        String.fromCharCode(9312 + index) +
        ' ' +
        choice +
        '</label>';

    }
  );

  html +=
    '<button type="button" onclick="checkAnswer()">' +
    '정답 확인하기' +
    '</button>';

  html += '</div>';

  content.innerHTML = html;

}


/* =========================
   정답 확인
========================= */

function checkAnswer() {

  const selected =
    document.querySelector(
      'input[name="quizAnswer"]:checked'
    );

  if (!selected) {
    alert("답을 선택해 주세요.");
    return;
  }

  const selectedAnswer =
    Number(selected.value);

  answers[currentQuestion] =
    selectedAnswer;

  const question =
    questions[currentQuestion];

  const isCorrect =
    selectedAnswer === question.answer;

  if (isCorrect) {
    score++;
  }

  const labels =
    document.querySelectorAll(
      "#quizContent .choice"
    );

  labels.forEach(
    function(label, index) {

      const input =
        label.querySelector("input");

      input.disabled = true;

      if (index === question.answer) {
        label.classList.add("correct");
      }

      if (
        index === selectedAnswer &&
        !isCorrect
      ) {
        label.classList.add("incorrect");
      }

    }
  );

  const button =
    document.querySelector(
      "#quizContent .question button"
    );

  if (button) {
    button.remove();
  }

  let feedback = "";

  feedback +=
    '<div class="answer-feedback ' +
    (
      isCorrect
        ? "feedback-correct"
        : "feedback-wrong"
    ) +
    '">';

  feedback +=
    '<h3>' +
    (
      isCorrect
        ? "🎉 정답입니다!"
        : "다시 확인해 볼까요?"
    ) +
    '</h3>';

  feedback +=
    '<p><strong>정답:</strong> ' +
    String.fromCharCode(
      9312 + question.answer
    ) +
    ' ' +
    question.choices[
      question.answer
    ] +
    '</p>';

  feedback +=
    '<p><strong>해설:</strong> ' +
    question.explanation +
    '</p>';

  feedback +=
    '<button type="button" onclick="nextQuestion()">' +
    (
      currentQuestion === questions.length - 1
        ? "최종 결과 확인 →"
        : "다음 문제 →"
    ) +
    '</button>';

  feedback += '</div>';

  document
    .getElementById("quizContent")
    .insertAdjacentHTML(
      "beforeend",
      feedback
    );

}


/* =========================
   다음 문제
========================= */

function nextQuestion() {

  if (
    currentQuestion <
    questions.length - 1
  ) {

    currentQuestion++;

    renderQuestion();

    scrollTop();

  } else {

    showResult();

  }

}


/* =========================
   STEP 4 결과
========================= */

function showResult() {

  hideAllSteps();

  const resultStep =
    document.getElementById(
      "resultStep"
    );

  resultStep
    .classList
    .remove("hidden");

  const points =
    score * 10;

  const wrongCount =
    questions.length - score;

  resultStep.innerHTML =
    '<div class="step-badge">STEP 4</div>' +

    '<h2>최종 결과</h2>' +

    '<div class="result-score">' +

    '<p>' +
    userName +
    ' 선생님의 점수</p>' +

    '<h1>' +
    points +
    '점</h1>' +

    '<p>' +
    questions.length +
    '문제 중 ' +
    score +
    '문제 정답</p>' +

    '</div>' +

    '<p class="' +
    (
      points >= 80
        ? "pass"
        : "fail"
    ) +
    '">' +

    (
      points >= 80
        ? "🎉 교육 이수 기준을 충족했습니다."
        : "교육 내용을 다시 확인해 주세요."
    ) +

    '</p>' +

    '<button type="button" onclick="' +

    (
      wrongCount > 0
        ? "showWrongAnswers()"
        : "showKeyMessage()"
    ) +

    '">' +

    (
      wrongCount > 0
        ? "오답 확인하기 →"
        : "핵심 메시지 확인 →"
    ) +

    '</button>';

  scrollTop();

}


/* =========================
   STEP 5 오답 확인
========================= */

function showWrongAnswers() {

  hideAllSteps();

  document
    .getElementById("wrongStep")
    .classList
    .remove("hidden");

  const wrongList =
    document.getElementById(
      "wrongList"
    );

  let html = "";

  questions.forEach(
    function(question, index) {

      if (
        answers[index] !==
        question.answer
      ) {

        html +=
          '<div class="wrong-answer">';

        html +=
          '<h3>문제 ' +
          (index + 1) +
          '</h3>';

        html +=
          '<p>' +
          question.question +
          '</p>';

        html +=
          '<p><strong>정답:</strong> ' +
          String.fromCharCode(
            9312 + question.answer
          ) +
          ' ' +
          question.choices[
            question.answer
          ] +
          '</p>';

        html +=
          '<p><strong>해설:</strong> ' +
          question.explanation +
          '</p>';

        html +=
          '</div>';

      }

    }
  );

  wrongList.innerHTML = html;

  scrollTop();

}


/* =========================
   STEP 6 핵심 메시지
========================= */

function showKeyMessage() {

  hideAllSteps();

  document
    .getElementById("messageStep")
    .classList
    .remove("hidden");

  setTimeout(
    function() {
      initSignatureCanvas();
    },
    100
  );

  scrollTop();

}


/* =========================
   직접 서명 선택
========================= */

function showCanvasSignature() {

  document
    .getElementById("canvasSignature")
    .classList
    .remove("hidden");

}


/* =========================
   캔버스 서명
========================= */

function initSignatureCanvas() {

  canvas =
    document.getElementById(
      "signatureCanvas"
    );

  if (!canvas) {
    return;
  }

  ctx =
    canvas.getContext("2d");

  ctx.lineWidth = 2;
  ctx.lineCap = "round";


  function getPosition(event) {

    const rect =
      canvas.getBoundingClientRect();

    if (event.touches) {

      return {
        x:
          event.touches[0].clientX -
          rect.left,

        y:
          event.touches[0].clientY -
          rect.top
      };

    }

    return {
      x:
        event.clientX -
        rect.left,

      y:
        event.clientY -
        rect.top
    };

  }


  function startDrawing(event) {

    drawing = true;

    const position =
      getPosition(event);

    ctx.beginPath();

    ctx.moveTo(
      position.x,
      position.y
    );

    hasSignature = true;

  }


  function draw(event) {

    if (!drawing) {
      return;
    }

    event.preventDefault();

    const position =
      getPosition(event);

    ctx.lineTo(
      position.x,
      position.y
    );

    ctx.stroke();

  }


  function stopDrawing() {
    drawing = false;
  }


  canvas.onmousedown =
    startDrawing;

  canvas.onmousemove =
    draw;

  canvas.onmouseup =
    stopDrawing;

  canvas.onmouseleave =
    stopDrawing;

  canvas.ontouchstart =
    startDrawing;

  canvas.ontouchmove =
    draw;

  canvas.ontouchend =
    stopDrawing;

}


/* =========================
   서명 지우기
========================= */

function clearSignature() {

  if (!canvas || !ctx) {
    return;
  }

  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  hasSignature = false;

}


/* =========================
   서명 확인
========================= */

function confirmSignature() {

  if (!hasSignature) {

    alert("서명을 작성해 주세요.");

    return;

  }

  hideAllSteps();

  document
    .getElementById("surveyStep")
    .classList
    .remove("hidden");

  scrollTop();

}


/* =========================
   STEP 7 만족도 및 완료
========================= */

function completeTraining() {

  const understanding =
    document
      .getElementById("understanding")
      .value;

  const usefulness =
    document
      .getElementById("usefulness")
      .value;

  const comment =
    document
      .getElementById("comment")
      .value
      .trim();


  /* 서명 이미지 저장 */

  let signature = "";

  if (canvas && hasSignature) {

    signature =
      canvas.toDataURL(
        "image/png"
      );

  }


  /* 저장할 교육 기록 */

  const record = {

    trainingName:
      TRAINING_NAME,

    name:
      userName,

    score:
      score * 10,

    completedAt:
      new Date()
        .toLocaleString("ko-KR"),

    signature:
      signature,

    understanding:
      understanding,

    usefulness:
      usefulness,

    comment:
      comment

  };


  /* 기존 브라우저 저장 */

  let records = [];

  try {

    records =
      JSON.parse(
        localStorage.getItem(
          "wooshinTrainingRecords"
        ) || "[]"
      );

  } catch (error) {

    records = [];

  }

  records.push(record);

  localStorage.setItem(
    "wooshinTrainingRecords",
    JSON.stringify(records)
  );


  /* Google Apps Script로 전송 */

  fetch(
    GOOGLE_SCRIPT_URL,
    {
      method: "POST",

      mode: "no-cors",

      headers: {
        "Content-Type":
          "text/plain;charset=utf-8"
      },

      body:
        JSON.stringify(record)
    }
  )
  .then(function() {

    console.log(
      "구글 스프레드시트 저장 요청 완료"
    );

  })
  .catch(function(error) {

    console.error(
      "구글 저장 오류:",
      error
    );

  });


  /* 완료 화면 */

  hideAllSteps();

  const completeStep =
    document.getElementById(
      "completeStep"
    );

  completeStep
    .classList
    .remove("hidden");

  completeStep.innerHTML =

    '<h2>🎉 교육 이수가 완료되었습니다</h2>' +

    '<div class="completion-box">' +

    '<p><strong>' +
    userName +
    '</strong> 선생님의 교육 이수 기록이 저장되었습니다.</p>' +

    '<p>이수 점수: ' +
    score * 10 +
    '점</p>' +

    '<p>완료 일시: ' +
    record.completedAt +
    '</p>' +

    '</div>' +

    '<button type="button" onclick="location.reload()">' +
    '처음으로 돌아가기' +
    '</button>';

  scrollTop();

}


/* =========================
   화면 맨 위로 이동
========================= */

function scrollTop() {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}
