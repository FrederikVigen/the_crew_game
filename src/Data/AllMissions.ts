import { Mission } from "../Components/Models/Mission";
export const allMissions: Mission[] = [
    {
        "cardText": "I will win 0 tricks",
        "difficulties": [
            4,
            3,
            3
        ],
        "type": "trick_winning",
        "type_specifics": {
            "amount_of_tricks": 0,
            "exactly": false,
            "in_row": false,
            "position": null,
            "not_win": false
        }
    },
    {
        "cardText": "I will win x tricks",
        "difficulties": [
            3,
            2,
            2
        ],
        "type": "trick_winning",
        "type_specifics": {
            "amount_of_tricks": null,
            "exactly": true,
            "in_row": false,
            "position": null,
            "not_win": false,
            "extra_info": "Note your predicition and share it with the crew"
        }
    },
    {
        "cardText": "I will win exactly 2 tricks",
        "difficulties": [
            2,
            2,
            2
        ],
        "type": "trick_winning",
        "type_specifics": {
            "amount_of_tricks": 2,
            "exactly": true,
            "in_row": false,
            "position": null,
            "not_win": false
        }
    },
    {
        "cardText": "I will win exactly 1 trick",
        "difficulties": [
            3,
            2,
            2
        ],
        "type": "trick_winning",
        "type_specifics": {
            "amount_of_tricks": 1,
            "exactly": true,
            "in_row": false,
            "position": null,
            "not_win": false
        }
    },
    {
        "cardText": "I will win none of the first 5 tricks",
        "difficulties": [
            2,
            3,
            3
        ],
        "type": "trick_winning",
        "type_specifics": {
            "amount_of_tricks": 5,
            "exactly": true,
            "in_row": false,
            "position": "FIRST",
            "not_win": true
        }
    },
    {
        "cardText": "I will never win 2 tricks in a row",
        "difficulties": [
            3,
            2,
            2
        ],
        "type": "trick_winning",
        "type_specifics": {
            "amount_of_tricks": 2,
            "exactly": false,
            "in_row": true,
            "position": null,
            "not_win": true
        }
    },
    {
        "cardText": "I will win only the last trick",
        "difficulties": [
            4,
            4,
            4
        ],
        "type": "trick_winning",
        "type_specifics": {
            "amount_of_tricks": 1,
            "exactly": true,
            "in_row": false,
            "position": "LAST",
            "not_win": false
        }
    },
    {
        "cardText": "I will win none of the first 3 tricks",
        "difficulties": [
            1,
            2,
            2
        ],
        "type": "trick_winning",
        "type_specifics": {
            "amount_of_tricks": 3,
            "exactly": false,
            "in_row": false,
            "position": "FIRST",
            "not_win": true
        }
    },
    {
        "cardText": "I will win the first 2 tricks",
        "difficulties": [
            1,
            1,
            2
        ],
        "type": "trick_winning",
        "type_specifics": {
            "amount_of_tricks": 2,
            "exactly": false,
            "in_row": false,
            "position": "FIRST",
            "not_win": false
        }
    },
    {
        "cardText": "I will win exactly 2 tricks and they will be in a row",
        "difficulties": [
            3,
            3,
            3
        ],
        "type": "trick_winning",
        "type_specifics": {
            "amount_of_tricks": 2,
            "exactly": true,
            "in_row": true,
            "position": null,
            "not_win": false
        }
    },
    {
        "cardText": "I will win none of the first 4 tricks",
        "difficulties": [
            1,
            2,
            3
        ],
        "type": "trick_winning",
        "type_specifics": {
            "amount_of_tricks": 4,
            "exactly": false,
            "in_row": false,
            "position": "FIRST",
            "not_win": true
        }
    },
    {
        "cardText": "I will win the first and the last trick",
        "difficulties": [
            3,
            4,
            4
        ],
        "type": "trick_winning",
        "type_specifics": {
            "amount_of_tricks": 2,
            "exactly": false,
            "in_row": false,
            "position": "FIRSTLAST",
            "not_win": false
        }
    },
    {
        "cardText": "I will win 2 tricks in a row",
        "difficulties": [
            1,
            1,
            1
        ],
        "type": "trick_winning",
        "type_specifics": {
            "amount_of_tricks": 2,
            "exactly": false,
            "in_row": true,
            "position": null,
            "not_win": false
        }
    },
    {
        "cardText": "I will win exactly 4 tricks",
        "difficulties": [
            2,
            3,
            5
        ],
        "type": "trick_winning",
        "type_specifics": {
            "amount_of_tricks": 4,
            "exactly": true,
            "in_row": false,
            "position": null,
            "not_win": false
        }
    },
    {
        "cardText": "I will win the first 3 tricks",
        "difficulties": [
            2,
            3,
            4
        ],
        "type": "trick_winning",
        "type_specifics": {
            "amount_of_tricks": 3,
            "exactly": false,
            "in_row": false,
            "position": "FIRST",
            "not_win": false
        }
    },
    {
        "cardText": "I will win 3 tricks in a row",
        "difficulties": [
            2,
            3,
            4
        ],
        "type": "trick_winning",
        "type_specifics": {
            "amount_of_tricks": 3,
            "exactly": false,
            "in_row": true,
            "position": null,
            "not_win": false
        }
    },
    {
        "cardText": "I will win the first trick",
        "difficulties": [
            1,
            1,
            1
        ],
        "type": "trick_winning",
        "type_specifics": {
            "amount_of_tricks": 1,
            "exactly": false,
            "in_row": false,
            "position": "FIRST",
            "not_win": false
        }
    },
    {
        "cardText": "I will win x tricks",
        "difficulties": [
            4,
            3,
            3
        ],
        "type": "trick_winning",
        "type_specifics": {
            "amount_of_tricks": null,
            "exactly": true,
            "in_row": false,
            "position": null,
            "not_win": false,
            "extra_info": "Note your prediction, but keep it secret"
        }
    },
    {
        "cardText": "I will win the last trick",
        "difficulties": [
            2,
            3,
            3
        ],
        "type": "trick_winning",
        "type_specifics": {
            "amount_of_tricks": 1,
            "exactly": false,
            "in_row": false,
            "position": "LAST",
            "not_win": false
        }
    },
    {
        "cardText": "I will win only the first trick",
        "difficulties": [
            4,
            3,
            3
        ],
        "type": "trick_winning",
        "type_specifics": {
            "amount_of_tricks": 1,
            "exactly": true,
            "in_row": false,
            "position": "FIRST",
            "not_win": false
        }
    },
    {
        "cardText": "I will win exactly 3 tricks and they will be in a row",
        "difficulties": [
            3,
            3,
            4
        ],
        "type": "trick_winning",
        "type_specifics": {
            "amount_of_tricks": 3,
            "exactly": true,
            "in_row": true,
            "position": null,
            "not_win": false
        }
    },
    {
        "cardText": "I will win more tricks than the commander",
        "difficulties": [
            2,
            2,
            2
        ],
        "type": "more_or_less",
        "type_specifics": {
            "left": "I",
            "right": ["COMMANDER"],
            "comparisson": ">",
            "in_one_trick": false
        }
    },
    {
        "cardText": "I will win as many tricks as the commander",
        "difficulties": [
            4,
            3,
            3
        ],
        "type": "more_or_less",
        "type_specifics": {
            "left": "I",
            "right": ["COMMANDER"],
            "comparisson": "=",
            "in_one_trick": false
        }
    },
    {
        "cardText": "I will win more tricks than anyone else",
        "difficulties": [
            2,
            3,
            3
        ],
        "type": "more_or_less",
        "type_specifics": {
            "left": "I",
            "right": ["ANYONE"],
            "comparisson": ">",
            "in_one_trick": false
        }
    },
    {
        "cardText": "I will win more yellow than blue",
        "difficulties": [
            1,
            1,
            1
        ],
        "type": "more_or_less",
        "type_specifics": {
            "extra_info": "0 blue cards allowed",
            "left": "Y",
            "right": ["B"],
            "comparisson": ">",
            "in_one_trick": false
        }
    },
    {
        "cardText": "I will win more pink than green",
        "difficulties": [
            1,
            1,
            1
        ],
        "type": "more_or_less",
        "type_specifics": {
            "extra_info": "0 green cards is allowed",
            "left": "P",
            "right": ["G"],
            "comparisson": ">",
            "in_one_trick": false
        }
    },
    {
        "cardText": "I will win fewer tricks than anyone else",
        "difficulties": [
            2,
            2,
            3
        ],
        "type": "more_or_less",
        "type_specifics": {
            "left": "I",
            "right": ["ANYONE"],
            "comparisson": "<",
            "in_one_trick": false
        }
    },
    {
        "cardText": "I will win fewer tricks than the commander",
        "difficulties": [
            2,
            2,
            2
        ],
        "type": "more_or_less",
        "type_specifics": {
            "left": "I",
            "right": ["COMMANDER"],
            "comparisson": "<",
            "in_one_trick": false
        }
    },
    {
        "cardText": "I will win more tricks than everyone else combined",
        "difficulties": [
            3,
            4,
            5
        ],
        "type": "more_or_less",
        "type_specifics": {
            "left": "I",
            "right": ["ANYONE_COMBINED"],
            "comparisson": ">",
            "in_one_trick": false
        }
    },
    {
        "cardText": "I will win as many pink as yellow cards",
        "difficulties": [
            4,
            4,
            4
        ],
        "type": "more_or_less",
        "type_specifics": {
            "extra_info": "0 yellow/pink cards is not allowed",
            "left": "P",
            "right": ["Y"],
            "comparisson": "=",
            "in_one_trick": false
        }
    },
    {
        "cardText": "I will win as many green as yellow cards in one trick",
        "difficulties": [
            2,
            3,
            3
        ],
        "type": "more_or_less",
        "type_specifics": {
            "extra_info": "0 green/yellow cards is not allowed",
            "left": "G",
            "right": ["Y"],
            "comparisson": "=",
            "in_one_trick": true
        }
    },
    {
        "cardText": "I will win as many pink as blue in one trick",
        "difficulties": [
            2,
            3,
            3
        ],
        "type": "more_or_less",
        "type_specifics": {
            "extra_info": "0 pink/blue cards not allowed",
            "left": "P",
            "right": ["B"],
            "comparisson": "=",
            "in_one_trick": true
        }
    },
    {
        "cardText": "I will win a trick of which the card values are all less than 7",
        "difficulties": [
            2,
            3,
            3
        ],
        "type": "more_or_less",
        "type_specifics": {
            "extra_info": "Submarines are not allowed in the trick",
            "left": "ALL_CARDS",
            "right": [7],
            "comparisson": "<",
            "in_one_trick": true,
            "different_spelling": true
        }
    },
    {
        "cardText": "I will win a trick of which card values are all greater than 5",
        "difficulties": [
            2,
            3,
            4
        ],
        "type": "more_or_less",
        "type_specifics": {
            "left": "ALL_CARDS",
            "right": [5],
            "comparisson": ">",
            "in_one_trick": true,
            "different_spelling": true
        }
    },
    {
        "cardText": "I will win a trick with a total value less than (8,12,16)",
        "difficulties": [
            3,
            3,
            4
        ],
        "type": "more_or_less",
        "type_specifics": {
            "extra_info": "Submarines are not allowed in the trick",
            "left": "SUM",
            "right": [
                8,
                12,
                16
            ],
            "comparisson": "<",
            "in_one_trick": true,
            "different_spelling": true
        }
    },
    {
        "cardText": "I will win a trick with a total value greater than (23,28,31)",
        "difficulties": [
            3,
            3,
            4
        ],
        "type": "more_or_less",
        "type_specifics": {
            "extra_info": "Submarines are not allowed in the trick",
            "left": "SUM",
            "right": [
                23,
                28,
                31
            ],
            "comparisson": ">",
            "in_one_trick": true,
            "different_spelling": true
        }
    },
    {
        "cardText": "I will win a trick with a total value of 22 or 23",
        "difficulties": [
            3,
            3,
            4
        ],
        "type": "more_or_less",
        "type_specifics": {
            "extra_info": "Submarines are not allowed in the trick",
            "left": "SUM",
            "right": ["22/23"],
            "comparisson": "=",
            "in_one_trick": true
        }
    },
    {
        "cardText": "I will not win any 1,2,3 in any color",
        "difficulties": [
            3,
            3,
            3
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": true,
            "position": null,
            "not_win": true,
            "specific_cards": [
                "X1",
                "X2",
                "X3"
            ]
        }
    },
    {
        "cardText": "I will win no pinks",
        "difficulties": [
            2,
            2,
            2
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": true,
            "position": null,
            "not_win": true,
            "specific_cards": [
                "P"
            ]
        }
    },
    {
        "cardText": "I will win all of the 9's",
        "difficulties": [
            4,
            5,
            6
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": false,
            "position": null,
            "not_win": false,
            "specific_cards": [
                "B9",
                "P9",
                "Y9",
                "G9"
            ]
        }
    },
    {
        "cardText": "I will win the pink 3",
        "difficulties": [
            1,
            1,
            1
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": false,
            "position": null,
            "not_win": false,
            "specific_cards": [
                "P3"
            ]
        }
    },
    {
        "cardText": "I will win the pink 9 and the yellow 8",
        "difficulties": [
            2,
            3,
            3
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": false,
            "position": null,
            "not_win": false,
            "specific_cards": [
                "P9",
                "Y8"
            ]
        }
    },
    {
        "cardText": "I will win exactly 2 9's",
        "difficulties": [
            2,
            3,
            3
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": true,
            "position": null,
            "not_win": false,
            "specific_cards": [
                "X9",
                "X9"
            ]
        }
    },
    {
        "cardText": "I will win pink 1 and green 7",
        "difficulties": [
            2,
            2,
            2
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": false,
            "position": null,
            "not_win": false,
            "specific_cards": [
                "P1",
                "G7"
            ]
        }
    },
    {
        "cardText": "I will win at least one card of each color",
        "difficulties": [
            2,
            3,
            4
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": false,
            "position": null,
            "not_win": false,
            "specific_cards": [
                "B",
                "G",
                "Y",
                "P"
            ]
        }
    },
    {
        "cardText": "I will win exactly 1 pink and 1 green",
        "difficulties": [
            4,
            4,
            4
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": true,
            "position": null,
            "not_win": false,
            "specific_cards": [
                "P",
                "G"
            ]
        }
    },
    {
        "cardText": "I will win submarine 3",
        "difficulties": [
            1,
            1,
            1
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": false,
            "position": null,
            "not_win": false,
            "specific_cards": [
                "S3"
            ]
        }
    },
    {
        "cardText": "I will win no greens",
        "difficulties": [
            2,
            2,
            2
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": true,
            "position": null,
            "not_win": true,
            "specific_cards": [
                "G"
            ]
        }
    },
    {
        "cardText": "I will win exactly 1 pink",
        "difficulties": [
            3,
            3,
            4
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": true,
            "position": null,
            "not_win": false,
            "specific_cards": [
                "P"
            ]
        }
    },
    {
        "cardText": "I will win no 1",
        "difficulties": [
            2,
            2,
            2
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": true,
            "position": null,
            "not_win": true,
            "specific_cards": [
                "X1"
            ]
        }
    },
    {
        "cardText": "I will win no 5",
        "difficulties": [
            1,
            2,
            2
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": true,
            "position": null,
            "not_win": true,
            "specific_cards": [
                "X5"
            ]
        }
    },
    {
        "cardText": "I will win pink 8 and blue 5",
        "difficulties": [
            2,
            2,
            3
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": false,
            "position": null,
            "not_win": false,
            "specific_cards": [
                "P8",
                "B5"
            ]
        }
    },
    {
        "cardText": "I will win at least 5 pinks",
        "difficulties": [
            2,
            3,
            3
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": false,
            "position": null,
            "not_win": false,
            "specific_cards": [
                "P",
                "P",
                "P",
                "P",
                "P"
            ]
        }
    },
    {
        "cardText": "I will win no 9",
        "difficulties": [
            1,
            1,
            1
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": true,
            "position": null,
            "not_win": true,
            "specific_cards": [
                "X9"
            ]
        }
    },
    {
        "cardText": "I will win no yellows",
        "difficulties": [
            2,
            2,
            2
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": true,
            "position": null,
            "not_win": true,
            "specific_cards": [
                "Y"
            ]
        }
    },
    {
        "cardText": "I will win 1 submarine and no other submarine",
        "difficulties": [
            3,
            3,
            3
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": true,
            "position": null,
            "not_win": false,
            "extra_info": "If submarine cards 1 and 4 or 1,2,3 are in one hand re-deal the playing cards",
            "specific_cards": [
                "S1"
            ]
        }
    },
    {
        "cardText": "I will win yellow 9 and blue 7",
        "difficulties": [
            2,
            3,
            3
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": false,
            "position": null,
            "not_win": false,
            "specific_cards": [
                "Y9",
                "B7"
            ]
        }
    },
    {
        "cardText": "I will win exactly 2 greens",
        "difficulties": [
            3,
            4,
            4
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": true,
            "position": null,
            "not_win": false,
            "specific_cards": [
                "G",
                "G"
            ]
        }
    },
    {
        "cardText": "I will win green 3, yellow 4 and 5",
        "difficulties": [
            3,
            4,
            4
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": false,
            "position": null,
            "not_win": false,
            "specific_cards": [
                "G3",
                "Y4",
                "Y5"
            ]
        }
    },
    {
        "cardText": "I will win pink 5 and yellow 6",
        "difficulties": [
            2,
            2,
            3
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": false,
            "position": null,
            "not_win": false,
            "specific_cards": [
                "P5",
                "Y6"
            ]
        }
    },
    {
        "cardText": "I will win atleast 2 7's",
        "difficulties": [
            2,
            2,
            2
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": false,
            "position": null,
            "not_win": false,
            "specific_cards": [
                "X7",
                "X7"
            ]
        }
    },
    {
        "cardText": "I will win green 5 and blue 8",
        "difficulties": [
            2,
            2,
            3
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": false,
            "position": null,
            "not_win": false,
            "specific_cards": [
                "G5",
                "B8"
            ]
        }
    },
    {
        "cardText": "I will win exactly 3 submarines",
        "difficulties": [
            3,
            4,
            4
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": true,
            "position": null,
            "not_win": false,
            "extra_info": "If submarine cards 1,2,3,4 are in one hand re-deal the playing cards",
            "specific_cards": [
                "XS",
                "XS",
                "XS",
            ]
        }
    },
    {
        "cardText": "I will win no submarines",
        "difficulties": [
            1,
            1,
            1
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": true,
            "position": null,
            "not_win": true,
            "specific_cards": [
                "XS"
            ]
        }
    },
    {
        "cardText": "I will win no 8 or 9",
        "difficulties": [
            3,
            3,
            2
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": true,
            "position": null,
            "not_win": true,
            "specific_cards": [
                "X8",
                "X9"
            ]
        }
    },
    {
        "cardText": "I will win green 2 in the final trick of the game",
        "difficulties": [
            3,
            4,
            5
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": false,
            "position": "LAST",
            "not_win": false,
            "specific_cards": [
                "G2"
            ]
        }
    },
    {
        "cardText": "I will win 3 5s",
        "difficulties": [
            3,
            4,
            5
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": false,
            "position": null,
            "not_win": false,
            "specific_cards": [
                "X5",
                "X5",
                "X5"
            ]
        }
    },
    {
        "cardText": "I will win at least 3 9s",
        "difficulties": [
            3,
            4,
            5
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": false,
            "position": null,
            "not_win": false,
            "specific_cards": [
                "X9",
                "X9",
                "X9"
            ]
        }
    },
    {
        "cardText": "I will win blue 1,2,3",
        "difficulties": [
            2,
            3,
            3
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": false,
            "position": null,
            "not_win": false,
            "specific_cards": [
                "B1",
                "B2",
                "B3"
            ]
        }
    },
    {
        "cardText": "I will win the blue 4",
        "difficulties": [
            1,
            1,
            1
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": false,
            "position": null,
            "not_win": false,
            "specific_cards": [
                "B4"
            ]
        }
    },
    {
        "cardText": "I will win the blue 6 and the yellow 7",
        "difficulties": [
            2,
            2,
            3
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": false,
            "position": null,
            "not_win": false,
            "specific_cards": [
                "B6",
                "Y7"
            ]
        }
    },
    {
        "cardText": "I will win no yellow nor green",
        "difficulties": [
            3,
            3,
            3
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": true,
            "position": null,
            "not_win": true,
            "specific_cards": [
                "Y",
                "G"
            ]
        }
    },
    {
        "cardText": "I will win all four 3's",
        "difficulties": [
            3,
            4,
            5
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": false,
            "position": null,
            "not_win": false,
            "specific_cards": [
                "B3",
                "G3",
                "Y3",
                "P3"
            ]
        }
    },
    {
        "cardText": "I will win green 6",
        "difficulties": [
            1,
            1,
            1
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": false,
            "position": null,
            "not_win": false,
            "specific_cards": [
                "G6"
            ]
        }
    },
    {
        "cardText": "I will win exactly the 2 submarines",
        "difficulties": [
            3,
            3,
            3
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": true,
            "position": null,
            "not_win": false,
            "extra_info": "If submarine cards 2 and 4 or 1,2,3 are in one hand re-deal the playing cards",
            "specific_cards": [
                "S2"
            ]
        }
    },
    {
        "cardText": "I will win at least 7 yellow",
        "difficulties": [
            3,
            3,
            3
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": false,
            "position": null,
            "not_win": false,
            "specific_cards": [
                "Y",
                "Y",
                "Y",
                "Y",
                "Y",
                "Y",
                "Y"
            ]
        }
    },
    {
        "cardText": "I will win exactly 2 submarines",
        "difficulties": [
            3,
            3,
            4
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": true,
            "position": null,
            "not_win": false,
            "extra_info": "If submarines 2,3,4 are in one hand, re-deal the playing cards",
            "specific_cards": [
                "XS",
                "XS"
            ]
        }
    },
    {
        "cardText": "I will win exactly 1 submarine",
        "difficulties": [
            3,
            3,
            3
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": true,
            "position": null,
            "not_win": false,
            "extra_info": "If submarine cards 1,2,3,4 are in one hand, re-deal the playing cards",
            "specific_cards": [
                "XS"
            ]
        }
    },
    {
        "cardText": "I will win no blue nor pinks",
        "difficulties": [
            3,
            3,
            3
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": true,
            "position": null,
            "not_win": true,
            "specific_cards": [
                "B",
                "P"
            ]
        }
    },
    {
        "cardText": "I will win exactly 2 blues",
        "difficulties": [
            3,
            4,
            4
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": true,
            "position": null,
            "not_win": false,
            "specific_cards": [
                "B",
                "B"
            ]
        }
    },
    {
        "cardText": "I will win exactly 3 6's",
        "difficulties": [
            3,
            4,
            4
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": true,
            "position": null,
            "not_win": false,
            "specific_cards": [
                "X6",
                "X6",
                "X6"
            ]
        }
    },
    {
        "cardText": "I will win yellow 1",
        "difficulties": [
            1,
            1,
            1
        ],
        "type": "specific",
        "type_specifics": {
            "exactly": false,
            "position": null,
            "not_win": false,
            "specific_cards": [
                "Y1"
            ]
        }
    },
    {
        "cardText": "I will win a trick that contains even-numbered cards",
        "difficulties": [
            2,
            5,
            6
        ],
        "type": "even_odd",
        "type_specifics": {
            "in_one_trick": true,
            "specific_cards": [
                "X2",
                "X4",
                "X6",
                "X8"
            ],
            "is_even": true
        }
    },
    {
        "cardText": "I will win a trick that contains only odd-numbered cards",
        "difficulties": [
            2,
            4,
            5
        ],
        "type": "even_odd",
        "type_specifics": {
            "in_one_trick": true,
            "specific_cards": [
                "X1",
                "X3",
                "X5",
                "X7",
                "X9"
            ],
            "is_even": false
        }
    },
    {
        "cardText": "I will win all the cards in at least one of the 4 colors",
        "difficulties": [
            3,
            4,
            5
        ],
        "type": "all_of_one"
    },
    {
        "cardText": "I will not open a trick with a pink or green",
        "difficulties": [
            2,
            1,
            1
        ],
        "type": "not_opening",
        "type_specifics": {
            "specific_cards": [
                "P",
                "G"
            ]
        }
    },
    {
        "cardText": "I will not open a trick with a pink, yellow or blue",
        "difficulties": [
            4,
            3,
            3
        ],
        "type": "not_opening",
        "type_specifics": {
            "specific_cards": [
                "P",
                "Y",
                "B"
            ]
        }
    },
    {
        "cardText": "I will win a trick using a 5",
        "difficulties": [
            2,
            3,
            4
        ],
        "type": "using",
        "type_specifics": {
            "right": ["X5"]
        }
    },
    {
        "cardText": "I will win a 6 with another 6",
        "difficulties": [
            2,
            3,
            4
        ],
        "type": "using",
        "type_specifics": {
            "left": "X6",
            "right": ["X6"]
        }
    },
    {
        "cardText": "I will win a 5 with a 7",
        "difficulties": [
            1,
            2,
            2
        ],
        "type": "using",
        "type_specifics": {
            "left": "X5",
            "right": ["X7"]
        }
    },
    {
        "cardText": "I will win a 8 with a 4",
        "difficulties": [
            3,
            4,
            5
        ],
        "type": "using",
        "type_specifics": {
            "left": "X8",
            "right": ["X4"]
        }
    },
    {
        "cardText": "I will win a trick using a 2",
        "difficulties": [
            3,
            4,
            5
        ],
        "type": "using",
        "type_specifics": {
            "right": ["X2"]
        }
    },
    {
        "cardText": "I will win a trick using a 3",
        "difficulties": [
            3,
            4,
            5
        ],
        "type": "using",
        "type_specifics": {
            "right": ["X3"]
        }
    },
    {
        "cardText": "I will win a trick using a 6",
        "difficulties": [
            2,
            3,
            3
        ],
        "type": "using",
        "type_specifics": {
            "right": ["X6"]
        }
    },
    {
        "cardText": "I will win the green 9 using a submarine",
        "difficulties": [
            3,
            3,
            3
        ],
        "type": "using",
        "type_specifics": {
            "left": "G9",
            "right": ["S"]
        }
    },
    {
        "cardText": "I will win the pink 7 using a submarine",
        "difficulties": [
            3,
            3,
            3
        ],
        "type": "using",
        "type_specifics": {
            "left": "P7",
            "right": ["S"]
        }
    }
]