const rules = [
  // Sapaan umum dengan variasi spasi dan tanda baca
  { 
    pattern: /^\s*(halo+|hai+|hello+|hei+)(?:[!?.]*\s*\w.*)?$/i,  
    response: "Hai juga! Mau bahas apa hari ini? Saham, Obligasi, Reksadana, Deposito, atau Crypto?" 
  },
  
  // Risiko dalam berinvestasi
  {
    pattern: /\b(apa(kah)?\s+(risiko|resiko)\s+((dari|dalam)\s+)?investasi|risiko\s+investasi)\b/i,
    // "apakah investasi memiliki risiko?"
    // "apa risiko dalam investasi?"
    // "risiko investasi"
    // "apa risiko dari investasi?"
    // "apakah ada resiko investasi?"
    response: `Investasi tentu memiliki risiko, kita harus bisa menyesuaikan pilihan instrumen investasi kita dengan profil risiko yang kita miliki. Profil risiko sendiri umumnya terbagi menjadi tiga:
    1. **Konservatif** → fokus pada keamanan modal, cocok untuk deposito, obligasi pemerintah, atau reksa dana pasar uang. 
    2. **Moderat** → seimbang antara risiko dan imbal hasil, cocok untuk obligasi, reksa dana campuran, sebagian saham. 
    3. **Agresif** → siap menanggung risiko tinggi demi potensi keuntungan besar, cocok untuk saham individu, forex, crypto, atau komoditas.  

    Nah, dari ketiganya, kamu kira lebih cocok yang mana?`
  },

  // Tanya profil risiko konservatif
  {
    pattern: /\b(apa\s+(itu\s+)?profil\s+risiko\s+konservatif|profil\s+risiko\s+konservatif|investor\s+konservatif|ciri(|-ciri)\s+(investor\s+)?konservatif|karakteristik\s+profil\s+risiko\s+konservatif|instrumen\s+(investasi\s+)?(untuk|bagi)\s+konservatif)\b/i,
    // "apa itu profil risiko konservatif?"
    // "profil risiko konservatif"
    // "investor konservatif itu apa?"
    // "ciri investor konservatif"
    // "karakteristik profil risiko konservatif"
    // "instrumen untuk konservatif"
    response: `Profil risiko konservatif mencerminkan investor yang mengutamakan keamanan modal di atas segalanya. Investor konservatif cendrung tidak menyukai fluktuasi nilai investasi dan lebih memilih instrumen yang stabil dan aman. Tujuan utama mereka adalah melindungi modal daripada mengejar imbal hasil besar. Ada beberapa karakteristik profil investor konservatif, yaitu:
    1. Minim risiko.
    2. Memiliki preferensi investasi yang mengacu pada keamanan modal dan stabilitas penghasilan investasi dibandingkan nilai pengembalian yang lebih tinggi.
    3. Cocok untuk investasi jangka pendek atau mereka yang mendekati pensiun.
    4. Instrumen investasi yang cocok deposito, obligasi pemerintah, reksa dana pendapatan tetap, reksa dana pasar uang, dan surat utang negara.`
  },

  // Tanya profil risiko moderat
  {
    pattern: /\b(apa\s+(itu\s+)?profil\s+risiko\s+moderat|profil\s+risiko\s+moderat|investor\s+moderat|ciri(|-ciri)\s+(investor\s+)?moderat|karakteristik\s+profil\s+risiko\s+moderat|instrumen\s+(investasi\s+)?(untuk|bagi)\s+moderat)\b/i,
    response: `Investor moderat memiliki toleransi risiko yang lebih tinggi dibandingkan profil konservatif, tetapi tetap berhati-hati dalam memilih instrumen investasi. Jika Anda memiliki tipe moderat, Anda akan mencari keseimbangan antara risiko dan imbal hasil, dengan tujuan mengembangkan modal secara bertahap tanpa terlalu banyak mengekspos diri pada risiko tinggi.
    \nBerikut adalah karakteristik dari profil investor moderat:
    1. Berani mengambil risiko, tetapi tetap hati-hati.
    \n2. Menginginkan keseimbangan antara keamanan dan pertumbuhan.
    \n3. Investor tipe ini umumnya rutin mengawasi pergerakan nilai investasi supaya tidak memicu efek kerugian lebih besar.
    \n4. Instrumen investasi yang cocok obligasi, reksa dana campuran, dan sebagian kecil saham (saham-saham bluechip).`
  },

  // Tanya profil risiko agresif
  {
    pattern: /\b(apa\s+(itu\s+)?profil\s+risiko\s+agresif|profil\s+risiko\s+agresif|investor\s+agresif|ciri(|-ciri)\s+(investor\s+)?agresif|karakteristik\s+profil\s+risiko\s+agresif|instrumen\s+(investasi\s+)?(untuk|bagi)\s+agresif)\b/i,
    response: `Profil agresif menggambarkan investor yang siap menghadapi risiko tinggi untuk mendapatkan imbal hasil yang besar. Mereka cenderung fokus pada investasi jangka panjang dan memiliki kemampuan untuk menahan fluktuasi pasar yang ekstrem. Meskipun risiko kerugian tinggi, potensi keuntungan yang ditawarkan juga besar.
    \nBerikut adalah karakteristik profil agresif saat berinvestasi:
    1. Siap menghadapi volatilitas pasar.
    \n2. Tujuan jangka panjang dengan fokus pada imbal hasil maksimal.
    \n3. Biasanya memiliki diversifikasi di sektor-sektor dengan potensi pertumbuhan tinggi.
    \n4. Instrumen investasi yang cocok saham individu, reksa dana saham, pasar forex, cryptocurrency, dan komoditas.`
  },

  // keuntungan investasi secara umum
  {
    pattern: /\b(apa\s+(saja\s+)?(keuntungan|manfaat|benefit|kegunaan)\s+(dari|ber)?investasi|keuntungan\s+investasi|manfaat\s+investasi|benefit\s+investasi)\b/i,
    response: `Berinvestasi memiliki banyak manfaat secara umum, di antaranya:
    1. Aset bertumbuh seiring waktu.
    \n2. Memberikan potensi pendapatan pasif.
    \n3. Melindungi nilai uang dari inflasi.
    \nSelain keuntungan umum, setiap instrumen investasi juga punya benefit spesifik. Coba tanyakan misalnya: "keuntungan saham", "keuntungan obligasi", "keuntungan reksa dana", "keuntungan deposito", atau "keuntungan crypto".`
  },

  // keuntungan saham
  {
    pattern: /\b(keuntungan|manfaat|benefit)\s+(saham)\b/i,
    response: `Benefit Saham:
    1. Potensi keuntungan tinggi dibanding obligasi atau deposito.
    \n2. Perlindungan dari inflasi karena nilai aset bisa tumbuh lebih cepat.
    \n3. Likuiditas tinggi — mudah dibeli dan dijual di pasar modal.`
  },

  // keuntungan obligasi
  {
    pattern: /\b(keuntungan|manfaat|benefit)\s+(obligasi)\b/i,
    response: `Benefit Obligasi:
    1. Pendapatan tetap berupa kupon rutin (bunga).
    \n2. Risiko relatif rendah dibanding saham.
    \n3. Potensi capital gain jika dijual di pasar sekunder sebelum jatuh tempo.`
  },

  // keuntungan reksa dana
  {
    pattern: /\b(keuntungan|manfaat|benefit)\s+(reksa\s*dana)\b/i,
    response: `Benefit Reksa Dana:
    1. Modal awal terjangkau (mulai Rp10.000).
    \n2. Diversifikasi portofolio untuk mengurangi risiko.
    \n3. Dikelola profesional oleh manajer investasi.`
  },

  // keuntungan deposito
  {
    pattern: /\b(keuntungan|manfaat|benefit)\s+(deposito)\b/i,
    response: `Benefit Deposito:
    1. Bunga tetap lebih tinggi dari tabungan biasa.
    \n2. Dijamin oleh LPS hingga Rp2 miliar.
    \n3. Risiko sangat rendah, cocok untuk profil konservatif.`
  },

  // keuntungan cryptocurrency
  {
    pattern: /\b(keuntungan|manfaat|benefit)\s+(crypto|cryptocurrency|bitcoin|eth|ethereum)\b/i,
    response: `Benefit Cryptocurrency:
    1. Bisa dimiliki dan ditransaksikan kapanpun, tanpa batas negara.
    \n2. Lebih tahan terhadap inflasi moneter (contoh: Bitcoin jumlahnya terbatas 21 juta).
    \n3. Transparan, cepat, dan praktis.`
  },

  // Tanya cara investasi/trading
  { 
  // "bagaimana cara memulai investasi?"
  // "langkah-langkah melakukan investasi apa saja?"
  // "apa saja tahapan investasi untuk pemula?"
  // "cara mulai investasi agar aman gimana?"
  // "apa saja persiapan sebelum investasi?"
  // "gimana alur investasi dari awal sampai jalan?"
  // "bagaimana cara memulai investasi?"
  // "langkah-langkah investasi apa aja?"
  // "tahapan investasi"
  // "alur investasi dari awal gimana?"
  // "persiapan sebelum investasi"
  
    pattern: /\b((baga|g)imana\s+(cara|langkah)(-langkah)?\s+(memulai|melakukan)?\s*investasi|tahapan\s+investasi|alur\s+investasi|persiapan\s+sebelum\s+investasi)\b/i,
    response: `Biasanya langkah-langkah melakukan investasi:
    \n1. **Siapkan Diri Secara Finansial**
    \nPastikan Anda sudah memiliki dana darurat untuk kebutuhan mendesak dan utang-utang konsumtif sudah lunas.
    \n2. **Tentukan Tujuan Investasi**
    \nTetapkan tujuan finansial yang jelas, seperti membeli rumah, dana pendidikan, atau pensiun, agar Anda bisa memilih strategi investasi yang sesuai.
    \n3. **Pahami Profil Risiko Anda**
    \nKetahui seberapa besar risiko yang sanggup Anda tanggung, mulai dari konservatif, moderat, hingga agresif, untuk menyesuaikan dengan instrumen investasi. 
    \n4. **Pilih Instrumen Investasi**
    \nPelajari berbagai pilihan seperti reksa dana, saham, obligasi, atau P2P lending, lalu pilih yang paling sesuai dengan tujuan dan profil risiko Anda. 
    \n5. **Pilih Platform Investasi**
    \nDaftarkan diri pada perusahaan sekuritas, bank, atau platform investasi yang terdaftar dan diawasi oleh OJK untuk memastikan keamanan. 
    \n6. **Buka Rekening Investasi**
    \nIsi formulir yang diperlukan dan lengkapi dokumen persyaratan seperti fotokopi KTP dan NPWP untuk membuka rekening investasi.
    \n7. **Investasi dan Pantau**
    \nMulai dengan investasi kecil dan pantau secara berkala kinerja portofolio Anda, namun hindari reaksi berlebihan terhadap fluktuasi pasar jangka pendek.`
  },

  // Syarat-syarat menjadi investor
  {
  // "syarat untuk menjadi investor apa aja?"
  // "apa saja yang harus dipersiapkan untuk jadi investor?"
  // "dokumen apa yang dibutuhkan untuk membuka rekening investasi?"
  // "apakah harus punya NPWP untuk investasi?"
  // "berapa usia minimal untuk bisa investasi?"
  // "apa persyaratan agar bisa daftar di platform investasi?"
    pattern: /\b(syarat(|-syarat)?\s+(untuk\s+)?(jadi|menjadi)\s+investor|persyaratan\s+investasi|dokumen\s+(untuk\s+)?investasi|usia\s+minimal\s+investasi|apakah\s+harus\s+punya\s+npwp)\b/i,
    response: `Syarat-syarat menjadi investor:
    \n1. **Identitas**
    \nMemiliki Kartu Tanda Penduduk (KTP) atau dokumen identitas lain yang berlaku. 
    \n2. **NPWP**
    \nNomor Pokok Wajib Pajak yang terdaftar. 
    \n3. **Rekening Bank Aktif**
    \nMemiliki rekening tabungan di bank yang sama dengan platform investasi yang Anda pilih. 
    \n4. **Akses Internet**
    \nUntuk melakukan pendaftaran dan transaksi melalui platform online. 
    \n5. **Usia**
    \nBiasanya investor harus berusia minimal 17 tahun untuk bisa membuka rekening investasi.`
  },

  // Rekomendasi platform untuk investasi
  {
    // "platform untuk investasi apa saja?"
    // "aplikasi investasi terbaik?"
    // "rekomendasi aplikasi investasi saham?"
    // "tempat beli obligasi online"
    // "aplikasi untuk deposito"
    // "platform investasi cryptocurrency yang aman apa?"
    pattern: /\b(platform(|-platform)?\s+(untuk\s+)?investasi|aplikasi\s+investasi|rekomendasi\s+(platform|aplikasi)\s+investasi|aplikasi\s+(saham|reksa\s*dana|obligasi|deposito|crypto)|tempat\s+(beli|investasi)\s+(saham|obligasi|reksadana|deposito|cryptocurrency))\b/i,
    response: `Berikut rekomendasi platform untuk investasi (keamanan & legalitas sudah tervalidasi):
    - **Saham & Reksadana**: Ajaib, Bibit, Bareksa, DBS digibank  
    - **Obligasi**: DBS digibank, Bibit (FR), EKUID, Livin' Mandiri, Danamon D-Bank Pro, BCA  
    - **Deposito**: DBS digibank, Nobu Go, SeaBank, BluDeposit, Superbank  
    - **Cryptocurrency**: Indodax, Tokocrypto, Pintu, Triv, Pluang, Ajaib`
  },

  // Strategi dan tips melakukan investasi
  {
  // "strategi dalam investasi apa aja?"
  // "bagaimana cara melakukan investasi?"
  // "tips investasi untuk pemula"
  // "langkah investasi yang benar"
  // "panduan investasi aman"
    pattern: /\b(strategi(|-strategi)?\s+(dalam\s+)?investasi|bagaimana\s+(cara|langkah)\s+(melakukan|memulai)\s+investasi|tips\s+investasi|panduan\s+investasi|cara\s+berinvestasi|langkah(|-langkah)?\s+investasi)\b/i,
    response: `Berikut strategi dan tips melakukan investasi:  

    **Strategi Investasi:**  
    1. **Tentukan Tujuan Investasi** 
    Apakah untuk dana darurat, pendidikan, rumah, pensiun, atau menambah aset.  
    2. **Kenali Profil Risiko**  
      - Konservatif → deposito, obligasi pemerintah, reksa dana pasar uang.  
      - Moderat → kombinasi obligasi, reksa dana campuran, saham blue chip.  
      - Agresif → saham, reksa dana saham, cryptocurrency.  
    3. **Diversifikasi (Don't Put All Eggs in One Basket)**
    Campur instrumen aman & berisiko.  
    4. **Dollar-Cost Averaging (DCA)**
    Rutin investasi nominal sama tiap periode.  
    5. **Jangka Panjang Lebih Menguntungkan**
    Terutama saham & reksa dana.  
    6. **Rebalancing Portofolio**
    Sesuaikan komposisi tiap 6-12 bulan.  
    7. **Manfaatkan Instrumen Sesuai Kebutuhan** →  
      - Dana darurat → tabungan/deposito  
      - Tujuan menengah (3-5 tahun) → obligasi/reksa dana pendapatan tetap  
      - Tujuan jangka panjang (5-10 tahun+) → saham/reksa dana saham/kripto  

    **Tips Investasi:**  
    - Mulai dari nominal kecil, yang penting konsisten.  
    - Gunakan uang dingin, jangan dana kebutuhan harian.  
    - Lakukan riset sebelum membeli instrumen.  
    - Waspadai FOMO, jangan asal ikut tren.  
    - Pilih platform resmi (OJK/Bappebti).  
    - Catat & pantau perkembangan portofolio.  
    - Tingkatkan literasi keuangan (buku, artikel, webinar).`
  },

  // Deteksi emosi negatif
  { 
    pattern: /(rugi+|anjlok+|bangkrut+)[!?.]*/i, 
    response: "Tenang, pasar wajar naik-turun. Saran dariku jangan panik, evaluasi strategi, dan pastikan dana darurat aman." 
  },

  // Pertanyaan umum fallback
  { 
    pattern: /\b(apakah|bisakah|bolehkah)\s+.+?\s+(saham|crypto|reksadana|forex)\b/i, 
    response: "Pertanyaan bagus! Bisa lebih detail lagi supaya saya bisa kasih jawaban yang lebih tepat." 
  },

  // Tanya definisi saham
  { 
    pattern: /\b((apa\s+itu|maksud(?:nya)?|definisi)\s+)?(saham)\b/i, 
    response: "Saham adalah surat berharga yang menjadi bukti kepemilikan seseorang atau lembaga atas suatu perusahaan. Dengan membeli saham, investor menjadi salah satu pemilik perusahaan tersebut dan berhak atas dividen (pembagian laba) dan ikut serta dalam pengambilan keputusan perusahaan melalui Rapat Umum Pemegang Saham (RUPS). Saham diperdagangkan di pasar modal seperti Bursa Efek Indonesia (BEI), di mana harganya ditentukan oleh permintaan dan penawaran" 
  },

  // Tanya definisi reksadana
  { 
    pattern: /\b((apa\s+itu|maksud(?:nya)?|definisi)\s+)?(reksa\s*dana)\b/i, 
    response: "Reksadana adalah wadah atau instrumen investasi yang menghimpun dana dari banyak investor untuk kemudian diinvestasikan oleh Manajer Investasi (MI) ke dalam portofolio efek seperti saham, obligasi, atau pasar uang. Manajer investasi mengelola dana tersebut secara profesional demi mendapatkan keuntungan maksimal bagi para investor" 
  },

  // Tanya definisi obligasi
  { 
    pattern: /\b((apa\s+itu|maksud(?:nya)?|definisi)\s+)?(obligasi)\b/i, 
    response: "Obligasi adalah surat utang jangka menengah hingga panjang yang diterbitkan oleh pemerintah atau perusahaan untuk mengumpulkan dana dari publik. Saat membeli obligasi, Anda meminjamkan uang kepada penerbit dan akan menerima imbalan berupa bunga (kupon) secara berkala, serta pengembalian pokok utang pada saat jatuh tempo" 
  },  

  // Tanya definisi deposito
  { 
    pattern: /\b((apa\s+itu|maksud(?:nya)?|definisi)\s+)?(deposito)\b/i, 
    response: "Deposito adalah produk simpanan berjangka di bank yang hanya bisa dicairkan setelah periode waktu tertentu (tenor) yang disepakati, seperti 1, 3, 6, atau 12 bulan. Berbeda dengan tabungan biasa, deposito menawarkan suku bunga tetap yang lebih tinggi, namun dana tidak dapat ditarik sebelum jatuh tempo tanpa dikenakan penalti atau kehilangan bunga" 
  },  

  // Tanya definisi crypto
  { 
    pattern: /\b((apa\s+itu|maksud(?:nya)?|definisi)\s+)?(cryptocurrency|crypto|bitcoin|btc|kripto)\b/i, 
    response: "Cryptocurrency adalah sebutan untuk mata uang digital yang dapat digunakan untuk transaksi antarpengguna tanpa perlu melewati pihak ketiga. Jika dalam transaksi pada umumnya bank berperan sebagai pihak ketiga, dalam cryptocurrency, tidak ada yang berperan sebagai perantara. Transaksi cryptocurrency berasal dari jaringan komputer yang menggunakan algoritma perhitungan tertentu. Perhitungan matematis ini disebut cryptography yang menggunakan teknologi blockchain. Bitcoin adalah jenis cryptocurrency pertama dan terbesar" 
  }
];

export { rules };
