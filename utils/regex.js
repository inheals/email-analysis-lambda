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
        "([0-9]{2})\\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\\s([0-9]{4})\\s([^a-zA-Z])([0-9]*.[0-9]*)",
        "Pay\\s{1,}Bill\\s{1,}(http[s]?:\\/?\\/?[^:\\/\\s]+(\\/\\w+)*\\/[\\w\\-\\.]+[^#?\\s]+.*?(#[\\w\\-]+)?)",
        "Hi\\s([A-Za-z0-9\\s]+),",
        "\\*([a-zA-Z0-9=]+)\\*([0-9\\.]+)",
        "has\\sbeen\\s(received)",
        "on\\s(\\d)rd\\s(January|February|March|April|May|June|July|August|September|October|November|December)\\s(\\d{4}),\\s([0-9:]{5}\\sam)"
      ],
      returnData: [
        ["bill_due_date","bill_due_month","bill_due_year","currency","amount_due"],
        ["pay_url"],
        ["consumer_name"],
        ["currency","amount"],
        ["transaction_type"],
        ["bill_due_date","bill_due_month","bill_due_year","time"],
      ]
    },
    "Freecharge Pay Later bill":
    {
      regex:[
        "Hi\\s([A-Za-z0-9\\s]+),",
        "([0-9-]{10})\\sto\\s([0-9-]{10})",
        "(=E2=82=B9|₹)([0-9\\.]+)",
        "Interest\\sApplicable\\s+=E2=82=B9([0-9\.]+)",
        "Due\\sDate\\s+([0-9-]{10})",
        "=E2=82=B9([0-9\\.]+)\\sCashback"
      ],
      returnData:[
        ["consumer_name"],
        ["from_date","to_date"],
        ["currency","amount"],
        ["interest_amount"],
        ["due_date"],
        ['cashback']
      ]
    }
  };
  