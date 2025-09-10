import { rules } from "./rules.js";
import { reflect } from "./reflector.js";

function respond(message) {
  for (let rule of rules) {
    if (rule.pattern.test(message)) {
      return rule.response;
    }
  }

  // Refleksi kata ganti
  if (/saya|aku|kamu|gua|lu/i.test(message)) {
    return "Mengapa " + reflect(message) + "?";
  }

  // Fallback
  return "Maaf, saya belum paham maksudmu. Bisa jelaskan lagi?";
}

export { respond};