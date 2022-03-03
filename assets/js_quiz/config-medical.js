var quizJSON = {
    "info": {
        "name":    "Medical",
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
                {"option": "drug shop",    "correct": false},
                {"option": "druggist",     "correct": false},
                {"option": "pharmacy",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>pharmacy</p>",
            "incorrect": "<p><span>Fail!</span>pharmacy</p>" // no comma here
        },
        { // Question 2
            "q": "Choose your answer",
            "a": [
                {"option": "pharmacy",    "correct": false},
                {"option": "drug order",     "correct": false},
                {"option": "prescription",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>prescription</p>",
            "incorrect": "<p><span>Fail!</span>prescription</p>" // no comma here
        },
       
        { // Question 3
            "q": "Choose your answer",
            "a": [
                {"option": "shot",    "correct": false},
                {"option": "injection",     "correct": false},
                {"option": "both are OK",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>Both are OK</p>",
            "incorrect": "<p><span>Fail!</span>Both are OK</p>" // no comma here
        },
    
        { // Question 4
            "q": "Choose your answer",
            "a": [
                {"option": "health synopsis",    "correct": false},
                {"option": "health scan",     "correct": false},
                {"option": "health screening",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>health screening</p>",
            "incorrect": "<p><span>Fail!</span>health screening</p>" // no comma here
        },

         { // Question 5
            "q": "Choose your answer",
            "a": [
                {"option": "emergency care unit",    "correct": false},
                {"option": "intensive care unit",     "correct": true},
                {"option": "vital medical unit",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>intensive care unit</p>",
            "incorrect": "<p><span>Fail!</span>intensive care unit</p>" // no comma here
        },

        { // Question 6
            "q": "Choose your answer",
            "a": [
                {"option": "brace",    "correct": false},
                {"option": "cast",     "correct": true},
                {"option": "gypsum",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>cast</p>",
            "incorrect": "<p><span>Fail!</span>cast</p>" // no comma here
        },

        { // Question 7
            "q": "Choose your answer",
            "a": [
                {"option": "acute pain",    "correct": true},
                {"option": "chronic pain",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>acute pain</p>",
            "incorrect": "<p><span>Fail!</span>acute pain</p>" // no comma here
        },

        { // Question 8
            "q": "Choose your answer",
            "a": [
                {"option": "acute pain",    "correct": false},
                {"option": "chronic pain",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>chronic pain</p>",
            "incorrect": "<p><span>Fail!</span>chronic pain</p>" // no comma here
        },

         { // Question 9
            "q": "Choose your answer",
            "a": [
                {"option": "anaemia",    "correct": true},
                {"option": "angina",    "correct": false},
                {"option": "amnesia",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>anaemia</p>",
            "incorrect": "<p><span>Fail!</span>anaemia</p>" // no comma here
        },

        { // Question 10
            "q": "Choose your answer",
            "a": [
                {"option": "evaluation",    "correct": false},
                {"option": "prognosis",    "correct": false},
                {"option": "diagnosis",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>diagnosis</p>",
            "incorrect": "<p><span>Fail!</span>diagnosis</p>" // no comma here
        },

        { // Question 11
            "q": "Choose your answer",
            "a": [
                {"option": "IV",    "correct": true},
                {"option": "AV",     "correct": false},
                {"option": "OV",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>IV</p>",
            "incorrect": "<p><span>Fail!</span>IV</p>" // no comma here
        },

        { // Question 12
            "q": "Choose your answer",
            "a": [
                {"option": "after effect",    "correct": false},
                {"option": "side effect",     "correct": true},
                {"option": "post effect",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>side effect</p>",
            "incorrect": "<p><span>Fail!</span>side effect</p>" // no comma here
        },

        { // Question 13
            "q": "Choose your answer",
            "a": [
                {"option": "immunization",    "correct": true},
                {"option": "disease protection",     "correct": false},
                {"option": "drug therapy",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>immunization</p>",
            "incorrect": "<p><span>Fail!</span>immunization</p>" // no comma here
        },

        { // Question 14
            "q": "Choose your answer",
            "a": [
                {"option": "wacsine",    "correct": false},
                {"option": "vaccine",     "correct": true},
                {"option": "vacsene",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>vaccine</p>",
            "incorrect": "<p><span>Fail!</span>vaccine</p>" // no comma here
        },

        { // Question 15
            "q": "Choose your answer",
            "a": [
                {"option": "stilts",    "correct": false},
                {"option": "braces",     "correct": false},
                {"option": "crutches",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>crutches</p>",
            "incorrect": "<p><span>Fail!</span>crutches</p>" // no comma here
        },

        { // Question 16
            "q": "Choose your answer",
            "a": [
                {"option": "CPR",    "correct": true},
                {"option": "PRC",     "correct": false},
                {"option": "RPC",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>CPR</p>",
            "incorrect": "<p><span>Fail!</span>CPR</p>" // no comma here
        },

        { // Question 17
            "q": "Choose your answer",
            "a": [
                {"option": "ward",    "correct": true},
                {"option": "barracks",     "correct": false},
                {"option": "patient room",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>ward</p>",
            "incorrect": "<p><span>Fail!</span>ward</p>" // no comma here
        },

         { // Question 18
            "q": "Choose your answer",
            "a": [
                {"option": "sign",    "correct": false},
                {"option": "symptom",     "correct": true},
                {"option": "indication",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>symptom</p>",
            "incorrect": "<p><span>Fail!</span>symptom</p>" // no comma here
        },

        { // Question 19
            "q": "Choose your answer",
            "a": [
                {"option": "client",    "correct": false},
                {"option": "inmate",     "correct": false},
                {"option": "patient",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>patient</p>",
            "incorrect": "<p><span>Fail!</span>patient</p>" // no comma here
        },

        { // Question 20
            "q": "Choose your answer",
            "a": [
                {"option": "surgeon",    "correct": true},
                {"option": "doctor",     "correct": false},
                {"option": "specialist",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>surgeon</p>",
            "incorrect": "<p><span>Fail!</span>surgeon</p>" // no comma here
        },   

        { // Question 21
            "q": "Choose your answer",
            "a": [
                {"option": "incorrect positive",    "correct": false},
                {"option": "false negative",     "correct": true},
                {"option": "untrue result",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>false negative</p>",
            "incorrect": "<p><span>Fail!</span>false negative</p>" // no comma here
        },   

        { // Question 22
            "q": "Choose your answer",
            "a": [
                {"option": "anaemia",    "correct": false},
                {"option": "arrhythmia",     "correct": false},
                {"option": "asthma",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>asthma</p>",
            "incorrect": "<p><span>Fail!</span>asthma</p>" // no comma here
        },   

        { // Question 23
            "q": "Choose your answer",
            "a": [
                {"option": "fever",    "correct": true},
                {"option": "heat",     "correct": false},
                {"option": "flash",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>fever</p>",
            "incorrect": "<p><span>Fail!</span>fever</p>" // no comma here
        },  

        { // Question 24
            "q": "Choose your answer",
            "a": [
                {"option": "dizzy",    "correct": true},
                {"option": "spinning",     "correct": false},
                {"option": "flush",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>dizzy</p>",
            "incorrect": "<p><span>Fail!</span>dizzy</p>" // no comma here
        },  

        { // Question 25
            "q": "Choose your answer",
            "a": [
                {"option": "organism",    "correct": false},
                {"option": "germ",     "correct": true},
                {"option": "both are OK",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>germ</p>",
            "incorrect": "<p><span>Fail!</span>germ</p>" // no comma here
        },  

        { // Question 26
            "q": "Choose your answer",
            "a": [
                {"option": "ouch!",    "correct": true},
                {"option": "eek!",     "correct": false},
                {"option": "oomph!",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>ouch!</p>",
            "incorrect": "<p><span>Fail!</span>ouch!</p>" // no comma here
        },  
    ]
};
