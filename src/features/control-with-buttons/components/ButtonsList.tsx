import { FC } from "react";
import { Button, Space } from "antd";

import { ButtonOptions } from "../types";

interface ButtonsListProps {
  buttons: ButtonOptions[];
  onClick: (cb: ButtonOptions["callback"]) => void;
}

const ButtonsList: FC<ButtonsListProps> = ({ buttons, onClick }) => {
  return (
    <Space direction="vertical">
      {buttons.map(({ text, callback }, idx) => (
        <Button key={idx} type="primary" onClick={() => onClick(callback)}>
          {text}
        </Button>
      ))}
    </Space>
  );
};

export default ButtonsList;
