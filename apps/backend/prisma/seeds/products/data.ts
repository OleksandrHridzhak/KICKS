export const brands = [
  {
    name: "Nike",
  },
  {
    name: "Adidas",
  },
  {
    name: "Puma",
  },
];

export const categories = [
  {
    name: "Sneakers",
  },
  {
    name: "Running",
  },
  {
    name: "Basketball",
  },
];

export const products = [
  {
    name: "Nike Air Max 270",
    description:
      "Comfortable everyday sneakers with a lightweight mesh upper and Air cushioning.",
    price: 149.99,

    brand: {
      connect: {
        name: "Nike",
      },
    },

    category: {
      connect: {
        name: "Sneakers",
      },
    },

    variants: {
      create: [
        {
          variantName: "Black / White",
          color: "#000000",

          sizes: {
            create: [
              { size: 40, inStock: 5 },
              { size: 41, inStock: 8 },
              { size: 42, inStock: 12 },
              { size: 43, inStock: 6 },
            ],
          },

          photos: {
            create: [
              { photoUrl: "placeholder.png" },
              { photoUrl: "placeholder.png" },
            ],
          },
        },
        {
          variantName: "White / Blue",
          color: "#FFFFFF",

          sizes: {
            create: [
              { size: 40, inStock: 3 },
              { size: 41, inStock: 6 },
              { size: 42, inStock: 9 },
              { size: 43, inStock: 4 },
            ],
          },

          photos: {
            create: [{ photoUrl: "placeholder.png" }],
          },
        },
      ],
    },
  },

  {
    name: "Adidas Ultraboost Light",
    description:
      "High-performance running shoes designed for ultimate energy return and lightweight comfort.",
    price: 189.99,

    brand: {
      connect: {
        name: "Adidas",
      },
    },

    category: {
      connect: {
        name: "Running",
      },
    },

    variants: {
      create: [
        {
          variantName: "Core Black",
          color: "#111111",

          sizes: {
            create: [
              { size: 41, inStock: 10 },
              { size: 42, inStock: 15 },
              { size: 43, inStock: 7 },
              { size: 44, inStock: 4 },
            ],
          },

          photos: {
            create: [
              { photoUrl: "placeholder.png" },
              { photoUrl: "placeholder.png" },
            ],
          },
        },
        {
          variantName: "Cloud White",
          color: "#FAFAFA",

          sizes: {
            create: [
              { size: 40, inStock: 6 },
              { size: 42, inStock: 10 },
              { size: 43, inStock: 5 },
            ],
          },

          photos: {
            create: [{ photoUrl: "placeholder.png" }],
          },
        },
      ],
    },
  },

  {
    name: "Nike LeBron 20",
    description:
      "Low-cut basketball shoes built for speed, support, and responsiveness on the court.",
    price: 199.99,

    brand: {
      connect: {
        name: "Nike",
      },
    },

    category: {
      connect: {
        name: "Basketball",
      },
    },

    variants: {
      create: [
        {
          variantName: "Trinity Red / Black",
          color: "#D32F2F",

          sizes: {
            create: [
              { size: 42, inStock: 4 },
              { size: 43, inStock: 9 },
              { size: 44, inStock: 11 },
              { size: 45, inStock: 3 },
            ],
          },

          photos: {
            create: [
              { photoUrl: "placeholder.png" },
              { photoUrl: "placeholder.png" },
            ],
          },
        },
      ],
    },
  },

  {
    name: "Puma Suede Classic",
    description:
      "Timeless street style icon featuring a soft suede upper and classic rubber outsole.",
    price: 75.0,

    brand: {
      connect: {
        name: "Puma",
      },
    },

    category: {
      connect: {
        name: "Sneakers",
      },
    },

    variants: {
      create: [
        {
          variantName: "Black / White",
          color: "#1A1A1A",

          sizes: {
            create: [
              { size: 39, inStock: 5 },
              { size: 40, inStock: 10 },
              { size: 41, inStock: 8 },
              { size: 42, inStock: 14 },
            ],
          },

          photos: {
            create: [{ photoUrl: "placeholder.png" }],
          },
        },
        {
          variantName: "Peacoat / White",
          color: "#0F2A4A",

          sizes: {
            create: [
              { size: 40, inStock: 4 },
              { size: 41, inStock: 6 },
              { size: 42, inStock: 5 },
            ],
          },

          photos: {
            create: [{ photoUrl: "placeholder.png" }],
          },
        },
      ],
    },
  },

  {
    name: "Puma Velocity NITRO 2",
    description:
      "All-in-one neutral running shoe for any distance, featuring light and responsive NITRO foam cushioning.",
    price: 120.0,

    brand: {
      connect: {
        name: "Puma",
      },
    },

    category: {
      connect: {
        name: "Running",
      },
    },

    variants: {
      create: [
        {
          variantName: "Electro Orange",
          color: "#FF5722",

          sizes: {
            create: [
              { size: 41, inStock: 7 },
              { size: 42, inStock: 11 },
              { size: 43, inStock: 8 },
            ],
          },

          photos: {
            create: [
              { photoUrl: "placeholder.png" },
              { photoUrl: "placeholder.png" },
            ],
          },
        },
      ],
    },
  },

  {
    name: "Adidas Forum Low",
    description:
      "Retro basketball sneakers inspired by the '84 original, bringing court-ready vibes to everyday wear.",
    price: 110.0,

    brand: {
      connect: {
        name: "Adidas",
      },
    },

    category: {
      connect: {
        name: "Basketball",
      },
    },

    variants: {
      create: [
        {
          variantName: "Cloud White / Royal Blue",
          color: "#1E40AF",

          sizes: {
            create: [
              { size: 40, inStock: 5 },
              { size: 41, inStock: 9 },
              { size: 42, inStock: 13 },
              { size: 43, inStock: 6 },
            ],
          },

          photos: {
            create: [
              { photoUrl: "placeholder.png" },
              { photoUrl: "placeholder.png" },
            ],
          },
        },
      ],
    },
  },
];
