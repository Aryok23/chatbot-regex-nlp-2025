// chatbot.js

// Refleksi kata ganti (misalnya "saya" -> "kamu")
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

// Regex rules
// const rules = [
//   { pattern: /\b(halo|hai|hello|hei)\b/i, response: "Hai! Ada yang bisa saya bantu soal investasi?" },
//   { pattern: /\bsaham\b/i, response: "Saham adalah bukti kepemilikan atas suatu perusahaan." },
//   { pattern: /\breksadana\b/i, response: "Reksadana adalah wadah untuk menghimpun dana dari masyarakat yang dikelola manajer investasi." },
//   { pattern: /\bbaaa*\b/i, response: "Obligasi adalah surat utang yang diterbitkan pemerintah atau perusahaan." },
//   { pattern: /\bcrypto|cryptocurrency|bitcoin|eth\b/i, response: "Crypto adalah aset digital berbasis blockchain, contohnya Bitcoin dan Ethereum." }
// ];

// const rules = [
//   // 1. Sapaan umum dengan variasi spasi dan tanda baca
//   { 
//     pattern: /^\s*(halo+|hai+|hello+|hei+)(?:[!?.]*\s*\w.*)?$/i, 
//     response: "Hai juga! Mau bahas apa hari ini? Saham, reksadana, obligasi, crypto, atau forex ?" 
//   },

//   // 2. Tanya definisi dengan variasi kalimat
//   { 
//     pattern: /\b(apa\s+itu|maksud(?:nya)?|definisi)\s+(saham|reksadana|obligasi|crypto|forex)\b/i, 
//     response: "Mari kita bahas definisinya: ..." 
//   },

//   // {
//   //   pattern: /\b(apa\s+itu|maksud(?:nya)?|definisi)\s+(saham|reksadana|obligasi|crypto|forex)\b/i,
//   //   handler: (match) => {
//   //     const keyword = match[2].toLowerCase();
//   //     switch (keyword) {
//   //       case "saham":
//   //         return "Saham adalah bukti kepemilikan atas suatu perusahaan. Pemegang saham berhak atas laba (dividen) dan potensi kenaikan harga saham.";
//   //       case "reksadana":
//   //         return "Reksadana adalah wadah untuk menghimpun dana dari masyarakat yang dikelola oleh manajer investasi ke dalam portofolio efek.";
//   //       case "obligasi":
//   //         return "Obligasi adalah surat utang jangka menengah/panjang yang diterbitkan oleh perusahaan atau pemerintah dengan kewajiban membayar bunga dan pokok pada waktu tertentu.";
//   //       case "crypto":
//   //         return "Crypto (mata uang kripto) adalah aset digital berbasis teknologi blockchain yang menggunakan kriptografi untuk keamanan dan transaksi.";
//   //       case "forex":
//   //         return "Forex (foreign exchange) adalah perdagangan valuta asing, di mana pelaku pasar memperjualbelikan mata uang dengan tujuan memperoleh keuntungan dari selisih kurs.";
//   //       default:
//   //         return "Mari kita bahas definisinya lebih lanjut.";
//   //     }
//   //   }
//   // },

//   // 3. Pertanyaan perbandingan (gunakan | untuk pilihan)
//   { 
//     pattern: /\bbeda(?:nya)?\s+(saham|crypto|forex)\s+dengan\s+(obligasi|reksadana|deposito)\b/i, 
//     response: "Oke, perbandingannya begini: ..." 
//   },

//   // 4. Tanya nominal investasi (gunakan \d untuk angka)
//   { 
//     pattern: /\binvestasi\s+(?:sebesar\s+)?(\d{1,9})(?:\s*(?:ribu|juta|miliar))?\b/i, 
//     response: "Jumlah investasi yang kamu sebutkan menarik! Yuk kita diskusikan risikonya." 
//   },

//   // 5. Cari ROI, profit, atau return (pakai grup dengan | dan \%)
//   { 
//     pattern: /\b(ro[iu]|profit|return)\s*(\d{1,3})\s*%?\b/i, 
//     response: "Target return/profit terdeteksi. Ingat, semakin besar return biasanya risikonya juga tinggi." 
//   },

//   // 6. Tanya cara (pakai ^ untuk awal kalimat dan \? opsional)
//   { 
//     pattern: /^bagaimana\s+cara\s+(trading|investasi|beli|jual)\s+(saham|crypto|obligasi|forex)\??$/i, 
//     response: "Cara paling umum adalah membuka akun di platform resmi, lalu mulai dengan dana kecil." 
//   },

//   // 7. Deteksi emosi (pakai .* dan tanda baca berulang)
//   { 
//     pattern: /(rugi+|anjlok+|bangkrut+)[!?.]*/i, 
//     response: "Tenang, pasar memang naik-turun. Diversifikasi bisa membantu mengurangi risiko." 
//   },

//   // 8. Tanya waktu / kapan (pakai \d dan {4} untuk tahun)
//   { 
//     pattern: /\bkapan\s+(saham|crypto|forex)\s+(naik|turun)\b.*(\d{4})?/i, 
//     response: "Tidak ada yang bisa memprediksi waktu dengan pasti, tetapi ada analisis teknikal & fundamental." 
//   },

//   // 9. Tanya harga spesifik (pakai simbol mata uang Rp atau $)
//   { 
//     pattern: /\b(harga)\s+(bitcoin|btc|eth|saham)\s*(Rp|\$)?\s*\d{2,9}\b/i, 
//     response: "Harga yang kamu sebutkan bisa berubah cepat, pastikan cek data real-time dari platform resmi." 
//   },

//   // 10. Pertanyaan umum fallback (gunakan \w+ dan \s*)
//   { 
//     pattern: /\b(apakah|bisakah|bolehkah)\s+\w+\s+(saham|crypto|reksadana|forex)\b/i, 
//     response: "Pertanyaan menarik! Bisa dijelaskan lebih detail supaya saya bisa bantu jawab?" 
//   }
// ];

const rules = [
  // 1. Sapaan umum dengan variasi spasi dan tanda baca
  { 
    pattern: /^\s*(halo+|hai+|hello+|hei+)[!?.]*\s*$/i, 
    response: "Hai juga! Mau bahas apa hari ini? Saham, crypto, forex, atau reksadana?" 
  },
  // ✅ Contoh match:
  // "halo", "Halo!!!", "  hai?", "hello...", "hei!!"


  // 2. Tanya definisi dengan variasi kalimat
  { 
    pattern: /\b(apa\s+itu|maksud(?:nya)?|definisi)\s+(saham|reksadana|obligasi|crypto|forex)\b/i, 
    response: "Oke, ini definisinya: \n- Saham = bukti kepemilikan perusahaan\n- Reksadana = kumpulan dana dikelola manajer investasi\n- Obligasi = surat utang\n- Crypto = aset digital berbasis blockchain\n- Forex = perdagangan mata uang" 
  },
  // ✅ Contoh match:
  // "apa itu saham", "maksudnya reksadana", "definisi crypto"


  // 3. Pertanyaan perbandingan
  { 
    pattern: /\bbeda(?:nya)?\s+(saham|crypto|forex)\s+dengan\s+(obligasi|reksadana|deposito)\b/i, 
    response: "Perbedaannya cukup jelas:\n- Saham/crypto/forex = aset berisiko tinggi, harga bisa naik-turun cepat\n- Obligasi/reksadana/deposito = cenderung lebih aman, return stabil tapi lebih rendah" 
  },
  // ✅ Contoh match:
  // "bedanya saham dengan obligasi", "apa beda crypto dengan deposito"


  // 4. Tanya nominal investasi
  { 
    pattern: /\binvestasi\s+(?:sebesar\s+)?(\d{2,9})(?:\s*(?:ribu|juta|miliar))?\b/i, 
    response: "Jumlah investasi yang kamu sebutkan menarik! Prinsipnya, jangan taruh semua dana di satu instrumen. Diversifikasi bisa mengurangi risiko." 
  },
  // ✅ Contoh match:
  // "investasi 500000", "investasi sebesar 10 juta", "investasi 100 miliar"


  // 5. Cari ROI, profit, atau return
  { 
    pattern: /\b(ro[iu]|profit|return)\s*(\d{1,3})\s*%?\b/i, 
    response: "Target return/profit terdeteksi. Ingat, makin tinggi return yang dijanjikan, makin besar juga risikonya." 
  },
  // ✅ Contoh match:
  // "ROI 20%", "profit 15", "return 30%"


  // 6. Tanya cara investasi/trading
  { 
    pattern: /^bagaimana\s+cara\s+(trading|investasi|beli|jual)\s+(saham|crypto|obligasi|forex)\??$/i, 
    response: "Biasanya langkah-langkahnya:\n1. Buka akun di platform resmi\n2. Lakukan verifikasi identitas\n3. Deposit dana\n4. Mulai dengan jumlah kecil untuk belajar" 
  },
  // ✅ Contoh match:
  // "bagaimana cara trading saham?", "bagaimana cara beli crypto", "bagaimana cara investasi obligasi"


  // 7. Deteksi emosi negatif
  { 
    pattern: /(rugi+|anjlok+|bangkrut+)[!?.]*/i, 
    response: "Tenang, pasar wajar naik-turun. Saran: jangan panik, evaluasi strategi, dan pastikan dana darurat aman." 
  },
  // ✅ Contoh match:
  // "rugi!", "anjlokkk...", "bangkrut!!!"


  // 8. Tanya waktu / kapan
  { 
    pattern: /\bkapan\s+(saham|crypto|forex)\s+(naik|turun)\b.*(\d{4})?/i, 
    response: "Tidak ada yang bisa memprediksi waktu dengan pasti. Tapi, analisis teknikal dan fundamental bisa bantu membaca tren." 
  },
  // ✅ Contoh match:
  // "kapan saham naik", "kapan crypto turun 2025", "kapan forex naik"


  // 9. Tanya harga spesifik
  { 
    pattern: /\b(harga)\s+(bitcoin|btc|eth|saham)\s*(Rp|\$)?\s*\d{2,9}\b/i, 
    response: "Harga yang kamu sebutkan bisa berubah cepat! Pastikan cek data real-time di aplikasi atau website resmi." 
  },
  // ✅ Contoh match:
  // "harga bitcoin Rp500000000", "harga eth $2000", "harga saham 10000"


  // 10. Pertanyaan umum fallback
  { 
    pattern: /\b(apakah|bisakah|bolehkah)\s+\w+\s+(saham|crypto|reksadana|forex)\b/i, 
    response: "Pertanyaan bagus! Bisa lebih detail lagi supaya saya bisa kasih jawaban yang lebih tepat." 
  }
  // ✅ Contoh match:
  // "apakah aman saham", "bisakah kaya dari crypto", "bolehkah mahasiswa ikut forex"
];

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

module.exports = { respond, reflect };
