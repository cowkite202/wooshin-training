const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyl6Qq03k4zIjHv8buA_TqtYVy4vLVmeYde2j68LD59XqpKBATQFaetN36EDyMTPLi2mQ/exec";


/* =====================================================
   교육 페이지
===================================================== */

const trainingPages = [

  {
    title: "1. 성폭력의 이해",
    image: "🛡️",
    content: `
      <h3>성폭력이란 무엇인가요?</h3>

      <p>
        성폭력은 상대방의 의사에 반하여 이루어지는
        성적 언동이나 행위로 인해 상대방에게
        성적 불쾌감이나 수치심 등을 유발하는 행위를 말합니다.
      </p>

      <p>
        학교에서는 교직원과 학생, 교직원 상호 간의 관계에서
        상대방의 인격과 권리를 존중하는 태도가 중요합니다.
      </p>

      <div class="info-box">
        <strong>기억하세요</strong>
        <br>
        상대방이 불편함을 느끼는지 살피고
        자신의 행동이 상대방의 경계를 침해하지 않는지
        항상 확인해야 합니다.
      </div>
    `
  },

  {
    title: "2. 직장 내 성희롱 예방",
    image: "🤝",
    content: `
      <h3>직장 내 성희롱 예방</h3>

      <p>
        직장 내 성희롱은 업무와 관련하여
        상대방에게 성적 굴욕감이나 혐오감을 느끼게 하거나
        불이익을 주는 등의 행위를 포함합니다.
      </p>

      <p>
        외모에 대한 평가, 성적인 농담이나 발언,
        불필요한 신체 접촉 등은 상대방의 의사와 상황에 따라
        문제가 될 수 있습니다.
      </p>

      <div class="info-box">
        <strong>교직원이 기억할 점</strong>
        <br>
        친분이나 농담이라는 이유만으로 상대방의 불편함을
        가볍게 여기지 않습니다.
      </div>
    `
  },

  {
    title: "3. 동의와 개인적 경계",
    image: "💬",
    content: `
      <h3>동의는 명확하고 자발적이어야 합니다.</h3>

      <p>
        상대방이 명확하게 동의하지 않은 행동을
        자신의 의도만으로 정당화해서는 안 됩니다.
      </p>

      <p>
        상대방이 불편함을 표현하거나 거부 의사를 보였다면
        즉시 행동을 멈추고 그 의사를 존중해야 합니다.
      </p>

      <div class="info-box">
        <strong>실천하기</strong>
        <br>
        "괜찮겠지"라고 추측하지 말고
        필요한 경우 상대방의 의사를 직접 확인합니다.
      </div>
    `
  },

  {
    title: "4. 2차 피해 예방",
    image: "❤️",
    content: `
      <h3>피해 이후의 대응도 중요합니다.</h3>

      <p>
        성폭력 피해가 발생한 이후 피해자를 의심하거나
        비난하거나 피해 사실을 주변에 소문내는 행동은
        2차 피해로 이어질 수 있습니다.
      </p>

      <p>
        피해자의 이야기를 경청하고 개인정보와
        피해 사실이 불필요하게 알려지지 않도록 주의해야 합니다.
      </p>

      <div class="info-box">
        <strong>바람직한 태도</strong>
        <br>
        피해자의 의사를 존중하고 필요한 경우
        상담 및 지원기관 정보를 안내합니다.
      </div>
    `
  },

  {
    title: "5. 디지털 성범죄 예방",
    image: "📱",
    content: `
      <h3>온라인에서도 책임은 동일합니다.</h3>

      <p>
        스마트폰과 SNS 등 디지털 공간에서도
        개인정보와 사생활을 존중해야 합니다.
      </p>

      <p>
        상대방의 동의 없이 촬영하거나 저장하거나
        다른 사람에게 전달·공유하는 행동은 해서는 안 됩니다.
      </p>

      <div class="info-box">
        <strong>특히 주의하세요</strong>
        <br>
        단순히 전달하거나 공유하는 행동도
        피해를 확대할 수 있습니다.
      </div>
    `
  },

  {
    title: "6. 안전한 학교문화 만들기",
    image: "🏫",
    content: `
      <h3>모두가 안전한 학교를 만들어 갑니다.</h3>

      <p>
        성폭력 예방은 특정한 사람만의 책임이 아니라
        학교 구성원 모두가 함께 노력해야 하는 과제입니다.
      </p>

      <p>
        서로의 차이와 경계를 존중하고
        누구나 불편함이나 문제를 안전하게 표현할 수 있는
        학교문화를 만드는 것이 중요합니다.
      </p>

      <div class="info-box">
        <strong>우리의 약속</strong>
        <br>
        존중하고, 경청하고, 보호하고,
        필요한 경우 적절한 도움을 요청합니다.
      </div>
    `
  }

];


/* =====================================================
   퀴즈 15문제
===================================================== */

const questions = [

  {
    question: "성폭력 예방을 위해 가장 바람직한 태도는?",
    choices: [
      "상대방의 의사를 확인하고 경계를 존중한다.",
      "친한 사이면 동의가 필요 없다.",
      "불편함을 표현하지 않으면 괜찮다.",
      "상대방이 참아야 한다."
    ],
    answer: 0,
    explanation:
      "상대방의 의사와 개인적 경계를 존중하는 것이 성폭력 예방의 기본입니다."
  },

  {
    question: "직장 내 성희롱 예방을 위해 적절하지 않은 행동은?",
    choices: [
      "상대방의 의사를 존중한다.",
      "성적인 농담을 조심한다.",
      "상대방의 외모를 반복적으로 평가한다.",
      "불편함을 표현하면 행동을 멈춘다."
    ],
    answer: 2,
    explanation:
      "상대방의 외모를 성적으로 평가하는 행동은 상대방에게 불쾌감이나 성적 굴욕감을 줄 수 있습니다."
  },

  {
    question: "상대방이 불편함을 표현했을 때 가장 적절한 행동은?",
    choices: [
      "장난이라고 설명한다.",
      "즉시 행동을 멈춘다.",
      "계속해서 설득한다.",
      "다른 사람에게 이야기한다."
    ],
    answer: 1,
    explanation:
      "상대방이 불편함을 표현하면 즉시 행동을 멈추고 의사를 존중해야 합니다."
  },

  {
    question: "2차 피해에 해당할 수 있는 행동은?",
    choices: [
      "피해자의 이야기를 경청한다.",
      "피해자의 개인정보를 보호한다.",
      "피해자를 비난하거나 책임을 묻는다.",
      "필요한 상담기관을 안내한다."
    ],
    answer: 2,
    explanation:
      "피해자를 비난하거나 책임을 묻는 것은 대표적인 2차 피해가 될 수 있습니다."
  },

  {
    question: "피해 사실을 알게 된 동료의 태도로 적절한 것은?",
    choices: [
      "여러 사람에게 사실을 확인한다.",
      "SNS에 공유한다.",
      "피해자의 의사를 존중한다.",
      "피해자의 행동을 먼저 평가한다."
    ],
    answer: 2,
    explanation:
      "피해자의 의사를 존중하고 개인정보를 보호하는 것이 중요합니다."
  },

  {
    question: "디지털 성범죄 예방과 관련하여 옳은 것은?",
    choices: [
      "친한 친구에게는 사진을 보내도 된다.",
      "온라인에서는 책임이 없다.",
      "동의 없는 촬영과 공유를 하지 않는다.",
      "삭제 요청을 무시해도 된다."
    ],
    answer: 2,
    explanation:
      "디지털 공간에서도 동의와 개인정보 보호 원칙은 동일하게 적용됩니다."
  },

  {
    question: "성적 농담에 대한 설명으로 옳은 것은?",
    choices: [
      "농담이면 항상 문제가 없다.",
      "친한 동료에게는 문제가 없다.",
      "상대방이 불편할 수 있으므로 주의해야 한다.",
      "웃으면 항상 동의한 것이다."
    ],
    answer: 2,
    explanation:
      "농담이라는 의도와 관계없이 상대방에게 불편함이나 성적 굴욕감을 줄 수 있습니다."
  },

  {
    question: "동의에 대한 설명으로 옳은 것은?",
    choices: [
      "침묵은 항상 동의이다.",
      "친분이 있으면 동의가 필요 없다.",
      "상대방의 의사를 확인하는 것이 중요하다.",
      "한 번 동의하면 언제나 동의한 것이다."
    ],
    answer: 2,
    explanation:
      "상대방의 의사는 상황에 따라 달라질 수 있으므로 필요한 경우 확인해야 합니다."
  },

  {
    question: "안전한 학교문화에 필요한 것은?",
    choices: [
      "문제 제기를 어렵게 한다.",
      "상호 존중을 실천한다.",
      "불편함을 개인적으로 참는다.",
      "위계에 따라 기준을 다르게 적용한다."
    ],
    answer: 1,
    explanation:
      "상호 존중과 안전한 의사표현이 가능한 조직문화가 중요합니다."
  },

  {
    question: "피해자에게 가장 적절한 태도는?",
    choices: [
      "왜 그런 행동을 했는지 따진다.",
      "사실인지 계속 확인한다.",
      "피해자의 말을 경청한다.",
      "주변 사람에게 알린다."
    ],
    answer: 2,
    explanation:
      "피해자의 말을 경청하고 필요한 도움을 안내하는 것이 중요합니다."
  },

  {
    question: "성폭력 예방의 책임은 누구에게 있습니까?",
    choices: [
      "피해자에게만 있다.",
      "관리자에게만 있다.",
      "가해자와 피해자에게만 있다.",
      "모든 구성원에게 있다."
    ],
    answer: 3,
    explanation:
      "안전한 조직문화를 만드는 것은 모든 구성원이 함께 노력해야 하는 과제입니다."
  },

  {
    question: "상대방의 경계를 존중하는 방법은?",
    choices: [
      "상대방이 싫어해도 장난을 계속한다.",
      "상대방의 의사를 확인한다.",
      "친분을 이유로 행동을 정당화한다.",
      "불편함을 무시한다."
    ],
    answer: 1,
    explanation:
      "상대방의 의사를 확인하고 경계를 존중하는 것이 중요합니다."
  },

  {
    question: "성희롱 예방을 위한 행동은?",
    choices: [
      "외모에 대한 평가를 반복한다.",
      "성적인 농담을 자주 한다.",
      "상대방이 불편해할 수 있는 행동을 살핀다.",
      "거부 의사를 무시한다."
    ],
    answer: 2,
    explanation:
      "자신의 행동이 상대방에게 어떻게 받아들여질 수 있는지 살피는 태도가 필요합니다."
  },

  {
    question: "디지털 공간에서 개인정보 보호를 위해 필요한 것은?",
    choices: [
      "동의 없이 사진을 공유한다.",
      "개인정보를 보호한다.",
      "단체 채팅방에 자유롭게 올린다.",
      "삭제 요청을 무시한다."
    ],
    answer: 1,
    explanation:
      "디지털 공간에서도 개인정보와 사생활을 보호해야 합니다."
  },

  {
    question: "교육 내용을 실천하는 가장 좋은 방법은?",
    choices: [
      "상대방의 경계를 존중한다.",
      "문제를 숨긴다.",
      "피해자에게 책임을 묻는다.",
      "불편함을 무시한다."
    ],
    answer: 0,
    explanation:
      "서로의 경계를 존중하고 안전한 의사소통을 실천하는 것이 예방의 시작입니다."
  }

];


/* =====================================================
   전역 변수
===================================================== */

let userName = "";

let currentPage = 0;

let currentQuestion = 0;

let score = 0;

let retryUsed = false;

let answers = [];

let canvas = null;

let ctx = null;

let hasSignature = false;


/* =====================================================
   시작
===================================================== */

async function startTraining() {

  const input =
    document.getElementById("name");

  userName =
    input.value.trim();

  if (!userName) {

    alert("성명을 입력해 주세요.");

    input.focus();

    return;

  }

  const button =
    document.querySelector("#start button");

  button.disabled = true;

  button.innerText =
    "이수 여부 확인 중...";


  try {

    const response =
      await fetch(
        GOOGLE_SCRIPT_URL +
        "?action=check&name=" +
        encodeURIComponent(userName)
      );

    const data =
      await response.json();


    if (data.completed) {

      alert(
        userName +
        " 선생님은 이미 교육을 이수하셨습니다."
      );

      button.disabled = false;

      button.innerText =
        "교육 시작하기";

      return;

    }


    hideAllSteps();

    document
      .getElementById("videoStep")
      .classList
      .remove("hidden");

    scrollTop();


  } catch (error) {

    console.error(error);

    alert(
      "이수 여부 확인 중 오류가 발생했습니다.\n잠시 후 다시 시도해 주세요."
    );

    button.disabled = false;

    button.innerText =
      "교육 시작하기";

  }

}


/* =====================================================
   단계 숨기기
===================================================== */

function hideAllSteps() {

  const ids = [

    "start",
    "videoStep",
    "summaryStep",
    "trainingStep",
    "quizStep",
    "resultStep",
    "wrongStep",
    "messageStep",
    "surveyStep",
    "completeStep"

  ];


  ids.forEach(function(id) {

    const element =
      document.getElementById(id);

    if (element) {

      element.classList.add("hidden");

    }

  });

}


/* =====================================================
   영상
===================================================== */

function watchVideo() {

  document
    .getElementById("videoChoice")
    .classList
    .add("hidden");

  document
    .getElementById("videoPlayer")
    .classList
    .remove("hidden");


  /*
     영상을 실제로 시청한 후
     사용자가 완료 버튼을 누르도록 구성
  */

  setTimeout(function() {

    document
      .getElementById("videoNextButton")
      .classList
      .remove("hidden");

  }, 1000);

}


function skipVideo() {

  alert(
    "교육 영상을 먼저 시청해야 다음 단계로 이동할 수 있습니다."
  );

}


/* =====================================================
   영상 다음
===================================================== */

function showSummary() {

  hideAllSteps();

  document
    .getElementById("summaryStep")
    .classList
    .remove("hidden");

  scrollTop();

}


/* =====================================================
   6개 교육 페이지 시작
===================================================== */

function startTrainingPages() {

  currentPage = 0;

  hideAllSteps();

  document
    .getElementById("trainingStep")
    .classList
    .remove("hidden");

  renderTrainingPage();

  scrollTop();

}


/* =====================================================
   교육 페이지 표시
===================================================== */

function renderTrainingPage() {

  const page =
    trainingPages[currentPage];

  const container =
    document.getElementById(
      "trainingContent"
    );


  container.innerHTML = `

    <div class="training-image">
      ${page.image}
    </div>

    <h2>
      ${page.title}
    </h2>

    <div class="training-text">
      ${page.content}
    </div>

    <label class="confirm-check">

      <input
        type="checkbox"
        id="pageCheck"
        onchange="togglePageButton()"
      >

      <span>
        위 교육 내용을 확인하고 숙지했습니다.
      </span>

    </label>

  `;


  const nextButton =
    document.getElementById(
      "trainingNextButton"
    );

  nextButton.disabled = true;

  nextButton.innerText =
    currentPage === trainingPages.length - 1
      ? "퀴즈 시작하기 →"
      : "다음 페이지 →";


  updatePageProgress();

}


function togglePageButton() {

  const check =
    document.getElementById("pageCheck");

  const button =
    document.getElementById(
      "trainingNextButton"
    );

  button.disabled =
    !check.checked;

}


function nextTrainingPage() {

  const check =
    document.getElementById("pageCheck");

  if (!check || !check.checked) {

    return;

  }


  if (
    currentPage <
    trainingPages.length - 1
  ) {

    currentPage++;

    renderTrainingPage();

    scrollTop();

  } else {

    startQuiz();

  }

}


function updatePageProgress() {

  const progress =
    document.getElementById(
      "trainingProgress"
    );

  progress.innerText =
    "교육 내용 " +
    (currentPage + 1) +
    " / " +
    trainingPages.length;

}


/* =====================================================
   퀴즈 시작
===================================================== */

function startQuiz() {

  currentQuestion = 0;

  score = 0;

  answers = [];

  retryUsed = false;


  hideAllSteps();

  document
    .getElementById("quizStep")
    .classList
    .remove("hidden");

  renderQuestion();

  scrollTop();

}


/* =====================================================
   문제 표시
===================================================== */

function renderQuestion() {

  retryUsed = false;

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
    "문제 " +
    (currentQuestion + 1) +
    " / " +
    questions.length;


  let html = `

    <div class="question">

      <h3>
        ${question.question}
      </h3>

  `;


  question.choices.forEach(
    function(choice, index) {

      html += `

        <label class="choice">

          <input
            type="radio"
            name="quizAnswer"
            value="${index}"
          >

          ${String.fromCharCode(9312 + index)}
          ${choice}

        </label>

      `;

    }
  );


  html += `

      <button
        type="button"
        onclick="checkAnswer()"
      >
        정답 확인하기
      </button>

    </div>

  `;


  content.innerHTML = html;

}


/* =====================================================
   정답 확인
===================================================== */

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

  const question =
    questions[currentQuestion];


  const isCorrect =
    selectedAnswer === question.answer;


  if (isCorrect) {

    score++;

  }


  answers[currentQuestion] =
    selectedAnswer;


  const labels =
    document.querySelectorAll(
      "#quizContent .choice"
    );


  labels.forEach(function(label, index) {

    const input =
      label.querySelector("input");

    input.disabled = true;


    if (
      index === question.answer
    ) {

      label.classList.add("correct");

    }


    if (
      index === selectedAnswer &&
      !isCorrect
    ) {

      label.classList.add("incorrect");

    }

  });


  const button =
    document.querySelector(
      "#quizContent .question > button"
    );

  if (button) {

    button.remove();

  }


  let feedback = `

    <div class="answer-feedback
      ${
        isCorrect
          ? "feedback-correct"
          : "feedback-wrong"
      }">

      <h3>
        ${
          isCorrect
            ? "🎉 정답입니다!"
            : "❌ 오답입니다."
        }
      </h3>

      <p>
        <strong>정답:</strong>
        ${String.fromCharCode(9312 + question.answer)}
        ${question.choices[question.answer]}
      </p>

      <p>
        <strong>해설:</strong>
        ${question.explanation}
      </p>

  `;


  if (
    !isCorrect &&
    !retryUsed
  ) {

    retryUsed = true;

    feedback += `

      <button
        type="button"
        onclick="retryQuestion()"
      >
        한 번 더 풀기
      </button>

    `;

  } else {

    feedback += `

      <button
        type="button"
        onclick="nextQuestion()"
      >

        ${
          currentQuestion === questions.length - 1
            ? "최종 결과 확인 →"
            : "다음 문제 →"
        }

      </button>

    `;

  }


  feedback += "</div>";


  document
    .getElementById("quizContent")
    .insertAdjacentHTML(
      "beforeend",
      feedback
    );

}


/* =====================================================
   오답 재도전
===================================================== */

function retryQuestion() {

  const question =
    questions[currentQuestion];

  let html = `

    <div class="question">

      <h3>
        다시 풀어보세요
      </h3>

      <p>
        ${question.question}
      </p>

  `;


  question.choices.forEach(
    function(choice, index) {

      html += `

        <label class="choice">

          <input
            type="radio"
            name="quizAnswer"
            value="${index}"
          >

          ${String.fromCharCode(9312 + index)}
          ${choice}

        </label>

      `;

    }
  );


  html += `

      <button
        type="button"
        onclick="checkAnswer()"
      >
        다시 정답 확인하기
      </button>

    </div>

  `;


  document
    .getElementById("quizContent")
    .innerHTML =
    html;

}


/* =====================================================
   다음 문제
===================================================== */

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


/* =====================================================
   결과
===================================================== */

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
    Math.round(
      score /
      questions.length *
      100
    );


  resultStep.innerHTML = `

    <div class="step-badge">
      STEP 4
    </div>

    <h2>
      최종 결과
    </h2>

    <div class="result-score">

      <p>
        ${userName} 선생님의 점수
      </p>

      <h1>
        ${points}점
      </h1>

      <p>
        ${questions.length}문제 중
        ${score}문제 정답
      </p>

    </div>


    <p class="${
      points >= 80
        ? "pass"
        : "fail"
    }">

      ${
        points >= 80
          ? "🎉 교육 이수 기준을 충족했습니다."
          : "교육 내용을 다시 확인해 주세요."
      }

    </p>


    <button
      type="button"
      onclick="showKeyMessage()"
    >
      서명 단계로 이동 →
    </button>

  `;


  scrollTop();

}


/* =====================================================
   핵심 메시지 + 서명
===================================================== */

function showKeyMessage() {

  hideAllSteps();

  document
    .getElementById("messageStep")
    .classList
    .remove("hidden");


  hasSignature = false;


  setTimeout(function() {

    initSignatureCanvas();

  }, 100);


  scrollTop();

}


/* =====================================================
   서명
===================================================== */

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
          (
            event.touches[0].clientX -
            rect.left
          ) *
          (
            canvas.width /
            rect.width
          ),

        y:
          (
            event.touches[0].clientY -
            rect.top
          ) *
          (
            canvas.height /
            rect.height
          )

      };

    }


    return {

      x:
        (
          event.clientX -
          rect.left
        ) *
        (
          canvas.width /
          rect.width
        ),

      y:
        (
          event.clientY -
          rect.top
        ) *
        (
          canvas.height /
          rect.height
        )

    };

  }


  function startDrawing(event) {

    event.preventDefault();

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


/* =====================================================
   서명 지우기
===================================================== */

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


/* =====================================================
   서명 확인
===================================================== */

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


/* =====================================================
   최종 저장
===================================================== */

async function completeTraining(event) {

  const understanding =
    document.getElementById(
      "understanding"
    ).value;


  const usefulness =
    document.getElementById(
      "usefulness"
    ).value;


  const comment =
    document.getElementById(
      "comment"
    ).value.trim();


  let signatureData = "";


  if (
    canvas &&
    hasSignature
  ) {

    signatureData =
      canvas.toDataURL(
        "image/png"
      );

  }


  const points =
    Math.round(
      score /
      questions.length *
      100
    );


  const record = {

    name:
      userName,

    score:
      points,

    signature:
      signatureData,

    understanding:
      understanding,

    usefulness:
      usefulness,

    comment:
      comment

  };


  const button =
    event.target;


  button.disabled = true;

  button.innerText =
    "교육 이수 기록 저장 중...";


  try {

    await fetch(
      GOOGLE_SCRIPT_URL,
      {

        method:
          "POST",

        mode:
          "no-cors",

        headers: {

          "Content-Type":
            "text/plain;charset=utf-8"

        },

        body:
          JSON.stringify(record)

      }
    );


    hideAllSteps();


    const completeStep =
      document.getElementById(
        "completeStep"
      );


    completeStep
      .classList
      .remove("hidden");


    completeStep.innerHTML = `

      <h2>
        🎉 교육 이수가 완료되었습니다
      </h2>

      <div class="completion-box">

        <p>
          <strong>
            ${userName}
          </strong>
          선생님의 교육 이수 기록이 저장되었습니다.
        </p>

        <p>
          이수 점수:
          <strong>${points}점</strong>
        </p>

        <p>
          교육 완료일시:
          ${new Date().toLocaleString("ko-KR")}
        </p>

      </div>

    `;


    scrollTop();


  } catch (error) {

    console.error(error);

    alert(
      "교육 기록 저장 중 오류가 발생했습니다."
    );

    button.disabled = false;

    button.innerText =
      "교육 완료하기";

  }

}


/* =====================================================
   스크롤
===================================================== */

function scrollTop() {

  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

}
