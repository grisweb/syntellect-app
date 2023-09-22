import { action, makeObservable, observable } from "mobx";
import AutocompleteControlModel from "../models/AutocompleteControlModel";

class AutocompleteControlViewModel {
  model: AutocompleteControlModel;
  inputValue: string = "";

  constructor(autocompleteControlModel: AutocompleteControlModel) {
    this.model = autocompleteControlModel;
    makeObservable(this, {
      inputValue: observable,
      changeInput: action,
    });
  }

  getSuggestions() {
    return this.model.suggestions;
  }

  changeInput(inputValue: string) {
    this.inputValue = inputValue;
    this.model.getSuggestionsQuery(this.inputValue);
  }
}

export default AutocompleteControlViewModel;
