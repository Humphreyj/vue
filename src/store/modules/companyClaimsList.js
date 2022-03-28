
const CompanyClaimsList = {
  state: {
    headers: [
      {
        id: 0,
        text: 'Claimant'
      },
      { id: 1, text: 'Days Since Notice' },
      { id: 2, text: 'Days Until Eligible' },
      { id: 3, text: 'Escalated' },
      { id: 4, text: 'Status' }

    ],
    allClaims: [
      {
        name: 'Brenda Roberts',
        claim: 'TMO210920-1',
        notice: '01/01/2022',
        demandForArbitration: 'No',
        status: 'Claim Mailed',
        active: true
      },
      {
        name: 'Tammy Williams',
        claim: 'ATT210920-2',
        notice: '01/04/2022',
        demandForArbitration: 'No',
        status: 'Claim Mailed',
        active: true
      },
      {
        name: 'Joe Brown',
        claim: 'CB210920-3',
        notice: '12/13/2021',
        demandForArbitration: 'No',
        status: 'Information Requested',
        active: true
      },
      {
        name: 'Frank Herberts',
        claim: 'CB210920-4',
        notice: '11/24/2021',
        demandForArbitration: 'Yes',
        status: 'Escalated',
        active: true
      },
      {
        name: 'Jane Taylor',
        claim: 'TMO210920-5',
        notice: '01/03/2022',
        demandForArbitration: 'No',
        status: 'Assigned',
        active: true
      },
      {
        name: 'Lisa Williams',
        claim: 'WFG10920-1',
        notice: '01/07/2022',
        demandForArbitration: 'No',
        status: 'Company Contacted',
        active: true
      },
      {
        name: 'Gary Wayne',
        claim: 'DI210920-7',
        notice: 15,
        eligible: 23,
        demandForArbitration: 'No',
        status: 'Cancelled',
        active: false
      }
      // {
      //   name: 'Catherine Smith',
      //   claim: 'TMO210920-8',
      //   notice: 3,
      //   eligible: 30,
      //   demandForArbitration: 'No',
      //   status: 'Claim Mailed'
      // },
      // {
      //   name: 'Debbie Turner',
      //   claim: 'TMO210920-9',
      //   notice: 2,
      //   eligible: 51,
      //   demandForArbitration: 'No',
      //   status: 'Claim Mailed'
      // },
      // {
      //   name: 'Sarah Timmons',
      //   claim: 'TMO210920-10',
      //   notice: 26,
      //   eligible: 3,
      //   demandForArbitration: 'No',
      //   status: 'Claim Mailed'
      // },
      // {
      //   name: 'Billy Gibbons',
      //   claim: 'TMO210920-11',
      //   notice: 32,
      //   eligible: 0,
      //   demandForArbitration: 'Yes',
      //   status: 'Escalated'
      // }
    ]
  },
  mutations: {

  },
  actions: {

  }
}

export default CompanyClaimsList
