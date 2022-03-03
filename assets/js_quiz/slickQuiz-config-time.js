// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Time",
        "main":    "",
        "results": "<h5>Test next lesson.</h5>",
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
                {"option": "first half",    "correct": false},
                {"option": "first period",    "correct": false},
                {"option": "first semester",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail.</span> First semester.</p>" // no comma here
        },
        { // Question 2
            "q": "Choose your answer",
            "a": [
                {"option": "sandglass",    "correct": false},
                {"option": "sand timer",    "correct": false},
                {"option": "hourglass",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span> </p>",
            "incorrect": "<p><span>Fail.</span> Hourglass.</p>" // no comma here
        },
       
        { // Question 3
            "q": "Choose your answer",
            "a": [
                {"option": "overtime",    "correct": true},
                {"option": "extra time",     "correct": false},
                {"option": "excess time",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Overtime.</p>" // no comma here
        },
    
        { // Question 4
            "q": "Choose your answer",
            "a": [
                {"option": "jump year",    "correct": false},
                {"option": "extra-day year",     "correct": false},
                {"option": "leap year",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span> </p>",
            "incorrect": "<p><span>Fail!</span> Leap year.</p>" // no comma here
        },

         { // Question 5
            "q": "Choose your answer",
            "a": [
                {"option": "business year",    "correct": false},
                {"option": "money year",     "correct": false},
                {"option": "fiscal year",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Fiscal year.</p>" // no comma here
        },

        { // Question 6
            "q": "Choose your answer",
            "a": [
                {"option": "century",    "correct": false},
                {"option": "thousand era",     "correct": false},
                {"option": "millennium",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Millennium.</p>" // no comma here
        },

        { // Question 7
            "q": "Choose your answer",
            "a": [
                {"option": "the day before last",    "correct": false},
                {"option": "the day before yesterday",     "correct": false},
                {"option": "both are OK",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Both are OK.</p>" // no comma here
        },

        { // Question 8
            "q": "Choose your answer",
            "a": [
                {"option": "dusk",    "correct": false},
                {"option": "evening",     "correct": true},
                {"option": "night",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Evening.</p>" // no comma here
        },

         { // Question 9
            "q": "Choose your answer",
            "a": [
                {"option": "afternoon",    "correct": true},
                {"option": "daytime",    "correct": false},
                {"option": "dusk",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Afternoon.</p>" // no comma here
        },

        { // Question 10
            "q": "Choose your answer",
            "a": [
                {"option": "dawn",    "correct": false},
                {"option": "dusk",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Dusk.</p>" // no comma here
        },

        { // Question 11
            "q": "Choose your answer",
            "a": [
                {"option": "dawn",    "correct": true},
                {"option": "dusk",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Dawn.</p>" // no comma here
        },

        { // Question 12
            "q": "Choose your answer",
            "a": [
                {"option": "sun clock",    "correct": false},
                {"option": "daylight clock",     "correct": false},
                {"option": "sundial",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Sundial.</p>" // no comma here
        },

        { // Question 13
            "q": "Choose your answer",
            "a": [
                {"option": "annual",    "correct": false},
                {"option": "deca-year",     "correct": false},
                {"option": "decade",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Decade.</p>" // no comma here
        },

        { // Question 14
            "q": "Choose your answer",
            "a": [
                {"option": "clock face",    "correct": true},
                {"option": "clock circle",     "correct": false},
                {"option": "clock front",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Clock face.</p>" // no comma here
        },

        { // Question 15
            "q": "Choose your answer",
            "a": [
                {"option": "midnight",    "correct": true},
                {"option": "midday",     "correct": false},
                {"option": "noon",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Midnight.</p>" // no comma here
        },

        { // Question 16
            "q": "Choose your answer",
            "a": [
                {"option": "the day after tomorrow",    "correct": true},
                {"option": "the day next day",     "correct": false},
                {"option": "tomorrow next",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> The day after tomorrow.</p>" // no comma here
        },

        { // Question 17
            "q": "Choose your answer",
            "a": [
                {"option": "midday",    "correct": false},
                {"option": "noon",     "correct": false},
                {"option": "Both are OK",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Both are OK.</p>" // no comma here
        },

         { // Question 18
            "q": "Choose your answer",
            "a": [
                {"option": "century",    "correct": true},
                {"option": "decade",     "correct": false},
                {"option": "millennium",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Century.</p>" // no comma here
        },

        { // Question 19
            "q": "Choose your answer",
            "a": [
                {"option": "Greenwich mean time",    "correct": true},
                {"option": "International time",     "correct": false},
                {"option": "World standard time",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Greenwich mean time.</p>" // no comma here
        },

        { // Question 20
            "q": "Choose your answer",
            "a": [
                {"option": "bed hour",    "correct": false},
                {"option": "time to bed",     "correct": false},
                {"option": "bedtime",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Bedtime.</p>" // no comma here
        },   

        { // Question 21
            "q": "Choose your answer",
            "a": [
                {"option": "eon",    "correct": false},
                {"option": "era",     "correct": true},
                {"option": "time",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Era.</p>" // no comma here
        },   

        { // Question 22
            "q": "Choose your answer",
            "a": [
                {"option": "second semester",    "correct": true},
                {"option": "second period",     "correct": false},
                {"option": "second era",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Second semester.</p>" // no comma here
        },   

        { // Question 23
            "q": "Choose your answer",
            "a": [
                {"option": "year",    "correct": false},
                {"option": "all year",     "correct": false},
                {"option": "annual",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Annual.</p>" // no comma here
        },  

        { // Question 24
            "q": "Choose your answer",
            "a": [
                {"option": "pendulum clock",    "correct": false},
                {"option": "tall father clock",     "correct": false},
                {"option": "grandfather clock",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Grandfather clock.</p>" // no comma here
        },  

        { // Question 25
            "q": "Choose your answer",
            "a": [
                {"option": "spring forward time",    "correct": false},
                {"option": "day-extend time",     "correct": false},
                {"option": "daylight savings time",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Daylight savings time.</p>" // no comma here
        },  

        { // Question 26
            "q": "Choose your answer",
            "a": [
                {"option": "morning",    "correct": true},
                {"option": "night",     "correct": false},
                {"option": "dawn",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Morning.</p>" // no comma here
        },  

        { // Question 27
            "q": "Choose your answer",
            "a": [
                {"option": "double week",    "correct": false},
                {"option": "fortnight",     "correct": true},
                {"option": "both are OK",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Fortnight.</p>" // no comma here
        },  


        { // Question 28
            "q": "Choose your answer",
            "a": [
                {"option": "hour hand",    "correct": true},
                {"option": "hour line",     "correct": false},
                {"option": "hour pointer",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Hour hand.</p>" // no comma here
        },  


        { // Question 29
            "q": "Choose your answer",
            "a": [
                {"option": "minute hand",    "correct": true},
                {"option": "minute lever",     "correct": false},
                {"option": "minute pointer",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Minute hand.</p>" // no comma here
        },  

        { // Question 30
            "q": "Choose your answer",
            "a": [
                {"option": "international time line",    "correct": false},
                {"option": "international date line",     "correct": true},
                {"option": "international day line",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> International date line.</p>" // no comma here
        },  


    ]
};
