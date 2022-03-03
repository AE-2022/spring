// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Family",
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
                {"option": "nephew",    "correct": false},
                {"option": "cousin",    "correct": true},
                {"option": "relative",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail.</span>cousin</p>" // no comma here
        },
        { // Question 2
            "q": "Choose your answer",
            "a": [
                {"option": "nephew",    "correct": false},
                {"option": "cousin",    "correct": false},
                {"option": "niece",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span> </p>",
            "incorrect": "<p><span>Fail.</span>niece</p>" // no comma here
        },
       
        { // Question 3
            "q": "Choose your answer",
            "a": [
                {"option": "nephew",    "correct": true},
                {"option": "cousin",     "correct": false},
                {"option": "niece",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>nephew</p>" // no comma here
        },
    
        { // Question 4
            "q": "Choose your answer",
            "a": [
                {"option": "toddler",    "correct": true},
                {"option": "infant",     "correct": false},
                {"option": "both are OK",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span> </p>",
            "incorrect": "<p><span>Fail!</span>toddler</p>" // no comma here
        },

         { // Question 5
            "q": "Choose your answer",
            "a": [
                {"option": "relations",    "correct": false},
                {"option": "relatives",     "correct": false},
                {"option": "both are OK",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>both are OK</p>" // no comma here
        },

        { // Question 6
            "q": "Choose your answer",
            "a": [
                {"option": "father",    "correct": false},
                {"option": "husband",     "correct": true},
                {"option": "wife",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>husband</p>" // no comma here
        },

        { // Question 7
            "q": "Choose your answer",
            "a": [
                {"option": "mother",    "correct": false},
                {"option": "husband",     "correct": false},
                {"option": "wife",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>wife</p>" // no comma here
        },

        { // Question 8
            "q": "Choose your answer",
            "a": [
                {"option": "daughter in-law",    "correct": false},
                {"option": "great granddaughter",     "correct": false},
                {"option": "granddaughter",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>granddaughter</p>" // no comma here
        },

         { // Question 9
            "q": "Choose your answer",
            "a": [
                {"option": "son in-law",    "correct": false},
                {"option": "great grandson",    "correct": true},
                {"option": "grandson",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>great grandson</p>" // no comma here
        },

        { // Question 10
            "q": "Choose your answer",
            "a": [
                {"option": "mother-in-family",    "correct": false},
                {"option": "mother-in-step",    "correct": false},
                {"option": "mother-in-law",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>mother-in-law</p>" // no comma here
        },

        { // Question 11
            "q": "Choose your answer",
            "a": [
                {"option": "half sister",    "correct": false},
                {"option": "stepsister",     "correct": false},
                {"option": "both are OK",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>both are OK.</p>" // no comma here
        },

        { // Question 12
            "q": "Choose your answer",
            "a": [
                {"option": "mourner",    "correct": false},
                {"option": "widow",     "correct": true},
                {"option": "both are OK",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>widow</p>" // no comma here
        },

        { // Question 13
            "q": "Choose your answer",
            "a": [
                {"option": "non-worker",    "correct": false},
                {"option": "unemployed",     "correct": true},
                {"option": "retired person",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>unemployed</p>" // no comma here
        },

        { // Question 14
            "q": "Choose your answer",
            "a": [
                {"option": "celebrity",    "correct": true},
                {"option": "entertainer",     "correct": false},
                {"option": "famous person",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>celebrity</p>" // no comma here
        },

        { // Question 15
            "q": "Choose your answer",
            "a": [
                {"option": "migrant",    "correct": false},
                {"option": "emmigrant",     "correct": false},
                {"option": "immigrant",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>immigrant</p>" // no comma here
        },

        { // Question 16
            "q": "Choose your answer",
            "a": [
                {"option": "fanboy",    "correct": false},
                {"option": "geek",     "correct": false},
                {"option": "both are OK",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>both are OK</p>" // no comma here
        },

        { // Question 17
            "q": "Choose your answer",
            "a": [
                {"option": "philanthropist",    "correct": true},
                {"option": "rich person",     "correct": false},
                {"option": "therapeutist",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>philanthropist</p>" // no comma here
        },

         { // Question 18
            "q": "Choose your answer",
            "a": [
                {"option": "unabled person",    "correct": false},
				{"option": "disabled person",    "correct": true},
                {"option": "non-abled person",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>disabled person</p>" // no comma here
        },

        { // Question 19
            "q": "Choose your answer",
            "a": [
                {"option": "non-sighted person",    "correct": false},
				{"option": "deaf person",    "correct": false},
                {"option": "blind person",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>blind person</p>" // no comma here
        },

        { // Question 20
            "q": "Choose your answer",
            "a": [
                {"option": "non-hearing person",    "correct": false},
                {"option": "deaf person",     "correct": true},
                {"option": "blind person",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>deaf person</p>" // no comma here
        },   

        { // Question 21
            "q": "Choose your answer",
            "a": [
                {"option": "old person",    "correct": false},
                {"option": "senior citizen",     "correct": true},
                {"option": "elder",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>senior citizen</p>" // no comma here
        },   

        { // Question 22
            "q": "Choose your answer",
            "a": [
                {"option": "tweeny",    "correct": false},
                {"option": "twenty-something",     "correct": true},
                {"option": "twenty-ager",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>twenty-ager</p>" // no comma here
        },   

        { // Question 23
            "q": "Choose your answer",
            "a": [
                 {"option": "teenie",    "correct": false},
                {"option": "teenager",     "correct": true},
                {"option": "tweenie",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>teenager</p>" // no comma here
        },  

        { // Question 24
            "q": "Choose your answer",
            "a": [
                {"option": "out-father",    "correct": false},
                {"option": "second-father",     "correct": false},
                {"option": "father-in-law",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>father-in-law</p>" // no comma here
        },
        
        { // Question 25
            "q": "Choose your answer",
            "a": [
                {"option": "super-energy child",    "correct": false},
                {"option": "crazy child",     "correct": false},
                {"option": "hyperactive child",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>hyperactive child</p>" // no comma here
        }, 
    ]
};
