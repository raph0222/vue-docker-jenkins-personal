import en from './en'
import type { LocaleMessages } from '@/types/localeMessages'

//TODO: natural translation
// can have only same field than English, if there are missing fields => english value
const ko: Partial<LocaleMessages> = {
  USER_NAME: '라파엘 로차',
  USER_POSITION: '풀스택 개발자',
  USER_LOCATION: '서울, 대한민국',
  BIO_TEXT: `
              <p>안녕하세요, 저는 프랑스에서 태어나 현재 한국에 거주 중인 주니어 풀스택 개발자 라파엘입니다.</p>
              <p>저는 개발자로서 1년 이상의 경력을 가지고 있습니다. 현재 이 프로젝트와 같은 개인 프로젝트를 진행하고 있으며, 다음 프로젝트로 백엔드 중심의 프로젝트를 진행할 계획입니다.</p>
              <p>저는 2022년 5월부터 2023년 5월까지 한국에서 1년 동안 살았습니다. 그 후 프랑스로 돌아와서 디종에 있는 AtolCD에서 풀스택 개발자로 2024년 7월까지 1년 넘게 근무했습니다.
              이제 저는 한국에서 경력을 쌓기 위해 다시 한국으로 돌아왔습니다. 서울에 거주할 계획이며, 이를 위해 현재 중앙대학교에서 한국어 학습(D-4 비자) 중이며, 풀스택 개발자로 일할 자리를 찾고 있습니다.</p>
              <p>개발자로 일하는 것은 저에게 매우 보람찬 직업입니다. 매일 새로운 것, 새로운 실습을 배우며, 깨끗한 코드를 작성하고, 좋은 실습을 사용하며, 새로운 업데이트에 맞추어 끊임없이 도전해야 합니다.
              매일 지식을 공유하고 피드백을 받는 것은 개선을 의미합니다. 제 생각에 이것이 가장 큰 장점 중 하나입니다.</p>
              <p>저는 2022년 12월부터 2023년 6월까지 6개월 동안 Manpower Korea에서 파트타임 IT 리크루터로 일했으며, 당시에는 파트타임 개발자 자리를 찾을 수 없었습니다.
              이와 관련 없는 경험을 통해 한국의 직장 문화를 엿볼 수 있었습니다. 이 경험은 저를 더욱 개발 분야에서 일하고 싶게 만들었습니다.</p>
            `,
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
  DOWNLOAD_TEXT: `이력서`
}

//english default overwritten by fr
const korean = { ...en, ...ko }

export default korean
