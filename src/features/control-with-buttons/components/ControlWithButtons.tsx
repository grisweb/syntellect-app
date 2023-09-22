import { FC, useState } from "react";
import { ButtonOptions } from "../types";
import TextControlViewModel from "../view-models/TextControlViewModel";
import TextControlView from "../views/TextControlView";

interface ControlWithButtonsProps {
  leftButtons: ButtonOptions[];
  rightButtons: ButtonOptions[];
}

const ControlWithButtons: FC<ControlWithButtonsProps> = ({
  leftButtons,
  rightButtons,
}) => {
  const [viewModel] = useState(new TextControlViewModel());
  viewModel.leftButtons = leftButtons;
  viewModel.rightButtons = rightButtons;

  return <TextControlView viewModel={viewModel} />;
};

export default ControlWithButtons;
