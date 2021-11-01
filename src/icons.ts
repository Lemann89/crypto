import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faBitcoin } from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faCheckSquare,
  faCoffee,
  faCoins,
  faExchangeAlt,
  faHistory,
  faHome,
  faMailBulk,
} from '@fortawesome/free-solid-svg-icons';

export const initIcons = () => {
  library.add(
    fab,
    faCheckSquare,
    faCoffee,
    faHome,
    faCoins,
    faExchangeAlt,
    faBitcoin,
    faMailBulk,
    faHistory,
    faBars,
  );
};
