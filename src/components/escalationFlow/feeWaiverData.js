export const feeWaiverData = {
  name: {
    id: 0,
    sectionName: 'Name',
    fields: {
      first_name: {
        id: 'field-0',
        label: 'First Name',
        value: '',
        type: 'input'
      },
      last_name: {
        id: 'field-1',
        label: 'Last Name',
        value: '',
        type: 'input'
      }
    }
  },
  contact: {
    id: 1,
    sectionName: 'Contact',
    fields: {
      email: {
        id: 'field-2',
        label: 'Email',
        value: '',
        type: 'input'
      },
      phone: {
        id: 'field-3',
        label: 'Phone Number',
        value: '',
        type: 'input'
      }
    }
  },
  address: {
    id: 2,
    sectionName: 'Address',
    fields: {
      street_address: {
        id: 'field-4',
        label: 'Address',
        value: '',
        type: 'input'
      },
      city: {
        id: 'field-5',
        label: 'City',
        value: '',
        type: 'input'
      },
      state: {
        id: 'field-6',
        label: 'State',
        value: '',
        type: 'input'
      },
      zip: {
        id: 'field-7',
        label: 'Zip Code',
        value: '',
        type: 'input'
      }
    }
  },
  incomeInformation: {
    id: 3,
    sectionName: 'Income Information',
    fields: {
      gross_pay: {
        id: 'field-8',
        label: 'Gross Pay or Wages',
        value: '',
        type: 'input'
      },
      gross_pay_frequency: {
        id: 'field-9',
        label: ['Per Week', 'Per Month', 'Per Year'],
        value: '',
        type: 'radio'
      },
      take_home_pay: {
        id: 'field-10',
        label: 'Take Home Pay or Wages',
        value: '',
        type: 'input'
      },
      take_home_pay_frequency: {
        id: 'field-11',
        label: ['Per Week', 'Per Month', 'Per Year'],
        value: '',
        type: 'radio'
      },
      bonuses: {
        id: 'field-12',
        label: 'Additional Bonuses',
        value: '',
        type: 'input'
      },
      bonus_frequency: {
        id: 'field-13',
        label: ['Per Week', 'Per Month', 'Per Year'],
        value: '',
        type: 'radio'
      },
      pension_data: {
        id: 'field-14',
        label: 'Pension, annuity, or life insurance payments received',
        value: '',
        type: 'input'
      },
      government_assistance: {
        id: 'field-15',
        label: 'Amount and types of government assistance',
        value: '',
        type: 'input'
      },
      rent_income: {
        id: 'field-16',
        label: 'Rent payments received, interest, or dividends',
        value: '',
        type: 'input'
      },
      disability_payments: {
        id: 'field-17',
        label: "Disability, or worker's compensation payments",
        value: '',
        type: 'input'
      },
      misc_support: {
        id: 'field-18',
        label: 'Other financial support or income (source, amount, and frequency)',
        value: '',
        type: 'input'
      }
    }
  },
  employer_information: {
    id: 4,
    sectionName: 'Employer Information',
    fields: {
      employer_address: {
        id: 'field-19',
        label: 'Employer Address',
        value: '',
        type: 'input'
      },
      employer_address_city: {
        id: 'field-20',
        label: 'City',
        value: '',
        type: 'input'
      },
      employer_address_state: {
        id: 'field-21',
        label: 'State',
        value: '',
        type: 'input'
      },
      employer_address_zip: {
        id: 'field-22',
        label: 'State',
        value: '',
        type: 'input'
      }
    }
  },
  assets: {
    id: 5,
    sectionName: 'Assets',
    fields: {
      total_cash: {
        id: 'field-23',
        label: 'Total cash and/or checking account',
        value: '',
        type: 'input'
      },
      total_savings: {
        id: 'field-24',
        label: 'Total in CDs and savings accounts',
        value: '',
        type: 'input'
      },
      liquid_investments: {
        id: 'field-25',
        label: 'Value of liquid investments (mutual funds, ETFs, etc.)',
        value: '',
        type: 'input'
      },
      other_investments: {
        id: 'field-26',
        label: 'Value of other investments (stocks, bonds, trusts)',
        value: '',
        type: 'input'
      }
    }
  },
  household_information: {
    id: 6,
    sectionName: 'Household Information',
    fields: {
      total_cash: {
        id: 'field-27',
        label: 'Number of children (under 18 years old)*',
        value: '',
        type: 'input'
      },
      total_savings: {
        id: 'field-28',
        label: 'Number of adults (over 18 years old)*',
        value: '',
        type: 'input'
      }
    }
  },
  additional_information: {
    id: 7,
    sectionName: 'Additional Information',
    fields: {
      total_cash: {
        id: 'field-29',
        label: 'Any other factors you would like the AAA to consider',
        value: '',
        type: 'text-area'
      }
    }
  }
}
