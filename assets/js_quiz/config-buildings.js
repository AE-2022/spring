var quizJSON = {
    "info": {
        "name":    "Buildings and Shops",
        "main":    "",
        "results": "",
        "level1":  "Excellent!",
        "level2":  "Good!",
        "level3":  "Average",
        "level4":  "Bad",
        "level5":  "Shocking!" // no comma here
    },
    "questions": [
        { // Question 1
            "q": "Choose your answer",
            "a": [
                {"option": "mansion building",    "correct": false},
                {"option": "apartment building",     "correct": true},
                {"option": "living building",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>apartment building</p>",
            "incorrect": "<p><span>Fail!</span>apartment building</p>" // no comma here
        },
        { // Question 2
            "q": "Choose your answer",
            "a": [
                {"option": "bus stop",    "correct": false},
                {"option": "bus terminal",     "correct": true},
                {"option": "bus port",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>bus terminal</p>",
            "incorrect": "<p><span>Fail!</span>bus terminal</p>" // no comma here
        },
       
        { // Question 3
            "q": "Choose your answer",
            "a": [
                {"option": "movie theatre",    "correct": false},
                {"option": "cinema",     "correct": false},
                {"option": "both are OK",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>Both are OK</p>",
            "incorrect": "<p><span>Fail!</span>Both are OK</p>" // no comma here
        },
    
        { // Question 4
            "q": "Choose your answer",
            "a": [
                {"option": "galleria",    "correct": false},
                {"option": "history building",     "correct": false},
                {"option": "museum",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>museum</p>",
            "incorrect": "<p><span>Fail!</span>museum</p>" // no comma here
        },

         { // Question 5
            "q": "Choose your answer",
            "a": [
                {"option": "fire house",    "correct": false},
                {"option": "fire terminal",     "correct": false},
                {"option": "fire station",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>fire station</p>",
            "incorrect": "<p><span>Fail!</span>fire station</p>" // no comma here
        },

        { // Question 6
            "q": "Choose your answer",
            "a": [
                {"option": "bowling centre",    "correct": false},
                {"option": "bowling gym",     "correct": false},
                {"option": "bowling alley",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>bowling alley</p>",
            "incorrect": "<p><span>Fail!</span>bowling alley</p>" // no comma here
        },

        { // Question 7
            "q": "Choose your answer",
            "a": [
                {"option": "laundromat",    "correct": true},
                {"option": "auto laundry",     "correct": false},
                {"option": "coin cleaner",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>laundromat</p>",
            "incorrect": "<p><span>Fail!</span>laundromat</p>" // no comma here
        },

        { // Question 8
            "q": "Choose your answer",
            "a": [
                {"option": "gas station",    "correct": true},
                {"option": "gas centre",     "correct": false},
                {"option": "gas stand",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>gas station</p>",
            "incorrect": "<p><span>Fail!</span>gas station</p>" // no comma here
        },

         { // Question 9
            "q": "Choose your answer",
            "a": [
                {"option": "hardware store",    "correct": true},
                {"option": "tool shop",    "correct": false},
                {"option": "home goods store",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>hardware store</p>",
            "incorrect": "<p><span>Fail!</span>hardware store</p>" // no comma here
        },

        { // Question 10
            "q": "Choose your answer",
            "a": [
                {"option": "men's hairdresser",    "correct": false},
                {"option": "barber",    "correct": true},
                {"option": "men's salon",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>barber</p>",
            "incorrect": "<p><span>Fail!</span>barber</p>" // no comma here
        },

        { // Question 11
            "q": "Choose your answer",
            "a": [
                {"option": "beauty salon",    "correct": true},
                {"option": "ladies hair shop",     "correct": false},
                {"option": "manicure salon",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>beauty salon</p>",
            "incorrect": "<p><span>Fail!</span>beauty salon</p>" // no comma here
        },

        { // Question 12
            "q": "Choose your answer",
            "a": [
                {"option": "high church",    "correct": false},
                {"option": "cathedral",     "correct": true},
                {"option": "temple church",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>cathedral</p>",
            "incorrect": "<p><span>Fail!</span>cathedral</p>" // no comma here
        },

        { // Question 13
            "q": "Choose your answer",
            "a": [
                {"option": "shrine",    "correct": false},
                {"option": "temple",     "correct": true},
                {"option": "Both are OK",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>temple</p>",
            "incorrect": "<p><span>Fail!</span>temple</p>" // no comma here
        },

        { // Question 14
            "q": "Choose your answer",
            "a": [
                {"option": "shrine",    "correct": true},
                {"option": "temple",     "correct": false},
                {"option": "Both are OK",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>shrine</p>",
            "incorrect": "<p><span>Fail!</span>shrine</p>" // no comma here
        },

        { // Question 15
            "q": "Choose your answer",
            "a": [
                {"option": "prison",    "correct": true},
                {"option": "joint",     "correct": false},
                {"option": "detention",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>prison</p>",
            "incorrect": "<p><span>Fail!</span>prison</p>" // no comma here
        },

        { // Question 16
            "q": "Choose your answer",
            "a": [
                {"option": "parking centre",    "correct": false},
                {"option": "car parking tower",     "correct": false},
                {"option": "parking building",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>parking building</p>",
            "incorrect": "<p><span>Fail!</span>parking building</p>" // no comma here
        },

        { // Question 17
            "q": "Choose your answer",
            "a": [
                {"option": "dental clinic",    "correct": true},
                {"option": "dentist salon",     "correct": false},
                {"option": "dental room",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>dental clinic</p>",
            "incorrect": "<p><span>Fail!</span>dental clinic</p>" // no comma here
        },

         { // Question 18
            "q": "Choose your answer",
            "a": [
                {"option": "judge house",    "correct": false},
                {"option": "law house",     "correct": false},
                {"option": "courthouse",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>courthouse</p>",
            "incorrect": "<p><span>Fail!</span>courthouse</p>" // no comma here
        },

        { // Question 19
            "q": "Choose your answer",
            "a": [
                {"option": "sewage treatment station",    "correct": false},
                {"option": "sewage treatment plant",     "correct": true},
                {"option": "sewage treatment area",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>sewage treatment plant</p>",
            "incorrect": "<p><span>Fail!</span>sewage treatment plant</p>" // no comma here
        },

        { // Question 20
            "q": "Choose your answer",
            "a": [
                {"option": "water treatment station",    "correct": false},
                {"option": "water treatment plant",     "correct": true},
                {"option": "water treatment area",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>water treatment plant</p>",
            "incorrect": "<p><span>Fail!</span>water treatment plant</p>" // no comma here
        },   

        { // Question 21
            "q": "Choose your answer",
            "a": [
                {"option": "student house",    "correct": false},
                {"option": "student apartment",     "correct": false},
                {"option": "dormitory",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>dormitory</p>",
            "incorrect": "<p><span>Fail!</span>dormitory</p>" // no comma here
        },   

        { // Question 22
            "q": "Choose your answer",
            "a": [
                {"option": "large hall",    "correct": false},
                {"option": "auditorium",     "correct": true},
                {"option": "audiovisual hall",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>auditorium</p>",
            "incorrect": "<p><span>Fail!</span>auditorium</p>" // no comma here
        },   

        { // Question 23
            "q": "Choose your answer",
            "a": [
                {"option": "old goods shop",    "correct": false},
                {"option": "antique shop",     "correct": true},
                {"option": "recycle shop",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>antique shop</p>",
            "incorrect": "<p><span>Fail!</span>antique shop</p>" // no comma here
        },  

        { // Question 24
            "q": "Choose your answer",
            "a": [
                {"option": "book shop",    "correct": false},
                {"option": "art supply shop",     "correct": false},
                {"option": "stationery shop",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>stationery shop</p>",
            "incorrect": "<p><span>Fail!</span>stationery shop</p>" // no comma here
        },  

        { // Question 25
            "q": "Choose your answer",
            "a": [
                {"option": "travel shop",    "correct": false},
                {"option": "travel agency",     "correct": true},
                {"option": "travel store",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>travel agency</p>",
            "incorrect": "<p><span>Fail!</span>travel agency</p>" // no comma here
        },  

        { // Question 26
            "q": "Choose your answer",
            "a": [
                {"option": "Japanese alcohol bar",    "correct": false},
                {"option": "Japanese drinkery",     "correct": false},
                {"option": "Japanese-style pub",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>Japanese-style pub</p>",
            "incorrect": "<p><span>Fail!</span>Japanese-style pub</p>" // no comma here
        },  

        { // Question 27
            "q": "Choose your answer",
            "a": [
                {"option": "funeral home",    "correct": true},
                {"option": "funeral joint",     "correct": false},
                {"option": "funeral place",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>funeral home</p>",
            "incorrect": "<p><span>Fail!</span>funeral home</p>" // no comma here
        },  

        { // Question 28
            "q": "Choose your answer",
            "a": [
                {"option": "social centre",    "correct": false},
                {"option": "town centre",     "correct": false},
                {"option": "community centre",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>community centre</p>",
            "incorrect": "<p><span>Fail!</span>community centre</p>" // no comma here
        },  

        { // Question 29
            "q": "Choose your answer",
            "a": [
                {"option": "brewery",    "correct": true},
                {"option": "beer factory",     "correct": false},
                {"option": "alcoholery",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>brewery</p>",
            "incorrect": "<p><span>Fail!</span>brewery</p>" // no comma here
        },  

        { // Question 30
            "q": "Choose your answer",
            "a": [
                {"option": "embassy",    "correct": true},
                {"option": "chancery",     "correct": false},
                {"option": "diplomacy",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>embassy</p>",
            "incorrect": "<p><span>Fail!</span>embassy</p>" // no comma here
        },  

    ]
};
