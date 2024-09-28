type LogColor = "reset" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white";

declare function println<T>(helper: string, data: T, color?: LogColor, addStackTrace?: boolean): void;

export { println };
