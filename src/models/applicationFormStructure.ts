const ApplicationFormStructure = {
  PolicyHolder: {
    Surname: "",
    FirstName: "",
    Title: "",
    IdentityNumber: "",
    DateOfBirth: "",
    Email: "",
    Phone: [
      {
        Type: "",
        Number: "",
      },
    ],
    Address: [
      {
        Type: "Residential",
        lat: "",
        long: "",
      },
    ],
  },
  Spouse: {
    Surname: "",
    FirstName: "",
    Title: "",
    IdentityNumber: "",
    DateOfBirth: "",
  },
  Dependants: [
    {
      Surname: "",
      FirstName: "",
      Title: "",
      IdentityNumber: "",
      DateOfBirth: "",
      RelationToPolicyHolder: "",
    },
  ],
  ExtendedFamily: [
    {
      Surname: "",
      FirstName: "",
      Title: "",
      IdentityNumber: "",
      DateOfBirth: "",
      RelationToPolicyHolder: "",
      CoverAmount: "",
      MonthlyPremium: "",
    },
  ],
  Beneficiary: {
    Surname: "",
    FirstName: "",
    Title: "",
    IdentityNumber: "",
    DateOfBirth: "",
    RelationToPolicyHolder: "",
  },
  Policy: {
    Package: "",
    CoverAmount: "",
    MonthlyPremium: "",
    TotalMonthlyPremium: "",
    CommencementDate: "",
  },
  BankingDetails: {
    BankName: "",
    AccountName: "",
    AccountType: "",
    AccountNo: "",
    BranchName: "",
    BranchCode: "",
    DebitDate: "",
    PersalNo: "",
  },
  Declaration: {
    Body:
      "I declare that the information supplied above is to the best of my knowledge true, complete and correct. I hereby authorize Albatros and its Agents to draw against my account, the premium payable under the above plan from time to time, and I request my Bank to debit my account in terms of this order. This request will remain in force until cancelled by me in writing. I hereby irrevocably authorize Albatros and or its Agents to obtain at any time verification of my account details from my Bank",
    GoodHealth: "",
    PoorHealthExplanation: "",
  },
};

export default { ApplicationFormStructure };
