import en from './en'
import type { LocaleMessages } from '@/types/localeMessages'

//TODO: natural translation
// can have only same field than English, if there are missing fields => english value
const ko: Partial<LocaleMessages> = {
  USER_NAME: '라파엘 로차',
  USER_POSITION: '소프트웨어 엔지니어',
  USER_LOCATION: '서울, 대한민국',
  BIO_TEXT_INTRO: `한국에서 생활하며 일하는 프랑스 출신 소프트웨어 엔지니어로, 개발 경험은 2년입니다. 2025년에는 서울에 기반한 SaaS B2B 스타트업에서 소프트웨어 엔지니어로서 1년 동안 근무했습니다.`,
  BIO_TEXT_EXPERTISE: `전문 분야:`,
  BIO_TEXT_BULLET_1: '백엔드: Python / Django (DRF), Flask, Fast API, Java / Spring',
  BIO_TEXT_BULLET_2: 'DevOps: Docker, Docker Compose, Git, Github, Ansible, Gerrit',
  BIO_TEXT_BULLET_3:
    '클라우드/인프라: AWS (EC2, RDS, ECR, S3, Route 53, 인증서, 로드 밸런서, Registrar), Cloudflare (DNS, Workers, Pages)',
  BIO_TEXT_BULLET_4:
    'AI Application: LangChain, RAG, Qdrant, LangSmith, Vertex AI (Gemini), Claude',
  BIO_TEXT_BULLET_5: '프론트엔드: Vue.js, Vuex, Tailwind',
  BIO_TEXT_BULLET_6: '데이터베이스: PostgreSQL',
  BIO_TEXT_CONCLUSION: `수학과 컴퓨팅에 대한 관심은 자연스럽게 소프트웨어 공학으로 이어졌고, 저는 논리, 알고리즘, 잘 구조화된 시스템을 통해 복잡한 문제를 푸는 것을 즐깁니다. 저는 견고한 엔지니어링 원칙을 따르고 요구 사항을 명확히 이해해 모든 결정이 깔끔하고 효율적이며 유지보수 가능한 해결책으로 이어지도록 합니다. 소프트웨어를 단순히 작동시키는 것을 넘어, 기술 부채를 줄이고 신뢰성을 높이며 제품의 요구에 맞춰 확장할 수 있는 시스템을 구축하는 데 집중합니다. 최근 몇 년간에는 효율을 높이면서도 견고한 기술적 판단을 유지하고 장기적인 유지보수성과 코드 품질을 고려하기 위해 AI 기반 개발 도구를 워크플로에 통합했습니다.`,
  TIMELINE_TITLE_0: `PhyxUp Health 소프트웨어 엔지니어`,
  TIMELINE_START_DATE_0: '2025-02',
  TIMELINE_END_DATE_0: '2025-12',
  TIMELINE_TEXT_0: `CEO와 긴밀히 협업하며 소프트웨어 개발, 클라우드 인프라 구축 및 운영, 데이터 기반 최적화, 배포 자동화, 테스트, 프로덕션 운영을 포함한 제품 개발 전 과정을 주도했습니다.`,
  TIMELINE_TITLE_1: `AtolCD에서 소프트웨어 엔지니어`,
  TIMELINE_TEXT_1: `IT 컨설팅 회사에서 시니어 엔지니어들과 협업하며 풀스택 소프트웨어 엔지니어로 근무했습니다. 프랑스 내무부(French Ministry of the Interior), 프랑스 전자통신·우편·언론유통 규제청(ARCEP), 프랑스 국가주파수청(ANFR) 등 다양한 공공기관 프로젝트를 수행했습니다.`,
  TIMELINE_TITLE_2: `오뜨손주 지방 정부 웹 개발자`,
  TIMELINE_TEXT_2: `기획 및 개발: 웹 인터페이스 및 백오피스 개발.`,
  TIMELINE_TITLE_3: `오뜨손주 지방 정부 웹 개발자`,
  TIMELINE_TEXT_3: `기획 및 개발: 이전 인턴십에서 진행한 프로젝트를 이어서 수행했습니다.`,
  KOREA_EXP_TITLE_0: `맨파워코리아 IT 헤드헌터`,
  KOREA_EXP_TEXT_0: `백엔드 엔지니어, 네트워크 엔지니어, 인프라 엔지니어, DevOps 및 NLP 엔지니어 채용.`,
  PERSONAL_PROJECT_TEXT_0: `두 가지 기능을 갖춘 프로덕션 수준의 AI 기반 이력서/JD 분석 플랫폼입니다. 매칭 기능은 이력서 풀에서 특정 채용 공고에 가장 적합한 후보자를 찾아주며, 비교 기능은 단일 이력서와 채용 공고 간의 적합도를 평가합니다. Qdrant 벡터 검색으로 전체 이력서 풀을 후보군으로 압축한 뒤, LLM이 해당 후보군을 스코어링하는 2단계 RAG 파이프라인을 통해 "최적 후보자 찾기" 기능을 구현하여, 불필요한 LLM 호출을 최소화했습니다.`,
  PERSONAL_PROJECT_TEXT_1: `에이전트는 제안하고 결정은 결정론적 코드가 내리는 멀티 에이전트 고객 지원 시스템입니다. LangGraph 상태 머신이 의도 분류, 계획 수립, pgvector 기반 RAG 정책 검색을 담당하며, 실제 환불이나 반품이 별도의 실행기를 통해 처리되기 전에 Python 정책 엔진이 결정을 내립니다. 담당자 승인이 필요한 작업의 경우 대화가 워크플로 중간에 동결되고, 승인이 이루어진 후에야 재개됩니다.`,
  TEXT_YEAR: `년`,
  TEXT_MONTH: `월`,
  EDUCATION_TITLE: '학력',
  EDUCATION_SCHOOL: 'University Marie & Louis Pasteur (UMLP)',
  EDUCATION_DEGREE: '컴퓨터공학 학사',
  EDUCATION_LOCATION: '프랑스',
  EDUCATION_GRAD_LABEL: '졸업:',
  EDUCATION_GRAD_YEAR: '2021',
  TIMELINE_CURRENT: '현재'
}

//english default
const korean = { ...en, ...ko }

export default korean
