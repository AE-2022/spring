var quizJSON = {
    "info": {
        "name":    "The Ocean",
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
                {"option": "abalone",    "correct": true},
                {"option": "mussel",    "correct": false},
                {"option": "limpet",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> habitat</p>" // no comma here
        },
		
        { // Question 2
            "q": "Choose your answer",
            "a": [
                {"option": "kelp",    "correct": true},
                {"option": "algae",    "correct": false},
                {"option": "anemone",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>kelp</p>",
            "incorrect": "<p><span>Fail!</span>kelp</p>" // no comma here
        },
       
        { // Question 3
            "q": "Choose your answer",
            "a": [
                {"option": "algae",    "correct": true},
                {"option": "bloom",    "correct": false},
                {"option": "weed",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>algae</p>",
            "incorrect": "<p><span>Fail!</span>algae</p>" // no comma here
        },
    
        { // Question 4
            "q": "Choose your answer",
            "a": [
                {"option": "sea lion",    "correct": true},
                {"option": "sea tiger",    "correct": false},
                {"option": "sea wolf",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>sea lion</p>",
            "incorrect": "<p><span>Fail!</span>sea lion</p>" // no comma here
        },

         { // Question 5
            "q": "Choose your answer",
            "a": [
                {"option": "seahorse",    "correct": true},
                {"option": "seadragon",    "correct": false},
                {"option": "seapony",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>seahorse</p>",
            "incorrect": "<p><span>Fail!</span>seahorse</p>" // no comma here
        },

        { // Question 6
            "q": "Choose your answer",
            "a": [
                {"option": "current",    "correct": true},
                {"option": "water flow",    "correct": false},
                {"option": "tide",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>current</p>",
            "incorrect": "<p><span>Fail!</span>current</p>" // no comma here
        },

        { // Question 7
            "q": "Choose your answer",
            "a": [
                {"option": "high tide",    "correct": true},
                {"option": "sea tide",    "correct": false},
                {"option": "lunar tide",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>high tide</p>",
            "incorrect": "<p><span>Fail!</span>high tide</p>" // no comma here
        },

        { // Question 8
            "q": "Choose your answer",
            "a": [
                {"option": "flying fish",    "correct": true},
                {"option": "glide fish",    "correct": false},
                {"option": "wing fish",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>flying fish</p>",
            "incorrect": "<p><span>Fail!</span>flying fish</p>" // no comma here
        },

        { // Question 9
            "q": "Choose your answer",
            "a": [
                {"option": "krill",    "correct": true},
                {"option": "frill",    "correct": false},
                {"option": "brill",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>krill</p>",
            "incorrect": "<p><span>Fail!</span>krill</p>" // no comma here
        },

        { // Question 10
            "q": "Choose your answer",
            "a": [
                {"option": "ocean sunfish",    "correct": true},
                {"option": "ocean moonfish",    "correct": false},
                {"option": "ocean skyfish",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>ocean sunfish</p>",
            "incorrect": "<p><span>Fail!</span>ocean sunfish</p>" // no comma here
        },

        { // Question 11
            "q": "Choose your answer",
            "a": [
                {"option": "tide pool",    "correct": true},
                {"option": "rock pool",    "correct": false},
                {"option": "beach pool",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>tide pool</p>",
            "incorrect": "<p><span>Fail!</span>tide pool</p>" // no comma here
        },

        { // Question 12
            "q": "Choose your answer",
            "a": [
                {"option": "Mariana trench",    "correct": true},
                {"option": "Mariana depths",    "correct": false},
                {"option": "Mariana range",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>Mariana trench</p>",
            "incorrect": "<p><span>Fail!</span>Mariana trench</p>" // no comma here
        },

        { // Question 13
            "q": "Choose your answer",
            "a": [
                {"option": "reef",    "correct": true},
                {"option": "coral",    "correct": false},
                {"option": "ridge",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>reef</p>",
            "incorrect": "<p><span>Fail!</span>reef</p>" // no comma here
        },

        { // Question 14
            "q": "Choose your answer",
            "a": [
                {"option": "low tide",    "correct": true},
                {"option": "peak tide",    "correct": false},
                {"option": "solar tide",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>low tide</p>",
            "incorrect": "<p><span>Fail!</span>low tide</p>" // no comma here
        },

        { // Question 15
            "q": "Choose your answer",
            "a": [
                {"option": "fin",    "correct": true},
                {"option": "wing",    "correct": false},
                {"option": "flipper",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>fin</p>",
            "incorrect": "<p><span>Fail!</span>fin</p>" // no comma here
        },

        { // Question 16
            "q": "Choose your answer",
            "a": [
                {"option": "the bends",    "correct": true},
                {"option": "the lends",    "correct": false},
                {"option": "the gends",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>the bends</p>",
            "incorrect": "<p><span>Fail!</span>the bends</p>" // no comma here
        },

        { // Question 17
            "q": "Choose your answer",
            "a": [
                {"option": "sea urchin",    "correct": true},
                {"option": "sea sprite",    "correct": false},
                {"option": "sea cactus",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>sea urchin</p>",
            "incorrect": "<p><span>Fail!</span>sea urchin</p>" // no comma here
        },

        { // Question 18
            "q": "Choose your answer",
            "a": [
                {"option": "sea anemone",    "correct": true},
                {"option": "sea wig",    "correct": false},
                {"option": "scallop",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>sea anemone</p>",
            "incorrect": "<p><span>Fail!</span>sea anemone</p>" // no comma here
        },

        { // Question 19
            "q": "Choose your answer",
            "a": [
                {"option": "Jolly Roger",    "correct": true},
                {"option": "Black Jake",    "correct": false},
                {"option": "Skull Pete",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>Jolly Roger</p>",
            "incorrect": "<p><span>Fail!</span>Jolly Roger</p>" // no comma here
        },  

        { // Question 20
            "q": "Choose your answer",
            "a": [
                {"option": "ebb tide",    "correct": true},
                {"option": "low tide",    "correct": false},
                {"option": "down tide",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>ebb tide</p>",
            "incorrect": "<p><span>Fail!</span>ebb tide</p>" // no comma here
        },  

        { // Question 21
            "q": "Choose your answer",
            "a": [
                {"option": "sea foam",    "correct": true},
                {"option": "sea bubbles",    "correct": false},
                {"option": "sea soap",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>sea foam</p>",
            "incorrect": "<p><span>Fail!</span>sea foam</p>" // no comma here
        }, 		

        { // Question 22
            "q": "Choose your answer",
            "a": [
                {"option": "driftwood",    "correct": true},
                {"option": "seawood",    "correct": false},
                {"option": "floatwood",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>driftwood</p>",
            "incorrect": "<p><span>Fail!</span>driftwood</p>" // no comma here
        },

        { // Question 23
            "q": "Choose your answer",
            "a": [
                {"option": "sea cucumber",    "correct": true},
                {"option": "sea pickle",    "correct": false},
                {"option": "sea potato",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>sea cucumber</p>",
            "incorrect": "<p><span>Fail!</span>sea cucumber</p>" // no comma here
        },

        { // Question 24
            "q": "Choose your answer",
            "a": [
               {"option": "sea fever",    "correct": false},
                {"option": "sea vomitus",    "correct": false},
                {"option": "sea sickness",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> habitat</p>" // no comma here
        }, 
    ]
};
