module.exports.expressionData = {
    listOfApps: ["flip"],
    'Flipkart Pay Later': {
      regex: [
        "dues\\sfor\\s([a-zA-Z]*)\\s([0-9]{4})\\sby\\s([0-9]{2})\\s([a-zA-Z]*)\\s([0-9]{4})",
        "Amount\\sDue\\s(.)(\\d{1,}.\\d{1,})",
        "Click\\shere\\sto\\spay\\s(http[s]?:\\/?\\/?[^:\\/\\s]+(\\/\\w+)*\\/[\\w\\-\\.]+[^#?\\s]+.*?(#[\\w\\-]+)?)\\s",
        'we.ve\\sreceived\\sRs\\s(\\d{1,}.\\d{1,})\\stowards\\syour\\s([A-Za-z]*)\\sbill.'
      ],
      returnData: [
        ["bill_month","year", "bill_due_date", "bill_due_month","bill_due_year"],
        ["currency", "amount_due"],
        ["pay_url"],
        ["paid_amount","bill_month"]
      ],
    },
    simpl:{
      regex: [
        "([0-9]{2})\\s(jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\\s([0-9]{4})\\s([^a-zA-Z])([0-9]*.[0-9]*)",
        "Pay\\s{1,}Bill\\s{1,}(http[s]?:\\/?\\/?[^:\\/\\s]+(\\/\\w+)*\\/[\\w\\-\\.]+[^#?\\s]+.*?(#[\\w\\-]+)?)"
      ],
      returnData: [
        ["bill_due_date","bill_due_month","bill_due_year","currency","amount_due"],
        ["pay_url"]
      ]
    }
  };
  