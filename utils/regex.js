module.exports.expressionData = {
    listOfApps: ["freecharge"],
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
        ["paid_amount","bill_paid_month"]
      ],
    },
    simpl:{
      regex: [
        "([0-9]{2})\\s(jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\\s([0-9]{4})\\s([^a-zA-Z])([0-9]*.[0-9]*)",
        "Pay\\s{1,}Bill\\s{1,}(http[s]?:\\/?\\/?[^:\\/\\s]+(\\/\\w+)*\\/[\\w\\-\\.]+[^#?\\s]+.*?(#[\\w\\-]+)?)",
        "hi\\s(\\w+),\\s(.)(\\d{1,}.\\d{1,})is\\sdue\\sby\\s([0-9]{2})\\s(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\\s(\\d{4})\\sfor\\spurchases",
        "hi\\s(\\w+\\s\\w+|\\w+),\\s(.)(\\d{1,}.\\d{1,})\\shas\\sbeen\\sreceived\\sfor\\syour\\ssimpl\\saccount\\son\\s(\\d{1,2})(?:th|rd)\\s(january|february|march|april|may|june|july|august|september|october|november|december)\\s(\\d{4})"
      ],
      returnData: [
        ["bill_due_date","bill_due_month","bill_due_year","currency","amount_due"],
        ["pay_url"],
        ['first_name','currency','amount_due','bill_due_date','bill_due_month','bill_due_year'],
        ['first_name','currency','paid_amount','bill_paid_date','bill_paid_month','bill_paid_year']
      ]
    },
    'Amazon Pay Later':{
      regex:[
        "An\\sAmount\\sof\\s(Rs)\\s(\\d{1,}.\\d{1,})", 
        "account\\sno.\\s(X+[0-9]+)\\son\\s(\\d{2})-(\\d{2})-(\\d{2})",
        //  "click here\\s(https?:\\/\\/(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&/=$]+)*)\\s",
        'a\\sreceipt\\sof\\s([a-z A-Z]*)\\s([0-9]+.[0-9]+)\\smade\\svia\\sdebit\\scard\\/netbanking\\son\\s(\\d{2})-(\\d{2})-(\\d{2})'
      ],
      returnData:[
        ["currency","amount_due",],
        ["accountNumber", "bill_due_date","bill_due_month","bill_due_year"],
        ["currency", "paid_amount","bill_paid_date","bill_paid_month","bill_paid_year"]
      ]
    },
    slice:{
      regex:[
        "Your\\srepayment\\sof\\s(.)([0-9]+(?:,[0-9]+)*)",
        "Your\\stotal\\sdue\\samount\\sfor\\s(\\d{1,2})th\\s([a-zA-Z]+)\\sis\\s(.)([0-9]+,(?:[0-9]+)*)",
        "Repay\\snow\\s(https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&/=$]+)*)"
      ],
      returnData:[

        ['currency','paid_amount'],
        ['bill_due_date','bill_due_month','currency','amount_due'],
        ['pay_url']
      ]
    },
    freecharge:{
      regex:[
        "Total\\sDue\\sAmount\\s(.)(\\d{1,}.\\d{1,})",
        "Due\\sDate\\s(\\d{2})-(\\d{2})-(\\d{4})",
        "PAY\\sBILL\\s(https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b[-a-zA-Z0-9()@:%_\\+.~#?&//=]*)",
        "Total\\sDue\\sAmount\\sPaid\\s(.)(\\d{1,}.\\d{1,})\\s+Bill\\sPayment\\sDate\\s(\\d{1,2})-(\\d{1,2})-(\\d{1,4})"
      ],
      returnData:[
        ['currency','amount_due',],
        ['bill_due_date','bill_due_month','bill_due_year'],
        ['pay_url'],
        ["currency","paid_amount","bill_paid_date","bill_paid_month","bill_paid_year"]

      ]
    }
  };
  