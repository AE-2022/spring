// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Household Objects",
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
                {"option": "blower",    "correct": false},
                {"option": " electric fan",    "correct": true},
                {"option": "air blower",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>electric fan</p>",
            "incorrect": "<p><span>Fail!</span>electric fan</p>" // no comma here
        },
        { // Question 2
            "q": "Choose your answer",
            "a": [
                {"option": "stool",    "correct": true},
                {"option": "ottoman",    "correct": false},
                {"option": "flat chair",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>stool</p>",
            "incorrect": "<p><span>Fail!</span>stool</p>" // no comma here
        },
       
        { // Question 3
            "q": "Choose your answer",
            "a": [
                {"option": "hand shaver",    "correct": false},
                {"option": "electric shaver",    "correct": true},
                {"option": "facial cutter",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>electric shaver</p>",
            "incorrect": "<p><span>Fail!</span>electric shaver</p>" // no comma here
        },
    
        { // Question 4
            "q": "Choose your answer",
            "a": [
                {"option": "soft brush",    "correct": false},
                {"option": "duster",    "correct": true},
                {"option": "feather brush",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>duster</p>",
            "incorrect": "<p><span>Fail!</span>duster</p>" // no comma here
        },

         { // Question 5
            "q": "Choose your answer",
            "a": [
                {"option": "world ballmap",    "correct": false},
                {"option": "sphere",    "correct": false},
                {"option": "globe",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>globe</p>",
            "incorrect": "<p><span>Fail!</span>globe</p>" // no comma here
        },

        { // Question 6
            "q": "Choose your answer",
            "a": [
                {"option": "knowledge books",     "correct": false},
                {"option": "encyclopedia",    "correct": true},
                {"option": "thesaurus",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>encyclopedia</p>",
            "incorrect": "<p><span>Fail!</span>encyclopedia</p>" // no comma here
        },

        { // Question 7
            "q": "Choose your answer",
            "a": [
                {"option": "fly killer",    "correct": false},
                {"option": "fly net",    "correct": false},
                {"option": "fly swatter",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>fly swatter</p>",
            "incorrect": "<p><span>Fail!<b</span>fly swatter</p>" // no comma here
        },

        { // Question 8
            "q": "Choose your answer",
            "a": [
                {"option": "chest of drawers",    "correct": true},
                {"option": "clothes draw",    "correct": false},
                {"option": "clothes cabinet",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>chest of drawers</p>",
            "incorrect": "<p><span>Fail!</span>chest of drawers</p>" // no comma here
        },

         { // Question 9
            "q": "Choose your answer",
            "a": [
                {"option": "boiler",    "correct": false},
                {"option": "hot jug",    "correct": false},
                {"option": "kettle",    "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>kettle</p>",
            "incorrect": "<p><span>Fail!</span>kettle</p>" // no comma here
        },

        { // Question 10
            "q": "Choose your answer",
            "a": [
                {"option": "pencil cutter",    "correct": false},
                {"option": "pencil pointer",    "correct": false},
                {"option": "pencil sharpener",    "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>pencil sharpener</p>",
            "incorrect": "<p><span>Fail!</span>pencil sharpener</p>" // no comma here
        },

        { // Question 11
            "q": "Choose your answer",
            "a": [
                {"option": "bowel",    "correct": false},
                {"option": "tub",    "correct": false},
                {"option": "sink",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>sink</p>",
            "incorrect": "<p><span>Fail!</span>sink</p>" // no comma here
        },

        { // Question 12
            "q": "Choose your answer",
            "a": [
                {"option": "tap",    "correct": true},
                {"option": "valve",    "correct": false},
                {"option": "both are OK",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>tap</p>",
            "incorrect": "<p><span>Fail!</span>tap</p>" // no comma here
        },

        { // Question 13
            "q": "Choose your answer",
            "a": [
                {"option": "fridge",    "correct": false},
                {"option": "refridgerator",    "correct": false},
                {"option": "both are OK",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>Both are OK</p>",
            "incorrect": "<p><span>Fail!</span>Both are OK</p>" // no comma here
        },

        { // Question 14
            "q": "Choose your answer",
            "a": [
                {"option": "hair dryer",    "correct": false},
                {"option": "blow dryer",    "correct": false},
                {"option": "both are OK",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>Both are OK</p>",
            "incorrect": "<p><span>Fail!</span>Both are OK</p>" // no comma here
        },

        { // Question 15
            "q": "Choose your answer",
            "a": [
                {"option": "brush",    "correct": false},
                {"option": "broom",    "correct": true},
                {"option": "both are OK",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>broom</p>",
            "incorrect": "<p><span>Fail!</span>broom</p>" // no comma here
        },

        { // Question 16
            "q": "Choose your answer",
            "a": [
                {"option": "coffee table",    "correct": true},
                {"option": "low table",    "correct": false},
                {"option": "TV table",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>coffee table</p>",
            "incorrect": "<p><span>Fail!</span>coffee table</p>" // no comma here
        },

        { // Question 17
            "q": "Choose your answer",
            "a": [
                {"option": "strong tape",    "correct": false},
                {"option": "silver tape",    "correct": false},
                {"option": "duct tape",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>duct tape</p>",
            "incorrect": "<p><span>Fail!</span>duct tape</p>" // no comma here
        },

         { // Question 18
            "q": "Choose your answer",
            "a": [
                {"option": "bathroom meter",    "correct": false},
                {"option": "bathroom weigher",    "correct": false},
                {"option": "bathroom scales",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>bathroom scales</p>",
            "incorrect": "<p><span>Fail!</span>bathroom scales</p>" // no comma here
        },

        { // Question 19
            "q": "Choose your answer",
            "a": [
                {"option": "electric board",    "correct": false},
                {"option": "multi plug",    "correct": false},
                {"option": "power board",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>power board</p>",
            "incorrect": "<p><span>Fail!</span>power board</p>" // no comma here
        },

        { // Question 20
            "q": "Choose your answer",
            "a": [
                {"option": "socket",    "correct": true},
                {"option": "plug hole",    "correct": false},
                {"option": "electric board",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>socket</p>",
            "incorrect": "<p><span>Fail!</span>socket</p>" // no comma here
        },   

        { // Question 21
            "q": "Choose your answer",
            "a": [
                {"option": "electric range",    "correct": false},
                {"option": "microwave oven",     "correct": true},
                {"option": "pulse oven",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>microwave oven</p>",
            "incorrect": "<p><span>Fail!</span>microwave oven</p>" // no comma here
        },   

        { // Question 22
            "q": "Choose your answer",
            "a": [
                {"option": "mug cup",    "correct": false},
                {"option": "coffee mug",     "correct": true},
                {"option": "hot mug",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>coffee mug</p>" // no comma here
        },

        { // Question 23
            "q": "Choose your answer",
            "a": [
                {"option": "clothes machine",    "correct": false},
                {"option": "wash tumbler",     "correct": false},
                {"option": "washing machine",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>washing machine</p>",
            "incorrect": "<p><span>Fail!</span>washing machine</p>" // no comma here
        },

        { // Question 24
            "q": "Choose your answer",
            "a": [
                {"option": "gas range",    "correct": true},
                {"option": "cooking range",     "correct": false},
                {"option": "burner",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>gas range</p>",
            "incorrect": "<p><span>Fail!</span>gas range</p>" // no comma here
        },

        { // Question 25
            "q": "Choose your answer",
            "a": [
                {"option": "sieve",    "correct": false},
                {"option": "tea plate",     "correct": false},
                {"option": "saucer",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>saucer</p>",
            "incorrect": "<p><span>Fail!</span>saucer</p>" // no comma here
        },
		
		{ // Question 26
            "q": "Choose your answer",
            "a": [
                {"option": "blender",    "correct": true},
                {"option": "mixer",     "correct": false},
                {"option": "juicer",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>blender</p>",
            "incorrect": "<p><span>Fail!</span>blender</p>" // no comma here
        },
		
		{ // Question 27
            "q": "Choose your answer",
            "a": [
                {"option": "blender",    "correct": false},
                {"option": "mixer",     "correct": true},
                {"option": "juicer",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>mixer</p>",
            "incorrect": "<p><span>Fail!</span>mixer</p>" // no comma here
        },

    ]
};
