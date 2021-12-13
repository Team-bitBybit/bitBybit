// user A initiates installment_request for a product user B has put out.
// user B views the request on the dashboard.
// Then user B can accept or decline
// 
async function createPaymentPlan(req, res) {
  if (req.method === "POST") {
    // { receiverId: "a user id", productName: "", paymentPlan: "a payment plan" }
    // paymentPlan : { description:"", duration: "months", next_installment: "", due_date: "", totalPrice:"", installmentsPaid }
  }
}

module.exports = {
  createPaymentPlan,
};
