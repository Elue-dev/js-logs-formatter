import { colorCodes } from "./colors";
import { FunctionProps } from "./types";

export default function println<T>({
  helper,
  data,
  color = "reset",
  showFunctionOrigin = true,
}: FunctionProps<T>) {
  const formattedLog = JSON.stringify(data, null, 2);

  const stack = new Error().stack?.split("\n");
  const callerInfo = stack ? stack[2] : "unknown";

  const match = callerInfo.match(/at (\S+) \(([^)]+)\)/);
  const callerFunctionName = match ? match[1] : undefined;

  const colorCode = colorCodes[color];

  const logMessage = showFunctionOrigin
    ? callerFunctionName
      ? `${helper} (called from function: ${callerFunctionName}) =>\n${colorCode}${formattedLog}${colorCodes.reset}`
      : `${helper} =>\n${colorCode}${formattedLog}${colorCodes.reset}`
    : `${helper} =>\n${colorCode}${formattedLog}${colorCodes.reset}`;

  console.log(logMessage);
}
