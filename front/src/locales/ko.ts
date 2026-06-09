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
  TIMELINE_TEXT_0: `Vue와 Django(DRF)를 사용한 프론트엔드 및 백엔드 개발.
                    기능 추가, API 엔드포인트 구현, HIPAA 및 FHIR 규정 준수 관리.
                    RDS에 호스팅된 PostgreSQL 데이터베이스 작업 수행.
                    백엔드를 위한 GitHub Actions 및 프론트엔드를 위한 Cloudflare Pages를 활용하여 CI/CD 프로세스, 워크플로우 및 팀 문서화를 개선.
                    AWS를 호스팅 제공자로, Cloudflare를 DNS 관리자로 설정하여 새로운 스테이징 환경(및 배포 프로세스) 구축.
                    애플리케이션 내 모든 서비스를 관리하기 위해 Docker 사용.  
                    보안 강화, 로깅(logging) 개선 등.`,
  TIMELINE_TITLE_1: `AtolCD에서 소프트웨어 엔지니어`,
  TIMELINE_TEXT_1: `여러 프로젝트에서 10명 이상의 팀과 함께 다양한 스택을 사용하여 일했습니다.
                      기능 개발, 버그 수정, 비즈니스 로직 개발, 새로운 
                      RESTFUL API, 웹 서비스, 보안 수정, 온프레미스 캡차 등을 처리했습니다.
                      또한 PostgreSQL과 PostGIS 확장을 포함한 데이터베이스 작업을 했으며, Geoserver와 openLayers를 통해 데이터를 통합했습니다.
                      마지막으로, Jenkins 파이프라인과 같은 새로운 CI/CD 워크플로우 작업을 진행하고, Jenkins 내에서 Docker를 사용하고 docker-compose로 패키지, 데이터베이스 등을 생성했습니다.
                      데모 서버 설정, Java 업그레이드, 새로운 패키징/배포 프로세스, 문서 작성, 데모 서버 설정을 위한 Ansible 스크립트 작업을 진행했습니다.`,
  TIMELINE_TITLE_2: `오뜨손주 지방 정부 웹 개발자`,
  TIMELINE_TEXT_2: `기획 및 개발: 이전 인턴십과 유사하게, 다른 프로젝트에서도 동일한 작업을 수행했습니다.`,
  TIMELINE_TITLE_3: `오뜨손주 지방 정부 웹 개발자`,
  TIMELINE_TEXT_3: `기획 및 개발: JS/Jquery 및 PHP 백엔드를 사용하여 웹 인터페이스 및 백오피스 개발. PostgreSQL 데이터베이스 설계.`,
  PERSONAL_PROJECT_TEXT_0: `두 가지 기능을 갖춘 프로덕션 수준의 AI 기반 이력서/JD 분석 플랫폼입니다. 매칭 기능은 이력서 풀에서 특정 채용 공고에 가장 적합한 후보자를 찾아주며, 비교 기능은 단일 이력서와 채용 공고 간의 적합도를 평가합니다. Qdrant 벡터 검색으로 전체 이력서 풀을 후보군으로 압축한 뒤, LLM이 해당 후보군을 스코어링하는 2단계 RAG 파이프라인을 통해 "최적 후보자 찾기" 기능을 구현하여, 불필요한 LLM 호출을 최소화했습니다.`,
  TEXT_YEAR: `년`,
  TEXT_MONTH: `월`,
  DOWNLOAD_TEXT: `이력서`,
  EDUCATION_TITLE: '학력',
  EDUCATION_SCHOOL: 'University Marie & Louis Pasteur (UMLP)',
  EDUCATION_DEGREE: '컴퓨터공학 학사',
  EDUCATION_LOCATION: '프랑스',
  EDUCATION_GRAD_LABEL: '졸업:',
  EDUCATION_GRAD_YEAR: '2021',
  TIMELINE_CURRENT: '현재'
}

//english default overwritten by fr
const korean = { ...en, ...ko }

export default korean
