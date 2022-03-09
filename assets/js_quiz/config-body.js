var quizJSON = {
    "info": {
        "name":    "The Body",
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
                {"option": "sides",    "correct": false},
                {"option": "belly",     "correct": false},
                {"option": "hips",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>hips</p>",
            "incorrect": "<p><span>Fail!</span>hips</p>" // no comma here
        },
        { // Question 2
            "q": "Choose your answer",
            "a": [
                {"option": "upper head",    "correct": false},
                {"option": "forehead",     "correct": true},
                {"option": "headbrow",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>forehead</p>",
            "incorrect": "<p><span>Fail!</span>forehead</p>" // no comma here
        },
       
        { // Question 3
            "q": "Choose your answer",
            "a": [
                {"option": "kidney",    "correct": true},
                {"option": "spleen",     "correct": false},
                {"option": "liver",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>kidney</p>",
            "incorrect": "<p><span>Fail!</span>kidney</p>" // no comma here
        },
    
        { // Question 4
            "q": "Choose your answer",
            "a": [
                {"option": "chin",    "correct": true},
                {"option": "jaw",     "correct": false},
                {"option": "clavicle",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>chin</p>",
            "incorrect": "<p><span>Fail!</span>chin</p>" // no comma here
        },

         { // Question 5
            "q": "Choose your answer",
            "a": [
                {"option": "thigh",    "correct": true},
                {"option": "spine",     "correct": false},
                {"option": "shin",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>thigh</p>",
            "incorrect": "<p><span>Fail!</span>thigh</p>" // no comma here
        },

        { // Question 6
            "q": "Choose your answer",
            "a": [
                {"option": "index finger",    "correct": true},
                {"option": "ring finger",     "correct": false},
				{"option": "little finger",     "correct": false},
                {"option": "all",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>index finger</p>",
            "incorrect": "<p><span>Fail!</span>index finger</p>" // no comma here
        },

        { // Question 7
            "q": "Choose your answer",
            "a": [
                {"option": "eyelash",    "correct": true},
                {"option": "eyelid hair",     "correct": false},
                {"option": "eyebrow",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>eyelash</p>",
            "incorrect": "<p><span>Fail!</span>eyelash</p>" // no comma here
        },

        { // Question 8
            "q": "Choose your answer",
            "a": [
                {"option": "rib cage",    "correct": true},
                {"option": "chest",     "correct": false},
                {"option": "torso",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>rib cage</p>",
            "incorrect": "<p><span>Fail!</span>rib cage</p>" // no comma here
        },

         { // Question 9
            "q": "Choose your answer",
            "a": [
                {"option": "spleens",    "correct": false},
                {"option": "thorax",    "correct": false},
                {"option": "lungs",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>lungs</p>",
            "incorrect": "<p><span>Fail!</span>lungs</p>" // no comma here
        },

        { // Question 10
            "q": "Choose your answer",
            "a": [
                {"option": "palm",    "correct": true},
                {"option": "forehand",    "correct": false},
                {"option": "nape",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>palm</p>",
            "incorrect": "<p><span>Fail!</span>palm</p>" // no comma here
        },

        { // Question 11
            "q": "Choose your answer",
            "a": [
                {"option": "spinal tap",    "correct": false},
                {"option": "splain",     "correct": false},
                {"option": "spine",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>spine</p>",
            "incorrect": "<p><span>Fail!</span>spine</p>" // no comma here
        },

        { // Question 12
            "q": "Choose your answer",
            "a": [
                {"option": "regurgitate",    "correct": false},
                {"option": "swallowing",     "correct": true},
                {"option": "hiccuping",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>swallowing</p>",
            "incorrect": "<p><span>Fail!</span>swallowing</p>" // no comma here
        },

        { // Question 13
            "q": "Choose your answer",
            "a": [
                {"option": "regurgitate",    "correct": false},
                {"option": "swallowing",     "correct": false},
                {"option": "hiccuping",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>hiccuping</p>",
            "incorrect": "<p><span>Fail!</span>hiccuping</p>" // no comma here
        },

        { // Question 14
            "q": "Choose your answer",
            "a": [
                {"option": "injury",    "correct": false},
                {"option": "ligament",     "correct": false},
                {"option": "sprain",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>sprain</p>",
            "incorrect": "<p><span>Fail!</span>sprain</p>" // no comma here
        },

        { // Question 15
            "q": "Choose your answer",
            "a": [
                {"option": "spots",    "correct": false},
                {"option": "rash",     "correct": true},
                {"option": "itch",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>rash</p>",
            "incorrect": "<p><span>Fail!</span>rash</p>" // no comma here
        },

        { // Question 16
            "q": "Choose your answer",
            "a": [
                {"option": "bird feathers",    "correct": false},
                {"option": "goosebumps",     "correct": true},
                {"option": "chicken spots",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>goosebumps</p>",
            "incorrect": "<p><span>Fail!</span>goosebumps</p>" // no comma here
        },
    ]
};
