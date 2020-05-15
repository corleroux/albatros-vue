export const products = [
  {
    type: "individual",
    title: "Individual",
    icon: "mdi-account-outline",
    cta: "Apply Now",
    description:
      "Funeral cover for Individuals / Single parent families and Families",
    maxChild: 0,
    maxFamily: 0,
    packages: {
      standard: {
        ageRange: {
          min: 18,
          max: 65,
        },
        cover: [
          {
            coverAmount: 5000,
            coverPremium: 33,
          },
          {
            coveramount: 10000,
            premium: 40,
          },
          {
            coveramount: 15000,
            premium: 48,
          },
        ],
      },
      over65: {
        ageRange: {
          min: 66,
          max: 74,
        },
        cover: [
          {
            coveramount: 5000,
            premium: 65,
          },
          {
            coveramount: 10000,
            premium: 100,
          },
          {
            coveramount: 15000,
            premium: 137,
          },
        ],
      },
    },
  },
  {
    type: "singleparent",
    title: "Single Parent Family",
    icon: "mdi-account-multiple-outline",
    cta: "Apply Now",
    description:
      "Funeral cover for Individuals / Single parent families and Families",
    maxChild: 5,
    maxFamily: 0,
    packages: {
      standard: {
        ageRange: {
          min: 18,
          max: 65,
        },
        cover: [
          {
            coverAmount: 5000,
            coverPremium: 33,
          },
          {
            coveramount: 10000,
            premium: 40,
          },
          {
            coveramount: 15000,
            premium: 48,
          },
        ],
      },
      over65: {
        ageRange: {
          min: 66,
          max: 74,
        },
        cover: [
          {
            coveramount: 5000,
            premium: 65,
          },
          {
            coveramount: 10000,
            premium: 100,
          },
          {
            coveramount: 15000,
            premium: 137,
          },
        ],
      },
    },
  },
  {
    type: "familyfuneral",
    title: "Family",
    icon: "mdi-account-group-outline",
    cta: "Apply Now",
    description:
      "Funeral cover for Individuals / Single parent families and Families",
    maxChild: 8,
    maxFamily: 0,
    packages: {
      standard: {
        ageRange: {
          min: 18,
          max: 65,
        },
        cover: [
          {
            coverAmount: 5000,
            coverPremium: 33,
          },
          {
            coveramount: 10000,
            premium: 40,
          },
          {
            coveramount: 15000,
            premium: 48,
          },
        ],
      },
      over65: {
        ageRange: {
          min: 66,
          max: 74,
        },
        cover: [
          {
            coveramount: 5000,
            premium: 65,
          },
          {
            coveramount: 10000,
            premium: 100,
          },
          {
            coveramount: 15000,
            premium: 137,
          },
        ],
      },
    },
  },
];
