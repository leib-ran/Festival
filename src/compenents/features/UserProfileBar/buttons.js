import { faScroll, faTheaterMasks } from "@fortawesome/free-solid-svg-icons";

class Buttons {
  constructor(name, icon) {
    this.name = name;
    this.icon = icon;
  }
}

const orders = new Buttons("order", faScroll);
const festivals = new Buttons("festivals", faTheaterMasks);

const buttonsBarStorage = [orders, festivals];
export default buttonsBarStorage;
