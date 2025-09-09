const { respond, reflect } = require("../chatbot");

test("sapaan halo", () => {
  expect(respond("halo")).toMatch(/Hai/i);
});

test("definisi saham", () => {
  expect(respond("tolong jelaskan saham")).toMatch(/Saham/i);
});

test("definisi reksadana", () => {
  expect(respond("apa itu reksadana?")).toMatch(/Reksadana/i);
});

test("definisi obligasi", () => {
  expect(respond("obligasi itu apa?")).toMatch(/Obligasi/i);
});

test("refleksi kata ganti", () => {
  expect(respond("saya ingin investasi")).toMatch(/Mengapa kamu ingin investasi/i);
});

test("fallback", () => {
  expect(respond("abcdef")).toMatch(/Maaf/i);
});
