export const applicationformschema = {
  PolicyHolder: {
    Title: {
      type: "select",
      label: "Title",
      selected: 0,
      items: ["Mr", "Ms", "Mrs", "Dr"],
    },
    FirstName: {
      type: "text",
      label: "First Name",
      placeholder: "",
      prependInnerIcon: "mdi-access-point-network-off",
    },
    Surname: { type: "text", label: "Surname" },
    IdentityNumber: { type: "text", label: "ID Number" },
    DateOfBirth: {
      type: "calendar",
      label: "Date of Birth",
      color: "primary",
    },
    Email: { type: "text", label: "Email" },
    Phone: [
      {
        PhoneType: {
          type: "select",
          label: "Phone Type",
          selected: "0",
          items: ["Mobile", "Home", "Work"],
        },
        PhoneNumber: { type: "text", label: "Phone Number" },
      },
    ],
  },
  Address: {
    address1: { type: "text", label: "Address Line 1" },
    address2: { type: "text", label: "Address Line 2" },
    postalcode: { type: "text", label: "Postal Code" },
  },

  Spouse: {
    Title: {
      type: "select",
      label: "Title",
      selected: 0,
      items: ["Mr", "Ms", "Mrs", "Dr"],
      order: 1,
    },
    FirstName: {
      type: "text",
      label: "First Name",
      prependIcon: "mdi-access-point-network-off",
    },
    Surname: { type: "text", label: "Surname" },
    IdentityNumber: { type: "text", label: "ID Number" },
    DateOfBirth: {
      type: "calendar",
      label: "Date of Birth",
      color: "primary",
    },
  },
  Dependants: {
    type: "array",
    schema: {
      FirstName: { type: "text", label: "First Name" },
      Surname: { type: "text", label: "Surname" },
      DateOfBirth: {
        type: "calendar",
        label: "Date of Birth",
        color: "primary",
      },
      RelationToPolicyHolder: {
        type: "select",
        label: "Relation to Policy Holder",
        items: ["Father", "Mother", "Uncle", "Aunt", "Nephew", "Neice"],
      },
    },
  },
  ExtendedFamily: [
    {
      FirstName: { type: "text", label: "First Name" },
      Surname: { type: "text", label: "Surname" },
      DateOfBirth: {
        type: "calendar",
        label: "Date of Birth",
        color: "primary",
      },
      IdentityNumber: { type: "text", label: "ID Number" },
      RelationToPolicyHolder: {
        type: "select",
        label: "Relation to Policy Holder",
        items: ["Father", "Mother", "Uncle", "Aunt", "Nephew", "Neice"],
      },
      CoverAmount: { type: "text", label: "Cover Amount" },
      Premium: { type: "text", label: "Premium" },
    },
  ],
  Beneficiary: {
    Title: {
      type: "select",
      label: "Title",
      selected: 0,
      items: ["Mr", "Ms", "Mrs", "Dr"],
      order: 1,
    },
    FirstName: { type: "text", label: "First Name" },
    Surname: { type: "text", label: "Surname" },
    DateOfBirth: {
      type: "calendar",
      label: "Date of Birth",
      color: "primary",
    },
    IdentityNumber: { type: "text", label: "ID Number" },
    RelationToPolicyHolder: {
      type: "select",
      label: "Relation to Policy Holder",
      items: ["Father", "Mother", "Uncle", "Aunt", "Nephew", "Neice"],
    },
  },
  BankingDetails: {
    BankName: { type: "text", label: "Bank Name" },
    AccountName: { type: "text", label: "Account Name" },
    AccountType: { type: "text", label: "Account Type" },
    AccountNo: { type: "text", label: "Account Number" },
    BranchName: { type: "text", label: "Branch Name" },
    BranchCode: { type: "text", label: "Branch Code" },
    DebitDate: { type: "text", label: "Debit Date" },
    PersalNo: { type: "text", label: "Persal Number" },
  },
  Declaration: {
    GoodHealth: {
      type: "text",
      label:
        "Are You, your Spouse, Dependants and Extended Family in good health?",
    },
    PoorHealthExplanation: {
      type: "textarea",
      label:
        "If “No”, specify any medical complaint fully (Policyholder, Spouse, Dependants, Extended Family)",
    },
  },
};
