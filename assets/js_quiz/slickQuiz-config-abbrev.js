// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Abbreviations",
        "main":    "",
        "results": "<h5>Block 1 test study.</h5>",
        "level1":  "Excellent!",
        "level2":  "Good!",
        "level3":  "Average",
        "level4":  "Bad",
        "level5":  "Shocking!" // no comma here
    },
    "questions": [
        { // Question 1
            "q": "St. = ?",
            "a": [
                {"option": "strong",    "correct": false},
                {"option": "street",    "correct": true},
                {"option": "station",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!<br>St. = street</span></p>",
            "incorrect": "<p><span>Fail.</span> St. = street</p>" // no comma here
        },
        { // Question 2
            "q": "Rd. = ?",
            "a": [
                {"option": "round",    "correct": false},
                {"option": "road",    "correct": true},
                {"option": "random",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!<br>Rd. = road</span> </p>",
            "incorrect": "<p><span>Fail.</span> Rd. = road</p>" // no comma here
        },
       
        { // Question 3
            "q": "Hwy. = ?",
            "a": [
                {"option": "highway",    "correct": true},
                {"option": "how are you",     "correct": false},
                {"option": "halfway",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!<br>Hwy. = highway</span></p>",
            "incorrect": "<p><span>Fail!</span> Hwy. = highway</p>" // no comma here
        },
    
        { // Question 4
            "q": "Ave. = ?",
            "a": [
                {"option": "average",    "correct": false},
                {"option": "all very excellent",     "correct": false},
                {"option": "avenue",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!<br>Ave. = avenue</span> </p>",
            "incorrect": "<p><span>Fail!</span> Ave. = avenue</p>" // no comma here
        },

         { // Question 5
            "q": "N = ?",
            "a": [
                {"option": "nitrogen",    "correct": false},
                {"option": "north",     "correct": false},
                {"option": "both are OK",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!<br>N = nitrogen, north</span></p>",
            "incorrect": "<p><span>Fail!</span> N = nitrogen, north</p>" // no comma here
        },

        { // Question 6
            "q": "S = ?",
            "a": [
                {"option": "sulphur",    "correct": false},
                {"option": "south",     "correct": false},
                {"option": "both are OK",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!<br>S = sulphur, south</span></p>",
            "incorrect": "<p><span>Fail!</span> S = sulphur, south</p>" // no comma here
        },

        { // Question 7
            "q": "E = ?",
            "a": [
                {"option": "east",    "correct": true},
                {"option": "europium",     "correct": false},
                {"option": "both are OK",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!<br>E = East</span></p>",
            "incorrect": "<p><span>Fail!</span> E = East</p>" // no comma here
        },

        { // Question 8
            "q": "W = ?",
            "a": [
                {"option": "week",    "correct": false},
                {"option": "west",     "correct": true},
                {"option": "both are OK",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!<br>W = West</span></p>",
            "incorrect": "<p><span>Fail!</span> W = West</p>" // no comma here
        },

         { // Question 9
            "q": "NW = ?",
            "a": [
                {"option": "north west",    "correct": true},
                {"option": "no way",    "correct": false},
                {"option": "new world",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!<br>NW = North West</span></p>",
            "incorrect": "<p><span>Fail!</span> NW = North West</p>" // no comma here
        },

        { // Question 10
            "q": "Prof. = ?",
            "a": [
                {"option": "professor",    "correct": true},
                {"option": "professional",    "correct": false},
                {"option": "profit",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!<br>Prof = Professor</span></p>",
            "incorrect": "<p><span>Fail!</span> Prof = Professor</p>" // no comma here
        },

        { // Question 11
            "q": "Au = ?",
            "a": [
                {"option": "silver",    "correct": false},
                {"option": "bronze",     "correct": false},
                {"option": "gold",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!<br>Au = gold</span></p>",
            "incorrect": "<p><span>Fail!</span> Au = gold</p>" // no comma here
        },

        { // Question 12
            "q": "K = ?",
            "a": [
                {"option": "krypton",    "correct": false},
                {"option": "sodium",     "correct": false},
                {"option": "potassium",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!<br>K = potassium カリウム</span></p>",
            "incorrect": "<p><span>Fail!</span> K = potassium カリウム</p>" // no comma here
        },

        { // Question 13
            "q": "Na = ?",
            "a": [
                {"option": "sodium",    "correct": true},
                {"option": "natrium",     "correct": false},
                {"option": "name",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!<br>Na = sodium ナトリウム</span></p>",
            "incorrect": "<p><span>Fail!</span> Na = sodium ナトリウム</p>" // no comma here
        },

        { // Question 14
            "q": "Pb = ?",
            "a": [
                {"option": "lead",    "correct": true},
                {"option": "plumbum",     "correct": false},
                {"option": "public broadcast",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!<br>Pb = lead なまり</span></p>",
            "incorrect": "<p><span>Fail!</span> Pb = lead なまり</p>" // no comma here
        },

        { // Question 15
            "q": "N = ?",
            "a": [
                {"option": "natrium",    "correct": false},
                {"option": "neon",     "correct": false},
                {"option": "nitrogen",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!<br>N = nitrogen ちっそ</span></p>",
            "incorrect": "<p><span>Fail!</span> N = nitrogen ちっそ</p>" // no comma here
        },

        { // Question 16
            "q": "AUS = ?",
            "a": [
                {"option": "Austria",    "correct": false},
                {"option": "Australia",     "correct": true},
                {"option": "United States",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!<br>AUS = Australia</span></p>",
            "incorrect": "<p><span>Fail!</span> AUS = Australia</p>" // no comma here
        },

        { // Question 17
            "q": "AUT = ?",
            "a": [
                {"option": "Australia",    "correct": false},
                {"option": "Austria",     "correct": true},
                {"option": "United States",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!<br>AUT = Austria</span></p>",
            "incorrect": "<p><span>Fail!</span> AUT = Austria</p>" // no comma here
        },

         { // Question 18
            "q": "SUI = ?",
            "a": [
                {"option": "Sweden",    "correct": false},
                {"option": "Switzerland",     "correct": true},
                {"option": "Sri Lanka",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!<br>SUI = Switzerland</span></p>",
            "incorrect": "<p><span>Fail!</span> SUI = Switzerland</p>" // no comma here
        },

        { // Question 19
            "q": "CHN = ?",
            "a": [
                {"option": "Chile",    "correct": false},
                {"option": "China",     "correct": true},
                {"option": "Cambodia",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!<br>CHN = China</span></p>",
            "incorrect": "<p><span>Fail!</span> CHN = China</p>" // no comma here
        },

        { // Question 20
            "q": "ESP = ?",
            "a": [
                {"option": "Estonia",    "correct": false},
                {"option": "Portugal",     "correct": false},
                {"option": "Spain",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!<br>ESP = Spain</span></p>",
            "incorrect": "<p><span>Fail!</span> ESP = Spain</p>" // no comma here
        },   

    ]
};
