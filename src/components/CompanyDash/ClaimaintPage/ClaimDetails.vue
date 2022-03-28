<template>
  <div class="claim-details-container">
    <div class="claim-description">
      <div class="claim-status-bar">
        <h6 class="textBlack--text text-h6">Status:</h6>
        <p class="status">{{ status }}</p>
      </div>
      <div class="claim-description-text">
        <h6 class="textBlack--text text-h6">Description</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam modi
          deserunt corrupti impedit consequuntur aspernatur expedita, aut
          debitis vitae accusamus.
        </p>
      </div>
      <div class="request-for-relief-text">
        <h6 class="textBlack--text text-h6">Request for Relief</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam modi
          deserunt corrupti impedit consequuntur aspernatur expedita, aut
          debitis vitae accusamus.
        </p>
      </div>
    </div>
    <div class="claim-dates-container">
      <h6 class="ma-0 pa-0 textBlack--text text-h6">Timeline</h6>
      <p class="date-title">Submitted</p>
      <p class="claim-date date-submitted"> {{claimData.submitted}} </p>
      <p class="date-title">Delivered</p>
      <p class="claim-date date-delivered">{{claimData.delivered}}</p>
      <p class="date-title">Company First Action</p>
      <p class="claim-date date-submitted">{{claimData.company_first_action}}</p>
      <p class="date-title">First Settlement Offer</p>
      <p class="claim-date date-submitted">{{claimData.initial_settlemnt_offer}}</p>
      <p class="date-title">Eligibility to Escalate</p>
      <p class="claim-date date-submitted">{{claimData.eligible_to_escalate}}</p>
      <p class="date-title">Escalated</p>
      <p class="claim-date date-submitted">{{claimData.escalated}}</p>
      <p class="date-title">Cancelled</p>
      <p class="claim-date date-submitted">{{claimData.canceled}}</p>
      <p class="date-title">Settled</p>
      <p class="claim-date date-submitted">{{claimData.settled}}</p>
      <p class="date-title">Flagged by Company</p>
      <p class="claim-date date-submitted">{{claimData.flagged_by_company}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: "Claim Mailed",
    };
  },
  props: ["claimData"]
};
</script>

<style lang="scss" scoped>
.claim-details-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 15px;
  height: 75%;

  .claim-description {
    width: 75%;
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .claim-status-bar {
      display: flex;
      justify-content: flex-start;
      align-items: baseline;
      .status {
        margin-left: 5px;
        font-size: 16px;
      }
    }
  }
  .claim-dates-container {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 0 5px;
    margin-left: 15px;
     height: inherit;
    .date-title {
      font-weight: 600;
      margin: 0;
      padding: 0;
      font-size: 14px;
    }
    .claim-date {
      margin: 0;
      font-size: 14px;
    }
  }
}
</style>