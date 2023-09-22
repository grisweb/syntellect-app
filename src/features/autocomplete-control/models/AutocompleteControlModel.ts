import { makeAutoObservable, runInAction } from "mobx";
import { CountryInfo, getCountryByName } from "api/apiService";

class AutocompleteControlModel {
  suggestions: CountryInfo[] = [];
  maxSuggestions?: number;

  constructor(maxSuggestions: number) {
    this.maxSuggestions = maxSuggestions;
    makeAutoObservable(this);
  }

  async getSuggestionsQuery(query: string) {
    const res = await getCountryByName(query);
    runInAction(() => {
      this.suggestions = res.slice(0, this.maxSuggestions);
    });
  }
}

export default AutocompleteControlModel;
