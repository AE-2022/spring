// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Colours and Textures",
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
                {"option": "lime green",    "correct": true},
                {"option": " emerald green",    "correct": false},
                {"option": "sea green",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>lime green</p>",
            "incorrect": "<p><span>Fail!</span>lime green</p>" // no comma here
        },
        { // Question 2
            "q": "Choose your answer",
            "a": [
                {"option": "light orange",    "correct": false},
                {"option": "tan",    "correct": false},
                {"option": "ochre",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>ochre</p>",
            "incorrect": "<p><span>Fail!</span>ochre</p>" // no comma here
        },
       
        { // Question 3
            "q": "Choose your answer",
            "a": [
                {"option": "khaki",    "correct": true},
                {"option": "kaki",    "correct": false},
                {"option": "kahki",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>khaki</p>",
            "incorrect": "<p><span>Fail!</span>khaki</p>" // no comma here
        },
    
        { // Question 4
            "q": "Choose your answer",
            "a": [
                {"option": "light orange",    "correct": false},
                {"option": "pale orange",    "correct": false},
                {"option": "both are OK",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>both are OK</p>",
            "incorrect": "<p><span>Fail!</span>both are OK</p>" // no comma here
        },

         { // Question 5
            "q": "Choose your answer",
            "a": [
                {"option": "orange",    "correct": false},
                {"option": "amber",    "correct": false},
                {"option": "both are OK",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>both are OK</p>",
            "incorrect": "<p><span>Fail!</span>both are OK</p>" // no comma here
        },

        { // Question 6
            "q": "Choose your answer",
            "a": [
                {"option": "violet",     "correct": true},
                {"option": "pansy",    "correct": false},
                {"option": "ambrosia",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>violet</p>",
            "incorrect": "<p><span>Fail!</span>violet</p>" // no comma here
        },

        { // Question 7
            "q": "Choose your answer",
            "a": [
                {"option": "royal blue",    "correct": false},
                {"option": "sea blue",    "correct": false},
                {"option": "navy blue",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>navy blue</p>",
            "incorrect": "<p><span>Fail!<b</span>navy blue</p>" // no comma here
        },

        { // Question 8
            "q": "Choose your answer",
            "a": [
                {"option": "colour spectrum",    "correct": true},
                {"option": "colour space",    "correct": false},
                {"option": "colour band",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>colour spectrum</p>",
            "incorrect": "<p><span>Fail!</span>colour spectrum</p>" // no comma here
        },

         { // Question 9
            "q": "Choose your answer",
            "a": [
                {"option": "extraviolet",    "correct": false},
                {"option": "infraviolet",    "correct": false},
                {"option": "ultraviolet",    "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>ultraviolet</p>",
            "incorrect": "<p><span>Fail!</span>ultraviolet</p>" // no comma here
        },

        { // Question 10
            "q": "Choose your answer",
            "a": [
                {"option": "extrared",    "correct": false},
                {"option": "infrared",    "correct": true},
                {"option": "ultrared",    "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>infrared</p>",
            "incorrect": "<p><span>Fail!</span>infrared</p>" // no comma here
        },

        { // Question 11
            "q": "Choose your answer",
            "a": [
                {"option": "rough",    "correct": true},
                {"option": "jagged",    "correct": false},
                {"option": "grated",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>rough</p>",
            "incorrect": "<p><span>Fail!</span>rough</p>" // no comma here
        },

        { // Question 12
            "q": "Choose your answer",
            "a": [
                {"option": "stringy",    "correct": false},
                {"option": "silky",    "correct": true},
                {"option": "softly",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>silky</p>",
            "incorrect": "<p><span>Fail!</span>silky</p>" // no comma here
        },

        { // Question 13
            "q": "Choose your answer",
            "a": [
                {"option": "smooth",    "correct": true},
                {"option": "jagged",    "correct": false},
                {"option": "serrated",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>smooth</p>",
            "incorrect": "<p><span>Fail!</span>smooth</p>" // no comma here
        },

        { // Question 14
            "q": "Choose your answer",
            "a": [
                {"option": "flowery",    "correct": false},
                {"option": "powdery",    "correct": true},
                {"option": "dusty",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>powdery</p>",
            "incorrect": "<p><span>Fail!</span>powdery</p>" // no comma here
        },

        { // Question 15
            "q": "Choose your answer",
            "a": [
                {"option": "ziggy",    "correct": false},
                {"option": "zaggy",    "correct": false},
                {"option": "jagged",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>broom</p>",
            "incorrect": "<p><span>Fail!</span>broom</p>" // no comma here
        },

        { // Question 16
            "q": "Choose your answer",
            "a": [
                {"option": "greasy",    "correct": true},
                {"option": "squishy",    "correct": false},
                {"option": "moist",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>greasy</p>",
            "incorrect": "<p><span>Fail!</span>greasy</p>" // no comma here
        },

        { // Question 17
            "q": "Choose your answer",
            "a": [
                {"option": "runny",    "correct": false},
                {"option": "sticky",    "correct": false},
                {"option": "slimey",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>slimey</p>",
            "incorrect": "<p><span>Fail!</span>slimey</p>" // no comma here
        },

         { // Question 18
            "q": "Choose your answer",
            "a": [
                {"option": "slimey",    "correct": false},
                {"option": "sticky",    "correct": true},
                {"option": "runny",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>sticky</p>",
            "incorrect": "<p><span>Fail!</span>sticky</p>" // no comma here
        },

        { // Question 19
            "q": "Choose your answer",
            "a": [
                {"option": "rough",    "correct": false},
                {"option": "coarse",    "correct": false},
                {"option": "both are OK",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>both are OK</p>",
            "incorrect": "<p><span>Fail!</span>both are OK</p>" // no comma here
        },

        { // Question 20
            "q": "Choose your answer",
            "a": [
                {"option": "fluffy",    "correct": true},
                {"option": "molty",    "correct": false},
                {"option": "whispy",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>fluffy</p>",
            "incorrect": "<p><span>Fail!</span>fluffy</p>" // no comma here
        }, 

    ]
};
