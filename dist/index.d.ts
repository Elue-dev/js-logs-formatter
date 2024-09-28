type LogColor = "reset" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white";
type FunctionProps<T> = {
    helper: string;
    data: T;
    color?: LogColor;
    showFunctionOrigin?: boolean;
};

declare function println<T>({ helper, data, color, showFunctionOrigin, }: FunctionProps<T>): void;

export { println };
