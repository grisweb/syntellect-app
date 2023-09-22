interface ButtonOptions {
  callback?: (
    inputValue: string,
    setInputValue: (inputValue: string) => void
  ) => void;
  text: string;
}

export type { ButtonOptions };
