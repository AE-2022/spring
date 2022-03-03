// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Nature",
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
                {"option": "natural area",    "correct": false},
                {"option": "habitat",    "correct": true},
                {"option": "environment",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail.</span> habitat</p>" // no comma here
        },
        { // Question 2
            "q": "Choose your answer",
            "a": [
                {"option": "organelle",    "correct": false},
                {"option": "organite",    "correct": false},
                {"option": "organism",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span> </p>",
            "incorrect": "<p><span>Fail.</span> organism</p>" // no comma here
        },
       
        { // Question 3
            "q": "Choose your answer",
            "a": [
                {"option": "iceberg",    "correct": true},
                {"option": "ice mountain",     "correct": false},
                {"option": "ice flow",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> iceberg</p>" // no comma here
        },
    
        { // Question 4
            "q": "Choose your answer",
            "a": [
                {"option": "rock face",    "correct": false},
                {"option": "drop",     "correct": false},
                {"option": "cliff",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span> </p>",
            "incorrect": "<p><span>Fail!</span> cliff</p>" // no comma here
        },

         { // Question 5
            "q": "Choose your answer",
            "a": [
                {"option": "outlet",    "correct": false},
                {"option": "peninsula",     "correct": true},
                {"option": "bay area",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> peninsula</p>" // no comma here
        },

        { // Question 6
            "q": "Choose your answer",
            "a": [
                {"option": "lova",    "correct": false},
                {"option": "lava",     "correct": true},
                {"option": "lave",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> lava</p>" // no comma here
        },

        { // Question 7
            "q": "Choose your answer",
            "a": [
                {"option": "bee nest",    "correct": false},
                {"option": "beehive",     "correct": true},
                {"option": "beehouse",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> beehive</p>" // no comma here
        },

        { // Question 8
            "q": "Choose your answer",
            "a": [
                {"option": "deep sleep",    "correct": false},
                {"option": "incantation",     "correct": false},
                {"option": "hibernation",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> hibernation</p>" // no comma here
        },

         { // Question 9
            "q": "Choose your answer",
            "a": [
                {"option": "horns",    "correct": false},
                {"option": "stags",    "correct": false},
                {"option": "antlers",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> antlers</p>" // no comma here
        },

        { // Question 10
            "q": "Choose your answer",
            "a": [
                {"option": "giant wave",    "correct": false},
                {"option": "tsunami",    "correct": true},
                {"option": "titan wave",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> tsunami</p>" // no comma here
        },

        { // Question 11
            "q": "Choose your answer",
            "a": [
                {"option": "meteor",    "correct": false},
                {"option": "star blaze",     "correct": false},
                {"option": "shooting star",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> shooting star</p>" // no comma here
        },

        { // Question 12
            "q": "Choose your answer",
            "a": [
                {"option": "hairs",    "correct": false},
                {"option": "scales",     "correct": false},
                {"option": "fur",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> fur</p>" // no comma here
        },

        { // Question 13
            "q": "Choose your answer",
            "a": [
                {"option": "fish skin",    "correct": false},
                {"option": "scales",     "correct": true},
                {"option": "fur",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> scales</p>" // no comma here
        },

        { // Question 14
            "q": "Choose your answer",
            "a": [
                {"option": "ancient rock",    "correct": false},
                {"option": "fossil",     "correct": true},
                {"option": "petrified matter",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> fossil</p>" // no comma here
        },

        { // Question 15
            "q": "Choose your answer",
            "a": [
                {"option": "hunter",    "correct": false},
                {"option": "prey",     "correct": false},
                {"option": "predator",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> predator</p>" // no comma here
        },

        { // Question 16
            "q": "Choose your answer",
            "a": [
                {"option": "hair",    "correct": false},
                {"option": "whisker",     "correct": true},
                {"option": "stubble",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> whisker</p>" // no comma here
        },

        { // Question 17
            "q": "Choose your answer",
            "a": [
                {"option": "nitrogen life",    "correct": false},
                {"option": "nitrogen scheme",     "correct": false},
                {"option": "nitrogen cycle",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> nitrogen cycle</p>" // no comma here
        },

         { // Question 18
            "q": "Choose your answer",
            "a": [
                {"option": "drought",    "correct": true},
                {"option": "dry season",    "correct": false},
                {"option": "desiccation",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> drought</p>" // no comma here
        },

        { // Question 19
            "q": "Choose your answer",
            "a": [
                {"option": "pollen",    "correct": true},
                {"option": "vapour",    "correct": false},
                {"option": "seed dust",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> pollen</p>" // no comma here
        },

        { // Question 20
            "q": "Choose your answer",
            "a": [
                {"option": "hoof",    "correct": true},
                {"option": "paw",     "correct": false},
                {"option": "foot",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> hoof</p>" // no comma here
        },   

        { // Question 21
            "q": "Choose your answer",
            "a": [
                {"option": "stalagmite",    "correct": false},
                {"option": "stalactite",     "correct": true},
                {"option": "spine rock",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> stalactite</p>" // no comma here
        },   

        { // Question 22
            "q": "Choose your answer",
            "a": [
                {"option": "coral island",    "correct": false},
                {"option": "crater",     "correct": false},
                {"option": "atoll",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> atoll</p>" // no comma here
        },   

        { // Question 23
            "q": "Choose your answer",
            "a": [
                {"option": "hibernation",    "correct": false},
                {"option": "immigration",     "correct": false},
                {"option": "migration",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> migration</p>" // no comma here
        },  

        { // Question 24
            "q": "Choose your answer",
            "a": [
                {"option": "open",    "correct": false},
                {"option": "bloom",     "correct": true},
                {"option": "shrivel",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> bloom</p>" // no comma here
        },  

        { // Question 25
            "q": "Choose your answer",
            "a": [
                {"option": "lightning",    "correct": false},
                {"option": "strike",     "correct": false},
                {"option": "thunder",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> thunder</p>" // no comma here
        },  

        { // Question 26
            "q": "Choose your answer",
            "a": [
                {"option": "lightning",    "correct": true},
                {"option": "strike",     "correct": false},
                {"option": "thunder",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> bloom</p>" // no comma here
        },  

        { // Question 27
            "q": "Choose your answer",
            "a": [
                {"option": "river opening",    "correct": false},
                {"option": "sea mouth",     "correct": false},
                {"option": "river mouth",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> river mouth</p>" // no comma here
        },  

        { // Question 28
            "q": "Choose your answer",
            "a": [
                {"option": "corral",    "correct": false},
                {"option": "coral",     "correct": true},
                {"option": "collal",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> coral</p>" // no comma here
        },  

        { // Question 29
            "q": "Choose your answer",
            "a": [
                {"option": "pond",    "correct": true},
                {"option": "puddle",     "correct": false},
                {"option": "stream",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> pond</p>" // no comma here
        },  

        { // Question 30
            "q": "Choose your answer",
            "a": [
                {"option": "ice drift",    "correct": false},
                {"option": "ice floe",     "correct": true},
                {"option": "crevasse",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> ice floe</p>" // no comma here
        },  

    ]
};
