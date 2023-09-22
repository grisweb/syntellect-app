import { FC } from "react";
import { Card } from "antd";
import { AutocompleteControl } from "features/autocomplete-control";

const AutocompleteControlSection: FC = () => {
  return (
    <>
      <Card title="Контрол-автокомплит 1">
        <AutocompleteControl maxSuggestions={3} />
      </Card>
      <Card style={{ marginTop: "20px" }} title="Контрол-автокомплит 2">
        <AutocompleteControl maxSuggestions={10} />
      </Card>
    </>
  );
};

export default AutocompleteControlSection;
