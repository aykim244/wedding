/**
 * Vintage Film Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "이상형",
    nameEn: "Groom",
  father: "이순구",
  mother: "",  // 👈 추가 (빈값이라도 넣어야 undefined 안 뜸)
  fatherDeceased: false,
  motherDeceased: false
  },

  bride: {
    name: "박주영",
    nameEn: "Bride",
    father: "박상안",
    mother: "최장미",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-07-18",
    time: "11:30",
    venue: "아펠가모 공덕",
    hall: "7층 마리에 홀",
    address: "서울 마포구 도화동 25-13",
    tel: "02-1234-5678",
    mapLinks: {
      kakao: "https://place.map.kakao.com/630786038",
      naver: "https://naver.me/xcnaC81L"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "두 사람이 만나\n미래를 함께하고자 합니다.\n서로 모르고 살아온 어제보다\n함께 할 내일이 많다는 사실에\n감사합니다.\n\n부부라는 이름으로\n새로이 시작하는 오늘\n가까이에서축복해 주시면\n\n감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
accounts: {
  groom: [
    { role: "신랑", name: "이상형", bank: "국민은행", number: "089502-04-157499" }
  ],
  bride: [
    { role: "신부", name: "박주영", bank: "기업은행", number: "421-067896-01-017" }
  ]
},
  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "이상형 ♥ 박주영 결혼합니다",
    description: "2026년 7월 18일, 소중한 분들을 초대합니다."
  }
};
