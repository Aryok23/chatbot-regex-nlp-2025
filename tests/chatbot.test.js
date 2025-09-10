// chatbot.test.js
const { respond } = require("../src/chatbot");

describe("Chatbot Rules", () => {
  test("should respond to greeting", () => {
    expect(respond("halo")).toMatch(/Hai juga!/i);
    expect(respond("  hai!!! bro")).toMatch(/Hai juga!/i);
  });

  test("should respond to saham definition", () => {
    expect(respond("apa itu saham?")).toMatch(/Saham adalah/i);
  });

  test("should respond to reksadana definition", () => {
    expect(respond("tolong jelasin reksa dana")).toMatch(/Reksadana adalah/i);
  });

  test("should respond to obligasi definition", () => {
    expect(respond("maksud obligasi")).toMatch(/Obligasi adalah/i);
  });

  test("should respond to deposito definition", () => {
    expect(respond("definisi deposito")).toMatch(/Deposito adalah/i);
  });

  test("should respond to crypto definition", () => {
    expect(respond("apa itu crypto")).toMatch(/Cryptocurrency adalah/i);
  });

  test("should respond to risiko investasi", () => {
    expect(respond("apa risiko dalam investasi?")).toMatch(/Investasi tentu memiliki risiko/i);
  });

  test("should respond to keuntungan investasi", () => {
    expect(respond("apa saja keuntungan investasi")).toMatch(/Berinvestasi memiliki banyak manfaat/i);
  });

  test("should respond to keuntungan saham", () => {
    expect(respond("keuntungan saham")).toMatch(/Benefit Saham/i);
  });

  test("should respond to strategi investasi", () => {
    expect(respond("strategi investasi yang bagus apa?")).toMatch(/Strategi Investasi/i);
  });

  test("should respond to negative sentiment", () => {
    expect(respond("anjlok nih saham gue")).toMatch(/Tenang, pasar wajar/i);
  });

  test("should fallback if no match", () => {
    expect(respond("blablabla gatau maksudnya")).toMatch(/Maaf, saya belum paham/i);
  });
});

describe("Chatbot Reflection", () => {
  test("should reflect saya → kamu", () => {
    expect(respond("saya sedih")).toMatch(/Mengapa kamu sedih/i);
  });

  test("should reflect kamu → saya", () => {
    expect(respond("kamu marah")).toMatch(/Mengapa saya marah/i);
  });

  test("should reflect gua → lu", () => {
    expect(respond("gua capek")).toMatch(/Mengapa lu capek/i);
  });
});
