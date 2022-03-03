// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Plants",
        "main":    "",
        "results": "<h5>Make notes</h5>",
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
                {"option": "cedar",    "correct": true},
                {"option": "pine",     "correct": false},
                {"option": "oak",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>cedar</p>",
            "incorrect": "<p><span>Fail.</span>cedar</p>" // no comma here
        },
        { // Question 2
            "q": "Choose your answer",
            "a": [
                {"option": "pine seed",    "correct": false},
                {"option": "pine cone",     "correct": true},
                {"option": "pine bud",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>pine cone</p>",
            "incorrect": "<p><span>Fail.</span>pine cone</p>" // no comma here
        },
       
        { // Question 3
            "q": "Choose your answer",
            "a": [
                {"option": "cactus",    "correct": false},
                {"option": "chrysanthemum",     "correct": true},
                {"option": "Japanese lotus",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>chrysanthemum</p>",
            "incorrect": "<p><span>Fail!</span>chrysanthemum</p>" // no comma here
        },
    
        { // Question 4
            "q": "Choose your answer",
            "a": [
                {"option": "daisy",    "correct": false},
                {"option": "iris",     "correct": true},
                {"option": "pansy",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>iris</p>",
            "incorrect": "<p><span>Fail!</span>iris</p>" // no comma here
        },

         { // Question 5
            "q": "Choose your answer",
            "a": [
                {"option": "barley",    "correct": true},
                {"option": "oat",     "correct": false},
                {"option": "wheat",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>barley</p>",
            "incorrect": "<p><span>Fail!</span>barley</p>" // no comma here
        },

        { // Question 6
            "q": "Choose your answer",
            "a": [
                {"option": "buttercup",    "correct": false},
                {"option": "daffodil",     "correct": true},
                {"option": "trumpet rose",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>daffodil</p>",
            "incorrect": "<p><span>Fail!</span>daffodil</p>" // no comma here
        },

        { // Question 7
            "q": "Choose your answer",
            "a": [
                {"option": "bulb",    "correct": true},
                {"option": "root",     "correct": false},
                {"option": "seed",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>bulb</p>",
            "incorrect": "<p><span>Fail!</span>bulb</p>" // no comma here
        },

        { // Question 8
            "q": "Choose your answer",
            "a": [
                {"option": "beach tree",    "correct": false},
                {"option": "coconut tree",     "correct": false},
                {"option": "palm tree",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>palm tree</p>",
            "incorrect": "<p><span>Fail!</span>palm tree</p>" // no comma here
        },

         { // Question 9
            "q": "Choose your answer",
            "a": [
                {"option": "cactus",    "correct": true},
                {"option": "prickle",    "correct": false},
                {"option": "tumbleweed",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>cactus</p>",
            "incorrect": "<p><span>Fail!</span>cactus</p>" // no comma here
        },

        { // Question 10
            "q": "Choose your answer",
            "a": [
                {"option": "bark",    "correct": true},
                {"option": "skin",    "correct": false},
                {"option": "veneer",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>bark</p>",
            "incorrect": "<p><span>Fail!</span>bark</p>" // no comma here
        },

        { // Question 11
            "q": "Choose your answer",
            "a": [
                {"option": "branch",    "correct": false},
                {"option": "root",     "correct": true},
                {"option": "vine",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>root</p>",
            "incorrect": "<p><span>Fail!</span>root</p>" // no comma here
        },

        { // Question 12
            "q": "Choose your answer",
            "a": [
                {"option": "fern",    "correct": true},
                {"option": "frond",     "correct": false},
                {"option": "palm leaf",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>fern</p>",
            "incorrect": "<p><span>Fail!</span>fern</p>" // no comma here
        },

        { // Question 13
            "q": "Choose your answer",
            "a": [
                {"option": "corolla",    "correct": false},
                {"option": "leaf",     "correct": false},
                {"option": "petal",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>petal</p>",
            "incorrect": "<p><span>Fail!</span>petal</p>" // no comma here
        },

        { // Question 14
            "q": "Choose your answer",
            "a": [
                {"option": "bud",    "correct": true},
                {"option": "nib",     "correct": false},
                {"option": "rod",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>bud</p>",
            "incorrect": "<p><span>Fail!</span>bud</p>" // no comma here
        },

        { // Question 15
            "q": "Choose your answer",
            "a": [
                {"option": "stamen",    "correct": false},
                {"option": "stem",     "correct": true},
                {"option": "stick",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>stem</p>",
            "incorrect": "<p><span>Fail!</span>stem</p>" // no comma here
        },

        { // Question 16
            "q": "Choose your answer",
            "a": [
                {"option": "grapeplant",    "correct": false},
                {"option": "grapetree",     "correct": false},
                {"option": "grapevine",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>grapevine</p>",
            "incorrect": "<p><span>Fail!</span>grapevine</p>" // no comma here
        },

        { // Question 17
            "q": "Choose your answer",
            "a": [
                {"option": "chrysanthemum",    "correct": false},
                {"option": "daffodil",     "correct": false},
                {"option": "sunflower",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>sunflower</p>",
            "incorrect": "<p><span>Fail!</span>sunflower</p>" // no comma here
        },

         { // Question 18
            "q": "Choose your answer",
            "a": [
                {"option": "body",    "correct": false},
                {"option": "branch",     "correct": false},
                {"option": "trunk",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>trunk</p>",
            "incorrect": "<p><span>Fail!</span>trunk</p>" // no comma here
        },

        { // Question 19
            "q": "Choose your answer",
            "a": [
                {"option": "arm",    "correct": false},
                {"option": "branch",     "correct": true},
                {"option": "stick",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>branch</p>",
            "incorrect": "<p><span>Fail!</span>branch</p>" // no comma here
        },

        { // Question 20
            "q": "Choose your answer",
            "a": [
                {"option": "autumn foliage",    "correct": false},
                {"option": "deciduous",     "correct": true},
                {"option": "seasonal",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>deciduous</p>",
            "incorrect": "<p><span>Fail!</span>deciduous</p>" // no comma here
        },   

        { // Question 21
            "q": "Choose your answer",
            "a": [
                {"option": "always green",    "correct": false},
                {"option": "evergreen",     "correct": true},
                {"option": "wintergreen",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>evergreen</p>",
            "incorrect": "<p><span>Fail!</span>evergreen</p>" // no comma here
        },   

        { // Question 22
            "q": "Choose your answer",
            "a": [
                {"option": "thistle",    "correct": false},
                {"option": "weed",     "correct": true},
                {"option": "wild plants",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>weed</p>",
            "incorrect": "<p><span>Fail!</span>weed</p>" // no comma here
        },   

        { // Question 23
            "q": "Choose your answer",
            "a": [
                {"option": "carnation",    "correct": false},
                {"option": "daisy",     "correct": false},
                {"option": "orchid",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>orchid</p>",
            "incorrect": "<p><span>Fail!</span>orchid</p>" // no comma here
        },   

        { // Question 24
            "q": "Choose your answer",
            "a": [
                {"option": "larch",    "correct": false},
                {"option": "maple",     "correct": true},
                {"option": "oak",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>maple</p>",
            "incorrect": "<p><span>Fail!</span>maple</p>" // no comma here
        },   

        { // Question 25
            "q": "Choose your answer",
            "a": [
                {"option": "field",    "correct": false},
                {"option": "grass area",     "correct": false},
                {"option": "lawn",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>lawn</p>",
            "incorrect": "<p><span>Fail!</span>lawn</p>" // no comma here
        },  
		{ // Question 26
            "q": "Choose your answer",
            "a": [
                {"option": "bamboo sprout",    "correct": false},
                {"option": "bamboo shoot",     "correct": true},
                {"option": "bamboo sapling",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>bamboo shoot</p>",
            "incorrect": "<p><span>Fail!</span>bamboo shoot</p>" // no comma here
        }, 		
        
    ]
};
