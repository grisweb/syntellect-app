import { FC } from "react";
import { Space } from "antd";

import ControlWithButtonsSection from "components/ControlWithButtonsSection";
import AutocompleteControlSection from "components/AutocompleteControlSection";

const App: FC = () => {
  return (
    <Space direction="vertical" size="large">
      <ControlWithButtonsSection />
      <AutocompleteControlSection />
    </Space>
  );
};

export default App;
