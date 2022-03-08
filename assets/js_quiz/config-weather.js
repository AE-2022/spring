var quizJSON = {
    "info": {
        "name":    "Weather quiz",
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
                {"option": "snow fall",    "correct": false},
                {"option": "blizzard",    "correct": true},
                {"option": "avalanche",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>blizzard</p>",
            "incorrect": "<p><span>Fail!</span>blizzard</p>" // no comma here
        },
        { // Question 2
            "q": "Choose your answer",
            "a": [
                {"option": "wet air",    "correct": false},
                {"option": "moist",    "correct": false},
                {"option": "humid",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>humid</p>",
            "incorrect": "<p><span>Fail!</span>humid</p>" // no comma here
        },
       
        { // Question 3
            "q": "Choose your answer",
            "a": [
                {"option": "misty",    "correct": false},
                {"option": "spray",    "correct": false},
                {"option": "fog",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>fog</p>",
            "incorrect": "<p><span>Fail!</span>fog</p>" // no comma here
        },
    
        { // Question 4
            "q": "Choose your answer",
            "a": [
                {"option": "typhoon",    "correct": true},
                {"option": "typhun",    "correct": false},
                {"option": "tyfoon",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>typhoon</p>",
            "incorrect": "<p><span>Fail!</span>typhoon</p>" // no comma here
        },

         { // Question 5
            "q": "Choose your answer",
            "a": [
                {"option": "cyclone",    "correct": true},
                {"option": "hemiclone",    "correct": false},
                {"option": "monsoon",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>cyclone</p>",
            "incorrect": "<p><span>Fail!</span>cyclone</p>" // no comma here
        },

        { // Question 6
            "q": "Choose your answer",
            "a": [
                {"option": "gentle wind",    "correct": false},
                {"option": "gust",    "correct": false},
                {"option": "breeze",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>breeze</p>",
            "incorrect": "<p><span>Fail!</span>breeze</p>" // no comma here
        },

        { // Question 7
            "q": "Choose your answer",
            "a": [
                {"option": "breeze",    "correct": false},
                {"option": "gust",    "correct": true},
                {"option": "windy",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>gust</p>",
            "incorrect": "<p><span>Fail!</span>gust</p>" // no comma here
        },

        { // Question 8
            "q": "Choose your answer",
            "a": [
                {"option": "ice rock",    "correct": false},
                {"option": "crevasse",    "correct": false},
                {"option": "hail",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>hail</p>",
            "incorrect": "<p><span>Fail!</span>hail</p>" // no comma here
        },

         { // Question 9
            "q": "Choose your answer",
            "a": [
                {"option": "heatwave",    "correct": true},
                {"option": "broiling",    "correct": false},
                {"option": "hot snap",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>heatwave</p>",
            "incorrect": "<p><span>Fail!</span>heatwave</p>" // no comma here
        },

        { // Question 10
            "q": "Choose your answer",
            "a": [
                {"option": "warm line",    "correct": false},
                {"option": "warm border",    "correct": false},
                {"option": "warm front",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>warm front</p>",
            "incorrect": "<p><span>Fail!</span>warm front</p>" // no comma here
        },

        { // Question 11
            "q": "Choose your answer",
            "a": [
                {"option": "cold front",    "correct": true},
                {"option": "cold line",    "correct": false},
                {"option": "cold border",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>cold front</p>",
            "incorrect": "<p><span>Fail!</span>cold front</p>" // no comma here
        },

        { // Question 12
            "q": "Choose your answer",
            "a": [
                {"option": "clouded",    "correct": false},
                {"option": "undercast",    "correct": false},
                {"option": "overcast",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>overcast</p>",
            "incorrect": "<p><span>Fail!</span>overcast</p>" // no comma here
        },

        { // Question 13
            "q": "Choose your answer",
            "a": [
                {"option": "mostly cloudy",    "correct": false},
                {"option": "half sunny",    "correct": false},
                {"option": "partly cloudy",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>partly cloudy</p>",
            "incorrect": "<p><span>Fail!</span>partly cloudy</p>" // no comma here
        },

        { // Question 14
            "q": "Choose your answer",
            "a": [
                {"option": "light weather",    "correct": false},
                {"option": "mild weather",    "correct": true},
                {"option": "average weather",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>mild weather</p>",
            "incorrect": "<p><span>Fail!</span>mild weather</p>" // no comma here
        },

        { // Question 15
            "q": "Choose your answer",
            "a": [
                {"option": "skall",    "correct": false},
                {"option": "squall",    "correct": true},
                {"option": "scaul",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>squall</p>",
            "incorrect": "<p><span>Fail!</span>squall</p>" // no comma here
        },

        { // Question 16
            "q": "Choose your answer",
            "a": [
                {"option": "misty",    "correct": false},
                {"option": "showery",    "correct": false},
                {"option": "drizzle",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>drizzle</p>",
            "incorrect": "<p><span>Fail!</span>drizzle</p>" // no comma here
        },

        { // Question 17
            "q": "Choose your answer",
            "a": [
                {"option": "light cloud",    "correct": false},
                {"option": "high cloud",    "correct": true},
                {"option": "jet cloud",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>high cloud</p>",
            "incorrect": "<p><span>Fail!</span>high cloud</p>" // no comma here
        },

         { // Question 18
            "q": "Choose your answer",
            "a": [
                {"option": "icicle",    "correct": false},
                {"option": "sheet ice",    "correct": false},
                {"option": "frost",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>frost</p>",
            "incorrect": "<p><span>Fail!</span>frost</p>" // no comma here
        },

        { // Question 19
            "q": "Choose your answer",
            "a": [
                {"option": "weather forecast",    "correct": false},
                {"option": "weather report",    "correct": false},
                {"option": "both are OK",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>both are OK</p>",
            "incorrect": "<p><span>Fail!</span>both are OK</p>" // no comma here
        },

        { // Question 20
            "q": "Choose your answer",
            "a": [
                {"option": "chilled",    "correct": false},
                {"option": "chilly",    "correct": true},
                {"option": "chillness",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>chilly</p>",
            "incorrect": "<p><span>Fail!</span>chilly</p>" // no comma here
        },   

        { // Question 21
            "q": "Choose your answer",
            "a": [
                {"option": "meteorology",    "correct": true},
                {"option": "weatherology",    "correct": false},
                {"option": "climatology",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>meteorology</p>",
            "incorrect": "<p><span>Fail!</span>meteorology</p>" // no comma here
        },   

        { // Question 22
            "q": "Choose your answer",
            "a": [
                {"option": "raining butterflies and birds",    "correct": false},
                {"option": "raining mice and chickens",    "correct": false},
                {"option": "raining cats and dogs",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>raining cats and dogs</p>",
            "incorrect": "<p><span>Fail!</span>raining cats and dogs</p>" // no comma here
        },   

    ]
};
