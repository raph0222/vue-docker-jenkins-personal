import en from './en'
import type { LocaleMessages } from '@/types/localeMessages'

//TODO: natural translation
// can have only same field than English, if there are missing fields => english value
const ko: Partial<LocaleMessages> = {
  USER_NAME: '라파엘 로차',
  USER_POSITION: '풀스택 개발자',
  USER_LOCATION: '서울, 대한민국',
  BIO_TEXT_INTRO: `한국에서 생활하며 일하는 프랑스 국적의 소프트웨어 엔지니어로, 개발자 경력은 2년입니다. 현재 서울 마포구에 위치한 PhyxUp Health에서 풀스택 엔지니어로 근무하고 있습니다.`,
  BIO_TEXT_EXPERTISE: `전문 분야:`,
  BIO_TEXT_BULLET_1: '백엔드: Java / Spring, Python / Django (DRF)',
  BIO_TEXT_BULLET_2: '프론트엔드: Vue.js, Vuex, Tailwind',
  BIO_TEXT_BULLET_3: 'DevOps: Docker, Git, Github, Gerrit',
  BIO_TEXT_BULLET_4: '클라우드 & 네트워킹: AWS, Cloudflare',
  BIO_TEXT_BULLET_5: '데이터베이스: PostgreSQL',
  BIO_TEXT_CONCLUSION: `소프트웨어 공학은 의미 있는 문제를 해결하면서 꾸준히 배울 수 있게 해주기 때문에 저에게 큰 자극이 됩니다. 저는 견고한 엔지니어링 원칙을 따르고 요구 사항을 명확히 이해해, 모든 결정이 깔끔하고 효율적이며 유지보수 가능한 해결책으로 이어지도록 합니다. 소프트웨어를 단순히 작동시키는 것을 넘어, 기술 부채를 줄이고 신뢰성을 높이며 제품의 요구에 맞춰 확장할 수 있는 시스템을 구축하는 데 집중합니다.`,
  TIMELINE_TITLE_0: `PhyxUp Health 풀스택 개발자`,
  TIMELINE_START_DATE_0: '2025-02',
  TIMELINE_END_DATE_0: '',
  TIMELINE_TEXT_0: `Vue와 Django(DRF)를 사용한 프론트엔드 및 백엔드 개발.
                    기능 추가, API 엔드포인트 구현, HIPAA 및 FHIR 규정 준수 관리.
                    RDS에 호스팅된 PostgreSQL 데이터베이스 작업 수행.
                    백엔드를 위한 GitHub Actions 및 프론트엔드를 위한 Cloudflare Pages를 활용하여 CI/CD 프로세스, 워크플로우 및 팀 문서화를 개선.
                    AWS를 호스팅 제공자로, Cloudflare를 DNS 관리자로 설정하여 새로운 스테이징 환경(및 배포 프로세스) 구축.
                    애플리케이션 내 모든 서비스를 관리하기 위해 Docker 사용.  
                    보안 강화, 로깅(logging) 개선 등.`,
  TIMELINE_TITLE_1: `AtolCD에서 풀스택 개발자`,
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
  TEXT_YEAR: `년`,
  TEXT_MONTH: `월`,
  DOWNLOAD_TEXT: `이력서`,
  TIMELINE_CURRENT: '현재'
}

//english default overwritten by fr
const korean = { ...en, ...ko }

export default korean
