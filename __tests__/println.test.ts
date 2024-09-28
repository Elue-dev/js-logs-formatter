import println from "../lib/main";
import { LogColor } from "../types/types";

const originalLog = console.log;
beforeAll(() => {
  console.log = jest.fn();
});

afterAll(() => {
  console.log = originalLog;
});

describe("println", () => {
  it("should log correctly with function origin", () => {
    const helper = "User Data";
    const data = { name: "Jane Doe", age: 28 };
    const color: LogColor = "green";

    function testFunction() {
      println({ helper, data, color, showFunctionOrigin: true });
    }

    testFunction();

    const logMessage = (console.log as jest.Mock).mock.calls[0][0];
    expect(logMessage).toContain(helper);
    expect(logMessage).toContain("called from function: testFunction");
    expect(logMessage).toContain(JSON.stringify(data, null, 2));
    expect(logMessage).toContain("\x1b[32m");
  });

  it("should log correctly without function origin", () => {
    const helper = "System Info";
    const data = { status: "All systems operational" };
    const color: LogColor = "blue";

    println({ helper, data, color, showFunctionOrigin: false });

    const logMessage = (console.log as jest.Mock).mock.calls[1][0];
    expect(logMessage).toContain(helper);
    expect(logMessage).toContain(JSON.stringify(data, null, 2));
    expect(logMessage).toContain("\x1b[34m");
  });
});
