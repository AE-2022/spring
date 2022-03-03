// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Occupations",
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
                {"option": "police worker",    "correct": false},
                {"option": "police officer",    "correct": true},
                {"option": "police man",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail.</span> Police officer.</p>" // no comma here
        },
        { // Question 2
            "q": "Choose your answer",
            "a": [
                {"option": "firefighter",    "correct": true},
                {"option": "fire worker",    "correct": false},
                {"option": "firemen",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span> </p>",
            "incorrect": "<p><span>Fail.</span> Firefighter.</p>" // no comma here
        },
       
        { // Question 3
            "q": "Choose your answer",
            "a": [
                {"option": "wood worker",    "correct": false},
                {"option": "carpenter",    "correct": true},
                {"option": "fitter",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Carpenter.</p>" // no comma here
        },
    
        { // Question 4
            "q": "Choose your answer",
            "a": [
                {"option": "building designer",    "correct": false},
                {"option": "architect",    "correct": true},
                {"option": "architecturist",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span> </p>",
            "incorrect": "<p><span>Fail!</span> Architect.</p>" // no comma here
        },

         { // Question 5
            "q": "Choose your answer",
            "a": [
                {"option": "starman",    "correct": false},
                {"option": "astronaut",    "correct": true},
                {"option": "spaceman",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Astronaut.</p>" // no comma here
        },

        { // Question 6
            "q": "Choose your answer",
            "a": [
                {"option": "flowerist",     "correct": false},
                {"option": "flourist",    "correct": false},
                {"option": "florist",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Florist.</p>" // no comma here
        },

        { // Question 7
            "q": "Choose your answer",
            "a": [
                {"option": "gas station worker",    "correct": false},
                {"option": "gas station attendant",    "correct": true},
                {"option": "gas station jockey",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Gas station attendant.</p>" // no comma here
        },

        { // Question 8
            "q": "Choose your answer",
            "a": [
                {"option": "meater",    "correct": false},
                {"option": "butcher",    "correct": true},
                {"option": "carver",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Butcher.</p>" // no comma here
        },

         { // Question 9
            "q": "Choose your answer",
            "a": [
                {"option": "retired person",    "correct": true},
                {"option": "non-worker",    "correct": false},
                {"option": "old person",    "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Retired person.</p>" // no comma here
        },

        { // Question 10
            "q": "Choose your answer",
            "a": [
                {"option": "guardman",    "correct": false},
                {"option": "guardia",    "correct": false},
                {"option": "security guard",    "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Security guard.</p>" // no comma here
        },

        { // Question 11
            "q": "Choose your answer",
            "a": [
                {"option": "office person",    "correct": false},
                {"option": "services officer",    "correct": false},
                {"option": "civil servant",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Civil servant.</p>" // no comma here
        },

        { // Question 12
            "q": "Choose your answer",
            "a": [
                {"option": "engineer",    "correct": false},
                {"option": "welder",    "correct": true},
                {"option": "metal worker",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Welder.</p>" // no comma here
        },

        { // Question 13
            "q": "Choose your answer",
            "a": [
                {"option": "salesman",    "correct": false},
                {"option": "shop seller",    "correct": false},
                {"option": "shop clerk",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Shop clerk.</p>" // no comma here
        },

        { // Question 14
            "q": "Choose your answer",
            "a": [
                {"option": "travel clerk",    "correct": false},
                {"option": "travel guide",    "correct": false},
                {"option": "travel agent",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Travel agent.</p>" // no comma here
        },

        { // Question 15
            "q": "Choose your answer",
            "a": [
                {"option": "electrician",    "correct": true},
                {"option": "electrical worker",    "correct": false},
                {"option": "electric engineer",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Electrician.</p>" // no comma here
        },

        { // Question 16
            "q": "Choose your answer",
            "a": [
                {"option": "delivery clerk",    "correct": false},
                {"option": "courier",    "correct": true},
                {"option": "package deliverer",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Courier.</p>" // no comma here
        },

        { // Question 17
            "q": "Choose your answer",
            "a": [
                {"option": "accountant",    "correct": true},
                {"option": "statistician",    "correct": false},
                {"option": "money manager",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Accountant.</p>" // no comma here
        },

         { // Question 18
            "q": "Choose your answer",
            "a": [
                {"option": "cashier",    "correct": true},
                {"option": "registerer",    "correct": false},
                {"option": "checker",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Cashier.</p>" // no comma here
        },

        { // Question 19
            "q": "Choose your answer",
            "a": [
                {"option": "law officer",    "correct": false},
                {"option": "law judge",    "correct": false},
                {"option": "lawyer",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Lawyer</p>" // no comma here
        },

        { // Question 20
            "q": "Choose your answer",
            "a": [
                {"option": "waterman",    "correct": false},
                {"option": "pipe worker",    "correct": false},
                {"option": "plumber",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Plumber.</p>" // no comma here
        },   

        { // Question 21
            "q": "Choose your answer",
            "a": [
                {"option": "barman",    "correct": true},
                {"option": "drink waiter",     "correct": false},
                {"option": "server",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Barman.</p>" // no comma here
        },   

        { // Question 22
            "q": "Choose your answer",
            "a": [
                {"option": "eye doctor",    "correct": false},
                {"option": "optician",     "correct": true},
                {"option": "eye technician",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Optician.</p>" // no comma here
        },

        { // Question 23
            "q": "Choose your answer",
            "a": [
                {"option": "fisherman",    "correct": false},
                {"option": "fishmonger",     "correct": true},
                {"option": "fish handler",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Fishmonger.</p>" // no comma here
        },

        { // Question 24
            "q": "Choose your answer",
            "a": [
                {"option": "druggie",    "correct": false},
                {"option": "medicine clerk",     "correct": false},
                {"option": "pharmacist",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Pharmacist.</p>" // no comma here
        },

    ]
};
