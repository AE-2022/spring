// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Abbreviations 2",
        "main":    "",
        "results": "<h5>Block 1 test study.</h5>",
        "level1":  "Excellent!",
        "level2":  "Good!",
        "level3":  "Average",
        "level4":  "Bad",
        "level5":  "Shocking!" // no comma here
    },
    "questions": [
        { // Question 1
            "q": "U.F.O. = ?",
            "a": [
                {"option": "unknown foreign object",    "correct": false},
                {"option": "unidentified flying object",    "correct": true},
                {"option": "ursurper fragrant oracle",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!<br>U.F.O. = unidentified flying object</span></p>",
            "incorrect": "<p><span>Fail.</span>U.F.O. = unidentified flying object</p>" // no comma here
        },
        { // Question 2
            "q": "BRB = ?",
            "a": [
                {"option": "Bring Right Beer ",    "correct": false},
                {"option": "Be Right Back",    "correct": true},
                {"option": "Be Right Boy",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!<br>BRB = Be Right Back<br>すぐ戻る</span> </p>",
            "incorrect": "<p><span>Fail.</span>BRB = Be Right Back<br>すぐ戻る</p>" // no comma here
        },
       
        { // Question 3
            "q": "BFF = ?",
            "a": [
                {"option": "Best Friends Forever",    "correct": true},
                {"option": "Behind Force Field",     "correct": false},
                {"option": "Be Funky and Friendly",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!<br>BFF = Best Friends Forever<br>永遠の大親友</span></p>",
            "incorrect": "<p><span>Fail!</span>BFF = Best Friends Forever<br>永遠の大親友</p>" // no comma here
        },
    
        { // Question 4
            "q": "LOL = ?",
            "a": [
                {"option": "Like Or Loath",    "correct": false},
                {"option": "Lots Of Laundry",     "correct": false},
                {"option": "Laugh Out Loud",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!<br>LOL = Laugh Out Loud<br>大爆笑だ</span> </p>",
            "incorrect": "<p><span>Fail!</span>LOL = Laugh Out Loud<br>大爆笑だ</p>" // no comma here
        },

         { // Question 5
            "q": "DIY = ?",
            "a": [
                {"option": "Did It Yesterday",    "correct": false},
                {"option": "Dis It Yo",     "correct": false},
                {"option": "Do It Yourself",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!<br>DIY = Do It Yourself<br>自分でやろう</span></p>",
            "incorrect": "<p><span>Fail!</span>DIY = Do It Yourself<br>自分でやろう</p>" // no comma here
        },

        { // Question 6
            "q": "AFK = ?",
            "a": [
                {"option": "All For Kicks ",    "correct": false},
                {"option": "Always Funky and Kooky",     "correct": false},
                {"option": "Away From Keyboard",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!<br>AFK = Away From Keyboard<br>キーボードから離れて</span></p>",
            "incorrect": "<p><span>Fail!</span>AFK = Away From Keyboard<br>キーボードから離れて</p>" // no comma here
        },

        { // Question 7
            "q": "IDK = ?",
            "a": [
                {"option": "I Don't Know",    "correct": true},
                {"option": "I Don't Kitty",     "correct": false},
                {"option": "I Don't Kick",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!<br>IDK = I Don't Know<br>知りません</span></p>",
            "incorrect": "<p><span>Fail!</span>IDK = I Don't Know<br>知りません</p>" // no comma here
        },

        { // Question 8
            "q": "YOLO = ?",
            "a": [
                {"option": "You Only Love Once",    "correct": false},
                {"option": "You Only Live Once",     "correct": true},
                {"option": "You Only Live Online",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!<br>YOLO = You Only Live Once<br>人生は一度きりです</span></p>",
            "incorrect": "<p><span>Fail!</span>YOLO = You Only Live Once<br>人生は一度きりです</p>" // no comma here
        },  

    ]
};
