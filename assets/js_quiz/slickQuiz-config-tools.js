// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Tools",
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
                {"option": "allen key",    "correct": true},
                {"option": "hex wrench",    "correct": false},
                {"option": "loupe",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail.</span> Allen key</p>" // no comma here
        },
        { // Question 2
            "q": "Choose your answer",
            "a": [
                {"option": "wood plane",    "correct": true},
                {"option": "wood shaver",    "correct": false},
                {"option": "wood level",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span> </p>",
            "incorrect": "<p><span>Fail.</span> wood plane</p>" // no comma here
        },
       
        { // Question 3
            "q": "Choose your answer",
            "a": [
                {"option": "pinchers",    "correct": false},
                {"option": "pliers",     "correct": true},
                {"option": "nippers",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> pliers</p>" // no comma here
        },
    
        { // Question 4
            "q": "Choose your answer",
            "a": [
                {"option": "vice",    "correct": true},
                {"option": "gripper",     "correct": false},
                {"option": "clamp",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span> </p>",
            "incorrect": "<p><span>Fail!</span> vice</p>" // no comma here
        },

         { // Question 5
            "q": "Choose your answer",
            "a": [
                {"option": "phillips screwdriver",    "correct": true},
                {"option": "plus screwdriver",     "correct": false},
                {"option": "double driver",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> phillips screwdriver</p>" // no comma here
        },

        { // Question 6
            "q": "Choose your answer",
            "a": [
                {"option": "flat-head screwdriver",    "correct": true},
                {"option": "minus-head screwdriver",     "correct": false},
                {"option": "single driver",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> flat-head screwdriver</p>" // no comma here
        },

        { // Question 7
            "q": "Choose your answer",
            "a": [
                {"option": "wire pincher",    "correct": false},
                {"option": "wire cutters",     "correct": true},
                {"option": "pliers",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> wire cutters</p>" // no comma here
        },

        { // Question 8
            "q": "Choose your answer",
            "a": [
                {"option": "fine-cut saw",    "correct": false},
                {"option": "hacksaw",     "correct": true},
                {"option": "mini saw",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> hacksaw</p>" // no comma here
        },

         { // Question 9
            "q": "Choose your answer",
            "a": [
                {"option": "hook bar",    "correct": false},
                {"option": "crowbar",    "correct": true},
                {"option": "freeman bar",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> crowbar</p>" // no comma here
        },

        { // Question 10
            "q": "Choose your answer",
            "a": [
                {"option": "solder heater",    "correct": false},
                {"option": "soldering iron",    "correct": true},
                {"option": "solder melder",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> soldering iron</p>" // no comma here
        },

        { // Question 11
            "q": "Choose your answer",
            "a": [
                {"option": "sandpaper",    "correct": true},
                {"option": "rough paper",     "correct": false},
                {"option": "diamond paper",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> sandpaper</p>" // no comma here
        },

        { // Question 12
            "q": "Choose your answer",
            "a": [
                {"option": "wood hammer",    "correct": false},
                {"option": "mallet",     "correct": true},
                {"option": "sledgehammer",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> mallet</p>" // no comma here
        },

        { // Question 13
            "q": "Choose your answer",
            "a": [
                {"option": "powerhammer",    "correct": false},
                {"option": "sledgehammer",     "correct": true},
                {"option": "heavy-duty mallet",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> sledgehammer</p>" // no comma here
        },

        { // Question 14
            "q": "Choose your answer",
            "a": [
                {"option": "rasp",    "correct": false},
                {"option": "wood shaver",     "correct": false},
                {"option": "chisel",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> chisel</p>" // no comma here
        },

        { // Question 15
            "q": "Choose your answer",
            "a": [
                {"option": "wire cutter",    "correct": false},
                {"option": "wire stripper",     "correct": true},
                {"option": "wire gauge",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> wire stripper</p>" // no comma here
        },

        { // Question 16
            "q": "Choose your answer",
            "a": [
                {"option": "wheelbarrow",    "correct": true},
                {"option": "dumper cart",     "correct": false},
                {"option": "dumpbarrow",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> wheelbarrow</p>" // no comma here
        },

        { // Question 17
            "q": "Choose your answer",
            "a": [
                {"option": "flamer",    "correct": false},
                {"option": "igniter",     "correct": false},
                {"option": "blowtorch",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> blowtorch</p>" // no comma here
        },

         { // Question 18
            "q": "Choose your answer",
            "a": [
                {"option": "staple gun",    "correct": true},
				{"option": "staple blaster",    "correct": false},
                {"option": "staple wrench",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> staple gun</p>" // no comma here
        },

        { // Question 19
            "q": "Choose your answer",
            "a": [
                {"option": "horizon",    "correct": false},
				{"option": "line measure",    "correct": false},
                {"option": "level",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> level</p>" // no comma here
        },

        { // Question 20
            "q": "Choose your answer",
            "a": [
                {"option": "try square",    "correct": true},
                {"option": "corner level",     "correct": false},
                {"option": "t-square",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> try square</p>" // no comma here
        },   

        { // Question 21
            "q": "Choose your answer",
            "a": [
                {"option": "tee-ax",    "correct": false},
                {"option": "double ax",     "correct": false},
                {"option": "pick ax",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> pick ax</p>" // no comma here
        },   

        { // Question 22
            "q": "Choose your answer",
            "a": [
                {"option": "monkey wrench",    "correct": true},
                {"option": "dog wrench",     "correct": false},
                {"option": "gator wrench",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> monkey wrench</p>" // no comma here
        },   

        { // Question 23
            "q": "Choose your answer",
            "a": [
                 {"option": "hand drill",    "correct": false},
                {"option": "cordless drill",     "correct": true},
                {"option": "battery drill",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> cordless drill</p>" // no comma here
        },  

        { // Question 24
            "q": "Choose your answer",
            "a": [
                {"option": "mini crane",    "correct": false},
                {"option": "cherry picker",     "correct": true},
                {"option": "portable elevator",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> cherry picker</p>" // no comma here
        },
        
        { // Question 25
            "q": "Choose your answer",
            "a": [
                {"option": "concrete bucket",    "correct": false},
                {"option": "concrete machine",     "correct": false},
                {"option": "concrete mixer",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> concrete mixer</p>" // no comma here
        }, 
		
		{ // Question 26
            "q": "Choose your answer",
            "a": [
                {"option": "ribbon measure",    "correct": false},
                {"option": "tape measure",     "correct": true},
                {"option": "line measure",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> tape measure</p>" // no comma here
        }, 
		
		{ // Question 27
            "q": "Choose your answer",
            "a": [
                {"option": "circle cutter",    "correct": false},
                {"option": "circular saw",     "correct": true},
                {"option": "rotary slicer",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> circular saw</p>" // no comma here
        }, 
		
		{ // Question 28
            "q": "Choose your answer",
            "a": [
                {"option": "anvil",    "correct": true},
                {"option": "vice",     "correct": false},
                {"option": "metal horn",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> anvil</p>" // no comma here
        }, 
    ]
};
