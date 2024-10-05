import { colorCodes } from "./colors";
import { PrintLn } from "../types/types";

export default function println<T>({
  helper,
  data,
  color = "reset",
  showFunctionOrigin = true,
}: PrintLn<T>) {
  const formattedLog = JSON.stringify(data, null, 2);

  const stack = new Error().stack?.split("\n");
  const callerInfo = stack ? stack[2] : "unknown";

  const match = callerInfo.match(/at (\S+) \(([^)]+)\)/);
  const callerFunctionName = match ? match[1] : undefined;
  const callerFilePath = match ? match[2] : "unknown path";
  const callerFileParts = callerFilePath.split(":");
  const callerFileName = callerFileParts[0].split("/").pop() || "unknown file";
  const lineNumber = callerFileParts[1] || "unknown line";

  const colorCode = colorCodes[color];
  let logMessage: string;

  if (showFunctionOrigin) {
    if (callerFunctionName && callerFunctionName !== "Object.<anonymous>") {
      logMessage = `${colorCode}${helper} (called from function: ${callerFunctionName} in ${callerFileName} at line ${lineNumber}) =>\n${colorCode}${formattedLog}${colorCodes.reset}`;
    } else {
      logMessage = `${colorCode}${helper} (called in ${callerFileName} at line ${lineNumber}) =>\n${colorCode}${formattedLog}${colorCodes.reset}`;
    }
  } else {
    logMessage = `${colorCode}${helper} =>\n${colorCode}${formattedLog}${colorCodes.reset}`;
  }

  console.log(logMessage);
}
