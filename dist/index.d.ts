type LogColor = "reset" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "black" | "brightRed" | "brightGreen" | "brightYellow" | "brightBlue" | "brightMagenta" | "brightCyan" | "brightWhite" | "bgRed" | "bgGreen" | "bgYellow" | "bgBlue" | "bgMagenta" | "bgCyan" | "bgWhite" | "bgBlack" | "bgBrightRed" | "bgBrightGreen" | "bgBrightYellow" | "bgBrightBlue" | "bgBrightMagenta" | "bgBrightCyan" | "bgBrightWhite";
type FunctionProps<T> = {
    helper: string;
    data: T;
    color?: LogColor;
    showFunctionOrigin?: boolean;
};

declare function println<T>({ helper, data, color, showFunctionOrigin, }: FunctionProps<T>): void;

export { println };