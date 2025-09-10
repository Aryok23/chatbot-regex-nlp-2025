const reflections = {
  "saya": "kamu",
  "aku": "kamu",
  "kamu": "saya",
  "gua": "lu",
  "lu": "gua"
};

function reflect(message) {
  const words = message.split(/\s+/);
  return words.map(word => reflections[word.toLowerCase()] || word).join(" ");
}

export { reflect };