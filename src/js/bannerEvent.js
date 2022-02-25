import { MainBanners, SubBanners, EventBanners } from '../data';

const Slide = {
  main: {
    pos: 0,
    current: 1,
    total: MainBanners.length,
  },
  sub: {
    pos: 0,
    current: 1,
    total: SubBanners.length,
  },
  event: {
    pos: 0,
    current: 1,
    total: EventBanners.length,
  },
};

const setCarousel = (html) => {
  const ul = html.querySelector('.banner-container');
  const length = ul.childElementCount;
  const firstBanner = ul.querySelector(`[data-count="1"]`);
  const lastBanner = ul.querySelector(`[data-count="${length}"]`);

  ul.insertAdjacentElement('afterbegin', lastBanner.cloneNode(true));
  ul.insertAdjacentElement('beforeend', firstBanner.cloneNode(true));

  ul.style.transform = `translateX(-${100 / (length + 2)}%)`;

  return html;
};

const changeSlide = (type, ul, bannerType) => {
  const width = ul.querySelector('.banner').clientWidth
  if (type === 'next') {
    Slide[bannerType].pos = -width;
    ul.style.transform = `translateX(${Slide[bannerType].pos}px)`;
  }

  else {
    Slide[bannerType].pos = `-${width * Slide[bannerType].total}`;
    ul.style.transform = `translateX(${Slide[bannerType].pos}px)`;
  }
}

const carouselClickHandler = (e) => {
  const button = e.target;
  const bannerType = e.target.offsetParent.dataset.banner;
  const ul = e.target.offsetParent.querySelector('.banner-container');
  const width = ul.querySelector('.banner').clientWidth;

  if (button.classList.contains('next')) {
    Slide[bannerType].current++;
  }

  if (button.classList.contains('back')) {
    Slide[bannerType].current--;
  }

  Slide[bannerType].pos = `-${width * Slide[bannerType].current}`;

  ul.style.transform = `translateX(${Slide[bannerType].pos}px)`;

  if (Slide[bannerType].current > Slide[bannerType].total) {
    Slide[bannerType].current = 1;
    setTimeout(() => {
      ul.classList.add('no-transition')
      changeSlide('next', ul, bannerType);
      ul.offsetHeight;
      ul.classList.remove('no-transition');
    }, 700);
  }

  else if (Slide[bannerType].current === 0) {
    Slide[bannerType].current = Slide[bannerType].total;
    setTimeout(() => {
      ul.classList.add('no-transition')
      changeSlide('back', ul, bannerType);
      ul.offsetHeight;
      ul.classList.remove('no-transition');
    }, 700)
  }

  if (bannerType !== 'sub') {
    e.target.offsetParent.querySelector('.current').textContent = Slide[bannerType].current;
  }
};

const bannerClickHandler = (e) => {
  const button = e.target;
  const bannerType = e.target.offsetParent.dataset.banner;
  const ul = e.target.offsetParent.querySelector('.banner-container');
  const width = ul.querySelector('.banner').clientWidth;

  if (button.classList.contains('next')) {
    if (Slide[bannerType].current === Slide[bannerType].total) return;
    Slide[bannerType].pos -= width;
    Slide[bannerType].current++;
  }

  if (button.classList.contains('back')) {
    if (Slide[bannerType].current === 1) return;
    Slide[bannerType].pos += width;
    Slide[bannerType].current--;
  }

  ul.style.transform = `translateX(${Slide[bannerType].pos}px)`;
  if (bannerType !== 'sub') {
    e.target.offsetParent.querySelector('.current').textContent = Slide[bannerType].current;
  }
};

const checkTarget = (e) => e.target.tagName === 'BUTTON';

const bannerCallback = (e) => checkTarget(e) && bannerClickHandler(e);

const carouselCallback = (e) => checkTarget(e) && carouselClickHandler(e);

export { bannerCallback, setCarousel, carouselCallback };