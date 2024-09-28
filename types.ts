export type LogColor =
  | "reset"
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "magenta"
  | "cyan"
  | "white";

export type FunctionProps<T> = {
  helper: string;
  data: T;
  color?: LogColor;
  showFunctionOrigin?: boolean;
};
