# Init Request

The `init.json` contains a sample init request being sent to the BPP. The init route is used whenever the user accepts one of the provided quotes and enters their billing details.

The request is:

```json
{
  "context": {
    "domain": "dsep:courses",
    "country": "IND",
    "action": "init",
    "core_version": "1.0.0",
    "bap_id": "bap.dsep.samagra.io",
    "bap_uri": "https://bap.dsep.samagra.io",
    "bpp_id": "bpp.dsep.samagra.io",
    "bpp_uri": "https://bpp.dsep.samagra.io",
    "transaction_id": "a9aaecca-10b7-4d19-b640-b047a7c62196",
    "message_id": "$bb579fb8-cb82-4824-be12-fcbc405b6608",
    "timestamp": "2022-12-12T09:55:41.161Z"
  },
  "message": {
    "order": {
      "provider": {
        "id": "CEC",
        "descriptor": {
          "name": "CEC"
        },
        "category_id": "COMP_SCI_ENGG"
      },
      "items": [
        {
          "id": "Q291cnNlTGlzdDovbmQyX2NlYzIzX2NzMDI=",
          "parent_item_id": "Q291cnNlTGlzdDovbmQyX2NlYzIzX2NzMDI=",
          "descriptor": {
            "name": "Problem solving Aspects and Python Programming",
            "long_desc": "",
            "images": [
              {
                "url": "https://storage.googleapis.com/swayam-node2-production.appspot.com/assets/img/cec20_cs04/Course%20Image.png"
              }
            ]
          },
          "price": {
            "currency": "INR",
            "value": "0"
          },
          "category_id": "COMP_SCI_ENGG",
          "recommended": false,
          "time": {
            "label": "Course Schedule",
            "duration": "P12W",
            "range": {
              "start": "2023-01-17T18:30:00.000000Z",
              "end": "2023-04-09T18:29:00.000000Z"
            }
          },
          "rating": "0",
          "tags": [
            {
              "name": "credits",
              "value": "4"
            },
            {
              "name": "instructors",
              "value": "Dr.S.Malliga, Dr.R.Thangarajan, Dr.S.V.Kogilavani"
            },
            {
              "name": "offeringInstitue",
              "value": "Kongu Engineering College"
            },
            {
              "name": "url",
              "value": "https://onlinecourses.swayam2.ac.in/cec23_cs02/preview"
            },
            {
              "name": "enrollmentEndDate",
              "value": "2023-02-28T18:29:00.000000Z"
            }
          ],
          "rateable": true
        }
      ]
    }
  }
}
```
