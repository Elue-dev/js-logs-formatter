# JS Logs Formatter

**JS Logs Formatter** is a lightweight logging utility designed to format server logs for better readability in tools like React Native, Node.js and Next.js server components. Also useful for SPAs. It aims to enhance your debugging experience by providing structured and easy-to-read log outputs.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Example](#example)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install **JS Logs Formatter** via npm or yarn:

```bash
yarn add js-logs-formatter
```

using npm:

```bash
npm install js-logs-formatter
```

Expo

```bash
npx expo install js-logs-formatter
```

## Usage

To use JS Logs Formatter, import the `println` function and call it with a helper string, color and the data you want to log.

```typescript
import { println } from "js-logs-formatter";

// Example data
const user = {
  name: "Jane Doe",
  age: 28,
  active: false,
  email: "janedoe@example.com",
  phone: "+1234567890",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zipCode: "12345",
  },
  preferences: {
    newsletter: true,
    notifications: {
      email: true,
      sms: false,
    },
  },
  createdAt: "2022-01-15T14:30:00Z",
  lastLogin: "2023-09-28T10:00:00Z",
  roles: ["user", "admin"],
  points: 1500,
};

// Using println with a helper text and color
println({
  helper: "User Data",
  data: user,
  color: "green", // Optional color for the log
  showFunctionOrigin: true, // Show the calling function and line number (default is true)
});
```

This will output the following to the console with a green color:

```bash
User Data (called from function: yourFunctionName at line yourLineNumber) =>
{
  "name": "Jane Doe",
  "age": 28,
  "active": false,
  "email": "janedoe@example.com",
  "phone": "+1234567890",
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "zipCode": "12345"
  },
  "preferences": {
    "newsletter": true,
    "notifications": {
      "email": true,
      "sms": false
    }
  },
  "createdAt": "2022-01-15T14:30:00Z",
  "lastLogin": "2023-09-28T10:00:00Z",
  "roles": [
    "user",
    "admin"
  ],
  "points": 1500
}
```

Note: Function name would not be printed out if called from the global context

### Minimal usage

```typescript
// Using println without helper text, function name or color
println({
  data: user,
});
```

This will output the following to the console:

```bash
{
  "name": "Jane Doe",
  "age": 28,
  "active": false,
  "email": "janedoe@example.com",
  "phone": "+1234567890",
  "address": {
    "street": "123 Main St",
    "city": "Anytown",
    "state": "CA",
    "zipCode": "12345"
  },
  "preferences": {
    "newsletter": true,
    "notifications": {
      "email": true,
      "sms": false
    }
  },
  "createdAt": "2022-01-15T14:30:00Z",
  "lastLogin": "2023-09-28T10:00:00Z",
  "roles": [
    "user",
    "admin"
  ],
  "points": 1500
}
```

## API

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

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue to discuss any changes.

## License

This project is licensed under the MIT License.
