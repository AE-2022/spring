// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Household objects",
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
                {"option": "blower",    "correct": false},
                {"option": " electric fan",    "correct": true},
                {"option": "air blower",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!<br>electric fan</span></p>" // no comma here
        },
        { // Question 2
            "q": "Choose your answer",
            "a": [
                {"option": "stool",    "correct": true},
                {"option": "ottoman",    "correct": false},
                {"option": "flat chair",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span> </p>",
            "incorrect": "<p><span>Fail!<br>stool</span></p>" // no comma here
        },
       
        { // Question 3
            "q": "Choose your answer",
            "a": [
                {"option": "hand shaver",    "correct": false},
                {"option": "electric shaver",    "correct": true},
                {"option": "facial cutter",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!<br>electric shaver</span></p>" // no comma here
        },
    
        { // Question 4
            "q": "Choose your answer",
            "a": [
                {"option": "soft brush",    "correct": false},
                {"option": "duster",    "correct": true},
                {"option": "feather brush",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span> </p>",
            "incorrect": "<p><span>Fail!<br>duster</span></p>" // no comma here
        },

         { // Question 5
            "q": "Choose your answer",
            "a": [
                {"option": "world ballmap",    "correct": false},
                {"option": "sphere",    "correct": false},
                {"option": "globe",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!<br>globe</span></p>" // no comma here
        },

        { // Question 6
            "q": "Choose your answer",
            "a": [
                {"option": "knowledge books",     "correct": false},
                {"option": "encyclopedia",    "correct": true},
                {"option": "thesaurus",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!<br>encyclopedia</span></p>" // no comma here
        },

        { // Question 7
            "q": "Choose your answer",
            "a": [
                {"option": "fly killer",    "correct": false},
                {"option": "fly net",    "correct": false},
                {"option": "fly swatter",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!<br>fly swatter</span></p>" // no comma here
        },

        { // Question 8
            "q": "Choose your answer",
            "a": [
                {"option": "chest of drawers",    "correct": true},
                {"option": "clothes draw",    "correct": false},
                {"option": "clothes cabinet",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!<br>chest of drawers</span></p>" // no comma here
        },

         { // Question 9
            "q": "Choose your answer",
            "a": [
                {"option": "boiler",    "correct": false},
                {"option": "hot jug",    "correct": false},
                {"option": "kettle",    "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!<br>kettle</span></p>" // no comma here
        },

        { // Question 10
            "q": "Choose your answer",
            "a": [
                {"option": "pencil cutter",    "correct": false},
                {"option": "pencil pointer",    "correct": false},
                {"option": "pencil sharpener",    "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!<br>pencil sharpener</span></p>" // no comma here
        },

        { // Question 11
            "q": "Choose your answer",
            "a": [
                {"option": "bowel",    "correct": false},
                {"option": "tub",    "correct": false},
                {"option": "sink",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!<br>sink</span></p>" // no comma here
        },

        { // Question 12
            "q": "Choose your answer",
            "a": [
                {"option": "tap",    "correct": true},
                {"option": "valve",    "correct": false},
                {"option": "both are OK",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!<br>tap</span></p>" // no comma here
        },

        { // Question 13
            "q": "Choose your answer",
            "a": [
                {"option": "fridge",    "correct": false},
                {"option": "refridgerator",    "correct": false},
                {"option": "both are OK",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!<br>Both are OK</span></p>" // no comma here
        },

        { // Question 14
            "q": "Choose your answer",
            "a": [
                {"option": "hair dryer",    "correct": false},
                {"option": "blow dryer",    "correct": false},
                {"option": "both are OK",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!<br>Both are OK</span></p>" // no comma here
        },

        { // Question 15
            "q": "Choose your answer",
            "a": [
                {"option": "brush",    "correct": false},
                {"option": "broom",    "correct": true},
                {"option": "both are OK",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!<br>broom</span></p>" // no comma here
        },

        { // Question 16
            "q": "Choose your answer",
            "a": [
                {"option": "coffee table",    "correct": true},
                {"option": "low table",    "correct": false},
                {"option": "TV table",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!<br>coffee table</span></p>" // no comma here
        },

        { // Question 17
            "q": "Choose your answer",
            "a": [
                {"option": "strong tape",    "correct": false},
                {"option": "silver tape",    "correct": false},
                {"option": "duct tape",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!<br>duct tape</span></p>" // no comma here
        },

         { // Question 18
            "q": "Choose your answer",
            "a": [
                {"option": "bathroom meter",    "correct": false},
                {"option": "bathroom weigher",    "correct": false},
                {"option": "bathroom scales",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!<br>bathroom scales</span></p>" // no comma here
        },

        { // Question 19
            "q": "Choose your answer",
            "a": [
                {"option": "electric board",    "correct": false},
                {"option": "multi plug",    "correct": false},
                {"option": "power board",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!<br>power board</span></p>" // no comma here
        },

        { // Question 20
            "q": "Choose your answer",
            "a": [
                {"option": "socket",    "correct": true},
                {"option": "plug hole",    "correct": false},
                {"option": "electric board",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!<br>socket</span></p>" // no comma here
        },   

        { // Question 21
            "q": "Choose your answer",
            "a": [
                {"option": "electric range",    "correct": false},
                {"option": "microwave oven",     "correct": true},
                {"option": "pulse oven",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!<br>microwave oven</span></p>" // no comma here
        },   

        { // Question 22
            "q": "Choose your answer",
            "a": [
                {"option": "mug cup",    "correct": false},
                {"option": "coffee mug",     "correct": true},
                {"option": "hot mug",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!<br>coffee mug</span></p>" // no comma here
        },

        { // Question 23
            "q": "Choose your answer",
            "a": [
                {"option": "clothes machine",    "correct": false},
                {"option": "wash tumbler",     "correct": false},
                {"option": "washing machine",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!<br>washing machine</span></p>" // no comma here
        },

        { // Question 24
            "q": "Choose your answer",
            "a": [
                {"option": "gas range",    "correct": true},
                {"option": "cooking range",     "correct": false},
                {"option": "burner",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!<br>gas range</span></p>" // no comma here
        },

        { // Question 25
            "q": "Choose your answer",
            "a": [
                {"option": "sieve",    "correct": false},
                {"option": "tea plate",     "correct": false},
                {"option": "saucer",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!<br>saucer</span></p>" // no comma here
        },
		
		{ // Question 26
            "q": "Choose your answer",
            "a": [
                {"option": "blender",    "correct": true},
                {"option": "mixer",     "correct": false},
                {"option": "juicer",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!<br>blender</span></p>" // no comma here
        },
		
		{ // Question 27
            "q": "Choose your answer",
            "a": [
                {"option": "blender",    "correct": false},
                {"option": "mixer",     "correct": true},
                {"option": "juicer",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!<br>mixer</span></p>" // no comma here
        },

    ]
};
