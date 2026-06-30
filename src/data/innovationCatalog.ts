export type InnovationProduct = {
  id: string;
  catalogNumber: number;
  slug: string;
  name: string;
  track: string;
  categorySlug: string;
  b2bOrigin: string;
  userProblem: string;
  b2cInnovation: string;
  format: string;
  signal: string;
  aisle: string;
  audience: string;
  priceRange: string;
  launchPriority: string;
  heroLine: string;
  demandSignal: string;
  origin: string;
  benefits: string[];
  specs: Array<{ label: string; value: string }>;
  bundle: string[];
  faqs: Array<{ question: string; answer: string }>;
  researchRefIds: string[];
};

export type InnovationCategory = {
  slug: string;
  name: string;
  aisle: string;
  b2bOrigin: string;
  signal: string;
  count: number;
  audience: string;
  priceRange: string;
  sourceRefIds: string[];
};

export const innovationProducts: InnovationProduct[] = [
  {
    "id": "toreso-snapseal-mini",
    "catalogNumber": 1,
    "slug": "toreso-snapseal-mini",
    "name": "Toreso SnapSeal Mini",
    "track": "Heat Sealing & Resealing Gadgets",
    "categorySlug": "heat-sealing-and-resealing-gadgets",
    "b2bOrigin": "leverages Benz's heat-seal film expertise.",
    "userProblem": "Palm-sized handheld heat-sealer that fuses open chip/snack/coffee bags shut in 3–5 seconds.",
    "b2cInnovation": "battery (AA) or USB-C rechargeable, built-in cutter blade on the reverse, magnetic fridge mount.",
    "format": "Heat Sealing product",
    "signal": "the mini bag sealer is one of the most viral kitchen gadgets of the last three years — one TikTok demo by @Rachelhutchens1 reached nearly 800,000 likes, and the gadget retails ~£10.99 on Amazon UK and ~$10 in the US.",
    "aisle": "Heat Sealing & Resealing Gadgets",
    "audience": "home cooks, snack-heavy families, home bakers, hostel students, and small food sellers",
    "priceRange": "impulse (₹).",
    "launchPriority": "Signature launch",
    "heroLine": "Toreso SnapSeal Mini is a heat sealing product for palm-sized handheld heat-sealer that fuses open chip/snack/coffee bags shut in 3–5 seconds.",
    "demandSignal": "viral TikTok/Amazon best-seller.",
    "origin": "China/global.",
    "benefits": [
      "Palm-sized handheld heat-sealer that fuses open chip/snack/coffee bags shut in 3–5 seconds.",
      "battery (AA) or USB-C rechargeable, built-in cutter blade on the reverse, magnetic fridge mount.",
      "Demand signal: viral TikTok/Amazon best-seller.",
      "Consumer-sized format for home cooks, snack-heavy families, home bakers, hostel students, and small food sellers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-001"
      },
      {
        "label": "Aisle",
        "value": "Heat Sealing & Resealing Gadgets"
      },
      {
        "label": "Format",
        "value": "Heat Sealing product"
      },
      {
        "label": "Positioning",
        "value": "impulse (₹)."
      },
      {
        "label": "Origin signal",
        "value": "China/global."
      },
      {
        "label": "Packaging intelligence",
        "value": "leverages Benz's heat-seal film expertise."
      }
    ],
    "bundle": [
      "Toreso SnapSeal Mini",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso SnapSeal Mini?",
        "answer": "Toreso SnapSeal Mini is a Toreso heat sealing product made for palm-sized handheld heat-sealer that fuses open chip/snack/coffee bags shut in 3–5 seconds."
      },
      {
        "question": "Who should use Toreso SnapSeal Mini?",
        "answer": "Toreso SnapSeal Mini is designed for home cooks, snack-heavy families, home bakers, hostel students, and small food sellers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "battery (AA) or USB-C rechargeable, built-in cutter blade on the reverse, magnetic fridge mount."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-01"
    ]
  },
  {
    "id": "snapseal-pro-2-in-1",
    "catalogNumber": 2,
    "slug": "snapseal-pro-2-in-1",
    "name": "SnapSeal Pro 2-in-1",
    "track": "Heat Sealing & Resealing Gadgets",
    "categorySlug": "heat-sealing-and-resealing-gadgets",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Rechargeable sealer + cutter with safety lock-slide.",
    "b2cInnovation": "~300 seals per charge, seals liquids leak-tight.",
    "format": "Heat Sealing product",
    "signal": "the mini bag sealer is one of the most viral kitchen gadgets of the last three years — one TikTok demo by @Rachelhutchens1 reached nearly 800,000 likes, and the gadget retails ~£10.99 on Amazon UK and ~$10 in the US.",
    "aisle": "Heat Sealing & Resealing Gadgets",
    "audience": "home cooks, snack-heavy families, home bakers, hostel students, and small food sellers",
    "priceRange": "impulse-mid.",
    "launchPriority": "Signature launch",
    "heroLine": "SnapSeal Pro 2-in-1 is a heat sealing product for rechargeable sealer + cutter with safety lock-slide.",
    "demandSignal": "featured in \"30 viral Temu gadgets.\"",
    "origin": "Global packaging retail",
    "benefits": [
      "Rechargeable sealer + cutter with safety lock-slide.",
      "~300 seals per charge, seals liquids leak-tight.",
      "Demand signal: featured in \"30 viral Temu gadgets.\"",
      "Consumer-sized format for home cooks, snack-heavy families, home bakers, hostel students, and small food sellers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-002"
      },
      {
        "label": "Aisle",
        "value": "Heat Sealing & Resealing Gadgets"
      },
      {
        "label": "Format",
        "value": "Heat Sealing product"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "SnapSeal Pro 2-in-1",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is SnapSeal Pro 2-in-1?",
        "answer": "SnapSeal Pro 2-in-1 is a Toreso heat sealing product made for rechargeable sealer + cutter with safety lock-slide."
      },
      {
        "question": "Who should use SnapSeal Pro 2-in-1?",
        "answer": "SnapSeal Pro 2-in-1 is designed for home cooks, snack-heavy families, home bakers, hostel students, and small food sellers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "~300 seals per charge, seals liquids leak-tight."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-01"
    ]
  },
  {
    "id": "snapseal-cordless-dock",
    "catalogNumber": 3,
    "slug": "snapseal-cordless-dock",
    "name": "SnapSeal Cordless Dock",
    "track": "Heat Sealing & Resealing Gadgets",
    "categorySlug": "heat-sealing-and-resealing-gadgets",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Standing sealer that seals and clamps hands-free.",
    "b2cInnovation": "Standing sealer that seals and clamps hands-free.",
    "format": "Reusable tool",
    "signal": "the mini bag sealer is one of the most viral kitchen gadgets of the last three years — one TikTok demo by @Rachelhutchens1 reached nearly 800,000 likes, and the gadget retails ~£10.99 on Amazon UK and ~$10 in the US.",
    "aisle": "Heat Sealing & Resealing Gadgets",
    "audience": "home cooks, snack-heavy families, home bakers, hostel students, and small food sellers",
    "priceRange": "mid.",
    "launchPriority": "Signature launch",
    "heroLine": "SnapSeal Cordless Dock is a reusable tool for standing sealer that seals and clamps hands-free.",
    "demandSignal": "TikTok \"InstaSeal\"-style hands-free sealers trending.",
    "origin": "Global packaging retail",
    "benefits": [
      "Standing sealer that seals and clamps hands-free.",
      "Standing sealer that seals and clamps hands-free.",
      "Demand signal: TikTok \"InstaSeal\"-style hands-free sealers trending.",
      "Consumer-sized format for home cooks, snack-heavy families, home bakers, hostel students, and small food sellers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-003"
      },
      {
        "label": "Aisle",
        "value": "Heat Sealing & Resealing Gadgets"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "SnapSeal Cordless Dock",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is SnapSeal Cordless Dock?",
        "answer": "SnapSeal Cordless Dock is a Toreso reusable tool made for standing sealer that seals and clamps hands-free."
      },
      {
        "question": "Who should use SnapSeal Cordless Dock?",
        "answer": "SnapSeal Cordless Dock is designed for home cooks, snack-heavy families, home bakers, hostel students, and small food sellers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Standing sealer that seals and clamps hands-free."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-01"
    ]
  },
  {
    "id": "toreso-freshweld-strips",
    "catalogNumber": 4,
    "slug": "toreso-freshweld-strips",
    "name": "Toreso FreshWeld Strips",
    "track": "Heat Sealing & Resealing Gadgets",
    "categorySlug": "heat-sealing-and-resealing-gadgets",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Adhesive resealable zip-strips you stick onto any cut bag to convert it into a zip-lock.",
    "b2cInnovation": "no electricity; one-time peel-and-stick zipper.",
    "format": "Heat Sealing product",
    "signal": "the mini bag sealer is one of the most viral kitchen gadgets of the last three years — one TikTok demo by @Rachelhutchens1 reached nearly 800,000 likes, and the gadget retails ~£10.99 on Amazon UK and ~$10 in the US.",
    "aisle": "Heat Sealing & Resealing Gadgets",
    "audience": "home cooks, snack-heavy families, home bakers, hostel students, and small food sellers",
    "priceRange": "impulse.",
    "launchPriority": "Signature launch",
    "heroLine": "Toreso FreshWeld Strips is a heat sealing product for adhesive resealable zip-strips you stick onto any cut bag to convert it into a zip-lock.",
    "demandSignal": "the mini bag sealer is one of the most viral kitchen gadgets of the last three years — one TikTok demo by @Rachelhutchens1 reached nearly 800,000 likes, and the gadget retails ~£10.99 on Amazon UK and ~$10 in the US.",
    "origin": "Japan/Korea concept.",
    "benefits": [
      "Adhesive resealable zip-strips you stick onto any cut bag to convert it into a zip-lock.",
      "no electricity; one-time peel-and-stick zipper.",
      "Built for the heat sealing & resealing gadgets aisle.",
      "Consumer-sized format for home cooks, snack-heavy families, home bakers, hostel students, and small food sellers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-004"
      },
      {
        "label": "Aisle",
        "value": "Heat Sealing & Resealing Gadgets"
      },
      {
        "label": "Format",
        "value": "Heat Sealing product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Japan/Korea concept."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso FreshWeld Strips",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso FreshWeld Strips?",
        "answer": "Toreso FreshWeld Strips is a Toreso heat sealing product made for adhesive resealable zip-strips you stick onto any cut bag to convert it into a zip-lock."
      },
      {
        "question": "Who should use Toreso FreshWeld Strips?",
        "answer": "Toreso FreshWeld Strips is designed for home cooks, snack-heavy families, home bakers, hostel students, and small food sellers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "no electricity; one-time peel-and-stick zipper."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-01"
    ]
  },
  {
    "id": "heatpen-sealer",
    "catalogNumber": 5,
    "slug": "heatpen-sealer",
    "name": "HeatPen Sealer",
    "track": "Heat Sealing & Resealing Gadgets",
    "categorySlug": "heat-sealing-and-resealing-gadgets",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Pen-shaped roller sealer for precise seals on small sachets.",
    "b2cInnovation": "Pen-shaped roller sealer for precise seals on small sachets.",
    "format": "Reusable tool",
    "signal": "the mini bag sealer is one of the most viral kitchen gadgets of the last three years — one TikTok demo by @Rachelhutchens1 reached nearly 800,000 likes, and the gadget retails ~£10.99 on Amazon UK and ~$10 in the US.",
    "aisle": "Heat Sealing & Resealing Gadgets",
    "audience": "home cooks, snack-heavy families, home bakers, hostel students, and small food sellers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "HeatPen Sealer is a reusable tool for pen-shaped roller sealer for precise seals on small sachets.",
    "demandSignal": "the mini bag sealer is one of the most viral kitchen gadgets of the last three years — one TikTok demo by @Rachelhutchens1 reached nearly 800,000 likes, and the gadget retails ~£10.99 on Amazon UK and ~$10 in the US.",
    "origin": "Global packaging retail",
    "benefits": [
      "Pen-shaped roller sealer for precise seals on small sachets.",
      "Pen-shaped roller sealer for precise seals on small sachets.",
      "Built for the heat sealing & resealing gadgets aisle.",
      "Consumer-sized format for home cooks, snack-heavy families, home bakers, hostel students, and small food sellers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-005"
      },
      {
        "label": "Aisle",
        "value": "Heat Sealing & Resealing Gadgets"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "HeatPen Sealer",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is HeatPen Sealer?",
        "answer": "HeatPen Sealer is a Toreso reusable tool made for pen-shaped roller sealer for precise seals on small sachets."
      },
      {
        "question": "Who should use HeatPen Sealer?",
        "answer": "HeatPen Sealer is designed for home cooks, snack-heavy families, home bakers, hostel students, and small food sellers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Pen-shaped roller sealer for precise seals on small sachets."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-01"
    ]
  },
  {
    "id": "snapseal-glow",
    "catalogNumber": 6,
    "slug": "snapseal-glow",
    "name": "SnapSeal Glow",
    "track": "Heat Sealing & Resealing Gadgets",
    "categorySlug": "heat-sealing-and-resealing-gadgets",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Translucent/character-printed sealer aimed at Gen-Z aesthetic shelves (Miniso-style IP appeal).",
    "b2cInnovation": "Translucent/character-printed sealer aimed at Gen-Z aesthetic shelves (Miniso-style IP appeal).",
    "format": "Heat Sealing product",
    "signal": "the mini bag sealer is one of the most viral kitchen gadgets of the last three years — one TikTok demo by @Rachelhutchens1 reached nearly 800,000 likes, and the gadget retails ~£10.99 on Amazon UK and ~$10 in the US.",
    "aisle": "Heat Sealing & Resealing Gadgets",
    "audience": "home cooks, snack-heavy families, home bakers, hostel students, and small food sellers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "SnapSeal Glow is a heat sealing product for translucent/character-printed sealer aimed at gen-z aesthetic shelves (miniso-style ip appeal).",
    "demandSignal": "the mini bag sealer is one of the most viral kitchen gadgets of the last three years — one TikTok demo by @Rachelhutchens1 reached nearly 800,000 likes, and the gadget retails ~£10.99 on Amazon UK and ~$10 in the US.",
    "origin": "Global packaging retail",
    "benefits": [
      "Translucent/character-printed sealer aimed at Gen-Z aesthetic shelves (Miniso-style IP appeal).",
      "Translucent/character-printed sealer aimed at Gen-Z aesthetic shelves (Miniso-style IP appeal).",
      "Built for the heat sealing & resealing gadgets aisle.",
      "Consumer-sized format for home cooks, snack-heavy families, home bakers, hostel students, and small food sellers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-006"
      },
      {
        "label": "Aisle",
        "value": "Heat Sealing & Resealing Gadgets"
      },
      {
        "label": "Format",
        "value": "Heat Sealing product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "SnapSeal Glow",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is SnapSeal Glow?",
        "answer": "SnapSeal Glow is a Toreso heat sealing product made for translucent/character-printed sealer aimed at gen-z aesthetic shelves (miniso-style ip appeal)."
      },
      {
        "question": "Who should use SnapSeal Glow?",
        "answer": "SnapSeal Glow is designed for home cooks, snack-heavy families, home bakers, hostel students, and small food sellers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Translucent/character-printed sealer aimed at Gen-Z aesthetic shelves (Miniso-style IP appeal)."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-01"
    ]
  },
  {
    "id": "toreso-candle-free-reseal-tool",
    "catalogNumber": 7,
    "slug": "toreso-candle-free-reseal-tool",
    "name": "Toreso Candle-Free Reseal Tool",
    "track": "Heat Sealing & Resealing Gadgets",
    "categorySlug": "heat-sealing-and-resealing-gadgets",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Safer replacement for the viral \"seal bag with a candle/lighter\" hack.",
    "b2cInnovation": "Safer replacement for the viral \"seal bag with a candle/lighter\" hack.",
    "format": "Reusable tool",
    "signal": "the mini bag sealer is one of the most viral kitchen gadgets of the last three years — one TikTok demo by @Rachelhutchens1 reached nearly 800,000 likes, and the gadget retails ~£10.99 on Amazon UK and ~$10 in the US.",
    "aisle": "Heat Sealing & Resealing Gadgets",
    "audience": "home cooks, snack-heavy families, home bakers, hostel students, and small food sellers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Candle-Free Reseal Tool is a reusable tool for safer replacement for the viral \"seal bag with a candle/lighter\" hack.",
    "demandSignal": "the candle/hair-straightener reseal hack is a huge TikTok genre.",
    "origin": "Global packaging retail",
    "benefits": [
      "Safer replacement for the viral \"seal bag with a candle/lighter\" hack.",
      "Safer replacement for the viral \"seal bag with a candle/lighter\" hack.",
      "Demand signal: the candle/hair-straightener reseal hack is a huge TikTok genre.",
      "Consumer-sized format for home cooks, snack-heavy families, home bakers, hostel students, and small food sellers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-007"
      },
      {
        "label": "Aisle",
        "value": "Heat Sealing & Resealing Gadgets"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Candle-Free Reseal Tool",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Candle-Free Reseal Tool?",
        "answer": "Toreso Candle-Free Reseal Tool is a Toreso reusable tool made for safer replacement for the viral \"seal bag with a candle/lighter\" hack."
      },
      {
        "question": "Who should use Toreso Candle-Free Reseal Tool?",
        "answer": "Toreso Candle-Free Reseal Tool is designed for home cooks, snack-heavy families, home bakers, hostel students, and small food sellers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Safer replacement for the viral \"seal bag with a candle/lighter\" hack."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-01"
    ]
  },
  {
    "id": "magseal-fridge-strip",
    "catalogNumber": 8,
    "slug": "magseal-fridge-strip",
    "name": "MagSeal Fridge Strip",
    "track": "Heat Sealing & Resealing Gadgets",
    "categorySlug": "heat-sealing-and-resealing-gadgets",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Wall/fridge-mounted sealer holder + sealer combo.",
    "b2cInnovation": "Wall/fridge-mounted sealer holder + sealer combo.",
    "format": "Heat Sealing product",
    "signal": "the mini bag sealer is one of the most viral kitchen gadgets of the last three years — one TikTok demo by @Rachelhutchens1 reached nearly 800,000 likes, and the gadget retails ~£10.99 on Amazon UK and ~$10 in the US.",
    "aisle": "Heat Sealing & Resealing Gadgets",
    "audience": "home cooks, snack-heavy families, home bakers, hostel students, and small food sellers",
    "priceRange": "impulse-mid.",
    "launchPriority": "Future drop",
    "heroLine": "MagSeal Fridge Strip is a heat sealing product for wall/fridge-mounted sealer holder + sealer combo.",
    "demandSignal": "the mini bag sealer is one of the most viral kitchen gadgets of the last three years — one TikTok demo by @Rachelhutchens1 reached nearly 800,000 likes, and the gadget retails ~£10.99 on Amazon UK and ~$10 in the US.",
    "origin": "Global packaging retail",
    "benefits": [
      "Wall/fridge-mounted sealer holder + sealer combo.",
      "Wall/fridge-mounted sealer holder + sealer combo.",
      "Built for the heat sealing & resealing gadgets aisle.",
      "Consumer-sized format for home cooks, snack-heavy families, home bakers, hostel students, and small food sellers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-008"
      },
      {
        "label": "Aisle",
        "value": "Heat Sealing & Resealing Gadgets"
      },
      {
        "label": "Format",
        "value": "Heat Sealing product"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "MagSeal Fridge Strip",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is MagSeal Fridge Strip?",
        "answer": "MagSeal Fridge Strip is a Toreso heat sealing product made for wall/fridge-mounted sealer holder + sealer combo."
      },
      {
        "question": "Who should use MagSeal Fridge Strip?",
        "answer": "MagSeal Fridge Strip is designed for home cooks, snack-heavy families, home bakers, hostel students, and small food sellers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Wall/fridge-mounted sealer holder + sealer combo."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-01"
    ]
  },
  {
    "id": "toreso-sachet-saver",
    "catalogNumber": 9,
    "slug": "toreso-sachet-saver",
    "name": "Toreso Sachet Saver",
    "track": "Heat Sealing & Resealing Gadgets",
    "categorySlug": "heat-sealing-and-resealing-gadgets",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Mini sealer sized for medicine/spice sachets and single-serve sauce packs.",
    "b2cInnovation": "Mini sealer sized for medicine/spice sachets and single-serve sauce packs.",
    "format": "Heat Sealing product",
    "signal": "the mini bag sealer is one of the most viral kitchen gadgets of the last three years — one TikTok demo by @Rachelhutchens1 reached nearly 800,000 likes, and the gadget retails ~£10.99 on Amazon UK and ~$10 in the US.",
    "aisle": "Heat Sealing & Resealing Gadgets",
    "audience": "home cooks, snack-heavy families, home bakers, hostel students, and small food sellers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Sachet Saver is a heat sealing product for mini sealer sized for medicine/spice sachets and single-serve sauce packs.",
    "demandSignal": "the mini bag sealer is one of the most viral kitchen gadgets of the last three years — one TikTok demo by @Rachelhutchens1 reached nearly 800,000 likes, and the gadget retails ~£10.99 on Amazon UK and ~$10 in the US.",
    "origin": "Global packaging retail",
    "benefits": [
      "Mini sealer sized for medicine/spice sachets and single-serve sauce packs.",
      "Mini sealer sized for medicine/spice sachets and single-serve sauce packs.",
      "Built for the heat sealing & resealing gadgets aisle.",
      "Consumer-sized format for home cooks, snack-heavy families, home bakers, hostel students, and small food sellers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-009"
      },
      {
        "label": "Aisle",
        "value": "Heat Sealing & Resealing Gadgets"
      },
      {
        "label": "Format",
        "value": "Heat Sealing product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Sachet Saver",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Sachet Saver?",
        "answer": "Toreso Sachet Saver is a Toreso heat sealing product made for mini sealer sized for medicine/spice sachets and single-serve sauce packs."
      },
      {
        "question": "Who should use Toreso Sachet Saver?",
        "answer": "Toreso Sachet Saver is designed for home cooks, snack-heavy families, home bakers, hostel students, and small food sellers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Mini sealer sized for medicine/spice sachets and single-serve sauce packs."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-01"
    ]
  },
  {
    "id": "snapseal-travel",
    "catalogNumber": 10,
    "slug": "snapseal-travel",
    "name": "SnapSeal Travel",
    "track": "Heat Sealing & Resealing Gadgets",
    "categorySlug": "heat-sealing-and-resealing-gadgets",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Keychain-format sealer for travel snack management.",
    "b2cInnovation": "Keychain-format sealer for travel snack management.",
    "format": "Heat Sealing product",
    "signal": "the mini bag sealer is one of the most viral kitchen gadgets of the last three years — one TikTok demo by @Rachelhutchens1 reached nearly 800,000 likes, and the gadget retails ~£10.99 on Amazon UK and ~$10 in the US.",
    "aisle": "Heat Sealing & Resealing Gadgets",
    "audience": "home cooks, snack-heavy families, home bakers, hostel students, and small food sellers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "SnapSeal Travel is a heat sealing product for keychain-format sealer for travel snack management.",
    "demandSignal": "the mini bag sealer is one of the most viral kitchen gadgets of the last three years — one TikTok demo by @Rachelhutchens1 reached nearly 800,000 likes, and the gadget retails ~£10.99 on Amazon UK and ~$10 in the US.",
    "origin": "Global packaging retail",
    "benefits": [
      "Keychain-format sealer for travel snack management.",
      "Keychain-format sealer for travel snack management.",
      "Built for the heat sealing & resealing gadgets aisle.",
      "Consumer-sized format for home cooks, snack-heavy families, home bakers, hostel students, and small food sellers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-010"
      },
      {
        "label": "Aisle",
        "value": "Heat Sealing & Resealing Gadgets"
      },
      {
        "label": "Format",
        "value": "Heat Sealing product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "SnapSeal Travel",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is SnapSeal Travel?",
        "answer": "SnapSeal Travel is a Toreso heat sealing product made for keychain-format sealer for travel snack management."
      },
      {
        "question": "Who should use SnapSeal Travel?",
        "answer": "SnapSeal Travel is designed for home cooks, snack-heavy families, home bakers, hostel students, and small food sellers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Keychain-format sealer for travel snack management."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-01"
    ]
  },
  {
    "id": "toreso-vacfresh-handheld",
    "catalogNumber": 11,
    "slug": "toreso-vacfresh-handheld",
    "name": "Toreso VacFresh Handheld",
    "track": "Vacuum Sealing & Food Compression",
    "categorySlug": "vacuum-sealing-and-food-compression",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Rechargeable handheld vacuum pump that seals reusable zipper bags and valve containers.",
    "b2cInnovation": "one-button, works with proprietary reusable bags.",
    "format": "Vacuum Sealing product",
    "signal": "per Global News' \"20 viral kitchen gadgets\" roundup, vacuum sealers are \"having a major moment online\"; mason-jar vacuum sealers (\"Robo Sealer\") and hands-free \"InstaSeal\" units are TikTok Shop staples.",
    "aisle": "Vacuum Sealing & Food Compression",
    "audience": "freshness-focused kitchens, coffee users, meal-prep households, and compact apartment pantries",
    "priceRange": "mid.",
    "launchPriority": "Core range",
    "heroLine": "Toreso VacFresh Handheld is a vacuum sealing product for rechargeable handheld vacuum pump that seals reusable zipper bags and valve containers.",
    "demandSignal": "per Global News' \"20 viral kitchen gadgets\" roundup, vacuum sealers are \"having a major moment online\"; mason-jar vacuum sealers (\"Robo Sealer\") and hands-free \"InstaSeal\" units are TikTok Shop staples.",
    "origin": "China/global.",
    "benefits": [
      "Rechargeable handheld vacuum pump that seals reusable zipper bags and valve containers.",
      "one-button, works with proprietary reusable bags.",
      "Built for the vacuum sealing & food compression aisle.",
      "Consumer-sized format for freshness-focused kitchens, coffee users, meal-prep households, and compact apartment pantries."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-011"
      },
      {
        "label": "Aisle",
        "value": "Vacuum Sealing & Food Compression"
      },
      {
        "label": "Format",
        "value": "Vacuum Sealing product"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "China/global."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso VacFresh Handheld",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso VacFresh Handheld?",
        "answer": "Toreso VacFresh Handheld is a Toreso vacuum sealing product made for rechargeable handheld vacuum pump that seals reusable zipper bags and valve containers."
      },
      {
        "question": "Who should use Toreso VacFresh Handheld?",
        "answer": "Toreso VacFresh Handheld is designed for freshness-focused kitchens, coffee users, meal-prep households, and compact apartment pantries."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "one-button, works with proprietary reusable bags."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-02"
    ]
  },
  {
    "id": "vacfresh-jar-lid",
    "catalogNumber": 12,
    "slug": "vacfresh-jar-lid",
    "name": "VacFresh Jar Lid",
    "track": "Vacuum Sealing & Food Compression",
    "categorySlug": "vacuum-sealing-and-food-compression",
    "b2bOrigin": "Benz vacuum-barrier-film know-how.",
    "userProblem": "Vacuum lid that fits standard mason/glass jars; pulls air out in ~60 sec.",
    "b2cInnovation": "Vacuum lid that fits standard mason/glass jars; pulls air out in ~60 sec.",
    "format": "Rigid storage",
    "signal": "per Global News' \"20 viral kitchen gadgets\" roundup, vacuum sealers are \"having a major moment online\"; mason-jar vacuum sealers (\"Robo Sealer\") and hands-free \"InstaSeal\" units are TikTok Shop staples.",
    "aisle": "Vacuum Sealing & Food Compression",
    "audience": "freshness-focused kitchens, coffee users, meal-prep households, and compact apartment pantries",
    "priceRange": "mid.",
    "launchPriority": "Core range",
    "heroLine": "VacFresh Jar Lid is a rigid storage for vacuum lid that fits standard mason/glass jars; pulls air out in ~60 sec.",
    "demandSignal": "viral \"Robo Sealer.\"",
    "origin": "Global packaging retail",
    "benefits": [
      "Vacuum lid that fits standard mason/glass jars; pulls air out in ~60 sec.",
      "Vacuum lid that fits standard mason/glass jars; pulls air out in ~60 sec.",
      "Demand signal: viral \"Robo Sealer.\"",
      "Consumer-sized format for freshness-focused kitchens, coffee users, meal-prep households, and compact apartment pantries."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-012"
      },
      {
        "label": "Aisle",
        "value": "Vacuum Sealing & Food Compression"
      },
      {
        "label": "Format",
        "value": "Rigid storage"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Benz vacuum-barrier-film know-how."
      }
    ],
    "bundle": [
      "VacFresh Jar Lid",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is VacFresh Jar Lid?",
        "answer": "VacFresh Jar Lid is a Toreso rigid storage made for vacuum lid that fits standard mason/glass jars; pulls air out in ~60 sec."
      },
      {
        "question": "Who should use VacFresh Jar Lid?",
        "answer": "VacFresh Jar Lid is designed for freshness-focused kitchens, coffee users, meal-prep households, and compact apartment pantries."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Vacuum lid that fits standard mason/glass jars; pulls air out in ~60 sec."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-02"
    ]
  },
  {
    "id": "vacfresh-canister-set",
    "catalogNumber": 13,
    "slug": "vacfresh-canister-set",
    "name": "VacFresh Canister Set",
    "track": "Vacuum Sealing & Food Compression",
    "categorySlug": "vacuum-sealing-and-food-compression",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Push-button vacuum canisters for coffee/cereal/snacks.",
    "b2cInnovation": "Push-button vacuum canisters for coffee/cereal/snacks.",
    "format": "Starter kit",
    "signal": "per Global News' \"20 viral kitchen gadgets\" roundup, vacuum sealers are \"having a major moment online\"; mason-jar vacuum sealers (\"Robo Sealer\") and hands-free \"InstaSeal\" units are TikTok Shop staples.",
    "aisle": "Vacuum Sealing & Food Compression",
    "audience": "freshness-focused kitchens, coffee users, meal-prep households, and compact apartment pantries",
    "priceRange": "mid.",
    "launchPriority": "Core range",
    "heroLine": "VacFresh Canister Set is a starter kit for push-button vacuum canisters for coffee/cereal/snacks.",
    "demandSignal": "per Global News' \"20 viral kitchen gadgets\" roundup, vacuum sealers are \"having a major moment online\"; mason-jar vacuum sealers (\"Robo Sealer\") and hands-free \"InstaSeal\" units are TikTok Shop staples.",
    "origin": "Korea/Japan.",
    "benefits": [
      "Push-button vacuum canisters for coffee/cereal/snacks.",
      "Push-button vacuum canisters for coffee/cereal/snacks.",
      "Built for the vacuum sealing & food compression aisle.",
      "Consumer-sized format for freshness-focused kitchens, coffee users, meal-prep households, and compact apartment pantries."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-013"
      },
      {
        "label": "Aisle",
        "value": "Vacuum Sealing & Food Compression"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Korea/Japan."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "VacFresh Canister Set",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is VacFresh Canister Set?",
        "answer": "VacFresh Canister Set is a Toreso starter kit made for push-button vacuum canisters for coffee/cereal/snacks."
      },
      {
        "question": "Who should use VacFresh Canister Set?",
        "answer": "VacFresh Canister Set is designed for freshness-focused kitchens, coffee users, meal-prep households, and compact apartment pantries."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Push-button vacuum canisters for coffee/cereal/snacks."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-02"
    ]
  },
  {
    "id": "vacfresh-marinade-box",
    "catalogNumber": 14,
    "slug": "vacfresh-marinade-box",
    "name": "VacFresh Marinade Box",
    "track": "Vacuum Sealing & Food Compression",
    "categorySlug": "vacuum-sealing-and-food-compression",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Vacuum container that marinates meat in minutes.",
    "b2cInnovation": "Vacuum container that marinates meat in minutes.",
    "format": "Rigid storage",
    "signal": "per Global News' \"20 viral kitchen gadgets\" roundup, vacuum sealers are \"having a major moment online\"; mason-jar vacuum sealers (\"Robo Sealer\") and hands-free \"InstaSeal\" units are TikTok Shop staples.",
    "aisle": "Vacuum Sealing & Food Compression",
    "audience": "freshness-focused kitchens, coffee users, meal-prep households, and compact apartment pantries",
    "priceRange": "mid.",
    "launchPriority": "Premium daily",
    "heroLine": "VacFresh Marinade Box is a rigid storage for vacuum container that marinates meat in minutes.",
    "demandSignal": "per Global News' \"20 viral kitchen gadgets\" roundup, vacuum sealers are \"having a major moment online\"; mason-jar vacuum sealers (\"Robo Sealer\") and hands-free \"InstaSeal\" units are TikTok Shop staples.",
    "origin": "Global packaging retail",
    "benefits": [
      "Vacuum container that marinates meat in minutes.",
      "Vacuum container that marinates meat in minutes.",
      "Built for the vacuum sealing & food compression aisle.",
      "Consumer-sized format for freshness-focused kitchens, coffee users, meal-prep households, and compact apartment pantries."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-014"
      },
      {
        "label": "Aisle",
        "value": "Vacuum Sealing & Food Compression"
      },
      {
        "label": "Format",
        "value": "Rigid storage"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "VacFresh Marinade Box",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is VacFresh Marinade Box?",
        "answer": "VacFresh Marinade Box is a Toreso rigid storage made for vacuum container that marinates meat in minutes."
      },
      {
        "question": "Who should use VacFresh Marinade Box?",
        "answer": "VacFresh Marinade Box is designed for freshness-focused kitchens, coffee users, meal-prep households, and compact apartment pantries."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Vacuum container that marinates meat in minutes."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-02"
    ]
  },
  {
    "id": "vacfresh-roll-bags",
    "catalogNumber": 15,
    "slug": "vacfresh-roll-bags",
    "name": "VacFresh Roll Bags",
    "track": "Vacuum Sealing & Food Compression",
    "categorySlug": "vacuum-sealing-and-food-compression",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Embossed vacuum-seal roll you cut to size.",
    "b2cInnovation": "Embossed vacuum-seal roll you cut to size.",
    "format": "Flexible pack",
    "signal": "per Global News' \"20 viral kitchen gadgets\" roundup, vacuum sealers are \"having a major moment online\"; mason-jar vacuum sealers (\"Robo Sealer\") and hands-free \"InstaSeal\" units are TikTok Shop staples.",
    "aisle": "Vacuum Sealing & Food Compression",
    "audience": "freshness-focused kitchens, coffee users, meal-prep households, and compact apartment pantries",
    "priceRange": "mid.",
    "launchPriority": "Premium daily",
    "heroLine": "VacFresh Roll Bags is a flexible pack for embossed vacuum-seal roll you cut to size.",
    "demandSignal": "per Global News' \"20 viral kitchen gadgets\" roundup, vacuum sealers are \"having a major moment online\"; mason-jar vacuum sealers (\"Robo Sealer\") and hands-free \"InstaSeal\" units are TikTok Shop staples.",
    "origin": "Global packaging retail",
    "benefits": [
      "Embossed vacuum-seal roll you cut to size.",
      "Embossed vacuum-seal roll you cut to size.",
      "Built for the vacuum sealing & food compression aisle.",
      "Consumer-sized format for freshness-focused kitchens, coffee users, meal-prep households, and compact apartment pantries."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-015"
      },
      {
        "label": "Aisle",
        "value": "Vacuum Sealing & Food Compression"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "VacFresh Roll Bags",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is VacFresh Roll Bags?",
        "answer": "VacFresh Roll Bags is a Toreso flexible pack made for embossed vacuum-seal roll you cut to size."
      },
      {
        "question": "Who should use VacFresh Roll Bags?",
        "answer": "VacFresh Roll Bags is designed for freshness-focused kitchens, coffee users, meal-prep households, and compact apartment pantries."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Embossed vacuum-seal roll you cut to size."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-02"
    ]
  },
  {
    "id": "vacfresh-mini-pods",
    "catalogNumber": 16,
    "slug": "vacfresh-mini-pods",
    "name": "VacFresh Mini Pods",
    "track": "Vacuum Sealing & Food Compression",
    "categorySlug": "vacuum-sealing-and-food-compression",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Small vacuum pods for baby food / portions.",
    "b2cInnovation": "Small vacuum pods for baby food / portions.",
    "format": "Vacuum Sealing product",
    "signal": "per Global News' \"20 viral kitchen gadgets\" roundup, vacuum sealers are \"having a major moment online\"; mason-jar vacuum sealers (\"Robo Sealer\") and hands-free \"InstaSeal\" units are TikTok Shop staples.",
    "aisle": "Vacuum Sealing & Food Compression",
    "audience": "freshness-focused kitchens, coffee users, meal-prep households, and compact apartment pantries",
    "priceRange": "impulse-mid.",
    "launchPriority": "Future drop",
    "heroLine": "VacFresh Mini Pods is a vacuum sealing product for small vacuum pods for baby food / portions.",
    "demandSignal": "per Global News' \"20 viral kitchen gadgets\" roundup, vacuum sealers are \"having a major moment online\"; mason-jar vacuum sealers (\"Robo Sealer\") and hands-free \"InstaSeal\" units are TikTok Shop staples.",
    "origin": "Global packaging retail",
    "benefits": [
      "Small vacuum pods for baby food / portions.",
      "Small vacuum pods for baby food / portions.",
      "Built for the vacuum sealing & food compression aisle.",
      "Consumer-sized format for freshness-focused kitchens, coffee users, meal-prep households, and compact apartment pantries."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-016"
      },
      {
        "label": "Aisle",
        "value": "Vacuum Sealing & Food Compression"
      },
      {
        "label": "Format",
        "value": "Vacuum Sealing product"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "VacFresh Mini Pods",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is VacFresh Mini Pods?",
        "answer": "VacFresh Mini Pods is a Toreso vacuum sealing product made for small vacuum pods for baby food / portions."
      },
      {
        "question": "Who should use VacFresh Mini Pods?",
        "answer": "VacFresh Mini Pods is designed for freshness-focused kitchens, coffee users, meal-prep households, and compact apartment pantries."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Small vacuum pods for baby food / portions."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-02"
    ]
  },
  {
    "id": "toreso-wine-vacuum-stopper",
    "catalogNumber": 17,
    "slug": "toreso-wine-vacuum-stopper",
    "name": "Toreso Wine Vacuum Stopper",
    "track": "Vacuum Sealing & Food Compression",
    "categorySlug": "vacuum-sealing-and-food-compression",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Pump-stopper that vacuums opened wine bottles.",
    "b2cInnovation": "Pump-stopper that vacuums opened wine bottles.",
    "format": "Vacuum Sealing product",
    "signal": "per Global News' \"20 viral kitchen gadgets\" roundup, vacuum sealers are \"having a major moment online\"; mason-jar vacuum sealers (\"Robo Sealer\") and hands-free \"InstaSeal\" units are TikTok Shop staples.",
    "aisle": "Vacuum Sealing & Food Compression",
    "audience": "freshness-focused kitchens, coffee users, meal-prep households, and compact apartment pantries",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Wine Vacuum Stopper is a vacuum sealing product for pump-stopper that vacuums opened wine bottles.",
    "demandSignal": "perennial Amazon best-seller.",
    "origin": "Global packaging retail",
    "benefits": [
      "Pump-stopper that vacuums opened wine bottles.",
      "Pump-stopper that vacuums opened wine bottles.",
      "Demand signal: perennial Amazon best-seller.",
      "Consumer-sized format for freshness-focused kitchens, coffee users, meal-prep households, and compact apartment pantries."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-017"
      },
      {
        "label": "Aisle",
        "value": "Vacuum Sealing & Food Compression"
      },
      {
        "label": "Format",
        "value": "Vacuum Sealing product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Wine Vacuum Stopper",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Wine Vacuum Stopper?",
        "answer": "Toreso Wine Vacuum Stopper is a Toreso vacuum sealing product made for pump-stopper that vacuums opened wine bottles."
      },
      {
        "question": "Who should use Toreso Wine Vacuum Stopper?",
        "answer": "Toreso Wine Vacuum Stopper is designed for freshness-focused kitchens, coffee users, meal-prep households, and compact apartment pantries."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Pump-stopper that vacuums opened wine bottles."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-02"
    ]
  },
  {
    "id": "vacfresh-cheese-dome",
    "catalogNumber": 18,
    "slug": "vacfresh-cheese-dome",
    "name": "VacFresh Cheese Dome",
    "track": "Vacuum Sealing & Food Compression",
    "categorySlug": "vacuum-sealing-and-food-compression",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Vacuum dome to extend cheese/cut-produce life.",
    "b2cInnovation": "Vacuum dome to extend cheese/cut-produce life.",
    "format": "Vacuum Sealing product",
    "signal": "per Global News' \"20 viral kitchen gadgets\" roundup, vacuum sealers are \"having a major moment online\"; mason-jar vacuum sealers (\"Robo Sealer\") and hands-free \"InstaSeal\" units are TikTok Shop staples.",
    "aisle": "Vacuum Sealing & Food Compression",
    "audience": "freshness-focused kitchens, coffee users, meal-prep households, and compact apartment pantries",
    "priceRange": "mid.",
    "launchPriority": "Future drop",
    "heroLine": "VacFresh Cheese Dome is a vacuum sealing product for vacuum dome to extend cheese/cut-produce life.",
    "demandSignal": "per Global News' \"20 viral kitchen gadgets\" roundup, vacuum sealers are \"having a major moment online\"; mason-jar vacuum sealers (\"Robo Sealer\") and hands-free \"InstaSeal\" units are TikTok Shop staples.",
    "origin": "Global packaging retail",
    "benefits": [
      "Vacuum dome to extend cheese/cut-produce life.",
      "Vacuum dome to extend cheese/cut-produce life.",
      "Built for the vacuum sealing & food compression aisle.",
      "Consumer-sized format for freshness-focused kitchens, coffee users, meal-prep households, and compact apartment pantries."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-018"
      },
      {
        "label": "Aisle",
        "value": "Vacuum Sealing & Food Compression"
      },
      {
        "label": "Format",
        "value": "Vacuum Sealing product"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "VacFresh Cheese Dome",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is VacFresh Cheese Dome?",
        "answer": "VacFresh Cheese Dome is a Toreso vacuum sealing product made for vacuum dome to extend cheese/cut-produce life."
      },
      {
        "question": "Who should use VacFresh Cheese Dome?",
        "answer": "VacFresh Cheese Dome is designed for freshness-focused kitchens, coffee users, meal-prep households, and compact apartment pantries."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Vacuum dome to extend cheese/cut-produce life."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-02"
    ]
  },
  {
    "id": "vacfresh-leftover-lids",
    "catalogNumber": 19,
    "slug": "vacfresh-leftover-lids",
    "name": "VacFresh Leftover Lids",
    "track": "Vacuum Sealing & Food Compression",
    "categorySlug": "vacuum-sealing-and-food-compression",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Universal silicone vacuum lids for bowls/pots.",
    "b2cInnovation": "Universal silicone vacuum lids for bowls/pots.",
    "format": "Vacuum Sealing product",
    "signal": "per Global News' \"20 viral kitchen gadgets\" roundup, vacuum sealers are \"having a major moment online\"; mason-jar vacuum sealers (\"Robo Sealer\") and hands-free \"InstaSeal\" units are TikTok Shop staples.",
    "aisle": "Vacuum Sealing & Food Compression",
    "audience": "freshness-focused kitchens, coffee users, meal-prep households, and compact apartment pantries",
    "priceRange": "impulse-mid.",
    "launchPriority": "Future drop",
    "heroLine": "VacFresh Leftover Lids is a vacuum sealing product for universal silicone vacuum lids for bowls/pots.",
    "demandSignal": "per Global News' \"20 viral kitchen gadgets\" roundup, vacuum sealers are \"having a major moment online\"; mason-jar vacuum sealers (\"Robo Sealer\") and hands-free \"InstaSeal\" units are TikTok Shop staples.",
    "origin": "Global packaging retail",
    "benefits": [
      "Universal silicone vacuum lids for bowls/pots.",
      "Universal silicone vacuum lids for bowls/pots.",
      "Built for the vacuum sealing & food compression aisle.",
      "Consumer-sized format for freshness-focused kitchens, coffee users, meal-prep households, and compact apartment pantries."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-019"
      },
      {
        "label": "Aisle",
        "value": "Vacuum Sealing & Food Compression"
      },
      {
        "label": "Format",
        "value": "Vacuum Sealing product"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "VacFresh Leftover Lids",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is VacFresh Leftover Lids?",
        "answer": "VacFresh Leftover Lids is a Toreso vacuum sealing product made for universal silicone vacuum lids for bowls/pots."
      },
      {
        "question": "Who should use VacFresh Leftover Lids?",
        "answer": "VacFresh Leftover Lids is designed for freshness-focused kitchens, coffee users, meal-prep households, and compact apartment pantries."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Universal silicone vacuum lids for bowls/pots."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-02"
    ]
  },
  {
    "id": "vacfresh-sous-vide-starter",
    "catalogNumber": 20,
    "slug": "vacfresh-sous-vide-starter",
    "name": "VacFresh Sous-Vide Starter",
    "track": "Vacuum Sealing & Food Compression",
    "categorySlug": "vacuum-sealing-and-food-compression",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Reusable vacuum bags + clip for home sous-vide.",
    "b2cInnovation": "Reusable vacuum bags + clip for home sous-vide.",
    "format": "Vacuum Sealing product",
    "signal": "per Global News' \"20 viral kitchen gadgets\" roundup, vacuum sealers are \"having a major moment online\"; mason-jar vacuum sealers (\"Robo Sealer\") and hands-free \"InstaSeal\" units are TikTok Shop staples.",
    "aisle": "Vacuum Sealing & Food Compression",
    "audience": "freshness-focused kitchens, coffee users, meal-prep households, and compact apartment pantries",
    "priceRange": "mid.",
    "launchPriority": "Future drop",
    "heroLine": "VacFresh Sous-Vide Starter is a vacuum sealing product for reusable vacuum bags + clip for home sous-vide.",
    "demandSignal": "per Global News' \"20 viral kitchen gadgets\" roundup, vacuum sealers are \"having a major moment online\"; mason-jar vacuum sealers (\"Robo Sealer\") and hands-free \"InstaSeal\" units are TikTok Shop staples.",
    "origin": "Global packaging retail",
    "benefits": [
      "Reusable vacuum bags + clip for home sous-vide.",
      "Reusable vacuum bags + clip for home sous-vide.",
      "Built for the vacuum sealing & food compression aisle.",
      "Consumer-sized format for freshness-focused kitchens, coffee users, meal-prep households, and compact apartment pantries."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-020"
      },
      {
        "label": "Aisle",
        "value": "Vacuum Sealing & Food Compression"
      },
      {
        "label": "Format",
        "value": "Vacuum Sealing product"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "VacFresh Sous-Vide Starter",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is VacFresh Sous-Vide Starter?",
        "answer": "VacFresh Sous-Vide Starter is a Toreso vacuum sealing product made for reusable vacuum bags + clip for home sous-vide."
      },
      {
        "question": "Who should use VacFresh Sous-Vide Starter?",
        "answer": "VacFresh Sous-Vide Starter is designed for freshness-focused kitchens, coffee users, meal-prep households, and compact apartment pantries."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Reusable vacuum bags + clip for home sous-vide."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-02"
    ]
  },
  {
    "id": "toreso-packdown-cordless-kit",
    "catalogNumber": 21,
    "slug": "toreso-packdown-cordless-kit",
    "name": "Toreso PackDown Cordless Kit",
    "track": "Travel Packing & Clothes Compression",
    "categorySlug": "travel-packing-and-clothes-compression",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Rechargeable mini-pump + reusable compression bags.",
    "b2cInnovation": "USB-C pump doubles as a travel fan blower.",
    "format": "Starter kit",
    "signal": "cordless travel vacuum bags are a TikTok Shop juggernaut — VACBIRD's cordless set advertises compressing each bag in 10–15 seconds and reducing luggage volume by up to 80%; 3COINS sells a frequently-sold-out rechargeable compression-pump + 3-bag set.",
    "aisle": "Travel Packing & Clothes Compression",
    "audience": "frequent travelers, hostel students, small wardrobes, and seasonal storage users",
    "priceRange": "mid.",
    "launchPriority": "Core range",
    "heroLine": "Toreso PackDown Cordless Kit is a starter kit for rechargeable mini-pump + reusable compression bags.",
    "demandSignal": "VACBIRD/SHOWSUN T1 viral.",
    "origin": "China/Hong Kong.",
    "benefits": [
      "Rechargeable mini-pump + reusable compression bags.",
      "USB-C pump doubles as a travel fan blower.",
      "Demand signal: VACBIRD/SHOWSUN T1 viral.",
      "Consumer-sized format for frequent travelers, hostel students, small wardrobes, and seasonal storage users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-021"
      },
      {
        "label": "Aisle",
        "value": "Travel Packing & Clothes Compression"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "China/Hong Kong."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso PackDown Cordless Kit",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso PackDown Cordless Kit?",
        "answer": "Toreso PackDown Cordless Kit is a Toreso starter kit made for rechargeable mini-pump + reusable compression bags."
      },
      {
        "question": "Who should use Toreso PackDown Cordless Kit?",
        "answer": "Toreso PackDown Cordless Kit is designed for frequent travelers, hostel students, small wardrobes, and seasonal storage users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "USB-C pump doubles as a travel fan blower."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-03"
    ]
  },
  {
    "id": "packdown-no-pump-roll-bags",
    "catalogNumber": 22,
    "slug": "packdown-no-pump-roll-bags",
    "name": "PackDown No-Pump Roll Bags",
    "track": "Travel Packing & Clothes Compression",
    "categorySlug": "travel-packing-and-clothes-compression",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Hand-roll compression bags needing no pump.",
    "b2cInnovation": "Hand-roll compression bags needing no pump.",
    "format": "Starter kit",
    "signal": "cordless travel vacuum bags are a TikTok Shop juggernaut — VACBIRD's cordless set advertises compressing each bag in 10–15 seconds and reducing luggage volume by up to 80%; 3COINS sells a frequently-sold-out rechargeable compression-pump + 3-bag set.",
    "aisle": "Travel Packing & Clothes Compression",
    "audience": "frequent travelers, hostel students, small wardrobes, and seasonal storage users",
    "priceRange": "impulse-mid.",
    "launchPriority": "Core range",
    "heroLine": "PackDown No-Pump Roll Bags is a starter kit for hand-roll compression bags needing no pump.",
    "demandSignal": "\"no pump vacuum bag, 30k+ sold\" TikTok.",
    "origin": "Global packaging retail",
    "benefits": [
      "Hand-roll compression bags needing no pump.",
      "Hand-roll compression bags needing no pump.",
      "Demand signal: \"no pump vacuum bag, 30k+ sold\" TikTok.",
      "Consumer-sized format for frequent travelers, hostel students, small wardrobes, and seasonal storage users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-022"
      },
      {
        "label": "Aisle",
        "value": "Travel Packing & Clothes Compression"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "PackDown No-Pump Roll Bags",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is PackDown No-Pump Roll Bags?",
        "answer": "PackDown No-Pump Roll Bags is a Toreso starter kit made for hand-roll compression bags needing no pump."
      },
      {
        "question": "Who should use PackDown No-Pump Roll Bags?",
        "answer": "PackDown No-Pump Roll Bags is designed for frequent travelers, hostel students, small wardrobes, and seasonal storage users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Hand-roll compression bags needing no pump."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-03"
    ]
  },
  {
    "id": "packdown-cubes",
    "catalogNumber": 23,
    "slug": "packdown-cubes",
    "name": "PackDown Cubes",
    "track": "Travel Packing & Clothes Compression",
    "categorySlug": "travel-packing-and-clothes-compression",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Compression packing cubes with built-in zip-compress panel.",
    "b2cInnovation": "Compression packing cubes with built-in zip-compress panel.",
    "format": "Starter kit",
    "signal": "cordless travel vacuum bags are a TikTok Shop juggernaut — VACBIRD's cordless set advertises compressing each bag in 10–15 seconds and reducing luggage volume by up to 80%; 3COINS sells a frequently-sold-out rechargeable compression-pump + 3-bag set.",
    "aisle": "Travel Packing & Clothes Compression",
    "audience": "frequent travelers, hostel students, small wardrobes, and seasonal storage users",
    "priceRange": "mid.",
    "launchPriority": "Core range",
    "heroLine": "PackDown Cubes is a starter kit for compression packing cubes with built-in zip-compress panel.",
    "demandSignal": "Bagsmart compression cubes viral on TravelTok.",
    "origin": "Global packaging retail",
    "benefits": [
      "Compression packing cubes with built-in zip-compress panel.",
      "Compression packing cubes with built-in zip-compress panel.",
      "Demand signal: Bagsmart compression cubes viral on TravelTok.",
      "Consumer-sized format for frequent travelers, hostel students, small wardrobes, and seasonal storage users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-023"
      },
      {
        "label": "Aisle",
        "value": "Travel Packing & Clothes Compression"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "PackDown Cubes",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is PackDown Cubes?",
        "answer": "PackDown Cubes is a Toreso starter kit made for compression packing cubes with built-in zip-compress panel."
      },
      {
        "question": "Who should use PackDown Cubes?",
        "answer": "PackDown Cubes is designed for frequent travelers, hostel students, small wardrobes, and seasonal storage users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Compression packing cubes with built-in zip-compress panel."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-03"
    ]
  },
  {
    "id": "packdown-shoe-pods",
    "catalogNumber": 24,
    "slug": "packdown-shoe-pods",
    "name": "PackDown Shoe Pods",
    "track": "Travel Packing & Clothes Compression",
    "categorySlug": "travel-packing-and-clothes-compression",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Compressible shoe bags.",
    "b2cInnovation": "Compressible shoe bags.",
    "format": "Starter kit",
    "signal": "cordless travel vacuum bags are a TikTok Shop juggernaut — VACBIRD's cordless set advertises compressing each bag in 10–15 seconds and reducing luggage volume by up to 80%; 3COINS sells a frequently-sold-out rechargeable compression-pump + 3-bag set.",
    "aisle": "Travel Packing & Clothes Compression",
    "audience": "frequent travelers, hostel students, small wardrobes, and seasonal storage users",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "PackDown Shoe Pods is a starter kit for compressible shoe bags.",
    "demandSignal": "cordless travel vacuum bags are a TikTok Shop juggernaut — VACBIRD's cordless set advertises compressing each bag in 10–15 seconds and reducing luggage volume by up to 80%; 3COINS sells a frequently-sold-out rechargeable compression-pump + 3-bag set.",
    "origin": "Global packaging retail",
    "benefits": [
      "Compressible shoe bags.",
      "Compressible shoe bags.",
      "Built for the travel packing & clothes compression aisle.",
      "Consumer-sized format for frequent travelers, hostel students, small wardrobes, and seasonal storage users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-024"
      },
      {
        "label": "Aisle",
        "value": "Travel Packing & Clothes Compression"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "PackDown Shoe Pods",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is PackDown Shoe Pods?",
        "answer": "PackDown Shoe Pods is a Toreso starter kit made for compressible shoe bags."
      },
      {
        "question": "Who should use PackDown Shoe Pods?",
        "answer": "PackDown Shoe Pods is designed for frequent travelers, hostel students, small wardrobes, and seasonal storage users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Compressible shoe bags."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-03"
    ]
  },
  {
    "id": "packdown-dirty-clothes-bag",
    "catalogNumber": 25,
    "slug": "packdown-dirty-clothes-bag",
    "name": "PackDown Dirty-Clothes Bag",
    "track": "Travel Packing & Clothes Compression",
    "categorySlug": "travel-packing-and-clothes-compression",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Dedicated compressible laundry bag for trips.",
    "b2cInnovation": "Dedicated compressible laundry bag for trips.",
    "format": "Starter kit",
    "signal": "cordless travel vacuum bags are a TikTok Shop juggernaut — VACBIRD's cordless set advertises compressing each bag in 10–15 seconds and reducing luggage volume by up to 80%; 3COINS sells a frequently-sold-out rechargeable compression-pump + 3-bag set.",
    "aisle": "Travel Packing & Clothes Compression",
    "audience": "frequent travelers, hostel students, small wardrobes, and seasonal storage users",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "PackDown Dirty-Clothes Bag is a starter kit for dedicated compressible laundry bag for trips.",
    "demandSignal": "cordless travel vacuum bags are a TikTok Shop juggernaut — VACBIRD's cordless set advertises compressing each bag in 10–15 seconds and reducing luggage volume by up to 80%; 3COINS sells a frequently-sold-out rechargeable compression-pump + 3-bag set.",
    "origin": "Global packaging retail",
    "benefits": [
      "Dedicated compressible laundry bag for trips.",
      "Dedicated compressible laundry bag for trips.",
      "Built for the travel packing & clothes compression aisle.",
      "Consumer-sized format for frequent travelers, hostel students, small wardrobes, and seasonal storage users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-025"
      },
      {
        "label": "Aisle",
        "value": "Travel Packing & Clothes Compression"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "PackDown Dirty-Clothes Bag",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is PackDown Dirty-Clothes Bag?",
        "answer": "PackDown Dirty-Clothes Bag is a Toreso starter kit made for dedicated compressible laundry bag for trips."
      },
      {
        "question": "Who should use PackDown Dirty-Clothes Bag?",
        "answer": "PackDown Dirty-Clothes Bag is designed for frequent travelers, hostel students, small wardrobes, and seasonal storage users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Dedicated compressible laundry bag for trips."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-03"
    ]
  },
  {
    "id": "toreso-seasonal-bedding-bags",
    "catalogNumber": 26,
    "slug": "toreso-seasonal-bedding-bags",
    "name": "Toreso Seasonal Bedding Bags",
    "track": "Travel Packing & Clothes Compression",
    "categorySlug": "travel-packing-and-clothes-compression",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Large vacuum bags for quilts/winter wear off-season storage.",
    "b2cInnovation": "Large vacuum bags for quilts/winter wear off-season storage.",
    "format": "Flexible pack",
    "signal": "cordless travel vacuum bags are a TikTok Shop juggernaut — VACBIRD's cordless set advertises compressing each bag in 10–15 seconds and reducing luggage volume by up to 80%; 3COINS sells a frequently-sold-out rechargeable compression-pump + 3-bag set.",
    "aisle": "Travel Packing & Clothes Compression",
    "audience": "frequent travelers, hostel students, small wardrobes, and seasonal storage users",
    "priceRange": "mid.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Seasonal Bedding Bags is a flexible pack for large vacuum bags for quilts/winter wear off-season storage.",
    "demandSignal": "core APAC small-apartment staple.",
    "origin": "Japan/Korea.",
    "benefits": [
      "Large vacuum bags for quilts/winter wear off-season storage.",
      "Large vacuum bags for quilts/winter wear off-season storage.",
      "Demand signal: core APAC small-apartment staple.",
      "Consumer-sized format for frequent travelers, hostel students, small wardrobes, and seasonal storage users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-026"
      },
      {
        "label": "Aisle",
        "value": "Travel Packing & Clothes Compression"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Japan/Korea."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Seasonal Bedding Bags",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Seasonal Bedding Bags?",
        "answer": "Toreso Seasonal Bedding Bags is a Toreso flexible pack made for large vacuum bags for quilts/winter wear off-season storage."
      },
      {
        "question": "Who should use Toreso Seasonal Bedding Bags?",
        "answer": "Toreso Seasonal Bedding Bags is designed for frequent travelers, hostel students, small wardrobes, and seasonal storage users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Large vacuum bags for quilts/winter wear off-season storage."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-03"
    ]
  },
  {
    "id": "packdown-hanging-garment-vacuum-bag",
    "catalogNumber": 27,
    "slug": "packdown-hanging-garment-vacuum-bag",
    "name": "PackDown Hanging Garment Vacuum Bag",
    "track": "Travel Packing & Clothes Compression",
    "categorySlug": "travel-packing-and-clothes-compression",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Vacuum bag that keeps suits on hangers.",
    "b2cInnovation": "Vacuum bag that keeps suits on hangers.",
    "format": "Starter kit",
    "signal": "cordless travel vacuum bags are a TikTok Shop juggernaut — VACBIRD's cordless set advertises compressing each bag in 10–15 seconds and reducing luggage volume by up to 80%; 3COINS sells a frequently-sold-out rechargeable compression-pump + 3-bag set.",
    "aisle": "Travel Packing & Clothes Compression",
    "audience": "frequent travelers, hostel students, small wardrobes, and seasonal storage users",
    "priceRange": "mid.",
    "launchPriority": "Future drop",
    "heroLine": "PackDown Hanging Garment Vacuum Bag is a starter kit for vacuum bag that keeps suits on hangers.",
    "demandSignal": "cordless travel vacuum bags are a TikTok Shop juggernaut — VACBIRD's cordless set advertises compressing each bag in 10–15 seconds and reducing luggage volume by up to 80%; 3COINS sells a frequently-sold-out rechargeable compression-pump + 3-bag set.",
    "origin": "Global packaging retail",
    "benefits": [
      "Vacuum bag that keeps suits on hangers.",
      "Vacuum bag that keeps suits on hangers.",
      "Built for the travel packing & clothes compression aisle.",
      "Consumer-sized format for frequent travelers, hostel students, small wardrobes, and seasonal storage users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-027"
      },
      {
        "label": "Aisle",
        "value": "Travel Packing & Clothes Compression"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "PackDown Hanging Garment Vacuum Bag",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is PackDown Hanging Garment Vacuum Bag?",
        "answer": "PackDown Hanging Garment Vacuum Bag is a Toreso starter kit made for vacuum bag that keeps suits on hangers."
      },
      {
        "question": "Who should use PackDown Hanging Garment Vacuum Bag?",
        "answer": "PackDown Hanging Garment Vacuum Bag is designed for frequent travelers, hostel students, small wardrobes, and seasonal storage users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Vacuum bag that keeps suits on hangers."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-03"
    ]
  },
  {
    "id": "packdown-expandable-3-way-travel-bag",
    "catalogNumber": 28,
    "slug": "packdown-expandable-3-way-travel-bag",
    "name": "PackDown Expandable 3-Way Travel Bag",
    "track": "Travel Packing & Clothes Compression",
    "categorySlug": "travel-packing-and-clothes-compression",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Foldable bag with bottom-zip expansion for souvenirs.",
    "b2cInnovation": "Foldable bag with bottom-zip expansion for souvenirs.",
    "format": "Starter kit",
    "signal": "cordless travel vacuum bags are a TikTok Shop juggernaut — VACBIRD's cordless set advertises compressing each bag in 10–15 seconds and reducing luggage volume by up to 80%; 3COINS sells a frequently-sold-out rechargeable compression-pump + 3-bag set.",
    "aisle": "Travel Packing & Clothes Compression",
    "audience": "frequent travelers, hostel students, small wardrobes, and seasonal storage users",
    "priceRange": "mid.",
    "launchPriority": "Future drop",
    "heroLine": "PackDown Expandable 3-Way Travel Bag is a starter kit for foldable bag with bottom-zip expansion for souvenirs.",
    "demandSignal": "3COINS best-seller (¥1,650).",
    "origin": "Japan.",
    "benefits": [
      "Foldable bag with bottom-zip expansion for souvenirs.",
      "Foldable bag with bottom-zip expansion for souvenirs.",
      "Demand signal: 3COINS best-seller (¥1,650).",
      "Consumer-sized format for frequent travelers, hostel students, small wardrobes, and seasonal storage users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-028"
      },
      {
        "label": "Aisle",
        "value": "Travel Packing & Clothes Compression"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Japan."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "PackDown Expandable 3-Way Travel Bag",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is PackDown Expandable 3-Way Travel Bag?",
        "answer": "PackDown Expandable 3-Way Travel Bag is a Toreso starter kit made for foldable bag with bottom-zip expansion for souvenirs."
      },
      {
        "question": "Who should use PackDown Expandable 3-Way Travel Bag?",
        "answer": "PackDown Expandable 3-Way Travel Bag is designed for frequent travelers, hostel students, small wardrobes, and seasonal storage users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Foldable bag with bottom-zip expansion for souvenirs."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-03"
    ]
  },
  {
    "id": "toreso-clear-cube-bag",
    "catalogNumber": 29,
    "slug": "toreso-clear-cube-bag",
    "name": "Toreso Clear Cube Bag",
    "track": "Travel Packing & Clothes Compression",
    "categorySlug": "travel-packing-and-clothes-compression",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Translucent see-through storage/leisure tote.",
    "b2cInnovation": "Translucent see-through storage/leisure tote.",
    "format": "Flexible pack",
    "signal": "cordless travel vacuum bags are a TikTok Shop juggernaut — VACBIRD's cordless set advertises compressing each bag in 10–15 seconds and reducing luggage volume by up to 80%; 3COINS sells a frequently-sold-out rechargeable compression-pump + 3-bag set.",
    "aisle": "Travel Packing & Clothes Compression",
    "audience": "frequent travelers, hostel students, small wardrobes, and seasonal storage users",
    "priceRange": "impulse-mid.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Clear Cube Bag is a flexible pack for translucent see-through storage/leisure tote.",
    "demandSignal": "3COINS \"Clear box bag\" series star product.",
    "origin": "Japan.",
    "benefits": [
      "Translucent see-through storage/leisure tote.",
      "Translucent see-through storage/leisure tote.",
      "Demand signal: 3COINS \"Clear box bag\" series star product.",
      "Consumer-sized format for frequent travelers, hostel students, small wardrobes, and seasonal storage users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-029"
      },
      {
        "label": "Aisle",
        "value": "Travel Packing & Clothes Compression"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Japan."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Clear Cube Bag",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Clear Cube Bag?",
        "answer": "Toreso Clear Cube Bag is a Toreso flexible pack made for translucent see-through storage/leisure tote."
      },
      {
        "question": "Who should use Toreso Clear Cube Bag?",
        "answer": "Toreso Clear Cube Bag is designed for frequent travelers, hostel students, small wardrobes, and seasonal storage users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Translucent see-through storage/leisure tote."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-03"
    ]
  },
  {
    "id": "packdown-underbed-slim-box",
    "catalogNumber": 30,
    "slug": "packdown-underbed-slim-box",
    "name": "PackDown Underbed Slim Box",
    "track": "Travel Packing & Clothes Compression",
    "categorySlug": "travel-packing-and-clothes-compression",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Low-profile clear compression box for under-bed.",
    "b2cInnovation": "Low-profile clear compression box for under-bed.",
    "format": "Starter kit",
    "signal": "cordless travel vacuum bags are a TikTok Shop juggernaut — VACBIRD's cordless set advertises compressing each bag in 10–15 seconds and reducing luggage volume by up to 80%; 3COINS sells a frequently-sold-out rechargeable compression-pump + 3-bag set.",
    "aisle": "Travel Packing & Clothes Compression",
    "audience": "frequent travelers, hostel students, small wardrobes, and seasonal storage users",
    "priceRange": "mid.",
    "launchPriority": "Future drop",
    "heroLine": "PackDown Underbed Slim Box is a starter kit for low-profile clear compression box for under-bed.",
    "demandSignal": "3COINS Under-Bed Clear Box is \"one of its most popular products.\"",
    "origin": "Japan.",
    "benefits": [
      "Low-profile clear compression box for under-bed.",
      "Low-profile clear compression box for under-bed.",
      "Demand signal: 3COINS Under-Bed Clear Box is \"one of its most popular products.\"",
      "Consumer-sized format for frequent travelers, hostel students, small wardrobes, and seasonal storage users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-030"
      },
      {
        "label": "Aisle",
        "value": "Travel Packing & Clothes Compression"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Japan."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "PackDown Underbed Slim Box",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is PackDown Underbed Slim Box?",
        "answer": "PackDown Underbed Slim Box is a Toreso starter kit made for low-profile clear compression box for under-bed."
      },
      {
        "question": "Who should use PackDown Underbed Slim Box?",
        "answer": "PackDown Underbed Slim Box is designed for frequent travelers, hostel students, small wardrobes, and seasonal storage users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Low-profile clear compression box for under-bed."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-03"
    ]
  },
  {
    "id": "toreso-pourclip",
    "catalogNumber": 31,
    "slug": "toreso-pourclip",
    "name": "Toreso PourClip",
    "track": "Bag Clips, Pour-Spouts & Resealable Closures",
    "categorySlug": "bag-clips-pour-spouts-and-resealable-closures",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Bag clip with a flip pour-spout that turns a rice/cereal/snack bag into a resealable bottle.",
    "b2cInnovation": "Bag clip with a flip pour-spout that turns a rice/cereal/snack bag into a resealable bottle.",
    "format": "Reusable tool",
    "signal": "\"magnetic cherry blossom\" bag clips and pour-spout food clips are TikTok Shop sellers; a ¥100 Daiso clip that \"turns bags into bottles\" is a recurring viral Japan-finds hit.",
    "aisle": "Bag Clips, Pour-Spouts & Resealable Closures",
    "audience": "families, pantry organizers, pet owners, rice users, and snack drawers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso PourClip is a reusable tool for bag clip with a flip pour-spout that turns a rice/cereal/snack bag into a resealable bottle.",
    "demandSignal": "viral Daiso ¥100 \"bag to bottle\" clip.",
    "origin": "Japan.",
    "benefits": [
      "Bag clip with a flip pour-spout that turns a rice/cereal/snack bag into a resealable bottle.",
      "Bag clip with a flip pour-spout that turns a rice/cereal/snack bag into a resealable bottle.",
      "Demand signal: viral Daiso ¥100 \"bag to bottle\" clip.",
      "Consumer-sized format for families, pantry organizers, pet owners, rice users, and snack drawers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-031"
      },
      {
        "label": "Aisle",
        "value": "Bag Clips, Pour-Spouts & Resealable Closures"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Japan."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso PourClip",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso PourClip?",
        "answer": "Toreso PourClip is a Toreso reusable tool made for bag clip with a flip pour-spout that turns a rice/cereal/snack bag into a resealable bottle."
      },
      {
        "question": "Who should use Toreso PourClip?",
        "answer": "Toreso PourClip is designed for families, pantry organizers, pet owners, rice users, and snack drawers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Bag clip with a flip pour-spout that turns a rice/cereal/snack bag into a resealable bottle."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-04"
    ]
  },
  {
    "id": "petalclip-magnetic",
    "catalogNumber": 32,
    "slug": "petalclip-magnetic",
    "name": "PetalClip Magnetic",
    "track": "Bag Clips, Pour-Spouts & Resealable Closures",
    "categorySlug": "bag-clips-pour-spouts-and-resealable-closures",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Cherry-blossom magnetic clips that double as fridge decor.",
    "b2cInnovation": "Cherry-blossom magnetic clips that double as fridge decor.",
    "format": "Reusable tool",
    "signal": "\"magnetic cherry blossom\" bag clips and pour-spout food clips are TikTok Shop sellers; a ¥100 Daiso clip that \"turns bags into bottles\" is a recurring viral Japan-finds hit.",
    "aisle": "Bag Clips, Pour-Spouts & Resealable Closures",
    "audience": "families, pantry organizers, pet owners, rice users, and snack drawers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "PetalClip Magnetic is a reusable tool for cherry-blossom magnetic clips that double as fridge decor.",
    "demandSignal": "TikTok Shop viral.",
    "origin": "Korea/Japan.",
    "benefits": [
      "Cherry-blossom magnetic clips that double as fridge decor.",
      "Cherry-blossom magnetic clips that double as fridge decor.",
      "Demand signal: TikTok Shop viral.",
      "Consumer-sized format for families, pantry organizers, pet owners, rice users, and snack drawers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-032"
      },
      {
        "label": "Aisle",
        "value": "Bag Clips, Pour-Spouts & Resealable Closures"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Korea/Japan."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "PetalClip Magnetic",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is PetalClip Magnetic?",
        "answer": "PetalClip Magnetic is a Toreso reusable tool made for cherry-blossom magnetic clips that double as fridge decor."
      },
      {
        "question": "Who should use PetalClip Magnetic?",
        "answer": "PetalClip Magnetic is designed for families, pantry organizers, pet owners, rice users, and snack drawers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Cherry-blossom magnetic clips that double as fridge decor."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-04"
    ]
  },
  {
    "id": "loopclip-handle",
    "catalogNumber": 33,
    "slug": "loopclip-handle",
    "name": "LoopClip Handle",
    "track": "Bag Clips, Pour-Spouts & Resealable Closures",
    "categorySlug": "bag-clips-pour-spouts-and-resealable-closures",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Clip that creates a carry-handle \"so you can use your chips like a little handbag.\"",
    "b2cInnovation": "Clip that creates a carry-handle \"so you can use your chips like a little handbag.\"",
    "format": "Reusable tool",
    "signal": "\"magnetic cherry blossom\" bag clips and pour-spout food clips are TikTok Shop sellers; a ¥100 Daiso clip that \"turns bags into bottles\" is a recurring viral Japan-finds hit.",
    "aisle": "Bag Clips, Pour-Spouts & Resealable Closures",
    "audience": "families, pantry organizers, pet owners, rice users, and snack drawers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "LoopClip Handle is a reusable tool for clip that creates a carry-handle \"so you can use your chips like a little handbag.\"",
    "demandSignal": "\"LoopLock\" TikTok genre.",
    "origin": "Global packaging retail",
    "benefits": [
      "Clip that creates a carry-handle \"so you can use your chips like a little handbag.\"",
      "Clip that creates a carry-handle \"so you can use your chips like a little handbag.\"",
      "Demand signal: \"LoopLock\" TikTok genre.",
      "Consumer-sized format for families, pantry organizers, pet owners, rice users, and snack drawers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-033"
      },
      {
        "label": "Aisle",
        "value": "Bag Clips, Pour-Spouts & Resealable Closures"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "LoopClip Handle",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is LoopClip Handle?",
        "answer": "LoopClip Handle is a Toreso reusable tool made for clip that creates a carry-handle \"so you can use your chips like a little handbag.\""
      },
      {
        "question": "Who should use LoopClip Handle?",
        "answer": "LoopClip Handle is designed for families, pantry organizers, pet owners, rice users, and snack drawers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Clip that creates a carry-handle \"so you can use your chips like a little handbag.\""
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-04"
    ]
  },
  {
    "id": "toreso-slide-zip-clips",
    "catalogNumber": 34,
    "slug": "toreso-slide-zip-clips",
    "name": "Toreso Slide-Zip Clips",
    "track": "Bag Clips, Pour-Spouts & Resealable Closures",
    "categorySlug": "bag-clips-pour-spouts-and-resealable-closures",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Slider clips that create an airtight seal across any bag width.",
    "b2cInnovation": "Slider clips that create an airtight seal across any bag width.",
    "format": "Reusable tool",
    "signal": "\"magnetic cherry blossom\" bag clips and pour-spout food clips are TikTok Shop sellers; a ¥100 Daiso clip that \"turns bags into bottles\" is a recurring viral Japan-finds hit.",
    "aisle": "Bag Clips, Pour-Spouts & Resealable Closures",
    "audience": "families, pantry organizers, pet owners, rice users, and snack drawers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Slide-Zip Clips is a reusable tool for slider clips that create an airtight seal across any bag width.",
    "demandSignal": "\"magnetic cherry blossom\" bag clips and pour-spout food clips are TikTok Shop sellers; a ¥100 Daiso clip that \"turns bags into bottles\" is a recurring viral Japan-finds hit.",
    "origin": "Global packaging retail",
    "benefits": [
      "Slider clips that create an airtight seal across any bag width.",
      "Slider clips that create an airtight seal across any bag width.",
      "Built for the bag clips, pour-spouts & resealable closures aisle.",
      "Consumer-sized format for families, pantry organizers, pet owners, rice users, and snack drawers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-034"
      },
      {
        "label": "Aisle",
        "value": "Bag Clips, Pour-Spouts & Resealable Closures"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Slide-Zip Clips",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Slide-Zip Clips?",
        "answer": "Toreso Slide-Zip Clips is a Toreso reusable tool made for slider clips that create an airtight seal across any bag width."
      },
      {
        "question": "Who should use Toreso Slide-Zip Clips?",
        "answer": "Toreso Slide-Zip Clips is designed for families, pantry organizers, pet owners, rice users, and snack drawers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Slider clips that create an airtight seal across any bag width."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-04"
    ]
  },
  {
    "id": "color-code-clip-set",
    "catalogNumber": 35,
    "slug": "color-code-clip-set",
    "name": "Color-Code Clip Set",
    "track": "Bag Clips, Pour-Spouts & Resealable Closures",
    "categorySlug": "bag-clips-pour-spouts-and-resealable-closures",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Multi-size, multi-color reusable clips (20-pack).",
    "b2cInnovation": "Multi-size, multi-color reusable clips (20-pack).",
    "format": "Starter kit",
    "signal": "\"magnetic cherry blossom\" bag clips and pour-spout food clips are TikTok Shop sellers; a ¥100 Daiso clip that \"turns bags into bottles\" is a recurring viral Japan-finds hit.",
    "aisle": "Bag Clips, Pour-Spouts & Resealable Closures",
    "audience": "families, pantry organizers, pet owners, rice users, and snack drawers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Color-Code Clip Set is a starter kit for multi-size, multi-color reusable clips (20-pack).",
    "demandSignal": "perennial best-seller format.",
    "origin": "Global packaging retail",
    "benefits": [
      "Multi-size, multi-color reusable clips (20-pack).",
      "Multi-size, multi-color reusable clips (20-pack).",
      "Demand signal: perennial best-seller format.",
      "Consumer-sized format for families, pantry organizers, pet owners, rice users, and snack drawers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-035"
      },
      {
        "label": "Aisle",
        "value": "Bag Clips, Pour-Spouts & Resealable Closures"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Color-Code Clip Set",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Color-Code Clip Set?",
        "answer": "Color-Code Clip Set is a Toreso starter kit made for multi-size, multi-color reusable clips (20-pack)."
      },
      {
        "question": "Who should use Color-Code Clip Set?",
        "answer": "Color-Code Clip Set is designed for families, pantry organizers, pet owners, rice users, and snack drawers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Multi-size, multi-color reusable clips (20-pack)."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-04"
    ]
  },
  {
    "id": "toreso-snack-lock-caps",
    "catalogNumber": 36,
    "slug": "toreso-snack-lock-caps",
    "name": "Toreso Snack-Lock Caps",
    "track": "Bag Clips, Pour-Spouts & Resealable Closures",
    "categorySlug": "bag-clips-pour-spouts-and-resealable-closures",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Reusable screw caps that clamp onto cut bag corners.",
    "b2cInnovation": "Reusable screw caps that clamp onto cut bag corners.",
    "format": "Reusable tool",
    "signal": "\"magnetic cherry blossom\" bag clips and pour-spout food clips are TikTok Shop sellers; a ¥100 Daiso clip that \"turns bags into bottles\" is a recurring viral Japan-finds hit.",
    "aisle": "Bag Clips, Pour-Spouts & Resealable Closures",
    "audience": "families, pantry organizers, pet owners, rice users, and snack drawers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Snack-Lock Caps is a reusable tool for reusable screw caps that clamp onto cut bag corners.",
    "demandSignal": "\"magnetic cherry blossom\" bag clips and pour-spout food clips are TikTok Shop sellers; a ¥100 Daiso clip that \"turns bags into bottles\" is a recurring viral Japan-finds hit.",
    "origin": "Global packaging retail",
    "benefits": [
      "Reusable screw caps that clamp onto cut bag corners.",
      "Reusable screw caps that clamp onto cut bag corners.",
      "Built for the bag clips, pour-spouts & resealable closures aisle.",
      "Consumer-sized format for families, pantry organizers, pet owners, rice users, and snack drawers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-036"
      },
      {
        "label": "Aisle",
        "value": "Bag Clips, Pour-Spouts & Resealable Closures"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Snack-Lock Caps",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Snack-Lock Caps?",
        "answer": "Toreso Snack-Lock Caps is a Toreso reusable tool made for reusable screw caps that clamp onto cut bag corners."
      },
      {
        "question": "Who should use Toreso Snack-Lock Caps?",
        "answer": "Toreso Snack-Lock Caps is designed for families, pantry organizers, pet owners, rice users, and snack drawers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Reusable screw caps that clamp onto cut bag corners."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-04"
    ]
  },
  {
    "id": "hang-tab-clips",
    "catalogNumber": 37,
    "slug": "hang-tab-clips",
    "name": "Hang-Tab Clips",
    "track": "Bag Clips, Pour-Spouts & Resealable Closures",
    "categorySlug": "bag-clips-pour-spouts-and-resealable-closures",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Clips with a hook to hang opened bags in the pantry.",
    "b2cInnovation": "Clips with a hook to hang opened bags in the pantry.",
    "format": "Reusable tool",
    "signal": "\"magnetic cherry blossom\" bag clips and pour-spout food clips are TikTok Shop sellers; a ¥100 Daiso clip that \"turns bags into bottles\" is a recurring viral Japan-finds hit.",
    "aisle": "Bag Clips, Pour-Spouts & Resealable Closures",
    "audience": "families, pantry organizers, pet owners, rice users, and snack drawers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Hang-Tab Clips is a reusable tool for clips with a hook to hang opened bags in the pantry.",
    "demandSignal": "\"magnetic cherry blossom\" bag clips and pour-spout food clips are TikTok Shop sellers; a ¥100 Daiso clip that \"turns bags into bottles\" is a recurring viral Japan-finds hit.",
    "origin": "Global packaging retail",
    "benefits": [
      "Clips with a hook to hang opened bags in the pantry.",
      "Clips with a hook to hang opened bags in the pantry.",
      "Built for the bag clips, pour-spouts & resealable closures aisle.",
      "Consumer-sized format for families, pantry organizers, pet owners, rice users, and snack drawers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-037"
      },
      {
        "label": "Aisle",
        "value": "Bag Clips, Pour-Spouts & Resealable Closures"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Hang-Tab Clips",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Hang-Tab Clips?",
        "answer": "Hang-Tab Clips is a Toreso reusable tool made for clips with a hook to hang opened bags in the pantry."
      },
      {
        "question": "Who should use Hang-Tab Clips?",
        "answer": "Hang-Tab Clips is designed for families, pantry organizers, pet owners, rice users, and snack drawers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Clips with a hook to hang opened bags in the pantry."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-04"
    ]
  },
  {
    "id": "toreso-spice-sachet-clamps",
    "catalogNumber": 38,
    "slug": "toreso-spice-sachet-clamps",
    "name": "Toreso Spice-Sachet Clamps",
    "track": "Bag Clips, Pour-Spouts & Resealable Closures",
    "categorySlug": "bag-clips-pour-spouts-and-resealable-closures",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Tiny clips sized for masala/spice sachets.",
    "b2cInnovation": "Tiny clips sized for masala/spice sachets.",
    "format": "Bag Clips, Pour-Spouts product",
    "signal": "\"magnetic cherry blossom\" bag clips and pour-spout food clips are TikTok Shop sellers; a ¥100 Daiso clip that \"turns bags into bottles\" is a recurring viral Japan-finds hit.",
    "aisle": "Bag Clips, Pour-Spouts & Resealable Closures",
    "audience": "families, pantry organizers, pet owners, rice users, and snack drawers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Spice-Sachet Clamps is a bag clips, pour-spouts product for tiny clips sized for masala/spice sachets.",
    "demandSignal": "\"magnetic cherry blossom\" bag clips and pour-spout food clips are TikTok Shop sellers; a ¥100 Daiso clip that \"turns bags into bottles\" is a recurring viral Japan-finds hit.",
    "origin": "India-specific.",
    "benefits": [
      "Tiny clips sized for masala/spice sachets.",
      "Tiny clips sized for masala/spice sachets.",
      "Built for the bag clips, pour-spouts & resealable closures aisle.",
      "Consumer-sized format for families, pantry organizers, pet owners, rice users, and snack drawers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-038"
      },
      {
        "label": "Aisle",
        "value": "Bag Clips, Pour-Spouts & Resealable Closures"
      },
      {
        "label": "Format",
        "value": "Bag Clips, Pour-Spouts product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "India-specific."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Spice-Sachet Clamps",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Spice-Sachet Clamps?",
        "answer": "Toreso Spice-Sachet Clamps is a Toreso bag clips, pour-spouts product made for tiny clips sized for masala/spice sachets."
      },
      {
        "question": "Who should use Toreso Spice-Sachet Clamps?",
        "answer": "Toreso Spice-Sachet Clamps is designed for families, pantry organizers, pet owners, rice users, and snack drawers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Tiny clips sized for masala/spice sachets."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-04"
    ]
  },
  {
    "id": "one-hand-lever-clip",
    "catalogNumber": 39,
    "slug": "one-hand-lever-clip",
    "name": "One-Hand Lever Clip",
    "track": "Bag Clips, Pour-Spouts & Resealable Closures",
    "categorySlug": "bag-clips-pour-spouts-and-resealable-closures",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Squeeze-to-open lever clip for one-handed use.",
    "b2cInnovation": "Squeeze-to-open lever clip for one-handed use.",
    "format": "Reusable tool",
    "signal": "\"magnetic cherry blossom\" bag clips and pour-spout food clips are TikTok Shop sellers; a ¥100 Daiso clip that \"turns bags into bottles\" is a recurring viral Japan-finds hit.",
    "aisle": "Bag Clips, Pour-Spouts & Resealable Closures",
    "audience": "families, pantry organizers, pet owners, rice users, and snack drawers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "One-Hand Lever Clip is a reusable tool for squeeze-to-open lever clip for one-handed use.",
    "demandSignal": "\"magnetic cherry blossom\" bag clips and pour-spout food clips are TikTok Shop sellers; a ¥100 Daiso clip that \"turns bags into bottles\" is a recurring viral Japan-finds hit.",
    "origin": "Global packaging retail",
    "benefits": [
      "Squeeze-to-open lever clip for one-handed use.",
      "Squeeze-to-open lever clip for one-handed use.",
      "Built for the bag clips, pour-spouts & resealable closures aisle.",
      "Consumer-sized format for families, pantry organizers, pet owners, rice users, and snack drawers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-039"
      },
      {
        "label": "Aisle",
        "value": "Bag Clips, Pour-Spouts & Resealable Closures"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "One-Hand Lever Clip",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is One-Hand Lever Clip?",
        "answer": "One-Hand Lever Clip is a Toreso reusable tool made for squeeze-to-open lever clip for one-handed use."
      },
      {
        "question": "Who should use One-Hand Lever Clip?",
        "answer": "One-Hand Lever Clip is designed for families, pantry organizers, pet owners, rice users, and snack drawers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Squeeze-to-open lever clip for one-handed use."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-04"
    ]
  },
  {
    "id": "freezer-grade-clips",
    "catalogNumber": 40,
    "slug": "freezer-grade-clips",
    "name": "Freezer-Grade Clips",
    "track": "Bag Clips, Pour-Spouts & Resealable Closures",
    "categorySlug": "bag-clips-pour-spouts-and-resealable-closures",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Cold-resistant clips that won't crack in the freezer.",
    "b2cInnovation": "Cold-resistant clips that won't crack in the freezer.",
    "format": "Reusable tool",
    "signal": "\"magnetic cherry blossom\" bag clips and pour-spout food clips are TikTok Shop sellers; a ¥100 Daiso clip that \"turns bags into bottles\" is a recurring viral Japan-finds hit.",
    "aisle": "Bag Clips, Pour-Spouts & Resealable Closures",
    "audience": "families, pantry organizers, pet owners, rice users, and snack drawers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Freezer-Grade Clips is a reusable tool for cold-resistant clips that won't crack in the freezer.",
    "demandSignal": "\"magnetic cherry blossom\" bag clips and pour-spout food clips are TikTok Shop sellers; a ¥100 Daiso clip that \"turns bags into bottles\" is a recurring viral Japan-finds hit.",
    "origin": "Global packaging retail",
    "benefits": [
      "Cold-resistant clips that won't crack in the freezer.",
      "Cold-resistant clips that won't crack in the freezer.",
      "Built for the bag clips, pour-spouts & resealable closures aisle.",
      "Consumer-sized format for families, pantry organizers, pet owners, rice users, and snack drawers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-040"
      },
      {
        "label": "Aisle",
        "value": "Bag Clips, Pour-Spouts & Resealable Closures"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Freezer-Grade Clips",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Freezer-Grade Clips?",
        "answer": "Freezer-Grade Clips is a Toreso reusable tool made for cold-resistant clips that won't crack in the freezer."
      },
      {
        "question": "Who should use Freezer-Grade Clips?",
        "answer": "Freezer-Grade Clips is designed for families, pantry organizers, pet owners, rice users, and snack drawers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Cold-resistant clips that won't crack in the freezer."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-04"
    ]
  },
  {
    "id": "toreso-everbag-silicone-zip",
    "catalogNumber": 41,
    "slug": "toreso-everbag-silicone-zip",
    "name": "Toreso EverBag (Silicone Zip)",
    "track": "Reusable Silicone Solutions",
    "categorySlug": "reusable-silicone-solutions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Platinum-silicone reusable storage bag with pinch-lock seal; microwave/freezer/oven-safe.",
    "b2cInnovation": "leak-proof, dishwasher-safe.",
    "format": "Flexible pack",
    "signal": "Stasher (acquired by SC Johnson, owner of Ziploc, in 2019) states one bag replaces up to 260 single-use bags/year; its snack bag holds a 4.9-star rating across 2,000+ reviews. Silicone is the fastest-growing reusable-wrap material per Maximize Market Research.",
    "aisle": "Reusable Silicone Solutions",
    "audience": "reusable-storage buyers, lunch packers, fridge organizers, and low-waste households",
    "priceRange": "mid.",
    "launchPriority": "Signature launch",
    "heroLine": "Toreso EverBag (Silicone Zip) is a flexible pack for platinum-silicone reusable storage bag with pinch-lock seal; microwave/freezer/oven-safe.",
    "demandSignal": "Stasher category.",
    "origin": "Global packaging retail",
    "benefits": [
      "Platinum-silicone reusable storage bag with pinch-lock seal; microwave/freezer/oven-safe.",
      "leak-proof, dishwasher-safe.",
      "Demand signal: Stasher category.",
      "Consumer-sized format for reusable-storage buyers, lunch packers, fridge organizers, and low-waste households."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-041"
      },
      {
        "label": "Aisle",
        "value": "Reusable Silicone Solutions"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso EverBag (Silicone Zip)",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso EverBag (Silicone Zip)?",
        "answer": "Toreso EverBag (Silicone Zip) is a Toreso flexible pack made for platinum-silicone reusable storage bag with pinch-lock seal; microwave/freezer/oven-safe."
      },
      {
        "question": "Who should use Toreso EverBag (Silicone Zip)?",
        "answer": "Toreso EverBag (Silicone Zip) is designed for reusable-storage buyers, lunch packers, fridge organizers, and low-waste households."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "leak-proof, dishwasher-safe."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-05"
    ]
  },
  {
    "id": "everbag-stand-up",
    "catalogNumber": 42,
    "slug": "everbag-stand-up",
    "name": "EverBag Stand-Up",
    "track": "Reusable Silicone Solutions",
    "categorySlug": "reusable-silicone-solutions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Flat-bottom stand-up silicone bag for meal prep/popcorn.",
    "b2cInnovation": "Flat-bottom stand-up silicone bag for meal prep/popcorn.",
    "format": "Flexible pack",
    "signal": "Stasher (acquired by SC Johnson, owner of Ziploc, in 2019) states one bag replaces up to 260 single-use bags/year; its snack bag holds a 4.9-star rating across 2,000+ reviews. Silicone is the fastest-growing reusable-wrap material per Maximize Market Research.",
    "aisle": "Reusable Silicone Solutions",
    "audience": "reusable-storage buyers, lunch packers, fridge organizers, and low-waste households",
    "priceRange": "mid.",
    "launchPriority": "Signature launch",
    "heroLine": "EverBag Stand-Up is a flexible pack for flat-bottom stand-up silicone bag for meal prep/popcorn.",
    "demandSignal": "Stasher (acquired by SC Johnson, owner of Ziploc, in 2019) states one bag replaces up to 260 single-use bags/year; its snack bag holds a 4.9-star rating across 2,000+ reviews. Silicone is the fastest-growing reusable-wrap material per Maximize Market Research.",
    "origin": "Global packaging retail",
    "benefits": [
      "Flat-bottom stand-up silicone bag for meal prep/popcorn.",
      "Flat-bottom stand-up silicone bag for meal prep/popcorn.",
      "Built for the reusable silicone solutions aisle.",
      "Consumer-sized format for reusable-storage buyers, lunch packers, fridge organizers, and low-waste households."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-042"
      },
      {
        "label": "Aisle",
        "value": "Reusable Silicone Solutions"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "EverBag Stand-Up",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is EverBag Stand-Up?",
        "answer": "EverBag Stand-Up is a Toreso flexible pack made for flat-bottom stand-up silicone bag for meal prep/popcorn."
      },
      {
        "question": "Who should use EverBag Stand-Up?",
        "answer": "EverBag Stand-Up is designed for reusable-storage buyers, lunch packers, fridge organizers, and low-waste households."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Flat-bottom stand-up silicone bag for meal prep/popcorn."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-05"
    ]
  },
  {
    "id": "everlid-stretch-set",
    "catalogNumber": 43,
    "slug": "everlid-stretch-set",
    "name": "EverLid Stretch Set",
    "track": "Reusable Silicone Solutions",
    "categorySlug": "reusable-silicone-solutions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Stretchable silicone lids that seal any bowl/can/cut fruit.",
    "b2cInnovation": "Stretchable silicone lids that seal any bowl/can/cut fruit.",
    "format": "Starter kit",
    "signal": "Stasher (acquired by SC Johnson, owner of Ziploc, in 2019) states one bag replaces up to 260 single-use bags/year; its snack bag holds a 4.9-star rating across 2,000+ reviews. Silicone is the fastest-growing reusable-wrap material per Maximize Market Research.",
    "aisle": "Reusable Silicone Solutions",
    "audience": "reusable-storage buyers, lunch packers, fridge organizers, and low-waste households",
    "priceRange": "impulse-mid.",
    "launchPriority": "Signature launch",
    "heroLine": "EverLid Stretch Set is a starter kit for stretchable silicone lids that seal any bowl/can/cut fruit.",
    "demandSignal": "Stasher \"Stretch Lids\" / viral.",
    "origin": "Global packaging retail",
    "benefits": [
      "Stretchable silicone lids that seal any bowl/can/cut fruit.",
      "Stretchable silicone lids that seal any bowl/can/cut fruit.",
      "Demand signal: Stasher \"Stretch Lids\" / viral.",
      "Consumer-sized format for reusable-storage buyers, lunch packers, fridge organizers, and low-waste households."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-043"
      },
      {
        "label": "Aisle",
        "value": "Reusable Silicone Solutions"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "EverLid Stretch Set",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is EverLid Stretch Set?",
        "answer": "EverLid Stretch Set is a Toreso starter kit made for stretchable silicone lids that seal any bowl/can/cut fruit."
      },
      {
        "question": "Who should use EverLid Stretch Set?",
        "answer": "EverLid Stretch Set is designed for reusable-storage buyers, lunch packers, fridge organizers, and low-waste households."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Stretchable silicone lids that seal any bowl/can/cut fruit."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-05"
    ]
  },
  {
    "id": "evercup-covers",
    "catalogNumber": 44,
    "slug": "evercup-covers",
    "name": "EverCup Covers",
    "track": "Reusable Silicone Solutions",
    "categorySlug": "reusable-silicone-solutions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Silicone cup/mug lids.",
    "b2cInnovation": "Silicone cup/mug lids.",
    "format": "Reusable Silicone Solutions product",
    "signal": "Stasher (acquired by SC Johnson, owner of Ziploc, in 2019) states one bag replaces up to 260 single-use bags/year; its snack bag holds a 4.9-star rating across 2,000+ reviews. Silicone is the fastest-growing reusable-wrap material per Maximize Market Research.",
    "aisle": "Reusable Silicone Solutions",
    "audience": "reusable-storage buyers, lunch packers, fridge organizers, and low-waste households",
    "priceRange": "impulse.",
    "launchPriority": "Signature launch",
    "heroLine": "EverCup Covers is a reusable silicone solutions product for silicone cup/mug lids.",
    "demandSignal": "Stasher (acquired by SC Johnson, owner of Ziploc, in 2019) states one bag replaces up to 260 single-use bags/year; its snack bag holds a 4.9-star rating across 2,000+ reviews. Silicone is the fastest-growing reusable-wrap material per Maximize Market Research.",
    "origin": "Global packaging retail",
    "benefits": [
      "Silicone cup/mug lids.",
      "Silicone cup/mug lids.",
      "Built for the reusable silicone solutions aisle.",
      "Consumer-sized format for reusable-storage buyers, lunch packers, fridge organizers, and low-waste households."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-044"
      },
      {
        "label": "Aisle",
        "value": "Reusable Silicone Solutions"
      },
      {
        "label": "Format",
        "value": "Reusable Silicone Solutions product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "EverCup Covers",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is EverCup Covers?",
        "answer": "EverCup Covers is a Toreso reusable silicone solutions product made for silicone cup/mug lids."
      },
      {
        "question": "Who should use EverCup Covers?",
        "answer": "EverCup Covers is designed for reusable-storage buyers, lunch packers, fridge organizers, and low-waste households."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Silicone cup/mug lids."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-05"
    ]
  },
  {
    "id": "toreso-silicone-food-huggers",
    "catalogNumber": 45,
    "slug": "toreso-silicone-food-huggers",
    "name": "Toreso Silicone Food Huggers",
    "track": "Reusable Silicone Solutions",
    "categorySlug": "reusable-silicone-solutions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Nesting silicone caps for half-onions, lemons, avocados.",
    "b2cInnovation": "Nesting silicone caps for half-onions, lemons, avocados.",
    "format": "Reusable Silicone Solutions product",
    "signal": "Stasher (acquired by SC Johnson, owner of Ziploc, in 2019) states one bag replaces up to 260 single-use bags/year; its snack bag holds a 4.9-star rating across 2,000+ reviews. Silicone is the fastest-growing reusable-wrap material per Maximize Market Research.",
    "aisle": "Reusable Silicone Solutions",
    "audience": "reusable-storage buyers, lunch packers, fridge organizers, and low-waste households",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Silicone Food Huggers is a reusable silicone solutions product for nesting silicone caps for half-onions, lemons, avocados.",
    "demandSignal": "\"Food Huggers\" Amazon staple.",
    "origin": "Global packaging retail",
    "benefits": [
      "Nesting silicone caps for half-onions, lemons, avocados.",
      "Nesting silicone caps for half-onions, lemons, avocados.",
      "Demand signal: \"Food Huggers\" Amazon staple.",
      "Consumer-sized format for reusable-storage buyers, lunch packers, fridge organizers, and low-waste households."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-045"
      },
      {
        "label": "Aisle",
        "value": "Reusable Silicone Solutions"
      },
      {
        "label": "Format",
        "value": "Reusable Silicone Solutions product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Silicone Food Huggers",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Silicone Food Huggers?",
        "answer": "Toreso Silicone Food Huggers is a Toreso reusable silicone solutions product made for nesting silicone caps for half-onions, lemons, avocados."
      },
      {
        "question": "Who should use Toreso Silicone Food Huggers?",
        "answer": "Toreso Silicone Food Huggers is designed for reusable-storage buyers, lunch packers, fridge organizers, and low-waste households."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Nesting silicone caps for half-onions, lemons, avocados."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-05"
    ]
  },
  {
    "id": "everbag-snack-pockets",
    "catalogNumber": 46,
    "slug": "everbag-snack-pockets",
    "name": "EverBag Snack Pockets",
    "track": "Reusable Silicone Solutions",
    "categorySlug": "reusable-silicone-solutions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Small silicone pouches for kids' snacks.",
    "b2cInnovation": "Small silicone pouches for kids' snacks.",
    "format": "Flexible pack",
    "signal": "Stasher (acquired by SC Johnson, owner of Ziploc, in 2019) states one bag replaces up to 260 single-use bags/year; its snack bag holds a 4.9-star rating across 2,000+ reviews. Silicone is the fastest-growing reusable-wrap material per Maximize Market Research.",
    "aisle": "Reusable Silicone Solutions",
    "audience": "reusable-storage buyers, lunch packers, fridge organizers, and low-waste households",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "EverBag Snack Pockets is a flexible pack for small silicone pouches for kids' snacks.",
    "demandSignal": "Stasher (acquired by SC Johnson, owner of Ziploc, in 2019) states one bag replaces up to 260 single-use bags/year; its snack bag holds a 4.9-star rating across 2,000+ reviews. Silicone is the fastest-growing reusable-wrap material per Maximize Market Research.",
    "origin": "Global packaging retail",
    "benefits": [
      "Small silicone pouches for kids' snacks.",
      "Small silicone pouches for kids' snacks.",
      "Built for the reusable silicone solutions aisle.",
      "Consumer-sized format for reusable-storage buyers, lunch packers, fridge organizers, and low-waste households."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-046"
      },
      {
        "label": "Aisle",
        "value": "Reusable Silicone Solutions"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "EverBag Snack Pockets",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is EverBag Snack Pockets?",
        "answer": "EverBag Snack Pockets is a Toreso flexible pack made for small silicone pouches for kids' snacks."
      },
      {
        "question": "Who should use EverBag Snack Pockets?",
        "answer": "EverBag Snack Pockets is designed for reusable-storage buyers, lunch packers, fridge organizers, and low-waste households."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Small silicone pouches for kids' snacks."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-05"
    ]
  },
  {
    "id": "silicone-bread-produce-bag",
    "catalogNumber": 47,
    "slug": "silicone-bread-produce-bag",
    "name": "Silicone Bread/Produce Bag",
    "track": "Reusable Silicone Solutions",
    "categorySlug": "reusable-silicone-solutions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Reusable breathable silicone bag for bread/veg.",
    "b2cInnovation": "Reusable breathable silicone bag for bread/veg.",
    "format": "Flexible pack",
    "signal": "Stasher (acquired by SC Johnson, owner of Ziploc, in 2019) states one bag replaces up to 260 single-use bags/year; its snack bag holds a 4.9-star rating across 2,000+ reviews. Silicone is the fastest-growing reusable-wrap material per Maximize Market Research.",
    "aisle": "Reusable Silicone Solutions",
    "audience": "reusable-storage buyers, lunch packers, fridge organizers, and low-waste households",
    "priceRange": "mid.",
    "launchPriority": "Future drop",
    "heroLine": "Silicone Bread/Produce Bag is a flexible pack for reusable breathable silicone bag for bread/veg.",
    "demandSignal": "Stasher (acquired by SC Johnson, owner of Ziploc, in 2019) states one bag replaces up to 260 single-use bags/year; its snack bag holds a 4.9-star rating across 2,000+ reviews. Silicone is the fastest-growing reusable-wrap material per Maximize Market Research.",
    "origin": "Global packaging retail",
    "benefits": [
      "Reusable breathable silicone bag for bread/veg.",
      "Reusable breathable silicone bag for bread/veg.",
      "Built for the reusable silicone solutions aisle.",
      "Consumer-sized format for reusable-storage buyers, lunch packers, fridge organizers, and low-waste households."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-047"
      },
      {
        "label": "Aisle",
        "value": "Reusable Silicone Solutions"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Silicone Bread/Produce Bag",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Silicone Bread/Produce Bag?",
        "answer": "Silicone Bread/Produce Bag is a Toreso flexible pack made for reusable breathable silicone bag for bread/veg."
      },
      {
        "question": "Who should use Silicone Bread/Produce Bag?",
        "answer": "Silicone Bread/Produce Bag is designed for reusable-storage buyers, lunch packers, fridge organizers, and low-waste households."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Reusable breathable silicone bag for bread/veg."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-05"
    ]
  },
  {
    "id": "everroll-mat",
    "catalogNumber": 48,
    "slug": "everroll-mat",
    "name": "EverRoll Mat",
    "track": "Reusable Silicone Solutions",
    "categorySlug": "reusable-silicone-solutions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Silicone roll-up mat for wrapping leftovers.",
    "b2cInnovation": "Silicone roll-up mat for wrapping leftovers.",
    "format": "Reusable Silicone Solutions product",
    "signal": "Stasher (acquired by SC Johnson, owner of Ziploc, in 2019) states one bag replaces up to 260 single-use bags/year; its snack bag holds a 4.9-star rating across 2,000+ reviews. Silicone is the fastest-growing reusable-wrap material per Maximize Market Research.",
    "aisle": "Reusable Silicone Solutions",
    "audience": "reusable-storage buyers, lunch packers, fridge organizers, and low-waste households",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "EverRoll Mat is a reusable silicone solutions product for silicone roll-up mat for wrapping leftovers.",
    "demandSignal": "Stasher (acquired by SC Johnson, owner of Ziploc, in 2019) states one bag replaces up to 260 single-use bags/year; its snack bag holds a 4.9-star rating across 2,000+ reviews. Silicone is the fastest-growing reusable-wrap material per Maximize Market Research.",
    "origin": "Global packaging retail",
    "benefits": [
      "Silicone roll-up mat for wrapping leftovers.",
      "Silicone roll-up mat for wrapping leftovers.",
      "Built for the reusable silicone solutions aisle.",
      "Consumer-sized format for reusable-storage buyers, lunch packers, fridge organizers, and low-waste households."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-048"
      },
      {
        "label": "Aisle",
        "value": "Reusable Silicone Solutions"
      },
      {
        "label": "Format",
        "value": "Reusable Silicone Solutions product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "EverRoll Mat",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is EverRoll Mat?",
        "answer": "EverRoll Mat is a Toreso reusable silicone solutions product made for silicone roll-up mat for wrapping leftovers."
      },
      {
        "question": "Who should use EverRoll Mat?",
        "answer": "EverRoll Mat is designed for reusable-storage buyers, lunch packers, fridge organizers, and low-waste households."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Silicone roll-up mat for wrapping leftovers."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-05"
    ]
  },
  {
    "id": "collapsible-silicone-containers",
    "catalogNumber": 49,
    "slug": "collapsible-silicone-containers",
    "name": "Collapsible Silicone Containers",
    "track": "Reusable Silicone Solutions",
    "categorySlug": "reusable-silicone-solutions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Expandable silicone tubs with airtight lids.",
    "b2cInnovation": "Expandable silicone tubs with airtight lids.",
    "format": "Rigid storage",
    "signal": "Stasher (acquired by SC Johnson, owner of Ziploc, in 2019) states one bag replaces up to 260 single-use bags/year; its snack bag holds a 4.9-star rating across 2,000+ reviews. Silicone is the fastest-growing reusable-wrap material per Maximize Market Research.",
    "aisle": "Reusable Silicone Solutions",
    "audience": "reusable-storage buyers, lunch packers, fridge organizers, and low-waste households",
    "priceRange": "mid.",
    "launchPriority": "Future drop",
    "heroLine": "Collapsible Silicone Containers is a rigid storage for expandable silicone tubs with airtight lids.",
    "demandSignal": "travel/space-saving viral.",
    "origin": "Global packaging retail",
    "benefits": [
      "Expandable silicone tubs with airtight lids.",
      "Expandable silicone tubs with airtight lids.",
      "Demand signal: travel/space-saving viral.",
      "Consumer-sized format for reusable-storage buyers, lunch packers, fridge organizers, and low-waste households."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-049"
      },
      {
        "label": "Aisle",
        "value": "Reusable Silicone Solutions"
      },
      {
        "label": "Format",
        "value": "Rigid storage"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Collapsible Silicone Containers",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Collapsible Silicone Containers?",
        "answer": "Collapsible Silicone Containers is a Toreso rigid storage made for expandable silicone tubs with airtight lids."
      },
      {
        "question": "Who should use Collapsible Silicone Containers?",
        "answer": "Collapsible Silicone Containers is designed for reusable-storage buyers, lunch packers, fridge organizers, and low-waste households."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Expandable silicone tubs with airtight lids."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-05"
    ]
  },
  {
    "id": "everstraw-pouch",
    "catalogNumber": 50,
    "slug": "everstraw-pouch",
    "name": "EverStraw + Pouch",
    "track": "Reusable Silicone Solutions",
    "categorySlug": "reusable-silicone-solutions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Reusable silicone straw set in a sealable case.",
    "b2cInnovation": "Reusable silicone straw set in a sealable case.",
    "format": "Flexible pack",
    "signal": "Stasher (acquired by SC Johnson, owner of Ziploc, in 2019) states one bag replaces up to 260 single-use bags/year; its snack bag holds a 4.9-star rating across 2,000+ reviews. Silicone is the fastest-growing reusable-wrap material per Maximize Market Research.",
    "aisle": "Reusable Silicone Solutions",
    "audience": "reusable-storage buyers, lunch packers, fridge organizers, and low-waste households",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "EverStraw + Pouch is a flexible pack for reusable silicone straw set in a sealable case.",
    "demandSignal": "Stasher (acquired by SC Johnson, owner of Ziploc, in 2019) states one bag replaces up to 260 single-use bags/year; its snack bag holds a 4.9-star rating across 2,000+ reviews. Silicone is the fastest-growing reusable-wrap material per Maximize Market Research.",
    "origin": "Global packaging retail",
    "benefits": [
      "Reusable silicone straw set in a sealable case.",
      "Reusable silicone straw set in a sealable case.",
      "Built for the reusable silicone solutions aisle.",
      "Consumer-sized format for reusable-storage buyers, lunch packers, fridge organizers, and low-waste households."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-050"
      },
      {
        "label": "Aisle",
        "value": "Reusable Silicone Solutions"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "EverStraw + Pouch",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is EverStraw + Pouch?",
        "answer": "EverStraw + Pouch is a Toreso flexible pack made for reusable silicone straw set in a sealable case."
      },
      {
        "question": "Who should use EverStraw + Pouch?",
        "answer": "EverStraw + Pouch is designed for reusable-storage buyers, lunch packers, fridge organizers, and low-waste households."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Reusable silicone straw set in a sealable case."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-05"
    ]
  },
  {
    "id": "toreso-beehug-wraps-3-pack",
    "catalogNumber": 51,
    "slug": "toreso-beehug-wraps-3-pack",
    "name": "Toreso BeeHug Wraps (3-pack)",
    "track": "Reusable & Eco Wraps (Beeswax / Fabric)",
    "categorySlug": "reusable-and-eco-wraps-beeswax-fabric",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Cotton + beeswax + jojoba + tree-resin moldable wraps.",
    "b2cInnovation": "warmth-of-hand seal; compostable at end of life.",
    "format": "Starter kit",
    "signal": "per FactMR, the global reusable food-wrap market was ~USD 595.9M in 2024, forecast to ~USD 1.32B by 2034 (8.3% CAGR); per ShelfTrend, beeswax bread bags for sourdough are the hottest sub-format, with one Goldilocks Goods bread-bag video pulling 95K+ likes.",
    "aisle": "Reusable & Eco Wraps (Beeswax / Fabric)",
    "audience": "low-waste kitchens, bread buyers, tiffin users, grocery shoppers, and gifting households",
    "priceRange": "mid.",
    "launchPriority": "Premium daily",
    "heroLine": "Toreso BeeHug Wraps (3-pack) is a starter kit for cotton + beeswax + jojoba + tree-resin moldable wraps.",
    "demandSignal": "Bee's Wrap category (nationwide Target deal May 2025).",
    "origin": "Global packaging retail",
    "benefits": [
      "Cotton + beeswax + jojoba + tree-resin moldable wraps.",
      "warmth-of-hand seal; compostable at end of life.",
      "Demand signal: Bee's Wrap category (nationwide Target deal May 2025).",
      "Consumer-sized format for low-waste kitchens, bread buyers, tiffin users, grocery shoppers, and gifting households."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-051"
      },
      {
        "label": "Aisle",
        "value": "Reusable & Eco Wraps (Beeswax / Fabric)"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso BeeHug Wraps (3-pack)",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso BeeHug Wraps (3-pack)?",
        "answer": "Toreso BeeHug Wraps (3-pack) is a Toreso starter kit made for cotton + beeswax + jojoba + tree-resin moldable wraps."
      },
      {
        "question": "Who should use Toreso BeeHug Wraps (3-pack)?",
        "answer": "Toreso BeeHug Wraps (3-pack) is designed for low-waste kitchens, bread buyers, tiffin users, grocery shoppers, and gifting households."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "warmth-of-hand seal; compostable at end of life."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-06"
    ]
  },
  {
    "id": "beehug-bread-bag",
    "catalogNumber": 52,
    "slug": "beehug-bread-bag",
    "name": "BeeHug Bread Bag",
    "track": "Reusable & Eco Wraps (Beeswax / Fabric)",
    "categorySlug": "reusable-and-eco-wraps-beeswax-fabric",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Beeswax bread bag for sourdough/roti.",
    "b2cInnovation": "Beeswax bread bag for sourdough/roti.",
    "format": "Flexible pack",
    "signal": "per FactMR, the global reusable food-wrap market was ~USD 595.9M in 2024, forecast to ~USD 1.32B by 2034 (8.3% CAGR); per ShelfTrend, beeswax bread bags for sourdough are the hottest sub-format, with one Goldilocks Goods bread-bag video pulling 95K+ likes.",
    "aisle": "Reusable & Eco Wraps (Beeswax / Fabric)",
    "audience": "low-waste kitchens, bread buyers, tiffin users, grocery shoppers, and gifting households",
    "priceRange": "mid.",
    "launchPriority": "Premium daily",
    "heroLine": "BeeHug Bread Bag is a flexible pack for beeswax bread bag for sourdough/roti.",
    "demandSignal": "highest-AOV beeswax sub-segment ($25–$45 per ShelfTrend).",
    "origin": "Global packaging retail",
    "benefits": [
      "Beeswax bread bag for sourdough/roti.",
      "Beeswax bread bag for sourdough/roti.",
      "Demand signal: highest-AOV beeswax sub-segment ($25–$45 per ShelfTrend).",
      "Consumer-sized format for low-waste kitchens, bread buyers, tiffin users, grocery shoppers, and gifting households."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-052"
      },
      {
        "label": "Aisle",
        "value": "Reusable & Eco Wraps (Beeswax / Fabric)"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "BeeHug Bread Bag",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is BeeHug Bread Bag?",
        "answer": "BeeHug Bread Bag is a Toreso flexible pack made for beeswax bread bag for sourdough/roti."
      },
      {
        "question": "Who should use BeeHug Bread Bag?",
        "answer": "BeeHug Bread Bag is designed for low-waste kitchens, bread buyers, tiffin users, grocery shoppers, and gifting households."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Beeswax bread bag for sourdough/roti."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-06"
    ]
  },
  {
    "id": "beehug-roll",
    "catalogNumber": 53,
    "slug": "beehug-roll",
    "name": "BeeHug Roll",
    "track": "Reusable & Eco Wraps (Beeswax / Fabric)",
    "categorySlug": "reusable-and-eco-wraps-beeswax-fabric",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Cut-to-size beeswax wrap roll.",
    "b2cInnovation": "Cut-to-size beeswax wrap roll.",
    "format": "Reusable product",
    "signal": "per FactMR, the global reusable food-wrap market was ~USD 595.9M in 2024, forecast to ~USD 1.32B by 2034 (8.3% CAGR); per ShelfTrend, beeswax bread bags for sourdough are the hottest sub-format, with one Goldilocks Goods bread-bag video pulling 95K+ likes.",
    "aisle": "Reusable & Eco Wraps (Beeswax / Fabric)",
    "audience": "low-waste kitchens, bread buyers, tiffin users, grocery shoppers, and gifting households",
    "priceRange": "mid.",
    "launchPriority": "Premium daily",
    "heroLine": "BeeHug Roll is a reusable product for cut-to-size beeswax wrap roll.",
    "demandSignal": "per FactMR, the global reusable food-wrap market was ~USD 595.9M in 2024, forecast to ~USD 1.32B by 2034 (8.3% CAGR); per ShelfTrend, beeswax bread bags for sourdough are the hottest sub-format, with one Goldilocks Goods bread-bag video pulling 95K+ likes.",
    "origin": "Global packaging retail",
    "benefits": [
      "Cut-to-size beeswax wrap roll.",
      "Cut-to-size beeswax wrap roll.",
      "Built for the reusable & eco wraps (beeswax / fabric) aisle.",
      "Consumer-sized format for low-waste kitchens, bread buyers, tiffin users, grocery shoppers, and gifting households."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-053"
      },
      {
        "label": "Aisle",
        "value": "Reusable & Eco Wraps (Beeswax / Fabric)"
      },
      {
        "label": "Format",
        "value": "Reusable product"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "BeeHug Roll",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is BeeHug Roll?",
        "answer": "BeeHug Roll is a Toreso reusable product made for cut-to-size beeswax wrap roll."
      },
      {
        "question": "Who should use BeeHug Roll?",
        "answer": "BeeHug Roll is designed for low-waste kitchens, bread buyers, tiffin users, grocery shoppers, and gifting households."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Cut-to-size beeswax wrap roll."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-06"
    ]
  },
  {
    "id": "beehug-diy-kit",
    "catalogNumber": 54,
    "slug": "beehug-diy-kit",
    "name": "BeeHug DIY Kit",
    "track": "Reusable & Eco Wraps (Beeswax / Fabric)",
    "categorySlug": "reusable-and-eco-wraps-beeswax-fabric",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Make-your-own beeswax wrap kit (fabric + wax pellets).",
    "b2cInnovation": "Make-your-own beeswax wrap kit (fabric + wax pellets).",
    "format": "Starter kit",
    "signal": "per FactMR, the global reusable food-wrap market was ~USD 595.9M in 2024, forecast to ~USD 1.32B by 2034 (8.3% CAGR); per ShelfTrend, beeswax bread bags for sourdough are the hottest sub-format, with one Goldilocks Goods bread-bag video pulling 95K+ likes.",
    "aisle": "Reusable & Eco Wraps (Beeswax / Fabric)",
    "audience": "low-waste kitchens, bread buyers, tiffin users, grocery shoppers, and gifting households",
    "priceRange": "mid.",
    "launchPriority": "Premium daily",
    "heroLine": "BeeHug DIY Kit is a starter kit for make-your-own beeswax wrap kit (fabric + wax pellets).",
    "demandSignal": "DIY/eco craft trend.",
    "origin": "Global packaging retail",
    "benefits": [
      "Make-your-own beeswax wrap kit (fabric + wax pellets).",
      "Make-your-own beeswax wrap kit (fabric + wax pellets).",
      "Demand signal: DIY/eco craft trend.",
      "Consumer-sized format for low-waste kitchens, bread buyers, tiffin users, grocery shoppers, and gifting households."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-054"
      },
      {
        "label": "Aisle",
        "value": "Reusable & Eco Wraps (Beeswax / Fabric)"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "BeeHug DIY Kit",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is BeeHug DIY Kit?",
        "answer": "BeeHug DIY Kit is a Toreso starter kit made for make-your-own beeswax wrap kit (fabric + wax pellets)."
      },
      {
        "question": "Who should use BeeHug DIY Kit?",
        "answer": "BeeHug DIY Kit is designed for low-waste kitchens, bread buyers, tiffin users, grocery shoppers, and gifting households."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Make-your-own beeswax wrap kit (fabric + wax pellets)."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-06"
    ]
  },
  {
    "id": "toreso-fabric-bowl-covers",
    "catalogNumber": 55,
    "slug": "toreso-fabric-bowl-covers",
    "name": "Toreso Fabric Bowl Covers",
    "track": "Reusable & Eco Wraps (Beeswax / Fabric)",
    "categorySlug": "reusable-and-eco-wraps-beeswax-fabric",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Elastic-edge cloth covers in fun prints.",
    "b2cInnovation": "Elastic-edge cloth covers in fun prints.",
    "format": "Reusable product",
    "signal": "per FactMR, the global reusable food-wrap market was ~USD 595.9M in 2024, forecast to ~USD 1.32B by 2034 (8.3% CAGR); per ShelfTrend, beeswax bread bags for sourdough are the hottest sub-format, with one Goldilocks Goods bread-bag video pulling 95K+ likes.",
    "aisle": "Reusable & Eco Wraps (Beeswax / Fabric)",
    "audience": "low-waste kitchens, bread buyers, tiffin users, grocery shoppers, and gifting households",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Fabric Bowl Covers is a reusable product for elastic-edge cloth covers in fun prints.",
    "demandSignal": "Flying Tiger fruit-motif aesthetic.",
    "origin": "Denmark-inspired.",
    "benefits": [
      "Elastic-edge cloth covers in fun prints.",
      "Elastic-edge cloth covers in fun prints.",
      "Demand signal: Flying Tiger fruit-motif aesthetic.",
      "Consumer-sized format for low-waste kitchens, bread buyers, tiffin users, grocery shoppers, and gifting households."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-055"
      },
      {
        "label": "Aisle",
        "value": "Reusable & Eco Wraps (Beeswax / Fabric)"
      },
      {
        "label": "Format",
        "value": "Reusable product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Denmark-inspired."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Fabric Bowl Covers",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Fabric Bowl Covers?",
        "answer": "Toreso Fabric Bowl Covers is a Toreso reusable product made for elastic-edge cloth covers in fun prints."
      },
      {
        "question": "Who should use Toreso Fabric Bowl Covers?",
        "answer": "Toreso Fabric Bowl Covers is designed for low-waste kitchens, bread buyers, tiffin users, grocery shoppers, and gifting households."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Elastic-edge cloth covers in fun prints."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-06"
    ]
  },
  {
    "id": "vegan-wax-wraps",
    "catalogNumber": 56,
    "slug": "vegan-wax-wraps",
    "name": "Vegan Wax Wraps",
    "track": "Reusable & Eco Wraps (Beeswax / Fabric)",
    "categorySlug": "reusable-and-eco-wraps-beeswax-fabric",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Plant-wax (candelilla) wraps for vegan buyers.",
    "b2cInnovation": "Plant-wax (candelilla) wraps for vegan buyers.",
    "format": "Flexible pack",
    "signal": "per FactMR, the global reusable food-wrap market was ~USD 595.9M in 2024, forecast to ~USD 1.32B by 2034 (8.3% CAGR); per ShelfTrend, beeswax bread bags for sourdough are the hottest sub-format, with one Goldilocks Goods bread-bag video pulling 95K+ likes.",
    "aisle": "Reusable & Eco Wraps (Beeswax / Fabric)",
    "audience": "low-waste kitchens, bread buyers, tiffin users, grocery shoppers, and gifting households",
    "priceRange": "mid.",
    "launchPriority": "Future drop",
    "heroLine": "Vegan Wax Wraps is a flexible pack for plant-wax (candelilla) wraps for vegan buyers.",
    "demandSignal": "per FactMR, the global reusable food-wrap market was ~USD 595.9M in 2024, forecast to ~USD 1.32B by 2034 (8.3% CAGR); per ShelfTrend, beeswax bread bags for sourdough are the hottest sub-format, with one Goldilocks Goods bread-bag video pulling 95K+ likes.",
    "origin": "Global packaging retail",
    "benefits": [
      "Plant-wax (candelilla) wraps for vegan buyers.",
      "Plant-wax (candelilla) wraps for vegan buyers.",
      "Built for the reusable & eco wraps (beeswax / fabric) aisle.",
      "Consumer-sized format for low-waste kitchens, bread buyers, tiffin users, grocery shoppers, and gifting households."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-056"
      },
      {
        "label": "Aisle",
        "value": "Reusable & Eco Wraps (Beeswax / Fabric)"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Vegan Wax Wraps",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Vegan Wax Wraps?",
        "answer": "Vegan Wax Wraps is a Toreso flexible pack made for plant-wax (candelilla) wraps for vegan buyers."
      },
      {
        "question": "Who should use Vegan Wax Wraps?",
        "answer": "Vegan Wax Wraps is designed for low-waste kitchens, bread buyers, tiffin users, grocery shoppers, and gifting households."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Plant-wax (candelilla) wraps for vegan buyers."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-06"
    ]
  },
  {
    "id": "beehug-sandwich-pouch",
    "catalogNumber": 57,
    "slug": "beehug-sandwich-pouch",
    "name": "BeeHug Sandwich Pouch",
    "track": "Reusable & Eco Wraps (Beeswax / Fabric)",
    "categorySlug": "reusable-and-eco-wraps-beeswax-fabric",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Foldable wax-wrap sandwich envelope.",
    "b2cInnovation": "Foldable wax-wrap sandwich envelope.",
    "format": "Flexible pack",
    "signal": "per FactMR, the global reusable food-wrap market was ~USD 595.9M in 2024, forecast to ~USD 1.32B by 2034 (8.3% CAGR); per ShelfTrend, beeswax bread bags for sourdough are the hottest sub-format, with one Goldilocks Goods bread-bag video pulling 95K+ likes.",
    "aisle": "Reusable & Eco Wraps (Beeswax / Fabric)",
    "audience": "low-waste kitchens, bread buyers, tiffin users, grocery shoppers, and gifting households",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "BeeHug Sandwich Pouch is a flexible pack for foldable wax-wrap sandwich envelope.",
    "demandSignal": "per FactMR, the global reusable food-wrap market was ~USD 595.9M in 2024, forecast to ~USD 1.32B by 2034 (8.3% CAGR); per ShelfTrend, beeswax bread bags for sourdough are the hottest sub-format, with one Goldilocks Goods bread-bag video pulling 95K+ likes.",
    "origin": "Global packaging retail",
    "benefits": [
      "Foldable wax-wrap sandwich envelope.",
      "Foldable wax-wrap sandwich envelope.",
      "Built for the reusable & eco wraps (beeswax / fabric) aisle.",
      "Consumer-sized format for low-waste kitchens, bread buyers, tiffin users, grocery shoppers, and gifting households."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-057"
      },
      {
        "label": "Aisle",
        "value": "Reusable & Eco Wraps (Beeswax / Fabric)"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "BeeHug Sandwich Pouch",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is BeeHug Sandwich Pouch?",
        "answer": "BeeHug Sandwich Pouch is a Toreso flexible pack made for foldable wax-wrap sandwich envelope."
      },
      {
        "question": "Who should use BeeHug Sandwich Pouch?",
        "answer": "BeeHug Sandwich Pouch is designed for low-waste kitchens, bread buyers, tiffin users, grocery shoppers, and gifting households."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Foldable wax-wrap sandwich envelope."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-06"
    ]
  },
  {
    "id": "mesh-produce-bags-set",
    "catalogNumber": 58,
    "slug": "mesh-produce-bags-set",
    "name": "Mesh Produce Bags (set)",
    "track": "Reusable & Eco Wraps (Beeswax / Fabric)",
    "categorySlug": "reusable-and-eco-wraps-beeswax-fabric",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Reusable drawstring mesh bags for grocery produce.",
    "b2cInnovation": "Reusable drawstring mesh bags for grocery produce.",
    "format": "Starter kit",
    "signal": "per FactMR, the global reusable food-wrap market was ~USD 595.9M in 2024, forecast to ~USD 1.32B by 2034 (8.3% CAGR); per ShelfTrend, beeswax bread bags for sourdough are the hottest sub-format, with one Goldilocks Goods bread-bag video pulling 95K+ likes.",
    "aisle": "Reusable & Eco Wraps (Beeswax / Fabric)",
    "audience": "low-waste kitchens, bread buyers, tiffin users, grocery shoppers, and gifting households",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Mesh Produce Bags (set) is a starter kit for reusable drawstring mesh bags for grocery produce.",
    "demandSignal": "zero-waste staple.",
    "origin": "Global packaging retail",
    "benefits": [
      "Reusable drawstring mesh bags for grocery produce.",
      "Reusable drawstring mesh bags for grocery produce.",
      "Demand signal: zero-waste staple.",
      "Consumer-sized format for low-waste kitchens, bread buyers, tiffin users, grocery shoppers, and gifting households."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-058"
      },
      {
        "label": "Aisle",
        "value": "Reusable & Eco Wraps (Beeswax / Fabric)"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Mesh Produce Bags (set)",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Mesh Produce Bags (set)?",
        "answer": "Mesh Produce Bags (set) is a Toreso starter kit made for reusable drawstring mesh bags for grocery produce."
      },
      {
        "question": "Who should use Mesh Produce Bags (set)?",
        "answer": "Mesh Produce Bags (set) is designed for low-waste kitchens, bread buyers, tiffin users, grocery shoppers, and gifting households."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Reusable drawstring mesh bags for grocery produce."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-06"
    ]
  },
  {
    "id": "cotton-bulk-bags",
    "catalogNumber": 59,
    "slug": "cotton-bulk-bags",
    "name": "Cotton Bulk Bags",
    "track": "Reusable & Eco Wraps (Beeswax / Fabric)",
    "categorySlug": "reusable-and-eco-wraps-beeswax-fabric",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Reusable cloth bags for grains/lentils with tare label.",
    "b2cInnovation": "Reusable cloth bags for grains/lentils with tare label.",
    "format": "Flexible pack",
    "signal": "per FactMR, the global reusable food-wrap market was ~USD 595.9M in 2024, forecast to ~USD 1.32B by 2034 (8.3% CAGR); per ShelfTrend, beeswax bread bags for sourdough are the hottest sub-format, with one Goldilocks Goods bread-bag video pulling 95K+ likes.",
    "aisle": "Reusable & Eco Wraps (Beeswax / Fabric)",
    "audience": "low-waste kitchens, bread buyers, tiffin users, grocery shoppers, and gifting households",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Cotton Bulk Bags is a flexible pack for reusable cloth bags for grains/lentils with tare label.",
    "demandSignal": "per FactMR, the global reusable food-wrap market was ~USD 595.9M in 2024, forecast to ~USD 1.32B by 2034 (8.3% CAGR); per ShelfTrend, beeswax bread bags for sourdough are the hottest sub-format, with one Goldilocks Goods bread-bag video pulling 95K+ likes.",
    "origin": "India-relevant (bulk dals).",
    "benefits": [
      "Reusable cloth bags for grains/lentils with tare label.",
      "Reusable cloth bags for grains/lentils with tare label.",
      "Built for the reusable & eco wraps (beeswax / fabric) aisle.",
      "Consumer-sized format for low-waste kitchens, bread buyers, tiffin users, grocery shoppers, and gifting households."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-059"
      },
      {
        "label": "Aisle",
        "value": "Reusable & Eco Wraps (Beeswax / Fabric)"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "India-relevant (bulk dals)."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Cotton Bulk Bags",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Cotton Bulk Bags?",
        "answer": "Cotton Bulk Bags is a Toreso flexible pack made for reusable cloth bags for grains/lentils with tare label."
      },
      {
        "question": "Who should use Cotton Bulk Bags?",
        "answer": "Cotton Bulk Bags is designed for low-waste kitchens, bread buyers, tiffin users, grocery shoppers, and gifting households."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Reusable cloth bags for grains/lentils with tare label."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-06"
    ]
  },
  {
    "id": "toreso-foldable-eco-tote",
    "catalogNumber": 60,
    "slug": "toreso-foldable-eco-tote",
    "name": "Toreso Foldable Eco Tote",
    "track": "Reusable & Eco Wraps (Beeswax / Fabric)",
    "categorySlug": "reusable-and-eco-wraps-beeswax-fabric",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Pocket-size foldable shopping bag.",
    "b2cInnovation": "Pocket-size foldable shopping bag.",
    "format": "Reusable product",
    "signal": "per FactMR, the global reusable food-wrap market was ~USD 595.9M in 2024, forecast to ~USD 1.32B by 2034 (8.3% CAGR); per ShelfTrend, beeswax bread bags for sourdough are the hottest sub-format, with one Goldilocks Goods bread-bag video pulling 95K+ likes.",
    "aisle": "Reusable & Eco Wraps (Beeswax / Fabric)",
    "audience": "low-waste kitchens, bread buyers, tiffin users, grocery shoppers, and gifting households",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Foldable Eco Tote is a reusable product for pocket-size foldable shopping bag.",
    "demandSignal": "Daiso Korea \"Eco Bags\" essential (plastic bags are paid in Korea/India).",
    "origin": "Global packaging retail",
    "benefits": [
      "Pocket-size foldable shopping bag.",
      "Pocket-size foldable shopping bag.",
      "Demand signal: Daiso Korea \"Eco Bags\" essential (plastic bags are paid in Korea/India).",
      "Consumer-sized format for low-waste kitchens, bread buyers, tiffin users, grocery shoppers, and gifting households."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-060"
      },
      {
        "label": "Aisle",
        "value": "Reusable & Eco Wraps (Beeswax / Fabric)"
      },
      {
        "label": "Format",
        "value": "Reusable product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Foldable Eco Tote",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Foldable Eco Tote?",
        "answer": "Toreso Foldable Eco Tote is a Toreso reusable product made for pocket-size foldable shopping bag."
      },
      {
        "question": "Who should use Toreso Foldable Eco Tote?",
        "answer": "Toreso Foldable Eco Tote is designed for low-waste kitchens, bread buyers, tiffin users, grocery shoppers, and gifting households."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Pocket-size foldable shopping bag."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-06"
    ]
  },
  {
    "id": "toreso-stackfresh-canisters",
    "catalogNumber": 61,
    "slug": "toreso-stackfresh-canisters",
    "name": "Toreso StackFresh Canisters",
    "track": "Fridge & Pantry Organization",
    "categorySlug": "fridge-and-pantry-organization",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Airtight stackable pantry canisters with one-touch lids.",
    "b2cInnovation": "Airtight stackable pantry canisters with one-touch lids.",
    "format": "Rigid storage",
    "signal": "per Market Reports World, India recorded 33% growth in stackable storage and kitchen-organization items, \"particularly among urban millennials\"; Daiso's stackable airtight cereal/refrigerator containers are TikTok haul staples.",
    "aisle": "Fridge & Pantry Organization",
    "audience": "urban kitchens, monsoon pantries, apartment fridges, and organized family storage",
    "priceRange": "mid.",
    "launchPriority": "Signature launch",
    "heroLine": "Toreso StackFresh Canisters is a rigid storage for airtight stackable pantry canisters with one-touch lids.",
    "demandSignal": "Daiso airtight container haul viral.",
    "origin": "Japan/Korea.",
    "benefits": [
      "Airtight stackable pantry canisters with one-touch lids.",
      "Airtight stackable pantry canisters with one-touch lids.",
      "Demand signal: Daiso airtight container haul viral.",
      "Consumer-sized format for urban kitchens, monsoon pantries, apartment fridges, and organized family storage."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-061"
      },
      {
        "label": "Aisle",
        "value": "Fridge & Pantry Organization"
      },
      {
        "label": "Format",
        "value": "Rigid storage"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Japan/Korea."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso StackFresh Canisters",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso StackFresh Canisters?",
        "answer": "Toreso StackFresh Canisters is a Toreso rigid storage made for airtight stackable pantry canisters with one-touch lids."
      },
      {
        "question": "Who should use Toreso StackFresh Canisters?",
        "answer": "Toreso StackFresh Canisters is designed for urban kitchens, monsoon pantries, apartment fridges, and organized family storage."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Airtight stackable pantry canisters with one-touch lids."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-07"
    ]
  },
  {
    "id": "stackfresh-cereal-pour-box",
    "catalogNumber": 62,
    "slug": "stackfresh-cereal-pour-box",
    "name": "StackFresh Cereal Pour Box",
    "track": "Fridge & Pantry Organization",
    "categorySlug": "fridge-and-pantry-organization",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Flip-spout cereal dispenser.",
    "b2cInnovation": "Flip-spout cereal dispenser.",
    "format": "Rigid storage",
    "signal": "per Market Reports World, India recorded 33% growth in stackable storage and kitchen-organization items, \"particularly among urban millennials\"; Daiso's stackable airtight cereal/refrigerator containers are TikTok haul staples.",
    "aisle": "Fridge & Pantry Organization",
    "audience": "urban kitchens, monsoon pantries, apartment fridges, and organized family storage",
    "priceRange": "impulse-mid.",
    "launchPriority": "Signature launch",
    "heroLine": "StackFresh Cereal Pour Box is a rigid storage for flip-spout cereal dispenser.",
    "demandSignal": "per Market Reports World, India recorded 33% growth in stackable storage and kitchen-organization items, \"particularly among urban millennials\"; Daiso's stackable airtight cereal/refrigerator containers are TikTok haul staples.",
    "origin": "Global packaging retail",
    "benefits": [
      "Flip-spout cereal dispenser.",
      "Flip-spout cereal dispenser.",
      "Built for the fridge & pantry organization aisle.",
      "Consumer-sized format for urban kitchens, monsoon pantries, apartment fridges, and organized family storage."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-062"
      },
      {
        "label": "Aisle",
        "value": "Fridge & Pantry Organization"
      },
      {
        "label": "Format",
        "value": "Rigid storage"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "StackFresh Cereal Pour Box",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is StackFresh Cereal Pour Box?",
        "answer": "StackFresh Cereal Pour Box is a Toreso rigid storage made for flip-spout cereal dispenser."
      },
      {
        "question": "Who should use StackFresh Cereal Pour Box?",
        "answer": "StackFresh Cereal Pour Box is designed for urban kitchens, monsoon pantries, apartment fridges, and organized family storage."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Flip-spout cereal dispenser."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-07"
    ]
  },
  {
    "id": "fridge-bin-organizers-clear",
    "catalogNumber": 63,
    "slug": "fridge-bin-organizers-clear",
    "name": "Fridge Bin Organizers (clear)",
    "track": "Fridge & Pantry Organization",
    "categorySlug": "fridge-and-pantry-organization",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Stackable clear fridge bins with handles.",
    "b2cInnovation": "Stackable clear fridge bins with handles.",
    "format": "Fridge product",
    "signal": "per Market Reports World, India recorded 33% growth in stackable storage and kitchen-organization items, \"particularly among urban millennials\"; Daiso's stackable airtight cereal/refrigerator containers are TikTok haul staples.",
    "aisle": "Fridge & Pantry Organization",
    "audience": "urban kitchens, monsoon pantries, apartment fridges, and organized family storage",
    "priceRange": "mid.",
    "launchPriority": "Signature launch",
    "heroLine": "Fridge Bin Organizers (clear) is a fridge product for stackable clear fridge bins with handles.",
    "demandSignal": "Temu/TikTok fridge-organization viral.",
    "origin": "Global packaging retail",
    "benefits": [
      "Stackable clear fridge bins with handles.",
      "Stackable clear fridge bins with handles.",
      "Demand signal: Temu/TikTok fridge-organization viral.",
      "Consumer-sized format for urban kitchens, monsoon pantries, apartment fridges, and organized family storage."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-063"
      },
      {
        "label": "Aisle",
        "value": "Fridge & Pantry Organization"
      },
      {
        "label": "Format",
        "value": "Fridge product"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Fridge Bin Organizers (clear)",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Fridge Bin Organizers (clear)?",
        "answer": "Fridge Bin Organizers (clear) is a Toreso fridge product made for stackable clear fridge bins with handles."
      },
      {
        "question": "Who should use Fridge Bin Organizers (clear)?",
        "answer": "Fridge Bin Organizers (clear) is designed for urban kitchens, monsoon pantries, apartment fridges, and organized family storage."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Stackable clear fridge bins with handles."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-07"
    ]
  },
  {
    "id": "toreso-egg-roller-holder",
    "catalogNumber": 64,
    "slug": "toreso-egg-roller-holder",
    "name": "Toreso Egg Roller Holder",
    "track": "Fridge & Pantry Organization",
    "categorySlug": "fridge-and-pantry-organization",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Auto-rolling gravity egg dispenser.",
    "b2cInnovation": "Auto-rolling gravity egg dispenser.",
    "format": "Reusable tool",
    "signal": "per Market Reports World, India recorded 33% growth in stackable storage and kitchen-organization items, \"particularly among urban millennials\"; Daiso's stackable airtight cereal/refrigerator containers are TikTok haul staples.",
    "aisle": "Fridge & Pantry Organization",
    "audience": "urban kitchens, monsoon pantries, apartment fridges, and organized family storage",
    "priceRange": "impulse-mid.",
    "launchPriority": "Signature launch",
    "heroLine": "Toreso Egg Roller Holder is a reusable tool for auto-rolling gravity egg dispenser.",
    "demandSignal": "\"auto-rolling egg holder\" viral fridge-org item (Global News).",
    "origin": "Global packaging retail",
    "benefits": [
      "Auto-rolling gravity egg dispenser.",
      "Auto-rolling gravity egg dispenser.",
      "Demand signal: \"auto-rolling egg holder\" viral fridge-org item (Global News).",
      "Consumer-sized format for urban kitchens, monsoon pantries, apartment fridges, and organized family storage."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-064"
      },
      {
        "label": "Aisle",
        "value": "Fridge & Pantry Organization"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Egg Roller Holder",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Egg Roller Holder?",
        "answer": "Toreso Egg Roller Holder is a Toreso reusable tool made for auto-rolling gravity egg dispenser."
      },
      {
        "question": "Who should use Toreso Egg Roller Holder?",
        "answer": "Toreso Egg Roller Holder is designed for urban kitchens, monsoon pantries, apartment fridges, and organized family storage."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Auto-rolling gravity egg dispenser."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-07"
    ]
  },
  {
    "id": "can-dispenser-rack",
    "catalogNumber": 65,
    "slug": "can-dispenser-rack",
    "name": "Can Dispenser Rack",
    "track": "Fridge & Pantry Organization",
    "categorySlug": "fridge-and-pantry-organization",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Self-feeding soda/can fridge rack.",
    "b2cInnovation": "Self-feeding soda/can fridge rack.",
    "format": "Reusable tool",
    "signal": "per Market Reports World, India recorded 33% growth in stackable storage and kitchen-organization items, \"particularly among urban millennials\"; Daiso's stackable airtight cereal/refrigerator containers are TikTok haul staples.",
    "aisle": "Fridge & Pantry Organization",
    "audience": "urban kitchens, monsoon pantries, apartment fridges, and organized family storage",
    "priceRange": "impulse-mid.",
    "launchPriority": "Premium daily",
    "heroLine": "Can Dispenser Rack is a reusable tool for self-feeding soda/can fridge rack.",
    "demandSignal": "per Market Reports World, India recorded 33% growth in stackable storage and kitchen-organization items, \"particularly among urban millennials\"; Daiso's stackable airtight cereal/refrigerator containers are TikTok haul staples.",
    "origin": "Global packaging retail",
    "benefits": [
      "Self-feeding soda/can fridge rack.",
      "Self-feeding soda/can fridge rack.",
      "Built for the fridge & pantry organization aisle.",
      "Consumer-sized format for urban kitchens, monsoon pantries, apartment fridges, and organized family storage."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-065"
      },
      {
        "label": "Aisle",
        "value": "Fridge & Pantry Organization"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Can Dispenser Rack",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Can Dispenser Rack?",
        "answer": "Can Dispenser Rack is a Toreso reusable tool made for self-feeding soda/can fridge rack."
      },
      {
        "question": "Who should use Can Dispenser Rack?",
        "answer": "Can Dispenser Rack is designed for urban kitchens, monsoon pantries, apartment fridges, and organized family storage."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Self-feeding soda/can fridge rack."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-07"
    ]
  },
  {
    "id": "sealed-container-with-sieve",
    "catalogNumber": 66,
    "slug": "sealed-container-with-sieve",
    "name": "Sealed Container with Sieve",
    "track": "Fridge & Pantry Organization",
    "categorySlug": "fridge-and-pantry-organization",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Airtight container with built-in strainer for berries/produce.",
    "b2cInnovation": "Airtight container with built-in strainer for berries/produce.",
    "format": "Rigid storage",
    "signal": "per Market Reports World, India recorded 33% growth in stackable storage and kitchen-organization items, \"particularly among urban millennials\"; Daiso's stackable airtight cereal/refrigerator containers are TikTok haul staples.",
    "aisle": "Fridge & Pantry Organization",
    "audience": "urban kitchens, monsoon pantries, apartment fridges, and organized family storage",
    "priceRange": "mid.",
    "launchPriority": "Future drop",
    "heroLine": "Sealed Container with Sieve is a rigid storage for airtight container with built-in strainer for berries/produce.",
    "demandSignal": "Daiso Australia featured product ($9–$21).",
    "origin": "Japan.",
    "benefits": [
      "Airtight container with built-in strainer for berries/produce.",
      "Airtight container with built-in strainer for berries/produce.",
      "Demand signal: Daiso Australia featured product ($9–$21).",
      "Consumer-sized format for urban kitchens, monsoon pantries, apartment fridges, and organized family storage."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-066"
      },
      {
        "label": "Aisle",
        "value": "Fridge & Pantry Organization"
      },
      {
        "label": "Format",
        "value": "Rigid storage"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Japan."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Sealed Container with Sieve",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Sealed Container with Sieve?",
        "answer": "Sealed Container with Sieve is a Toreso rigid storage made for airtight container with built-in strainer for berries/produce."
      },
      {
        "question": "Who should use Sealed Container with Sieve?",
        "answer": "Sealed Container with Sieve is designed for urban kitchens, monsoon pantries, apartment fridges, and organized family storage."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Airtight container with built-in strainer for berries/produce."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-07"
    ]
  },
  {
    "id": "stackable-drawer-type-fridge-box",
    "catalogNumber": 67,
    "slug": "stackable-drawer-type-fridge-box",
    "name": "Stackable Drawer-Type Fridge Box",
    "track": "Fridge & Pantry Organization",
    "categorySlug": "fridge-and-pantry-organization",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Pull-out drawer fridge organizer.",
    "b2cInnovation": "Pull-out drawer fridge organizer.",
    "format": "Rigid storage",
    "signal": "per Market Reports World, India recorded 33% growth in stackable storage and kitchen-organization items, \"particularly among urban millennials\"; Daiso's stackable airtight cereal/refrigerator containers are TikTok haul staples.",
    "aisle": "Fridge & Pantry Organization",
    "audience": "urban kitchens, monsoon pantries, apartment fridges, and organized family storage",
    "priceRange": "mid.",
    "launchPriority": "Future drop",
    "heroLine": "Stackable Drawer-Type Fridge Box is a rigid storage for pull-out drawer fridge organizer.",
    "demandSignal": "Temu/AliExpress trending.",
    "origin": "Global packaging retail",
    "benefits": [
      "Pull-out drawer fridge organizer.",
      "Pull-out drawer fridge organizer.",
      "Demand signal: Temu/AliExpress trending.",
      "Consumer-sized format for urban kitchens, monsoon pantries, apartment fridges, and organized family storage."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-067"
      },
      {
        "label": "Aisle",
        "value": "Fridge & Pantry Organization"
      },
      {
        "label": "Format",
        "value": "Rigid storage"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Stackable Drawer-Type Fridge Box",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Stackable Drawer-Type Fridge Box?",
        "answer": "Stackable Drawer-Type Fridge Box is a Toreso rigid storage made for pull-out drawer fridge organizer."
      },
      {
        "question": "Who should use Stackable Drawer-Type Fridge Box?",
        "answer": "Stackable Drawer-Type Fridge Box is designed for urban kitchens, monsoon pantries, apartment fridges, and organized family storage."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Pull-out drawer fridge organizer."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-07"
    ]
  },
  {
    "id": "toreso-bag-roll-dispenser",
    "catalogNumber": 68,
    "slug": "toreso-bag-roll-dispenser",
    "name": "Toreso Bag Roll Dispenser",
    "track": "Fridge & Pantry Organization",
    "categorySlug": "fridge-and-pantry-organization",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Wall-mount dispenser for plastic/produce bags.",
    "b2cInnovation": "Wall-mount dispenser for plastic/produce bags.",
    "format": "Flexible pack",
    "signal": "per Market Reports World, India recorded 33% growth in stackable storage and kitchen-organization items, \"particularly among urban millennials\"; Daiso's stackable airtight cereal/refrigerator containers are TikTok haul staples.",
    "aisle": "Fridge & Pantry Organization",
    "audience": "urban kitchens, monsoon pantries, apartment fridges, and organized family storage",
    "priceRange": "impulse-mid.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Bag Roll Dispenser is a flexible pack for wall-mount dispenser for plastic/produce bags.",
    "demandSignal": "Temu \"wall-mounted dispenser holds up to 30 bags.\"",
    "origin": "Global packaging retail",
    "benefits": [
      "Wall-mount dispenser for plastic/produce bags.",
      "Wall-mount dispenser for plastic/produce bags.",
      "Demand signal: Temu \"wall-mounted dispenser holds up to 30 bags.\"",
      "Consumer-sized format for urban kitchens, monsoon pantries, apartment fridges, and organized family storage."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-068"
      },
      {
        "label": "Aisle",
        "value": "Fridge & Pantry Organization"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Bag Roll Dispenser",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Bag Roll Dispenser?",
        "answer": "Toreso Bag Roll Dispenser is a Toreso flexible pack made for wall-mount dispenser for plastic/produce bags."
      },
      {
        "question": "Who should use Toreso Bag Roll Dispenser?",
        "answer": "Toreso Bag Roll Dispenser is designed for urban kitchens, monsoon pantries, apartment fridges, and organized family storage."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Wall-mount dispenser for plastic/produce bags."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-07"
    ]
  },
  {
    "id": "ziploc-bag-storage-caddy",
    "catalogNumber": 69,
    "slug": "ziploc-bag-storage-caddy",
    "name": "Ziploc/Bag Storage Caddy",
    "track": "Fridge & Pantry Organization",
    "categorySlug": "fridge-and-pantry-organization",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Aesthetic dispenser box for storage bags by size.",
    "b2cInnovation": "Aesthetic dispenser box for storage bags by size.",
    "format": "Flexible pack",
    "signal": "per Market Reports World, India recorded 33% growth in stackable storage and kitchen-organization items, \"particularly among urban millennials\"; Daiso's stackable airtight cereal/refrigerator containers are TikTok haul staples.",
    "aisle": "Fridge & Pantry Organization",
    "audience": "urban kitchens, monsoon pantries, apartment fridges, and organized family storage",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Ziploc/Bag Storage Caddy is a flexible pack for aesthetic dispenser box for storage bags by size.",
    "demandSignal": "TikTok \"ziploc baggy storage\" hack.",
    "origin": "Global packaging retail",
    "benefits": [
      "Aesthetic dispenser box for storage bags by size.",
      "Aesthetic dispenser box for storage bags by size.",
      "Demand signal: TikTok \"ziploc baggy storage\" hack.",
      "Consumer-sized format for urban kitchens, monsoon pantries, apartment fridges, and organized family storage."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-069"
      },
      {
        "label": "Aisle",
        "value": "Fridge & Pantry Organization"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Ziploc/Bag Storage Caddy",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Ziploc/Bag Storage Caddy?",
        "answer": "Ziploc/Bag Storage Caddy is a Toreso flexible pack made for aesthetic dispenser box for storage bags by size."
      },
      {
        "question": "Who should use Ziploc/Bag Storage Caddy?",
        "answer": "Ziploc/Bag Storage Caddy is designed for urban kitchens, monsoon pantries, apartment fridges, and organized family storage."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Aesthetic dispenser box for storage bags by size."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-07"
    ]
  },
  {
    "id": "spice-jar-set-with-labels",
    "catalogNumber": 70,
    "slug": "spice-jar-set-with-labels",
    "name": "Spice Jar Set with Labels",
    "track": "Fridge & Pantry Organization",
    "categorySlug": "fridge-and-pantry-organization",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Uniform airtight spice jars + sticker labels.",
    "b2cInnovation": "Uniform airtight spice jars + sticker labels.",
    "format": "Starter kit",
    "signal": "per Market Reports World, India recorded 33% growth in stackable storage and kitchen-organization items, \"particularly among urban millennials\"; Daiso's stackable airtight cereal/refrigerator containers are TikTok haul staples.",
    "aisle": "Fridge & Pantry Organization",
    "audience": "urban kitchens, monsoon pantries, apartment fridges, and organized family storage",
    "priceRange": "mid.",
    "launchPriority": "Future drop",
    "heroLine": "Spice Jar Set with Labels is a starter kit for uniform airtight spice jars + sticker labels.",
    "demandSignal": "per Market Reports World, India recorded 33% growth in stackable storage and kitchen-organization items, \"particularly among urban millennials\"; Daiso's stackable airtight cereal/refrigerator containers are TikTok haul staples.",
    "origin": "India-relevant.",
    "benefits": [
      "Uniform airtight spice jars + sticker labels.",
      "Uniform airtight spice jars + sticker labels.",
      "Built for the fridge & pantry organization aisle.",
      "Consumer-sized format for urban kitchens, monsoon pantries, apartment fridges, and organized family storage."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-070"
      },
      {
        "label": "Aisle",
        "value": "Fridge & Pantry Organization"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "India-relevant."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Spice Jar Set with Labels",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Spice Jar Set with Labels?",
        "answer": "Spice Jar Set with Labels is a Toreso starter kit made for uniform airtight spice jars + sticker labels."
      },
      {
        "question": "Who should use Spice Jar Set with Labels?",
        "answer": "Spice Jar Set with Labels is designed for urban kitchens, monsoon pantries, apartment fridges, and organized family storage."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Uniform airtight spice jars + sticker labels."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-07"
    ]
  },
  {
    "id": "stackfresh-stackable-tin-tray",
    "catalogNumber": 71,
    "slug": "stackfresh-stackable-tin-tray",
    "name": "StackFresh Stackable Tin + Tray",
    "track": "Fridge & Pantry Organization",
    "categorySlug": "fridge-and-pantry-organization",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Snack tin with tray.",
    "b2cInnovation": "Snack tin with tray.",
    "format": "Rigid storage",
    "signal": "per Market Reports World, India recorded 33% growth in stackable storage and kitchen-organization items, \"particularly among urban millennials\"; Daiso's stackable airtight cereal/refrigerator containers are TikTok haul staples.",
    "aisle": "Fridge & Pantry Organization",
    "audience": "urban kitchens, monsoon pantries, apartment fridges, and organized family storage",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "StackFresh Stackable Tin + Tray is a rigid storage for snack tin with tray.",
    "demandSignal": "Flying Tiger bestseller format.",
    "origin": "Global packaging retail",
    "benefits": [
      "Snack tin with tray.",
      "Snack tin with tray.",
      "Demand signal: Flying Tiger bestseller format.",
      "Consumer-sized format for urban kitchens, monsoon pantries, apartment fridges, and organized family storage."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-071"
      },
      {
        "label": "Aisle",
        "value": "Fridge & Pantry Organization"
      },
      {
        "label": "Format",
        "value": "Rigid storage"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "StackFresh Stackable Tin + Tray",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is StackFresh Stackable Tin + Tray?",
        "answer": "StackFresh Stackable Tin + Tray is a Toreso rigid storage made for snack tin with tray."
      },
      {
        "question": "Who should use StackFresh Stackable Tin + Tray?",
        "answer": "StackFresh Stackable Tin + Tray is designed for urban kitchens, monsoon pantries, apartment fridges, and organized family storage."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Snack tin with tray."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-07"
    ]
  },
  {
    "id": "twist-lock-canister",
    "catalogNumber": 72,
    "slug": "twist-lock-canister",
    "name": "Twist-Lock Canister",
    "track": "Fridge & Pantry Organization",
    "categorySlug": "fridge-and-pantry-organization",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Twist-to-seal food canister.",
    "b2cInnovation": "Twist-to-seal food canister.",
    "format": "Rigid storage",
    "signal": "per Market Reports World, India recorded 33% growth in stackable storage and kitchen-organization items, \"particularly among urban millennials\"; Daiso's stackable airtight cereal/refrigerator containers are TikTok haul staples.",
    "aisle": "Fridge & Pantry Organization",
    "audience": "urban kitchens, monsoon pantries, apartment fridges, and organized family storage",
    "priceRange": "impulse-mid.",
    "launchPriority": "Future drop",
    "heroLine": "Twist-Lock Canister is a rigid storage for twist-to-seal food canister.",
    "demandSignal": "Daiso \"Twist Food Storage Containers\" line.",
    "origin": "Japan.",
    "benefits": [
      "Twist-to-seal food canister.",
      "Twist-to-seal food canister.",
      "Demand signal: Daiso \"Twist Food Storage Containers\" line.",
      "Consumer-sized format for urban kitchens, monsoon pantries, apartment fridges, and organized family storage."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-072"
      },
      {
        "label": "Aisle",
        "value": "Fridge & Pantry Organization"
      },
      {
        "label": "Format",
        "value": "Rigid storage"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Japan."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Twist-Lock Canister",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Twist-Lock Canister?",
        "answer": "Twist-Lock Canister is a Toreso rigid storage made for twist-to-seal food canister."
      },
      {
        "question": "Who should use Twist-Lock Canister?",
        "answer": "Twist-Lock Canister is designed for urban kitchens, monsoon pantries, apartment fridges, and organized family storage."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Twist-to-seal food canister."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-07"
    ]
  },
  {
    "id": "under-sink-slide-organizer",
    "catalogNumber": 73,
    "slug": "under-sink-slide-organizer",
    "name": "Under-Sink Slide Organizer",
    "track": "Fridge & Pantry Organization",
    "categorySlug": "fridge-and-pantry-organization",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Modular under-sink storage.",
    "b2cInnovation": "Modular under-sink storage.",
    "format": "Fridge product",
    "signal": "per Market Reports World, India recorded 33% growth in stackable storage and kitchen-organization items, \"particularly among urban millennials\"; Daiso's stackable airtight cereal/refrigerator containers are TikTok haul staples.",
    "aisle": "Fridge & Pantry Organization",
    "audience": "urban kitchens, monsoon pantries, apartment fridges, and organized family storage",
    "priceRange": "mid.",
    "launchPriority": "Future drop",
    "heroLine": "Under-Sink Slide Organizer is a fridge product for modular under-sink storage.",
    "demandSignal": "per Market Reports World, India recorded 33% growth in stackable storage and kitchen-organization items, \"particularly among urban millennials\"; Daiso's stackable airtight cereal/refrigerator containers are TikTok haul staples.",
    "origin": "Global packaging retail",
    "benefits": [
      "Modular under-sink storage.",
      "Modular under-sink storage.",
      "Built for the fridge & pantry organization aisle.",
      "Consumer-sized format for urban kitchens, monsoon pantries, apartment fridges, and organized family storage."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-073"
      },
      {
        "label": "Aisle",
        "value": "Fridge & Pantry Organization"
      },
      {
        "label": "Format",
        "value": "Fridge product"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Under-Sink Slide Organizer",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Under-Sink Slide Organizer?",
        "answer": "Under-Sink Slide Organizer is a Toreso fridge product made for modular under-sink storage."
      },
      {
        "question": "Who should use Under-Sink Slide Organizer?",
        "answer": "Under-Sink Slide Organizer is designed for urban kitchens, monsoon pantries, apartment fridges, and organized family storage."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Modular under-sink storage."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-07"
    ]
  },
  {
    "id": "toreso-stove-gap-cover",
    "catalogNumber": 74,
    "slug": "toreso-stove-gap-cover",
    "name": "Toreso Stove-Gap Cover",
    "track": "Fridge & Pantry Organization",
    "categorySlug": "fridge-and-pantry-organization",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Silicone strip sealing the stove-counter gap.",
    "b2cInnovation": "Silicone strip sealing the stove-counter gap.",
    "format": "Fridge product",
    "signal": "per Market Reports World, India recorded 33% growth in stackable storage and kitchen-organization items, \"particularly among urban millennials\"; Daiso's stackable airtight cereal/refrigerator containers are TikTok haul staples.",
    "aisle": "Fridge & Pantry Organization",
    "audience": "urban kitchens, monsoon pantries, apartment fridges, and organized family storage",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Stove-Gap Cover is a fridge product for silicone strip sealing the stove-counter gap.",
    "demandSignal": "Temu \"game changer\" viral.",
    "origin": "Global packaging retail",
    "benefits": [
      "Silicone strip sealing the stove-counter gap.",
      "Silicone strip sealing the stove-counter gap.",
      "Demand signal: Temu \"game changer\" viral.",
      "Consumer-sized format for urban kitchens, monsoon pantries, apartment fridges, and organized family storage."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-074"
      },
      {
        "label": "Aisle",
        "value": "Fridge & Pantry Organization"
      },
      {
        "label": "Format",
        "value": "Fridge product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Stove-Gap Cover",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Stove-Gap Cover?",
        "answer": "Toreso Stove-Gap Cover is a Toreso fridge product made for silicone strip sealing the stove-counter gap."
      },
      {
        "question": "Who should use Toreso Stove-Gap Cover?",
        "answer": "Toreso Stove-Gap Cover is designed for urban kitchens, monsoon pantries, apartment fridges, and organized family storage."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Silicone strip sealing the stove-counter gap."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-07"
    ]
  },
  {
    "id": "fridge-liner-mats-washable",
    "catalogNumber": 75,
    "slug": "fridge-liner-mats-washable",
    "name": "Fridge Liner Mats (washable)",
    "track": "Fridge & Pantry Organization",
    "categorySlug": "fridge-and-pantry-organization",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Anti-bruise washable fridge drawer mats.",
    "b2cInnovation": "Anti-bruise washable fridge drawer mats.",
    "format": "Fridge product",
    "signal": "per Market Reports World, India recorded 33% growth in stackable storage and kitchen-organization items, \"particularly among urban millennials\"; Daiso's stackable airtight cereal/refrigerator containers are TikTok haul staples.",
    "aisle": "Fridge & Pantry Organization",
    "audience": "urban kitchens, monsoon pantries, apartment fridges, and organized family storage",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Fridge Liner Mats (washable) is a fridge product for anti-bruise washable fridge drawer mats.",
    "demandSignal": "Bluapple \"FreshMats\" category.",
    "origin": "Global packaging retail",
    "benefits": [
      "Anti-bruise washable fridge drawer mats.",
      "Anti-bruise washable fridge drawer mats.",
      "Demand signal: Bluapple \"FreshMats\" category.",
      "Consumer-sized format for urban kitchens, monsoon pantries, apartment fridges, and organized family storage."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-075"
      },
      {
        "label": "Aisle",
        "value": "Fridge & Pantry Organization"
      },
      {
        "label": "Format",
        "value": "Fridge product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Fridge Liner Mats (washable)",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Fridge Liner Mats (washable)?",
        "answer": "Fridge Liner Mats (washable) is a Toreso fridge product made for anti-bruise washable fridge drawer mats."
      },
      {
        "question": "Who should use Fridge Liner Mats (washable)?",
        "answer": "Fridge Liner Mats (washable) is designed for urban kitchens, monsoon pantries, apartment fridges, and organized family storage."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Anti-bruise washable fridge drawer mats."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-07"
    ]
  },
  {
    "id": "toreso-freshorb-ethylene-absorber",
    "catalogNumber": 76,
    "slug": "toreso-freshorb-ethylene-absorber",
    "name": "Toreso FreshOrb (Ethylene Absorber)",
    "track": "Freshness & Moisture Control (VCI / desiccant reinvention)",
    "categorySlug": "freshness-and-moisture-control-vci-desiccant-reinvention",
    "b2bOrigin": "Benz desiccant/active-packaging tech.",
    "userProblem": "Refillable fridge ball that absorbs ethylene gas to slow ripening.",
    "b2cInnovation": "refill packets every 3 months; activated-carbon odor variant.",
    "format": "Freshness product",
    "signal": "Bluapple's ethylene absorber states it keeps produce fresh 2–3x longer and is an Amazon best-seller; Daiso Korea's ₩1,000 hanging dehumidifier bag (ranking #34, 4.8 stars) is an expat cult item. This is Benz Packaging's single strongest B2B→B2C bridge — desiccants, VCI, and barrier films are core Benz products.",
    "aisle": "Freshness & Moisture Control (VCI / desiccant reinvention)",
    "audience": "monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries",
    "priceRange": "mid.",
    "launchPriority": "Signature launch",
    "heroLine": "Toreso FreshOrb (Ethylene Absorber) is a freshness product for refillable fridge ball that absorbs ethylene gas to slow ripening.",
    "demandSignal": "Bluapple best-seller.",
    "origin": "USA concept, Benz-made.",
    "benefits": [
      "Refillable fridge ball that absorbs ethylene gas to slow ripening.",
      "refill packets every 3 months; activated-carbon odor variant.",
      "Demand signal: Bluapple best-seller.",
      "Consumer-sized format for monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-076"
      },
      {
        "label": "Aisle",
        "value": "Freshness & Moisture Control (VCI / desiccant reinvention)"
      },
      {
        "label": "Format",
        "value": "Freshness product"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "USA concept, Benz-made."
      },
      {
        "label": "Packaging intelligence",
        "value": "Benz desiccant/active-packaging tech."
      }
    ],
    "bundle": [
      "Toreso FreshOrb (Ethylene Absorber)",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso FreshOrb (Ethylene Absorber)?",
        "answer": "Toreso FreshOrb (Ethylene Absorber) is a Toreso freshness product made for refillable fridge ball that absorbs ethylene gas to slow ripening."
      },
      {
        "question": "Who should use Toreso FreshOrb (Ethylene Absorber)?",
        "answer": "Toreso FreshOrb (Ethylene Absorber) is designed for monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "refill packets every 3 months; activated-carbon odor variant."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-08"
    ]
  },
  {
    "id": "freshorb-carbon",
    "catalogNumber": 77,
    "slug": "freshorb-carbon",
    "name": "FreshOrb Carbon",
    "track": "Freshness & Moisture Control (VCI / desiccant reinvention)",
    "categorySlug": "freshness-and-moisture-control-vci-desiccant-reinvention",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Activated-carbon version that also kills fridge odor.",
    "b2cInnovation": "Activated-carbon version that also kills fridge odor.",
    "format": "Freshness product",
    "signal": "Bluapple's ethylene absorber states it keeps produce fresh 2–3x longer and is an Amazon best-seller; Daiso Korea's ₩1,000 hanging dehumidifier bag (ranking #34, 4.8 stars) is an expat cult item. This is Benz Packaging's single strongest B2B→B2C bridge — desiccants, VCI, and barrier films are core Benz products.",
    "aisle": "Freshness & Moisture Control (VCI / desiccant reinvention)",
    "audience": "monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries",
    "priceRange": "mid.",
    "launchPriority": "Signature launch",
    "heroLine": "FreshOrb Carbon is a freshness product for activated-carbon version that also kills fridge odor.",
    "demandSignal": "Bluapple's ethylene absorber states it keeps produce fresh 2–3x longer and is an Amazon best-seller; Daiso Korea's ₩1,000 hanging dehumidifier bag (ranking #34, 4.8 stars) is an expat cult item. This is Benz Packaging's single strongest B2B→B2C bridge — desiccants, VCI, and barrier films are core Benz products.",
    "origin": "Global packaging retail",
    "benefits": [
      "Activated-carbon version that also kills fridge odor.",
      "Activated-carbon version that also kills fridge odor.",
      "Built for the freshness & moisture control (vci / desiccant reinvention) aisle.",
      "Consumer-sized format for monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-077"
      },
      {
        "label": "Aisle",
        "value": "Freshness & Moisture Control (VCI / desiccant reinvention)"
      },
      {
        "label": "Format",
        "value": "Freshness product"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "FreshOrb Carbon",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is FreshOrb Carbon?",
        "answer": "FreshOrb Carbon is a Toreso freshness product made for activated-carbon version that also kills fridge odor."
      },
      {
        "question": "Who should use FreshOrb Carbon?",
        "answer": "FreshOrb Carbon is designed for monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Activated-carbon version that also kills fridge odor."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-08"
    ]
  },
  {
    "id": "toreso-dryhang-closet-bag",
    "catalogNumber": 78,
    "slug": "toreso-dryhang-closet-bag",
    "name": "Toreso DryHang Closet Bag",
    "track": "Freshness & Moisture Control (VCI / desiccant reinvention)",
    "categorySlug": "freshness-and-moisture-control-vci-desiccant-reinvention",
    "b2bOrigin": "Benz \"BE DRY\" calcium chloride (adsorbs >250% of own weight).",
    "userProblem": "Hanging calcium-chloride dehumidifier bag for wardrobes.",
    "b2cInnovation": "Hanging calcium-chloride dehumidifier bag for wardrobes.",
    "format": "Starter kit",
    "signal": "Bluapple's ethylene absorber states it keeps produce fresh 2–3x longer and is an Amazon best-seller; Daiso Korea's ₩1,000 hanging dehumidifier bag (ranking #34, 4.8 stars) is an expat cult item. This is Benz Packaging's single strongest B2B→B2C bridge — desiccants, VCI, and barrier films are core Benz products.",
    "aisle": "Freshness & Moisture Control (VCI / desiccant reinvention)",
    "audience": "monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries",
    "priceRange": "impulse.",
    "launchPriority": "Signature launch",
    "heroLine": "Toreso DryHang Closet Bag is a starter kit for hanging calcium-chloride dehumidifier bag for wardrobes.",
    "demandSignal": "Daiso Korea ₩1,000 cult item.",
    "origin": "Global packaging retail",
    "benefits": [
      "Hanging calcium-chloride dehumidifier bag for wardrobes.",
      "Hanging calcium-chloride dehumidifier bag for wardrobes.",
      "Demand signal: Daiso Korea ₩1,000 cult item.",
      "Consumer-sized format for monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-078"
      },
      {
        "label": "Aisle",
        "value": "Freshness & Moisture Control (VCI / desiccant reinvention)"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Benz \"BE DRY\" calcium chloride (adsorbs >250% of own weight)."
      }
    ],
    "bundle": [
      "Toreso DryHang Closet Bag",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso DryHang Closet Bag?",
        "answer": "Toreso DryHang Closet Bag is a Toreso starter kit made for hanging calcium-chloride dehumidifier bag for wardrobes."
      },
      {
        "question": "Who should use Toreso DryHang Closet Bag?",
        "answer": "Toreso DryHang Closet Bag is designed for monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Hanging calcium-chloride dehumidifier bag for wardrobes."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-08"
    ]
  },
  {
    "id": "drybox-refillable-dehumidifier",
    "catalogNumber": 79,
    "slug": "drybox-refillable-dehumidifier",
    "name": "DryBox Refillable Dehumidifier",
    "track": "Freshness & Moisture Control (VCI / desiccant reinvention)",
    "categorySlug": "freshness-and-moisture-control-vci-desiccant-reinvention",
    "b2bOrigin": "Benz \"C DRY\" clay desiccant.",
    "userProblem": "Reusable moisture box with color-change indicator.",
    "b2cInnovation": "Reusable moisture box with color-change indicator.",
    "format": "Rigid storage",
    "signal": "Bluapple's ethylene absorber states it keeps produce fresh 2–3x longer and is an Amazon best-seller; Daiso Korea's ₩1,000 hanging dehumidifier bag (ranking #34, 4.8 stars) is an expat cult item. This is Benz Packaging's single strongest B2B→B2C bridge — desiccants, VCI, and barrier films are core Benz products.",
    "aisle": "Freshness & Moisture Control (VCI / desiccant reinvention)",
    "audience": "monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries",
    "priceRange": "impulse-mid.",
    "launchPriority": "Signature launch",
    "heroLine": "DryBox Refillable Dehumidifier is a rigid storage for reusable moisture box with color-change indicator.",
    "demandSignal": "Bluapple's ethylene absorber states it keeps produce fresh 2–3x longer and is an Amazon best-seller; Daiso Korea's ₩1,000 hanging dehumidifier bag (ranking #34, 4.8 stars) is an expat cult item. This is Benz Packaging's single strongest B2B→B2C bridge — desiccants, VCI, and barrier films are core Benz products.",
    "origin": "Global packaging retail",
    "benefits": [
      "Reusable moisture box with color-change indicator.",
      "Reusable moisture box with color-change indicator.",
      "Built for the freshness & moisture control (vci / desiccant reinvention) aisle.",
      "Consumer-sized format for monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-079"
      },
      {
        "label": "Aisle",
        "value": "Freshness & Moisture Control (VCI / desiccant reinvention)"
      },
      {
        "label": "Format",
        "value": "Rigid storage"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Benz \"C DRY\" clay desiccant."
      }
    ],
    "bundle": [
      "DryBox Refillable Dehumidifier",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is DryBox Refillable Dehumidifier?",
        "answer": "DryBox Refillable Dehumidifier is a Toreso rigid storage made for reusable moisture box with color-change indicator."
      },
      {
        "question": "Who should use DryBox Refillable Dehumidifier?",
        "answer": "DryBox Refillable Dehumidifier is designed for monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Reusable moisture box with color-change indicator."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-08"
    ]
  },
  {
    "id": "toreso-reusable-silica-pods",
    "catalogNumber": 80,
    "slug": "toreso-reusable-silica-pods",
    "name": "Toreso Reusable Silica Pods",
    "track": "Freshness & Moisture Control (VCI / desiccant reinvention)",
    "categorySlug": "freshness-and-moisture-control-vci-desiccant-reinvention",
    "b2bOrigin": "Benz silica gel.",
    "userProblem": "Microwave-rechargeable silica gel pods (color-change).",
    "b2cInnovation": "\"recharge in microwave, reuse forever.\"",
    "format": "Freshness product",
    "signal": "Bluapple's ethylene absorber states it keeps produce fresh 2–3x longer and is an Amazon best-seller; Daiso Korea's ₩1,000 hanging dehumidifier bag (ranking #34, 4.8 stars) is an expat cult item. This is Benz Packaging's single strongest B2B→B2C bridge — desiccants, VCI, and barrier films are core Benz products.",
    "aisle": "Freshness & Moisture Control (VCI / desiccant reinvention)",
    "audience": "monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Reusable Silica Pods is a freshness product for microwave-rechargeable silica gel pods (color-change).",
    "demandSignal": "Bluapple's ethylene absorber states it keeps produce fresh 2–3x longer and is an Amazon best-seller; Daiso Korea's ₩1,000 hanging dehumidifier bag (ranking #34, 4.8 stars) is an expat cult item. This is Benz Packaging's single strongest B2B→B2C bridge — desiccants, VCI, and barrier films are core Benz products.",
    "origin": "Global packaging retail",
    "benefits": [
      "Microwave-rechargeable silica gel pods (color-change).",
      "\"recharge in microwave, reuse forever.\"",
      "Built for the freshness & moisture control (vci / desiccant reinvention) aisle.",
      "Consumer-sized format for monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-080"
      },
      {
        "label": "Aisle",
        "value": "Freshness & Moisture Control (VCI / desiccant reinvention)"
      },
      {
        "label": "Format",
        "value": "Freshness product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Benz silica gel."
      }
    ],
    "bundle": [
      "Toreso Reusable Silica Pods",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Reusable Silica Pods?",
        "answer": "Toreso Reusable Silica Pods is a Toreso freshness product made for microwave-rechargeable silica gel pods (color-change)."
      },
      {
        "question": "Who should use Toreso Reusable Silica Pods?",
        "answer": "Toreso Reusable Silica Pods is designed for monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "\"recharge in microwave, reuse forever.\""
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-08"
    ]
  },
  {
    "id": "shoe-fresh-desiccant-inserts",
    "catalogNumber": 81,
    "slug": "shoe-fresh-desiccant-inserts",
    "name": "Shoe-Fresh Desiccant Inserts",
    "track": "Freshness & Moisture Control (VCI / desiccant reinvention)",
    "categorySlug": "freshness-and-moisture-control-vci-desiccant-reinvention",
    "b2bOrigin": "Benz desiccants.",
    "userProblem": "Desiccant + deodorizer shoe inserts.",
    "b2cInnovation": "Desiccant + deodorizer shoe inserts.",
    "format": "Freshness product",
    "signal": "Bluapple's ethylene absorber states it keeps produce fresh 2–3x longer and is an Amazon best-seller; Daiso Korea's ₩1,000 hanging dehumidifier bag (ranking #34, 4.8 stars) is an expat cult item. This is Benz Packaging's single strongest B2B→B2C bridge — desiccants, VCI, and barrier films are core Benz products.",
    "aisle": "Freshness & Moisture Control (VCI / desiccant reinvention)",
    "audience": "monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Shoe-Fresh Desiccant Inserts is a freshness product for desiccant + deodorizer shoe inserts.",
    "demandSignal": "Bluapple's ethylene absorber states it keeps produce fresh 2–3x longer and is an Amazon best-seller; Daiso Korea's ₩1,000 hanging dehumidifier bag (ranking #34, 4.8 stars) is an expat cult item. This is Benz Packaging's single strongest B2B→B2C bridge — desiccants, VCI, and barrier films are core Benz products.",
    "origin": "Global packaging retail",
    "benefits": [
      "Desiccant + deodorizer shoe inserts.",
      "Desiccant + deodorizer shoe inserts.",
      "Built for the freshness & moisture control (vci / desiccant reinvention) aisle.",
      "Consumer-sized format for monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-081"
      },
      {
        "label": "Aisle",
        "value": "Freshness & Moisture Control (VCI / desiccant reinvention)"
      },
      {
        "label": "Format",
        "value": "Freshness product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Benz desiccants."
      }
    ],
    "bundle": [
      "Shoe-Fresh Desiccant Inserts",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Shoe-Fresh Desiccant Inserts?",
        "answer": "Shoe-Fresh Desiccant Inserts is a Toreso freshness product made for desiccant + deodorizer shoe inserts."
      },
      {
        "question": "Who should use Shoe-Fresh Desiccant Inserts?",
        "answer": "Shoe-Fresh Desiccant Inserts is designed for monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Desiccant + deodorizer shoe inserts."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-08"
    ]
  },
  {
    "id": "camera-electronics-dry-pods",
    "catalogNumber": 82,
    "slug": "camera-electronics-dry-pods",
    "name": "Camera/Electronics Dry Pods",
    "track": "Freshness & Moisture Control (VCI / desiccant reinvention)",
    "categorySlug": "freshness-and-moisture-control-vci-desiccant-reinvention",
    "b2bOrigin": "Benz anti-humidity range.",
    "userProblem": "Silica pods for camera bags/electronics.",
    "b2cInnovation": "Silica pods for camera bags/electronics.",
    "format": "Freshness product",
    "signal": "Bluapple's ethylene absorber states it keeps produce fresh 2–3x longer and is an Amazon best-seller; Daiso Korea's ₩1,000 hanging dehumidifier bag (ranking #34, 4.8 stars) is an expat cult item. This is Benz Packaging's single strongest B2B→B2C bridge — desiccants, VCI, and barrier films are core Benz products.",
    "aisle": "Freshness & Moisture Control (VCI / desiccant reinvention)",
    "audience": "monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Camera/Electronics Dry Pods is a freshness product for silica pods for camera bags/electronics.",
    "demandSignal": "Bluapple's ethylene absorber states it keeps produce fresh 2–3x longer and is an Amazon best-seller; Daiso Korea's ₩1,000 hanging dehumidifier bag (ranking #34, 4.8 stars) is an expat cult item. This is Benz Packaging's single strongest B2B→B2C bridge — desiccants, VCI, and barrier films are core Benz products.",
    "origin": "Global packaging retail",
    "benefits": [
      "Silica pods for camera bags/electronics.",
      "Silica pods for camera bags/electronics.",
      "Built for the freshness & moisture control (vci / desiccant reinvention) aisle.",
      "Consumer-sized format for monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-082"
      },
      {
        "label": "Aisle",
        "value": "Freshness & Moisture Control (VCI / desiccant reinvention)"
      },
      {
        "label": "Format",
        "value": "Freshness product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Benz anti-humidity range."
      }
    ],
    "bundle": [
      "Camera/Electronics Dry Pods",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Camera/Electronics Dry Pods?",
        "answer": "Camera/Electronics Dry Pods is a Toreso freshness product made for silica pods for camera bags/electronics."
      },
      {
        "question": "Who should use Camera/Electronics Dry Pods?",
        "answer": "Camera/Electronics Dry Pods is designed for monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Silica pods for camera bags/electronics."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-08"
    ]
  },
  {
    "id": "toreso-spice-pantry-dry-sachets",
    "catalogNumber": 83,
    "slug": "toreso-spice-pantry-dry-sachets",
    "name": "Toreso Spice/Pantry Dry Sachets",
    "track": "Freshness & Moisture Control (VCI / desiccant reinvention)",
    "categorySlug": "freshness-and-moisture-control-vci-desiccant-reinvention",
    "b2bOrigin": "Benz desiccants.",
    "userProblem": "Food-safe desiccant sachets for humid Indian pantries (prevents clumping).",
    "b2cInnovation": "Food-safe desiccant sachets for humid Indian pantries (prevents clumping).",
    "format": "Freshness product",
    "signal": "Bluapple's ethylene absorber states it keeps produce fresh 2–3x longer and is an Amazon best-seller; Daiso Korea's ₩1,000 hanging dehumidifier bag (ranking #34, 4.8 stars) is an expat cult item. This is Benz Packaging's single strongest B2B→B2C bridge — desiccants, VCI, and barrier films are core Benz products.",
    "aisle": "Freshness & Moisture Control (VCI / desiccant reinvention)",
    "audience": "monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Spice/Pantry Dry Sachets is a freshness product for food-safe desiccant sachets for humid indian pantries (prevents clumping).",
    "demandSignal": "Bluapple's ethylene absorber states it keeps produce fresh 2–3x longer and is an Amazon best-seller; Daiso Korea's ₩1,000 hanging dehumidifier bag (ranking #34, 4.8 stars) is an expat cult item. This is Benz Packaging's single strongest B2B→B2C bridge — desiccants, VCI, and barrier films are core Benz products.",
    "origin": "India-relevant.",
    "benefits": [
      "Food-safe desiccant sachets for humid Indian pantries (prevents clumping).",
      "Food-safe desiccant sachets for humid Indian pantries (prevents clumping).",
      "Built for the freshness & moisture control (vci / desiccant reinvention) aisle.",
      "Consumer-sized format for monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-083"
      },
      {
        "label": "Aisle",
        "value": "Freshness & Moisture Control (VCI / desiccant reinvention)"
      },
      {
        "label": "Format",
        "value": "Freshness product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "India-relevant."
      },
      {
        "label": "Packaging intelligence",
        "value": "Benz desiccants."
      }
    ],
    "bundle": [
      "Toreso Spice/Pantry Dry Sachets",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Spice/Pantry Dry Sachets?",
        "answer": "Toreso Spice/Pantry Dry Sachets is a Toreso freshness product made for food-safe desiccant sachets for humid indian pantries (prevents clumping)."
      },
      {
        "question": "Who should use Toreso Spice/Pantry Dry Sachets?",
        "answer": "Toreso Spice/Pantry Dry Sachets is designed for monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Food-safe desiccant sachets for humid Indian pantries (prevents clumping)."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-08"
    ]
  },
  {
    "id": "bread-cookie-saver-disc",
    "catalogNumber": 84,
    "slug": "bread-cookie-saver-disc",
    "name": "Bread/Cookie Saver Disc",
    "track": "Freshness & Moisture Control (VCI / desiccant reinvention)",
    "categorySlug": "freshness-and-moisture-control-vci-desiccant-reinvention",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Terracotta disc that keeps baked goods fresh.",
    "b2cInnovation": "Terracotta disc that keeps baked goods fresh.",
    "format": "Freshness product",
    "signal": "Bluapple's ethylene absorber states it keeps produce fresh 2–3x longer and is an Amazon best-seller; Daiso Korea's ₩1,000 hanging dehumidifier bag (ranking #34, 4.8 stars) is an expat cult item. This is Benz Packaging's single strongest B2B→B2C bridge — desiccants, VCI, and barrier films are core Benz products.",
    "aisle": "Freshness & Moisture Control (VCI / desiccant reinvention)",
    "audience": "monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Bread/Cookie Saver Disc is a freshness product for terracotta disc that keeps baked goods fresh.",
    "demandSignal": "\"Cookie Saver\" Amazon staple.",
    "origin": "Global packaging retail",
    "benefits": [
      "Terracotta disc that keeps baked goods fresh.",
      "Terracotta disc that keeps baked goods fresh.",
      "Demand signal: \"Cookie Saver\" Amazon staple.",
      "Consumer-sized format for monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-084"
      },
      {
        "label": "Aisle",
        "value": "Freshness & Moisture Control (VCI / desiccant reinvention)"
      },
      {
        "label": "Format",
        "value": "Freshness product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Bread/Cookie Saver Disc",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Bread/Cookie Saver Disc?",
        "answer": "Bread/Cookie Saver Disc is a Toreso freshness product made for terracotta disc that keeps baked goods fresh."
      },
      {
        "question": "Who should use Bread/Cookie Saver Disc?",
        "answer": "Bread/Cookie Saver Disc is designed for monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Terracotta disc that keeps baked goods fresh."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-08"
    ]
  },
  {
    "id": "toreso-document-valuables-dry-safe-box",
    "catalogNumber": 85,
    "slug": "toreso-document-valuables-dry-safe-box",
    "name": "Toreso Document/Valuables Dry-Safe Box",
    "track": "Freshness & Moisture Control (VCI / desiccant reinvention)",
    "categorySlug": "freshness-and-moisture-control-vci-desiccant-reinvention",
    "b2bOrigin": "Benz barrier-film + desiccant.",
    "userProblem": "Airtight box with humidity indicator for documents/electronics.",
    "b2cInnovation": "Airtight box with humidity indicator for documents/electronics.",
    "format": "Rigid storage",
    "signal": "Bluapple's ethylene absorber states it keeps produce fresh 2–3x longer and is an Amazon best-seller; Daiso Korea's ₩1,000 hanging dehumidifier bag (ranking #34, 4.8 stars) is an expat cult item. This is Benz Packaging's single strongest B2B→B2C bridge — desiccants, VCI, and barrier films are core Benz products.",
    "aisle": "Freshness & Moisture Control (VCI / desiccant reinvention)",
    "audience": "monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries",
    "priceRange": "mid.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Document/Valuables Dry-Safe Box is a rigid storage for airtight box with humidity indicator for documents/electronics.",
    "demandSignal": "Temu humidity-monitoring box.",
    "origin": "Global packaging retail",
    "benefits": [
      "Airtight box with humidity indicator for documents/electronics.",
      "Airtight box with humidity indicator for documents/electronics.",
      "Demand signal: Temu humidity-monitoring box.",
      "Consumer-sized format for monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-085"
      },
      {
        "label": "Aisle",
        "value": "Freshness & Moisture Control (VCI / desiccant reinvention)"
      },
      {
        "label": "Format",
        "value": "Rigid storage"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Benz barrier-film + desiccant."
      }
    ],
    "bundle": [
      "Toreso Document/Valuables Dry-Safe Box",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Document/Valuables Dry-Safe Box?",
        "answer": "Toreso Document/Valuables Dry-Safe Box is a Toreso rigid storage made for airtight box with humidity indicator for documents/electronics."
      },
      {
        "question": "Who should use Toreso Document/Valuables Dry-Safe Box?",
        "answer": "Toreso Document/Valuables Dry-Safe Box is designed for monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Airtight box with humidity indicator for documents/electronics."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-08"
    ]
  },
  {
    "id": "tool-cutlery-anti-rust-strips-home",
    "catalogNumber": 86,
    "slug": "tool-cutlery-anti-rust-strips-home",
    "name": "Tool/Cutlery Anti-Rust Strips (home)",
    "track": "Freshness & Moisture Control (VCI / desiccant reinvention)",
    "categorySlug": "freshness-and-moisture-control-vci-desiccant-reinvention",
    "b2bOrigin": "Benz VCI emitters/chips.",
    "userProblem": "VCI strips for toolboxes/cutlery drawers (consumer pack).",
    "b2cInnovation": "VCI strips for toolboxes/cutlery drawers (consumer pack).",
    "format": "Reusable tool",
    "signal": "Bluapple's ethylene absorber states it keeps produce fresh 2–3x longer and is an Amazon best-seller; Daiso Korea's ₩1,000 hanging dehumidifier bag (ranking #34, 4.8 stars) is an expat cult item. This is Benz Packaging's single strongest B2B→B2C bridge — desiccants, VCI, and barrier films are core Benz products.",
    "aisle": "Freshness & Moisture Control (VCI / desiccant reinvention)",
    "audience": "monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries",
    "priceRange": "impulse-mid.",
    "launchPriority": "Future drop",
    "heroLine": "Tool/Cutlery Anti-Rust Strips (home) is a reusable tool for vci strips for toolboxes/cutlery drawers (consumer pack).",
    "demandSignal": "Bluapple's ethylene absorber states it keeps produce fresh 2–3x longer and is an Amazon best-seller; Daiso Korea's ₩1,000 hanging dehumidifier bag (ranking #34, 4.8 stars) is an expat cult item. This is Benz Packaging's single strongest B2B→B2C bridge — desiccants, VCI, and barrier films are core Benz products.",
    "origin": "Global packaging retail",
    "benefits": [
      "VCI strips for toolboxes/cutlery drawers (consumer pack).",
      "VCI strips for toolboxes/cutlery drawers (consumer pack).",
      "Built for the freshness & moisture control (vci / desiccant reinvention) aisle.",
      "Consumer-sized format for monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-086"
      },
      {
        "label": "Aisle",
        "value": "Freshness & Moisture Control (VCI / desiccant reinvention)"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Benz VCI emitters/chips."
      }
    ],
    "bundle": [
      "Tool/Cutlery Anti-Rust Strips (home)",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Tool/Cutlery Anti-Rust Strips (home)?",
        "answer": "Tool/Cutlery Anti-Rust Strips (home) is a Toreso reusable tool made for vci strips for toolboxes/cutlery drawers (consumer pack)."
      },
      {
        "question": "Who should use Tool/Cutlery Anti-Rust Strips (home)?",
        "answer": "Tool/Cutlery Anti-Rust Strips (home) is designed for monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "VCI strips for toolboxes/cutlery drawers (consumer pack)."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-08"
    ]
  },
  {
    "id": "toreso-fridge-deodorizer-box",
    "catalogNumber": 87,
    "slug": "toreso-fridge-deodorizer-box",
    "name": "Toreso Fridge Deodorizer Box",
    "track": "Freshness & Moisture Control (VCI / desiccant reinvention)",
    "categorySlug": "freshness-and-moisture-control-vci-desiccant-reinvention",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Charcoal/baking-soda fridge odor box.",
    "b2cInnovation": "Charcoal/baking-soda fridge odor box.",
    "format": "Rigid storage",
    "signal": "Bluapple's ethylene absorber states it keeps produce fresh 2–3x longer and is an Amazon best-seller; Daiso Korea's ₩1,000 hanging dehumidifier bag (ranking #34, 4.8 stars) is an expat cult item. This is Benz Packaging's single strongest B2B→B2C bridge — desiccants, VCI, and barrier films are core Benz products.",
    "aisle": "Freshness & Moisture Control (VCI / desiccant reinvention)",
    "audience": "monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Fridge Deodorizer Box is a rigid storage for charcoal/baking-soda fridge odor box.",
    "demandSignal": "Bluapple's ethylene absorber states it keeps produce fresh 2–3x longer and is an Amazon best-seller; Daiso Korea's ₩1,000 hanging dehumidifier bag (ranking #34, 4.8 stars) is an expat cult item. This is Benz Packaging's single strongest B2B→B2C bridge — desiccants, VCI, and barrier films are core Benz products.",
    "origin": "Global packaging retail",
    "benefits": [
      "Charcoal/baking-soda fridge odor box.",
      "Charcoal/baking-soda fridge odor box.",
      "Built for the freshness & moisture control (vci / desiccant reinvention) aisle.",
      "Consumer-sized format for monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-087"
      },
      {
        "label": "Aisle",
        "value": "Freshness & Moisture Control (VCI / desiccant reinvention)"
      },
      {
        "label": "Format",
        "value": "Rigid storage"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Fridge Deodorizer Box",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Fridge Deodorizer Box?",
        "answer": "Toreso Fridge Deodorizer Box is a Toreso rigid storage made for charcoal/baking-soda fridge odor box."
      },
      {
        "question": "Who should use Toreso Fridge Deodorizer Box?",
        "answer": "Toreso Fridge Deodorizer Box is designed for monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Charcoal/baking-soda fridge odor box."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-08"
    ]
  },
  {
    "id": "wardrobe-anti-damp-anti-moth-pack",
    "catalogNumber": 88,
    "slug": "wardrobe-anti-damp-anti-moth-pack",
    "name": "Wardrobe Anti-Damp + Anti-Moth Pack",
    "track": "Freshness & Moisture Control (VCI / desiccant reinvention)",
    "categorySlug": "freshness-and-moisture-control-vci-desiccant-reinvention",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Combo moisture + cedar moth protection.",
    "b2cInnovation": "Combo moisture + cedar moth protection.",
    "format": "Starter kit",
    "signal": "Bluapple's ethylene absorber states it keeps produce fresh 2–3x longer and is an Amazon best-seller; Daiso Korea's ₩1,000 hanging dehumidifier bag (ranking #34, 4.8 stars) is an expat cult item. This is Benz Packaging's single strongest B2B→B2C bridge — desiccants, VCI, and barrier films are core Benz products.",
    "aisle": "Freshness & Moisture Control (VCI / desiccant reinvention)",
    "audience": "monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Wardrobe Anti-Damp + Anti-Moth Pack is a starter kit for combo moisture + cedar moth protection.",
    "demandSignal": "Bluapple's ethylene absorber states it keeps produce fresh 2–3x longer and is an Amazon best-seller; Daiso Korea's ₩1,000 hanging dehumidifier bag (ranking #34, 4.8 stars) is an expat cult item. This is Benz Packaging's single strongest B2B→B2C bridge — desiccants, VCI, and barrier films are core Benz products.",
    "origin": "Global packaging retail",
    "benefits": [
      "Combo moisture + cedar moth protection.",
      "Combo moisture + cedar moth protection.",
      "Built for the freshness & moisture control (vci / desiccant reinvention) aisle.",
      "Consumer-sized format for monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-088"
      },
      {
        "label": "Aisle",
        "value": "Freshness & Moisture Control (VCI / desiccant reinvention)"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Wardrobe Anti-Damp + Anti-Moth Pack",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Wardrobe Anti-Damp + Anti-Moth Pack?",
        "answer": "Wardrobe Anti-Damp + Anti-Moth Pack is a Toreso starter kit made for combo moisture + cedar moth protection."
      },
      {
        "question": "Who should use Wardrobe Anti-Damp + Anti-Moth Pack?",
        "answer": "Wardrobe Anti-Damp + Anti-Moth Pack is designed for monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Combo moisture + cedar moth protection."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-08"
    ]
  },
  {
    "id": "toreso-shineguard-pouch",
    "catalogNumber": 89,
    "slug": "toreso-shineguard-pouch",
    "name": "Toreso ShineGuard Pouch",
    "track": "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)",
    "categorySlug": "jewelry-silver-and-small-valuables-protection-vci-anti-tarnish-reinvention",
    "b2bOrigin": "Benz VCI/anti-corrosion film, consumerized into cute pouches.",
    "userProblem": "Anti-tarnish zip pouch that neutralizes corrosive gases to keep silver/gold bright for years.",
    "b2cInnovation": "Anti-tarnish zip pouch that neutralizes corrosive gases to keep silver/gold bright for years.",
    "format": "Flexible pack",
    "signal": "anti-tarnish bags using Intercept/Corrosion Intercept polymers (originally developed by AT&T/Lucent Technologies) protect silver for up to 3 years and are jewelry-industry standard; consumer multi-packs (Rosenthal, Simple Shine, Hagerty) are Amazon best-sellers. Benz's VCI films are the same anti-corrosion science — a direct reinvention.",
    "aisle": "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)",
    "audience": "jewelry owners, travellers, collectors, silver users, and gift buyers",
    "priceRange": "impulse-mid.",
    "launchPriority": "Premium daily",
    "heroLine": "Toreso ShineGuard Pouch is a flexible pack for anti-tarnish zip pouch that neutralizes corrosive gases to keep silver/gold bright for years.",
    "demandSignal": "Amazon anti-tarnish best-seller category.",
    "origin": "Global packaging retail",
    "benefits": [
      "Anti-tarnish zip pouch that neutralizes corrosive gases to keep silver/gold bright for years.",
      "Anti-tarnish zip pouch that neutralizes corrosive gases to keep silver/gold bright for years.",
      "Demand signal: Amazon anti-tarnish best-seller category.",
      "Consumer-sized format for jewelry owners, travellers, collectors, silver users, and gift buyers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-089"
      },
      {
        "label": "Aisle",
        "value": "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Benz VCI/anti-corrosion film, consumerized into cute pouches."
      }
    ],
    "bundle": [
      "Toreso ShineGuard Pouch",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso ShineGuard Pouch?",
        "answer": "Toreso ShineGuard Pouch is a Toreso flexible pack made for anti-tarnish zip pouch that neutralizes corrosive gases to keep silver/gold bright for years."
      },
      {
        "question": "Who should use Toreso ShineGuard Pouch?",
        "answer": "Toreso ShineGuard Pouch is designed for jewelry owners, travellers, collectors, silver users, and gift buyers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Anti-tarnish zip pouch that neutralizes corrosive gases to keep silver/gold bright for years."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-09"
    ]
  },
  {
    "id": "shineguard-strips",
    "catalogNumber": 90,
    "slug": "shineguard-strips",
    "name": "ShineGuard Strips",
    "track": "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)",
    "categorySlug": "jewelry-silver-and-small-valuables-protection-vci-anti-tarnish-reinvention",
    "b2bOrigin": "Benz VCI emitter chips.",
    "userProblem": "Drop-in anti-tarnish tabs for jewelry boxes.",
    "b2cInnovation": "Drop-in anti-tarnish tabs for jewelry boxes.",
    "format": "Jewelry, Silver product",
    "signal": "anti-tarnish bags using Intercept/Corrosion Intercept polymers (originally developed by AT&T/Lucent Technologies) protect silver for up to 3 years and are jewelry-industry standard; consumer multi-packs (Rosenthal, Simple Shine, Hagerty) are Amazon best-sellers. Benz's VCI films are the same anti-corrosion science — a direct reinvention.",
    "aisle": "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)",
    "audience": "jewelry owners, travellers, collectors, silver users, and gift buyers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "ShineGuard Strips is a jewelry, silver product for drop-in anti-tarnish tabs for jewelry boxes.",
    "demandSignal": "anti-tarnish bags using Intercept/Corrosion Intercept polymers (originally developed by AT&T/Lucent Technologies) protect silver for up to 3 years and are jewelry-industry standard; consumer multi-packs (Rosenthal, Simple Shine, Hagerty) are Amazon best-sellers. Benz's VCI films are the same anti-corrosion science — a direct reinvention.",
    "origin": "Global packaging retail",
    "benefits": [
      "Drop-in anti-tarnish tabs for jewelry boxes.",
      "Drop-in anti-tarnish tabs for jewelry boxes.",
      "Built for the jewelry, silver & small-valuables protection (vci / anti-tarnish reinvention) aisle.",
      "Consumer-sized format for jewelry owners, travellers, collectors, silver users, and gift buyers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-090"
      },
      {
        "label": "Aisle",
        "value": "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)"
      },
      {
        "label": "Format",
        "value": "Jewelry, Silver product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Benz VCI emitter chips."
      }
    ],
    "bundle": [
      "ShineGuard Strips",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is ShineGuard Strips?",
        "answer": "ShineGuard Strips is a Toreso jewelry, silver product made for drop-in anti-tarnish tabs for jewelry boxes."
      },
      {
        "question": "Who should use ShineGuard Strips?",
        "answer": "ShineGuard Strips is designed for jewelry owners, travellers, collectors, silver users, and gift buyers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Drop-in anti-tarnish tabs for jewelry boxes."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-09"
    ]
  },
  {
    "id": "shineguard-travel-roll",
    "catalogNumber": 91,
    "slug": "shineguard-travel-roll",
    "name": "ShineGuard Travel Roll",
    "track": "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)",
    "categorySlug": "jewelry-silver-and-small-valuables-protection-vci-anti-tarnish-reinvention",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Roll-up jewelry organizer with anti-tarnish lining.",
    "b2cInnovation": "Roll-up jewelry organizer with anti-tarnish lining.",
    "format": "Jewelry, Silver product",
    "signal": "anti-tarnish bags using Intercept/Corrosion Intercept polymers (originally developed by AT&T/Lucent Technologies) protect silver for up to 3 years and are jewelry-industry standard; consumer multi-packs (Rosenthal, Simple Shine, Hagerty) are Amazon best-sellers. Benz's VCI films are the same anti-corrosion science — a direct reinvention.",
    "aisle": "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)",
    "audience": "jewelry owners, travellers, collectors, silver users, and gift buyers",
    "priceRange": "mid.",
    "launchPriority": "Premium daily",
    "heroLine": "ShineGuard Travel Roll is a jewelry, silver product for roll-up jewelry organizer with anti-tarnish lining.",
    "demandSignal": "anti-tarnish bags using Intercept/Corrosion Intercept polymers (originally developed by AT&T/Lucent Technologies) protect silver for up to 3 years and are jewelry-industry standard; consumer multi-packs (Rosenthal, Simple Shine, Hagerty) are Amazon best-sellers. Benz's VCI films are the same anti-corrosion science — a direct reinvention.",
    "origin": "Global packaging retail",
    "benefits": [
      "Roll-up jewelry organizer with anti-tarnish lining.",
      "Roll-up jewelry organizer with anti-tarnish lining.",
      "Built for the jewelry, silver & small-valuables protection (vci / anti-tarnish reinvention) aisle.",
      "Consumer-sized format for jewelry owners, travellers, collectors, silver users, and gift buyers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-091"
      },
      {
        "label": "Aisle",
        "value": "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)"
      },
      {
        "label": "Format",
        "value": "Jewelry, Silver product"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "ShineGuard Travel Roll",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is ShineGuard Travel Roll?",
        "answer": "ShineGuard Travel Roll is a Toreso jewelry, silver product made for roll-up jewelry organizer with anti-tarnish lining."
      },
      {
        "question": "Who should use ShineGuard Travel Roll?",
        "answer": "ShineGuard Travel Roll is designed for jewelry owners, travellers, collectors, silver users, and gift buyers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Roll-up jewelry organizer with anti-tarnish lining."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-09"
    ]
  },
  {
    "id": "toreso-earring-capsule-book",
    "catalogNumber": 92,
    "slug": "toreso-earring-capsule-book",
    "name": "Toreso Earring Capsule Book",
    "track": "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)",
    "categorySlug": "jewelry-silver-and-small-valuables-protection-vci-anti-tarnish-reinvention",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Clear page-book for earring pairs.",
    "b2cInnovation": "Clear page-book for earring pairs.",
    "format": "Reusable tool",
    "signal": "anti-tarnish bags using Intercept/Corrosion Intercept polymers (originally developed by AT&T/Lucent Technologies) protect silver for up to 3 years and are jewelry-industry standard; consumer multi-packs (Rosenthal, Simple Shine, Hagerty) are Amazon best-sellers. Benz's VCI films are the same anti-corrosion science — a direct reinvention.",
    "aisle": "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)",
    "audience": "jewelry owners, travellers, collectors, silver users, and gift buyers",
    "priceRange": "impulse-mid.",
    "launchPriority": "Premium daily",
    "heroLine": "Toreso Earring Capsule Book is a reusable tool for clear page-book for earring pairs.",
    "demandSignal": "viral jewelry-organization.",
    "origin": "Global packaging retail",
    "benefits": [
      "Clear page-book for earring pairs.",
      "Clear page-book for earring pairs.",
      "Demand signal: viral jewelry-organization.",
      "Consumer-sized format for jewelry owners, travellers, collectors, silver users, and gift buyers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-092"
      },
      {
        "label": "Aisle",
        "value": "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Earring Capsule Book",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Earring Capsule Book?",
        "answer": "Toreso Earring Capsule Book is a Toreso reusable tool made for clear page-book for earring pairs."
      },
      {
        "question": "Who should use Toreso Earring Capsule Book?",
        "answer": "Toreso Earring Capsule Book is designed for jewelry owners, travellers, collectors, silver users, and gift buyers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Clear page-book for earring pairs."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-09"
    ]
  },
  {
    "id": "ring-travel-pods",
    "catalogNumber": 93,
    "slug": "ring-travel-pods",
    "name": "Ring Travel Pods",
    "track": "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)",
    "categorySlug": "jewelry-silver-and-small-valuables-protection-vci-anti-tarnish-reinvention",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Mini screw-cap pods for rings.",
    "b2cInnovation": "Mini screw-cap pods for rings.",
    "format": "Jewelry, Silver product",
    "signal": "anti-tarnish bags using Intercept/Corrosion Intercept polymers (originally developed by AT&T/Lucent Technologies) protect silver for up to 3 years and are jewelry-industry standard; consumer multi-packs (Rosenthal, Simple Shine, Hagerty) are Amazon best-sellers. Benz's VCI films are the same anti-corrosion science — a direct reinvention.",
    "aisle": "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)",
    "audience": "jewelry owners, travellers, collectors, silver users, and gift buyers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Ring Travel Pods is a jewelry, silver product for mini screw-cap pods for rings.",
    "demandSignal": "anti-tarnish bags using Intercept/Corrosion Intercept polymers (originally developed by AT&T/Lucent Technologies) protect silver for up to 3 years and are jewelry-industry standard; consumer multi-packs (Rosenthal, Simple Shine, Hagerty) are Amazon best-sellers. Benz's VCI films are the same anti-corrosion science — a direct reinvention.",
    "origin": "Global packaging retail",
    "benefits": [
      "Mini screw-cap pods for rings.",
      "Mini screw-cap pods for rings.",
      "Built for the jewelry, silver & small-valuables protection (vci / anti-tarnish reinvention) aisle.",
      "Consumer-sized format for jewelry owners, travellers, collectors, silver users, and gift buyers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-093"
      },
      {
        "label": "Aisle",
        "value": "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)"
      },
      {
        "label": "Format",
        "value": "Jewelry, Silver product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Ring Travel Pods",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Ring Travel Pods?",
        "answer": "Ring Travel Pods is a Toreso jewelry, silver product made for mini screw-cap pods for rings."
      },
      {
        "question": "Who should use Ring Travel Pods?",
        "answer": "Ring Travel Pods is designed for jewelry owners, travellers, collectors, silver users, and gift buyers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Mini screw-cap pods for rings."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-09"
    ]
  },
  {
    "id": "anti-tarnish-flatware-roll",
    "catalogNumber": 94,
    "slug": "anti-tarnish-flatware-roll",
    "name": "Anti-Tarnish Flatware Roll",
    "track": "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)",
    "categorySlug": "jewelry-silver-and-small-valuables-protection-vci-anti-tarnish-reinvention",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Silvercloth roll for cutlery/silverware.",
    "b2cInnovation": "Silvercloth roll for cutlery/silverware.",
    "format": "Jewelry, Silver product",
    "signal": "anti-tarnish bags using Intercept/Corrosion Intercept polymers (originally developed by AT&T/Lucent Technologies) protect silver for up to 3 years and are jewelry-industry standard; consumer multi-packs (Rosenthal, Simple Shine, Hagerty) are Amazon best-sellers. Benz's VCI films are the same anti-corrosion science — a direct reinvention.",
    "aisle": "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)",
    "audience": "jewelry owners, travellers, collectors, silver users, and gift buyers",
    "priceRange": "mid.",
    "launchPriority": "Future drop",
    "heroLine": "Anti-Tarnish Flatware Roll is a jewelry, silver product for silvercloth roll for cutlery/silverware.",
    "demandSignal": "anti-tarnish bags using Intercept/Corrosion Intercept polymers (originally developed by AT&T/Lucent Technologies) protect silver for up to 3 years and are jewelry-industry standard; consumer multi-packs (Rosenthal, Simple Shine, Hagerty) are Amazon best-sellers. Benz's VCI films are the same anti-corrosion science — a direct reinvention.",
    "origin": "Global packaging retail",
    "benefits": [
      "Silvercloth roll for cutlery/silverware.",
      "Silvercloth roll for cutlery/silverware.",
      "Built for the jewelry, silver & small-valuables protection (vci / anti-tarnish reinvention) aisle.",
      "Consumer-sized format for jewelry owners, travellers, collectors, silver users, and gift buyers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-094"
      },
      {
        "label": "Aisle",
        "value": "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)"
      },
      {
        "label": "Format",
        "value": "Jewelry, Silver product"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Anti-Tarnish Flatware Roll",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Anti-Tarnish Flatware Roll?",
        "answer": "Anti-Tarnish Flatware Roll is a Toreso jewelry, silver product made for silvercloth roll for cutlery/silverware."
      },
      {
        "question": "Who should use Anti-Tarnish Flatware Roll?",
        "answer": "Anti-Tarnish Flatware Roll is designed for jewelry owners, travellers, collectors, silver users, and gift buyers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Silvercloth roll for cutlery/silverware."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-09"
    ]
  },
  {
    "id": "toreso-watch-coin-capsules",
    "catalogNumber": 95,
    "slug": "toreso-watch-coin-capsules",
    "name": "Toreso Watch/Coin Capsules",
    "track": "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)",
    "categorySlug": "jewelry-silver-and-small-valuables-protection-vci-anti-tarnish-reinvention",
    "b2bOrigin": "Benz VCI.",
    "userProblem": "Anti-corrosion capsules for watches/coins.",
    "b2cInnovation": "Anti-corrosion capsules for watches/coins.",
    "format": "Reusable tool",
    "signal": "anti-tarnish bags using Intercept/Corrosion Intercept polymers (originally developed by AT&T/Lucent Technologies) protect silver for up to 3 years and are jewelry-industry standard; consumer multi-packs (Rosenthal, Simple Shine, Hagerty) are Amazon best-sellers. Benz's VCI films are the same anti-corrosion science — a direct reinvention.",
    "aisle": "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)",
    "audience": "jewelry owners, travellers, collectors, silver users, and gift buyers",
    "priceRange": "impulse-mid.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Watch/Coin Capsules is a reusable tool for anti-corrosion capsules for watches/coins.",
    "demandSignal": "anti-tarnish bags using Intercept/Corrosion Intercept polymers (originally developed by AT&T/Lucent Technologies) protect silver for up to 3 years and are jewelry-industry standard; consumer multi-packs (Rosenthal, Simple Shine, Hagerty) are Amazon best-sellers. Benz's VCI films are the same anti-corrosion science — a direct reinvention.",
    "origin": "Global packaging retail",
    "benefits": [
      "Anti-corrosion capsules for watches/coins.",
      "Anti-corrosion capsules for watches/coins.",
      "Built for the jewelry, silver & small-valuables protection (vci / anti-tarnish reinvention) aisle.",
      "Consumer-sized format for jewelry owners, travellers, collectors, silver users, and gift buyers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-095"
      },
      {
        "label": "Aisle",
        "value": "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Benz VCI."
      }
    ],
    "bundle": [
      "Toreso Watch/Coin Capsules",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Watch/Coin Capsules?",
        "answer": "Toreso Watch/Coin Capsules is a Toreso reusable tool made for anti-corrosion capsules for watches/coins."
      },
      {
        "question": "Who should use Toreso Watch/Coin Capsules?",
        "answer": "Toreso Watch/Coin Capsules is designed for jewelry owners, travellers, collectors, silver users, and gift buyers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Anti-corrosion capsules for watches/coins."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-09"
    ]
  },
  {
    "id": "bead-small-parts-organizer",
    "catalogNumber": 96,
    "slug": "bead-small-parts-organizer",
    "name": "Bead/Small-Parts Organizer",
    "track": "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)",
    "categorySlug": "jewelry-silver-and-small-valuables-protection-vci-anti-tarnish-reinvention",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Mini compartment case for beads/findings.",
    "b2cInnovation": "Mini compartment case for beads/findings.",
    "format": "Jewelry, Silver product",
    "signal": "anti-tarnish bags using Intercept/Corrosion Intercept polymers (originally developed by AT&T/Lucent Technologies) protect silver for up to 3 years and are jewelry-industry standard; consumer multi-packs (Rosenthal, Simple Shine, Hagerty) are Amazon best-sellers. Benz's VCI films are the same anti-corrosion science — a direct reinvention.",
    "aisle": "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)",
    "audience": "jewelry owners, travellers, collectors, silver users, and gift buyers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Bead/Small-Parts Organizer is a jewelry, silver product for mini compartment case for beads/findings.",
    "demandSignal": "Daiso small-parts case haul.",
    "origin": "Global packaging retail",
    "benefits": [
      "Mini compartment case for beads/findings.",
      "Mini compartment case for beads/findings.",
      "Demand signal: Daiso small-parts case haul.",
      "Consumer-sized format for jewelry owners, travellers, collectors, silver users, and gift buyers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-096"
      },
      {
        "label": "Aisle",
        "value": "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)"
      },
      {
        "label": "Format",
        "value": "Jewelry, Silver product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Bead/Small-Parts Organizer",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Bead/Small-Parts Organizer?",
        "answer": "Bead/Small-Parts Organizer is a Toreso jewelry, silver product made for mini compartment case for beads/findings."
      },
      {
        "question": "Who should use Bead/Small-Parts Organizer?",
        "answer": "Bead/Small-Parts Organizer is designed for jewelry owners, travellers, collectors, silver users, and gift buyers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Mini compartment case for beads/findings."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-09"
    ]
  },
  {
    "id": "shineguard-necklace-anti-tangle-tube",
    "catalogNumber": 97,
    "slug": "shineguard-necklace-anti-tangle-tube",
    "name": "ShineGuard Necklace Anti-Tangle Tube",
    "track": "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)",
    "categorySlug": "jewelry-silver-and-small-valuables-protection-vci-anti-tarnish-reinvention",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Tube that threads necklaces to prevent tangling.",
    "b2cInnovation": "Tube that threads necklaces to prevent tangling.",
    "format": "Jewelry, Silver product",
    "signal": "anti-tarnish bags using Intercept/Corrosion Intercept polymers (originally developed by AT&T/Lucent Technologies) protect silver for up to 3 years and are jewelry-industry standard; consumer multi-packs (Rosenthal, Simple Shine, Hagerty) are Amazon best-sellers. Benz's VCI films are the same anti-corrosion science — a direct reinvention.",
    "aisle": "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)",
    "audience": "jewelry owners, travellers, collectors, silver users, and gift buyers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "ShineGuard Necklace Anti-Tangle Tube is a jewelry, silver product for tube that threads necklaces to prevent tangling.",
    "demandSignal": "anti-tarnish bags using Intercept/Corrosion Intercept polymers (originally developed by AT&T/Lucent Technologies) protect silver for up to 3 years and are jewelry-industry standard; consumer multi-packs (Rosenthal, Simple Shine, Hagerty) are Amazon best-sellers. Benz's VCI films are the same anti-corrosion science — a direct reinvention.",
    "origin": "Global packaging retail",
    "benefits": [
      "Tube that threads necklaces to prevent tangling.",
      "Tube that threads necklaces to prevent tangling.",
      "Built for the jewelry, silver & small-valuables protection (vci / anti-tarnish reinvention) aisle.",
      "Consumer-sized format for jewelry owners, travellers, collectors, silver users, and gift buyers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-097"
      },
      {
        "label": "Aisle",
        "value": "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)"
      },
      {
        "label": "Format",
        "value": "Jewelry, Silver product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "ShineGuard Necklace Anti-Tangle Tube",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is ShineGuard Necklace Anti-Tangle Tube?",
        "answer": "ShineGuard Necklace Anti-Tangle Tube is a Toreso jewelry, silver product made for tube that threads necklaces to prevent tangling."
      },
      {
        "question": "Who should use ShineGuard Necklace Anti-Tangle Tube?",
        "answer": "ShineGuard Necklace Anti-Tangle Tube is designed for jewelry owners, travellers, collectors, silver users, and gift buyers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Tube that threads necklaces to prevent tangling."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-09"
    ]
  },
  {
    "id": "sim-sd-memory-card-case",
    "catalogNumber": 98,
    "slug": "sim-sd-memory-card-case",
    "name": "SIM/SD/Memory Card Case",
    "track": "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)",
    "categorySlug": "jewelry-silver-and-small-valuables-protection-vci-anti-tarnish-reinvention",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Tiny waterproof card vault.",
    "b2cInnovation": "Tiny waterproof card vault.",
    "format": "Jewelry, Silver product",
    "signal": "anti-tarnish bags using Intercept/Corrosion Intercept polymers (originally developed by AT&T/Lucent Technologies) protect silver for up to 3 years and are jewelry-industry standard; consumer multi-packs (Rosenthal, Simple Shine, Hagerty) are Amazon best-sellers. Benz's VCI films are the same anti-corrosion science — a direct reinvention.",
    "aisle": "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)",
    "audience": "jewelry owners, travellers, collectors, silver users, and gift buyers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "SIM/SD/Memory Card Case is a jewelry, silver product for tiny waterproof card vault.",
    "demandSignal": "anti-tarnish bags using Intercept/Corrosion Intercept polymers (originally developed by AT&T/Lucent Technologies) protect silver for up to 3 years and are jewelry-industry standard; consumer multi-packs (Rosenthal, Simple Shine, Hagerty) are Amazon best-sellers. Benz's VCI films are the same anti-corrosion science — a direct reinvention.",
    "origin": "Global packaging retail",
    "benefits": [
      "Tiny waterproof card vault.",
      "Tiny waterproof card vault.",
      "Built for the jewelry, silver & small-valuables protection (vci / anti-tarnish reinvention) aisle.",
      "Consumer-sized format for jewelry owners, travellers, collectors, silver users, and gift buyers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-098"
      },
      {
        "label": "Aisle",
        "value": "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)"
      },
      {
        "label": "Format",
        "value": "Jewelry, Silver product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "SIM/SD/Memory Card Case",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is SIM/SD/Memory Card Case?",
        "answer": "SIM/SD/Memory Card Case is a Toreso jewelry, silver product made for tiny waterproof card vault."
      },
      {
        "question": "Who should use SIM/SD/Memory Card Case?",
        "answer": "SIM/SD/Memory Card Case is designed for jewelry owners, travellers, collectors, silver users, and gift buyers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Tiny waterproof card vault."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-09"
    ]
  },
  {
    "id": "toreso-resellpack-kit",
    "catalogNumber": 99,
    "slug": "toreso-resellpack-kit",
    "name": "Toreso ResellPack Kit",
    "track": "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)",
    "categorySlug": "cushioning-and-shipping-protection-bubble-void-fill-foam-reinvention",
    "b2bOrigin": "Benz mailers + honeycomb paper.",
    "userProblem": "Home shipping kit: kraft mailers + honeycomb wrap + fragile stickers + tape.",
    "b2cInnovation": "Home shipping kit: kraft mailers + honeycomb wrap + fragile stickers + tape.",
    "format": "Starter kit",
    "signal": "Benz already markets honeycomb-cushioned recycled-kraft paper mailers claiming \"65–75% impact absorption comparable to plastic bubble mailers,\" explicitly targeting D2C/subscription/unboxing. Resale/online-selling households need consumer-scale protective packing.",
    "aisle": "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)",
    "audience": "resellers, fragile shippers, gift packers, students, creators, and home movers",
    "priceRange": "mid.",
    "launchPriority": "Core range",
    "heroLine": "Toreso ResellPack Kit is a starter kit for home shipping kit: kraft mailers + honeycomb wrap + fragile stickers + tape.",
    "demandSignal": "reseller economy.",
    "origin": "Global packaging retail",
    "benefits": [
      "Home shipping kit: kraft mailers + honeycomb wrap + fragile stickers + tape.",
      "Home shipping kit: kraft mailers + honeycomb wrap + fragile stickers + tape.",
      "Demand signal: reseller economy.",
      "Consumer-sized format for resellers, fragile shippers, gift packers, students, creators, and home movers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-099"
      },
      {
        "label": "Aisle",
        "value": "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Benz mailers + honeycomb paper."
      }
    ],
    "bundle": [
      "Toreso ResellPack Kit",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso ResellPack Kit?",
        "answer": "Toreso ResellPack Kit is a Toreso starter kit made for home shipping kit: kraft mailers + honeycomb wrap + fragile stickers + tape."
      },
      {
        "question": "Who should use Toreso ResellPack Kit?",
        "answer": "Toreso ResellPack Kit is designed for resellers, fragile shippers, gift packers, students, creators, and home movers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Home shipping kit: kraft mailers + honeycomb wrap + fragile stickers + tape."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-10"
    ]
  },
  {
    "id": "honeywrap-roll",
    "catalogNumber": 100,
    "slug": "honeywrap-roll",
    "name": "HoneyWrap Roll",
    "track": "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)",
    "categorySlug": "cushioning-and-shipping-protection-bubble-void-fill-foam-reinvention",
    "b2bOrigin": "Benz honeycomb wrapping roll.",
    "userProblem": "Expanding honeycomb kraft paper roll that replaces bubble wrap.",
    "b2cInnovation": "Expanding honeycomb kraft paper roll that replaces bubble wrap.",
    "format": "Flexible pack",
    "signal": "Benz already markets honeycomb-cushioned recycled-kraft paper mailers claiming \"65–75% impact absorption comparable to plastic bubble mailers,\" explicitly targeting D2C/subscription/unboxing. Resale/online-selling households need consumer-scale protective packing.",
    "aisle": "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)",
    "audience": "resellers, fragile shippers, gift packers, students, creators, and home movers",
    "priceRange": "mid.",
    "launchPriority": "Core range",
    "heroLine": "HoneyWrap Roll is a flexible pack for expanding honeycomb kraft paper roll that replaces bubble wrap.",
    "demandSignal": "eco-packaging trend.",
    "origin": "Global packaging retail",
    "benefits": [
      "Expanding honeycomb kraft paper roll that replaces bubble wrap.",
      "Expanding honeycomb kraft paper roll that replaces bubble wrap.",
      "Demand signal: eco-packaging trend.",
      "Consumer-sized format for resellers, fragile shippers, gift packers, students, creators, and home movers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-100"
      },
      {
        "label": "Aisle",
        "value": "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Benz honeycomb wrapping roll."
      }
    ],
    "bundle": [
      "HoneyWrap Roll",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is HoneyWrap Roll?",
        "answer": "HoneyWrap Roll is a Toreso flexible pack made for expanding honeycomb kraft paper roll that replaces bubble wrap."
      },
      {
        "question": "Who should use HoneyWrap Roll?",
        "answer": "HoneyWrap Roll is designed for resellers, fragile shippers, gift packers, students, creators, and home movers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Expanding honeycomb kraft paper roll that replaces bubble wrap."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-10"
    ]
  },
  {
    "id": "toreso-pop-air-cushion-mini-pump",
    "catalogNumber": 101,
    "slug": "toreso-pop-air-cushion-mini-pump",
    "name": "Toreso Pop Air Cushion Mini-Pump",
    "track": "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)",
    "categorySlug": "cushioning-and-shipping-protection-bubble-void-fill-foam-reinvention",
    "b2bOrigin": "Benz air-cushion/air-column systems.",
    "userProblem": "Small kit to inflate air-pillow void fill at home.",
    "b2cInnovation": "Small kit to inflate air-pillow void fill at home.",
    "format": "Reusable tool",
    "signal": "Benz already markets honeycomb-cushioned recycled-kraft paper mailers claiming \"65–75% impact absorption comparable to plastic bubble mailers,\" explicitly targeting D2C/subscription/unboxing. Resale/online-selling households need consumer-scale protective packing.",
    "aisle": "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)",
    "audience": "resellers, fragile shippers, gift packers, students, creators, and home movers",
    "priceRange": "mid.",
    "launchPriority": "Core range",
    "heroLine": "Toreso Pop Air Cushion Mini-Pump is a reusable tool for small kit to inflate air-pillow void fill at home.",
    "demandSignal": "Benz already markets honeycomb-cushioned recycled-kraft paper mailers claiming \"65–75% impact absorption comparable to plastic bubble mailers,\" explicitly targeting D2C/subscription/unboxing. Resale/online-selling households need consumer-scale protective packing.",
    "origin": "Global packaging retail",
    "benefits": [
      "Small kit to inflate air-pillow void fill at home.",
      "Small kit to inflate air-pillow void fill at home.",
      "Built for the cushioning & shipping protection (bubble/void-fill/foam reinvention) aisle.",
      "Consumer-sized format for resellers, fragile shippers, gift packers, students, creators, and home movers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-101"
      },
      {
        "label": "Aisle",
        "value": "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Benz air-cushion/air-column systems."
      }
    ],
    "bundle": [
      "Toreso Pop Air Cushion Mini-Pump",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Pop Air Cushion Mini-Pump?",
        "answer": "Toreso Pop Air Cushion Mini-Pump is a Toreso reusable tool made for small kit to inflate air-pillow void fill at home."
      },
      {
        "question": "Who should use Toreso Pop Air Cushion Mini-Pump?",
        "answer": "Toreso Pop Air Cushion Mini-Pump is designed for resellers, fragile shippers, gift packers, students, creators, and home movers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Small kit to inflate air-pillow void fill at home."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-10"
    ]
  },
  {
    "id": "recyclable-paper-void-fill-pack",
    "catalogNumber": 102,
    "slug": "recyclable-paper-void-fill-pack",
    "name": "Recyclable Paper Void-Fill Pack",
    "track": "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)",
    "categorySlug": "cushioning-and-shipping-protection-bubble-void-fill-foam-reinvention",
    "b2bOrigin": "Benz paper void fill.",
    "userProblem": "Crinkle paper void fill for gift/parcel filling.",
    "b2cInnovation": "Crinkle paper void fill for gift/parcel filling.",
    "format": "Starter kit",
    "signal": "Benz already markets honeycomb-cushioned recycled-kraft paper mailers claiming \"65–75% impact absorption comparable to plastic bubble mailers,\" explicitly targeting D2C/subscription/unboxing. Resale/online-selling households need consumer-scale protective packing.",
    "aisle": "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)",
    "audience": "resellers, fragile shippers, gift packers, students, creators, and home movers",
    "priceRange": "impulse-mid.",
    "launchPriority": "Premium daily",
    "heroLine": "Recyclable Paper Void-Fill Pack is a starter kit for crinkle paper void fill for gift/parcel filling.",
    "demandSignal": "Benz already markets honeycomb-cushioned recycled-kraft paper mailers claiming \"65–75% impact absorption comparable to plastic bubble mailers,\" explicitly targeting D2C/subscription/unboxing. Resale/online-selling households need consumer-scale protective packing.",
    "origin": "Global packaging retail",
    "benefits": [
      "Crinkle paper void fill for gift/parcel filling.",
      "Crinkle paper void fill for gift/parcel filling.",
      "Built for the cushioning & shipping protection (bubble/void-fill/foam reinvention) aisle.",
      "Consumer-sized format for resellers, fragile shippers, gift packers, students, creators, and home movers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-102"
      },
      {
        "label": "Aisle",
        "value": "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Benz paper void fill."
      }
    ],
    "bundle": [
      "Recyclable Paper Void-Fill Pack",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Recyclable Paper Void-Fill Pack?",
        "answer": "Recyclable Paper Void-Fill Pack is a Toreso starter kit made for crinkle paper void fill for gift/parcel filling."
      },
      {
        "question": "Who should use Recyclable Paper Void-Fill Pack?",
        "answer": "Recyclable Paper Void-Fill Pack is designed for resellers, fragile shippers, gift packers, students, creators, and home movers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Crinkle paper void fill for gift/parcel filling."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-10"
    ]
  },
  {
    "id": "foam-corner-protectors-consumer",
    "catalogNumber": 103,
    "slug": "foam-corner-protectors-consumer",
    "name": "Foam Corner Protectors (consumer)",
    "track": "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)",
    "categorySlug": "cushioning-and-shipping-protection-bubble-void-fill-foam-reinvention",
    "b2bOrigin": "Benz EPE/EVA foam.",
    "userProblem": "EPE foam corners for shipping frames/electronics.",
    "b2cInnovation": "EPE foam corners for shipping frames/electronics.",
    "format": "Cushioning product",
    "signal": "Benz already markets honeycomb-cushioned recycled-kraft paper mailers claiming \"65–75% impact absorption comparable to plastic bubble mailers,\" explicitly targeting D2C/subscription/unboxing. Resale/online-selling households need consumer-scale protective packing.",
    "aisle": "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)",
    "audience": "resellers, fragile shippers, gift packers, students, creators, and home movers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Foam Corner Protectors (consumer) is a cushioning product for epe foam corners for shipping frames/electronics.",
    "demandSignal": "Benz already markets honeycomb-cushioned recycled-kraft paper mailers claiming \"65–75% impact absorption comparable to plastic bubble mailers,\" explicitly targeting D2C/subscription/unboxing. Resale/online-selling households need consumer-scale protective packing.",
    "origin": "Global packaging retail",
    "benefits": [
      "EPE foam corners for shipping frames/electronics.",
      "EPE foam corners for shipping frames/electronics.",
      "Built for the cushioning & shipping protection (bubble/void-fill/foam reinvention) aisle.",
      "Consumer-sized format for resellers, fragile shippers, gift packers, students, creators, and home movers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-103"
      },
      {
        "label": "Aisle",
        "value": "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)"
      },
      {
        "label": "Format",
        "value": "Cushioning product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Benz EPE/EVA foam."
      }
    ],
    "bundle": [
      "Foam Corner Protectors (consumer)",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Foam Corner Protectors (consumer)?",
        "answer": "Foam Corner Protectors (consumer) is a Toreso cushioning product made for epe foam corners for shipping frames/electronics."
      },
      {
        "question": "Who should use Foam Corner Protectors (consumer)?",
        "answer": "Foam Corner Protectors (consumer) is designed for resellers, fragile shippers, gift packers, students, creators, and home movers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "EPE foam corners for shipping frames/electronics."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-10"
    ]
  },
  {
    "id": "toreso-bottle-shipping-sleeves",
    "catalogNumber": 104,
    "slug": "toreso-bottle-shipping-sleeves",
    "name": "Toreso Bottle Shipping Sleeves",
    "track": "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)",
    "categorySlug": "cushioning-and-shipping-protection-bubble-void-fill-foam-reinvention",
    "b2bOrigin": "Benz foam.",
    "userProblem": "Foam sleeves to ship wine/oil/sauce safely.",
    "b2cInnovation": "Foam sleeves to ship wine/oil/sauce safely.",
    "format": "Flexible pack",
    "signal": "Benz already markets honeycomb-cushioned recycled-kraft paper mailers claiming \"65–75% impact absorption comparable to plastic bubble mailers,\" explicitly targeting D2C/subscription/unboxing. Resale/online-selling households need consumer-scale protective packing.",
    "aisle": "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)",
    "audience": "resellers, fragile shippers, gift packers, students, creators, and home movers",
    "priceRange": "impulse-mid.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Bottle Shipping Sleeves is a flexible pack for foam sleeves to ship wine/oil/sauce safely.",
    "demandSignal": "Benz already markets honeycomb-cushioned recycled-kraft paper mailers claiming \"65–75% impact absorption comparable to plastic bubble mailers,\" explicitly targeting D2C/subscription/unboxing. Resale/online-selling households need consumer-scale protective packing.",
    "origin": "Global packaging retail",
    "benefits": [
      "Foam sleeves to ship wine/oil/sauce safely.",
      "Foam sleeves to ship wine/oil/sauce safely.",
      "Built for the cushioning & shipping protection (bubble/void-fill/foam reinvention) aisle.",
      "Consumer-sized format for resellers, fragile shippers, gift packers, students, creators, and home movers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-104"
      },
      {
        "label": "Aisle",
        "value": "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Benz foam."
      }
    ],
    "bundle": [
      "Toreso Bottle Shipping Sleeves",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Bottle Shipping Sleeves?",
        "answer": "Toreso Bottle Shipping Sleeves is a Toreso flexible pack made for foam sleeves to ship wine/oil/sauce safely."
      },
      {
        "question": "Who should use Toreso Bottle Shipping Sleeves?",
        "answer": "Toreso Bottle Shipping Sleeves is designed for resellers, fragile shippers, gift packers, students, creators, and home movers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Foam sleeves to ship wine/oil/sauce safely."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-10"
    ]
  },
  {
    "id": "reusable-bubble-pouches",
    "catalogNumber": 105,
    "slug": "reusable-bubble-pouches",
    "name": "Reusable Bubble Pouches",
    "track": "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)",
    "categorySlug": "cushioning-and-shipping-protection-bubble-void-fill-foam-reinvention",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Padded reusable zip pouches for repeated shipping.",
    "b2cInnovation": "Padded reusable zip pouches for repeated shipping.",
    "format": "Flexible pack",
    "signal": "Benz already markets honeycomb-cushioned recycled-kraft paper mailers claiming \"65–75% impact absorption comparable to plastic bubble mailers,\" explicitly targeting D2C/subscription/unboxing. Resale/online-selling households need consumer-scale protective packing.",
    "aisle": "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)",
    "audience": "resellers, fragile shippers, gift packers, students, creators, and home movers",
    "priceRange": "impulse-mid.",
    "launchPriority": "Future drop",
    "heroLine": "Reusable Bubble Pouches is a flexible pack for padded reusable zip pouches for repeated shipping.",
    "demandSignal": "Benz already markets honeycomb-cushioned recycled-kraft paper mailers claiming \"65–75% impact absorption comparable to plastic bubble mailers,\" explicitly targeting D2C/subscription/unboxing. Resale/online-selling households need consumer-scale protective packing.",
    "origin": "Global packaging retail",
    "benefits": [
      "Padded reusable zip pouches for repeated shipping.",
      "Padded reusable zip pouches for repeated shipping.",
      "Built for the cushioning & shipping protection (bubble/void-fill/foam reinvention) aisle.",
      "Consumer-sized format for resellers, fragile shippers, gift packers, students, creators, and home movers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-105"
      },
      {
        "label": "Aisle",
        "value": "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Reusable Bubble Pouches",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Reusable Bubble Pouches?",
        "answer": "Reusable Bubble Pouches is a Toreso flexible pack made for padded reusable zip pouches for repeated shipping."
      },
      {
        "question": "Who should use Reusable Bubble Pouches?",
        "answer": "Reusable Bubble Pouches is designed for resellers, fragile shippers, gift packers, students, creators, and home movers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Padded reusable zip pouches for repeated shipping."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-10"
    ]
  },
  {
    "id": "toreso-fidgetwrap-pop-bubble",
    "catalogNumber": 106,
    "slug": "toreso-fidgetwrap-pop-bubble",
    "name": "Toreso FidgetWrap (Pop Bubble)",
    "track": "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)",
    "categorySlug": "cushioning-and-shipping-protection-bubble-void-fill-foam-reinvention",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Reusable silicone \"infinite bubble wrap\" fidget that also protects small items.",
    "b2cInnovation": "fun + function crossover.",
    "format": "Flexible pack",
    "signal": "Benz already markets honeycomb-cushioned recycled-kraft paper mailers claiming \"65–75% impact absorption comparable to plastic bubble mailers,\" explicitly targeting D2C/subscription/unboxing. Resale/online-selling households need consumer-scale protective packing.",
    "aisle": "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)",
    "audience": "resellers, fragile shippers, gift packers, students, creators, and home movers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso FidgetWrap (Pop Bubble) is a flexible pack for reusable silicone \"infinite bubble wrap\" fidget that also protects small items.",
    "demandSignal": "pop-it fidget craze.",
    "origin": "Global packaging retail",
    "benefits": [
      "Reusable silicone \"infinite bubble wrap\" fidget that also protects small items.",
      "fun + function crossover.",
      "Demand signal: pop-it fidget craze.",
      "Consumer-sized format for resellers, fragile shippers, gift packers, students, creators, and home movers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-106"
      },
      {
        "label": "Aisle",
        "value": "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso FidgetWrap (Pop Bubble)",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso FidgetWrap (Pop Bubble)?",
        "answer": "Toreso FidgetWrap (Pop Bubble) is a Toreso flexible pack made for reusable silicone \"infinite bubble wrap\" fidget that also protects small items."
      },
      {
        "question": "Who should use Toreso FidgetWrap (Pop Bubble)?",
        "answer": "Toreso FidgetWrap (Pop Bubble) is designed for resellers, fragile shippers, gift packers, students, creators, and home movers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "fun + function crossover."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-10"
    ]
  },
  {
    "id": "surface-protection-film-roll-mini",
    "catalogNumber": 107,
    "slug": "surface-protection-film-roll-mini",
    "name": "Surface-Protection Film Roll (mini)",
    "track": "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)",
    "categorySlug": "cushioning-and-shipping-protection-bubble-void-fill-foam-reinvention",
    "b2bOrigin": "Benz surface-protection paper/film.",
    "userProblem": "Peel-off protective film for new appliances/screens.",
    "b2cInnovation": "Peel-off protective film for new appliances/screens.",
    "format": "Cushioning product",
    "signal": "Benz already markets honeycomb-cushioned recycled-kraft paper mailers claiming \"65–75% impact absorption comparable to plastic bubble mailers,\" explicitly targeting D2C/subscription/unboxing. Resale/online-selling households need consumer-scale protective packing.",
    "aisle": "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)",
    "audience": "resellers, fragile shippers, gift packers, students, creators, and home movers",
    "priceRange": "impulse-mid.",
    "launchPriority": "Future drop",
    "heroLine": "Surface-Protection Film Roll (mini) is a cushioning product for peel-off protective film for new appliances/screens.",
    "demandSignal": "Benz already markets honeycomb-cushioned recycled-kraft paper mailers claiming \"65–75% impact absorption comparable to plastic bubble mailers,\" explicitly targeting D2C/subscription/unboxing. Resale/online-selling households need consumer-scale protective packing.",
    "origin": "Global packaging retail",
    "benefits": [
      "Peel-off protective film for new appliances/screens.",
      "Peel-off protective film for new appliances/screens.",
      "Built for the cushioning & shipping protection (bubble/void-fill/foam reinvention) aisle.",
      "Consumer-sized format for resellers, fragile shippers, gift packers, students, creators, and home movers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-107"
      },
      {
        "label": "Aisle",
        "value": "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)"
      },
      {
        "label": "Format",
        "value": "Cushioning product"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Benz surface-protection paper/film."
      }
    ],
    "bundle": [
      "Surface-Protection Film Roll (mini)",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Surface-Protection Film Roll (mini)?",
        "answer": "Surface-Protection Film Roll (mini) is a Toreso cushioning product made for peel-off protective film for new appliances/screens."
      },
      {
        "question": "Who should use Surface-Protection Film Roll (mini)?",
        "answer": "Surface-Protection Film Roll (mini) is designed for resellers, fragile shippers, gift packers, students, creators, and home movers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Peel-off protective film for new appliances/screens."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-10"
    ]
  },
  {
    "id": "toreso-moving-day-kit",
    "catalogNumber": 108,
    "slug": "toreso-moving-day-kit",
    "name": "Toreso Moving Day Kit",
    "track": "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)",
    "categorySlug": "cushioning-and-shipping-protection-bubble-void-fill-foam-reinvention",
    "b2bOrigin": "multiple Benz lines.",
    "userProblem": "Stretch film + foam + labels bundle for home moves.",
    "b2cInnovation": "Stretch film + foam + labels bundle for home moves.",
    "format": "Starter kit",
    "signal": "Benz already markets honeycomb-cushioned recycled-kraft paper mailers claiming \"65–75% impact absorption comparable to plastic bubble mailers,\" explicitly targeting D2C/subscription/unboxing. Resale/online-selling households need consumer-scale protective packing.",
    "aisle": "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)",
    "audience": "resellers, fragile shippers, gift packers, students, creators, and home movers",
    "priceRange": "mid.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Moving Day Kit is a starter kit for stretch film + foam + labels bundle for home moves.",
    "demandSignal": "Benz already markets honeycomb-cushioned recycled-kraft paper mailers claiming \"65–75% impact absorption comparable to plastic bubble mailers,\" explicitly targeting D2C/subscription/unboxing. Resale/online-selling households need consumer-scale protective packing.",
    "origin": "Global packaging retail",
    "benefits": [
      "Stretch film + foam + labels bundle for home moves.",
      "Stretch film + foam + labels bundle for home moves.",
      "Built for the cushioning & shipping protection (bubble/void-fill/foam reinvention) aisle.",
      "Consumer-sized format for resellers, fragile shippers, gift packers, students, creators, and home movers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-108"
      },
      {
        "label": "Aisle",
        "value": "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "multiple Benz lines."
      }
    ],
    "bundle": [
      "Toreso Moving Day Kit",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Moving Day Kit?",
        "answer": "Toreso Moving Day Kit is a Toreso starter kit made for stretch film + foam + labels bundle for home moves."
      },
      {
        "question": "Who should use Toreso Moving Day Kit?",
        "answer": "Toreso Moving Day Kit is designed for resellers, fragile shippers, gift packers, students, creators, and home movers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Stretch film + foam + labels bundle for home moves."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-10"
    ]
  },
  {
    "id": "toreso-wraproller-mini",
    "catalogNumber": 109,
    "slug": "toreso-wraproller-mini",
    "name": "Toreso WrapRoller Mini",
    "track": "Mini Stretch Film & Wrapping Reinventions",
    "categorySlug": "mini-stretch-film-and-wrapping-reinventions",
    "b2bOrigin": "Benz stretch film — exactly the user's example.",
    "userProblem": "Handheld mini stretch-wrap roller with comfort grip and brake for tension control.",
    "b2cInnovation": "consumer-scale, fun colors, one-hand use.",
    "format": "Flexible pack",
    "signal": "handheld mini stretch wrap (5\" x 1000', 80-gauge) is an Amazon best-seller for moving/bundling; this is the user's flagship example of a B2B→B2C reinvention. Benz manufactures stretch film.",
    "aisle": "Mini Stretch Film & Wrapping Reinventions",
    "audience": "home organizers, movers, travelers, pantry users, and small sellers",
    "priceRange": "impulse-mid.",
    "launchPriority": "Signature launch",
    "heroLine": "Toreso WrapRoller Mini is a flexible pack for handheld mini stretch-wrap roller with comfort grip and brake for tension control.",
    "demandSignal": "handheld mini stretch wrap (5\" x 1000', 80-gauge) is an Amazon best-seller for moving/bundling; this is the user's flagship example of a B2B→B2C reinvention. Benz manufactures stretch film.",
    "origin": "Global packaging retail",
    "benefits": [
      "Handheld mini stretch-wrap roller with comfort grip and brake for tension control.",
      "consumer-scale, fun colors, one-hand use.",
      "Built for the mini stretch film & wrapping reinventions aisle.",
      "Consumer-sized format for home organizers, movers, travelers, pantry users, and small sellers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-109"
      },
      {
        "label": "Aisle",
        "value": "Mini Stretch Film & Wrapping Reinventions"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Benz stretch film — exactly the user's example."
      }
    ],
    "bundle": [
      "Toreso WrapRoller Mini",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso WrapRoller Mini?",
        "answer": "Toreso WrapRoller Mini is a Toreso flexible pack made for handheld mini stretch-wrap roller with comfort grip and brake for tension control."
      },
      {
        "question": "Who should use Toreso WrapRoller Mini?",
        "answer": "Toreso WrapRoller Mini is designed for home organizers, movers, travelers, pantry users, and small sellers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "consumer-scale, fun colors, one-hand use."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-11"
    ]
  },
  {
    "id": "wraproller-color-code-set",
    "catalogNumber": 110,
    "slug": "wraproller-color-code-set",
    "name": "WrapRoller Color-Code Set",
    "track": "Mini Stretch Film & Wrapping Reinventions",
    "categorySlug": "mini-stretch-film-and-wrapping-reinventions",
    "b2bOrigin": "Benz colored stretch film.",
    "userProblem": "Colored mini stretch films to bundle & label cables, toys, sports gear.",
    "b2cInnovation": "Colored mini stretch films to bundle & label cables, toys, sports gear.",
    "format": "Starter kit",
    "signal": "handheld mini stretch wrap (5\" x 1000', 80-gauge) is an Amazon best-seller for moving/bundling; this is the user's flagship example of a B2B→B2C reinvention. Benz manufactures stretch film.",
    "aisle": "Mini Stretch Film & Wrapping Reinventions",
    "audience": "home organizers, movers, travelers, pantry users, and small sellers",
    "priceRange": "impulse.",
    "launchPriority": "Signature launch",
    "heroLine": "WrapRoller Color-Code Set is a starter kit for colored mini stretch films to bundle & label cables, toys, sports gear.",
    "demandSignal": "handheld mini stretch wrap (5\" x 1000', 80-gauge) is an Amazon best-seller for moving/bundling; this is the user's flagship example of a B2B→B2C reinvention. Benz manufactures stretch film.",
    "origin": "Global packaging retail",
    "benefits": [
      "Colored mini stretch films to bundle & label cables, toys, sports gear.",
      "Colored mini stretch films to bundle & label cables, toys, sports gear.",
      "Built for the mini stretch film & wrapping reinventions aisle.",
      "Consumer-sized format for home organizers, movers, travelers, pantry users, and small sellers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-110"
      },
      {
        "label": "Aisle",
        "value": "Mini Stretch Film & Wrapping Reinventions"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Benz colored stretch film."
      }
    ],
    "bundle": [
      "WrapRoller Color-Code Set",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is WrapRoller Color-Code Set?",
        "answer": "WrapRoller Color-Code Set is a Toreso starter kit made for colored mini stretch films to bundle & label cables, toys, sports gear."
      },
      {
        "question": "Who should use WrapRoller Color-Code Set?",
        "answer": "WrapRoller Color-Code Set is designed for home organizers, movers, travelers, pantry users, and small sellers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Colored mini stretch films to bundle & label cables, toys, sports gear."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-11"
    ]
  },
  {
    "id": "toreso-cling-wrap-slide-cutter-box",
    "catalogNumber": 111,
    "slug": "toreso-cling-wrap-slide-cutter-box",
    "name": "Toreso Cling Wrap Slide-Cutter Box",
    "track": "Mini Stretch Film & Wrapping Reinventions",
    "categorySlug": "mini-stretch-film-and-wrapping-reinventions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Cling film box with a slide-cutter that never tears jaggedly.",
    "b2cInnovation": "Cling film box with a slide-cutter that never tears jaggedly.",
    "format": "Flexible pack",
    "signal": "handheld mini stretch wrap (5\" x 1000', 80-gauge) is an Amazon best-seller for moving/bundling; this is the user's flagship example of a B2B→B2C reinvention. Benz manufactures stretch film.",
    "aisle": "Mini Stretch Film & Wrapping Reinventions",
    "audience": "home organizers, movers, travelers, pantry users, and small sellers",
    "priceRange": "impulse-mid.",
    "launchPriority": "Signature launch",
    "heroLine": "Toreso Cling Wrap Slide-Cutter Box is a flexible pack for cling film box with a slide-cutter that never tears jaggedly.",
    "demandSignal": "perennial pain-point product.",
    "origin": "Global packaging retail",
    "benefits": [
      "Cling film box with a slide-cutter that never tears jaggedly.",
      "Cling film box with a slide-cutter that never tears jaggedly.",
      "Demand signal: perennial pain-point product.",
      "Consumer-sized format for home organizers, movers, travelers, pantry users, and small sellers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-111"
      },
      {
        "label": "Aisle",
        "value": "Mini Stretch Film & Wrapping Reinventions"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Cling Wrap Slide-Cutter Box",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Cling Wrap Slide-Cutter Box?",
        "answer": "Toreso Cling Wrap Slide-Cutter Box is a Toreso flexible pack made for cling film box with a slide-cutter that never tears jaggedly."
      },
      {
        "question": "Who should use Toreso Cling Wrap Slide-Cutter Box?",
        "answer": "Toreso Cling Wrap Slide-Cutter Box is designed for home organizers, movers, travelers, pantry users, and small sellers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Cling film box with a slide-cutter that never tears jaggedly."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-11"
    ]
  },
  {
    "id": "3-in-1-wrap-dispenser",
    "catalogNumber": 112,
    "slug": "3-in-1-wrap-dispenser",
    "name": "3-in-1 Wrap Dispenser",
    "track": "Mini Stretch Film & Wrapping Reinventions",
    "categorySlug": "mini-stretch-film-and-wrapping-reinventions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Bamboo dispenser holding cling/foil/wax with cutters.",
    "b2cInnovation": "Bamboo dispenser holding cling/foil/wax with cutters.",
    "format": "Flexible pack",
    "signal": "handheld mini stretch wrap (5\" x 1000', 80-gauge) is an Amazon best-seller for moving/bundling; this is the user's flagship example of a B2B→B2C reinvention. Benz manufactures stretch film.",
    "aisle": "Mini Stretch Film & Wrapping Reinventions",
    "audience": "home organizers, movers, travelers, pantry users, and small sellers",
    "priceRange": "mid.",
    "launchPriority": "Signature launch",
    "heroLine": "3-in-1 Wrap Dispenser is a flexible pack for bamboo dispenser holding cling/foil/wax with cutters.",
    "demandSignal": "Amazon \"Danfoxer/Bamboo 3-in-1\" staple.",
    "origin": "Global packaging retail",
    "benefits": [
      "Bamboo dispenser holding cling/foil/wax with cutters.",
      "Bamboo dispenser holding cling/foil/wax with cutters.",
      "Demand signal: Amazon \"Danfoxer/Bamboo 3-in-1\" staple.",
      "Consumer-sized format for home organizers, movers, travelers, pantry users, and small sellers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-112"
      },
      {
        "label": "Aisle",
        "value": "Mini Stretch Film & Wrapping Reinventions"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "3-in-1 Wrap Dispenser",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is 3-in-1 Wrap Dispenser?",
        "answer": "3-in-1 Wrap Dispenser is a Toreso flexible pack made for bamboo dispenser holding cling/foil/wax with cutters."
      },
      {
        "question": "Who should use 3-in-1 Wrap Dispenser?",
        "answer": "3-in-1 Wrap Dispenser is designed for home organizers, movers, travelers, pantry users, and small sellers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Bamboo dispenser holding cling/foil/wax with cutters."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-11"
    ]
  },
  {
    "id": "toreso-furniture-wrap",
    "catalogNumber": 113,
    "slug": "toreso-furniture-wrap",
    "name": "Toreso Furniture Wrap",
    "track": "Mini Stretch Film & Wrapping Reinventions",
    "categorySlug": "mini-stretch-film-and-wrapping-reinventions",
    "b2bOrigin": "Benz stretch film.",
    "userProblem": "Mini stretch wrap kit for protecting furniture during renovation/move.",
    "b2cInnovation": "Mini stretch wrap kit for protecting furniture during renovation/move.",
    "format": "Flexible pack",
    "signal": "handheld mini stretch wrap (5\" x 1000', 80-gauge) is an Amazon best-seller for moving/bundling; this is the user's flagship example of a B2B→B2C reinvention. Benz manufactures stretch film.",
    "aisle": "Mini Stretch Film & Wrapping Reinventions",
    "audience": "home organizers, movers, travelers, pantry users, and small sellers",
    "priceRange": "impulse-mid.",
    "launchPriority": "Premium daily",
    "heroLine": "Toreso Furniture Wrap is a flexible pack for mini stretch wrap kit for protecting furniture during renovation/move.",
    "demandSignal": "handheld mini stretch wrap (5\" x 1000', 80-gauge) is an Amazon best-seller for moving/bundling; this is the user's flagship example of a B2B→B2C reinvention. Benz manufactures stretch film.",
    "origin": "Global packaging retail",
    "benefits": [
      "Mini stretch wrap kit for protecting furniture during renovation/move.",
      "Mini stretch wrap kit for protecting furniture during renovation/move.",
      "Built for the mini stretch film & wrapping reinventions aisle.",
      "Consumer-sized format for home organizers, movers, travelers, pantry users, and small sellers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-113"
      },
      {
        "label": "Aisle",
        "value": "Mini Stretch Film & Wrapping Reinventions"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Benz stretch film."
      }
    ],
    "bundle": [
      "Toreso Furniture Wrap",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Furniture Wrap?",
        "answer": "Toreso Furniture Wrap is a Toreso flexible pack made for mini stretch wrap kit for protecting furniture during renovation/move."
      },
      {
        "question": "Who should use Toreso Furniture Wrap?",
        "answer": "Toreso Furniture Wrap is designed for home organizers, movers, travelers, pantry users, and small sellers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Mini stretch wrap kit for protecting furniture during renovation/move."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-11"
    ]
  },
  {
    "id": "static-cling-window-film-decor",
    "catalogNumber": 114,
    "slug": "static-cling-window-film-decor",
    "name": "Static Cling Window Film (decor)",
    "track": "Mini Stretch Film & Wrapping Reinventions",
    "categorySlug": "mini-stretch-film-and-wrapping-reinventions",
    "b2bOrigin": "Benz film extrusion.",
    "userProblem": "Reusable static-cling privacy/decor film.",
    "b2cInnovation": "Reusable static-cling privacy/decor film.",
    "format": "Mini Stretch Film product",
    "signal": "handheld mini stretch wrap (5\" x 1000', 80-gauge) is an Amazon best-seller for moving/bundling; this is the user's flagship example of a B2B→B2C reinvention. Benz manufactures stretch film.",
    "aisle": "Mini Stretch Film & Wrapping Reinventions",
    "audience": "home organizers, movers, travelers, pantry users, and small sellers",
    "priceRange": "mid.",
    "launchPriority": "Future drop",
    "heroLine": "Static Cling Window Film (decor) is a mini stretch film product for reusable static-cling privacy/decor film.",
    "demandSignal": "handheld mini stretch wrap (5\" x 1000', 80-gauge) is an Amazon best-seller for moving/bundling; this is the user's flagship example of a B2B→B2C reinvention. Benz manufactures stretch film.",
    "origin": "Global packaging retail",
    "benefits": [
      "Reusable static-cling privacy/decor film.",
      "Reusable static-cling privacy/decor film.",
      "Built for the mini stretch film & wrapping reinventions aisle.",
      "Consumer-sized format for home organizers, movers, travelers, pantry users, and small sellers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-114"
      },
      {
        "label": "Aisle",
        "value": "Mini Stretch Film & Wrapping Reinventions"
      },
      {
        "label": "Format",
        "value": "Mini Stretch Film product"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Benz film extrusion."
      }
    ],
    "bundle": [
      "Static Cling Window Film (decor)",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Static Cling Window Film (decor)?",
        "answer": "Static Cling Window Film (decor) is a Toreso mini stretch film product made for reusable static-cling privacy/decor film."
      },
      {
        "question": "Who should use Static Cling Window Film (decor)?",
        "answer": "Static Cling Window Film (decor) is designed for home organizers, movers, travelers, pantry users, and small sellers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Reusable static-cling privacy/decor film."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-11"
    ]
  },
  {
    "id": "toreso-shrink-wrap-gift-bands",
    "catalogNumber": 115,
    "slug": "toreso-shrink-wrap-gift-bands",
    "name": "Toreso Shrink Wrap Gift Bands",
    "track": "Mini Stretch Film & Wrapping Reinventions",
    "categorySlug": "mini-stretch-film-and-wrapping-reinventions",
    "b2bOrigin": "Benz shrink film.",
    "userProblem": "Mini shrink film + heat-shrink bands for gift baskets.",
    "b2cInnovation": "Mini shrink film + heat-shrink bands for gift baskets.",
    "format": "Flexible pack",
    "signal": "handheld mini stretch wrap (5\" x 1000', 80-gauge) is an Amazon best-seller for moving/bundling; this is the user's flagship example of a B2B→B2C reinvention. Benz manufactures stretch film.",
    "aisle": "Mini Stretch Film & Wrapping Reinventions",
    "audience": "home organizers, movers, travelers, pantry users, and small sellers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Shrink Wrap Gift Bands is a flexible pack for mini shrink film + heat-shrink bands for gift baskets.",
    "demandSignal": "handheld mini stretch wrap (5\" x 1000', 80-gauge) is an Amazon best-seller for moving/bundling; this is the user's flagship example of a B2B→B2C reinvention. Benz manufactures stretch film.",
    "origin": "Global packaging retail",
    "benefits": [
      "Mini shrink film + heat-shrink bands for gift baskets.",
      "Mini shrink film + heat-shrink bands for gift baskets.",
      "Built for the mini stretch film & wrapping reinventions aisle.",
      "Consumer-sized format for home organizers, movers, travelers, pantry users, and small sellers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-115"
      },
      {
        "label": "Aisle",
        "value": "Mini Stretch Film & Wrapping Reinventions"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Benz shrink film."
      }
    ],
    "bundle": [
      "Toreso Shrink Wrap Gift Bands",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Shrink Wrap Gift Bands?",
        "answer": "Toreso Shrink Wrap Gift Bands is a Toreso flexible pack made for mini shrink film + heat-shrink bands for gift baskets."
      },
      {
        "question": "Who should use Toreso Shrink Wrap Gift Bands?",
        "answer": "Toreso Shrink Wrap Gift Bands is designed for home organizers, movers, travelers, pantry users, and small sellers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Mini shrink film + heat-shrink bands for gift baskets."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-11"
    ]
  },
  {
    "id": "pallet-to-pantry-bundling-wrap",
    "catalogNumber": 116,
    "slug": "pallet-to-pantry-bundling-wrap",
    "name": "Pallet-to-Pantry Bundling Wrap",
    "track": "Mini Stretch Film & Wrapping Reinventions",
    "categorySlug": "mini-stretch-film-and-wrapping-reinventions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Small bundling film for organizing pantry multipacks.",
    "b2cInnovation": "Small bundling film for organizing pantry multipacks.",
    "format": "Flexible pack",
    "signal": "handheld mini stretch wrap (5\" x 1000', 80-gauge) is an Amazon best-seller for moving/bundling; this is the user's flagship example of a B2B→B2C reinvention. Benz manufactures stretch film.",
    "aisle": "Mini Stretch Film & Wrapping Reinventions",
    "audience": "home organizers, movers, travelers, pantry users, and small sellers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Pallet-to-Pantry Bundling Wrap is a flexible pack for small bundling film for organizing pantry multipacks.",
    "demandSignal": "handheld mini stretch wrap (5\" x 1000', 80-gauge) is an Amazon best-seller for moving/bundling; this is the user's flagship example of a B2B→B2C reinvention. Benz manufactures stretch film.",
    "origin": "Global packaging retail",
    "benefits": [
      "Small bundling film for organizing pantry multipacks.",
      "Small bundling film for organizing pantry multipacks.",
      "Built for the mini stretch film & wrapping reinventions aisle.",
      "Consumer-sized format for home organizers, movers, travelers, pantry users, and small sellers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-116"
      },
      {
        "label": "Aisle",
        "value": "Mini Stretch Film & Wrapping Reinventions"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Pallet-to-Pantry Bundling Wrap",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Pallet-to-Pantry Bundling Wrap?",
        "answer": "Pallet-to-Pantry Bundling Wrap is a Toreso flexible pack made for small bundling film for organizing pantry multipacks."
      },
      {
        "question": "Who should use Pallet-to-Pantry Bundling Wrap?",
        "answer": "Pallet-to-Pantry Bundling Wrap is designed for home organizers, movers, travelers, pantry users, and small sellers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Small bundling film for organizing pantry multipacks."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-11"
    ]
  },
  {
    "id": "toreso-airless-pump-bottle",
    "catalogNumber": 117,
    "slug": "toreso-airless-pump-bottle",
    "name": "Toreso AirLess Pump Bottle",
    "track": "Bottle, Liquid & Beverage Sealing",
    "categorySlug": "bottle-liquid-and-beverage-sealing",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Airless vacuum bottle that pushes lotion/sauce up from the bottom for last-drop use.",
    "b2cInnovation": "Airless vacuum bottle that pushes lotion/sauce up from the bottom for last-drop use.",
    "format": "Reusable tool",
    "signal": "Daiso Korea's ₩1,000 vacuum pump airless bottles are an editor's \"#1 secret item\"; MUJI's refillable PET/PE travel bottles and foaming-pump bottles are review-favorite best-sellers.",
    "aisle": "Bottle, Liquid & Beverage Sealing",
    "audience": "travelers, refill users, kitchens, bathrooms, and beverage storage users",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso AirLess Pump Bottle is a reusable tool for airless vacuum bottle that pushes lotion/sauce up from the bottom for last-drop use.",
    "demandSignal": "Daiso Korea cult item.",
    "origin": "Korea.",
    "benefits": [
      "Airless vacuum bottle that pushes lotion/sauce up from the bottom for last-drop use.",
      "Airless vacuum bottle that pushes lotion/sauce up from the bottom for last-drop use.",
      "Demand signal: Daiso Korea cult item.",
      "Consumer-sized format for travelers, refill users, kitchens, bathrooms, and beverage storage users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-117"
      },
      {
        "label": "Aisle",
        "value": "Bottle, Liquid & Beverage Sealing"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Korea."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso AirLess Pump Bottle",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso AirLess Pump Bottle?",
        "answer": "Toreso AirLess Pump Bottle is a Toreso reusable tool made for airless vacuum bottle that pushes lotion/sauce up from the bottom for last-drop use."
      },
      {
        "question": "Who should use Toreso AirLess Pump Bottle?",
        "answer": "Toreso AirLess Pump Bottle is designed for travelers, refill users, kitchens, bathrooms, and beverage storage users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Airless vacuum bottle that pushes lotion/sauce up from the bottom for last-drop use."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-12"
    ]
  },
  {
    "id": "travel-bottle-leak-lock-set",
    "catalogNumber": 118,
    "slug": "travel-bottle-leak-lock-set",
    "name": "Travel Bottle Leak-Lock Set",
    "track": "Bottle, Liquid & Beverage Sealing",
    "categorySlug": "bottle-liquid-and-beverage-sealing",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Snap-cap travel bottles, leak-proof.",
    "b2cInnovation": "Snap-cap travel bottles, leak-proof.",
    "format": "Starter kit",
    "signal": "Daiso Korea's ₩1,000 vacuum pump airless bottles are an editor's \"#1 secret item\"; MUJI's refillable PET/PE travel bottles and foaming-pump bottles are review-favorite best-sellers.",
    "aisle": "Bottle, Liquid & Beverage Sealing",
    "audience": "travelers, refill users, kitchens, bathrooms, and beverage storage users",
    "priceRange": "impulse-mid.",
    "launchPriority": "Premium daily",
    "heroLine": "Travel Bottle Leak-Lock Set is a starter kit for snap-cap travel bottles, leak-proof.",
    "demandSignal": "MUJI travel-bottle best-seller.",
    "origin": "Japan.",
    "benefits": [
      "Snap-cap travel bottles, leak-proof.",
      "Snap-cap travel bottles, leak-proof.",
      "Demand signal: MUJI travel-bottle best-seller.",
      "Consumer-sized format for travelers, refill users, kitchens, bathrooms, and beverage storage users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-118"
      },
      {
        "label": "Aisle",
        "value": "Bottle, Liquid & Beverage Sealing"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Japan."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Travel Bottle Leak-Lock Set",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Travel Bottle Leak-Lock Set?",
        "answer": "Travel Bottle Leak-Lock Set is a Toreso starter kit made for snap-cap travel bottles, leak-proof."
      },
      {
        "question": "Who should use Travel Bottle Leak-Lock Set?",
        "answer": "Travel Bottle Leak-Lock Set is designed for travelers, refill users, kitchens, bathrooms, and beverage storage users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Snap-cap travel bottles, leak-proof."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-12"
    ]
  },
  {
    "id": "foaming-pump-bottle",
    "catalogNumber": 119,
    "slug": "foaming-pump-bottle",
    "name": "Foaming Pump Bottle",
    "track": "Bottle, Liquid & Beverage Sealing",
    "categorySlug": "bottle-liquid-and-beverage-sealing",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Refillable foaming-soap bottle.",
    "b2cInnovation": "Refillable foaming-soap bottle.",
    "format": "Reusable tool",
    "signal": "Daiso Korea's ₩1,000 vacuum pump airless bottles are an editor's \"#1 secret item\"; MUJI's refillable PET/PE travel bottles and foaming-pump bottles are review-favorite best-sellers.",
    "aisle": "Bottle, Liquid & Beverage Sealing",
    "audience": "travelers, refill users, kitchens, bathrooms, and beverage storage users",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Foaming Pump Bottle is a reusable tool for refillable foaming-soap bottle.",
    "demandSignal": "MUJI PET foaming bottle review-favorite.",
    "origin": "Japan.",
    "benefits": [
      "Refillable foaming-soap bottle.",
      "Refillable foaming-soap bottle.",
      "Demand signal: MUJI PET foaming bottle review-favorite.",
      "Consumer-sized format for travelers, refill users, kitchens, bathrooms, and beverage storage users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-119"
      },
      {
        "label": "Aisle",
        "value": "Bottle, Liquid & Beverage Sealing"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Japan."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Foaming Pump Bottle",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Foaming Pump Bottle?",
        "answer": "Foaming Pump Bottle is a Toreso reusable tool made for refillable foaming-soap bottle."
      },
      {
        "question": "Who should use Foaming Pump Bottle?",
        "answer": "Foaming Pump Bottle is designed for travelers, refill users, kitchens, bathrooms, and beverage storage users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Refillable foaming-soap bottle."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-12"
    ]
  },
  {
    "id": "toreso-fizz-keeper-soda-cap",
    "catalogNumber": 120,
    "slug": "toreso-fizz-keeper-soda-cap",
    "name": "Toreso Fizz-Keeper Soda Cap",
    "track": "Bottle, Liquid & Beverage Sealing",
    "categorySlug": "bottle-liquid-and-beverage-sealing",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Pump cap that re-pressurizes soda bottles to keep fizz.",
    "b2cInnovation": "Pump cap that re-pressurizes soda bottles to keep fizz.",
    "format": "Reusable tool",
    "signal": "Daiso Korea's ₩1,000 vacuum pump airless bottles are an editor's \"#1 secret item\"; MUJI's refillable PET/PE travel bottles and foaming-pump bottles are review-favorite best-sellers.",
    "aisle": "Bottle, Liquid & Beverage Sealing",
    "audience": "travelers, refill users, kitchens, bathrooms, and beverage storage users",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Fizz-Keeper Soda Cap is a reusable tool for pump cap that re-pressurizes soda bottles to keep fizz.",
    "demandSignal": "evergreen Amazon.",
    "origin": "Global packaging retail",
    "benefits": [
      "Pump cap that re-pressurizes soda bottles to keep fizz.",
      "Pump cap that re-pressurizes soda bottles to keep fizz.",
      "Demand signal: evergreen Amazon.",
      "Consumer-sized format for travelers, refill users, kitchens, bathrooms, and beverage storage users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-120"
      },
      {
        "label": "Aisle",
        "value": "Bottle, Liquid & Beverage Sealing"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Fizz-Keeper Soda Cap",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Fizz-Keeper Soda Cap?",
        "answer": "Toreso Fizz-Keeper Soda Cap is a Toreso reusable tool made for pump cap that re-pressurizes soda bottles to keep fizz."
      },
      {
        "question": "Who should use Toreso Fizz-Keeper Soda Cap?",
        "answer": "Toreso Fizz-Keeper Soda Cap is designed for travelers, refill users, kitchens, bathrooms, and beverage storage users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Pump cap that re-pressurizes soda bottles to keep fizz."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-12"
    ]
  },
  {
    "id": "silicone-bottle-stoppers-set",
    "catalogNumber": 121,
    "slug": "silicone-bottle-stoppers-set",
    "name": "Silicone Bottle Stoppers (set)",
    "track": "Bottle, Liquid & Beverage Sealing",
    "categorySlug": "bottle-liquid-and-beverage-sealing",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Reusable stoppers for any bottle.",
    "b2cInnovation": "Reusable stoppers for any bottle.",
    "format": "Starter kit",
    "signal": "Daiso Korea's ₩1,000 vacuum pump airless bottles are an editor's \"#1 secret item\"; MUJI's refillable PET/PE travel bottles and foaming-pump bottles are review-favorite best-sellers.",
    "aisle": "Bottle, Liquid & Beverage Sealing",
    "audience": "travelers, refill users, kitchens, bathrooms, and beverage storage users",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Silicone Bottle Stoppers (set) is a starter kit for reusable stoppers for any bottle.",
    "demandSignal": "Daiso Korea's ₩1,000 vacuum pump airless bottles are an editor's \"#1 secret item\"; MUJI's refillable PET/PE travel bottles and foaming-pump bottles are review-favorite best-sellers.",
    "origin": "Global packaging retail",
    "benefits": [
      "Reusable stoppers for any bottle.",
      "Reusable stoppers for any bottle.",
      "Built for the bottle, liquid & beverage sealing aisle.",
      "Consumer-sized format for travelers, refill users, kitchens, bathrooms, and beverage storage users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-121"
      },
      {
        "label": "Aisle",
        "value": "Bottle, Liquid & Beverage Sealing"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Silicone Bottle Stoppers (set)",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Silicone Bottle Stoppers (set)?",
        "answer": "Silicone Bottle Stoppers (set) is a Toreso starter kit made for reusable stoppers for any bottle."
      },
      {
        "question": "Who should use Silicone Bottle Stoppers (set)?",
        "answer": "Silicone Bottle Stoppers (set) is designed for travelers, refill users, kitchens, bathrooms, and beverage storage users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Reusable stoppers for any bottle."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-12"
    ]
  },
  {
    "id": "toreso-sauce-dispenser-squeeze-bottles",
    "catalogNumber": 122,
    "slug": "toreso-sauce-dispenser-squeeze-bottles",
    "name": "Toreso Sauce Dispenser Squeeze Bottles",
    "track": "Bottle, Liquid & Beverage Sealing",
    "categorySlug": "bottle-liquid-and-beverage-sealing",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Precision squeeze bottles with caps.",
    "b2cInnovation": "Precision squeeze bottles with caps.",
    "format": "Reusable tool",
    "signal": "Daiso Korea's ₩1,000 vacuum pump airless bottles are an editor's \"#1 secret item\"; MUJI's refillable PET/PE travel bottles and foaming-pump bottles are review-favorite best-sellers.",
    "aisle": "Bottle, Liquid & Beverage Sealing",
    "audience": "travelers, refill users, kitchens, bathrooms, and beverage storage users",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Sauce Dispenser Squeeze Bottles is a reusable tool for precision squeeze bottles with caps.",
    "demandSignal": "Daiso \"Sauce Dispensers\" line.",
    "origin": "Japan.",
    "benefits": [
      "Precision squeeze bottles with caps.",
      "Precision squeeze bottles with caps.",
      "Demand signal: Daiso \"Sauce Dispensers\" line.",
      "Consumer-sized format for travelers, refill users, kitchens, bathrooms, and beverage storage users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-122"
      },
      {
        "label": "Aisle",
        "value": "Bottle, Liquid & Beverage Sealing"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Japan."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Sauce Dispenser Squeeze Bottles",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Sauce Dispenser Squeeze Bottles?",
        "answer": "Toreso Sauce Dispenser Squeeze Bottles is a Toreso reusable tool made for precision squeeze bottles with caps."
      },
      {
        "question": "Who should use Toreso Sauce Dispenser Squeeze Bottles?",
        "answer": "Toreso Sauce Dispenser Squeeze Bottles is designed for travelers, refill users, kitchens, bathrooms, and beverage storage users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Precision squeeze bottles with caps."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-12"
    ]
  },
  {
    "id": "one-hand-detergent-pump-bottle",
    "catalogNumber": 123,
    "slug": "one-hand-detergent-pump-bottle",
    "name": "One-Hand Detergent Pump Bottle",
    "track": "Bottle, Liquid & Beverage Sealing",
    "categorySlug": "bottle-liquid-and-beverage-sealing",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Press-top dish-soap + sponge bottle.",
    "b2cInnovation": "Press-top dish-soap + sponge bottle.",
    "format": "Reusable tool",
    "signal": "Daiso Korea's ₩1,000 vacuum pump airless bottles are an editor's \"#1 secret item\"; MUJI's refillable PET/PE travel bottles and foaming-pump bottles are review-favorite best-sellers.",
    "aisle": "Bottle, Liquid & Beverage Sealing",
    "audience": "travelers, refill users, kitchens, bathrooms, and beverage storage users",
    "priceRange": "impulse-mid.",
    "launchPriority": "Future drop",
    "heroLine": "One-Hand Detergent Pump Bottle is a reusable tool for press-top dish-soap + sponge bottle.",
    "demandSignal": "3COINS best-seller.",
    "origin": "Japan.",
    "benefits": [
      "Press-top dish-soap + sponge bottle.",
      "Press-top dish-soap + sponge bottle.",
      "Demand signal: 3COINS best-seller.",
      "Consumer-sized format for travelers, refill users, kitchens, bathrooms, and beverage storage users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-123"
      },
      {
        "label": "Aisle",
        "value": "Bottle, Liquid & Beverage Sealing"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Japan."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "One-Hand Detergent Pump Bottle",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is One-Hand Detergent Pump Bottle?",
        "answer": "One-Hand Detergent Pump Bottle is a Toreso reusable tool made for press-top dish-soap + sponge bottle."
      },
      {
        "question": "Who should use One-Hand Detergent Pump Bottle?",
        "answer": "One-Hand Detergent Pump Bottle is designed for travelers, refill users, kitchens, bathrooms, and beverage storage users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Press-top dish-soap + sponge bottle."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-12"
    ]
  },
  {
    "id": "collapsible-travel-bottles",
    "catalogNumber": 124,
    "slug": "collapsible-travel-bottles",
    "name": "Collapsible Travel Bottles",
    "track": "Bottle, Liquid & Beverage Sealing",
    "categorySlug": "bottle-liquid-and-beverage-sealing",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Squeeze-flat silicone travel bottles.",
    "b2cInnovation": "Squeeze-flat silicone travel bottles.",
    "format": "Bottle, Liquid product",
    "signal": "Daiso Korea's ₩1,000 vacuum pump airless bottles are an editor's \"#1 secret item\"; MUJI's refillable PET/PE travel bottles and foaming-pump bottles are review-favorite best-sellers.",
    "aisle": "Bottle, Liquid & Beverage Sealing",
    "audience": "travelers, refill users, kitchens, bathrooms, and beverage storage users",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Collapsible Travel Bottles is a bottle, liquid product for squeeze-flat silicone travel bottles.",
    "demandSignal": "Daiso Korea's ₩1,000 vacuum pump airless bottles are an editor's \"#1 secret item\"; MUJI's refillable PET/PE travel bottles and foaming-pump bottles are review-favorite best-sellers.",
    "origin": "Global packaging retail",
    "benefits": [
      "Squeeze-flat silicone travel bottles.",
      "Squeeze-flat silicone travel bottles.",
      "Built for the bottle, liquid & beverage sealing aisle.",
      "Consumer-sized format for travelers, refill users, kitchens, bathrooms, and beverage storage users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-124"
      },
      {
        "label": "Aisle",
        "value": "Bottle, Liquid & Beverage Sealing"
      },
      {
        "label": "Format",
        "value": "Bottle, Liquid product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Collapsible Travel Bottles",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Collapsible Travel Bottles?",
        "answer": "Collapsible Travel Bottles is a Toreso bottle, liquid product made for squeeze-flat silicone travel bottles."
      },
      {
        "question": "Who should use Collapsible Travel Bottles?",
        "answer": "Collapsible Travel Bottles is designed for travelers, refill users, kitchens, bathrooms, and beverage storage users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Squeeze-flat silicone travel bottles."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-12"
    ]
  },
  {
    "id": "toreso-mini-spray-bottles",
    "catalogNumber": 125,
    "slug": "toreso-mini-spray-bottles",
    "name": "Toreso Mini Spray Bottles",
    "track": "Bottle, Liquid & Beverage Sealing",
    "categorySlug": "bottle-liquid-and-beverage-sealing",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Fine-mist refillable spray bottles.",
    "b2cInnovation": "Fine-mist refillable spray bottles.",
    "format": "Bottle, Liquid product",
    "signal": "Daiso Korea's ₩1,000 vacuum pump airless bottles are an editor's \"#1 secret item\"; MUJI's refillable PET/PE travel bottles and foaming-pump bottles are review-favorite best-sellers.",
    "aisle": "Bottle, Liquid & Beverage Sealing",
    "audience": "travelers, refill users, kitchens, bathrooms, and beverage storage users",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Mini Spray Bottles is a bottle, liquid product for fine-mist refillable spray bottles.",
    "demandSignal": "Miniso spray-bottle listed product.",
    "origin": "China.",
    "benefits": [
      "Fine-mist refillable spray bottles.",
      "Fine-mist refillable spray bottles.",
      "Demand signal: Miniso spray-bottle listed product.",
      "Consumer-sized format for travelers, refill users, kitchens, bathrooms, and beverage storage users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-125"
      },
      {
        "label": "Aisle",
        "value": "Bottle, Liquid & Beverage Sealing"
      },
      {
        "label": "Format",
        "value": "Bottle, Liquid product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "China."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Mini Spray Bottles",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Mini Spray Bottles?",
        "answer": "Toreso Mini Spray Bottles is a Toreso bottle, liquid product made for fine-mist refillable spray bottles."
      },
      {
        "question": "Who should use Toreso Mini Spray Bottles?",
        "answer": "Toreso Mini Spray Bottles is designed for travelers, refill users, kitchens, bathrooms, and beverage storage users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Fine-mist refillable spray bottles."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-12"
    ]
  },
  {
    "id": "oil-mister-dispenser",
    "catalogNumber": 126,
    "slug": "oil-mister-dispenser",
    "name": "Oil Mister/Dispenser",
    "track": "Bottle, Liquid & Beverage Sealing",
    "categorySlug": "bottle-liquid-and-beverage-sealing",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Glass oil bottle with spray + pour.",
    "b2cInnovation": "Glass oil bottle with spray + pour.",
    "format": "Reusable tool",
    "signal": "Daiso Korea's ₩1,000 vacuum pump airless bottles are an editor's \"#1 secret item\"; MUJI's refillable PET/PE travel bottles and foaming-pump bottles are review-favorite best-sellers.",
    "aisle": "Bottle, Liquid & Beverage Sealing",
    "audience": "travelers, refill users, kitchens, bathrooms, and beverage storage users",
    "priceRange": "impulse-mid.",
    "launchPriority": "Future drop",
    "heroLine": "Oil Mister/Dispenser is a reusable tool for glass oil bottle with spray + pour.",
    "demandSignal": "Temu/Lemon8 viral.",
    "origin": "Global packaging retail",
    "benefits": [
      "Glass oil bottle with spray + pour.",
      "Glass oil bottle with spray + pour.",
      "Demand signal: Temu/Lemon8 viral.",
      "Consumer-sized format for travelers, refill users, kitchens, bathrooms, and beverage storage users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-126"
      },
      {
        "label": "Aisle",
        "value": "Bottle, Liquid & Beverage Sealing"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Oil Mister/Dispenser",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Oil Mister/Dispenser?",
        "answer": "Oil Mister/Dispenser is a Toreso reusable tool made for glass oil bottle with spray + pour."
      },
      {
        "question": "Who should use Oil Mister/Dispenser?",
        "answer": "Oil Mister/Dispenser is designed for travelers, refill users, kitchens, bathrooms, and beverage storage users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Glass oil bottle with spray + pour."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-12"
    ]
  },
  {
    "id": "toreso-wine-bottle-caps-reusable",
    "catalogNumber": 127,
    "slug": "toreso-wine-bottle-caps-reusable",
    "name": "Toreso Wine/Bottle Caps Reusable",
    "track": "Bottle, Liquid & Beverage Sealing",
    "categorySlug": "bottle-liquid-and-beverage-sealing",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Silicone reusable bottle caps multipack.",
    "b2cInnovation": "Silicone reusable bottle caps multipack.",
    "format": "Reusable tool",
    "signal": "Daiso Korea's ₩1,000 vacuum pump airless bottles are an editor's \"#1 secret item\"; MUJI's refillable PET/PE travel bottles and foaming-pump bottles are review-favorite best-sellers.",
    "aisle": "Bottle, Liquid & Beverage Sealing",
    "audience": "travelers, refill users, kitchens, bathrooms, and beverage storage users",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Wine/Bottle Caps Reusable is a reusable tool for silicone reusable bottle caps multipack.",
    "demandSignal": "Daiso Korea's ₩1,000 vacuum pump airless bottles are an editor's \"#1 secret item\"; MUJI's refillable PET/PE travel bottles and foaming-pump bottles are review-favorite best-sellers.",
    "origin": "Global packaging retail",
    "benefits": [
      "Silicone reusable bottle caps multipack.",
      "Silicone reusable bottle caps multipack.",
      "Built for the bottle, liquid & beverage sealing aisle.",
      "Consumer-sized format for travelers, refill users, kitchens, bathrooms, and beverage storage users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-127"
      },
      {
        "label": "Aisle",
        "value": "Bottle, Liquid & Beverage Sealing"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Wine/Bottle Caps Reusable",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Wine/Bottle Caps Reusable?",
        "answer": "Toreso Wine/Bottle Caps Reusable is a Toreso reusable tool made for silicone reusable bottle caps multipack."
      },
      {
        "question": "Who should use Toreso Wine/Bottle Caps Reusable?",
        "answer": "Toreso Wine/Bottle Caps Reusable is designed for travelers, refill users, kitchens, bathrooms, and beverage storage users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Silicone reusable bottle caps multipack."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-12"
    ]
  },
  {
    "id": "sachet-to-bottle-funnel-cap",
    "catalogNumber": 128,
    "slug": "sachet-to-bottle-funnel-cap",
    "name": "Sachet-to-Bottle Funnel Cap",
    "track": "Bottle, Liquid & Beverage Sealing",
    "categorySlug": "bottle-liquid-and-beverage-sealing",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Funnel cap to decant sachets into bottles.",
    "b2cInnovation": "Funnel cap to decant sachets into bottles.",
    "format": "Reusable tool",
    "signal": "Daiso Korea's ₩1,000 vacuum pump airless bottles are an editor's \"#1 secret item\"; MUJI's refillable PET/PE travel bottles and foaming-pump bottles are review-favorite best-sellers.",
    "aisle": "Bottle, Liquid & Beverage Sealing",
    "audience": "travelers, refill users, kitchens, bathrooms, and beverage storage users",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Sachet-to-Bottle Funnel Cap is a reusable tool for funnel cap to decant sachets into bottles.",
    "demandSignal": "Daiso Korea's ₩1,000 vacuum pump airless bottles are an editor's \"#1 secret item\"; MUJI's refillable PET/PE travel bottles and foaming-pump bottles are review-favorite best-sellers.",
    "origin": "India-relevant.",
    "benefits": [
      "Funnel cap to decant sachets into bottles.",
      "Funnel cap to decant sachets into bottles.",
      "Built for the bottle, liquid & beverage sealing aisle.",
      "Consumer-sized format for travelers, refill users, kitchens, bathrooms, and beverage storage users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-128"
      },
      {
        "label": "Aisle",
        "value": "Bottle, Liquid & Beverage Sealing"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "India-relevant."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Sachet-to-Bottle Funnel Cap",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Sachet-to-Bottle Funnel Cap?",
        "answer": "Sachet-to-Bottle Funnel Cap is a Toreso reusable tool made for funnel cap to decant sachets into bottles."
      },
      {
        "question": "Who should use Sachet-to-Bottle Funnel Cap?",
        "answer": "Sachet-to-Bottle Funnel Cap is designed for travelers, refill users, kitchens, bathrooms, and beverage storage users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Funnel cap to decant sachets into bottles."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-12"
    ]
  },
  {
    "id": "toreso-glidecut-wrap-slicer",
    "catalogNumber": 129,
    "slug": "toreso-glidecut-wrap-slicer",
    "name": "Toreso GlideCut Wrap Slicer",
    "track": "Gift Wrapping & Presentation Innovations",
    "categorySlug": "gift-wrapping-and-presentation-innovations",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Slide-over wrapping-paper cutter for straight cuts every time.",
    "b2cInnovation": "Slide-over wrapping-paper cutter for straight cuts every time.",
    "format": "Flexible pack",
    "signal": "the Little Elf Gift Wrap Cutter (As-Seen-on-Shark-Tank) and \"Wrap Buddies\" clamp dispensers are reviewed/viral gift-wrap gadgets; per Globe and Mail, Flying Tiger introduces ~300 new (largely gifting/seasonal) items per month with 80% of its ~1,800 products under $10.",
    "aisle": "Gift Wrapping & Presentation Innovations",
    "audience": "gift buyers, home bakers, event planners, festival shoppers, and craft users",
    "priceRange": "impulse.",
    "launchPriority": "Core range",
    "heroLine": "Toreso GlideCut Wrap Slicer is a flexible pack for slide-over wrapping-paper cutter for straight cuts every time.",
    "demandSignal": "Little Elf viral.",
    "origin": "Global packaging retail",
    "benefits": [
      "Slide-over wrapping-paper cutter for straight cuts every time.",
      "Slide-over wrapping-paper cutter for straight cuts every time.",
      "Demand signal: Little Elf viral.",
      "Consumer-sized format for gift buyers, home bakers, event planners, festival shoppers, and craft users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-129"
      },
      {
        "label": "Aisle",
        "value": "Gift Wrapping & Presentation Innovations"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso GlideCut Wrap Slicer",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso GlideCut Wrap Slicer?",
        "answer": "Toreso GlideCut Wrap Slicer is a Toreso flexible pack made for slide-over wrapping-paper cutter for straight cuts every time."
      },
      {
        "question": "Who should use Toreso GlideCut Wrap Slicer?",
        "answer": "Toreso GlideCut Wrap Slicer is designed for gift buyers, home bakers, event planners, festival shoppers, and craft users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Slide-over wrapping-paper cutter for straight cuts every time."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-13"
    ]
  },
  {
    "id": "wrap-buddies-clamp-set",
    "catalogNumber": 130,
    "slug": "wrap-buddies-clamp-set",
    "name": "Wrap Buddies Clamp Set",
    "track": "Gift Wrapping & Presentation Innovations",
    "categorySlug": "gift-wrapping-and-presentation-innovations",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Table clamps that hold paper + tape for hands-free wrapping.",
    "b2cInnovation": "Table clamps that hold paper + tape for hands-free wrapping.",
    "format": "Starter kit",
    "signal": "the Little Elf Gift Wrap Cutter (As-Seen-on-Shark-Tank) and \"Wrap Buddies\" clamp dispensers are reviewed/viral gift-wrap gadgets; per Globe and Mail, Flying Tiger introduces ~300 new (largely gifting/seasonal) items per month with 80% of its ~1,800 products under $10.",
    "aisle": "Gift Wrapping & Presentation Innovations",
    "audience": "gift buyers, home bakers, event planners, festival shoppers, and craft users",
    "priceRange": "impulse-mid.",
    "launchPriority": "Core range",
    "heroLine": "Wrap Buddies Clamp Set is a starter kit for table clamps that hold paper + tape for hands-free wrapping.",
    "demandSignal": "reviewer \"standout gadget.\"",
    "origin": "Global packaging retail",
    "benefits": [
      "Table clamps that hold paper + tape for hands-free wrapping.",
      "Table clamps that hold paper + tape for hands-free wrapping.",
      "Demand signal: reviewer \"standout gadget.\"",
      "Consumer-sized format for gift buyers, home bakers, event planners, festival shoppers, and craft users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-130"
      },
      {
        "label": "Aisle",
        "value": "Gift Wrapping & Presentation Innovations"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Wrap Buddies Clamp Set",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Wrap Buddies Clamp Set?",
        "answer": "Wrap Buddies Clamp Set is a Toreso starter kit made for table clamps that hold paper + tape for hands-free wrapping."
      },
      {
        "question": "Who should use Wrap Buddies Clamp Set?",
        "answer": "Wrap Buddies Clamp Set is designed for gift buyers, home bakers, event planners, festival shoppers, and craft users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Table clamps that hold paper + tape for hands-free wrapping."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-13"
    ]
  },
  {
    "id": "toreso-tape-and-cut-pen",
    "catalogNumber": 131,
    "slug": "toreso-tape-and-cut-pen",
    "name": "Toreso Tape-and-Cut Pen",
    "track": "Gift Wrapping & Presentation Innovations",
    "categorySlug": "gift-wrapping-and-presentation-innovations",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Pen-format tape dispenser + paper cutter.",
    "b2cInnovation": "Pen-format tape dispenser + paper cutter.",
    "format": "Gift Wrapping product",
    "signal": "the Little Elf Gift Wrap Cutter (As-Seen-on-Shark-Tank) and \"Wrap Buddies\" clamp dispensers are reviewed/viral gift-wrap gadgets; per Globe and Mail, Flying Tiger introduces ~300 new (largely gifting/seasonal) items per month with 80% of its ~1,800 products under $10.",
    "aisle": "Gift Wrapping & Presentation Innovations",
    "audience": "gift buyers, home bakers, event planners, festival shoppers, and craft users",
    "priceRange": "impulse.",
    "launchPriority": "Core range",
    "heroLine": "Toreso Tape-and-Cut Pen is a gift wrapping product for pen-format tape dispenser + paper cutter.",
    "demandSignal": "the Little Elf Gift Wrap Cutter (As-Seen-on-Shark-Tank) and \"Wrap Buddies\" clamp dispensers are reviewed/viral gift-wrap gadgets; per Globe and Mail, Flying Tiger introduces ~300 new (largely gifting/seasonal) items per month with 80% of its ~1,800 products under $10.",
    "origin": "Global packaging retail",
    "benefits": [
      "Pen-format tape dispenser + paper cutter.",
      "Pen-format tape dispenser + paper cutter.",
      "Built for the gift wrapping & presentation innovations aisle.",
      "Consumer-sized format for gift buyers, home bakers, event planners, festival shoppers, and craft users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-131"
      },
      {
        "label": "Aisle",
        "value": "Gift Wrapping & Presentation Innovations"
      },
      {
        "label": "Format",
        "value": "Gift Wrapping product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Tape-and-Cut Pen",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Tape-and-Cut Pen?",
        "answer": "Toreso Tape-and-Cut Pen is a Toreso gift wrapping product made for pen-format tape dispenser + paper cutter."
      },
      {
        "question": "Who should use Toreso Tape-and-Cut Pen?",
        "answer": "Toreso Tape-and-Cut Pen is designed for gift buyers, home bakers, event planners, festival shoppers, and craft users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Pen-format tape dispenser + paper cutter."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-13"
    ]
  },
  {
    "id": "reusable-fabric-gift-wrap-furoshiki",
    "catalogNumber": 132,
    "slug": "reusable-fabric-gift-wrap-furoshiki",
    "name": "Reusable Fabric Gift Wrap (Furoshiki)",
    "track": "Gift Wrapping & Presentation Innovations",
    "categorySlug": "gift-wrapping-and-presentation-innovations",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Cloth wrap set in fun prints.",
    "b2cInnovation": "Cloth wrap set in fun prints.",
    "format": "Flexible pack",
    "signal": "the Little Elf Gift Wrap Cutter (As-Seen-on-Shark-Tank) and \"Wrap Buddies\" clamp dispensers are reviewed/viral gift-wrap gadgets; per Globe and Mail, Flying Tiger introduces ~300 new (largely gifting/seasonal) items per month with 80% of its ~1,800 products under $10.",
    "aisle": "Gift Wrapping & Presentation Innovations",
    "audience": "gift buyers, home bakers, event planners, festival shoppers, and craft users",
    "priceRange": "impulse-mid.",
    "launchPriority": "Premium daily",
    "heroLine": "Reusable Fabric Gift Wrap (Furoshiki) is a flexible pack for cloth wrap set in fun prints.",
    "demandSignal": "the Little Elf Gift Wrap Cutter (As-Seen-on-Shark-Tank) and \"Wrap Buddies\" clamp dispensers are reviewed/viral gift-wrap gadgets; per Globe and Mail, Flying Tiger introduces ~300 new (largely gifting/seasonal) items per month with 80% of its ~1,800 products under $10.",
    "origin": "Japan furoshiki tradition.",
    "benefits": [
      "Cloth wrap set in fun prints.",
      "Cloth wrap set in fun prints.",
      "Built for the gift wrapping & presentation innovations aisle.",
      "Consumer-sized format for gift buyers, home bakers, event planners, festival shoppers, and craft users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-132"
      },
      {
        "label": "Aisle",
        "value": "Gift Wrapping & Presentation Innovations"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Japan furoshiki tradition."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Reusable Fabric Gift Wrap (Furoshiki)",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Reusable Fabric Gift Wrap (Furoshiki)?",
        "answer": "Reusable Fabric Gift Wrap (Furoshiki) is a Toreso flexible pack made for cloth wrap set in fun prints."
      },
      {
        "question": "Who should use Reusable Fabric Gift Wrap (Furoshiki)?",
        "answer": "Reusable Fabric Gift Wrap (Furoshiki) is designed for gift buyers, home bakers, event planners, festival shoppers, and craft users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Cloth wrap set in fun prints."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-13"
    ]
  },
  {
    "id": "toreso-instant-gift-bags-pop-open",
    "catalogNumber": 133,
    "slug": "toreso-instant-gift-bags-pop-open",
    "name": "Toreso Instant Gift Bags (pop-open)",
    "track": "Gift Wrapping & Presentation Innovations",
    "categorySlug": "gift-wrapping-and-presentation-innovations",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Flat-pack pop-open gift boxes.",
    "b2cInnovation": "Flat-pack pop-open gift boxes.",
    "format": "Flexible pack",
    "signal": "the Little Elf Gift Wrap Cutter (As-Seen-on-Shark-Tank) and \"Wrap Buddies\" clamp dispensers are reviewed/viral gift-wrap gadgets; per Globe and Mail, Flying Tiger introduces ~300 new (largely gifting/seasonal) items per month with 80% of its ~1,800 products under $10.",
    "aisle": "Gift Wrapping & Presentation Innovations",
    "audience": "gift buyers, home bakers, event planners, festival shoppers, and craft users",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Instant Gift Bags (pop-open) is a flexible pack for flat-pack pop-open gift boxes.",
    "demandSignal": "the Little Elf Gift Wrap Cutter (As-Seen-on-Shark-Tank) and \"Wrap Buddies\" clamp dispensers are reviewed/viral gift-wrap gadgets; per Globe and Mail, Flying Tiger introduces ~300 new (largely gifting/seasonal) items per month with 80% of its ~1,800 products under $10.",
    "origin": "Global packaging retail",
    "benefits": [
      "Flat-pack pop-open gift boxes.",
      "Flat-pack pop-open gift boxes.",
      "Built for the gift wrapping & presentation innovations aisle.",
      "Consumer-sized format for gift buyers, home bakers, event planners, festival shoppers, and craft users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-133"
      },
      {
        "label": "Aisle",
        "value": "Gift Wrapping & Presentation Innovations"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Instant Gift Bags (pop-open)",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Instant Gift Bags (pop-open)?",
        "answer": "Toreso Instant Gift Bags (pop-open) is a Toreso flexible pack made for flat-pack pop-open gift boxes."
      },
      {
        "question": "Who should use Toreso Instant Gift Bags (pop-open)?",
        "answer": "Toreso Instant Gift Bags (pop-open) is designed for gift buyers, home bakers, event planners, festival shoppers, and craft users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Flat-pack pop-open gift boxes."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-13"
    ]
  },
  {
    "id": "ribbon-curling-dispenser",
    "catalogNumber": 134,
    "slug": "ribbon-curling-dispenser",
    "name": "Ribbon Curling + Dispenser",
    "track": "Gift Wrapping & Presentation Innovations",
    "categorySlug": "gift-wrapping-and-presentation-innovations",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Ribbon tree dispenser with curler.",
    "b2cInnovation": "Ribbon tree dispenser with curler.",
    "format": "Reusable tool",
    "signal": "the Little Elf Gift Wrap Cutter (As-Seen-on-Shark-Tank) and \"Wrap Buddies\" clamp dispensers are reviewed/viral gift-wrap gadgets; per Globe and Mail, Flying Tiger introduces ~300 new (largely gifting/seasonal) items per month with 80% of its ~1,800 products under $10.",
    "aisle": "Gift Wrapping & Presentation Innovations",
    "audience": "gift buyers, home bakers, event planners, festival shoppers, and craft users",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Ribbon Curling + Dispenser is a reusable tool for ribbon tree dispenser with curler.",
    "demandSignal": "the Little Elf Gift Wrap Cutter (As-Seen-on-Shark-Tank) and \"Wrap Buddies\" clamp dispensers are reviewed/viral gift-wrap gadgets; per Globe and Mail, Flying Tiger introduces ~300 new (largely gifting/seasonal) items per month with 80% of its ~1,800 products under $10.",
    "origin": "Global packaging retail",
    "benefits": [
      "Ribbon tree dispenser with curler.",
      "Ribbon tree dispenser with curler.",
      "Built for the gift wrapping & presentation innovations aisle.",
      "Consumer-sized format for gift buyers, home bakers, event planners, festival shoppers, and craft users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-134"
      },
      {
        "label": "Aisle",
        "value": "Gift Wrapping & Presentation Innovations"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Ribbon Curling + Dispenser",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Ribbon Curling + Dispenser?",
        "answer": "Ribbon Curling + Dispenser is a Toreso reusable tool made for ribbon tree dispenser with curler."
      },
      {
        "question": "Who should use Ribbon Curling + Dispenser?",
        "answer": "Ribbon Curling + Dispenser is designed for gift buyers, home bakers, event planners, festival shoppers, and craft users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Ribbon tree dispenser with curler."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-13"
    ]
  },
  {
    "id": "toreso-bow-maker-tool",
    "catalogNumber": 135,
    "slug": "toreso-bow-maker-tool",
    "name": "Toreso Bow Maker Tool",
    "track": "Gift Wrapping & Presentation Innovations",
    "categorySlug": "gift-wrapping-and-presentation-innovations",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Tool that makes perfect bows in seconds.",
    "b2cInnovation": "Tool that makes perfect bows in seconds.",
    "format": "Reusable tool",
    "signal": "the Little Elf Gift Wrap Cutter (As-Seen-on-Shark-Tank) and \"Wrap Buddies\" clamp dispensers are reviewed/viral gift-wrap gadgets; per Globe and Mail, Flying Tiger introduces ~300 new (largely gifting/seasonal) items per month with 80% of its ~1,800 products under $10.",
    "aisle": "Gift Wrapping & Presentation Innovations",
    "audience": "gift buyers, home bakers, event planners, festival shoppers, and craft users",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Bow Maker Tool is a reusable tool for tool that makes perfect bows in seconds.",
    "demandSignal": "craft-tok viral.",
    "origin": "Global packaging retail",
    "benefits": [
      "Tool that makes perfect bows in seconds.",
      "Tool that makes perfect bows in seconds.",
      "Demand signal: craft-tok viral.",
      "Consumer-sized format for gift buyers, home bakers, event planners, festival shoppers, and craft users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-135"
      },
      {
        "label": "Aisle",
        "value": "Gift Wrapping & Presentation Innovations"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Bow Maker Tool",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Bow Maker Tool?",
        "answer": "Toreso Bow Maker Tool is a Toreso reusable tool made for tool that makes perfect bows in seconds."
      },
      {
        "question": "Who should use Toreso Bow Maker Tool?",
        "answer": "Toreso Bow Maker Tool is designed for gift buyers, home bakers, event planners, festival shoppers, and craft users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Tool that makes perfect bows in seconds."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-13"
    ]
  },
  {
    "id": "magnetic-gift-boxes-reusable",
    "catalogNumber": 136,
    "slug": "magnetic-gift-boxes-reusable",
    "name": "Magnetic Gift Boxes (reusable)",
    "track": "Gift Wrapping & Presentation Innovations",
    "categorySlug": "gift-wrapping-and-presentation-innovations",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Premium magnetic-lid boxes for unboxing.",
    "b2cInnovation": "Premium magnetic-lid boxes for unboxing.",
    "format": "Rigid storage",
    "signal": "the Little Elf Gift Wrap Cutter (As-Seen-on-Shark-Tank) and \"Wrap Buddies\" clamp dispensers are reviewed/viral gift-wrap gadgets; per Globe and Mail, Flying Tiger introduces ~300 new (largely gifting/seasonal) items per month with 80% of its ~1,800 products under $10.",
    "aisle": "Gift Wrapping & Presentation Innovations",
    "audience": "gift buyers, home bakers, event planners, festival shoppers, and craft users",
    "priceRange": "mid.",
    "launchPriority": "Future drop",
    "heroLine": "Magnetic Gift Boxes (reusable) is a rigid storage for premium magnetic-lid boxes for unboxing.",
    "demandSignal": "Flying Tiger gifting aesthetic.",
    "origin": "Global packaging retail",
    "benefits": [
      "Premium magnetic-lid boxes for unboxing.",
      "Premium magnetic-lid boxes for unboxing.",
      "Demand signal: Flying Tiger gifting aesthetic.",
      "Consumer-sized format for gift buyers, home bakers, event planners, festival shoppers, and craft users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-136"
      },
      {
        "label": "Aisle",
        "value": "Gift Wrapping & Presentation Innovations"
      },
      {
        "label": "Format",
        "value": "Rigid storage"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Magnetic Gift Boxes (reusable)",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Magnetic Gift Boxes (reusable)?",
        "answer": "Magnetic Gift Boxes (reusable) is a Toreso rigid storage made for premium magnetic-lid boxes for unboxing."
      },
      {
        "question": "Who should use Magnetic Gift Boxes (reusable)?",
        "answer": "Magnetic Gift Boxes (reusable) is designed for gift buyers, home bakers, event planners, festival shoppers, and craft users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Premium magnetic-lid boxes for unboxing."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-13"
    ]
  },
  {
    "id": "toreso-money-cash-gift-envelopes",
    "catalogNumber": 137,
    "slug": "toreso-money-cash-gift-envelopes",
    "name": "Toreso Money/Cash Gift Envelopes",
    "track": "Gift Wrapping & Presentation Innovations",
    "categorySlug": "gift-wrapping-and-presentation-innovations",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Decorative cash envelopes (shagun/festival).",
    "b2cInnovation": "Decorative cash envelopes (shagun/festival).",
    "format": "Gift Wrapping product",
    "signal": "the Little Elf Gift Wrap Cutter (As-Seen-on-Shark-Tank) and \"Wrap Buddies\" clamp dispensers are reviewed/viral gift-wrap gadgets; per Globe and Mail, Flying Tiger introduces ~300 new (largely gifting/seasonal) items per month with 80% of its ~1,800 products under $10.",
    "aisle": "Gift Wrapping & Presentation Innovations",
    "audience": "gift buyers, home bakers, event planners, festival shoppers, and craft users",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Money/Cash Gift Envelopes is a gift wrapping product for decorative cash envelopes (shagun/festival).",
    "demandSignal": "the Little Elf Gift Wrap Cutter (As-Seen-on-Shark-Tank) and \"Wrap Buddies\" clamp dispensers are reviewed/viral gift-wrap gadgets; per Globe and Mail, Flying Tiger introduces ~300 new (largely gifting/seasonal) items per month with 80% of its ~1,800 products under $10.",
    "origin": "India-relevant (weddings, Diwali).",
    "benefits": [
      "Decorative cash envelopes (shagun/festival).",
      "Decorative cash envelopes (shagun/festival).",
      "Built for the gift wrapping & presentation innovations aisle.",
      "Consumer-sized format for gift buyers, home bakers, event planners, festival shoppers, and craft users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-137"
      },
      {
        "label": "Aisle",
        "value": "Gift Wrapping & Presentation Innovations"
      },
      {
        "label": "Format",
        "value": "Gift Wrapping product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "India-relevant (weddings, Diwali)."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Money/Cash Gift Envelopes",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Money/Cash Gift Envelopes?",
        "answer": "Toreso Money/Cash Gift Envelopes is a Toreso gift wrapping product made for decorative cash envelopes (shagun/festival)."
      },
      {
        "question": "Who should use Toreso Money/Cash Gift Envelopes?",
        "answer": "Toreso Money/Cash Gift Envelopes is designed for gift buyers, home bakers, event planners, festival shoppers, and craft users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Decorative cash envelopes (shagun/festival)."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-13"
    ]
  },
  {
    "id": "eco-kraft-wrap-stamp-kit",
    "catalogNumber": 138,
    "slug": "eco-kraft-wrap-stamp-kit",
    "name": "Eco Kraft Wrap + Stamp Kit",
    "track": "Gift Wrapping & Presentation Innovations",
    "categorySlug": "gift-wrapping-and-presentation-innovations",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Brown kraft roll + stamps + twine.",
    "b2cInnovation": "Brown kraft roll + stamps + twine.",
    "format": "Starter kit",
    "signal": "the Little Elf Gift Wrap Cutter (As-Seen-on-Shark-Tank) and \"Wrap Buddies\" clamp dispensers are reviewed/viral gift-wrap gadgets; per Globe and Mail, Flying Tiger introduces ~300 new (largely gifting/seasonal) items per month with 80% of its ~1,800 products under $10.",
    "aisle": "Gift Wrapping & Presentation Innovations",
    "audience": "gift buyers, home bakers, event planners, festival shoppers, and craft users",
    "priceRange": "impulse-mid.",
    "launchPriority": "Future drop",
    "heroLine": "Eco Kraft Wrap + Stamp Kit is a starter kit for brown kraft roll + stamps + twine.",
    "demandSignal": "the Little Elf Gift Wrap Cutter (As-Seen-on-Shark-Tank) and \"Wrap Buddies\" clamp dispensers are reviewed/viral gift-wrap gadgets; per Globe and Mail, Flying Tiger introduces ~300 new (largely gifting/seasonal) items per month with 80% of its ~1,800 products under $10.",
    "origin": "Global packaging retail",
    "benefits": [
      "Brown kraft roll + stamps + twine.",
      "Brown kraft roll + stamps + twine.",
      "Built for the gift wrapping & presentation innovations aisle.",
      "Consumer-sized format for gift buyers, home bakers, event planners, festival shoppers, and craft users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-138"
      },
      {
        "label": "Aisle",
        "value": "Gift Wrapping & Presentation Innovations"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Eco Kraft Wrap + Stamp Kit",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Eco Kraft Wrap + Stamp Kit?",
        "answer": "Eco Kraft Wrap + Stamp Kit is a Toreso starter kit made for brown kraft roll + stamps + twine."
      },
      {
        "question": "Who should use Eco Kraft Wrap + Stamp Kit?",
        "answer": "Eco Kraft Wrap + Stamp Kit is designed for gift buyers, home bakers, event planners, festival shoppers, and craft users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Brown kraft roll + stamps + twine."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-13"
    ]
  },
  {
    "id": "toreso-cellophane-treat-bags-ties",
    "catalogNumber": 139,
    "slug": "toreso-cellophane-treat-bags-ties",
    "name": "Toreso Cellophane Treat Bags + Ties",
    "track": "Gift Wrapping & Presentation Innovations",
    "categorySlug": "gift-wrapping-and-presentation-innovations",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Clear treat bags with twist ties for homemade gifts.",
    "b2cInnovation": "Clear treat bags with twist ties for homemade gifts.",
    "format": "Flexible pack",
    "signal": "the Little Elf Gift Wrap Cutter (As-Seen-on-Shark-Tank) and \"Wrap Buddies\" clamp dispensers are reviewed/viral gift-wrap gadgets; per Globe and Mail, Flying Tiger introduces ~300 new (largely gifting/seasonal) items per month with 80% of its ~1,800 products under $10.",
    "aisle": "Gift Wrapping & Presentation Innovations",
    "audience": "gift buyers, home bakers, event planners, festival shoppers, and craft users",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Cellophane Treat Bags + Ties is a flexible pack for clear treat bags with twist ties for homemade gifts.",
    "demandSignal": "\"treat bags for my business\" sealer use-case.",
    "origin": "Global packaging retail",
    "benefits": [
      "Clear treat bags with twist ties for homemade gifts.",
      "Clear treat bags with twist ties for homemade gifts.",
      "Demand signal: \"treat bags for my business\" sealer use-case.",
      "Consumer-sized format for gift buyers, home bakers, event planners, festival shoppers, and craft users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-139"
      },
      {
        "label": "Aisle",
        "value": "Gift Wrapping & Presentation Innovations"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Cellophane Treat Bags + Ties",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Cellophane Treat Bags + Ties?",
        "answer": "Toreso Cellophane Treat Bags + Ties is a Toreso flexible pack made for clear treat bags with twist ties for homemade gifts."
      },
      {
        "question": "Who should use Toreso Cellophane Treat Bags + Ties?",
        "answer": "Toreso Cellophane Treat Bags + Ties is designed for gift buyers, home bakers, event planners, festival shoppers, and craft users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Clear treat bags with twist ties for homemade gifts."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-13"
    ]
  },
  {
    "id": "pre-tied-bows-multipack",
    "catalogNumber": 140,
    "slug": "pre-tied-bows-multipack",
    "name": "Pre-tied Bows Multipack",
    "track": "Gift Wrapping & Presentation Innovations",
    "categorySlug": "gift-wrapping-and-presentation-innovations",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Stick-on pre-made bows.",
    "b2cInnovation": "Stick-on pre-made bows.",
    "format": "Starter kit",
    "signal": "the Little Elf Gift Wrap Cutter (As-Seen-on-Shark-Tank) and \"Wrap Buddies\" clamp dispensers are reviewed/viral gift-wrap gadgets; per Globe and Mail, Flying Tiger introduces ~300 new (largely gifting/seasonal) items per month with 80% of its ~1,800 products under $10.",
    "aisle": "Gift Wrapping & Presentation Innovations",
    "audience": "gift buyers, home bakers, event planners, festival shoppers, and craft users",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Pre-tied Bows Multipack is a starter kit for stick-on pre-made bows.",
    "demandSignal": "the Little Elf Gift Wrap Cutter (As-Seen-on-Shark-Tank) and \"Wrap Buddies\" clamp dispensers are reviewed/viral gift-wrap gadgets; per Globe and Mail, Flying Tiger introduces ~300 new (largely gifting/seasonal) items per month with 80% of its ~1,800 products under $10.",
    "origin": "Global packaging retail",
    "benefits": [
      "Stick-on pre-made bows.",
      "Stick-on pre-made bows.",
      "Built for the gift wrapping & presentation innovations aisle.",
      "Consumer-sized format for gift buyers, home bakers, event planners, festival shoppers, and craft users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-140"
      },
      {
        "label": "Aisle",
        "value": "Gift Wrapping & Presentation Innovations"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Pre-tied Bows Multipack",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Pre-tied Bows Multipack?",
        "answer": "Pre-tied Bows Multipack is a Toreso starter kit made for stick-on pre-made bows."
      },
      {
        "question": "Who should use Pre-tied Bows Multipack?",
        "answer": "Pre-tied Bows Multipack is designed for gift buyers, home bakers, event planners, festival shoppers, and craft users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Stick-on pre-made bows."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-13"
    ]
  },
  {
    "id": "toreso-leakproof-bento-box",
    "catalogNumber": 141,
    "slug": "toreso-leakproof-bento-box",
    "name": "Toreso Leakproof Bento Box",
    "track": "Portion, Snack & Lunch Packaging",
    "categorySlug": "portion-snack-and-lunch-packaging",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Compartment bento with locking lid + seal.",
    "b2cInnovation": "Compartment bento with locking lid + seal.",
    "format": "Rigid storage",
    "signal": "Daiso's bento boxes, sauce containers (heart/Mickey), and food picks are Mercari/TikTok resale and haul staples; bento culture is a deep APAC vein.",
    "aisle": "Portion, Snack & Lunch Packaging",
    "audience": "school lunch packers, office-goers, families, bento users, and portion-control kitchens",
    "priceRange": "mid.",
    "launchPriority": "Premium daily",
    "heroLine": "Toreso Leakproof Bento Box is a rigid storage for compartment bento with locking lid + seal.",
    "demandSignal": "Daiso bento line.",
    "origin": "Japan.",
    "benefits": [
      "Compartment bento with locking lid + seal.",
      "Compartment bento with locking lid + seal.",
      "Demand signal: Daiso bento line.",
      "Consumer-sized format for school lunch packers, office-goers, families, bento users, and portion-control kitchens."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-141"
      },
      {
        "label": "Aisle",
        "value": "Portion, Snack & Lunch Packaging"
      },
      {
        "label": "Format",
        "value": "Rigid storage"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Japan."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Leakproof Bento Box",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Leakproof Bento Box?",
        "answer": "Toreso Leakproof Bento Box is a Toreso rigid storage made for compartment bento with locking lid + seal."
      },
      {
        "question": "Who should use Toreso Leakproof Bento Box?",
        "answer": "Toreso Leakproof Bento Box is designed for school lunch packers, office-goers, families, bento users, and portion-control kitchens."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Compartment bento with locking lid + seal."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-14"
    ]
  },
  {
    "id": "mini-sauce-containers-set",
    "catalogNumber": 142,
    "slug": "mini-sauce-containers-set",
    "name": "Mini Sauce Containers (set)",
    "track": "Portion, Snack & Lunch Packaging",
    "categorySlug": "portion-snack-and-lunch-packaging",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Tiny leakproof dressing/sauce pods.",
    "b2cInnovation": "Tiny leakproof dressing/sauce pods.",
    "format": "Starter kit",
    "signal": "Daiso's bento boxes, sauce containers (heart/Mickey), and food picks are Mercari/TikTok resale and haul staples; bento culture is a deep APAC vein.",
    "aisle": "Portion, Snack & Lunch Packaging",
    "audience": "school lunch packers, office-goers, families, bento users, and portion-control kitchens",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Mini Sauce Containers (set) is a starter kit for tiny leakproof dressing/sauce pods.",
    "demandSignal": "Daiso \"sauce container heart 4pcs.\"",
    "origin": "Japan.",
    "benefits": [
      "Tiny leakproof dressing/sauce pods.",
      "Tiny leakproof dressing/sauce pods.",
      "Demand signal: Daiso \"sauce container heart 4pcs.\"",
      "Consumer-sized format for school lunch packers, office-goers, families, bento users, and portion-control kitchens."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-142"
      },
      {
        "label": "Aisle",
        "value": "Portion, Snack & Lunch Packaging"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Japan."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Mini Sauce Containers (set)",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Mini Sauce Containers (set)?",
        "answer": "Mini Sauce Containers (set) is a Toreso starter kit made for tiny leakproof dressing/sauce pods."
      },
      {
        "question": "Who should use Mini Sauce Containers (set)?",
        "answer": "Mini Sauce Containers (set) is designed for school lunch packers, office-goers, families, bento users, and portion-control kitchens."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Tiny leakproof dressing/sauce pods."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-14"
    ]
  },
  {
    "id": "toreso-snack-capsule-tower",
    "catalogNumber": 143,
    "slug": "toreso-snack-capsule-tower",
    "name": "Toreso Snack Capsule Tower",
    "track": "Portion, Snack & Lunch Packaging",
    "categorySlug": "portion-snack-and-lunch-packaging",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Stackable twist snack capsules for nuts/dry fruit.",
    "b2cInnovation": "Stackable twist snack capsules for nuts/dry fruit.",
    "format": "Reusable tool",
    "signal": "Daiso's bento boxes, sauce containers (heart/Mickey), and food picks are Mercari/TikTok resale and haul staples; bento culture is a deep APAC vein.",
    "aisle": "Portion, Snack & Lunch Packaging",
    "audience": "school lunch packers, office-goers, families, bento users, and portion-control kitchens",
    "priceRange": "impulse-mid.",
    "launchPriority": "Premium daily",
    "heroLine": "Toreso Snack Capsule Tower is a reusable tool for stackable twist snack capsules for nuts/dry fruit.",
    "demandSignal": "Daiso's bento boxes, sauce containers (heart/Mickey), and food picks are Mercari/TikTok resale and haul staples; bento culture is a deep APAC vein.",
    "origin": "Global packaging retail",
    "benefits": [
      "Stackable twist snack capsules for nuts/dry fruit.",
      "Stackable twist snack capsules for nuts/dry fruit.",
      "Built for the portion, snack & lunch packaging aisle.",
      "Consumer-sized format for school lunch packers, office-goers, families, bento users, and portion-control kitchens."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-143"
      },
      {
        "label": "Aisle",
        "value": "Portion, Snack & Lunch Packaging"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Snack Capsule Tower",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Snack Capsule Tower?",
        "answer": "Toreso Snack Capsule Tower is a Toreso reusable tool made for stackable twist snack capsules for nuts/dry fruit."
      },
      {
        "question": "Who should use Toreso Snack Capsule Tower?",
        "answer": "Toreso Snack Capsule Tower is designed for school lunch packers, office-goers, families, bento users, and portion-control kitchens."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Stackable twist snack capsules for nuts/dry fruit."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-14"
    ]
  },
  {
    "id": "onigiri-sandwich-wrappers",
    "catalogNumber": 144,
    "slug": "onigiri-sandwich-wrappers",
    "name": "Onigiri/Sandwich Wrappers",
    "track": "Portion, Snack & Lunch Packaging",
    "categorySlug": "portion-snack-and-lunch-packaging",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Pre-cut wrappers + molds.",
    "b2cInnovation": "Pre-cut wrappers + molds.",
    "format": "Flexible pack",
    "signal": "Daiso's bento boxes, sauce containers (heart/Mickey), and food picks are Mercari/TikTok resale and haul staples; bento culture is a deep APAC vein.",
    "aisle": "Portion, Snack & Lunch Packaging",
    "audience": "school lunch packers, office-goers, families, bento users, and portion-control kitchens",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Onigiri/Sandwich Wrappers is a flexible pack for pre-cut wrappers + molds.",
    "demandSignal": "Daiso onigiri mold haul.",
    "origin": "Japan.",
    "benefits": [
      "Pre-cut wrappers + molds.",
      "Pre-cut wrappers + molds.",
      "Demand signal: Daiso onigiri mold haul.",
      "Consumer-sized format for school lunch packers, office-goers, families, bento users, and portion-control kitchens."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-144"
      },
      {
        "label": "Aisle",
        "value": "Portion, Snack & Lunch Packaging"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Japan."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Onigiri/Sandwich Wrappers",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Onigiri/Sandwich Wrappers?",
        "answer": "Onigiri/Sandwich Wrappers is a Toreso flexible pack made for pre-cut wrappers + molds."
      },
      {
        "question": "Who should use Onigiri/Sandwich Wrappers?",
        "answer": "Onigiri/Sandwich Wrappers is designed for school lunch packers, office-goers, families, bento users, and portion-control kitchens."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Pre-cut wrappers + molds."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-14"
    ]
  },
  {
    "id": "toreso-insulated-lunch-bag",
    "catalogNumber": 145,
    "slug": "toreso-insulated-lunch-bag",
    "name": "Toreso Insulated Lunch Bag",
    "track": "Portion, Snack & Lunch Packaging",
    "categorySlug": "portion-snack-and-lunch-packaging",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Character-print insulated lunch tote.",
    "b2cInnovation": "Character-print insulated lunch tote.",
    "format": "Flexible pack",
    "signal": "Daiso's bento boxes, sauce containers (heart/Mickey), and food picks are Mercari/TikTok resale and haul staples; bento culture is a deep APAC vein.",
    "aisle": "Portion, Snack & Lunch Packaging",
    "audience": "school lunch packers, office-goers, families, bento users, and portion-control kitchens",
    "priceRange": "impulse-mid.",
    "launchPriority": "Premium daily",
    "heroLine": "Toreso Insulated Lunch Bag is a flexible pack for character-print insulated lunch tote.",
    "demandSignal": "Daiso insulated lunch bag.",
    "origin": "Japan.",
    "benefits": [
      "Character-print insulated lunch tote.",
      "Character-print insulated lunch tote.",
      "Demand signal: Daiso insulated lunch bag.",
      "Consumer-sized format for school lunch packers, office-goers, families, bento users, and portion-control kitchens."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-145"
      },
      {
        "label": "Aisle",
        "value": "Portion, Snack & Lunch Packaging"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Japan."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Insulated Lunch Bag",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Insulated Lunch Bag?",
        "answer": "Toreso Insulated Lunch Bag is a Toreso flexible pack made for character-print insulated lunch tote."
      },
      {
        "question": "Who should use Toreso Insulated Lunch Bag?",
        "answer": "Toreso Insulated Lunch Bag is designed for school lunch packers, office-goers, families, bento users, and portion-control kitchens."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Character-print insulated lunch tote."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-14"
    ]
  },
  {
    "id": "reusable-snack-pouches-zip",
    "catalogNumber": 146,
    "slug": "reusable-snack-pouches-zip",
    "name": "Reusable Snack Pouches (zip)",
    "track": "Portion, Snack & Lunch Packaging",
    "categorySlug": "portion-snack-and-lunch-packaging",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Washable fabric/PEVA snack pouches.",
    "b2cInnovation": "Washable fabric/PEVA snack pouches.",
    "format": "Flexible pack",
    "signal": "Daiso's bento boxes, sauce containers (heart/Mickey), and food picks are Mercari/TikTok resale and haul staples; bento culture is a deep APAC vein.",
    "aisle": "Portion, Snack & Lunch Packaging",
    "audience": "school lunch packers, office-goers, families, bento users, and portion-control kitchens",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Reusable Snack Pouches (zip) is a flexible pack for washable fabric/peva snack pouches.",
    "demandSignal": "Daiso's bento boxes, sauce containers (heart/Mickey), and food picks are Mercari/TikTok resale and haul staples; bento culture is a deep APAC vein.",
    "origin": "Global packaging retail",
    "benefits": [
      "Washable fabric/PEVA snack pouches.",
      "Washable fabric/PEVA snack pouches.",
      "Built for the portion, snack & lunch packaging aisle.",
      "Consumer-sized format for school lunch packers, office-goers, families, bento users, and portion-control kitchens."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-146"
      },
      {
        "label": "Aisle",
        "value": "Portion, Snack & Lunch Packaging"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Reusable Snack Pouches (zip)",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Reusable Snack Pouches (zip)?",
        "answer": "Reusable Snack Pouches (zip) is a Toreso flexible pack made for washable fabric/peva snack pouches."
      },
      {
        "question": "Who should use Reusable Snack Pouches (zip)?",
        "answer": "Reusable Snack Pouches (zip) is designed for school lunch packers, office-goers, families, bento users, and portion-control kitchens."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Washable fabric/PEVA snack pouches."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-14"
    ]
  },
  {
    "id": "toreso-pill-vitamin-day-organizer",
    "catalogNumber": 147,
    "slug": "toreso-pill-vitamin-day-organizer",
    "name": "Toreso Pill/Vitamin Day Organizer",
    "track": "Portion, Snack & Lunch Packaging",
    "categorySlug": "portion-snack-and-lunch-packaging",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Weekly connectable pill cases.",
    "b2cInnovation": "Weekly connectable pill cases.",
    "format": "Portion, Snack product",
    "signal": "Daiso's bento boxes, sauce containers (heart/Mickey), and food picks are Mercari/TikTok resale and haul staples; bento culture is a deep APAC vein.",
    "aisle": "Portion, Snack & Lunch Packaging",
    "audience": "school lunch packers, office-goers, families, bento users, and portion-control kitchens",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Pill/Vitamin Day Organizer is a portion, snack product for weekly connectable pill cases.",
    "demandSignal": "MUJI connectable pill case.",
    "origin": "Japan.",
    "benefits": [
      "Weekly connectable pill cases.",
      "Weekly connectable pill cases.",
      "Demand signal: MUJI connectable pill case.",
      "Consumer-sized format for school lunch packers, office-goers, families, bento users, and portion-control kitchens."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-147"
      },
      {
        "label": "Aisle",
        "value": "Portion, Snack & Lunch Packaging"
      },
      {
        "label": "Format",
        "value": "Portion, Snack product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Japan."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Pill/Vitamin Day Organizer",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Pill/Vitamin Day Organizer?",
        "answer": "Toreso Pill/Vitamin Day Organizer is a Toreso portion, snack product made for weekly connectable pill cases."
      },
      {
        "question": "Who should use Toreso Pill/Vitamin Day Organizer?",
        "answer": "Toreso Pill/Vitamin Day Organizer is designed for school lunch packers, office-goers, families, bento users, and portion-control kitchens."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Weekly connectable pill cases."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-14"
    ]
  },
  {
    "id": "portion-control-meal-prep-set",
    "catalogNumber": 148,
    "slug": "portion-control-meal-prep-set",
    "name": "Portion-Control Meal-Prep Set",
    "track": "Portion, Snack & Lunch Packaging",
    "categorySlug": "portion-snack-and-lunch-packaging",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Pre-portioned compartment containers.",
    "b2cInnovation": "Pre-portioned compartment containers.",
    "format": "Starter kit",
    "signal": "Daiso's bento boxes, sauce containers (heart/Mickey), and food picks are Mercari/TikTok resale and haul staples; bento culture is a deep APAC vein.",
    "aisle": "Portion, Snack & Lunch Packaging",
    "audience": "school lunch packers, office-goers, families, bento users, and portion-control kitchens",
    "priceRange": "mid.",
    "launchPriority": "Future drop",
    "heroLine": "Portion-Control Meal-Prep Set is a starter kit for pre-portioned compartment containers.",
    "demandSignal": "meal-prep TikTok.",
    "origin": "Global packaging retail",
    "benefits": [
      "Pre-portioned compartment containers.",
      "Pre-portioned compartment containers.",
      "Demand signal: meal-prep TikTok.",
      "Consumer-sized format for school lunch packers, office-goers, families, bento users, and portion-control kitchens."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-148"
      },
      {
        "label": "Aisle",
        "value": "Portion, Snack & Lunch Packaging"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Portion-Control Meal-Prep Set",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Portion-Control Meal-Prep Set?",
        "answer": "Portion-Control Meal-Prep Set is a Toreso starter kit made for pre-portioned compartment containers."
      },
      {
        "question": "Who should use Portion-Control Meal-Prep Set?",
        "answer": "Portion-Control Meal-Prep Set is designed for school lunch packers, office-goers, families, bento users, and portion-control kitchens."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Pre-portioned compartment containers."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-14"
    ]
  },
  {
    "id": "toreso-soup-curry-travel-jar",
    "catalogNumber": 149,
    "slug": "toreso-soup-curry-travel-jar",
    "name": "Toreso Soup/Curry Travel Jar",
    "track": "Portion, Snack & Lunch Packaging",
    "categorySlug": "portion-snack-and-lunch-packaging",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Leakproof insulated food jar.",
    "b2cInnovation": "Leakproof insulated food jar.",
    "format": "Rigid storage",
    "signal": "Daiso's bento boxes, sauce containers (heart/Mickey), and food picks are Mercari/TikTok resale and haul staples; bento culture is a deep APAC vein.",
    "aisle": "Portion, Snack & Lunch Packaging",
    "audience": "school lunch packers, office-goers, families, bento users, and portion-control kitchens",
    "priceRange": "mid.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Soup/Curry Travel Jar is a rigid storage for leakproof insulated food jar.",
    "demandSignal": "Daiso's bento boxes, sauce containers (heart/Mickey), and food picks are Mercari/TikTok resale and haul staples; bento culture is a deep APAC vein.",
    "origin": "India-relevant (sabzi/curry).",
    "benefits": [
      "Leakproof insulated food jar.",
      "Leakproof insulated food jar.",
      "Built for the portion, snack & lunch packaging aisle.",
      "Consumer-sized format for school lunch packers, office-goers, families, bento users, and portion-control kitchens."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-149"
      },
      {
        "label": "Aisle",
        "value": "Portion, Snack & Lunch Packaging"
      },
      {
        "label": "Format",
        "value": "Rigid storage"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "India-relevant (sabzi/curry)."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Soup/Curry Travel Jar",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Soup/Curry Travel Jar?",
        "answer": "Toreso Soup/Curry Travel Jar is a Toreso rigid storage made for leakproof insulated food jar."
      },
      {
        "question": "Who should use Toreso Soup/Curry Travel Jar?",
        "answer": "Toreso Soup/Curry Travel Jar is designed for school lunch packers, office-goers, families, bento users, and portion-control kitchens."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Leakproof insulated food jar."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-14"
    ]
  },
  {
    "id": "aluminium-foil-cups-lunch-sheets",
    "catalogNumber": 150,
    "slug": "aluminium-foil-cups-lunch-sheets",
    "name": "Aluminium Foil Cups + Lunch Sheets",
    "track": "Portion, Snack & Lunch Packaging",
    "categorySlug": "portion-snack-and-lunch-packaging",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Bento accessory packs.",
    "b2cInnovation": "Bento accessory packs.",
    "format": "Portion, Snack product",
    "signal": "Daiso's bento boxes, sauce containers (heart/Mickey), and food picks are Mercari/TikTok resale and haul staples; bento culture is a deep APAC vein.",
    "aisle": "Portion, Snack & Lunch Packaging",
    "audience": "school lunch packers, office-goers, families, bento users, and portion-control kitchens",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Aluminium Foil Cups + Lunch Sheets is a portion, snack product for bento accessory packs.",
    "demandSignal": "Daiso bento accessories.",
    "origin": "Japan.",
    "benefits": [
      "Bento accessory packs.",
      "Bento accessory packs.",
      "Demand signal: Daiso bento accessories.",
      "Consumer-sized format for school lunch packers, office-goers, families, bento users, and portion-control kitchens."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-150"
      },
      {
        "label": "Aisle",
        "value": "Portion, Snack & Lunch Packaging"
      },
      {
        "label": "Format",
        "value": "Portion, Snack product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Japan."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Aluminium Foil Cups + Lunch Sheets",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Aluminium Foil Cups + Lunch Sheets?",
        "answer": "Aluminium Foil Cups + Lunch Sheets is a Toreso portion, snack product made for bento accessory packs."
      },
      {
        "question": "Who should use Aluminium Foil Cups + Lunch Sheets?",
        "answer": "Aluminium Foil Cups + Lunch Sheets is designed for school lunch packers, office-goers, families, bento users, and portion-control kitchens."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Bento accessory packs."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-14"
    ]
  },
  {
    "id": "toreso-baby-food-freezer-trays",
    "catalogNumber": 151,
    "slug": "toreso-baby-food-freezer-trays",
    "name": "Toreso Baby Food Freezer Trays",
    "track": "Portion, Snack & Lunch Packaging",
    "categorySlug": "portion-snack-and-lunch-packaging",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Silicone portion trays with lids.",
    "b2cInnovation": "Silicone portion trays with lids.",
    "format": "Portion, Snack product",
    "signal": "Daiso's bento boxes, sauce containers (heart/Mickey), and food picks are Mercari/TikTok resale and haul staples; bento culture is a deep APAC vein.",
    "aisle": "Portion, Snack & Lunch Packaging",
    "audience": "school lunch packers, office-goers, families, bento users, and portion-control kitchens",
    "priceRange": "impulse-mid.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Baby Food Freezer Trays is a portion, snack product for silicone portion trays with lids.",
    "demandSignal": "Daiso's bento boxes, sauce containers (heart/Mickey), and food picks are Mercari/TikTok resale and haul staples; bento culture is a deep APAC vein.",
    "origin": "Global packaging retail",
    "benefits": [
      "Silicone portion trays with lids.",
      "Silicone portion trays with lids.",
      "Built for the portion, snack & lunch packaging aisle.",
      "Consumer-sized format for school lunch packers, office-goers, families, bento users, and portion-control kitchens."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-151"
      },
      {
        "label": "Aisle",
        "value": "Portion, Snack & Lunch Packaging"
      },
      {
        "label": "Format",
        "value": "Portion, Snack product"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Baby Food Freezer Trays",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Baby Food Freezer Trays?",
        "answer": "Toreso Baby Food Freezer Trays is a Toreso portion, snack product made for silicone portion trays with lids."
      },
      {
        "question": "Who should use Toreso Baby Food Freezer Trays?",
        "answer": "Toreso Baby Food Freezer Trays is designed for school lunch packers, office-goers, families, bento users, and portion-control kitchens."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Silicone portion trays with lids."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-14"
    ]
  },
  {
    "id": "cup-bag-cutlery-pouch",
    "catalogNumber": 152,
    "slug": "cup-bag-cutlery-pouch",
    "name": "Cup-Bag + Cutlery Pouch",
    "track": "Portion, Snack & Lunch Packaging",
    "categorySlug": "portion-snack-and-lunch-packaging",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Reusable cup sleeve + cutlery roll.",
    "b2cInnovation": "Reusable cup sleeve + cutlery roll.",
    "format": "Flexible pack",
    "signal": "Daiso's bento boxes, sauce containers (heart/Mickey), and food picks are Mercari/TikTok resale and haul staples; bento culture is a deep APAC vein.",
    "aisle": "Portion, Snack & Lunch Packaging",
    "audience": "school lunch packers, office-goers, families, bento users, and portion-control kitchens",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Cup-Bag + Cutlery Pouch is a flexible pack for reusable cup sleeve + cutlery roll.",
    "demandSignal": "Daiso cup bag line.",
    "origin": "Japan.",
    "benefits": [
      "Reusable cup sleeve + cutlery roll.",
      "Reusable cup sleeve + cutlery roll.",
      "Demand signal: Daiso cup bag line.",
      "Consumer-sized format for school lunch packers, office-goers, families, bento users, and portion-control kitchens."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-152"
      },
      {
        "label": "Aisle",
        "value": "Portion, Snack & Lunch Packaging"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Japan."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Cup-Bag + Cutlery Pouch",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Cup-Bag + Cutlery Pouch?",
        "answer": "Cup-Bag + Cutlery Pouch is a Toreso flexible pack made for reusable cup sleeve + cutlery roll."
      },
      {
        "question": "Who should use Cup-Bag + Cutlery Pouch?",
        "answer": "Cup-Bag + Cutlery Pouch is designed for school lunch packers, office-goers, families, bento users, and portion-control kitchens."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Reusable cup sleeve + cutlery roll."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-14"
    ]
  },
  {
    "id": "toreso-magcord-holder",
    "catalogNumber": 153,
    "slug": "toreso-magcord-holder",
    "name": "Toreso MagCord Holder",
    "track": "Cable, Cord & Tech Small-Item Containment",
    "categorySlug": "cable-cord-and-tech-small-item-containment",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Weighted magnetic cord keeper for desk/nightstand.",
    "b2cInnovation": "Weighted magnetic cord keeper for desk/nightstand.",
    "format": "Reusable tool",
    "signal": "magnetic cord organizers (Smartish Cable Wrangler ~$30; many sub-$10 Amazon/Etsy/Home Depot multipacks) are a high-volume best-seller category; Daiso Korea's transparent cable pouches are listed travel essentials.",
    "aisle": "Cable, Cord & Tech Small-Item Containment",
    "audience": "desk users, travelers, students, gadget owners, and cable-heavy homes",
    "priceRange": "impulse-mid.",
    "launchPriority": "Premium daily",
    "heroLine": "Toreso MagCord Holder is a reusable tool for weighted magnetic cord keeper for desk/nightstand.",
    "demandSignal": "Smartish best-seller.",
    "origin": "Global packaging retail",
    "benefits": [
      "Weighted magnetic cord keeper for desk/nightstand.",
      "Weighted magnetic cord keeper for desk/nightstand.",
      "Demand signal: Smartish best-seller.",
      "Consumer-sized format for desk users, travelers, students, gadget owners, and cable-heavy homes."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-153"
      },
      {
        "label": "Aisle",
        "value": "Cable, Cord & Tech Small-Item Containment"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso MagCord Holder",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso MagCord Holder?",
        "answer": "Toreso MagCord Holder is a Toreso reusable tool made for weighted magnetic cord keeper for desk/nightstand."
      },
      {
        "question": "Who should use Toreso MagCord Holder?",
        "answer": "Toreso MagCord Holder is designed for desk users, travelers, students, gadget owners, and cable-heavy homes."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Weighted magnetic cord keeper for desk/nightstand."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-15"
    ]
  },
  {
    "id": "magcord-clip-multipack",
    "catalogNumber": 154,
    "slug": "magcord-clip-multipack",
    "name": "MagCord Clip Multipack",
    "track": "Cable, Cord & Tech Small-Item Containment",
    "categorySlug": "cable-cord-and-tech-small-item-containment",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Adhesive magnetic cable clips (8-pack).",
    "b2cInnovation": "Adhesive magnetic cable clips (8-pack).",
    "format": "Starter kit",
    "signal": "magnetic cord organizers (Smartish Cable Wrangler ~$30; many sub-$10 Amazon/Etsy/Home Depot multipacks) are a high-volume best-seller category; Daiso Korea's transparent cable pouches are listed travel essentials.",
    "aisle": "Cable, Cord & Tech Small-Item Containment",
    "audience": "desk users, travelers, students, gadget owners, and cable-heavy homes",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "MagCord Clip Multipack is a starter kit for adhesive magnetic cable clips (8-pack).",
    "demandSignal": "Amazon/Home Depot best-seller.",
    "origin": "Global packaging retail",
    "benefits": [
      "Adhesive magnetic cable clips (8-pack).",
      "Adhesive magnetic cable clips (8-pack).",
      "Demand signal: Amazon/Home Depot best-seller.",
      "Consumer-sized format for desk users, travelers, students, gadget owners, and cable-heavy homes."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-154"
      },
      {
        "label": "Aisle",
        "value": "Cable, Cord & Tech Small-Item Containment"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "MagCord Clip Multipack",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is MagCord Clip Multipack?",
        "answer": "MagCord Clip Multipack is a Toreso starter kit made for adhesive magnetic cable clips (8-pack)."
      },
      {
        "question": "Who should use MagCord Clip Multipack?",
        "answer": "MagCord Clip Multipack is designed for desk users, travelers, students, gadget owners, and cable-heavy homes."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Adhesive magnetic cable clips (8-pack)."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-15"
    ]
  },
  {
    "id": "toreso-cable-taco-wraps",
    "catalogNumber": 155,
    "slug": "toreso-cable-taco-wraps",
    "name": "Toreso Cable Taco Wraps",
    "track": "Cable, Cord & Tech Small-Item Containment",
    "categorySlug": "cable-cord-and-tech-small-item-containment",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Snap silicone cable wraps in fun shapes.",
    "b2cInnovation": "Snap silicone cable wraps in fun shapes.",
    "format": "Flexible pack",
    "signal": "magnetic cord organizers (Smartish Cable Wrangler ~$30; many sub-$10 Amazon/Etsy/Home Depot multipacks) are a high-volume best-seller category; Daiso Korea's transparent cable pouches are listed travel essentials.",
    "aisle": "Cable, Cord & Tech Small-Item Containment",
    "audience": "desk users, travelers, students, gadget owners, and cable-heavy homes",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Cable Taco Wraps is a flexible pack for snap silicone cable wraps in fun shapes.",
    "demandSignal": "magnetic cord organizers (Smartish Cable Wrangler ~$30; many sub-$10 Amazon/Etsy/Home Depot multipacks) are a high-volume best-seller category; Daiso Korea's transparent cable pouches are listed travel essentials.",
    "origin": "Global packaging retail",
    "benefits": [
      "Snap silicone cable wraps in fun shapes.",
      "Snap silicone cable wraps in fun shapes.",
      "Built for the cable, cord & tech small-item containment aisle.",
      "Consumer-sized format for desk users, travelers, students, gadget owners, and cable-heavy homes."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-155"
      },
      {
        "label": "Aisle",
        "value": "Cable, Cord & Tech Small-Item Containment"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Cable Taco Wraps",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Cable Taco Wraps?",
        "answer": "Toreso Cable Taco Wraps is a Toreso flexible pack made for snap silicone cable wraps in fun shapes."
      },
      {
        "question": "Who should use Toreso Cable Taco Wraps?",
        "answer": "Toreso Cable Taco Wraps is designed for desk users, travelers, students, gadget owners, and cable-heavy homes."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Snap silicone cable wraps in fun shapes."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-15"
    ]
  },
  {
    "id": "travel-tech-organizer-roll",
    "catalogNumber": 156,
    "slug": "travel-tech-organizer-roll",
    "name": "Travel Tech Organizer Roll",
    "track": "Cable, Cord & Tech Small-Item Containment",
    "categorySlug": "cable-cord-and-tech-small-item-containment",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Zip roll for chargers/earbuds/cables.",
    "b2cInnovation": "Zip roll for chargers/earbuds/cables.",
    "format": "Cable, Cord product",
    "signal": "magnetic cord organizers (Smartish Cable Wrangler ~$30; many sub-$10 Amazon/Etsy/Home Depot multipacks) are a high-volume best-seller category; Daiso Korea's transparent cable pouches are listed travel essentials.",
    "aisle": "Cable, Cord & Tech Small-Item Containment",
    "audience": "desk users, travelers, students, gadget owners, and cable-heavy homes",
    "priceRange": "impulse-mid.",
    "launchPriority": "Premium daily",
    "heroLine": "Travel Tech Organizer Roll is a cable, cord product for zip roll for chargers/earbuds/cables.",
    "demandSignal": "Daiso transparent travel pouch.",
    "origin": "Korea.",
    "benefits": [
      "Zip roll for chargers/earbuds/cables.",
      "Zip roll for chargers/earbuds/cables.",
      "Demand signal: Daiso transparent travel pouch.",
      "Consumer-sized format for desk users, travelers, students, gadget owners, and cable-heavy homes."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-156"
      },
      {
        "label": "Aisle",
        "value": "Cable, Cord & Tech Small-Item Containment"
      },
      {
        "label": "Format",
        "value": "Cable, Cord product"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Korea."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Travel Tech Organizer Roll",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Travel Tech Organizer Roll?",
        "answer": "Travel Tech Organizer Roll is a Toreso cable, cord product made for zip roll for chargers/earbuds/cables."
      },
      {
        "question": "Who should use Travel Tech Organizer Roll?",
        "answer": "Travel Tech Organizer Roll is designed for desk users, travelers, students, gadget owners, and cable-heavy homes."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Zip roll for chargers/earbuds/cables."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-15"
    ]
  },
  {
    "id": "toreso-earbud-airpods-capsule",
    "catalogNumber": 157,
    "slug": "toreso-earbud-airpods-capsule",
    "name": "Toreso Earbud/AirPods Capsule",
    "track": "Cable, Cord & Tech Small-Item Containment",
    "categorySlug": "cable-cord-and-tech-small-item-containment",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Shockproof carry capsule.",
    "b2cInnovation": "Shockproof carry capsule.",
    "format": "Reusable tool",
    "signal": "magnetic cord organizers (Smartish Cable Wrangler ~$30; many sub-$10 Amazon/Etsy/Home Depot multipacks) are a high-volume best-seller category; Daiso Korea's transparent cable pouches are listed travel essentials.",
    "aisle": "Cable, Cord & Tech Small-Item Containment",
    "audience": "desk users, travelers, students, gadget owners, and cable-heavy homes",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Earbud/AirPods Capsule is a reusable tool for shockproof carry capsule.",
    "demandSignal": "magnetic cord organizers (Smartish Cable Wrangler ~$30; many sub-$10 Amazon/Etsy/Home Depot multipacks) are a high-volume best-seller category; Daiso Korea's transparent cable pouches are listed travel essentials.",
    "origin": "Global packaging retail",
    "benefits": [
      "Shockproof carry capsule.",
      "Shockproof carry capsule.",
      "Built for the cable, cord & tech small-item containment aisle.",
      "Consumer-sized format for desk users, travelers, students, gadget owners, and cable-heavy homes."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-157"
      },
      {
        "label": "Aisle",
        "value": "Cable, Cord & Tech Small-Item Containment"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Earbud/AirPods Capsule",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Earbud/AirPods Capsule?",
        "answer": "Toreso Earbud/AirPods Capsule is a Toreso reusable tool made for shockproof carry capsule."
      },
      {
        "question": "Who should use Toreso Earbud/AirPods Capsule?",
        "answer": "Toreso Earbud/AirPods Capsule is designed for desk users, travelers, students, gadget owners, and cable-heavy homes."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Shockproof carry capsule."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-15"
    ]
  },
  {
    "id": "cord-label-clips",
    "catalogNumber": 158,
    "slug": "cord-label-clips",
    "name": "Cord Label Clips",
    "track": "Cable, Cord & Tech Small-Item Containment",
    "categorySlug": "cable-cord-and-tech-small-item-containment",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Color/icon clips to ID cables.",
    "b2cInnovation": "Color/icon clips to ID cables.",
    "format": "Reusable tool",
    "signal": "magnetic cord organizers (Smartish Cable Wrangler ~$30; many sub-$10 Amazon/Etsy/Home Depot multipacks) are a high-volume best-seller category; Daiso Korea's transparent cable pouches are listed travel essentials.",
    "aisle": "Cable, Cord & Tech Small-Item Containment",
    "audience": "desk users, travelers, students, gadget owners, and cable-heavy homes",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Cord Label Clips is a reusable tool for color/icon clips to id cables.",
    "demandSignal": "magnetic cord organizers (Smartish Cable Wrangler ~$30; many sub-$10 Amazon/Etsy/Home Depot multipacks) are a high-volume best-seller category; Daiso Korea's transparent cable pouches are listed travel essentials.",
    "origin": "Global packaging retail",
    "benefits": [
      "Color/icon clips to ID cables.",
      "Color/icon clips to ID cables.",
      "Built for the cable, cord & tech small-item containment aisle.",
      "Consumer-sized format for desk users, travelers, students, gadget owners, and cable-heavy homes."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-158"
      },
      {
        "label": "Aisle",
        "value": "Cable, Cord & Tech Small-Item Containment"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Cord Label Clips",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Cord Label Clips?",
        "answer": "Cord Label Clips is a Toreso reusable tool made for color/icon clips to id cables."
      },
      {
        "question": "Who should use Cord Label Clips?",
        "answer": "Cord Label Clips is designed for desk users, travelers, students, gadget owners, and cable-heavy homes."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Color/icon clips to ID cables."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-15"
    ]
  },
  {
    "id": "toreso-velcro-cable-ties-set",
    "catalogNumber": 159,
    "slug": "toreso-velcro-cable-ties-set",
    "name": "Toreso Velcro Cable Ties (set)",
    "track": "Cable, Cord & Tech Small-Item Containment",
    "categorySlug": "cable-cord-and-tech-small-item-containment",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Reusable hook-loop ties.",
    "b2cInnovation": "Reusable hook-loop ties.",
    "format": "Starter kit",
    "signal": "magnetic cord organizers (Smartish Cable Wrangler ~$30; many sub-$10 Amazon/Etsy/Home Depot multipacks) are a high-volume best-seller category; Daiso Korea's transparent cable pouches are listed travel essentials.",
    "aisle": "Cable, Cord & Tech Small-Item Containment",
    "audience": "desk users, travelers, students, gadget owners, and cable-heavy homes",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Velcro Cable Ties (set) is a starter kit for reusable hook-loop ties.",
    "demandSignal": "magnetic cord organizers (Smartish Cable Wrangler ~$30; many sub-$10 Amazon/Etsy/Home Depot multipacks) are a high-volume best-seller category; Daiso Korea's transparent cable pouches are listed travel essentials.",
    "origin": "Global packaging retail",
    "benefits": [
      "Reusable hook-loop ties.",
      "Reusable hook-loop ties.",
      "Built for the cable, cord & tech small-item containment aisle.",
      "Consumer-sized format for desk users, travelers, students, gadget owners, and cable-heavy homes."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-159"
      },
      {
        "label": "Aisle",
        "value": "Cable, Cord & Tech Small-Item Containment"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Velcro Cable Ties (set)",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Velcro Cable Ties (set)?",
        "answer": "Toreso Velcro Cable Ties (set) is a Toreso starter kit made for reusable hook-loop ties."
      },
      {
        "question": "Who should use Toreso Velcro Cable Ties (set)?",
        "answer": "Toreso Velcro Cable Ties (set) is designed for desk users, travelers, students, gadget owners, and cable-heavy homes."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Reusable hook-loop ties."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-15"
    ]
  },
  {
    "id": "under-desk-cable-tray-sleeve",
    "catalogNumber": 160,
    "slug": "under-desk-cable-tray-sleeve",
    "name": "Under-Desk Cable Tray/Sleeve",
    "track": "Cable, Cord & Tech Small-Item Containment",
    "categorySlug": "cable-cord-and-tech-small-item-containment",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Neoprene cable-hiding sleeve.",
    "b2cInnovation": "Neoprene cable-hiding sleeve.",
    "format": "Flexible pack",
    "signal": "magnetic cord organizers (Smartish Cable Wrangler ~$30; many sub-$10 Amazon/Etsy/Home Depot multipacks) are a high-volume best-seller category; Daiso Korea's transparent cable pouches are listed travel essentials.",
    "aisle": "Cable, Cord & Tech Small-Item Containment",
    "audience": "desk users, travelers, students, gadget owners, and cable-heavy homes",
    "priceRange": "impulse-mid.",
    "launchPriority": "Future drop",
    "heroLine": "Under-Desk Cable Tray/Sleeve is a flexible pack for neoprene cable-hiding sleeve.",
    "demandSignal": "magnetic cord organizers (Smartish Cable Wrangler ~$30; many sub-$10 Amazon/Etsy/Home Depot multipacks) are a high-volume best-seller category; Daiso Korea's transparent cable pouches are listed travel essentials.",
    "origin": "Global packaging retail",
    "benefits": [
      "Neoprene cable-hiding sleeve.",
      "Neoprene cable-hiding sleeve.",
      "Built for the cable, cord & tech small-item containment aisle.",
      "Consumer-sized format for desk users, travelers, students, gadget owners, and cable-heavy homes."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-160"
      },
      {
        "label": "Aisle",
        "value": "Cable, Cord & Tech Small-Item Containment"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Under-Desk Cable Tray/Sleeve",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Under-Desk Cable Tray/Sleeve?",
        "answer": "Under-Desk Cable Tray/Sleeve is a Toreso flexible pack made for neoprene cable-hiding sleeve."
      },
      {
        "question": "Who should use Under-Desk Cable Tray/Sleeve?",
        "answer": "Under-Desk Cable Tray/Sleeve is designed for desk users, travelers, students, gadget owners, and cable-heavy homes."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Neoprene cable-hiding sleeve."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-15"
    ]
  },
  {
    "id": "toreso-power-bank-adapter-pouch",
    "catalogNumber": 161,
    "slug": "toreso-power-bank-adapter-pouch",
    "name": "Toreso Power-Bank/Adapter Pouch",
    "track": "Cable, Cord & Tech Small-Item Containment",
    "categorySlug": "cable-cord-and-tech-small-item-containment",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Padded pouch for chargers.",
    "b2cInnovation": "Padded pouch for chargers.",
    "format": "Flexible pack",
    "signal": "magnetic cord organizers (Smartish Cable Wrangler ~$30; many sub-$10 Amazon/Etsy/Home Depot multipacks) are a high-volume best-seller category; Daiso Korea's transparent cable pouches are listed travel essentials.",
    "aisle": "Cable, Cord & Tech Small-Item Containment",
    "audience": "desk users, travelers, students, gadget owners, and cable-heavy homes",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Power-Bank/Adapter Pouch is a flexible pack for padded pouch for chargers.",
    "demandSignal": "magnetic cord organizers (Smartish Cable Wrangler ~$30; many sub-$10 Amazon/Etsy/Home Depot multipacks) are a high-volume best-seller category; Daiso Korea's transparent cable pouches are listed travel essentials.",
    "origin": "Global packaging retail",
    "benefits": [
      "Padded pouch for chargers.",
      "Padded pouch for chargers.",
      "Built for the cable, cord & tech small-item containment aisle.",
      "Consumer-sized format for desk users, travelers, students, gadget owners, and cable-heavy homes."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-161"
      },
      {
        "label": "Aisle",
        "value": "Cable, Cord & Tech Small-Item Containment"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Power-Bank/Adapter Pouch",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Power-Bank/Adapter Pouch?",
        "answer": "Toreso Power-Bank/Adapter Pouch is a Toreso flexible pack made for padded pouch for chargers."
      },
      {
        "question": "Who should use Toreso Power-Bank/Adapter Pouch?",
        "answer": "Toreso Power-Bank/Adapter Pouch is designed for desk users, travelers, students, gadget owners, and cable-heavy homes."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Padded pouch for chargers."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-15"
    ]
  },
  {
    "id": "retractable-cable-reel",
    "catalogNumber": 162,
    "slug": "retractable-cable-reel",
    "name": "Retractable Cable Reel",
    "track": "Cable, Cord & Tech Small-Item Containment",
    "categorySlug": "cable-cord-and-tech-small-item-containment",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Spring-loaded cord reel.",
    "b2cInnovation": "Spring-loaded cord reel.",
    "format": "Cable, Cord product",
    "signal": "magnetic cord organizers (Smartish Cable Wrangler ~$30; many sub-$10 Amazon/Etsy/Home Depot multipacks) are a high-volume best-seller category; Daiso Korea's transparent cable pouches are listed travel essentials.",
    "aisle": "Cable, Cord & Tech Small-Item Containment",
    "audience": "desk users, travelers, students, gadget owners, and cable-heavy homes",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Retractable Cable Reel is a cable, cord product for spring-loaded cord reel.",
    "demandSignal": "magnetic cord organizers (Smartish Cable Wrangler ~$30; many sub-$10 Amazon/Etsy/Home Depot multipacks) are a high-volume best-seller category; Daiso Korea's transparent cable pouches are listed travel essentials.",
    "origin": "Global packaging retail",
    "benefits": [
      "Spring-loaded cord reel.",
      "Spring-loaded cord reel.",
      "Built for the cable, cord & tech small-item containment aisle.",
      "Consumer-sized format for desk users, travelers, students, gadget owners, and cable-heavy homes."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-162"
      },
      {
        "label": "Aisle",
        "value": "Cable, Cord & Tech Small-Item Containment"
      },
      {
        "label": "Format",
        "value": "Cable, Cord product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Retractable Cable Reel",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Retractable Cable Reel?",
        "answer": "Retractable Cable Reel is a Toreso cable, cord product made for spring-loaded cord reel."
      },
      {
        "question": "Who should use Retractable Cable Reel?",
        "answer": "Retractable Cable Reel is designed for desk users, travelers, students, gadget owners, and cable-heavy homes."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Spring-loaded cord reel."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-15"
    ]
  },
  {
    "id": "toreso-mini-label-printer",
    "catalogNumber": 163,
    "slug": "toreso-mini-label-printer",
    "name": "Toreso Mini Label Printer",
    "track": "Label, Sticker & Identification Solutions",
    "categorySlug": "label-sticker-and-identification-solutions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Pocket Bluetooth thermal label printer (no ink).",
    "b2cInnovation": "Pocket Bluetooth thermal label printer (no ink).",
    "format": "Label, Sticker product",
    "signal": "Daiso Korea's in-store ₩1,000 waterproof name-sticker machine is a viral tourist draw; thermal label printers (no-ink) are Temu best-sellers; MUJI's identification labels for bottles are listed staples.",
    "aisle": "Label, Sticker & Identification Solutions",
    "audience": "parents, pantry organizers, freezer users, movers, small sellers, and cable organizers",
    "priceRange": "mid.",
    "launchPriority": "Premium daily",
    "heroLine": "Toreso Mini Label Printer is a label, sticker product for pocket bluetooth thermal label printer (no ink).",
    "demandSignal": "Temu \"no-ink thermal printer\" viral; Phomemo/Niimbot category.",
    "origin": "Global packaging retail",
    "benefits": [
      "Pocket Bluetooth thermal label printer (no ink).",
      "Pocket Bluetooth thermal label printer (no ink).",
      "Demand signal: Temu \"no-ink thermal printer\" viral; Phomemo/Niimbot category.",
      "Consumer-sized format for parents, pantry organizers, freezer users, movers, small sellers, and cable organizers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-163"
      },
      {
        "label": "Aisle",
        "value": "Label, Sticker & Identification Solutions"
      },
      {
        "label": "Format",
        "value": "Label, Sticker product"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Mini Label Printer",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Mini Label Printer?",
        "answer": "Toreso Mini Label Printer is a Toreso label, sticker product made for pocket bluetooth thermal label printer (no ink)."
      },
      {
        "question": "Who should use Toreso Mini Label Printer?",
        "answer": "Toreso Mini Label Printer is designed for parents, pantry organizers, freezer users, movers, small sellers, and cable organizers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Pocket Bluetooth thermal label printer (no ink)."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-16"
    ]
  },
  {
    "id": "waterproof-name-sticker-pack",
    "catalogNumber": 164,
    "slug": "waterproof-name-sticker-pack",
    "name": "Waterproof Name Sticker Pack",
    "track": "Label, Sticker & Identification Solutions",
    "categorySlug": "label-sticker-and-identification-solutions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Pre-printed/writable waterproof labels.",
    "b2cInnovation": "Pre-printed/writable waterproof labels.",
    "format": "Starter kit",
    "signal": "Daiso Korea's in-store ₩1,000 waterproof name-sticker machine is a viral tourist draw; thermal label printers (no-ink) are Temu best-sellers; MUJI's identification labels for bottles are listed staples.",
    "aisle": "Label, Sticker & Identification Solutions",
    "audience": "parents, pantry organizers, freezer users, movers, small sellers, and cable organizers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Waterproof Name Sticker Pack is a starter kit for pre-printed/writable waterproof labels.",
    "demandSignal": "Daiso name-sticker craze.",
    "origin": "Korea.",
    "benefits": [
      "Pre-printed/writable waterproof labels.",
      "Pre-printed/writable waterproof labels.",
      "Demand signal: Daiso name-sticker craze.",
      "Consumer-sized format for parents, pantry organizers, freezer users, movers, small sellers, and cable organizers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-164"
      },
      {
        "label": "Aisle",
        "value": "Label, Sticker & Identification Solutions"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Korea."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Waterproof Name Sticker Pack",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Waterproof Name Sticker Pack?",
        "answer": "Waterproof Name Sticker Pack is a Toreso starter kit made for pre-printed/writable waterproof labels."
      },
      {
        "question": "Who should use Waterproof Name Sticker Pack?",
        "answer": "Waterproof Name Sticker Pack is designed for parents, pantry organizers, freezer users, movers, small sellers, and cable organizers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Pre-printed/writable waterproof labels."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-16"
    ]
  },
  {
    "id": "toreso-pantry-label-set",
    "catalogNumber": 165,
    "slug": "toreso-pantry-label-set",
    "name": "Toreso Pantry Label Set",
    "track": "Label, Sticker & Identification Solutions",
    "categorySlug": "label-sticker-and-identification-solutions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Minimalist airtight-jar labels + marker.",
    "b2cInnovation": "Minimalist airtight-jar labels + marker.",
    "format": "Starter kit",
    "signal": "Daiso Korea's in-store ₩1,000 waterproof name-sticker machine is a viral tourist draw; thermal label printers (no-ink) are Temu best-sellers; MUJI's identification labels for bottles are listed staples.",
    "aisle": "Label, Sticker & Identification Solutions",
    "audience": "parents, pantry organizers, freezer users, movers, small sellers, and cable organizers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Pantry Label Set is a starter kit for minimalist airtight-jar labels + marker.",
    "demandSignal": "organization-aesthetic trend.",
    "origin": "Global packaging retail",
    "benefits": [
      "Minimalist airtight-jar labels + marker.",
      "Minimalist airtight-jar labels + marker.",
      "Demand signal: organization-aesthetic trend.",
      "Consumer-sized format for parents, pantry organizers, freezer users, movers, small sellers, and cable organizers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-165"
      },
      {
        "label": "Aisle",
        "value": "Label, Sticker & Identification Solutions"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Pantry Label Set",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Pantry Label Set?",
        "answer": "Toreso Pantry Label Set is a Toreso starter kit made for minimalist airtight-jar labels + marker."
      },
      {
        "question": "Who should use Toreso Pantry Label Set?",
        "answer": "Toreso Pantry Label Set is designed for parents, pantry organizers, freezer users, movers, small sellers, and cable organizers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Minimalist airtight-jar labels + marker."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-16"
    ]
  },
  {
    "id": "erasable-freezer-labels",
    "catalogNumber": 166,
    "slug": "erasable-freezer-labels",
    "name": "Erasable Freezer Labels",
    "track": "Label, Sticker & Identification Solutions",
    "categorySlug": "label-sticker-and-identification-solutions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Write-wipe-reuse freezer/date labels.",
    "b2cInnovation": "Write-wipe-reuse freezer/date labels.",
    "format": "Label, Sticker product",
    "signal": "Daiso Korea's in-store ₩1,000 waterproof name-sticker machine is a viral tourist draw; thermal label printers (no-ink) are Temu best-sellers; MUJI's identification labels for bottles are listed staples.",
    "aisle": "Label, Sticker & Identification Solutions",
    "audience": "parents, pantry organizers, freezer users, movers, small sellers, and cable organizers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Erasable Freezer Labels is a label, sticker product for write-wipe-reuse freezer/date labels.",
    "demandSignal": "Daiso Korea's in-store ₩1,000 waterproof name-sticker machine is a viral tourist draw; thermal label printers (no-ink) are Temu best-sellers; MUJI's identification labels for bottles are listed staples.",
    "origin": "Global packaging retail",
    "benefits": [
      "Write-wipe-reuse freezer/date labels.",
      "Write-wipe-reuse freezer/date labels.",
      "Built for the label, sticker & identification solutions aisle.",
      "Consumer-sized format for parents, pantry organizers, freezer users, movers, small sellers, and cable organizers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-166"
      },
      {
        "label": "Aisle",
        "value": "Label, Sticker & Identification Solutions"
      },
      {
        "label": "Format",
        "value": "Label, Sticker product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Erasable Freezer Labels",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Erasable Freezer Labels?",
        "answer": "Erasable Freezer Labels is a Toreso label, sticker product made for write-wipe-reuse freezer/date labels."
      },
      {
        "question": "Who should use Erasable Freezer Labels?",
        "answer": "Erasable Freezer Labels is designed for parents, pantry organizers, freezer users, movers, small sellers, and cable organizers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Write-wipe-reuse freezer/date labels."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-16"
    ]
  },
  {
    "id": "bottle-id-labels",
    "catalogNumber": 167,
    "slug": "bottle-id-labels",
    "name": "Bottle ID Labels",
    "track": "Label, Sticker & Identification Solutions",
    "categorySlug": "label-sticker-and-identification-solutions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Snap-on bottle identification tags.",
    "b2cInnovation": "Snap-on bottle identification tags.",
    "format": "Label, Sticker product",
    "signal": "Daiso Korea's in-store ₩1,000 waterproof name-sticker machine is a viral tourist draw; thermal label printers (no-ink) are Temu best-sellers; MUJI's identification labels for bottles are listed staples.",
    "aisle": "Label, Sticker & Identification Solutions",
    "audience": "parents, pantry organizers, freezer users, movers, small sellers, and cable organizers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Bottle ID Labels is a label, sticker product for snap-on bottle identification tags.",
    "demandSignal": "MUJI identification label for petit bottle.",
    "origin": "Japan.",
    "benefits": [
      "Snap-on bottle identification tags.",
      "Snap-on bottle identification tags.",
      "Demand signal: MUJI identification label for petit bottle.",
      "Consumer-sized format for parents, pantry organizers, freezer users, movers, small sellers, and cable organizers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-167"
      },
      {
        "label": "Aisle",
        "value": "Label, Sticker & Identification Solutions"
      },
      {
        "label": "Format",
        "value": "Label, Sticker product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Japan."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Bottle ID Labels",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Bottle ID Labels?",
        "answer": "Bottle ID Labels is a Toreso label, sticker product made for snap-on bottle identification tags."
      },
      {
        "question": "Who should use Bottle ID Labels?",
        "answer": "Bottle ID Labels is designed for parents, pantry organizers, freezer users, movers, small sellers, and cable organizers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Snap-on bottle identification tags."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-16"
    ]
  },
  {
    "id": "toreso-kids-name-labels-school",
    "catalogNumber": 168,
    "slug": "toreso-kids-name-labels-school",
    "name": "Toreso Kids' Name Labels (school)",
    "track": "Label, Sticker & Identification Solutions",
    "categorySlug": "label-sticker-and-identification-solutions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Iron-on + stick-on label kit for school items.",
    "b2cInnovation": "Iron-on + stick-on label kit for school items.",
    "format": "Label, Sticker product",
    "signal": "Daiso Korea's in-store ₩1,000 waterproof name-sticker machine is a viral tourist draw; thermal label printers (no-ink) are Temu best-sellers; MUJI's identification labels for bottles are listed staples.",
    "aisle": "Label, Sticker & Identification Solutions",
    "audience": "parents, pantry organizers, freezer users, movers, small sellers, and cable organizers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Kids' Name Labels (school) is a label, sticker product for iron-on + stick-on label kit for school items.",
    "demandSignal": "Daiso Korea's in-store ₩1,000 waterproof name-sticker machine is a viral tourist draw; thermal label printers (no-ink) are Temu best-sellers; MUJI's identification labels for bottles are listed staples.",
    "origin": "India-relevant.",
    "benefits": [
      "Iron-on + stick-on label kit for school items.",
      "Iron-on + stick-on label kit for school items.",
      "Built for the label, sticker & identification solutions aisle.",
      "Consumer-sized format for parents, pantry organizers, freezer users, movers, small sellers, and cable organizers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-168"
      },
      {
        "label": "Aisle",
        "value": "Label, Sticker & Identification Solutions"
      },
      {
        "label": "Format",
        "value": "Label, Sticker product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "India-relevant."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Kids' Name Labels (school)",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Kids' Name Labels (school)?",
        "answer": "Toreso Kids' Name Labels (school) is a Toreso label, sticker product made for iron-on + stick-on label kit for school items."
      },
      {
        "question": "Who should use Toreso Kids' Name Labels (school)?",
        "answer": "Toreso Kids' Name Labels (school) is designed for parents, pantry organizers, freezer users, movers, small sellers, and cable organizers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Iron-on + stick-on label kit for school items."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-16"
    ]
  },
  {
    "id": "cable-cord-wrap-labels",
    "catalogNumber": 169,
    "slug": "cable-cord-wrap-labels",
    "name": "Cable/Cord Wrap Labels",
    "track": "Label, Sticker & Identification Solutions",
    "categorySlug": "label-sticker-and-identification-solutions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Flag labels for cords.",
    "b2cInnovation": "Flag labels for cords.",
    "format": "Flexible pack",
    "signal": "Daiso Korea's in-store ₩1,000 waterproof name-sticker machine is a viral tourist draw; thermal label printers (no-ink) are Temu best-sellers; MUJI's identification labels for bottles are listed staples.",
    "aisle": "Label, Sticker & Identification Solutions",
    "audience": "parents, pantry organizers, freezer users, movers, small sellers, and cable organizers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Cable/Cord Wrap Labels is a flexible pack for flag labels for cords.",
    "demandSignal": "Daiso Korea's in-store ₩1,000 waterproof name-sticker machine is a viral tourist draw; thermal label printers (no-ink) are Temu best-sellers; MUJI's identification labels for bottles are listed staples.",
    "origin": "Global packaging retail",
    "benefits": [
      "Flag labels for cords.",
      "Flag labels for cords.",
      "Built for the label, sticker & identification solutions aisle.",
      "Consumer-sized format for parents, pantry organizers, freezer users, movers, small sellers, and cable organizers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-169"
      },
      {
        "label": "Aisle",
        "value": "Label, Sticker & Identification Solutions"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Cable/Cord Wrap Labels",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Cable/Cord Wrap Labels?",
        "answer": "Cable/Cord Wrap Labels is a Toreso flexible pack made for flag labels for cords."
      },
      {
        "question": "Who should use Cable/Cord Wrap Labels?",
        "answer": "Cable/Cord Wrap Labels is designed for parents, pantry organizers, freezer users, movers, small sellers, and cable organizers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Flag labels for cords."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-16"
    ]
  },
  {
    "id": "washi-masking-decorative-tape",
    "catalogNumber": 170,
    "slug": "washi-masking-decorative-tape",
    "name": "Washi/Masking Decorative Tape",
    "track": "Label, Sticker & Identification Solutions",
    "categorySlug": "label-sticker-and-identification-solutions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Pretty tape for sealing + labeling.",
    "b2cInnovation": "Pretty tape for sealing + labeling.",
    "format": "Label, Sticker product",
    "signal": "Daiso Korea's in-store ₩1,000 waterproof name-sticker machine is a viral tourist draw; thermal label printers (no-ink) are Temu best-sellers; MUJI's identification labels for bottles are listed staples.",
    "aisle": "Label, Sticker & Identification Solutions",
    "audience": "parents, pantry organizers, freezer users, movers, small sellers, and cable organizers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Washi/Masking Decorative Tape is a label, sticker product for pretty tape for sealing + labeling.",
    "demandSignal": "Daiso washi tape souvenir staple.",
    "origin": "Japan.",
    "benefits": [
      "Pretty tape for sealing + labeling.",
      "Pretty tape for sealing + labeling.",
      "Demand signal: Daiso washi tape souvenir staple.",
      "Consumer-sized format for parents, pantry organizers, freezer users, movers, small sellers, and cable organizers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-170"
      },
      {
        "label": "Aisle",
        "value": "Label, Sticker & Identification Solutions"
      },
      {
        "label": "Format",
        "value": "Label, Sticker product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Japan."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Washi/Masking Decorative Tape",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Washi/Masking Decorative Tape?",
        "answer": "Washi/Masking Decorative Tape is a Toreso label, sticker product made for pretty tape for sealing + labeling."
      },
      {
        "question": "Who should use Washi/Masking Decorative Tape?",
        "answer": "Washi/Masking Decorative Tape is designed for parents, pantry organizers, freezer users, movers, small sellers, and cable organizers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Pretty tape for sealing + labeling."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-16"
    ]
  },
  {
    "id": "toreso-qr-what-s-inside-box-labels",
    "catalogNumber": 171,
    "slug": "toreso-qr-what-s-inside-box-labels",
    "name": "Toreso QR \"What's Inside\" Box Labels",
    "track": "Label, Sticker & Identification Solutions",
    "categorySlug": "label-sticker-and-identification-solutions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Reusable labels with QR for storage-box contents.",
    "b2cInnovation": "scan to see box inventory.",
    "format": "Rigid storage",
    "signal": "Daiso Korea's in-store ₩1,000 waterproof name-sticker machine is a viral tourist draw; thermal label printers (no-ink) are Temu best-sellers; MUJI's identification labels for bottles are listed staples.",
    "aisle": "Label, Sticker & Identification Solutions",
    "audience": "parents, pantry organizers, freezer users, movers, small sellers, and cable organizers",
    "priceRange": "impulse-mid.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso QR \"What's Inside\" Box Labels is a rigid storage for reusable labels with qr for storage-box contents.",
    "demandSignal": "Daiso Korea's in-store ₩1,000 waterproof name-sticker machine is a viral tourist draw; thermal label printers (no-ink) are Temu best-sellers; MUJI's identification labels for bottles are listed staples.",
    "origin": "Global packaging retail",
    "benefits": [
      "Reusable labels with QR for storage-box contents.",
      "scan to see box inventory.",
      "Built for the label, sticker & identification solutions aisle.",
      "Consumer-sized format for parents, pantry organizers, freezer users, movers, small sellers, and cable organizers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-171"
      },
      {
        "label": "Aisle",
        "value": "Label, Sticker & Identification Solutions"
      },
      {
        "label": "Format",
        "value": "Rigid storage"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso QR \"What's Inside\" Box Labels",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso QR \"What's Inside\" Box Labels?",
        "answer": "Toreso QR \"What's Inside\" Box Labels is a Toreso rigid storage made for reusable labels with qr for storage-box contents."
      },
      {
        "question": "Who should use Toreso QR \"What's Inside\" Box Labels?",
        "answer": "Toreso QR \"What's Inside\" Box Labels is designed for parents, pantry organizers, freezer users, movers, small sellers, and cable organizers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "scan to see box inventory."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-16"
    ]
  },
  {
    "id": "tamper-evident-seal-stickers",
    "catalogNumber": 172,
    "slug": "tamper-evident-seal-stickers",
    "name": "Tamper-Evident Seal Stickers",
    "track": "Label, Sticker & Identification Solutions",
    "categorySlug": "label-sticker-and-identification-solutions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Security seals for tiffins/parcels.",
    "b2cInnovation": "Security seals for tiffins/parcels.",
    "format": "Label, Sticker product",
    "signal": "Daiso Korea's in-store ₩1,000 waterproof name-sticker machine is a viral tourist draw; thermal label printers (no-ink) are Temu best-sellers; MUJI's identification labels for bottles are listed staples.",
    "aisle": "Label, Sticker & Identification Solutions",
    "audience": "parents, pantry organizers, freezer users, movers, small sellers, and cable organizers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Tamper-Evident Seal Stickers is a label, sticker product for security seals for tiffins/parcels.",
    "demandSignal": "Daiso Korea's in-store ₩1,000 waterproof name-sticker machine is a viral tourist draw; thermal label printers (no-ink) are Temu best-sellers; MUJI's identification labels for bottles are listed staples.",
    "origin": "Global packaging retail",
    "benefits": [
      "Security seals for tiffins/parcels.",
      "Security seals for tiffins/parcels.",
      "Built for the label, sticker & identification solutions aisle.",
      "Consumer-sized format for parents, pantry organizers, freezer users, movers, small sellers, and cable organizers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-172"
      },
      {
        "label": "Aisle",
        "value": "Label, Sticker & Identification Solutions"
      },
      {
        "label": "Format",
        "value": "Label, Sticker product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Tamper-Evident Seal Stickers",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Tamper-Evident Seal Stickers?",
        "answer": "Tamper-Evident Seal Stickers is a Toreso label, sticker product made for security seals for tiffins/parcels."
      },
      {
        "question": "Who should use Tamper-Evident Seal Stickers?",
        "answer": "Tamper-Evident Seal Stickers is designed for parents, pantry organizers, freezer users, movers, small sellers, and cable organizers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Security seals for tiffins/parcels."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-16"
    ]
  },
  {
    "id": "toreso-anti-slip-hanger-set",
    "catalogNumber": 173,
    "slug": "toreso-anti-slip-hanger-set",
    "name": "Toreso Anti-Slip Hanger Set",
    "track": "Home, Closet & Bathroom Storage Extensions",
    "categorySlug": "home-closet-and-bathroom-storage-extensions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Velvet/coated non-slip space-saving hangers.",
    "b2cInnovation": "Velvet/coated non-slip space-saving hangers.",
    "format": "Starter kit",
    "signal": "3COINS clear storage, anti-stretch hangers, and book-shaped magnetic boxes are best-sellers; Miniso foldable/woven storage and handheld baskets are listed top items; Daiso storage boxes are \"incredibly satisfying\" haul staples.",
    "aisle": "Home, Closet & Bathroom Storage Extensions",
    "audience": "small apartments, closets, bathroom shelves, students, renters, and family organizers",
    "priceRange": "impulse-mid.",
    "launchPriority": "Premium daily",
    "heroLine": "Toreso Anti-Slip Hanger Set is a starter kit for velvet/coated non-slip space-saving hangers.",
    "demandSignal": "3COINS anti-stretch hanger 6-set.",
    "origin": "Japan.",
    "benefits": [
      "Velvet/coated non-slip space-saving hangers.",
      "Velvet/coated non-slip space-saving hangers.",
      "Demand signal: 3COINS anti-stretch hanger 6-set.",
      "Consumer-sized format for small apartments, closets, bathroom shelves, students, renters, and family organizers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-173"
      },
      {
        "label": "Aisle",
        "value": "Home, Closet & Bathroom Storage Extensions"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Japan."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Anti-Slip Hanger Set",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Anti-Slip Hanger Set?",
        "answer": "Toreso Anti-Slip Hanger Set is a Toreso starter kit made for velvet/coated non-slip space-saving hangers."
      },
      {
        "question": "Who should use Toreso Anti-Slip Hanger Set?",
        "answer": "Toreso Anti-Slip Hanger Set is designed for small apartments, closets, bathroom shelves, students, renters, and family organizers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Velvet/coated non-slip space-saving hangers."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-17"
    ]
  },
  {
    "id": "cascading-hanger-hooks",
    "catalogNumber": 174,
    "slug": "cascading-hanger-hooks",
    "name": "Cascading Hanger Hooks",
    "track": "Home, Closet & Bathroom Storage Extensions",
    "categorySlug": "home-closet-and-bathroom-storage-extensions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Multiply closet capacity.",
    "b2cInnovation": "Multiply closet capacity.",
    "format": "Home, Closet product",
    "signal": "3COINS clear storage, anti-stretch hangers, and book-shaped magnetic boxes are best-sellers; Miniso foldable/woven storage and handheld baskets are listed top items; Daiso storage boxes are \"incredibly satisfying\" haul staples.",
    "aisle": "Home, Closet & Bathroom Storage Extensions",
    "audience": "small apartments, closets, bathroom shelves, students, renters, and family organizers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Cascading Hanger Hooks is a home, closet product for multiply closet capacity.",
    "demandSignal": "3COINS clear storage, anti-stretch hangers, and book-shaped magnetic boxes are best-sellers; Miniso foldable/woven storage and handheld baskets are listed top items; Daiso storage boxes are \"incredibly satisfying\" haul staples.",
    "origin": "Global packaging retail",
    "benefits": [
      "Multiply closet capacity.",
      "Multiply closet capacity.",
      "Built for the home, closet & bathroom storage extensions aisle.",
      "Consumer-sized format for small apartments, closets, bathroom shelves, students, renters, and family organizers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-174"
      },
      {
        "label": "Aisle",
        "value": "Home, Closet & Bathroom Storage Extensions"
      },
      {
        "label": "Format",
        "value": "Home, Closet product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Cascading Hanger Hooks",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Cascading Hanger Hooks?",
        "answer": "Cascading Hanger Hooks is a Toreso home, closet product made for multiply closet capacity."
      },
      {
        "question": "Who should use Cascading Hanger Hooks?",
        "answer": "Cascading Hanger Hooks is designed for small apartments, closets, bathroom shelves, students, renters, and family organizers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Multiply closet capacity."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-17"
    ]
  },
  {
    "id": "toreso-hidden-valuables-book-box",
    "catalogNumber": 175,
    "slug": "toreso-hidden-valuables-book-box",
    "name": "Toreso Hidden-Valuables Book Box",
    "track": "Home, Closet & Bathroom Storage Extensions",
    "categorySlug": "home-closet-and-bathroom-storage-extensions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Book-shaped magnetic storage box.",
    "b2cInnovation": "Book-shaped magnetic storage box.",
    "format": "Rigid storage",
    "signal": "3COINS clear storage, anti-stretch hangers, and book-shaped magnetic boxes are best-sellers; Miniso foldable/woven storage and handheld baskets are listed top items; Daiso storage boxes are \"incredibly satisfying\" haul staples.",
    "aisle": "Home, Closet & Bathroom Storage Extensions",
    "audience": "small apartments, closets, bathroom shelves, students, renters, and family organizers",
    "priceRange": "impulse-mid.",
    "launchPriority": "Premium daily",
    "heroLine": "Toreso Hidden-Valuables Book Box is a rigid storage for book-shaped magnetic storage box.",
    "demandSignal": "3COINS best-seller.",
    "origin": "Japan.",
    "benefits": [
      "Book-shaped magnetic storage box.",
      "Book-shaped magnetic storage box.",
      "Demand signal: 3COINS best-seller.",
      "Consumer-sized format for small apartments, closets, bathroom shelves, students, renters, and family organizers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-175"
      },
      {
        "label": "Aisle",
        "value": "Home, Closet & Bathroom Storage Extensions"
      },
      {
        "label": "Format",
        "value": "Rigid storage"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Japan."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Hidden-Valuables Book Box",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Hidden-Valuables Book Box?",
        "answer": "Toreso Hidden-Valuables Book Box is a Toreso rigid storage made for book-shaped magnetic storage box."
      },
      {
        "question": "Who should use Toreso Hidden-Valuables Book Box?",
        "answer": "Toreso Hidden-Valuables Book Box is designed for small apartments, closets, bathroom shelves, students, renters, and family organizers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Book-shaped magnetic storage box."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-17"
    ]
  },
  {
    "id": "foldable-fabric-storage-cube",
    "catalogNumber": 176,
    "slug": "foldable-fabric-storage-cube",
    "name": "Foldable Fabric Storage Cube",
    "track": "Home, Closet & Bathroom Storage Extensions",
    "categorySlug": "home-closet-and-bathroom-storage-extensions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Collapsible non-woven storage bin.",
    "b2cInnovation": "Collapsible non-woven storage bin.",
    "format": "Home, Closet product",
    "signal": "3COINS clear storage, anti-stretch hangers, and book-shaped magnetic boxes are best-sellers; Miniso foldable/woven storage and handheld baskets are listed top items; Daiso storage boxes are \"incredibly satisfying\" haul staples.",
    "aisle": "Home, Closet & Bathroom Storage Extensions",
    "audience": "small apartments, closets, bathroom shelves, students, renters, and family organizers",
    "priceRange": "impulse-mid.",
    "launchPriority": "Premium daily",
    "heroLine": "Foldable Fabric Storage Cube is a home, closet product for collapsible non-woven storage bin.",
    "demandSignal": "Miniso storage best-seller.",
    "origin": "China.",
    "benefits": [
      "Collapsible non-woven storage bin.",
      "Collapsible non-woven storage bin.",
      "Demand signal: Miniso storage best-seller.",
      "Consumer-sized format for small apartments, closets, bathroom shelves, students, renters, and family organizers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-176"
      },
      {
        "label": "Aisle",
        "value": "Home, Closet & Bathroom Storage Extensions"
      },
      {
        "label": "Format",
        "value": "Home, Closet product"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "China."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Foldable Fabric Storage Cube",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Foldable Fabric Storage Cube?",
        "answer": "Foldable Fabric Storage Cube is a Toreso home, closet product made for collapsible non-woven storage bin."
      },
      {
        "question": "Who should use Foldable Fabric Storage Cube?",
        "answer": "Foldable Fabric Storage Cube is designed for small apartments, closets, bathroom shelves, students, renters, and family organizers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Collapsible non-woven storage bin."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-17"
    ]
  },
  {
    "id": "toreso-drawer-divider-set",
    "catalogNumber": 177,
    "slug": "toreso-drawer-divider-set",
    "name": "Toreso Drawer Divider Set",
    "track": "Home, Closet & Bathroom Storage Extensions",
    "categorySlug": "home-closet-and-bathroom-storage-extensions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Adjustable drawer dividers.",
    "b2cInnovation": "Adjustable drawer dividers.",
    "format": "Starter kit",
    "signal": "3COINS clear storage, anti-stretch hangers, and book-shaped magnetic boxes are best-sellers; Miniso foldable/woven storage and handheld baskets are listed top items; Daiso storage boxes are \"incredibly satisfying\" haul staples.",
    "aisle": "Home, Closet & Bathroom Storage Extensions",
    "audience": "small apartments, closets, bathroom shelves, students, renters, and family organizers",
    "priceRange": "impulse-mid.",
    "launchPriority": "Premium daily",
    "heroLine": "Toreso Drawer Divider Set is a starter kit for adjustable drawer dividers.",
    "demandSignal": "organization viral.",
    "origin": "Global packaging retail",
    "benefits": [
      "Adjustable drawer dividers.",
      "Adjustable drawer dividers.",
      "Demand signal: organization viral.",
      "Consumer-sized format for small apartments, closets, bathroom shelves, students, renters, and family organizers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-177"
      },
      {
        "label": "Aisle",
        "value": "Home, Closet & Bathroom Storage Extensions"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Drawer Divider Set",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Drawer Divider Set?",
        "answer": "Toreso Drawer Divider Set is a Toreso starter kit made for adjustable drawer dividers."
      },
      {
        "question": "Who should use Toreso Drawer Divider Set?",
        "answer": "Toreso Drawer Divider Set is designed for small apartments, closets, bathroom shelves, students, renters, and family organizers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Adjustable drawer dividers."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-17"
    ]
  },
  {
    "id": "hanging-closet-shelf-organizer",
    "catalogNumber": 178,
    "slug": "hanging-closet-shelf-organizer",
    "name": "Hanging Closet Shelf Organizer",
    "track": "Home, Closet & Bathroom Storage Extensions",
    "categorySlug": "home-closet-and-bathroom-storage-extensions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Fabric 4–5 shelf hanging organizer.",
    "b2cInnovation": "Fabric 4–5 shelf hanging organizer.",
    "format": "Starter kit",
    "signal": "3COINS clear storage, anti-stretch hangers, and book-shaped magnetic boxes are best-sellers; Miniso foldable/woven storage and handheld baskets are listed top items; Daiso storage boxes are \"incredibly satisfying\" haul staples.",
    "aisle": "Home, Closet & Bathroom Storage Extensions",
    "audience": "small apartments, closets, bathroom shelves, students, renters, and family organizers",
    "priceRange": "mid.",
    "launchPriority": "Future drop",
    "heroLine": "Hanging Closet Shelf Organizer is a starter kit for fabric 4–5 shelf hanging organizer.",
    "demandSignal": "Miniso hanging organizer best-seller.",
    "origin": "China.",
    "benefits": [
      "Fabric 4–5 shelf hanging organizer.",
      "Fabric 4–5 shelf hanging organizer.",
      "Demand signal: Miniso hanging organizer best-seller.",
      "Consumer-sized format for small apartments, closets, bathroom shelves, students, renters, and family organizers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-178"
      },
      {
        "label": "Aisle",
        "value": "Home, Closet & Bathroom Storage Extensions"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "China."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Hanging Closet Shelf Organizer",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Hanging Closet Shelf Organizer?",
        "answer": "Hanging Closet Shelf Organizer is a Toreso starter kit made for fabric 4–5 shelf hanging organizer."
      },
      {
        "question": "Who should use Hanging Closet Shelf Organizer?",
        "answer": "Hanging Closet Shelf Organizer is designed for small apartments, closets, bathroom shelves, students, renters, and family organizers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Fabric 4–5 shelf hanging organizer."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-17"
    ]
  },
  {
    "id": "stackable-shoe-boxes-clear",
    "catalogNumber": 179,
    "slug": "stackable-shoe-boxes-clear",
    "name": "Stackable Shoe Boxes (clear)",
    "track": "Home, Closet & Bathroom Storage Extensions",
    "categorySlug": "home-closet-and-bathroom-storage-extensions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Drop-front clear shoe boxes.",
    "b2cInnovation": "Drop-front clear shoe boxes.",
    "format": "Rigid storage",
    "signal": "3COINS clear storage, anti-stretch hangers, and book-shaped magnetic boxes are best-sellers; Miniso foldable/woven storage and handheld baskets are listed top items; Daiso storage boxes are \"incredibly satisfying\" haul staples.",
    "aisle": "Home, Closet & Bathroom Storage Extensions",
    "audience": "small apartments, closets, bathroom shelves, students, renters, and family organizers",
    "priceRange": "mid.",
    "launchPriority": "Future drop",
    "heroLine": "Stackable Shoe Boxes (clear) is a rigid storage for drop-front clear shoe boxes.",
    "demandSignal": "TikTok shoe-org viral.",
    "origin": "Global packaging retail",
    "benefits": [
      "Drop-front clear shoe boxes.",
      "Drop-front clear shoe boxes.",
      "Demand signal: TikTok shoe-org viral.",
      "Consumer-sized format for small apartments, closets, bathroom shelves, students, renters, and family organizers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-179"
      },
      {
        "label": "Aisle",
        "value": "Home, Closet & Bathroom Storage Extensions"
      },
      {
        "label": "Format",
        "value": "Rigid storage"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Stackable Shoe Boxes (clear)",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Stackable Shoe Boxes (clear)?",
        "answer": "Stackable Shoe Boxes (clear) is a Toreso rigid storage made for drop-front clear shoe boxes."
      },
      {
        "question": "Who should use Stackable Shoe Boxes (clear)?",
        "answer": "Stackable Shoe Boxes (clear) is designed for small apartments, closets, bathroom shelves, students, renters, and family organizers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Drop-front clear shoe boxes."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-17"
    ]
  },
  {
    "id": "toreso-bathroom-caddy-drain-hole",
    "catalogNumber": 180,
    "slug": "toreso-bathroom-caddy-drain-hole",
    "name": "Toreso Bathroom Caddy (drain-hole)",
    "track": "Home, Closet & Bathroom Storage Extensions",
    "categorySlug": "home-closet-and-bathroom-storage-extensions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Multifunction shower caddy with drain holes.",
    "b2cInnovation": "Multifunction shower caddy with drain holes.",
    "format": "Home, Closet product",
    "signal": "3COINS clear storage, anti-stretch hangers, and book-shaped magnetic boxes are best-sellers; Miniso foldable/woven storage and handheld baskets are listed top items; Daiso storage boxes are \"incredibly satisfying\" haul staples.",
    "aisle": "Home, Closet & Bathroom Storage Extensions",
    "audience": "small apartments, closets, bathroom shelves, students, renters, and family organizers",
    "priceRange": "impulse-mid.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Bathroom Caddy (drain-hole) is a home, closet product for multifunction shower caddy with drain holes.",
    "demandSignal": "Temu caddy.",
    "origin": "Global packaging retail",
    "benefits": [
      "Multifunction shower caddy with drain holes.",
      "Multifunction shower caddy with drain holes.",
      "Demand signal: Temu caddy.",
      "Consumer-sized format for small apartments, closets, bathroom shelves, students, renters, and family organizers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-180"
      },
      {
        "label": "Aisle",
        "value": "Home, Closet & Bathroom Storage Extensions"
      },
      {
        "label": "Format",
        "value": "Home, Closet product"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Bathroom Caddy (drain-hole)",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Bathroom Caddy (drain-hole)?",
        "answer": "Toreso Bathroom Caddy (drain-hole) is a Toreso home, closet product made for multifunction shower caddy with drain holes."
      },
      {
        "question": "Who should use Toreso Bathroom Caddy (drain-hole)?",
        "answer": "Toreso Bathroom Caddy (drain-hole) is designed for small apartments, closets, bathroom shelves, students, renters, and family organizers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Multifunction shower caddy with drain holes."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-17"
    ]
  },
  {
    "id": "toothbrush-travel-hygiene-capsules",
    "catalogNumber": 181,
    "slug": "toothbrush-travel-hygiene-capsules",
    "name": "Toothbrush/Travel Hygiene Capsules",
    "track": "Home, Closet & Bathroom Storage Extensions",
    "categorySlug": "home-closet-and-bathroom-storage-extensions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Ventilated travel cases.",
    "b2cInnovation": "Ventilated travel cases.",
    "format": "Reusable tool",
    "signal": "3COINS clear storage, anti-stretch hangers, and book-shaped magnetic boxes are best-sellers; Miniso foldable/woven storage and handheld baskets are listed top items; Daiso storage boxes are \"incredibly satisfying\" haul staples.",
    "aisle": "Home, Closet & Bathroom Storage Extensions",
    "audience": "small apartments, closets, bathroom shelves, students, renters, and family organizers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toothbrush/Travel Hygiene Capsules is a reusable tool for ventilated travel cases.",
    "demandSignal": "3COINS clear storage, anti-stretch hangers, and book-shaped magnetic boxes are best-sellers; Miniso foldable/woven storage and handheld baskets are listed top items; Daiso storage boxes are \"incredibly satisfying\" haul staples.",
    "origin": "Global packaging retail",
    "benefits": [
      "Ventilated travel cases.",
      "Ventilated travel cases.",
      "Built for the home, closet & bathroom storage extensions aisle.",
      "Consumer-sized format for small apartments, closets, bathroom shelves, students, renters, and family organizers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-181"
      },
      {
        "label": "Aisle",
        "value": "Home, Closet & Bathroom Storage Extensions"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toothbrush/Travel Hygiene Capsules",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toothbrush/Travel Hygiene Capsules?",
        "answer": "Toothbrush/Travel Hygiene Capsules is a Toreso reusable tool made for ventilated travel cases."
      },
      {
        "question": "Who should use Toothbrush/Travel Hygiene Capsules?",
        "answer": "Toothbrush/Travel Hygiene Capsules is designed for small apartments, closets, bathroom shelves, students, renters, and family organizers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Ventilated travel cases."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-17"
    ]
  },
  {
    "id": "toreso-under-bed-wheeled-box",
    "catalogNumber": 182,
    "slug": "toreso-under-bed-wheeled-box",
    "name": "Toreso Under-Bed Wheeled Box",
    "track": "Home, Closet & Bathroom Storage Extensions",
    "categorySlug": "home-closet-and-bathroom-storage-extensions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Low wheeled storage box.",
    "b2cInnovation": "Low wheeled storage box.",
    "format": "Rigid storage",
    "signal": "3COINS clear storage, anti-stretch hangers, and book-shaped magnetic boxes are best-sellers; Miniso foldable/woven storage and handheld baskets are listed top items; Daiso storage boxes are \"incredibly satisfying\" haul staples.",
    "aisle": "Home, Closet & Bathroom Storage Extensions",
    "audience": "small apartments, closets, bathroom shelves, students, renters, and family organizers",
    "priceRange": "mid.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Under-Bed Wheeled Box is a rigid storage for low wheeled storage box.",
    "demandSignal": "3COINS clear storage, anti-stretch hangers, and book-shaped magnetic boxes are best-sellers; Miniso foldable/woven storage and handheld baskets are listed top items; Daiso storage boxes are \"incredibly satisfying\" haul staples.",
    "origin": "Global packaging retail",
    "benefits": [
      "Low wheeled storage box.",
      "Low wheeled storage box.",
      "Built for the home, closet & bathroom storage extensions aisle.",
      "Consumer-sized format for small apartments, closets, bathroom shelves, students, renters, and family organizers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-182"
      },
      {
        "label": "Aisle",
        "value": "Home, Closet & Bathroom Storage Extensions"
      },
      {
        "label": "Format",
        "value": "Rigid storage"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Under-Bed Wheeled Box",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Under-Bed Wheeled Box?",
        "answer": "Toreso Under-Bed Wheeled Box is a Toreso rigid storage made for low wheeled storage box."
      },
      {
        "question": "Who should use Toreso Under-Bed Wheeled Box?",
        "answer": "Toreso Under-Bed Wheeled Box is designed for small apartments, closets, bathroom shelves, students, renters, and family organizers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Low wheeled storage box."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-17"
    ]
  },
  {
    "id": "mesh-desk-organizer-set",
    "catalogNumber": 183,
    "slug": "mesh-desk-organizer-set",
    "name": "Mesh Desk Organizer Set",
    "track": "Home, Closet & Bathroom Storage Extensions",
    "categorySlug": "home-closet-and-bathroom-storage-extensions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Coordinated mesh desk storage.",
    "b2cInnovation": "Coordinated mesh desk storage.",
    "format": "Starter kit",
    "signal": "3COINS clear storage, anti-stretch hangers, and book-shaped magnetic boxes are best-sellers; Miniso foldable/woven storage and handheld baskets are listed top items; Daiso storage boxes are \"incredibly satisfying\" haul staples.",
    "aisle": "Home, Closet & Bathroom Storage Extensions",
    "audience": "small apartments, closets, bathroom shelves, students, renters, and family organizers",
    "priceRange": "impulse-mid.",
    "launchPriority": "Future drop",
    "heroLine": "Mesh Desk Organizer Set is a starter kit for coordinated mesh desk storage.",
    "demandSignal": "3COINS desk-org series.",
    "origin": "Japan.",
    "benefits": [
      "Coordinated mesh desk storage.",
      "Coordinated mesh desk storage.",
      "Demand signal: 3COINS desk-org series.",
      "Consumer-sized format for small apartments, closets, bathroom shelves, students, renters, and family organizers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-183"
      },
      {
        "label": "Aisle",
        "value": "Home, Closet & Bathroom Storage Extensions"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Japan."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Mesh Desk Organizer Set",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Mesh Desk Organizer Set?",
        "answer": "Mesh Desk Organizer Set is a Toreso starter kit made for coordinated mesh desk storage."
      },
      {
        "question": "Who should use Mesh Desk Organizer Set?",
        "answer": "Mesh Desk Organizer Set is designed for small apartments, closets, bathroom shelves, students, renters, and family organizers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Coordinated mesh desk storage."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-17"
    ]
  },
  {
    "id": "toreso-handheld-storage-basket",
    "catalogNumber": 184,
    "slug": "toreso-handheld-storage-basket",
    "name": "Toreso Handheld Storage Basket",
    "track": "Home, Closet & Bathroom Storage Extensions",
    "categorySlug": "home-closet-and-bathroom-storage-extensions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Portable carry caddy.",
    "b2cInnovation": "Portable carry caddy.",
    "format": "Home, Closet product",
    "signal": "3COINS clear storage, anti-stretch hangers, and book-shaped magnetic boxes are best-sellers; Miniso foldable/woven storage and handheld baskets are listed top items; Daiso storage boxes are \"incredibly satisfying\" haul staples.",
    "aisle": "Home, Closet & Bathroom Storage Extensions",
    "audience": "small apartments, closets, bathroom shelves, students, renters, and family organizers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Handheld Storage Basket is a home, closet product for portable carry caddy.",
    "demandSignal": "Miniso listed product.",
    "origin": "China.",
    "benefits": [
      "Portable carry caddy.",
      "Portable carry caddy.",
      "Demand signal: Miniso listed product.",
      "Consumer-sized format for small apartments, closets, bathroom shelves, students, renters, and family organizers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-184"
      },
      {
        "label": "Aisle",
        "value": "Home, Closet & Bathroom Storage Extensions"
      },
      {
        "label": "Format",
        "value": "Home, Closet product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "China."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Handheld Storage Basket",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Handheld Storage Basket?",
        "answer": "Toreso Handheld Storage Basket is a Toreso home, closet product made for portable carry caddy."
      },
      {
        "question": "Who should use Toreso Handheld Storage Basket?",
        "answer": "Toreso Handheld Storage Basket is designed for small apartments, closets, bathroom shelves, students, renters, and family organizers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Portable carry caddy."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-17"
    ]
  },
  {
    "id": "woven-rattan-look-basket",
    "catalogNumber": 185,
    "slug": "woven-rattan-look-basket",
    "name": "Woven Rattan-Look Basket",
    "track": "Home, Closet & Bathroom Storage Extensions",
    "categorySlug": "home-closet-and-bathroom-storage-extensions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Natural-look storage basket S/M.",
    "b2cInnovation": "Natural-look storage basket S/M.",
    "format": "Home, Closet product",
    "signal": "3COINS clear storage, anti-stretch hangers, and book-shaped magnetic boxes are best-sellers; Miniso foldable/woven storage and handheld baskets are listed top items; Daiso storage boxes are \"incredibly satisfying\" haul staples.",
    "aisle": "Home, Closet & Bathroom Storage Extensions",
    "audience": "small apartments, closets, bathroom shelves, students, renters, and family organizers",
    "priceRange": "impulse-mid.",
    "launchPriority": "Future drop",
    "heroLine": "Woven Rattan-Look Basket is a home, closet product for natural-look storage basket s/m.",
    "demandSignal": "3COINS popular.",
    "origin": "Japan.",
    "benefits": [
      "Natural-look storage basket S/M.",
      "Natural-look storage basket S/M.",
      "Demand signal: 3COINS popular.",
      "Consumer-sized format for small apartments, closets, bathroom shelves, students, renters, and family organizers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-185"
      },
      {
        "label": "Aisle",
        "value": "Home, Closet & Bathroom Storage Extensions"
      },
      {
        "label": "Format",
        "value": "Home, Closet product"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Japan."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Woven Rattan-Look Basket",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Woven Rattan-Look Basket?",
        "answer": "Woven Rattan-Look Basket is a Toreso home, closet product made for natural-look storage basket s/m."
      },
      {
        "question": "Who should use Woven Rattan-Look Basket?",
        "answer": "Woven Rattan-Look Basket is designed for small apartments, closets, bathroom shelves, students, renters, and family organizers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Natural-look storage basket S/M."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-17"
    ]
  },
  {
    "id": "toreso-sticky-lint-roller-dol-dol-i",
    "catalogNumber": 186,
    "slug": "toreso-sticky-lint-roller-dol-dol-i",
    "name": "Toreso Sticky Lint Roller (dol-dol-i)",
    "track": "Home, Closet & Bathroom Storage Extensions",
    "categorySlug": "home-closet-and-bathroom-storage-extensions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Reusable/peel sticky roller.",
    "b2cInnovation": "Reusable/peel sticky roller.",
    "format": "Home, Closet product",
    "signal": "3COINS clear storage, anti-stretch hangers, and book-shaped magnetic boxes are best-sellers; Miniso foldable/woven storage and handheld baskets are listed top items; Daiso storage boxes are \"incredibly satisfying\" haul staples.",
    "aisle": "Home, Closet & Bathroom Storage Extensions",
    "audience": "small apartments, closets, bathroom shelves, students, renters, and family organizers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Sticky Lint Roller (dol-dol-i) is a home, closet product for reusable/peel sticky roller.",
    "demandSignal": "Daiso Korea essential.",
    "origin": "Korea.",
    "benefits": [
      "Reusable/peel sticky roller.",
      "Reusable/peel sticky roller.",
      "Demand signal: Daiso Korea essential.",
      "Consumer-sized format for small apartments, closets, bathroom shelves, students, renters, and family organizers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-186"
      },
      {
        "label": "Aisle",
        "value": "Home, Closet & Bathroom Storage Extensions"
      },
      {
        "label": "Format",
        "value": "Home, Closet product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Korea."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Sticky Lint Roller (dol-dol-i)",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Sticky Lint Roller (dol-dol-i)?",
        "answer": "Toreso Sticky Lint Roller (dol-dol-i) is a Toreso home, closet product made for reusable/peel sticky roller."
      },
      {
        "question": "Who should use Toreso Sticky Lint Roller (dol-dol-i)?",
        "answer": "Toreso Sticky Lint Roller (dol-dol-i) is designed for small apartments, closets, bathroom shelves, students, renters, and family organizers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Reusable/peel sticky roller."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-17"
    ]
  },
  {
    "id": "foldable-step-stool-storage-box",
    "catalogNumber": 187,
    "slug": "foldable-step-stool-storage-box",
    "name": "Foldable Step-Stool Storage Box",
    "track": "Home, Closet & Bathroom Storage Extensions",
    "categorySlug": "home-closet-and-bathroom-storage-extensions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Sit/store dual-use box.",
    "b2cInnovation": "Sit/store dual-use box.",
    "format": "Reusable tool",
    "signal": "3COINS clear storage, anti-stretch hangers, and book-shaped magnetic boxes are best-sellers; Miniso foldable/woven storage and handheld baskets are listed top items; Daiso storage boxes are \"incredibly satisfying\" haul staples.",
    "aisle": "Home, Closet & Bathroom Storage Extensions",
    "audience": "small apartments, closets, bathroom shelves, students, renters, and family organizers",
    "priceRange": "mid.",
    "launchPriority": "Future drop",
    "heroLine": "Foldable Step-Stool Storage Box is a reusable tool for sit/store dual-use box.",
    "demandSignal": "Miniso multi-use box.",
    "origin": "China.",
    "benefits": [
      "Sit/store dual-use box.",
      "Sit/store dual-use box.",
      "Demand signal: Miniso multi-use box.",
      "Consumer-sized format for small apartments, closets, bathroom shelves, students, renters, and family organizers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-187"
      },
      {
        "label": "Aisle",
        "value": "Home, Closet & Bathroom Storage Extensions"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "China."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Foldable Step-Stool Storage Box",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Foldable Step-Stool Storage Box?",
        "answer": "Foldable Step-Stool Storage Box is a Toreso reusable tool made for sit/store dual-use box."
      },
      {
        "question": "Who should use Foldable Step-Stool Storage Box?",
        "answer": "Foldable Step-Stool Storage Box is designed for small apartments, closets, bathroom shelves, students, renters, and family organizers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Sit/store dual-use box."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-17"
    ]
  },
  {
    "id": "toreso-blind-box-mystery-storage-minis",
    "catalogNumber": 188,
    "slug": "toreso-blind-box-mystery-storage-minis",
    "name": "Toreso Blind-Box Mystery Storage Minis",
    "track": "Seasonal, Novelty & Impulse \"Fun\" Packaging",
    "categorySlug": "seasonal-novelty-and-impulse-fun-packaging",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Collectible mini containers in blind boxes.",
    "b2cInnovation": "Collectible mini containers in blind boxes.",
    "format": "Rigid storage",
    "signal": "per Accio/Matrixbcg analysis, Miniso's \"interest-driven consumption\" and IP/blind-box strategy drove IP products to 39% of overseas revenue in Q1 2025; \"fun aesthetics\" is a core brand pillar. Fun + function is the Toreso differentiator.",
    "aisle": "Seasonal, Novelty & Impulse \"Fun\" Packaging",
    "audience": "festival shoppers, teens, gift buyers, impulse shoppers, and people who like fun functional products",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Blind-Box Mystery Storage Minis is a rigid storage for collectible mini containers in blind boxes.",
    "demandSignal": "Miniso blind-box trend.",
    "origin": "China.",
    "benefits": [
      "Collectible mini containers in blind boxes.",
      "Collectible mini containers in blind boxes.",
      "Demand signal: Miniso blind-box trend.",
      "Consumer-sized format for festival shoppers, teens, gift buyers, impulse shoppers, and people who like fun functional products."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-188"
      },
      {
        "label": "Aisle",
        "value": "Seasonal, Novelty & Impulse \"Fun\" Packaging"
      },
      {
        "label": "Format",
        "value": "Rigid storage"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "China."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Blind-Box Mystery Storage Minis",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Blind-Box Mystery Storage Minis?",
        "answer": "Toreso Blind-Box Mystery Storage Minis is a Toreso rigid storage made for collectible mini containers in blind boxes."
      },
      {
        "question": "Who should use Toreso Blind-Box Mystery Storage Minis?",
        "answer": "Toreso Blind-Box Mystery Storage Minis is designed for festival shoppers, teens, gift buyers, impulse shoppers, and people who like fun functional products."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Collectible mini containers in blind boxes."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-18"
    ]
  },
  {
    "id": "character-print-sealer-skins",
    "catalogNumber": 189,
    "slug": "character-print-sealer-skins",
    "name": "Character-Print Sealer Skins",
    "track": "Seasonal, Novelty & Impulse \"Fun\" Packaging",
    "categorySlug": "seasonal-novelty-and-impulse-fun-packaging",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Swappable decorative skins for SnapSeal.",
    "b2cInnovation": "Swappable decorative skins for SnapSeal.",
    "format": "Reusable tool",
    "signal": "per Accio/Matrixbcg analysis, Miniso's \"interest-driven consumption\" and IP/blind-box strategy drove IP products to 39% of overseas revenue in Q1 2025; \"fun aesthetics\" is a core brand pillar. Fun + function is the Toreso differentiator.",
    "aisle": "Seasonal, Novelty & Impulse \"Fun\" Packaging",
    "audience": "festival shoppers, teens, gift buyers, impulse shoppers, and people who like fun functional products",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Character-Print Sealer Skins is a reusable tool for swappable decorative skins for snapseal.",
    "demandSignal": "per Accio/Matrixbcg analysis, Miniso's \"interest-driven consumption\" and IP/blind-box strategy drove IP products to 39% of overseas revenue in Q1 2025; \"fun aesthetics\" is a core brand pillar. Fun + function is the Toreso differentiator.",
    "origin": "Global packaging retail",
    "benefits": [
      "Swappable decorative skins for SnapSeal.",
      "Swappable decorative skins for SnapSeal.",
      "Built for the seasonal, novelty & impulse \"fun\" packaging aisle.",
      "Consumer-sized format for festival shoppers, teens, gift buyers, impulse shoppers, and people who like fun functional products."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-189"
      },
      {
        "label": "Aisle",
        "value": "Seasonal, Novelty & Impulse \"Fun\" Packaging"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Character-Print Sealer Skins",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Character-Print Sealer Skins?",
        "answer": "Character-Print Sealer Skins is a Toreso reusable tool made for swappable decorative skins for snapseal."
      },
      {
        "question": "Who should use Character-Print Sealer Skins?",
        "answer": "Character-Print Sealer Skins is designed for festival shoppers, teens, gift buyers, impulse shoppers, and people who like fun functional products."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Swappable decorative skins for SnapSeal."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-18"
    ]
  },
  {
    "id": "toreso-festival-gift-kits-diwali-rakhi",
    "catalogNumber": 190,
    "slug": "toreso-festival-gift-kits-diwali-rakhi",
    "name": "Toreso Festival Gift Kits (Diwali/Rakhi)",
    "track": "Seasonal, Novelty & Impulse \"Fun\" Packaging",
    "categorySlug": "seasonal-novelty-and-impulse-fun-packaging",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Themed wrap + box + label bundles.",
    "b2cInnovation": "Themed wrap + box + label bundles.",
    "format": "Starter kit",
    "signal": "per Accio/Matrixbcg analysis, Miniso's \"interest-driven consumption\" and IP/blind-box strategy drove IP products to 39% of overseas revenue in Q1 2025; \"fun aesthetics\" is a core brand pillar. Fun + function is the Toreso differentiator.",
    "aisle": "Seasonal, Novelty & Impulse \"Fun\" Packaging",
    "audience": "festival shoppers, teens, gift buyers, impulse shoppers, and people who like fun functional products",
    "priceRange": "impulse-mid.",
    "launchPriority": "Premium daily",
    "heroLine": "Toreso Festival Gift Kits (Diwali/Rakhi) is a starter kit for themed wrap + box + label bundles.",
    "demandSignal": "per Accio/Matrixbcg analysis, Miniso's \"interest-driven consumption\" and IP/blind-box strategy drove IP products to 39% of overseas revenue in Q1 2025; \"fun aesthetics\" is a core brand pillar. Fun + function is the Toreso differentiator.",
    "origin": "India-relevant.",
    "benefits": [
      "Themed wrap + box + label bundles.",
      "Themed wrap + box + label bundles.",
      "Built for the seasonal, novelty & impulse \"fun\" packaging aisle.",
      "Consumer-sized format for festival shoppers, teens, gift buyers, impulse shoppers, and people who like fun functional products."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-190"
      },
      {
        "label": "Aisle",
        "value": "Seasonal, Novelty & Impulse \"Fun\" Packaging"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "India-relevant."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Festival Gift Kits (Diwali/Rakhi)",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Festival Gift Kits (Diwali/Rakhi)?",
        "answer": "Toreso Festival Gift Kits (Diwali/Rakhi) is a Toreso starter kit made for themed wrap + box + label bundles."
      },
      {
        "question": "Who should use Toreso Festival Gift Kits (Diwali/Rakhi)?",
        "answer": "Toreso Festival Gift Kits (Diwali/Rakhi) is designed for festival shoppers, teens, gift buyers, impulse shoppers, and people who like fun functional products."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Themed wrap + box + label bundles."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-18"
    ]
  },
  {
    "id": "glow-in-dark-cable-wraps",
    "catalogNumber": 191,
    "slug": "glow-in-dark-cable-wraps",
    "name": "Glow-in-Dark Cable Wraps",
    "track": "Seasonal, Novelty & Impulse \"Fun\" Packaging",
    "categorySlug": "seasonal-novelty-and-impulse-fun-packaging",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Fun glowing cord organizers.",
    "b2cInnovation": "Fun glowing cord organizers.",
    "format": "Flexible pack",
    "signal": "per Accio/Matrixbcg analysis, Miniso's \"interest-driven consumption\" and IP/blind-box strategy drove IP products to 39% of overseas revenue in Q1 2025; \"fun aesthetics\" is a core brand pillar. Fun + function is the Toreso differentiator.",
    "aisle": "Seasonal, Novelty & Impulse \"Fun\" Packaging",
    "audience": "festival shoppers, teens, gift buyers, impulse shoppers, and people who like fun functional products",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Glow-in-Dark Cable Wraps is a flexible pack for fun glowing cord organizers.",
    "demandSignal": "per Accio/Matrixbcg analysis, Miniso's \"interest-driven consumption\" and IP/blind-box strategy drove IP products to 39% of overseas revenue in Q1 2025; \"fun aesthetics\" is a core brand pillar. Fun + function is the Toreso differentiator.",
    "origin": "Global packaging retail",
    "benefits": [
      "Fun glowing cord organizers.",
      "Fun glowing cord organizers.",
      "Built for the seasonal, novelty & impulse \"fun\" packaging aisle.",
      "Consumer-sized format for festival shoppers, teens, gift buyers, impulse shoppers, and people who like fun functional products."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-191"
      },
      {
        "label": "Aisle",
        "value": "Seasonal, Novelty & Impulse \"Fun\" Packaging"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Glow-in-Dark Cable Wraps",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Glow-in-Dark Cable Wraps?",
        "answer": "Glow-in-Dark Cable Wraps is a Toreso flexible pack made for fun glowing cord organizers."
      },
      {
        "question": "Who should use Glow-in-Dark Cable Wraps?",
        "answer": "Glow-in-Dark Cable Wraps is designed for festival shoppers, teens, gift buyers, impulse shoppers, and people who like fun functional products."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Fun glowing cord organizers."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-18"
    ]
  },
  {
    "id": "toreso-scented-drawer-sachets",
    "catalogNumber": 192,
    "slug": "toreso-scented-drawer-sachets",
    "name": "Toreso Scented Drawer Sachets",
    "track": "Seasonal, Novelty & Impulse \"Fun\" Packaging",
    "categorySlug": "seasonal-novelty-and-impulse-fun-packaging",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Fragranced sachets (ties to Miniso's fragrance strength in India).",
    "b2cInnovation": "Fragranced sachets (ties to Miniso's fragrance strength in India).",
    "format": "Seasonal, Novelty product",
    "signal": "per Accio/Matrixbcg analysis, Miniso's \"interest-driven consumption\" and IP/blind-box strategy drove IP products to 39% of overseas revenue in Q1 2025; \"fun aesthetics\" is a core brand pillar. Fun + function is the Toreso differentiator.",
    "aisle": "Seasonal, Novelty & Impulse \"Fun\" Packaging",
    "audience": "festival shoppers, teens, gift buyers, impulse shoppers, and people who like fun functional products",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Scented Drawer Sachets is a seasonal, novelty product for fragranced sachets (ties to miniso's fragrance strength in india).",
    "demandSignal": "per Accio/Matrixbcg analysis, Miniso's \"interest-driven consumption\" and IP/blind-box strategy drove IP products to 39% of overseas revenue in Q1 2025; \"fun aesthetics\" is a core brand pillar. Fun + function is the Toreso differentiator.",
    "origin": "China/India.",
    "benefits": [
      "Fragranced sachets (ties to Miniso's fragrance strength in India).",
      "Fragranced sachets (ties to Miniso's fragrance strength in India).",
      "Built for the seasonal, novelty & impulse \"fun\" packaging aisle.",
      "Consumer-sized format for festival shoppers, teens, gift buyers, impulse shoppers, and people who like fun functional products."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-192"
      },
      {
        "label": "Aisle",
        "value": "Seasonal, Novelty & Impulse \"Fun\" Packaging"
      },
      {
        "label": "Format",
        "value": "Seasonal, Novelty product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "China/India."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Scented Drawer Sachets",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Scented Drawer Sachets?",
        "answer": "Toreso Scented Drawer Sachets is a Toreso seasonal, novelty product made for fragranced sachets (ties to miniso's fragrance strength in india)."
      },
      {
        "question": "Who should use Toreso Scented Drawer Sachets?",
        "answer": "Toreso Scented Drawer Sachets is designed for festival shoppers, teens, gift buyers, impulse shoppers, and people who like fun functional products."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Fragranced sachets (ties to Miniso's fragrance strength in India)."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-18"
    ]
  },
  {
    "id": "pop-it-fidget-lunch-box",
    "catalogNumber": 193,
    "slug": "pop-it-fidget-lunch-box",
    "name": "Pop-It Fidget Lunch Box",
    "track": "Seasonal, Novelty & Impulse \"Fun\" Packaging",
    "categorySlug": "seasonal-novelty-and-impulse-fun-packaging",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Bento with pop-bubble lid.",
    "b2cInnovation": "Bento with pop-bubble lid.",
    "format": "Rigid storage",
    "signal": "per Accio/Matrixbcg analysis, Miniso's \"interest-driven consumption\" and IP/blind-box strategy drove IP products to 39% of overseas revenue in Q1 2025; \"fun aesthetics\" is a core brand pillar. Fun + function is the Toreso differentiator.",
    "aisle": "Seasonal, Novelty & Impulse \"Fun\" Packaging",
    "audience": "festival shoppers, teens, gift buyers, impulse shoppers, and people who like fun functional products",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Pop-It Fidget Lunch Box is a rigid storage for bento with pop-bubble lid.",
    "demandSignal": "per Accio/Matrixbcg analysis, Miniso's \"interest-driven consumption\" and IP/blind-box strategy drove IP products to 39% of overseas revenue in Q1 2025; \"fun aesthetics\" is a core brand pillar. Fun + function is the Toreso differentiator.",
    "origin": "Global packaging retail",
    "benefits": [
      "Bento with pop-bubble lid.",
      "Bento with pop-bubble lid.",
      "Built for the seasonal, novelty & impulse \"fun\" packaging aisle.",
      "Consumer-sized format for festival shoppers, teens, gift buyers, impulse shoppers, and people who like fun functional products."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-193"
      },
      {
        "label": "Aisle",
        "value": "Seasonal, Novelty & Impulse \"Fun\" Packaging"
      },
      {
        "label": "Format",
        "value": "Rigid storage"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Pop-It Fidget Lunch Box",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Pop-It Fidget Lunch Box?",
        "answer": "Pop-It Fidget Lunch Box is a Toreso rigid storage made for bento with pop-bubble lid."
      },
      {
        "question": "Who should use Pop-It Fidget Lunch Box?",
        "answer": "Pop-It Fidget Lunch Box is designed for festival shoppers, teens, gift buyers, impulse shoppers, and people who like fun functional products."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Bento with pop-bubble lid."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-18"
    ]
  },
  {
    "id": "toreso-reusable-advent-storage-calendar",
    "catalogNumber": 194,
    "slug": "toreso-reusable-advent-storage-calendar",
    "name": "Toreso Reusable Advent/Storage Calendar",
    "track": "Seasonal, Novelty & Impulse \"Fun\" Packaging",
    "categorySlug": "seasonal-novelty-and-impulse-fun-packaging",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Refillable compartment calendar.",
    "b2cInnovation": "Refillable compartment calendar.",
    "format": "Seasonal, Novelty product",
    "signal": "per Accio/Matrixbcg analysis, Miniso's \"interest-driven consumption\" and IP/blind-box strategy drove IP products to 39% of overseas revenue in Q1 2025; \"fun aesthetics\" is a core brand pillar. Fun + function is the Toreso differentiator.",
    "aisle": "Seasonal, Novelty & Impulse \"Fun\" Packaging",
    "audience": "festival shoppers, teens, gift buyers, impulse shoppers, and people who like fun functional products",
    "priceRange": "mid.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Reusable Advent/Storage Calendar is a seasonal, novelty product for refillable compartment calendar.",
    "demandSignal": "per Accio/Matrixbcg analysis, Miniso's \"interest-driven consumption\" and IP/blind-box strategy drove IP products to 39% of overseas revenue in Q1 2025; \"fun aesthetics\" is a core brand pillar. Fun + function is the Toreso differentiator.",
    "origin": "Global packaging retail",
    "benefits": [
      "Refillable compartment calendar.",
      "Refillable compartment calendar.",
      "Built for the seasonal, novelty & impulse \"fun\" packaging aisle.",
      "Consumer-sized format for festival shoppers, teens, gift buyers, impulse shoppers, and people who like fun functional products."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-194"
      },
      {
        "label": "Aisle",
        "value": "Seasonal, Novelty & Impulse \"Fun\" Packaging"
      },
      {
        "label": "Format",
        "value": "Seasonal, Novelty product"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Reusable Advent/Storage Calendar",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Reusable Advent/Storage Calendar?",
        "answer": "Toreso Reusable Advent/Storage Calendar is a Toreso seasonal, novelty product made for refillable compartment calendar."
      },
      {
        "question": "Who should use Toreso Reusable Advent/Storage Calendar?",
        "answer": "Toreso Reusable Advent/Storage Calendar is designed for festival shoppers, teens, gift buyers, impulse shoppers, and people who like fun functional products."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Refillable compartment calendar."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-18"
    ]
  },
  {
    "id": "mini-washing-machine-sponge-cleaner",
    "catalogNumber": 195,
    "slug": "mini-washing-machine-sponge-cleaner",
    "name": "Mini Washing-Machine Sponge Cleaner",
    "track": "Seasonal, Novelty & Impulse \"Fun\" Packaging",
    "categorySlug": "seasonal-novelty-and-impulse-fun-packaging",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Novelty cleaning gadget.",
    "b2cInnovation": "Novelty cleaning gadget.",
    "format": "Seasonal, Novelty product",
    "signal": "per Accio/Matrixbcg analysis, Miniso's \"interest-driven consumption\" and IP/blind-box strategy drove IP products to 39% of overseas revenue in Q1 2025; \"fun aesthetics\" is a core brand pillar. Fun + function is the Toreso differentiator.",
    "aisle": "Seasonal, Novelty & Impulse \"Fun\" Packaging",
    "audience": "festival shoppers, teens, gift buyers, impulse shoppers, and people who like fun functional products",
    "priceRange": "impulse-mid.",
    "launchPriority": "Future drop",
    "heroLine": "Mini Washing-Machine Sponge Cleaner is a seasonal, novelty product for novelty cleaning gadget.",
    "demandSignal": "Flying Tiger viral \"mini washing machine for makeup sponges.\"",
    "origin": "Denmark/viral.",
    "benefits": [
      "Novelty cleaning gadget.",
      "Novelty cleaning gadget.",
      "Demand signal: Flying Tiger viral \"mini washing machine for makeup sponges.\"",
      "Consumer-sized format for festival shoppers, teens, gift buyers, impulse shoppers, and people who like fun functional products."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-195"
      },
      {
        "label": "Aisle",
        "value": "Seasonal, Novelty & Impulse \"Fun\" Packaging"
      },
      {
        "label": "Format",
        "value": "Seasonal, Novelty product"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Denmark/viral."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Mini Washing-Machine Sponge Cleaner",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Mini Washing-Machine Sponge Cleaner?",
        "answer": "Mini Washing-Machine Sponge Cleaner is a Toreso seasonal, novelty product made for novelty cleaning gadget."
      },
      {
        "question": "Who should use Mini Washing-Machine Sponge Cleaner?",
        "answer": "Mini Washing-Machine Sponge Cleaner is designed for festival shoppers, teens, gift buyers, impulse shoppers, and people who like fun functional products."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Novelty cleaning gadget."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-18"
    ]
  },
  {
    "id": "toreso-squishy-anti-stress-wrap-roll",
    "catalogNumber": 196,
    "slug": "toreso-squishy-anti-stress-wrap-roll",
    "name": "Toreso Squishy Anti-Stress Wrap Roll",
    "track": "Seasonal, Novelty & Impulse \"Fun\" Packaging",
    "categorySlug": "seasonal-novelty-and-impulse-fun-packaging",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Fidget + wrap crossover.",
    "b2cInnovation": "Fidget + wrap crossover.",
    "format": "Flexible pack",
    "signal": "per Accio/Matrixbcg analysis, Miniso's \"interest-driven consumption\" and IP/blind-box strategy drove IP products to 39% of overseas revenue in Q1 2025; \"fun aesthetics\" is a core brand pillar. Fun + function is the Toreso differentiator.",
    "aisle": "Seasonal, Novelty & Impulse \"Fun\" Packaging",
    "audience": "festival shoppers, teens, gift buyers, impulse shoppers, and people who like fun functional products",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Squishy Anti-Stress Wrap Roll is a flexible pack for fidget + wrap crossover.",
    "demandSignal": "per Accio/Matrixbcg analysis, Miniso's \"interest-driven consumption\" and IP/blind-box strategy drove IP products to 39% of overseas revenue in Q1 2025; \"fun aesthetics\" is a core brand pillar. Fun + function is the Toreso differentiator.",
    "origin": "Global packaging retail",
    "benefits": [
      "Fidget + wrap crossover.",
      "Fidget + wrap crossover.",
      "Built for the seasonal, novelty & impulse \"fun\" packaging aisle.",
      "Consumer-sized format for festival shoppers, teens, gift buyers, impulse shoppers, and people who like fun functional products."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-196"
      },
      {
        "label": "Aisle",
        "value": "Seasonal, Novelty & Impulse \"Fun\" Packaging"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Squishy Anti-Stress Wrap Roll",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Squishy Anti-Stress Wrap Roll?",
        "answer": "Toreso Squishy Anti-Stress Wrap Roll is a Toreso flexible pack made for fidget + wrap crossover."
      },
      {
        "question": "Who should use Toreso Squishy Anti-Stress Wrap Roll?",
        "answer": "Toreso Squishy Anti-Stress Wrap Roll is designed for festival shoppers, teens, gift buyers, impulse shoppers, and people who like fun functional products."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Fidget + wrap crossover."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-18"
    ]
  },
  {
    "id": "clear-vinyl-character-pouches",
    "catalogNumber": 197,
    "slug": "clear-vinyl-character-pouches",
    "name": "Clear Vinyl Character Pouches",
    "track": "Seasonal, Novelty & Impulse \"Fun\" Packaging",
    "categorySlug": "seasonal-novelty-and-impulse-fun-packaging",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Decorative see-through pouches.",
    "b2cInnovation": "Decorative see-through pouches.",
    "format": "Flexible pack",
    "signal": "per Accio/Matrixbcg analysis, Miniso's \"interest-driven consumption\" and IP/blind-box strategy drove IP products to 39% of overseas revenue in Q1 2025; \"fun aesthetics\" is a core brand pillar. Fun + function is the Toreso differentiator.",
    "aisle": "Seasonal, Novelty & Impulse \"Fun\" Packaging",
    "audience": "festival shoppers, teens, gift buyers, impulse shoppers, and people who like fun functional products",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Clear Vinyl Character Pouches is a flexible pack for decorative see-through pouches.",
    "demandSignal": "Daiso/Disney clear pouches.",
    "origin": "Japan.",
    "benefits": [
      "Decorative see-through pouches.",
      "Decorative see-through pouches.",
      "Demand signal: Daiso/Disney clear pouches.",
      "Consumer-sized format for festival shoppers, teens, gift buyers, impulse shoppers, and people who like fun functional products."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-197"
      },
      {
        "label": "Aisle",
        "value": "Seasonal, Novelty & Impulse \"Fun\" Packaging"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Japan."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Clear Vinyl Character Pouches",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Clear Vinyl Character Pouches?",
        "answer": "Clear Vinyl Character Pouches is a Toreso flexible pack made for decorative see-through pouches."
      },
      {
        "question": "Who should use Clear Vinyl Character Pouches?",
        "answer": "Clear Vinyl Character Pouches is designed for festival shoppers, teens, gift buyers, impulse shoppers, and people who like fun functional products."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Decorative see-through pouches."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-18"
    ]
  },
  {
    "id": "toreso-foldable-cooler-bag",
    "catalogNumber": 198,
    "slug": "toreso-foldable-cooler-bag",
    "name": "Toreso Foldable Cooler Bag",
    "track": "Outdoor, Picnic & On-the-Go Packaging",
    "categorySlug": "outdoor-picnic-and-on-the-go-packaging",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Insulated foldable picnic cooler.",
    "b2cInnovation": "Insulated foldable picnic cooler.",
    "format": "Flexible pack",
    "signal": "Daiso Korea picnic sets and Han River picnic culture; foldable cooler bags and aluminium foil/ice-pack camping lines are Daiso staples.",
    "aisle": "Outdoor, Picnic & On-the-Go Packaging",
    "audience": "picnic users, monsoon commuters, campers, families, and on-the-go snack users",
    "priceRange": "impulse-mid.",
    "launchPriority": "Premium daily",
    "heroLine": "Toreso Foldable Cooler Bag is a flexible pack for insulated foldable picnic cooler.",
    "demandSignal": "Daiso camping line.",
    "origin": "Korea/Japan.",
    "benefits": [
      "Insulated foldable picnic cooler.",
      "Insulated foldable picnic cooler.",
      "Demand signal: Daiso camping line.",
      "Consumer-sized format for picnic users, monsoon commuters, campers, families, and on-the-go snack users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-198"
      },
      {
        "label": "Aisle",
        "value": "Outdoor, Picnic & On-the-Go Packaging"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Korea/Japan."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Foldable Cooler Bag",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Foldable Cooler Bag?",
        "answer": "Toreso Foldable Cooler Bag is a Toreso flexible pack made for insulated foldable picnic cooler."
      },
      {
        "question": "Who should use Toreso Foldable Cooler Bag?",
        "answer": "Toreso Foldable Cooler Bag is designed for picnic users, monsoon commuters, campers, families, and on-the-go snack users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Insulated foldable picnic cooler."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-19"
    ]
  },
  {
    "id": "reusable-ice-packs-gel",
    "catalogNumber": 199,
    "slug": "reusable-ice-packs-gel",
    "name": "Reusable Ice Packs (gel)",
    "track": "Outdoor, Picnic & On-the-Go Packaging",
    "categorySlug": "outdoor-picnic-and-on-the-go-packaging",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Refreezable gel packs.",
    "b2cInnovation": "Refreezable gel packs.",
    "format": "Starter kit",
    "signal": "Daiso Korea picnic sets and Han River picnic culture; foldable cooler bags and aluminium foil/ice-pack camping lines are Daiso staples.",
    "aisle": "Outdoor, Picnic & On-the-Go Packaging",
    "audience": "picnic users, monsoon commuters, campers, families, and on-the-go snack users",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Reusable Ice Packs (gel) is a starter kit for refreezable gel packs.",
    "demandSignal": "Daiso Korea picnic sets and Han River picnic culture; foldable cooler bags and aluminium foil/ice-pack camping lines are Daiso staples.",
    "origin": "Global packaging retail",
    "benefits": [
      "Refreezable gel packs.",
      "Refreezable gel packs.",
      "Built for the outdoor, picnic & on-the-go packaging aisle.",
      "Consumer-sized format for picnic users, monsoon commuters, campers, families, and on-the-go snack users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-199"
      },
      {
        "label": "Aisle",
        "value": "Outdoor, Picnic & On-the-Go Packaging"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Reusable Ice Packs (gel)",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Reusable Ice Packs (gel)?",
        "answer": "Reusable Ice Packs (gel) is a Toreso starter kit made for refreezable gel packs."
      },
      {
        "question": "Who should use Reusable Ice Packs (gel)?",
        "answer": "Reusable Ice Packs (gel) is designed for picnic users, monsoon commuters, campers, families, and on-the-go snack users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Refreezable gel packs."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-19"
    ]
  },
  {
    "id": "toreso-disposable-picnic-set",
    "catalogNumber": 200,
    "slug": "toreso-disposable-picnic-set",
    "name": "Toreso Disposable Picnic Set",
    "track": "Outdoor, Picnic & On-the-Go Packaging",
    "categorySlug": "outdoor-picnic-and-on-the-go-packaging",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Mats, cups, plates kit.",
    "b2cInnovation": "Mats, cups, plates kit.",
    "format": "Starter kit",
    "signal": "Daiso Korea picnic sets and Han River picnic culture; foldable cooler bags and aluminium foil/ice-pack camping lines are Daiso staples.",
    "aisle": "Outdoor, Picnic & On-the-Go Packaging",
    "audience": "picnic users, monsoon commuters, campers, families, and on-the-go snack users",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Disposable Picnic Set is a starter kit for mats, cups, plates kit.",
    "demandSignal": "Daiso Korea picnic set.",
    "origin": "Korea.",
    "benefits": [
      "Mats, cups, plates kit.",
      "Mats, cups, plates kit.",
      "Demand signal: Daiso Korea picnic set.",
      "Consumer-sized format for picnic users, monsoon commuters, campers, families, and on-the-go snack users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-200"
      },
      {
        "label": "Aisle",
        "value": "Outdoor, Picnic & On-the-Go Packaging"
      },
      {
        "label": "Format",
        "value": "Starter kit"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Korea."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Disposable Picnic Set",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Disposable Picnic Set?",
        "answer": "Toreso Disposable Picnic Set is a Toreso starter kit made for mats, cups, plates kit."
      },
      {
        "question": "Who should use Toreso Disposable Picnic Set?",
        "answer": "Toreso Disposable Picnic Set is designed for picnic users, monsoon commuters, campers, families, and on-the-go snack users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Mats, cups, plates kit."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-19"
    ]
  },
  {
    "id": "collapsible-water-bottle-bowl",
    "catalogNumber": 201,
    "slug": "collapsible-water-bottle-bowl",
    "name": "Collapsible Water Bottle/Bowl",
    "track": "Outdoor, Picnic & On-the-Go Packaging",
    "categorySlug": "outdoor-picnic-and-on-the-go-packaging",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Foldable silicone bottle for travel/pets.",
    "b2cInnovation": "Foldable silicone bottle for travel/pets.",
    "format": "Outdoor, Picnic product",
    "signal": "Daiso Korea picnic sets and Han River picnic culture; foldable cooler bags and aluminium foil/ice-pack camping lines are Daiso staples.",
    "aisle": "Outdoor, Picnic & On-the-Go Packaging",
    "audience": "picnic users, monsoon commuters, campers, families, and on-the-go snack users",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Collapsible Water Bottle/Bowl is a outdoor, picnic product for foldable silicone bottle for travel/pets.",
    "demandSignal": "Daiso Korea picnic sets and Han River picnic culture; foldable cooler bags and aluminium foil/ice-pack camping lines are Daiso staples.",
    "origin": "Global packaging retail",
    "benefits": [
      "Foldable silicone bottle for travel/pets.",
      "Foldable silicone bottle for travel/pets.",
      "Built for the outdoor, picnic & on-the-go packaging aisle.",
      "Consumer-sized format for picnic users, monsoon commuters, campers, families, and on-the-go snack users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-201"
      },
      {
        "label": "Aisle",
        "value": "Outdoor, Picnic & On-the-Go Packaging"
      },
      {
        "label": "Format",
        "value": "Outdoor, Picnic product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Collapsible Water Bottle/Bowl",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Collapsible Water Bottle/Bowl?",
        "answer": "Collapsible Water Bottle/Bowl is a Toreso outdoor, picnic product made for foldable silicone bottle for travel/pets."
      },
      {
        "question": "Who should use Collapsible Water Bottle/Bowl?",
        "answer": "Collapsible Water Bottle/Bowl is designed for picnic users, monsoon commuters, campers, families, and on-the-go snack users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Foldable silicone bottle for travel/pets."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-19"
    ]
  },
  {
    "id": "toreso-waterproof-dry-bag",
    "catalogNumber": 202,
    "slug": "toreso-waterproof-dry-bag",
    "name": "Toreso Waterproof Dry Bag",
    "track": "Outdoor, Picnic & On-the-Go Packaging",
    "categorySlug": "outdoor-picnic-and-on-the-go-packaging",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Roll-top dry bag for beach/monsoon.",
    "b2cInnovation": "Roll-top dry bag for beach/monsoon.",
    "format": "Flexible pack",
    "signal": "Daiso Korea picnic sets and Han River picnic culture; foldable cooler bags and aluminium foil/ice-pack camping lines are Daiso staples.",
    "aisle": "Outdoor, Picnic & On-the-Go Packaging",
    "audience": "picnic users, monsoon commuters, campers, families, and on-the-go snack users",
    "priceRange": "impulse-mid.",
    "launchPriority": "Premium daily",
    "heroLine": "Toreso Waterproof Dry Bag is a flexible pack for roll-top dry bag for beach/monsoon.",
    "demandSignal": "Daiso Korea picnic sets and Han River picnic culture; foldable cooler bags and aluminium foil/ice-pack camping lines are Daiso staples.",
    "origin": "India-relevant (monsoon).",
    "benefits": [
      "Roll-top dry bag for beach/monsoon.",
      "Roll-top dry bag for beach/monsoon.",
      "Built for the outdoor, picnic & on-the-go packaging aisle.",
      "Consumer-sized format for picnic users, monsoon commuters, campers, families, and on-the-go snack users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-202"
      },
      {
        "label": "Aisle",
        "value": "Outdoor, Picnic & On-the-Go Packaging"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "India-relevant (monsoon)."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Waterproof Dry Bag",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Waterproof Dry Bag?",
        "answer": "Toreso Waterproof Dry Bag is a Toreso flexible pack made for roll-top dry bag for beach/monsoon."
      },
      {
        "question": "Who should use Toreso Waterproof Dry Bag?",
        "answer": "Toreso Waterproof Dry Bag is designed for picnic users, monsoon commuters, campers, families, and on-the-go snack users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Roll-top dry bag for beach/monsoon."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-19"
    ]
  },
  {
    "id": "snack-on-the-go-clip-cups",
    "catalogNumber": 203,
    "slug": "snack-on-the-go-clip-cups",
    "name": "Snack-on-the-Go Clip Cups",
    "track": "Outdoor, Picnic & On-the-Go Packaging",
    "categorySlug": "outdoor-picnic-and-on-the-go-packaging",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Clip-to-bottle snack cups.",
    "b2cInnovation": "Clip-to-bottle snack cups.",
    "format": "Reusable tool",
    "signal": "Daiso Korea picnic sets and Han River picnic culture; foldable cooler bags and aluminium foil/ice-pack camping lines are Daiso staples.",
    "aisle": "Outdoor, Picnic & On-the-Go Packaging",
    "audience": "picnic users, monsoon commuters, campers, families, and on-the-go snack users",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Snack-on-the-Go Clip Cups is a reusable tool for clip-to-bottle snack cups.",
    "demandSignal": "3COINS drink/snack combo.",
    "origin": "Japan.",
    "benefits": [
      "Clip-to-bottle snack cups.",
      "Clip-to-bottle snack cups.",
      "Demand signal: 3COINS drink/snack combo.",
      "Consumer-sized format for picnic users, monsoon commuters, campers, families, and on-the-go snack users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-203"
      },
      {
        "label": "Aisle",
        "value": "Outdoor, Picnic & On-the-Go Packaging"
      },
      {
        "label": "Format",
        "value": "Reusable tool"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Japan."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Snack-on-the-Go Clip Cups",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Snack-on-the-Go Clip Cups?",
        "answer": "Snack-on-the-Go Clip Cups is a Toreso reusable tool made for clip-to-bottle snack cups."
      },
      {
        "question": "Who should use Snack-on-the-Go Clip Cups?",
        "answer": "Snack-on-the-Go Clip Cups is designed for picnic users, monsoon commuters, campers, families, and on-the-go snack users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Clip-to-bottle snack cups."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-19"
    ]
  },
  {
    "id": "toreso-umbrella-sleeve-absorbent",
    "catalogNumber": 204,
    "slug": "toreso-umbrella-sleeve-absorbent",
    "name": "Toreso Umbrella Sleeve (absorbent)",
    "track": "Outdoor, Picnic & On-the-Go Packaging",
    "categorySlug": "outdoor-picnic-and-on-the-go-packaging",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Drip-absorbing umbrella sleeve.",
    "b2cInnovation": "Drip-absorbing umbrella sleeve.",
    "format": "Flexible pack",
    "signal": "Daiso Korea picnic sets and Han River picnic culture; foldable cooler bags and aluminium foil/ice-pack camping lines are Daiso staples.",
    "aisle": "Outdoor, Picnic & On-the-Go Packaging",
    "audience": "picnic users, monsoon commuters, campers, families, and on-the-go snack users",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Umbrella Sleeve (absorbent) is a flexible pack for drip-absorbing umbrella sleeve.",
    "demandSignal": "Daiso \"wet umbrella sleeve\" micro-solution.",
    "origin": "Korea/Japan.",
    "benefits": [
      "Drip-absorbing umbrella sleeve.",
      "Drip-absorbing umbrella sleeve.",
      "Demand signal: Daiso \"wet umbrella sleeve\" micro-solution.",
      "Consumer-sized format for picnic users, monsoon commuters, campers, families, and on-the-go snack users."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-204"
      },
      {
        "label": "Aisle",
        "value": "Outdoor, Picnic & On-the-Go Packaging"
      },
      {
        "label": "Format",
        "value": "Flexible pack"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Korea/Japan."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Umbrella Sleeve (absorbent)",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Umbrella Sleeve (absorbent)?",
        "answer": "Toreso Umbrella Sleeve (absorbent) is a Toreso flexible pack made for drip-absorbing umbrella sleeve."
      },
      {
        "question": "Who should use Toreso Umbrella Sleeve (absorbent)?",
        "answer": "Toreso Umbrella Sleeve (absorbent) is designed for picnic users, monsoon commuters, campers, families, and on-the-go snack users."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Drip-absorbing umbrella sleeve."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-19"
    ]
  },
  {
    "id": "toreso-coffee-valve-canister",
    "catalogNumber": 205,
    "slug": "toreso-coffee-valve-canister",
    "name": "Toreso Coffee Valve Canister",
    "track": "Specialty Sealing & Preservation (advanced)",
    "categorySlug": "specialty-sealing-and-preservation-advanced",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "One-way degassing valve canister for fresh coffee.",
    "b2cInnovation": "One-way degassing valve canister for fresh coffee.",
    "format": "Rigid storage",
    "signal": "vacuum/airtight preservation is the global growth edge; Japan's ZEROCO \"third preservation technology\" (JapanGov, 2026) shows premium consumer interest in freshness; coffee/tea freshness valves are specialty staples.",
    "aisle": "Specialty Sealing & Preservation (advanced)",
    "audience": "coffee users, tea buyers, herb storage, grain pantries, pickle users, and serious freshness buyers",
    "priceRange": "mid.",
    "launchPriority": "Core range",
    "heroLine": "Toreso Coffee Valve Canister is a rigid storage for one-way degassing valve canister for fresh coffee.",
    "demandSignal": "vacuum/airtight preservation is the global growth edge; Japan's ZEROCO \"third preservation technology\" (JapanGov, 2026) shows premium consumer interest in freshness; coffee/tea freshness valves are specialty staples.",
    "origin": "Global packaging retail",
    "benefits": [
      "One-way degassing valve canister for fresh coffee.",
      "One-way degassing valve canister for fresh coffee.",
      "Built for the specialty sealing & preservation (advanced) aisle.",
      "Consumer-sized format for coffee users, tea buyers, herb storage, grain pantries, pickle users, and serious freshness buyers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-205"
      },
      {
        "label": "Aisle",
        "value": "Specialty Sealing & Preservation (advanced)"
      },
      {
        "label": "Format",
        "value": "Rigid storage"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Coffee Valve Canister",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Coffee Valve Canister?",
        "answer": "Toreso Coffee Valve Canister is a Toreso rigid storage made for one-way degassing valve canister for fresh coffee."
      },
      {
        "question": "Who should use Toreso Coffee Valve Canister?",
        "answer": "Toreso Coffee Valve Canister is designed for coffee users, tea buyers, herb storage, grain pantries, pickle users, and serious freshness buyers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "One-way degassing valve canister for fresh coffee."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-20"
    ]
  },
  {
    "id": "tea-tin-with-inner-seal-lid",
    "catalogNumber": 206,
    "slug": "tea-tin-with-inner-seal-lid",
    "name": "Tea Tin with Inner Seal Lid",
    "track": "Specialty Sealing & Preservation (advanced)",
    "categorySlug": "specialty-sealing-and-preservation-advanced",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Double-lid airtight tea tin.",
    "b2cInnovation": "Double-lid airtight tea tin.",
    "format": "Rigid storage",
    "signal": "vacuum/airtight preservation is the global growth edge; Japan's ZEROCO \"third preservation technology\" (JapanGov, 2026) shows premium consumer interest in freshness; coffee/tea freshness valves are specialty staples.",
    "aisle": "Specialty Sealing & Preservation (advanced)",
    "audience": "coffee users, tea buyers, herb storage, grain pantries, pickle users, and serious freshness buyers",
    "priceRange": "impulse-mid.",
    "launchPriority": "Core range",
    "heroLine": "Tea Tin with Inner Seal Lid is a rigid storage for double-lid airtight tea tin.",
    "demandSignal": "Daiso tea supplies line.",
    "origin": "Japan.",
    "benefits": [
      "Double-lid airtight tea tin.",
      "Double-lid airtight tea tin.",
      "Demand signal: Daiso tea supplies line.",
      "Consumer-sized format for coffee users, tea buyers, herb storage, grain pantries, pickle users, and serious freshness buyers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-206"
      },
      {
        "label": "Aisle",
        "value": "Specialty Sealing & Preservation (advanced)"
      },
      {
        "label": "Format",
        "value": "Rigid storage"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "Japan."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Tea Tin with Inner Seal Lid",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Tea Tin with Inner Seal Lid?",
        "answer": "Tea Tin with Inner Seal Lid is a Toreso rigid storage made for double-lid airtight tea tin."
      },
      {
        "question": "Who should use Tea Tin with Inner Seal Lid?",
        "answer": "Tea Tin with Inner Seal Lid is designed for coffee users, tea buyers, herb storage, grain pantries, pickle users, and serious freshness buyers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Double-lid airtight tea tin."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-20"
    ]
  },
  {
    "id": "toreso-cheese-charcuterie-keeper",
    "catalogNumber": 207,
    "slug": "toreso-cheese-charcuterie-keeper",
    "name": "Toreso Cheese/Charcuterie Keeper",
    "track": "Specialty Sealing & Preservation (advanced)",
    "categorySlug": "specialty-sealing-and-preservation-advanced",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Breathable membrane cheese box.",
    "b2cInnovation": "Breathable membrane cheese box.",
    "format": "Specialty Sealing product",
    "signal": "vacuum/airtight preservation is the global growth edge; Japan's ZEROCO \"third preservation technology\" (JapanGov, 2026) shows premium consumer interest in freshness; coffee/tea freshness valves are specialty staples.",
    "aisle": "Specialty Sealing & Preservation (advanced)",
    "audience": "coffee users, tea buyers, herb storage, grain pantries, pickle users, and serious freshness buyers",
    "priceRange": "mid.",
    "launchPriority": "Core range",
    "heroLine": "Toreso Cheese/Charcuterie Keeper is a specialty sealing product for breathable membrane cheese box.",
    "demandSignal": "vacuum/airtight preservation is the global growth edge; Japan's ZEROCO \"third preservation technology\" (JapanGov, 2026) shows premium consumer interest in freshness; coffee/tea freshness valves are specialty staples.",
    "origin": "Global packaging retail",
    "benefits": [
      "Breathable membrane cheese box.",
      "Breathable membrane cheese box.",
      "Built for the specialty sealing & preservation (advanced) aisle.",
      "Consumer-sized format for coffee users, tea buyers, herb storage, grain pantries, pickle users, and serious freshness buyers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-207"
      },
      {
        "label": "Aisle",
        "value": "Specialty Sealing & Preservation (advanced)"
      },
      {
        "label": "Format",
        "value": "Specialty Sealing product"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Cheese/Charcuterie Keeper",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Cheese/Charcuterie Keeper?",
        "answer": "Toreso Cheese/Charcuterie Keeper is a Toreso specialty sealing product made for breathable membrane cheese box."
      },
      {
        "question": "Who should use Toreso Cheese/Charcuterie Keeper?",
        "answer": "Toreso Cheese/Charcuterie Keeper is designed for coffee users, tea buyers, herb storage, grain pantries, pickle users, and serious freshness buyers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Breathable membrane cheese box."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-20"
    ]
  },
  {
    "id": "herb-keeper-pod",
    "catalogNumber": 208,
    "slug": "herb-keeper-pod",
    "name": "Herb Keeper Pod",
    "track": "Specialty Sealing & Preservation (advanced)",
    "categorySlug": "specialty-sealing-and-preservation-advanced",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Water-base pod that keeps coriander/herbs fresh.",
    "b2cInnovation": "Water-base pod that keeps coriander/herbs fresh.",
    "format": "Specialty Sealing product",
    "signal": "vacuum/airtight preservation is the global growth edge; Japan's ZEROCO \"third preservation technology\" (JapanGov, 2026) shows premium consumer interest in freshness; coffee/tea freshness valves are specialty staples.",
    "aisle": "Specialty Sealing & Preservation (advanced)",
    "audience": "coffee users, tea buyers, herb storage, grain pantries, pickle users, and serious freshness buyers",
    "priceRange": "mid.",
    "launchPriority": "Premium daily",
    "heroLine": "Herb Keeper Pod is a specialty sealing product for water-base pod that keeps coriander/herbs fresh.",
    "demandSignal": "vacuum/airtight preservation is the global growth edge; Japan's ZEROCO \"third preservation technology\" (JapanGov, 2026) shows premium consumer interest in freshness; coffee/tea freshness valves are specialty staples.",
    "origin": "India-relevant.",
    "benefits": [
      "Water-base pod that keeps coriander/herbs fresh.",
      "Water-base pod that keeps coriander/herbs fresh.",
      "Built for the specialty sealing & preservation (advanced) aisle.",
      "Consumer-sized format for coffee users, tea buyers, herb storage, grain pantries, pickle users, and serious freshness buyers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-208"
      },
      {
        "label": "Aisle",
        "value": "Specialty Sealing & Preservation (advanced)"
      },
      {
        "label": "Format",
        "value": "Specialty Sealing product"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "India-relevant."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Herb Keeper Pod",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Herb Keeper Pod?",
        "answer": "Herb Keeper Pod is a Toreso specialty sealing product made for water-base pod that keeps coriander/herbs fresh."
      },
      {
        "question": "Who should use Herb Keeper Pod?",
        "answer": "Herb Keeper Pod is designed for coffee users, tea buyers, herb storage, grain pantries, pickle users, and serious freshness buyers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Water-base pod that keeps coriander/herbs fresh."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-20"
    ]
  },
  {
    "id": "toreso-banana-produce-hangers-saver",
    "catalogNumber": 209,
    "slug": "toreso-banana-produce-hangers-saver",
    "name": "Toreso Banana/Produce Hangers + Saver",
    "track": "Specialty Sealing & Preservation (advanced)",
    "categorySlug": "specialty-sealing-and-preservation-advanced",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Hook + ethylene insert to slow banana ripening.",
    "b2cInnovation": "Hook + ethylene insert to slow banana ripening.",
    "format": "Specialty Sealing product",
    "signal": "vacuum/airtight preservation is the global growth edge; Japan's ZEROCO \"third preservation technology\" (JapanGov, 2026) shows premium consumer interest in freshness; coffee/tea freshness valves are specialty staples.",
    "aisle": "Specialty Sealing & Preservation (advanced)",
    "audience": "coffee users, tea buyers, herb storage, grain pantries, pickle users, and serious freshness buyers",
    "priceRange": "impulse.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Banana/Produce Hangers + Saver is a specialty sealing product for hook + ethylene insert to slow banana ripening.",
    "demandSignal": "vacuum/airtight preservation is the global growth edge; Japan's ZEROCO \"third preservation technology\" (JapanGov, 2026) shows premium consumer interest in freshness; coffee/tea freshness valves are specialty staples.",
    "origin": "Global packaging retail",
    "benefits": [
      "Hook + ethylene insert to slow banana ripening.",
      "Hook + ethylene insert to slow banana ripening.",
      "Built for the specialty sealing & preservation (advanced) aisle.",
      "Consumer-sized format for coffee users, tea buyers, herb storage, grain pantries, pickle users, and serious freshness buyers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-209"
      },
      {
        "label": "Aisle",
        "value": "Specialty Sealing & Preservation (advanced)"
      },
      {
        "label": "Format",
        "value": "Specialty Sealing product"
      },
      {
        "label": "Positioning",
        "value": "impulse."
      },
      {
        "label": "Origin signal",
        "value": "Global packaging retail"
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Banana/Produce Hangers + Saver",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Banana/Produce Hangers + Saver?",
        "answer": "Toreso Banana/Produce Hangers + Saver is a Toreso specialty sealing product made for hook + ethylene insert to slow banana ripening."
      },
      {
        "question": "Who should use Toreso Banana/Produce Hangers + Saver?",
        "answer": "Toreso Banana/Produce Hangers + Saver is designed for coffee users, tea buyers, herb storage, grain pantries, pickle users, and serious freshness buyers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Hook + ethylene insert to slow banana ripening."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-20"
    ]
  },
  {
    "id": "vacuum-rice-grain-keeper",
    "catalogNumber": 210,
    "slug": "vacuum-rice-grain-keeper",
    "name": "Vacuum Rice/Grain Keeper",
    "track": "Specialty Sealing & Preservation (advanced)",
    "categorySlug": "specialty-sealing-and-preservation-advanced",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Airtight grain bin with measuring cup + pest-proof seal.",
    "b2cInnovation": "Airtight grain bin with measuring cup + pest-proof seal.",
    "format": "Specialty Sealing product",
    "signal": "vacuum/airtight preservation is the global growth edge; Japan's ZEROCO \"third preservation technology\" (JapanGov, 2026) shows premium consumer interest in freshness; coffee/tea freshness valves are specialty staples.",
    "aisle": "Specialty Sealing & Preservation (advanced)",
    "audience": "coffee users, tea buyers, herb storage, grain pantries, pickle users, and serious freshness buyers",
    "priceRange": "mid.",
    "launchPriority": "Future drop",
    "heroLine": "Vacuum Rice/Grain Keeper is a specialty sealing product for airtight grain bin with measuring cup + pest-proof seal.",
    "demandSignal": "vacuum/airtight preservation is the global growth edge; Japan's ZEROCO \"third preservation technology\" (JapanGov, 2026) shows premium consumer interest in freshness; coffee/tea freshness valves are specialty staples.",
    "origin": "India-relevant (rice/atta).",
    "benefits": [
      "Airtight grain bin with measuring cup + pest-proof seal.",
      "Airtight grain bin with measuring cup + pest-proof seal.",
      "Built for the specialty sealing & preservation (advanced) aisle.",
      "Consumer-sized format for coffee users, tea buyers, herb storage, grain pantries, pickle users, and serious freshness buyers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-210"
      },
      {
        "label": "Aisle",
        "value": "Specialty Sealing & Preservation (advanced)"
      },
      {
        "label": "Format",
        "value": "Specialty Sealing product"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "India-relevant (rice/atta)."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Vacuum Rice/Grain Keeper",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Vacuum Rice/Grain Keeper?",
        "answer": "Vacuum Rice/Grain Keeper is a Toreso specialty sealing product made for airtight grain bin with measuring cup + pest-proof seal."
      },
      {
        "question": "Who should use Vacuum Rice/Grain Keeper?",
        "answer": "Vacuum Rice/Grain Keeper is designed for coffee users, tea buyers, herb storage, grain pantries, pickle users, and serious freshness buyers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Airtight grain bin with measuring cup + pest-proof seal."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-20"
    ]
  },
  {
    "id": "toreso-pickle-achaar-airtight-jar",
    "catalogNumber": 211,
    "slug": "toreso-pickle-achaar-airtight-jar",
    "name": "Toreso Pickle/Achaar Airtight Jar",
    "track": "Specialty Sealing & Preservation (advanced)",
    "categorySlug": "specialty-sealing-and-preservation-advanced",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Wide-mouth airtight jar with oil-safe seal.",
    "b2cInnovation": "Wide-mouth airtight jar with oil-safe seal.",
    "format": "Rigid storage",
    "signal": "vacuum/airtight preservation is the global growth edge; Japan's ZEROCO \"third preservation technology\" (JapanGov, 2026) shows premium consumer interest in freshness; coffee/tea freshness valves are specialty staples.",
    "aisle": "Specialty Sealing & Preservation (advanced)",
    "audience": "coffee users, tea buyers, herb storage, grain pantries, pickle users, and serious freshness buyers",
    "priceRange": "impulse-mid.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Pickle/Achaar Airtight Jar is a rigid storage for wide-mouth airtight jar with oil-safe seal.",
    "demandSignal": "vacuum/airtight preservation is the global growth edge; Japan's ZEROCO \"third preservation technology\" (JapanGov, 2026) shows premium consumer interest in freshness; coffee/tea freshness valves are specialty staples.",
    "origin": "India-relevant.",
    "benefits": [
      "Wide-mouth airtight jar with oil-safe seal.",
      "Wide-mouth airtight jar with oil-safe seal.",
      "Built for the specialty sealing & preservation (advanced) aisle.",
      "Consumer-sized format for coffee users, tea buyers, herb storage, grain pantries, pickle users, and serious freshness buyers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-211"
      },
      {
        "label": "Aisle",
        "value": "Specialty Sealing & Preservation (advanced)"
      },
      {
        "label": "Format",
        "value": "Rigid storage"
      },
      {
        "label": "Positioning",
        "value": "impulse-mid."
      },
      {
        "label": "Origin signal",
        "value": "India-relevant."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Pickle/Achaar Airtight Jar",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Pickle/Achaar Airtight Jar?",
        "answer": "Toreso Pickle/Achaar Airtight Jar is a Toreso rigid storage made for wide-mouth airtight jar with oil-safe seal."
      },
      {
        "question": "Who should use Toreso Pickle/Achaar Airtight Jar?",
        "answer": "Toreso Pickle/Achaar Airtight Jar is designed for coffee users, tea buyers, herb storage, grain pantries, pickle users, and serious freshness buyers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "Wide-mouth airtight jar with oil-safe seal."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-20"
    ]
  },
  {
    "id": "toreso-vacuum-spice-box-masala-dabba",
    "catalogNumber": 212,
    "slug": "toreso-vacuum-spice-box-masala-dabba",
    "name": "Toreso Vacuum Spice Box (masala dabba)",
    "track": "Specialty Sealing & Preservation (advanced)",
    "categorySlug": "specialty-sealing-and-preservation-advanced",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "userProblem": "Traditional round masala box upgraded with an airtight vacuum lid.",
    "b2cInnovation": "India's iconic spice box reinvented for freshness.",
    "format": "Rigid storage",
    "signal": "vacuum/airtight preservation is the global growth edge; Japan's ZEROCO \"third preservation technology\" (JapanGov, 2026) shows premium consumer interest in freshness; coffee/tea freshness valves are specialty staples.",
    "aisle": "Specialty Sealing & Preservation (advanced)",
    "audience": "coffee users, tea buyers, herb storage, grain pantries, pickle users, and serious freshness buyers",
    "priceRange": "mid.",
    "launchPriority": "Future drop",
    "heroLine": "Toreso Vacuum Spice Box (masala dabba) is a rigid storage for traditional round masala box upgraded with an airtight vacuum lid.",
    "demandSignal": "vacuum/airtight preservation is the global growth edge; Japan's ZEROCO \"third preservation technology\" (JapanGov, 2026) shows premium consumer interest in freshness; coffee/tea freshness valves are specialty staples.",
    "origin": "India-relevant.",
    "benefits": [
      "Traditional round masala box upgraded with an airtight vacuum lid.",
      "India's iconic spice box reinvented for freshness.",
      "Built for the specialty sealing & preservation (advanced) aisle.",
      "Consumer-sized format for coffee users, tea buyers, herb storage, grain pantries, pickle users, and serious freshness buyers."
    ],
    "specs": [
      {
        "label": "Catalog number",
        "value": "TRS-212"
      },
      {
        "label": "Aisle",
        "value": "Specialty Sealing & Preservation (advanced)"
      },
      {
        "label": "Format",
        "value": "Rigid storage"
      },
      {
        "label": "Positioning",
        "value": "mid."
      },
      {
        "label": "Origin signal",
        "value": "India-relevant."
      },
      {
        "label": "Packaging intelligence",
        "value": "Consumer packaging adaptation from the Toreso master catalog"
      }
    ],
    "bundle": [
      "Toreso Vacuum Spice Box (masala dabba)",
      "QR care and reuse card",
      "Recyclable outer sleeve"
    ],
    "faqs": [
      {
        "question": "What is Toreso Vacuum Spice Box (masala dabba)?",
        "answer": "Toreso Vacuum Spice Box (masala dabba) is a Toreso rigid storage made for traditional round masala box upgraded with an airtight vacuum lid."
      },
      {
        "question": "Who should use Toreso Vacuum Spice Box (masala dabba)?",
        "answer": "Toreso Vacuum Spice Box (masala dabba) is designed for coffee users, tea buyers, herb storage, grain pantries, pickle users, and serious freshness buyers."
      },
      {
        "question": "What makes it different from ordinary packaging?",
        "answer": "India's iconic spice box reinvented for freshness."
      },
      {
        "question": "How does it support better packaging habits?",
        "answer": "It is sold as a right-sized daily packaging product with clear use, care, reuse, and recycling guidance instead of vague sustainability claims."
      }
    ],
    "researchRefIds": [
      "master-catalog",
      "category-20"
    ]
  }
];

export const innovationCategories: InnovationCategory[] = [
  {
    "slug": "heat-sealing-and-resealing-gadgets",
    "name": "Heat Sealing & Resealing Gadgets",
    "aisle": "Heat Sealing & Resealing Gadgets",
    "b2bOrigin": "leverages Benz's heat-seal film expertise.; Consumer packaging adaptation from the Toreso master catalog",
    "signal": "the mini bag sealer is one of the most viral kitchen gadgets of the last three years — one TikTok demo by @Rachelhutchens1 reached nearly 800,000 likes, and the gadget retails ~£10.99 on Amazon UK and ~$10 in the US.",
    "count": 10,
    "audience": "home cooks, snack-heavy families, home bakers, hostel students, and small food sellers",
    "priceRange": "impulse (₹)., impulse-mid., mid., impulse.",
    "sourceRefIds": [
      "master-catalog",
      "category-01"
    ]
  },
  {
    "slug": "vacuum-sealing-and-food-compression",
    "name": "Vacuum Sealing & Food Compression",
    "aisle": "Vacuum Sealing & Food Compression",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog; Benz vacuum-barrier-film know-how.",
    "signal": "per Global News' \"20 viral kitchen gadgets\" roundup, vacuum sealers are \"having a major moment online\"; mason-jar vacuum sealers (\"Robo Sealer\") and hands-free \"InstaSeal\" units are TikTok Shop staples.",
    "count": 10,
    "audience": "freshness-focused kitchens, coffee users, meal-prep households, and compact apartment pantries",
    "priceRange": "mid., impulse-mid., impulse.",
    "sourceRefIds": [
      "master-catalog",
      "category-02"
    ]
  },
  {
    "slug": "travel-packing-and-clothes-compression",
    "name": "Travel Packing & Clothes Compression",
    "aisle": "Travel Packing & Clothes Compression",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "signal": "cordless travel vacuum bags are a TikTok Shop juggernaut — VACBIRD's cordless set advertises compressing each bag in 10–15 seconds and reducing luggage volume by up to 80%; 3COINS sells a frequently-sold-out rechargeable compression-pump + 3-bag set.",
    "count": 10,
    "audience": "frequent travelers, hostel students, small wardrobes, and seasonal storage users",
    "priceRange": "mid., impulse-mid., impulse.",
    "sourceRefIds": [
      "master-catalog",
      "category-03"
    ]
  },
  {
    "slug": "bag-clips-pour-spouts-and-resealable-closures",
    "name": "Bag Clips, Pour-Spouts & Resealable Closures",
    "aisle": "Bag Clips, Pour-Spouts & Resealable Closures",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "signal": "\"magnetic cherry blossom\" bag clips and pour-spout food clips are TikTok Shop sellers; a ¥100 Daiso clip that \"turns bags into bottles\" is a recurring viral Japan-finds hit.",
    "count": 10,
    "audience": "families, pantry organizers, pet owners, rice users, and snack drawers",
    "priceRange": "impulse.",
    "sourceRefIds": [
      "master-catalog",
      "category-04"
    ]
  },
  {
    "slug": "reusable-silicone-solutions",
    "name": "Reusable Silicone Solutions",
    "aisle": "Reusable Silicone Solutions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "signal": "Stasher (acquired by SC Johnson, owner of Ziploc, in 2019) states one bag replaces up to 260 single-use bags/year; its snack bag holds a 4.9-star rating across 2,000+ reviews. Silicone is the fastest-growing reusable-wrap material per Maximize Market Research.",
    "count": 10,
    "audience": "reusable-storage buyers, lunch packers, fridge organizers, and low-waste households",
    "priceRange": "mid., impulse-mid., impulse.",
    "sourceRefIds": [
      "master-catalog",
      "category-05"
    ]
  },
  {
    "slug": "reusable-and-eco-wraps-beeswax-fabric",
    "name": "Reusable & Eco Wraps (Beeswax / Fabric)",
    "aisle": "Reusable & Eco Wraps (Beeswax / Fabric)",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "signal": "per FactMR, the global reusable food-wrap market was ~USD 595.9M in 2024, forecast to ~USD 1.32B by 2034 (8.3% CAGR); per ShelfTrend, beeswax bread bags for sourdough are the hottest sub-format, with one Goldilocks Goods bread-bag video pulling 95K+ likes.",
    "count": 10,
    "audience": "low-waste kitchens, bread buyers, tiffin users, grocery shoppers, and gifting households",
    "priceRange": "mid., impulse.",
    "sourceRefIds": [
      "master-catalog",
      "category-06"
    ]
  },
  {
    "slug": "fridge-and-pantry-organization",
    "name": "Fridge & Pantry Organization",
    "aisle": "Fridge & Pantry Organization",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "signal": "per Market Reports World, India recorded 33% growth in stackable storage and kitchen-organization items, \"particularly among urban millennials\"; Daiso's stackable airtight cereal/refrigerator containers are TikTok haul staples.",
    "count": 15,
    "audience": "urban kitchens, monsoon pantries, apartment fridges, and organized family storage",
    "priceRange": "mid., impulse-mid., impulse.",
    "sourceRefIds": [
      "master-catalog",
      "category-07"
    ]
  },
  {
    "slug": "freshness-and-moisture-control-vci-desiccant-reinvention",
    "name": "Freshness & Moisture Control (VCI / desiccant reinvention)",
    "aisle": "Freshness & Moisture Control (VCI / desiccant reinvention)",
    "b2bOrigin": "Benz desiccant/active-packaging tech.; Consumer packaging adaptation from the Toreso master catalog; Benz \"BE DRY\" calcium chloride (adsorbs >250% of own weight).",
    "signal": "Bluapple's ethylene absorber states it keeps produce fresh 2–3x longer and is an Amazon best-seller; Daiso Korea's ₩1,000 hanging dehumidifier bag (ranking #34, 4.8 stars) is an expat cult item. This is Benz Packaging's single strongest B2B→B2C bridge — desiccants, VCI, and barrier films are core Benz products.",
    "count": 13,
    "audience": "monsoon homes, wardrobes, camera users, sneaker owners, document storage, and humid pantries",
    "priceRange": "mid., impulse., impulse-mid.",
    "sourceRefIds": [
      "master-catalog",
      "category-08"
    ]
  },
  {
    "slug": "jewelry-silver-and-small-valuables-protection-vci-anti-tarnish-reinvention",
    "name": "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)",
    "aisle": "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)",
    "b2bOrigin": "Benz VCI/anti-corrosion film, consumerized into cute pouches.; Benz VCI emitter chips.; Consumer packaging adaptation from the Toreso master catalog",
    "signal": "anti-tarnish bags using Intercept/Corrosion Intercept polymers (originally developed by AT&T/Lucent Technologies) protect silver for up to 3 years and are jewelry-industry standard; consumer multi-packs (Rosenthal, Simple Shine, Hagerty) are Amazon best-sellers. Benz's VCI films are the same anti-corrosion science — a direct reinvention.",
    "count": 10,
    "audience": "jewelry owners, travellers, collectors, silver users, and gift buyers",
    "priceRange": "impulse-mid., impulse., mid.",
    "sourceRefIds": [
      "master-catalog",
      "category-09"
    ]
  },
  {
    "slug": "cushioning-and-shipping-protection-bubble-void-fill-foam-reinvention",
    "name": "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)",
    "aisle": "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)",
    "b2bOrigin": "Benz mailers + honeycomb paper.; Benz honeycomb wrapping roll.; Benz air-cushion/air-column systems.",
    "signal": "Benz already markets honeycomb-cushioned recycled-kraft paper mailers claiming \"65–75% impact absorption comparable to plastic bubble mailers,\" explicitly targeting D2C/subscription/unboxing. Resale/online-selling households need consumer-scale protective packing.",
    "count": 10,
    "audience": "resellers, fragile shippers, gift packers, students, creators, and home movers",
    "priceRange": "mid., impulse-mid., impulse.",
    "sourceRefIds": [
      "master-catalog",
      "category-10"
    ]
  },
  {
    "slug": "mini-stretch-film-and-wrapping-reinventions",
    "name": "Mini Stretch Film & Wrapping Reinventions",
    "aisle": "Mini Stretch Film & Wrapping Reinventions",
    "b2bOrigin": "Benz stretch film — exactly the user's example.; Benz colored stretch film.; Consumer packaging adaptation from the Toreso master catalog",
    "signal": "handheld mini stretch wrap (5\" x 1000', 80-gauge) is an Amazon best-seller for moving/bundling; this is the user's flagship example of a B2B→B2C reinvention. Benz manufactures stretch film.",
    "count": 8,
    "audience": "home organizers, movers, travelers, pantry users, and small sellers",
    "priceRange": "impulse-mid., impulse., mid.",
    "sourceRefIds": [
      "master-catalog",
      "category-11"
    ]
  },
  {
    "slug": "bottle-liquid-and-beverage-sealing",
    "name": "Bottle, Liquid & Beverage Sealing",
    "aisle": "Bottle, Liquid & Beverage Sealing",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "signal": "Daiso Korea's ₩1,000 vacuum pump airless bottles are an editor's \"#1 secret item\"; MUJI's refillable PET/PE travel bottles and foaming-pump bottles are review-favorite best-sellers.",
    "count": 12,
    "audience": "travelers, refill users, kitchens, bathrooms, and beverage storage users",
    "priceRange": "impulse., impulse-mid.",
    "sourceRefIds": [
      "master-catalog",
      "category-12"
    ]
  },
  {
    "slug": "gift-wrapping-and-presentation-innovations",
    "name": "Gift Wrapping & Presentation Innovations",
    "aisle": "Gift Wrapping & Presentation Innovations",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "signal": "the Little Elf Gift Wrap Cutter (As-Seen-on-Shark-Tank) and \"Wrap Buddies\" clamp dispensers are reviewed/viral gift-wrap gadgets; per Globe and Mail, Flying Tiger introduces ~300 new (largely gifting/seasonal) items per month with 80% of its ~1,800 products under $10.",
    "count": 12,
    "audience": "gift buyers, home bakers, event planners, festival shoppers, and craft users",
    "priceRange": "impulse., impulse-mid., mid.",
    "sourceRefIds": [
      "master-catalog",
      "category-13"
    ]
  },
  {
    "slug": "portion-snack-and-lunch-packaging",
    "name": "Portion, Snack & Lunch Packaging",
    "aisle": "Portion, Snack & Lunch Packaging",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "signal": "Daiso's bento boxes, sauce containers (heart/Mickey), and food picks are Mercari/TikTok resale and haul staples; bento culture is a deep APAC vein.",
    "count": 12,
    "audience": "school lunch packers, office-goers, families, bento users, and portion-control kitchens",
    "priceRange": "mid., impulse., impulse-mid.",
    "sourceRefIds": [
      "master-catalog",
      "category-14"
    ]
  },
  {
    "slug": "cable-cord-and-tech-small-item-containment",
    "name": "Cable, Cord & Tech Small-Item Containment",
    "aisle": "Cable, Cord & Tech Small-Item Containment",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "signal": "magnetic cord organizers (Smartish Cable Wrangler ~$30; many sub-$10 Amazon/Etsy/Home Depot multipacks) are a high-volume best-seller category; Daiso Korea's transparent cable pouches are listed travel essentials.",
    "count": 10,
    "audience": "desk users, travelers, students, gadget owners, and cable-heavy homes",
    "priceRange": "impulse-mid., impulse.",
    "sourceRefIds": [
      "master-catalog",
      "category-15"
    ]
  },
  {
    "slug": "label-sticker-and-identification-solutions",
    "name": "Label, Sticker & Identification Solutions",
    "aisle": "Label, Sticker & Identification Solutions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "signal": "Daiso Korea's in-store ₩1,000 waterproof name-sticker machine is a viral tourist draw; thermal label printers (no-ink) are Temu best-sellers; MUJI's identification labels for bottles are listed staples.",
    "count": 10,
    "audience": "parents, pantry organizers, freezer users, movers, small sellers, and cable organizers",
    "priceRange": "mid., impulse., impulse-mid.",
    "sourceRefIds": [
      "master-catalog",
      "category-16"
    ]
  },
  {
    "slug": "home-closet-and-bathroom-storage-extensions",
    "name": "Home, Closet & Bathroom Storage Extensions",
    "aisle": "Home, Closet & Bathroom Storage Extensions",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "signal": "3COINS clear storage, anti-stretch hangers, and book-shaped magnetic boxes are best-sellers; Miniso foldable/woven storage and handheld baskets are listed top items; Daiso storage boxes are \"incredibly satisfying\" haul staples.",
    "count": 15,
    "audience": "small apartments, closets, bathroom shelves, students, renters, and family organizers",
    "priceRange": "impulse-mid., impulse., mid.",
    "sourceRefIds": [
      "master-catalog",
      "category-17"
    ]
  },
  {
    "slug": "seasonal-novelty-and-impulse-fun-packaging",
    "name": "Seasonal, Novelty & Impulse \"Fun\" Packaging",
    "aisle": "Seasonal, Novelty & Impulse \"Fun\" Packaging",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "signal": "per Accio/Matrixbcg analysis, Miniso's \"interest-driven consumption\" and IP/blind-box strategy drove IP products to 39% of overseas revenue in Q1 2025; \"fun aesthetics\" is a core brand pillar. Fun + function is the Toreso differentiator.",
    "count": 10,
    "audience": "festival shoppers, teens, gift buyers, impulse shoppers, and people who like fun functional products",
    "priceRange": "impulse., impulse-mid., mid.",
    "sourceRefIds": [
      "master-catalog",
      "category-18"
    ]
  },
  {
    "slug": "outdoor-picnic-and-on-the-go-packaging",
    "name": "Outdoor, Picnic & On-the-Go Packaging",
    "aisle": "Outdoor, Picnic & On-the-Go Packaging",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "signal": "Daiso Korea picnic sets and Han River picnic culture; foldable cooler bags and aluminium foil/ice-pack camping lines are Daiso staples.",
    "count": 7,
    "audience": "picnic users, monsoon commuters, campers, families, and on-the-go snack users",
    "priceRange": "impulse-mid., impulse.",
    "sourceRefIds": [
      "master-catalog",
      "category-19"
    ]
  },
  {
    "slug": "specialty-sealing-and-preservation-advanced",
    "name": "Specialty Sealing & Preservation (advanced)",
    "aisle": "Specialty Sealing & Preservation (advanced)",
    "b2bOrigin": "Consumer packaging adaptation from the Toreso master catalog",
    "signal": "vacuum/airtight preservation is the global growth edge; Japan's ZEROCO \"third preservation technology\" (JapanGov, 2026) shows premium consumer interest in freshness; coffee/tea freshness valves are specialty staples.",
    "count": 8,
    "audience": "coffee users, tea buyers, herb storage, grain pantries, pickle users, and serious freshness buyers",
    "priceRange": "mid., impulse-mid., impulse.",
    "sourceRefIds": [
      "master-catalog",
      "category-20"
    ]
  }
];

export const researchReferences = [
  {
    "id": "master-catalog",
    "title": "Toreso Master Product Catalog",
    "url": "local-source:compass_artifact_wf-110572de-f67c-4a90-9b41-f2c56c7305f6_text_markdown.md",
    "region": "Source document",
    "signal": "The supplied master catalog defines 212 validated everyday-packaging products across 20 categories for Toreso."
  },
  {
    "id": "category-01",
    "title": "Heat Sealing & Resealing Gadgets",
    "url": "local-source:compass_artifact_wf-110572de-f67c-4a90-9b41-f2c56c7305f6_text_markdown.md",
    "region": "Catalog category",
    "signal": "the mini bag sealer is one of the most viral kitchen gadgets of the last three years — one TikTok demo by @Rachelhutchens1 reached nearly 800,000 likes, and the gadget retails ~£10.99 on Amazon UK and ~$10 in the US."
  },
  {
    "id": "category-02",
    "title": "Vacuum Sealing & Food Compression",
    "url": "local-source:compass_artifact_wf-110572de-f67c-4a90-9b41-f2c56c7305f6_text_markdown.md",
    "region": "Catalog category",
    "signal": "per Global News' \"20 viral kitchen gadgets\" roundup, vacuum sealers are \"having a major moment online\"; mason-jar vacuum sealers (\"Robo Sealer\") and hands-free \"InstaSeal\" units are TikTok Shop staples."
  },
  {
    "id": "category-03",
    "title": "Travel Packing & Clothes Compression",
    "url": "local-source:compass_artifact_wf-110572de-f67c-4a90-9b41-f2c56c7305f6_text_markdown.md",
    "region": "Catalog category",
    "signal": "cordless travel vacuum bags are a TikTok Shop juggernaut — VACBIRD's cordless set advertises compressing each bag in 10–15 seconds and reducing luggage volume by up to 80%; 3COINS sells a frequently-sold-out rechargeable compression-pump + 3-bag set."
  },
  {
    "id": "category-04",
    "title": "Bag Clips, Pour-Spouts & Resealable Closures",
    "url": "local-source:compass_artifact_wf-110572de-f67c-4a90-9b41-f2c56c7305f6_text_markdown.md",
    "region": "Catalog category",
    "signal": "\"magnetic cherry blossom\" bag clips and pour-spout food clips are TikTok Shop sellers; a ¥100 Daiso clip that \"turns bags into bottles\" is a recurring viral Japan-finds hit."
  },
  {
    "id": "category-05",
    "title": "Reusable Silicone Solutions",
    "url": "local-source:compass_artifact_wf-110572de-f67c-4a90-9b41-f2c56c7305f6_text_markdown.md",
    "region": "Catalog category",
    "signal": "Stasher (acquired by SC Johnson, owner of Ziploc, in 2019) states one bag replaces up to 260 single-use bags/year; its snack bag holds a 4.9-star rating across 2,000+ reviews. Silicone is the fastest-growing reusable-wrap material per Maximize Market Research."
  },
  {
    "id": "category-06",
    "title": "Reusable & Eco Wraps (Beeswax / Fabric)",
    "url": "local-source:compass_artifact_wf-110572de-f67c-4a90-9b41-f2c56c7305f6_text_markdown.md",
    "region": "Catalog category",
    "signal": "per FactMR, the global reusable food-wrap market was ~USD 595.9M in 2024, forecast to ~USD 1.32B by 2034 (8.3% CAGR); per ShelfTrend, beeswax bread bags for sourdough are the hottest sub-format, with one Goldilocks Goods bread-bag video pulling 95K+ likes."
  },
  {
    "id": "category-07",
    "title": "Fridge & Pantry Organization",
    "url": "local-source:compass_artifact_wf-110572de-f67c-4a90-9b41-f2c56c7305f6_text_markdown.md",
    "region": "Catalog category",
    "signal": "per Market Reports World, India recorded 33% growth in stackable storage and kitchen-organization items, \"particularly among urban millennials\"; Daiso's stackable airtight cereal/refrigerator containers are TikTok haul staples."
  },
  {
    "id": "category-08",
    "title": "Freshness & Moisture Control (VCI / desiccant reinvention)",
    "url": "local-source:compass_artifact_wf-110572de-f67c-4a90-9b41-f2c56c7305f6_text_markdown.md",
    "region": "Catalog category",
    "signal": "Bluapple's ethylene absorber states it keeps produce fresh 2–3x longer and is an Amazon best-seller; Daiso Korea's ₩1,000 hanging dehumidifier bag (ranking #34, 4.8 stars) is an expat cult item. This is Benz Packaging's single strongest B2B→B2C bridge — desiccants, VCI, and barrier films are core Benz products."
  },
  {
    "id": "category-09",
    "title": "Jewelry, Silver & Small-Valuables Protection (VCI / anti-tarnish reinvention)",
    "url": "local-source:compass_artifact_wf-110572de-f67c-4a90-9b41-f2c56c7305f6_text_markdown.md",
    "region": "Catalog category",
    "signal": "anti-tarnish bags using Intercept/Corrosion Intercept polymers (originally developed by AT&T/Lucent Technologies) protect silver for up to 3 years and are jewelry-industry standard; consumer multi-packs (Rosenthal, Simple Shine, Hagerty) are Amazon best-sellers. Benz's VCI films are the same anti-corrosion science — a direct reinvention."
  },
  {
    "id": "category-10",
    "title": "Cushioning & Shipping Protection (bubble/void-fill/foam reinvention)",
    "url": "local-source:compass_artifact_wf-110572de-f67c-4a90-9b41-f2c56c7305f6_text_markdown.md",
    "region": "Catalog category",
    "signal": "Benz already markets honeycomb-cushioned recycled-kraft paper mailers claiming \"65–75% impact absorption comparable to plastic bubble mailers,\" explicitly targeting D2C/subscription/unboxing. Resale/online-selling households need consumer-scale protective packing."
  },
  {
    "id": "category-11",
    "title": "Mini Stretch Film & Wrapping Reinventions",
    "url": "local-source:compass_artifact_wf-110572de-f67c-4a90-9b41-f2c56c7305f6_text_markdown.md",
    "region": "Catalog category",
    "signal": "handheld mini stretch wrap (5\" x 1000', 80-gauge) is an Amazon best-seller for moving/bundling; this is the user's flagship example of a B2B→B2C reinvention. Benz manufactures stretch film."
  },
  {
    "id": "category-12",
    "title": "Bottle, Liquid & Beverage Sealing",
    "url": "local-source:compass_artifact_wf-110572de-f67c-4a90-9b41-f2c56c7305f6_text_markdown.md",
    "region": "Catalog category",
    "signal": "Daiso Korea's ₩1,000 vacuum pump airless bottles are an editor's \"#1 secret item\"; MUJI's refillable PET/PE travel bottles and foaming-pump bottles are review-favorite best-sellers."
  },
  {
    "id": "category-13",
    "title": "Gift Wrapping & Presentation Innovations",
    "url": "local-source:compass_artifact_wf-110572de-f67c-4a90-9b41-f2c56c7305f6_text_markdown.md",
    "region": "Catalog category",
    "signal": "the Little Elf Gift Wrap Cutter (As-Seen-on-Shark-Tank) and \"Wrap Buddies\" clamp dispensers are reviewed/viral gift-wrap gadgets; per Globe and Mail, Flying Tiger introduces ~300 new (largely gifting/seasonal) items per month with 80% of its ~1,800 products under $10."
  },
  {
    "id": "category-14",
    "title": "Portion, Snack & Lunch Packaging",
    "url": "local-source:compass_artifact_wf-110572de-f67c-4a90-9b41-f2c56c7305f6_text_markdown.md",
    "region": "Catalog category",
    "signal": "Daiso's bento boxes, sauce containers (heart/Mickey), and food picks are Mercari/TikTok resale and haul staples; bento culture is a deep APAC vein."
  },
  {
    "id": "category-15",
    "title": "Cable, Cord & Tech Small-Item Containment",
    "url": "local-source:compass_artifact_wf-110572de-f67c-4a90-9b41-f2c56c7305f6_text_markdown.md",
    "region": "Catalog category",
    "signal": "magnetic cord organizers (Smartish Cable Wrangler ~$30; many sub-$10 Amazon/Etsy/Home Depot multipacks) are a high-volume best-seller category; Daiso Korea's transparent cable pouches are listed travel essentials."
  },
  {
    "id": "category-16",
    "title": "Label, Sticker & Identification Solutions",
    "url": "local-source:compass_artifact_wf-110572de-f67c-4a90-9b41-f2c56c7305f6_text_markdown.md",
    "region": "Catalog category",
    "signal": "Daiso Korea's in-store ₩1,000 waterproof name-sticker machine is a viral tourist draw; thermal label printers (no-ink) are Temu best-sellers; MUJI's identification labels for bottles are listed staples."
  },
  {
    "id": "category-17",
    "title": "Home, Closet & Bathroom Storage Extensions",
    "url": "local-source:compass_artifact_wf-110572de-f67c-4a90-9b41-f2c56c7305f6_text_markdown.md",
    "region": "Catalog category",
    "signal": "3COINS clear storage, anti-stretch hangers, and book-shaped magnetic boxes are best-sellers; Miniso foldable/woven storage and handheld baskets are listed top items; Daiso storage boxes are \"incredibly satisfying\" haul staples."
  },
  {
    "id": "category-18",
    "title": "Seasonal, Novelty & Impulse \"Fun\" Packaging",
    "url": "local-source:compass_artifact_wf-110572de-f67c-4a90-9b41-f2c56c7305f6_text_markdown.md",
    "region": "Catalog category",
    "signal": "per Accio/Matrixbcg analysis, Miniso's \"interest-driven consumption\" and IP/blind-box strategy drove IP products to 39% of overseas revenue in Q1 2025; \"fun aesthetics\" is a core brand pillar. Fun + function is the Toreso differentiator."
  },
  {
    "id": "category-19",
    "title": "Outdoor, Picnic & On-the-Go Packaging",
    "url": "local-source:compass_artifact_wf-110572de-f67c-4a90-9b41-f2c56c7305f6_text_markdown.md",
    "region": "Catalog category",
    "signal": "Daiso Korea picnic sets and Han River picnic culture; foldable cooler bags and aluminium foil/ice-pack camping lines are Daiso staples."
  },
  {
    "id": "category-20",
    "title": "Specialty Sealing & Preservation (advanced)",
    "url": "local-source:compass_artifact_wf-110572de-f67c-4a90-9b41-f2c56c7305f6_text_markdown.md",
    "region": "Catalog category",
    "signal": "vacuum/airtight preservation is the global growth edge; Japan's ZEROCO \"third preservation technology\" (JapanGov, 2026) shows premium consumer interest in freshness; coffee/tea freshness valves are specialty staples."
  }
];

export const innovationTracks = innovationCategories;

export const getInnovationProduct = (slug: string) =>
  innovationProducts.find((product) => product.slug === slug);

export const getInnovationCategory = (slug: string) =>
  innovationCategories.find((category) => category.slug === slug);

export const getProductsByCategorySlug = (slug: string) =>
  innovationProducts.filter((product) => product.categorySlug === slug);

export const getResearchReferencesForIds = (ids: string[]) => {
  const idSet = new Set(ids);
  return researchReferences.filter((reference) => idSet.has(reference.id));
};

export const getRelatedProducts = (product: InnovationProduct, count = 8) =>
  innovationProducts
    .filter((item) => item.slug !== product.slug && item.track === product.track)
    .slice(0, count);

export const researchSignals = [
  {
    source: 'Toreso SEO/GEO/AEO build module',
    insight:
      'The site must keep ranking-critical product names, descriptions, specs, FAQs, reviews, schema, and internal links server-rendered and extractable.',
  },
  {
    source: 'Toreso master product catalog',
    insight:
      'The launch catalog is packaging-only: sealing, freshness, storage, wrapping, cushioning, shipping, labels, preservation, and circular daily packaging products.',
  },
  {
    source: 'Product architecture rule',
    insight:
      'Products should turn B2B packaging knowledge into right-sized consumer products with clear daily jobs, not bulk industrial supplies.',
  },
];
