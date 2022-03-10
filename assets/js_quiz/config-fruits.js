var quizJSON = {
    "info": {
        "name":    "Fruits, vegetables, and nuts",
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
                {"option": "apricot",    "correct": true},
                {"option": "mandarin",    "correct": false},
                {"option": "peach",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail.</span>apricot</p>" // no comma here
        },
        { // Question 2
            "q": "Choose your answer",
            "a": [
                {"option": "raspberry",    "correct": false},
                {"option": "blueberry",    "correct": false},
                {"option": "blackberry",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span> </p>",
            "incorrect": "<p><span>Fail.</span>blackberry</p>" // no comma here
        },
       
        { // Question 3
            "q": "Choose your answer",
            "a": [
                {"option": "raspberry",    "correct": false},
                {"option": "blueberry",    "correct": true},
                {"option": "blackberry",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>blueberry</p>" // no comma here
        },
    
        { // Question 4
            "q": "Choose your answer",
            "a": [
                {"option": "raspberry",    "correct": true},
                {"option": "blueberry",    "correct": false},
                {"option": "blackberry",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span> </p>",
            "incorrect": "<p><span>Fail!</span>raspberry</p>" // no comma here
        },

         { // Question 5
            "q": "Choose your answer",
            "a": [
                {"option": "fig",    "correct": false},
                {"option": "persimmon",    "correct": true},
                {"option": "tamarillo",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>persimmon</p>" // no comma here
        },

        { // Question 6
            "q": "Choose your answer",
            "a": [
                {"option": "peer",     "correct": false},
                {"option": "paer",    "correct": false},
                {"option": "pear",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>pear</p>" // no comma here
        },

        { // Question 7
            "q": "Choose your answer",
            "a": [
                {"option": "kumara",    "correct": false},
                {"option": "durian",    "correct": false},
                {"option": "fig",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>fig</p>" // no comma here
        },

        { // Question 8
            "q": "Choose your answer",
            "a": [
                {"option": "muskmelon",    "correct": true},
                {"option": "cantaloupe",    "correct": false},
                {"option": "rock melon",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>muskmelon</p>" // no comma here
        },

         { // Question 9
            "q": "Choose your answer",
            "a": [
                {"option": "cherry",    "correct": true},
                {"option": "plum",    "correct": false},
                {"option": "pear",    "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>cherry</p>" // no comma here
        },

        { // Question 10
            "q": "Choose your answer",
            "a": [
                {"option": "prum",    "correct": false},
                {"option": "plam",    "correct": false},
                {"option": "plum",    "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>plum</p>" // no comma here
        },

        { // Question 11
            "q": "Choose your answer",
            "a": [
                {"option": "mandarin",    "correct": true},
                {"option": "citrus orange",    "correct": false},
                {"option": "clementine",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>mandarin</p>" // no comma here
        },

        { // Question 12
            "q": "Choose your answer",
            "a": [
                {"option": "Chinese honey orange",    "correct": false},
                {"option": "ponkan",    "correct": false},
                {"option": "both are OK",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>both are OK</p>" // no comma here
        },
		
		 { // Question 13
            "q": "Choose your answer",
            "a": [
                {"option": "grape plant",    "correct": false},
                {"option": "purple plant",    "correct": false},
                {"option": "eggplant",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>eggplant</p>" // no comma here
        },

        { // Question 14
            "q": "Choose your answer",
            "a": [
                {"option": "radish",    "correct": false},
                {"option": "turnip",    "correct": true},
                {"option": "kabu",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>turnip</p>" // no comma here
        },

        { // Question 15
            "q": "Choose your answer",
            "a": [
                {"option": "radish",    "correct": true},
                {"option": "turnip",    "correct": false},
                {"option": "both are OK",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>radish</p>" // no comma here
        },

        { // Question 16
            "q": "Choose your answer",
            "a": [
                {"option": "sun beans",    "correct": false},
                {"option": "green beans",    "correct": false},
                {"option": "broad beans",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>broad beans</p>" // no comma here
        },

        { // Question 17
            "q": "Choose your answer",
            "a": [
                {"option": "renkon",    "correct": false},
                {"option": "bentley root",    "correct": false},
                {"option": "lotus root",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>lotus root</p>" // no comma here
        },

        { // Question 18
            "q": "Choose your answer",
            "a": [
                {"option": "Japanese cabbage",    "correct": false},
                {"option": "Korean cabbage",    "correct": false},
                {"option": "Chinese cabbage",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>Chinese cabbage</p>" // no comma here
        },

         { // Question 19
            "q": "Choose your answer",
            "a": [
                {"option": "Japanese potato",    "correct": false},
                {"option": "red potato",    "correct": false},
                {"option": "sweet potato",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>sweet potato</p>" // no comma here
        },

        { // Question 20
            "q": "Choose your answer",
            "a": [
                {"option": "spinach",    "correct": true},
                {"option": "turnip",    "correct": false},
                {"option": "leek",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>spinach</p>" // no comma here
        },

        { // Question 21
            "q": "Choose your answer",
            "a": [
                {"option": "bean grass",    "correct": false},
                {"option": "okra",    "correct": false},
                {"option": "bean sprouts",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>bean sprouts</p>" // no comma here
        },   

        { // Question 22
            "q": "Choose your answer",
            "a": [
                {"option": "Japanese yam",    "correct": false},
                {"option": "Korean yam",     "correct": false},
                {"option": "Chinese yam",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>Chinese yam</p>" // no comma here
        },   

        { // Question 23
            "q": "Choose your answer",
            "a": [
                {"option": "bell pepper",    "correct": false},
                {"option": "capsicum",     "correct": false},
                {"option": "both are OK",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>both are OK</p>" // no comma here
        },

        { // Question 24
            "q": "Choose your answer",
            "a": [
                {"option": "sunbean",    "correct": false},
                {"option": "round bean",     "correct": false},
                {"option": "soybean",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>soybean</p>" // no comma here
        },

        { // Question 25
            "q": "Choose your answer",
            "a": [
                {"option": "Welsh onion",    "correct": true},
                {"option": "Chinese onion",     "correct": false},
                {"option": "leek",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>Welsh onion</p>" // no comma here
        },
		
		{ // Question 26
            "q": "Choose your answer",
            "a": [
                {"option": "zucchini",    "correct": false},
                {"option": "courgette",     "correct": false},
                {"option": "both are OK",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>both are OK</p>" // no comma here
        },
		{ // Question 27
            "q": "Choose your answer",
            "a": [
                {"option": "ginger",    "correct": true},
                {"option": "yam",     "correct": false},
                {"option": "acorn",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>both are OK</p>",
            "incorrect": "<p><span>Fail!</span>both are OK</p>" // no comma here
        },
		{ // Question 28
            "q": "Choose your answer",
            "a": [
                {"option": "walnut",    "correct": false},
                {"option": "chestnut",     "correct": true},
                {"option": "acorn",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span>chestnut</p>" // no comma here
        },

    ]
};
