import { ChangeEvent, FC } from "react";
import { observer } from "mobx-react-lite";
import { Space, Input } from "antd";

import TextControlViewModel from "../view-models/TextControlViewModel";
import ButtonsList from "../components/ButtonsList";
import { ButtonOptions } from "../types";

interface TextControlViewProps {
  viewModel: TextControlViewModel;
}

const TextControlView: FC<TextControlViewProps> = observer(({ viewModel }) => {
  const handleClick = (cb: ButtonOptions["callback"]) => {
    if (cb) {
      cb(viewModel.inputValue, viewModel.setInputValue);
    }
  };

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    viewModel.setInputValue(evt.target.value);
  };

  return (
    <Space size="large">
      <ButtonsList
        onClick={(cb) => handleClick(cb)}
        buttons={viewModel.leftButtons}
      />
      <div>
        <Input
          type="text"
          value={viewModel.inputValue}
          onChange={handleChange}
        />
      </div>
      <ButtonsList
        onClick={(cb) => handleClick(cb)}
        buttons={viewModel.rightButtons}
      />
    </Space>
  );
});

export default TextControlView;
