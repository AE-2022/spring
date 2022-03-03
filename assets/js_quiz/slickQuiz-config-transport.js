// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Transport",
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
                {"option": "monocycle",    "correct": false},
                {"option": "unicycle",    "correct": true},
                {"option": "both are OK",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail.</span> Unicycle.</p>" // no comma here
        },
        { // Question 2
            "q": "Choose your answer",
            "a": [
                {"option": "open-air car",    "correct": false},
                {"option": "convertible",    "correct": true},
                {"option": "roofless car",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span> </p>",
            "incorrect": "<p><span>Fail.</span> Convertible.</p>" // no comma here
        },
       
        { // Question 3
            "q": "Choose your answer",
            "a": [
                {"option": "pickup",    "correct": true},
                {"option": "workman car",     "correct": false},
                {"option": "off-roader",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Pickup.</p>" // no comma here
        },
    
        { // Question 4
            "q": "Choose your answer",
            "a": [
                {"option": "minibus",    "correct": false},
                {"option": "boxcar",     "correct": false},
                {"option": "minivan",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span> </p>",
            "incorrect": "<p><span>Fail!</span> Minivan.</p>" // no comma here
        },

         { // Question 5
            "q": "Choose your answer",
            "a": [
                {"option": "three-wheeler",    "correct": false},
                {"option": "triwheeler",     "correct": false},
                {"option": "tricycle",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Tricycle.</p>" // no comma here
        },

        { // Question 6
            "q": "Choose your answer",
            "a": [
                {"option": "road train",    "correct": false},
                {"option": "street train",     "correct": false},
                {"option": "tram",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Tram.</p>" // no comma here
        },

        { // Question 7
            "q": "Choose your answer",
            "a": [
                {"option": "subway train",    "correct": true},
                {"option": "underground train",     "correct": false},
                {"option": "both are OK",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Subway train.</p>" // no comma here
        },

        { // Question 8
            "q": "Choose your answer",
            "a": [
                {"option": "cargo train",    "correct": false},
                {"option": "freight train",     "correct": true},
                {"option": "goods train",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Freight train.</p>" // no comma here
        },

         { // Question 9
            "q": "Choose your answer",
            "a": [
                {"option": "monorail",    "correct": true},
                {"option": "single-rail",    "correct": false},
                {"option": "unirail",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Monorail.</p>" // no comma here
        },

        { // Question 10
            "q": "Choose your answer",
            "a": [
                {"option": "bullet train",    "correct": true},
                {"option": "high-speed train",    "correct": false},
                {"option": "super train",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Bullet train.</p>" // no comma here
        },

        { // Question 11
            "q": "Choose your answer",
            "a": [
                {"option": "steam locomotive",    "correct": false},
                {"option": "steam train",     "correct": false},
                {"option": "both are OK",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Both are OK.</p>" // no comma here
        },

        { // Question 12
            "q": "Choose your answer",
            "a": [
                {"option": "cylinder truck",    "correct": false},
                {"option": "water truck",     "correct": false},
                {"option": "tank truck",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Tank truck.</p>" // no comma here
        },

        { // Question 13
            "q": "Choose your answer",
            "a": [
                {"option": "hearse",    "correct": true},
                {"option": "dead carrier",     "correct": false},
                {"option": "coffin",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Hearse.</p>" // no comma here
        },

        { // Question 14
            "q": "Choose your answer",
            "a": [
                {"option": "double-decker bus",    "correct": true},
                {"option": "two-storey bus",     "correct": false},
                {"option": "floor bus",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Double-decker bus.</p>" // no comma here
        },

        { // Question 15
            "q": "Choose your answer",
            "a": [
                {"option": "army jet",    "correct": false},
                {"option": "fighting jet",     "correct": false},
                {"option": "jet fighter",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Jet fighter.</p>" // no comma here
        },

        { // Question 16
            "q": "Choose your answer",
            "a": [
                {"option": "balloon ship",    "correct": false},
                {"option": "blimp",     "correct": true},
                {"option": "both are OK",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Blimp.</p>" // no comma here
        },

        { // Question 17
            "q": "Choose your answer",
            "a": [
                {"option": "wood boat",    "correct": false},
                {"option": "raft",     "correct": true},
                {"option": "barge",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Raft.</p>" // no comma here
        },

         { // Question 18
            "q": "Choose your answer",
            "a": [
                {"option": "canoe",    "correct": true},
                {"option": "kayak",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Canoe.</p>" // no comma here
        },

        { // Question 19
            "q": "Choose your answer",
            "a": [
                {"option": "canoe",    "correct": false},
                {"option": "kayak",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Kayak.</p>" // no comma here
        },

        { // Question 20
            "q": "Choose your answer",
            "a": [
                {"option": "dirigible",    "correct": false},
                {"option": "emergency boat",     "correct": false},
                {"option": "lifeboat",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Lifeboat.</p>" // no comma here
        },   

        { // Question 21
            "q": "Choose your answer",
            "a": [
                {"option": "emergency car",    "correct": false},
                {"option": "medical van",     "correct": false},
                {"option": "ambulance",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Rice harvester.</p>" // no comma here
        },   

        { // Question 22
            "q": "Choose your answer",
            "a": [
                {"option": "shoveller",    "correct": false},
                {"option": "bucket car",     "correct": false},
                {"option": "excavator",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Ambulance.</p>" // no comma here
        },   

        { // Question 23
            "q": "Choose your answer",
            "a": [
                 {"option": "garbage truck",    "correct": false},
                {"option": "rubbish truck",     "correct": false},
                {"option": "both are OK",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Both are OK.</p>" // no comma here
        },  

        { // Question 24
            "q": "Choose your answer",
            "a": [
                {"option": "gasoline tanker",    "correct": false},
                {"option": "oil tanker",     "correct": true},
                {"option": "ship tanker",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Oil tanker.</p>" // no comma here
        },
        
        { // Question 25
            "q": "Choose your answer",
            "a": [
                {"option": "mountain car",    "correct": false},
                {"option": "cable lift",     "correct": false},
                {"option": "gondola",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Gondola.</p>" // no comma here
        }, 
		
		{ // Question 26
            "q": "Choose your answer",
            "a": [
                {"option": "rickshaw",    "correct": true},
                {"option": "buggy",     "correct": false},
                {"option": "human gondola",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Rickshaw.</p>" // no comma here
        }, 
    ]
};
