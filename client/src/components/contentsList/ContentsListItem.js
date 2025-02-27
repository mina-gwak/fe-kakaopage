import { SmallImgContainer } from '../index.js';
import { convertReader, isNew } from '../../js/util';

const ContentsListItem = (content) => {
  return `<li class="list-item">
            <a href="#">
              ${SmallImgContainer(content)}
              <h4 class="title">${content.title}</h4>
              <div>
                ${isNew(content.serialDate) ? '<span class="badge up">UP</span>' : ''}
                ${content.ageLimit === '15' ? '<span class="badge fifteen">15</span>' : ''}
                <span class="reader">${convertReader(content.readers)}</span>
              </div>
            </a>
          </li>`;
};

export default ContentsListItem;
