import { deepEqual } from "node:assert/strict";
import test from "node:test";

// const data = [
//   { id: "964465c7-ee20-40bf-9b5a-96631799c731", name: "Elton Johnson" },
//   { id: "508d1603-6a96-48ea-ab14-c0e9bc0f710d", name: "Id Po" },
// ];

type Person = {
  id: string;
  name: string;
};

function uppercaseNames(names: Person[]) {
  return [];
}

test("UpperCaseNames works with empty array", () => {
  const result = uppercaseNames([]);

  deepEqual(result, []);
});
