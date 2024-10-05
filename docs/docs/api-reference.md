---
sidebar_position: 4
---

# API Reference

| **Prop**             | **Description**                                                                                            | **Default**         |
| -------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------- |
| `helper`             | A string that describes the context of the log message. It helps identify what the logged data represents. | `""` (empty string) |
| `data`               | The data you want to log, which can be of any type (e.g., object, array, string).                          | N/A                 |
| `color`              | The color applied to the logged data. Available color options are listed [here](#available-colors).        | `reset`             |
| `showFunctionOrigin` | Determines whether the logs will show the name of the function and line number where `println` was called. | `true`              |

## Available Colors

The `color` prop allows you to customize the color of the log output. Here are the available color options:

### Foreground Colors:

- `reset`
- `red`
- `green`
- `yellow`
- `blue`
- `magenta`
- `cyan`
- `white`
- `black`

### Bright Foreground Colors:

- `brightRed`
- `brightGreen`
- `brightYellow`
- `brightBlue`
- `brightMagenta`
- `brightCyan`
- `brightWhite`

### Background Colors:

- `bgRed`
- `bgGreen`
- `bgYellow`
- `bgBlue`
- `bgMagenta`
- `bgCyan`
- `bgWhite`
- `bgBlack`

### Bright Background Colors:

- `bgBrightRed`
- `bgBrightGreen`
- `bgBrightYellow`
- `bgBrightBlue`
- `bgBrightMagenta`
- `bgBrightCyan`
- `bgBrightWhite`

You can use any of these options when passing the `color` prop to the `println` function.
