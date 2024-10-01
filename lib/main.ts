import { colorCodes } from "./colors";
import { PrintLn } from "../types/types";

let fs: typeof import("fs") | undefined;
let path: typeof import("path") | undefined;

export default async function println<T>({
  helper,
  data,
  color = "reset",
  showFunctionOrigin = true,
  writeToFile = false,
}: PrintLn<T>) {
  const formattedLog = JSON.stringify(data, null, 2);

  if (typeof window === "undefined") {
    fs = await import("fs");
    path = await import("path");
  }

  const stack = new Error().stack?.split("\n");
  const callerInfo = stack ? stack[2] : "unknown";

  const match = callerInfo.match(/at (\S+) \(([^)]+)\)/);
  const callerFunctionName = match ? match[1] : undefined;
  const callerFilePath = match ? match[2].split(":")[0] : undefined;
  const callerFileName = callerFilePath
    ? typeof window === "undefined"
      ? path?.basename(callerFilePath)
      : callerFilePath.split("/").pop()
    : undefined;

  const colorCode = colorCodes[color];

  const logMessage = showFunctionOrigin
    ? callerFunctionName
      ? `${colorCode}${helper} (called from function: ${callerFunctionName} ${
          callerFileName && `in ${callerFileName}`
        }) =>\n${colorCode}${formattedLog}${colorCodes.reset}`
      : `${colorCode}${helper} ${
          callerFileName && `(called from ${callerFileName}`
        } ) =>\n${colorCode}${formattedLog}${colorCodes.reset}`
    : `${colorCode}${helper} =>\n${colorCode}${formattedLog}${colorCodes.reset}`;

  console.log(logMessage);

  if (writeToFile && typeof window === "undefined") {
    const logFilePath = path?.join(__dirname, "app_logs.txt");

    const plainLogMessage = showFunctionOrigin
      ? callerFunctionName
        ? `${helper} (called from function: ${callerFunctionName} ${
            callerFileName && `in ${callerFileName}`
          }) =>\n${formattedLog}\n`
        : `${helper} (called from ${callerFileName}) =>\n${formattedLog}\n\n`
      : `${helper} =>\n${formattedLog}\n\n`;

    try {
      fs?.appendFileSync(logFilePath!, plainLogMessage, { encoding: "utf-8" });
      console.log(`Log written to ${logFilePath}`);
    } catch (error) {
      console.error("Failed to write log to file:", error);
    }
  }
}
