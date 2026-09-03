# Class 1 datasets

These datasets support the three Data Challenge workshop scenarios in `class01.ipynb`.

## `fred_business_conditions.csv`

A snapshot downloaded from [Federal Reserve Economic Data (FRED)](https://fred.stlouisfed.org/) at the Federal Reserve Bank of St. Louis. It combines:

- [`FEDFUNDS`](https://fred.stlouisfed.org/series/FEDFUNDS): effective federal funds rate, percent, monthly;
- [`CPIAUCSL`](https://fred.stlouisfed.org/series/CPIAUCSL): Consumer Price Index for All Urban Consumers, seasonally adjusted, monthly; and
- [`UNRATE`](https://fred.stlouisfed.org/series/UNRATE): civilian unemployment rate, percent, monthly.

The CPI and unemployment series originate with the U.S. Bureau of Labor Statistics and are distributed through FRED. The series begin on different dates, so early observations contain missing values. The snapshot should be treated as the data available when downloaded; FRED observations may later be updated or revised.

Live download:

```text
https://fred.stlouisfed.org/graph/fredgraph.csv?id=FEDFUNDS,CPIAUCSL,UNRATE
```

## `uci_bank_marketing_sample.csv`

The 4,521-row sample supplied with the [UCI Bank Marketing dataset](https://archive.ics.uci.edu/dataset/222/bank+marketing). Each record describes a bank-client marketing example, including client attributes, the current and previous campaign contacts, and whether the client subscribed to a term deposit. Fields are separated by semicolons.

The sample was extracted without modification from `bank.csv` in UCI's official archive. Consult the UCI dataset page and included documentation for variable definitions, usage terms, and the requested citation.

Important teaching detail: `duration` records the duration of the most recent call. It is not available before that call occurs, so it cannot legitimately be used to decide whom to call in advance.

Official archive:

```text
https://archive.ics.uci.edu/static/public/222/bank+marketing.zip
```

## `coffee_shop_operations_synthetic.csv`

A small synthetic teaching dataset created for Data Bootcamp. Each row represents one store during one service period on one date. The observations are fictional and must not be presented as measurements from a real company.

| Field | Meaning |
| --- | --- |
| `date` | service date |
| `store` | store location |
| `day_of_week` | weekday name |
| `period` | morning, midday, or evening service period |
| `transactions` | completed transactions |
| `revenue_usd` | revenue from completed transactions |
| `scheduled_staff` | employees scheduled during the period |
| `labor_hours` | total employee hours during the period |
| `avg_wait_minutes` | sampled average customer wait; blank where no sample was collected |
| `promotion` | whether a promotion was active |
| `rain` | whether rain was observed |

The dataset does not measure abandoned purchases, customer satisfaction, employee roles, worker availability, or hourly variation within each service period.
