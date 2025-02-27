import Nav from './Nav.js';
import { convertStringToHTML } from '../../js/util';
import { store } from '../../data/store.js';

const MainNav = () => convertStringToHTML(`<nav class="contents main-nav">${Nav(store.navItems.main)}</nav>`);

export default MainNav;
