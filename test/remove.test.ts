import { remove } from "../src/remove";

test("remove ONLY the cantillation", () => {
  expect(
    remove(
      "\u{5D1}\u{5B0}\u{5BC}\u{5E8}\u{5B5}\u{5D0}\u{5E9}\u{5B4}\u{5C1}\u{596}\u{5D9}\u{5EA} \u{5D1}\u{5B8}\u{5BC}\u{5E8}\u{5B8}\u{5A3}\u{5D0} \u{5D0}\u{5B1}\u{5DC}\u{5B9}\u{5D4}\u{5B4}\u{591}\u{5D9}\u{5DD}"
    )
  ).toBe(
    "\u{5D1}\u{5B0}\u{5BC}\u{5E8}\u{5B5}\u{5D0}\u{5E9}\u{5B4}\u{5C1}\u{5D9}\u{5EA} \u{5D1}\u{5B8}\u{5BC}\u{5E8}\u{5B8}\u{5D0} \u{5D0}\u{5B1}\u{5DC}\u{5B9}\u{5D4}\u{5B4}\u{5D9}\u{5DD}"
  );
});

test("remove cantillation AND vowels", () => {
  expect(
    remove(
      "\u{5D1}\u{5B0}\u{5BC}\u{5E8}\u{5B5}\u{5D0}\u{5E9}\u{5B4}\u{5C1}\u{596}\u{5D9}\u{5EA} \u{5D1}\u{5B8}\u{5BC}\u{5E8}\u{5B8}\u{5A3}\u{5D0} \u{5D0}\u{5B1}\u{5DC}\u{5B9}\u{5D4}\u{5B4}\u{591}\u{5D9}\u{5DD}",
      { removeVowels: true }
    )
  ).toBe("\u{5D1}\u{5E8}\u{5D0}\u{5E9}\u{5D9}\u{5EA} \u{5D1}\u{5E8}\u{5D0} \u{5D0}\u{5DC}\u{5D4}\u{5D9}\u{5DD}");
});

test("remove cantillation AND vowels with alphabetic presentation block", () => {
  // בְּﬧֵﬡשִׁיﬨ
  expect(
    remove("\u{FB31}\u{5B0}\u{FB27}\u{5B5}\u{FB21}\u{FB2A}\u{5B4}\u{5D9}\u{FB28}", {
      removeVowels: true
    })
  ).toBe("\u{5D1}\u{FB27}\u{FB21}\u{FB2A}\u{5D9}\u{FB28}");
});
