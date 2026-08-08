export interface Product {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  seoDescription: string;
  price: number;
  oldPrice?: number;
  images: string[];
  ingredients: string[];
  uses: string[];
  dosage: string;
  storage: string[];
}

export const products: Product[] = [

  // ============================================================
  // Product 1 - CYST Syrup
  // ============================================================

  // {
  //   id: 1,
  //   name: "CYST Syrup",
  //   price: 2500,
  //   oldPrice: 3000,
  //   description: "",
  //   shortDescription: "",
  //   seoDescription: "",
  //   images: [
  //     "/products/CYST.png",
  //     "/products/CYST-2.png",
  //   ],
  //   ingredients: [],
  //   uses: [],
  //   dosage: "",
  //   storage: [],
  // },

  // ============================================================
  // Product 2 - Maharas Nadi Syrup
  // ============================================================

  // {
  //   id: 2,
  //   name: "Maharas Nadi Syrup",
  //   price: 2500,
  //   oldPrice: 3000,
  //   description: "",
  //   shortDescription: "",
  //   seoDescription: "",
  //   images: [
  //     "/products/DHATU.png",
  //     "/products/DHATU-2.png",
  //   ],
  //   ingredients: [],
  //   uses: [],
  //   dosage: "",
  //   storage: [],
  // },

  // ============================================================
  // Product 3
  // ============================================================

  // {
  //   id: 3,
  //   name: "",
  //   price: 4500,
  //   oldPrice: 5000,
  //   description: "",
  //   shortDescription: "",
  //   seoDescription: "",
  //   images: [
  //     "/products/new.png",
  //     "/products/new-2.png",
  //   ],
  //   ingredients: [],
  //   uses: [],
  //   dosage: "",
  //   storage: [],
  // },

  // ============================================================
  // Product 4
  // ============================================================

  // {
  //   id: 4,
  //   name: "",
  //   price: 1300,
  //   oldPrice: 3000,
  //   description: "",
  //   shortDescription: "",
  //   seoDescription: "",
  //   images: [
  //     "/products/b1.png",
  //     "/products/b2.png",
  //   ],
  //   ingredients: [],
  //   uses: [],
  //   dosage: "",
  //   storage: [],
  // },

  // ============================================================
  // Product 5 - Madan Manjari
  // ============================================================

  // {
  //   id: 5,
  //   name: "Madan Manjari",
  //   price: 1300,
  //   oldPrice: 3000,
  //   description: "",
  //   shortDescription: "",
  //   seoDescription: "",
  //   images: [
  //     "/products/madan majri.png",
  //     "/products/M2.png",
  //   ],
  //   ingredients: [],
  //   uses: [],
  //   dosage: "",
  //   storage: [],
  // },

  // ============================================================
  // Product 6 - Kamla Her Ras Face Clean
  // ============================================================

  {
    id: 6,
    name: "Kamla Her Ras Face Clean",
    price: 250,
    oldPrice: 300,

    description:
      "Kamla Her Ras Face Clean is a premium Unani herbal formulation specially designed to promote naturally healthy, clear, and glowing skin. Prepared using carefully selected traditional herbs, it helps reduce acne and pimples, minimizes black spots and dark circles, supports healthy skin texture, and enhances the skin's natural radiance.",

    shortDescription:
      "Premium Unani herbal medicine for glowing skin, acne relief, black spots, and dark circles.",

    seoDescription:
      "Kamla Her Ras Face Clean is a traditional Unani herbal formulation that helps promote glowing skin, reduce acne, black spots, and dark circles while supporting naturally healthy skin.",

    images: [
      "/products/kamla-her-face-clean.png",
      "/products/kamla-her-face-clean2.png",
    ],

    ingredients: [
      "Lal Chandan",
      "Khas",
      "Padmakh",
      "Nagar Motha",
      "Giloy",
      "Pitt Papda",
      "Neem Chaal",
      "Nilofer",
      "Kasni Beej",
      "Sonf",
      "Kaddu Beej",
      "Naagbala",
      "Dhaniya",
      "Tulsi Beej",
      "Bahera",
      "Ghamasha",
      "Mudi",
      "Mulheti",
      "Chhoti Elaichi",
      "Post Dodi",
    ],

    uses: [
      "Glowing Skin",
      "Acne & Pimples",
      "Black Spots",
      "Dark Circles",
      "Healthy Skin",
    ],

    dosage:
      "20–20 ml twice daily (Morning & Evening) with lukewarm water or as directed by a qualified physician.",

    storage: [
      "Store in a cool & dry place.",
      "Shake well before use.",
      "Keep away from direct sunlight.",
    ],
  },

  // ============================================================
  // Product 7 - Tagaradi Kwath
  // ============================================================

  {
    id: 7,
    name: "Tagaradi Kwath - Piles Care",
    price: 199,
    oldPrice: 250,

    description:
      "Tagaradi Kwath is a traditional Ayurvedic herbal formulation specially prepared to support the management of piles (hemorrhoids) and fissures. It helps relieve constipation, supports comfortable bowel movements, reduces discomfort associated with bleeding and non-bleeding piles, and promotes anorectal health.",

    shortDescription:
      "Herbal Ayurvedic formulation for piles, fissures, constipation, and anorectal wellness.",

    seoDescription:
      "Tagaradi Kwath Piles Care is a traditional Ayurvedic herbal medicine formulated to support relief from piles, fissures, constipation, and associated discomfort while promoting healthy bowel function.",

    images: [
      "/products/piles-care-1.png",
      "/products/piles-care-2.png",
    ],

    ingredients: [
      "Murakkab",
      "Tagar",
      "Pitt Papda",
      "Amla",
      "Nagarmotha",
      "Kutki",
      "Ajwain",
      "Jamalgota",
      "Bhringraj",
      "Lal Chandan",
      "Daruhaldi",
      "Shahjeera",
      "Giloy",
      "Kabab Chini",
      "Amla",
      "Gandhak",
      "Harad",
      "Shankhpushpi",
      "Shatavari",
    ],

    uses: [
      "Piles",
      "Fissures",
      "Constipation",
      "Bleeding Piles",
      "Non-Bleeding Piles",
      "Anorectal Wellness",
    ],

    dosage:
      "20–20 ml twice daily (Morning & Evening) with lukewarm water or as directed by a physician.",

    storage: [
      "Store in a cool & dry place.",
      "Shake well before use.",
      "Keep away from direct sunlight.",
    ],
  },

  // ============================================================
  // Product 8 - Ameer Ras Uric Acid
  // ============================================================

  {
    id: 8,
    name: "Ameer Ras Uric Acid",
    price: 250,
    oldPrice: 300,

    description:
      "Ameer Ras Uric Acid is a premium Ayurvedic herbal formulation specially developed to help maintain healthy uric acid levels and support joint health. It assists in relieving gouty arthritis, joint pain, swelling, stiffness, and inflammatory discomfort while promoting mobility.",

    shortDescription:
      "Ayurvedic herbal tablets for uric acid, gouty arthritis, swelling, and joint pain.",

    seoDescription:
      "Ameer Ras Uric Acid is an Ayurvedic herbal tablet formulated to support healthy uric acid levels, relieve gouty arthritis, joint pain, swelling, and improve overall joint health naturally.",

    images: [
      "/products/uric-acid-1.png",
      "/products/uric-acid-2.png",
    ],

    ingredients: [
      "Chanditar – 40 mg",
      "Raskapoor – 40 mg",
      "Rumisingraf – 40 mg",
      "Dalchini – 40 mg",
      "Sendha Namak – 40 mg",
    ],

    uses: [
      "Uric Acid",
      "Gouty Arthritis",
      "Joint Pain",
      "Swelling",
      "Joint Mobility",
    ],

    dosage:
      "Take 1 tablet twice daily (Morning & Evening) or as directed by a qualified physician.",

    storage: [
      "Store in a cool & dry place.",
      "Keep away from moisture.",
      "Keep out of reach of children.",
    ],
  },
    // ============================================================
  // Product 9 - Jalodarari Ras Detox & Constipation
  // ============================================================

  {
    id: 9,
    name: "Jalodarari Ras Detox & Constipation",
    price: 250,
    oldPrice: 300,

    description:
      "Jalodarari Ras Detox & Constipation is a classical Ayurvedic herbal formulation specially designed to support digestive health, natural detoxification, and regular bowel movements. It helps relieve constipation, improves digestion, reduces bloating and gas, promotes intestinal cleansing, and supports healthy gut function.",

    shortDescription:
      "Herbal Ayurvedic tablets for natural detox, constipation relief, healthy digestion, and gut cleansing.",

    seoDescription:
      "Jalodarari Ras Detox & Constipation is an Ayurvedic herbal formulation that helps support natural detoxification, relieve constipation, improve digestion, reduce bloating, and promote healthy bowel movements for overall digestive wellness.",

    images: [
      "/products/detox-1.png",
      "/products/detox-2.png",
    ],

    ingredients: [
      "Shuddh Para",
      "Shuddh Gandhak",
      "Shuddh Mangsheel",
      "Haldi",
      "Shuddh Jamalgota",
      "Harar",
      "Baheda",
      "Amla",
      "Sonth",
      "Peepal",
      "Kali Mirch",
      "Cheete Ki Chhaal",
      "Danti Mool",
      "Senna",
      "Bhringraj",
    ],

    uses: [
      "Constipation",
      "Poor Digestion",
      "Body Detoxification",
      "Gas & Bloating",
      "Sluggish Bowel Movement",
      "Digestive Cleansing",
      "Intestinal Wellness",
    ],

    dosage:
      "Take 1 tablet twice daily (Morning & Evening) with lukewarm water after meals or as directed by a qualified Ayurvedic physician.",

    storage: [
      "Store in a cool & dry place.",
      "Keep the container tightly closed.",
      "Protect from direct sunlight and moisture.",
      "Keep out of reach of children.",
    ],
  },

  // ============================================================
  // Product 10 - Madan Manjari Vati
  // ============================================================

  {
    id: 10,
    name: "Madan Manjari Vati",
    price: 300,
    oldPrice: 350,

    description:
      "Madan Manjari Vati is a premium Ayurvedic herbal formulation traditionally used to support muscle and joint health. It helps relieve muscular pain, rheumatic pain, sciatica, lumbago, muscle spasms, and body stiffness while promoting better mobility and overall musculoskeletal wellness.",

    shortDescription:
      "Premium Ayurvedic tablets for muscular pain, sciatica, lumbago, muscle spasms, and joint discomfort.",

    seoDescription:
      "Madan Manjari Vati is an Ayurvedic herbal formulation that helps support relief from muscular pain, sciatica, lumbago, rheumatic pain, muscle spasms, and joint discomfort while promoting healthy mobility.",

    images: [
      "/products/madan-manjari-1.png",
      "/products/madan-manjari-2.png",
    ],

    ingredients: [
      "Swarn Bhasm – 2 mg",
      "Rassindur – 25 mg",
      "Abhrak Bhasm – 25 mg",
      "Bang Bhasm – 25 mg",
      "Pravaal Pishti – 25 mg",
      "Kesar – 25 mg",
      "Jayfal – 25 mg",
      "Javatri – 25 mg",
      "Long – 25 mg",
      "Choti Elaichi – 25 mg",
      "Akarkara – 25 mg",
      "Safed Mirch – 25 mg",
      "Kapoor – 10 mg",
      "Kasturi Ambar – 10 mg",
    ],

    uses: [
      "Muscle Spasm",
      "Sciatica",
      "Lumbago (Lower Back Pain)",
      "Muscular Pain",
      "Rheumatic Pain",
      "Joint Pain",
      "Neck Pain",
      "Shoulder Pain",
      "Body Stiffness",
    ],

    dosage:
      "Take 1 tablet twice daily (Morning & Evening) with lukewarm water or as directed by a qualified Ayurvedic physician.",

    storage: [
      "Store in a cool & dry place.",
      "Keep away from direct sunlight.",
      "Keep container tightly closed.",
      "Keep out of reach of children.",
    ],
  },

];