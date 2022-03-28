
const AllClaims = {
  state: {
    allClaims: [
      {
        claimRef: 'TMO210920-1',
        userData: {
          name: {
            full_name: 'Brenda Roberts',
            first_name: 'Brenda',
            last_name: 'Roberts'
          },
          contact: {
            email: 'Brenda@bell.com',
            phone: '713-867-5309'
          },
          address: {
            street_address: '123 Place Way',
            city: 'Someplace',
            state: 'Tx',
            zip: '78744'
          }
        },
        notice: '01/12/2022',
        demandForArbitration: 'No',
        status: 'Claim Mailed',
        active: true,
        submitted: '01/12/2022',
        delivered: '01/17/2022',
        canceled: '-',
        initial_settlemnt_offer: '-',
        settled: '-',
        company_first_action: '-',
        flagged_by_company: '-',
        reason_flagged: '-',
        eligible_to_escalate: '02/17/2022',
        escalated: '-',
        claim_description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam modi deserunt corrupti impedit consequuntur aspernatur expedita, autdebitis vitae accusamus.',
        request_for_relief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam modi deserunt corrupti impedit consequuntur aspernatur expedita, autdebitis vitae accusamus.'
      },
      {
        claimRef: 'TMO-0000',
        userData: {
          name: {
            full_name: 'Jessica Bell',
            first_name: 'Jessica',
            last_name: 'Bell'
          },
          contact: {
            email: 'Jess@bell.com',
            phone: '713-867-5309'
          },
          address: {
            street_address: '123 Place Way',
            city: 'Houston',
            state: 'Tx',
            zip: '78744'
          }
        },
        notice: '01/02/2022',
        demandForArbitration: 'No',
        status: 'Assigned',
        active: true,
        submitted: '01/12/2022',
        delivered: '01/17/2022',
        canceled: '-',
        initial_settlemnt_offer: '-',
        settled: '-',
        company_first_action: '-',
        flagged_by_company: '-',
        reason_flagged: '-',
        eligible_to_escalate: '02/17/2022',
        escalated: '-',
        claim_description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam modi deserunt corrupti impedit consequuntur aspernatur expedita, autdebitis vitae accusamus.',
        request_for_relief: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam modi deserunt corrupti impedit consequuntur aspernatur expedita, autdebitis vitae accusamus.'
      }

    ]
  },
  mutations: {

  },
  actions: {
    async getClaimByRef (context, payload) {
      const found = await this.state.AllClaims.allClaims.find(item => item.claimRef === payload.claimRef)
      return found
    }

  }
}

export default AllClaims
