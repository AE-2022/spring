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
                {"option": "rust",    "correct": false},
                {"option": "orange yellow",    "correct": false},
                {"option": "amber",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>amber</p>",
            "incorrect": "<p><span>Fail!</span>amber</p>" // no comma here
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
