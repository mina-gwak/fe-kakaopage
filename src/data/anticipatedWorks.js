import { Webtoons } from './index.js';

const AnticipatedWorks = [
  {
    webtoonInfo: Webtoons.find((webtoon) => webtoon.title === '화타가 된 외과 의사'),
    bannerImage: 'src/img/webtoon-image-2.png',
    bannerText: '시즌2 런칭 기념, 경품 이벤트!',
    bannerBadge: '이벤트',
    link: '#',
  },
  {
    webtoonInfo: Webtoons.find((webtoon) => webtoon.title === '화산전생'),
    bannerImage: 'src/img/mainBanner/main-banner-2.png',
    bannerText: '나도 그들처럼 영웅이 되고 싶었다',
    bannerBadge: '이벤트',
    link: '#',
  },
];

export default AnticipatedWorks;