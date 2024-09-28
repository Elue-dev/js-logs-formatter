# JS Logs Formatter

**JS Logs Formatter** is a lightweight logging utility designed to format server logs for better readability in tools like React Native and Next.js server components. It aims to enhance your debugging experience by providing structured and easy-to-read log outputs.

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

OR

```bash
npm i js-logs-formatter
```

## Usage

To use JS Logs Formatter, import the `println` function and call it with a helper string and the data you want to log.

```typescript
import println from "js-logs-formatter";

// Example data
const user = {
  name: "Jane Doe",
  age: 28,
  active: false,
};

// Using println
println("User Data", user);
```

This will output the following to the console:

```bash
User Data =>
{
  "name": "Jane Doe",
  "age": 28,
  "active": false
}
```

```typescript
// Using println without helper text
println("User Data", user, false);
```

This will output the following to the console:

```bash
{
  "name": "Jane Doe",
  "age": 28,
  "active": false
}
```

## API

- helper: A string that describes the context of the log message. It helps identify what the logged data represents.
- data: The data you want to log, which can be of any type (e.g., object, array, string).
- shouldShowHelper: Determines whethr the logs would show the helper text or not.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue to discuss any changes.

## License

This project is licensed under the MIT License.

```

```
