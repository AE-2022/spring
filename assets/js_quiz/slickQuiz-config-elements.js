// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Elements",
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
                {"option": "helium",    "correct": false},
                {"option": "hydrogen",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail.</span> Hydrogen.</p>" // no comma here
        },
        { // Question 2
            "q": "Choose your answer",
            "a": [
                {"option": "lead",    "correct": false},
                {"option": "mercury",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span> </p>",
            "incorrect": "<p><span>Fail.</span> Mercury.</p>" // no comma here
        },
       
        { // Question 3
            "q": "Choose your answer",
            "a": [
                {"option": "nitrogen",    "correct": true},
                {"option": "nitroxide",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Nitrogen.</p>" // no comma here
        },
    
        { // Question 4
            "q": "Choose your answer",
            "a": [
                {"option": "lead",    "correct": true},
                {"option": "mercury",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span> </p>",
            "incorrect": "<p><span>Fail!</span> Lead.</p>" // no comma here
        },

         { // Question 5
            "q": "Choose your answer",
            "a": [
                {"option": "キセノン",    "correct": false},
                {"option": "ゼィーノン",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> ゼィーノン.</p>" // no comma here
        },

        { // Question 6
            "q": "Choose your answer",
            "a": [
                {"option": "ferric",     "correct": false},
                {"option": "iron",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Iron.</p>" // no comma here
        },

        { // Question 7
            "q": "Choose your answer",
            "a": [
                {"option": "sulphur",    "correct": true},
                {"option": "selenuim",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Sulphur.</p>" // no comma here
        },

        { // Question 8
            "q": "Choose your answer",
            "a": [
                {"option": "aluminium",    "correct": false},
                {"option": "silver",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Aluminium.</p>" // no comma here
        },

         { // Question 9
            "q": "Choose your answer",
            "a": [
                {"option": "carbonite",    "correct": false},
                {"option": "carbon",    "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Carbon.</p>" // no comma here
        },

        { // Question 10
            "q": "Choose your answer",
            "a": [
                {"option": "chlorine",    "correct": true},
                {"option": "clorium",    "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Chlorine.</p>" // no comma here
        },

        { // Question 11
            "q": "Choose your answer",
            "a": [
                {"option": "fluorine",    "correct": true},
                {"option": "flouride",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Fluorine.</p>" // no comma here
        },

        { // Question 12
            "q": "Choose your answer",
            "a": [
                {"option": "coprium",    "correct": false},
                {"option": "copper",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Copper.</p>" // no comma here
        },

        { // Question 13
            "q": "Choose your answer",
            "a": [
                {"option": "natrium",    "correct": false},
                {"option": "sodium",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Sodium.</p>" // no comma here
        },

        { // Question 14
            "q": "Choose your answer",
            "a": [
                {"option": "calcium",    "correct": true},
                {"option": "callium",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Calcium.</p>" // no comma here
        },

        { // Question 15
            "q": "Choose your answer",
            "a": [
                {"option": "ニオン",    "correct": true},
                {"option": "ネオン",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> ニオン.</p>" // no comma here
        },

        { // Question 16
            "q": "Choose your answer",
            "a": [
                {"option": "kallium",    "correct": false},
                {"option": "potassium",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Potassium.</p>" // no comma here
        },

        { // Question 17
            "q": "Choose your answer",
            "a": [
                {"option": "sodium bicarbonate",    "correct": true},
                {"option": "sodium dioxide",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Sodium Bicarbonate.</p>" // no comma here
        },

         { // Question 18
            "q": "Choose your answer",
            "a": [
                {"option": "hydrogen peroxide",    "correct": true},
                {"option": "hydrogen dioxide",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Hydrogen Peroxide.</p>" // no comma here
        },

        { // Question 19
            "q": "Choose your answer",
            "a": [
                {"option": "sulphuric acid",    "correct": true},
                {"option": "sulphur hydroxate",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Sulphuric acid.</p>" // no comma here
        },

        { // Question 20
            "q": "Choose your answer",
            "a": [
                {"option": "sodium chloride",    "correct": true},
                {"option": "sodium chlorate",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Sodium chloride.</p>" // no comma here
        },   

        { // Question 21
            "q": "Choose your answer",
            "a": [
                {"option": "0 milligrams",    "correct": false},
                {"option": "0.2 milligrams",     "correct": true},
                {"option": "12 milligrams",     "correct": false},
                {"option": "40 milligrams",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> 0.2 milligrams.</p>" // no comma here
        },   

    ]
};
