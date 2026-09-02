javascript
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbysXqcNrTxC1_h6vcm6jVCLkMK6Mm41Pu8lsU-LgDZjq6VALYepiZwHQ8LmY-aJRuFOsw/exec";


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
let drawing = false;


/* =====================================================
   6개 교육 페이지
   - 동영상 이후 요점정리
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
        <strong>💡 기억하세요</strong>
        <p>
          상대방의 의사와 개인적인 경계를 존중하고,
          자신의 행동이 상대방에게 어떻게 받아들여질 수 있는지
          항상 살펴야 합니다.
        </p>
      </div>
    `
  },


  {
    title: "2. 직장 내 성희롱 예방",
    image: "🤝",
    content: `
      <h3>학교도 안전한 직장문화가 필요합니다.</h3>

      <p>
        직장 내 성희롱은 업무와 관련하여
        상대방에게 성적 굴욕감이나 혐오감을 느끼게 하거나
        근무환경을 악화시키는 등의 행위를 말합니다.
      </p>

      <p>
        성적인 농담이나 발언, 외모에 대한 평가,
        불필요한 신체 접촉 등은 상대방에게
        불쾌감이나 성적 굴욕감을 줄 수 있습니다.
      </p>

      <div class="info-box">
        <strong>💡 교직원이 기억할 점</strong>
        <p>
          친분이 있거나 농담으로 한 말이라도
          상대방이 불편함을 느낄 수 있다는 점을 기억합니다.
        </p>
      </div>
    `
  },


  {
    title: "3. 동의와 개인적 경계",
    image: "💬",
    content: `
      <h3>동의는 명확하고 자발적이어야 합니다.</h3>

      <p>
        상대방의 침묵이나 소극적인 반응을
        동의로 단정해서는 안 됩니다.
      </p>

      <p>
        상대방이 불편함을 표현하거나 거부 의사를 보였다면
        즉시 행동을 멈추고 그 의사를 존중해야 합니다.
      </p>

      <div class="info-box">
        <strong>💡 실천하기</strong>
        <p>
          "괜찮겠지"라고 추측하지 말고,
          필요한 경우 상대방의 의사를 직접 확인합니다.
        </p>
      </div>
    `
  },


  {
    title: "4. 피해자 보호와 2차 피해 예방",
    image: "❤️",
    content: `
      <h3>피해 이후의 대응도 매우 중요합니다.</h3>

      <p>
        피해자를 의심하거나 비난하거나
        피해 사실을 주변에 소문내는 행동은
        2차 피해로 이어질 수 있습니다.
      </p>

      <p>
        피해자의 이야기를 경청하고,
        개인정보와 피해 사실이 불필요하게 알려지지 않도록
        주의해야 합니다.
      </p>

      <div class="info-box">
        <strong>💡 바람직한 태도</strong>
        <p>
          피해자의 의사를 존중하고,
          필요한 경우 학교의 공식적인 절차나
          전문 상담 및 지원기관을 안내합니다.
        </p>
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
        상대방의 동의 없이 촬영하거나
        사진·영상 등을 저장하거나
        다른 사람에게 전달·공유해서는 안 됩니다.
      </p>

      <div class="info-box">
        <strong>💡 특히 주의하세요</strong>
        <p>
          직접 촬영하지 않았더라도
          불법 촬영물 등을 전달하거나 공유하는 행위는
          피해를 확대할 수 있습니다.
        </p>
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
        서로의 차이와 경계를 존중하고,
        누구나 불편함이나 문제를 안전하게 표현할 수 있는
        학교문화를 만드는 것이 중요합니다.
      </p>

      <div class="info-box">
        <strong>💡 우리의 약속</strong>
        <p>
          존중하고, 경청하고, 보호하고,
          필요한 경우 적절한 도움을 요청합니다.
        </p>
      </div>
    `
  }

];


/* =====================================================
   교직원으로서 지켜야 할 경계
   - 6개 요점정리 이후
===================================================== */

const boundaryContent = `

  <div class="boundary-intro">

    <h2>교직원으로서 지켜야 할 경계</h2>

    <p>
      학교에서는 학생과 교직원, 교직원과 교직원 사이에
      서로 존중해야 할 전문적인 경계가 있습니다.
    </p>

    <p>
      친근함이나 농담이라는 이유로
      상대방의 경계를 넘지 않도록 주의해야 합니다.
    </p>

  </div>


  <div class="boundary-item">

    <h3>① 학생의 외모와 사생활</h3>

    <p>
      학생의 외모, 체형, 연애, 가족관계 등
      사적인 영역에 대한 불필요한 언급은 피합니다.
    </p>

    <div class="info-box">
      <strong>예를 들어</strong>
      <p>
        "요즘 몸이 좋아졌네.",
        "여자친구 있어?",
        "너 인기 많겠다."
        등의 말은 친근함의 표현이라도
        학생에게 불편함을 줄 수 있습니다.
      </p>
    </div>

    <p class="boundary-key">
      <strong>💡 핵심:</strong>
      학생의 사생활보다 교육적 관계를 우선합니다.
    </p>

  </div>


  <div class="boundary-item">

    <h3>② 학생과의 신체 접촉</h3>

    <p>
      격려나 친근함을 표현하기 위한 행동이라도
      불필요한 신체 접촉은 줄이는 것이 좋습니다.
    </p>

    <p>
      특히 반복적인 어깨·등 만지기,
      장난을 이유로 한 신체 접촉 등은 주의합니다.
    </p>

    <p class="boundary-key">
      <strong>💡 핵심:</strong>
      친근함도 상대방의 경계를 넘지 않아야 합니다.
    </p>

  </div>


  <div class="boundary-item">

    <h3>③ 학생과의 장난과 성적인 농담</h3>

    <p>
      "남학생끼리니까 괜찮다"거나
      "장난일 뿐이다"라는 이유로
      성적인 농담이나 부적절한 표현에 참여해서는 안 됩니다.
    </p>

    <p class="boundary-key">
      <strong>💡 핵심:</strong>
      장난이라는 이유로 경계가 사라지는 것은 아닙니다.
    </p>

  </div>


  <div class="boundary-item">

    <h3>④ 학생과의 개인적인 연락</h3>

    <p>
      학생과의 연락은 교육적 목적과 범위 안에서 이루어지도록 합니다.
    </p>

    <p>
      늦은 시간의 사적인 대화,
      불필요한 개인적인 연락,
      지나치게 친밀한 관계로 이어지는 연락은 주의합니다.
    </p>

    <p class="boundary-key">
      <strong>💡 핵심:</strong>
      학생과는 친밀함보다 전문성이 우선입니다.
    </p>

  </div>


  <div class="boundary-item">

    <h3>⑤ 동료 교직원과의 말과 행동</h3>

    <p>
      친한 동료라 하더라도 외모, 연애, 결혼,
      사생활 등에 대한 불필요한 언급이나
      성적인 농담은 피해야 합니다.
    </p>

    <p class="boundary-key">
      <strong>💡 핵심:</strong>
      친밀함이 상대방의 동의를 대신할 수는 없습니다.
    </p>

  </div>


  <div class="boundary-item">

    <h3>⑥ 회식과 단체대화방에서도 같은 기준</h3>

    <p>
      회식 자리나 교직원 단체대화방에서도
      학교 안에서와 같은 존중의 기준을 지켜야 합니다.
    </p>

    <p>
      성적인 농담이나 이미지가 올라왔을 때
      웃음이나 이모티콘으로 동조하거나
      다른 사람에게 다시 전달하지 않습니다.
    </p>

    <p class="boundary-key">
      <strong>💡 핵심:</strong>
      온라인과 오프라인 모두 존중의 기준은 같습니다.
    </p>

  </div>


  <div class="info-box boundary-final">

    <strong>🌱 기억하세요</strong>

    <p>
      <strong>
        친근함보다 존중,
        의도보다 상대방의 입장,
        사적인 관계보다 전문적인 관계
      </strong>
      를 선택합니다.
    </p>

  </div>

`;


/* =====================================================
   퀴즈 15문제
   - 기존 10문제
   - 새 상황형 5문제
===================================================== */

const questions = [

  /* -------------------------------------------------
     기존 유지 문제 1
  ------------------------------------------------- */

  {
    question: "성폭력 예방을 위해 가장 바람직한 태도는?",
    choices: [
      "상대방의 의사를 확인하고 경계를 존중한다.",
      "상대방과 친한 사이면 동의가 필요 없다.",
      "불편함을 표현하지 않으면 괜찮다고 생각한다.",
      "상대방이 알아서 참아야 한다."
    ],
    answer: 0,
    explanation:
      "성폭력 예방의 기본은 상대방의 의사와 개인적인 경계를 존중하는 것입니다."
  },


  /* -------------------------------------------------
     기존 유지 문제 2
  ------------------------------------------------- */

  {
    question: "상대방이 불편함을 표현했을 때 가장 적절한 행동은?",
    choices: [
      "장난이었다고 설명한다.",
      "즉시 행동을 멈춘다.",
      "계속해서 설득한다.",
      "다른 사람에게 이야기한다."
    ],
    answer: 1,
    explanation:
      "상대방이 불편함이나 거부 의사를 표현하면 즉시 행동을 멈추고 그 의사를 존중해야 합니다."
  },


  /* -------------------------------------------------
     기존 유지 문제 3
  ------------------------------------------------- */

  {
    question: "2차 피해에 해당할 수 있는 행동은?",
    choices: [
      "피해자의 이야기를 경청한다.",
      "피해자의 개인정보를 보호한다.",
      "피해자를 비난하거나 책임을 묻는다.",
      "필요한 지원기관을 안내한다."
    ],
    answer: 2,
    explanation:
      "피해자를 비난하거나 피해 원인을 피해자에게 돌리는 행동은 2차 피해가 될 수 있습니다."
  },


  /* -------------------------------------------------
     기존 유지 문제 4
  ------------------------------------------------- */

  {
    question: "피해 사실을 알게 된 동료의 태도로 가장 적절한 것은?",
    choices: [
      "여러 사람에게 사실을 확인한다.",
      "SNS에 내용을 공유한다.",
      "피해자의 의사를 존중하고 개인정보를 보호한다.",
      "피해자의 행동을 먼저 평가한다."
    ],
    answer: 2,
    explanation:
      "피해자의 의사를 존중하고 피해 사실과 개인정보가 불필요하게 확산되지 않도록 주의해야 합니다."
  },


  /* -------------------------------------------------
     기존 유지 문제 5
  ------------------------------------------------- */

  {
    question: "성폭력 예방의 책임은 누구에게 있습니까?",
    choices: [
      "피해자에게만 있다.",
      "관리자에게만 있다.",
      "피해자와 가해자에게만 있다.",
      "학교 구성원 모두에게 있다."
    ],
    answer: 3,
    explanation:
      "안전한 학교문화를 만드는 것은 모든 학교 구성원이 함께 노력해야 하는 과제입니다."
  },


  /* -------------------------------------------------
     기존 유지 문제 6
  ------------------------------------------------- */

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
      "상대방의 의사는 상황에 따라 달라질 수 있으므로 필요한 경우 명확하게 확인하는 것이 중요합니다."
  },


  /* -------------------------------------------------
     기존 유지 문제 7
  ------------------------------------------------- */

  {
    question: "상대방의 개인적 경계를 존중하는 방법은?",
    choices: [
      "상대방이 싫어해도 장난을 계속한다.",
      "상대방의 의사를 확인한다.",
      "친분을 이유로 행동을 정당화한다.",
      "불편함을 무시한다."
    ],
    answer: 1,
    explanation:
      "상대방의 의사를 확인하고 불편함이나 거부 의사가 있을 경우 이를 존중해야 합니다."
  },


  /* -------------------------------------------------
     기존 유지 문제 8
  ------------------------------------------------- */

  {
    question: "성희롱 예방을 위한 행동으로 적절한 것은?",
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


  /* -------------------------------------------------
     기존 유지 문제 9
  ------------------------------------------------- */

  {
    question: "디지털 성범죄 예방과 관련하여 옳은 것은?",
    choices: [
      "친한 사람에게는 동의 없이 사진을 보내도 된다.",
      "온라인에서는 현실보다 책임이 적다.",
      "동의 없는 촬영과 공유를 하지 않는다.",
      "삭제 요청을 무시해도 된다."
    ],
    answer: 2,
    explanation:
      "디지털 공간에서도 동의와 개인정보 보호 원칙은 동일하게 적용됩니다."
  },


  /* -------------------------------------------------
     기존 유지 문제 10
  ------------------------------------------------- */

  {
    question: "교육 내용을 실제 학교생활에서 실천하는 가장 좋은 방법은?",
    choices: [
      "상대방의 경계를 존중한다.",
      "문제를 숨긴다.",
      "피해자에게 책임을 묻는다.",
      "불편함을 무시한다."
    ],
    answer: 0,
    explanation:
      "서로의 경계를 존중하고 안전한 의사소통을 실천하는 것이 성폭력 예방의 시작입니다."
  },


  /* =================================================
     새 상황형 문제 5개
  ================================================= */


  /* -------------------------------------------------
     상황형 1
  ------------------------------------------------- */

  {
    question:
      "체육활동 후 교사가 학생에게 \"요즘 몸이 좋아졌네. 여자친구 생기겠어.\"라고 말했다. 가장 적절한 판단은?",

    choices: [
      "남학생끼리 하는 농담이므로 괜찮다.",
      "학생이 웃었다면 문제가 없다.",
      "학생의 외모와 사생활에 대한 불필요한 언급은 피하는 것이 좋다.",
      "친근함을 표현한 것이므로 문제가 없다."
    ],

    answer: 2,

    explanation:
      "학생의 외모나 연애 등 사적인 영역에 대한 불필요한 언급은 학생에게 불편함을 줄 수 있으므로 피하는 것이 좋습니다."
  },


  /* -------------------------------------------------
     상황형 2
  ------------------------------------------------- */

  {
    question:
      "교사가 학생을 격려한다는 이유로 어깨나 등을 반복해서 만지고 있다. 학생은 특별히 싫다는 말을 하지 않았다. 가장 적절한 행동은?",

    choices: [
      "학생이 싫다고 말하지 않았으므로 계속한다.",
      "교사의 의도가 좋았다면 괜찮다.",
      "불필요한 신체 접촉은 줄이고 말로 격려한다.",
      "친한 학생에게는 신체 접촉을 해도 괜찮다."
    ],

    answer: 2,

    explanation:
      "학생이 명시적으로 거부하지 않았더라도 불필요한 신체 접촉은 줄이고 말이나 다른 적절한 방법으로 격려하는 것이 바람직합니다."
  },


  /* -------------------------------------------------
     상황형 3
  ------------------------------------------------- */

  {
    question:
      "교사가 \"남학생들끼리니까 괜찮다\"며 학생들의 성적인 농담에 함께 웃고 농담을 주고받았다. 가장 적절한 행동은?",

    choices: [
      "학생들이 먼저 시작했으므로 괜찮다.",
      "학생과의 관계에서는 성적인 농담이나 장난을 피한다.",
      "학생들이 웃었다면 계속해도 된다.",
      "친근한 교사라는 인상을 주기 위해 함께 참여한다."
    ],

    answer: 1,

    explanation:
      "학생과 교직원의 관계에서는 성적인 농담이나 장난을 피해야 합니다. 남학생이라는 이유로 전문적인 경계가 달라지는 것은 아닙니다."
  },


  /* -------------------------------------------------
     상황형 4
  ------------------------------------------------- */

  {
    question:
      "교직원 단체대화방에 특정 교직원의 외모나 연애를 소재로 한 성적인 농담이 올라왔다. 가장 바람직한 행동은?",

    choices: [
      "재미있는 내용이면 웃음이나 이모티콘으로 반응한다.",
      "친한 동료에게 개인적으로 다시 전달한다.",
      "아무런 문제가 없으므로 계속 대화한다.",
      "동조하거나 확산하지 않고 부적절한 대화에는 참여하지 않는다."
    ],

    answer: 3,

    explanation:
      "교직원 사이에서도 존중의 기준은 동일합니다. 성적인 농담이나 부적절한 내용에 동조하거나 확산하지 않는 것이 바람직합니다."
  },


  /* -------------------------------------------------
     상황형 5
  ------------------------------------------------- */

  {
    question:
      "친한 동료에게 농담을 했는데 상대방이 \"그런 이야기는 불편하다.\"라고 말했다. 가장 적절한 반응은?",

    choices: [
      "상대방의 이야기를 듣고 해당 말이나 행동을 멈춘다.",
      "\"그럴 의도는 아니었어.\"라고 먼저 설명한다.",
      "\"친한 사이인데 너무 예민한 것 아니야?\"라고 말한다.",
      "다른 동료들에게 상황을 이야기한다."
    ],

    answer: 0,

    explanation:
      "상대방이 불편함을 표현했다면 의도와 관계없이 그 말을 듣고 행동을 멈추는 것이 중요합니다. 친밀함이 상대방의 경계를 대신할 수는 없습니다."
  }

];


/* =====================================================
   시작
===================================================== */

async function startTraining() {

  const input =
    document.getElementById("name");

  userName =
    input.value.trim();


  if (!userName) {

    alert(
      "성명을 입력해 주세요."
    );

    input.focus();

    return;

  }


  const button =
    document.querySelector(
      "#start button"
    );


  button.disabled =
    true;

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


    console.log(
      "이수 여부 확인 결과:",
      data
    );


    if (data.completed) {

      alert(
        userName +
        " 선생님은 이미 교육을 이수하셨습니다."
      );


      button.disabled =
        false;

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

    console.error(
      "이수 여부 확인 오류:",
      error
    );


    alert(
      "이수 여부 확인 중 오류가 발생했습니다.\n" +
      "잠시 후 다시 시도해 주세요."
    );


    button.disabled =
      false;

    button.innerText =
      "교육 시작하기";

  }

}


/* =====================================================
   모든 단계 숨기기
===================================================== */

function hideAllSteps() {

  const ids = [
    "start",
    "videoStep",
    "trainingStep",
    "quizStep",
    "resultStep",
    "messageStep",
    "surveyStep",
    "completeStep"
  ];


  ids.forEach(
    function(id) {

      const element =
        document.getElementById(id);


      if (element) {

        element.classList.add(
          "hidden"
        );

      }

    }
  );

}


/* =====================================================
   영상 확인
===================================================== */

function toggleVideoButton() {

  const check =
    document.getElementById(
      "videoCheck"
    );


  const button =
    document.getElementById(
      "videoNextButton"
    );


  if (!check || !button) {

    return;

  }


  button.disabled =
    !check.checked;

}


/* =====================================================
   교육 페이지 시작
===================================================== */

function showTrainingPages() {

  const videoCheck =
    document.getElementById(
      "videoCheck"
    );


  if (
    !videoCheck ||
    !videoCheck.checked
  ) {

    alert(
      "교육 영상을 시청한 후 확인 항목을 체크해 주세요."
    );

    return;

  }


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


  nextButton.disabled =
    true;


  nextButton.innerText =
    currentPage ===
    trainingPages.length - 1
      ? "교직원으로서 지켜야 할 경계 →"
      : "다음 페이지 →";


  updatePageProgress();

}


/* =====================================================
   교육 페이지 체크
===================================================== */

function togglePageButton() {

  const check =
    document.getElementById(
      "pageCheck"
    );


  const button =
    document.getElementById(
      "trainingNextButton"
    );


  if (!check || !button) {

    return;

  }


  button.disabled =
    !check.checked;

}


/* =====================================================
   교육 페이지 다음
===================================================== */

function nextTrainingPage() {

  const check =
    document.getElementById(
      "pageCheck"
    );


  if (
    !check ||
    !check.checked
  ) {

    alert(
      "교육 내용을 확인했다는 항목에 체크해 주세요."
    );

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

    showBoundarySection();

  }

}


/* =====================================================
   교육 페이지 진행 표시
===================================================== */

function updatePageProgress() {

  const progress =
    document.getElementById(
      "trainingProgress"
    );


  if (!progress) {

    return;

  }


  progress.innerText =
    "교육 내용 " +
    (currentPage + 1) +
    " / " +
    trainingPages.length;

}


/* =====================================================
   교직원으로서 지켜야 할 경계 표시
===================================================== */

function showBoundarySection() {

  const container =
    document.getElementById(
      "trainingContent"
    );


  const nextButton =
    document.getElementById(
      "trainingNextButton"
    );


  if (!container || !nextButton) {

    return;

  }


  container.innerHTML = `

    <div class="training-image">
      🚦
    </div>

    ${boundaryContent}

    <label class="confirm-check">

      <input
        type="checkbox"
        id="boundaryCheck"
        onchange="toggleBoundaryButton()"
      >

      <span>
        위 내용을 확인하고 숙지했습니다.
      </span>

    </label>

  `;


  const progress =
    document.getElementById(
      "trainingProgress"
    );


  if (progress) {

    progress.innerText =
      "교직원으로서 지켜야 할 경계";

  }


  nextButton.disabled =
    true;


  nextButton.innerText =
    "15문제 퀴즈 시작하기 →";


  nextButton.onclick =
    startQuiz;


  scrollTop();

}


/* =====================================================
   경계 내용 체크
===================================================== */

function toggleBoundaryButton() {

  const check =
    document.getElementById(
      "boundaryCheck"
    );


  const button =
    document.getElementById(
      "trainingNextButton"
    );


  if (!check || !button) {

    return;

  }


  button.disabled =
    !check.checked;

}


/* =====================================================
   퀴즈 시작
===================================================== */

function startQuiz() {

  const boundaryCheck =
    document.getElementById(
      "boundaryCheck"
    );


  if (
    boundaryCheck &&
    !boundaryCheck.checked
  ) {

    alert(
      "「교직원으로서 지켜야 할 경계」 내용을 확인했다는 항목에 체크해 주세요."
    );

    return;

  }


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

          <span>
            ${String.fromCharCode(9312 + index)}
            ${choice}
          </span>

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


  content.innerHTML =
    html;

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

    alert(
      "답을 선택해 주세요."
    );

    return;

  }


  const selectedAnswer =
    Number(
      selected.value
    );


  const question =
    questions[currentQuestion];


  const isCorrect =
    selectedAnswer ===
    question.answer;


  if (isCorrect) {

    score++;

  }


  answers[currentQuestion] =
    selectedAnswer;


  const labels =
    document.querySelectorAll(
      "#quizContent .choice"
    );


  labels.forEach(
    function(label, index) {

      const input =
        label.querySelector(
          "input"
        );


      input.disabled =
        true;


      if (
        index === question.answer
      ) {

        label.classList.add(
          "correct"
        );

      }


      if (
        index === selectedAnswer &&
        !isCorrect
      ) {

        label.classList.add(
          "incorrect"
        );

      }

    }
  );


  const button =
    document.querySelector(
      "#quizContent .question > button"
    );


  if (button) {

    button.remove();

  }


  let feedback = `

    <div class="
      answer-feedback
      ${
        isCorrect
          ? "feedback-correct"
          : "feedback-wrong"
      }
    ">

      <h3>
        ${
          isCorrect
            ? "🎉 정답입니다!"
            : "❌ 오답입니다."
        }
      </h3>

      <p>
        <strong>정답:</strong>
        ${String.fromCharCode(
          9312 + question.answer
        )}
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
          currentQuestion ===
          questions.length - 1
            ? "최종 결과 확인 →"
            : "다음 문제 →"
        }

      </button>

    `;

  }


  feedback +=
    "</div>";


  document
    .getElementById(
      "quizContent"
    )
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

      <p class="retry-notice">
        한 번 더 답을 선택할 수 있습니다.
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

          <span>
            ${String.fromCharCode(
              9312 + index
            )}
            ${choice}
          </span>

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
    .getElementById(
      "quizContent"
    )
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
      STEP 4 · 퀴즈 결과
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
        총 ${questions.length}문제 중
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


    <p class="hint">
      ※ 모든 교육 단계와 확인 절차를 완료하면
      최종적으로 이수 기록이 저장됩니다.
    </p>


    <button
      type="button"
      onclick="showKeyMessage()"
    >
      실천 약속 단계로 이동 →
    </button>

  `;


  scrollTop();

}


/* =====================================================
   나는 이렇게 행동하겠습니다
   + 서명
===================================================== */

function showKeyMessage() {

  hideAllSteps();


  const messageStep =
    document.getElementById(
      "messageStep"
    );


  messageStep
    .classList
    .remove("hidden");


  /*
    서명 캔버스는 기존 HTML의
    signatureCanvas를 그대로 사용합니다.
  */

  messageStep.innerHTML = `

    <div class="step-badge">
      STEP 5 · 실천 약속
    </div>


    <h2>
      나는 이렇게 행동하겠습니다
    </h2>


    <div class="info-box">

      <p>
        학교에서 학생과 동료를 대할 때
        친근함보다 존중과 전문성을 우선하겠습니다.
      </p>

    </div>


    <div class="commitment-box">

      <p>
        <strong>학생에게는</strong>
        전문적인 교사로서 불필요한 신체 접촉과
        사적인 관계를 만들지 않겠습니다.
      </p>


      <p>
        <strong>동료에게는</strong>
        존중하는 동료로서 외모·연애·사생활에 대한
        불필요한 언급과 성적인 농담을 하지 않겠습니다.
      </p>


      <p>
        <strong>문제가 발생했을 때는</strong>
        "그럴 의도는 아니었다"라고 먼저 방어하기보다
        상대방의 이야기를 듣고 적절한 절차에 따라
        대응하겠습니다.
      </p>


      <p class="commitment-highlight">
        <strong>
          "친근함보다 존중,
          의도보다 상대방의 입장,
          사적인 관계보다 전문적인 관계를 선택하겠습니다."
        </strong>
      </p>

    </div>


    <label class="confirm-check">

      <input
        type="checkbox"
        id="commitmentCheck"
        onchange="toggleCommitmentButton()"
      >

      <span>
        위 내용을 이해하고 실천하겠습니다.
      </span>

    </label>


    <div
      id="signatureArea"
      class="signature-area"
      style="display:none;"
    >

      <h3>
        교육 이수 확인 서명
      </h3>

      <p>
        아래 공간에 서명해 주세요.
      </p>

      <canvas
        id="signatureCanvas"
        width="500"
        height="180"
        style="
          width:100%;
          max-width:500px;
          height:180px;
          border:1px solid #ccc;
          background:#fff;
          touch-action:none;
          display:block;
          margin:0 auto;
        "
      ></canvas>


      <div
        style="
          display:flex;
          gap:10px;
          justify-content:center;
          margin-top:15px;
        "
      >

        <button
          type="button"
          onclick="clearSignature()"
        >
          서명 지우기
        </button>


        <button
          type="button"
          id="signatureConfirmButton"
          onclick="confirmSignature()"
          disabled
        >
          서명 완료 →
        </button>

      </div>

    </div>

  `;


  hasSignature =
    false;

  canvas =
    null;

  ctx =
    null;

  drawing =
    false;


  scrollTop();

}


/* =====================================================
   실천 약속 체크
===================================================== */

function toggleCommitmentButton() {

  const check =
    document.getElementById(
      "commitmentCheck"
    );


  const signatureArea =
    document.getElementById(
      "signatureArea"
    );


  if (
    !check ||
    !signatureArea
  ) {

    return;

  }


  if (check.checked) {

    signatureArea.style.display =
      "block";


    setTimeout(
      function() {

        initSignatureCanvas();

      },
      100
    );

  } else {

    signatureArea.style.display =
      "none";


    hasSignature =
      false;

  }

}


/* =====================================================
   서명 캔버스
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
    canvas.getContext(
      "2d"
    );


  ctx.lineWidth =
    2;

  ctx.lineCap =
    "round";

  ctx.lineJoin =
    "round";


  drawing =
    false;


  function getPosition(event) {

    const rect =
      canvas.getBoundingClientRect();


    let clientX;
    let clientY;


    if (event.touches) {

      clientX =
        event.touches[0].clientX;

      clientY =
        event.touches[0].clientY;

    } else {

      clientX =
        event.clientX;

      clientY =
        event.clientY;

    }


    return {

      x:
        (clientX - rect.left) *
        (canvas.width / rect.width),

      y:
        (clientY - rect.top) *
        (canvas.height / rect.height)

    };

  }


  function startDrawing(event) {

    event.preventDefault();


    drawing =
      true;


    const position =
      getPosition(event);


    ctx.beginPath();


    ctx.moveTo(
      position.x,
      position.y
    );


    hasSignature =
      true;


    updateSignatureButton();

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


  function stopDrawing(event) {

    if (event) {

      event.preventDefault();

    }


    drawing =
      false;


    updateSignatureButton();

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


  updateSignatureButton();

}


/* =====================================================
   서명 완료 버튼 상태
===================================================== */

function updateSignatureButton() {

  const button =
    document.getElementById(
      "signatureConfirmButton"
    );


  if (!button) {

    return;

  }


  button.disabled =
    !hasSignature;

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


  hasSignature =
    false;


  updateSignatureButton();

}


/* =====================================================
   서명 확인
===================================================== */

function confirmSignature() {

  if (!hasSignature) {

    alert(
      "교육 이수 확인 서명을 작성해 주세요."
    );

    return;

  }


  hideAllSteps();


  document
    .getElementById(
      "surveyStep"
    )
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


  if (!understanding) {

    alert(
      "교육 내용 이해도 항목을 선택해 주세요."
    );

    return;

  }


  if (!usefulness) {

    alert(
      "교육 내용 유익성 항목을 선택해 주세요."
    );

    return;

  }


  if (!hasSignature) {

    alert(
      "서명이 확인되지 않았습니다."
    );

    return;

  }


  let signatureData =
    "";


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


  button.disabled =
    true;


  button.innerText =
    "교육 이수 기록 저장 중...";


  try {

    /*
      Google Apps Script로 교육 이수 기록 전송

      현재 사용 중인 서명 이미지 저장 기능과
      동일한 방식입니다.
    */

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
          JSON.stringify(
            record
          )

      }
    );


    /*
      no-cors에서는 서버 응답을 읽을 수 없기 때문에
      전송이 완료되면 완료 화면으로 이동합니다.
    */

    hideAllSteps();


    const completeStep =
      document.getElementById(
        "completeStep"
      );


    completeStep
      .classList
      .remove("hidden");


    completeStep.innerHTML = `

      <div class="completion-box">

        <div class="completion-icon">
          🎉
        </div>

        <h2>
          교육 이수가 완료되었습니다
        </h2>

        <p>
          <strong>
            ${userName}
          </strong>
          선생님의 교육 이수 기록이 저장되었습니다.
        </p>

        <p>
          이수 점수:
          <strong>
            ${points}점
          </strong>
        </p>

        <p>
          교육 완료일시:
          ${new Date().toLocaleString(
            "ko-KR"
          )}
        </p>

      </div>

    `;


    scrollTop();


  } catch (error) {

    console.error(
      "교육 기록 저장 오류:",
      error
    );


    alert(
      "교육 이수 기록 저장 중 오류가 발생했습니다.\n" +
      "잠시 후 다시 시도해 주세요."
    );


    button.disabled =
      false;


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
