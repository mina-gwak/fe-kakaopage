const $ = (selector) => document.querySelector(selector);

const convertStringToHTML = (string) => {
  const div = document.createElement('div');
  div.innerHTML = string;
  return div.firstElementChild;
};

const convertReader = (reader) => {
  return `${reader / 10000}만명`;
};

const getDay = () => {
  const day = {
    0: '일',
    1: '월',
    2: '화',
    3: '수',
    4: '목',
    5: '금',
    6: '토',
  };

  const today = new Date().getDay();
  return day[today];
};

const isNew = (serialDate) => serialDate.includes(getDay());

const setContainerWidth = (section) => {
  const bannerCount = section.querySelector('.banner-container').childElementCount;
  section.querySelector('.banner-container').style.width = `${100 * bannerCount}%`;
};

export { $, convertStringToHTML, convertReader, isNew, setContainerWidth };
