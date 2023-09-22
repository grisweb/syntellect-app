import { FC } from "react";
import { observer } from "mobx-react-lite";

import { AutoComplete } from "antd";

import AutocompleteControlViewModel from "../view-models/AutocompleteControlViewModel";

interface AutocompleteControlViewProps {
  viewModel: AutocompleteControlViewModel;
}

const AutocompleteControlView: FC<AutocompleteControlViewProps> = observer(
  ({ viewModel }) => {
    return (
      <AutoComplete
        style={{width: '100%'}}
        size="large"
        value={viewModel.inputValue}
        onSelect={(value) => viewModel.changeInput(value)}
        onChange={(value) => {
          viewModel.changeInput(value);
        }}
        options={viewModel.getSuggestions().map(({ name, fullName, flag }) => {
          return {
            value: name,
            label: (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  columnGap: "10px",
                }}
              >
                <img style={{ width: "30px" }} src={flag} alt={name} />
                <div>{`${name}, ${fullName}`}</div>
              </div>
            ),
          };
        })}
      />
    );
  }
);

export default AutocompleteControlView;
