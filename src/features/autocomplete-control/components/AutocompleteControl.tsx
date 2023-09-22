import { FC, useState } from "react";

import AutocompleteControlView from "features/autocomplete-control/views/AutocompleteControlView";
import AutocompleteControlViewModel from "../view-models/AutocompleteControlViewModel";
import AutocompleteControlModel from "../models/AutocompleteControlModel";

interface AutocompleteControlProps {
  maxSuggestions: number;
}

const AutocompleteControl: FC<AutocompleteControlProps> = ({maxSuggestions}) => {
  const [model] = useState(new AutocompleteControlModel(maxSuggestions));
  const [viewModel] = useState(new AutocompleteControlViewModel(model));

  return <AutocompleteControlView viewModel={viewModel} />;
};

export default AutocompleteControl;
