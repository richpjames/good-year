import { describe, it, expect, test } from "bun:test";
import { params } from ".";

describe("params", () => {
  test("it returns the query params", () => {
    expect(
      params(new Request("localhost:3000?player1=whats&player2=up"))
    ).toEqual(["whats", "up"]);
  });
});
