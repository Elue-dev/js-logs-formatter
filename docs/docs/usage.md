---
sidebar_position: 2
---

# Basic Usage

To use JS Logs Formatter, import the `println` function and call it with a helper string, color and the data you want to log.

**Import:**

```typescript
import { println } from "js-logs-formatter";
```

### Sample Data

Here we have a sample data to log. Imagine this data is coming from your backend.

```typescript
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
```

Now, lets use the `println` function to log the user data to the console.

```typescript
println({
  data: user,
  showFunctionOrigin: false,
});
```

**Output without the `println` function:**

```bash
{"active": false, "address": {"city": "Anytown", "state": "CA", "street": "123 Main St", "zipCode": "12345"}, "age": 28, "createdAt": "2022-01-15T14:30:00Z", "email": "janedoe@example.com", "lastLogin": "2023-09-28T10:00:00Z", "name": "Jane Doe", "phone": "+1234567890", "points": 1500, "preferences": {"newsletter": true, "notifications": {"email": true, "sms": false}}, "roles": ["user", "admin"]}
```

**Output with the `println` function:**

This will log the user data to the console, in a very readable format.

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
