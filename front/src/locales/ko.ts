import en from './en'
import type { LocaleMessages } from '@/types/localeMessages'

//TODO: natural translation
// can have only same field than English, if there are missing fields => english value
const ko: Partial<LocaleMessages> = {
  USER_NAME: '라파엘 로차',
  USER_POSITION: '풀스택 개발자',
  USER_LOCATION: '서울, 대한민국',
  BIO_TEXT: `
  <p>안녕하세요, 저는 Raphael입니다. 프랑스에서 태어나 현재는 한국에서 일하고 있는 주니어 풀스택 개발자입니다.</p>
  <p>개발자로서 약 2년의 경력을 가지고 있으며, 현재 PhyxUp Health에서 풀스택 개발자로 근무하고 있습니다.</p>
  <p>저는 백엔드 개발, DevOps 실천, 클라우드에 특히 관심이 많습니다. 프론트엔드 개발도 많이 해봤고, 
  Vue와 Spring에 가장 많은 경험이 있으며 Django로도 프로젝트를 진행한 적이 있습니다. 
  요즘은 Vue, Django, CI/CD 워크플로우, Docker, AWS 서비스, 그리고 Cloudflare 관련 업무를 많이 하고 있습니다.</p>
  <p>개발자는 저에게 매우 보람 있는 역할입니다. 매일 새로운 것을 배우고 성장할 수 있기 때문입니다. 
  소프트웨어가 동작하게 만드는 것은 그저 기본일 뿐이며, 저는 항상 그것이 어떻게 작동하는지를 깊이 있게 이해하려고 노력합니다. 
  모범 사례를 따르고, 깔끔하고 효율적이며 이해하기 쉬운 코드를 작성하기 위해 신중한 결정을 내리려고 합니다.</p>
  <p>저는 팀 전체가 유지보수하고 확장하기 쉬운 잘 구조화되고 문서화된 시스템을 만드는 것을 중요하게 생각합니다. 
  코딩을 처음 시작했을 때와 달리, 이제는 매우 효율적인 AI를 활용할 수 있는 시대가 되었습니다.
  시간을 절약하기 위해 우리는 이를 적극적으로 활용해야 합니다.
  AI는 현명하게 사용한다면 생산성을 크게 향상시킬 수 있는 강력한 도구입니다.
  그럼에도 불구하고, 처음부터 시간을 투자하여 지저분한 코드나 기술 부채를 피하는 것은 여전히 중요합니다.</p>`,
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
