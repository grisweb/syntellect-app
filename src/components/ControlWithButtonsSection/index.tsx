import { FC } from "react";
import { Card } from "antd";

import { ControlWithButtons } from "features/control-with-buttons";
import { ButtonOptions } from "features/control-with-buttons/types";

const rightButtons1: ButtonOptions[] = [
  {
    callback(_, setInputValue) {
      setInputValue("");
    },
    text: "Clear control",
  },
  {
    callback(_, setInputValue) {
      setInputValue("Hello World");
    },
    text: "Hello World!",
  },
];

const leftButtons2: ButtonOptions[] = [
  {
    callback(inputValue) {
      alert(inputValue);
    },
    text: "Alert",
  },
];

const rightButtons2: ButtonOptions[] = [
  {
    callback(inputValue) {
      if (!isNaN(+inputValue) && !isNaN(parseFloat(inputValue))) {
        alert(inputValue);
      }
    },
    text: "Is number",
  },
];

const ControlWithButtonsSection: FC = () => {
  return (
    <>
      <Card title="Контрол с кнопками 1">
        <ControlWithButtons
          key="1"
          leftButtons={[]}
          rightButtons={rightButtons1}
        />
      </Card>
      <Card style={{marginTop: '20px'}} title="Контрол с кнопками 2">
        <ControlWithButtons
          key="2"
          leftButtons={leftButtons2}
          rightButtons={rightButtons2}
        />
      </Card>
    </>
  );
};

export default ControlWithButtonsSection;
