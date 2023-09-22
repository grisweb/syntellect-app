import { action, makeObservable, observable } from "mobx";
import { ButtonOptions } from "../types";

class TextControlViewModel {
  inputValue: string = "";
  leftButtons: ButtonOptions[] = [];
  rightButtons: ButtonOptions[] = [];

  constructor() {
    makeObservable(this, {
      inputValue: observable,
      leftButtons: observable,
      rightButtons: observable,
      setInputValue: action,
    });
  }

  setInputValue = (value: string) => {
    this.inputValue = value;
  };
}

export default TextControlViewModel;
