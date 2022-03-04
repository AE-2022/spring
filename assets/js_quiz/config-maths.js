var quizJSON = {
    "info": {
        "name":    "Mathematics",
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
                {"option": "incalculable",    "correct": false},
                {"option": "odd number",     "correct": false},
                {"option": "prime number",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>prime number</p>",
            "incorrect": "<p><span>Fail.</span>prime number</p>" // no comma here
        },
        { // Question 2
            "q": "Choose your answer",
            "a": [
                {"option": "bell curve",    "correct": true},
                {"option": "hill curve",     "correct": false},
                {"option": "both are OK",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>bell curve</p>",
            "incorrect": "<p><span>Fail.</span>bell curve</p>" // no comma here
        },
       
        { // Question 3
            "q": "Choose your answer",
            "a": [
                {"option": "googol",    "correct": false},
                {"option": "infinity",     "correct": true},
                {"option": "lemniscate",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>infinity</p>",
            "incorrect": "<p><span>Fail!</span>infinity</p>" // no comma here
        },
    
        { // Question 4
            "q": "Choose your answer",
            "a": [
                {"option": "ben diagram",    "correct": false},
                {"option": "circle chart",     "correct": false},
                {"option": "venn diagram",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>venn diagram</p>",
            "incorrect": "<p><span>Fail!</span>venn diagram</p>" // no comma here
        },

         { // Question 5
            "q": "Choose your answer",
            "a": [
                {"option": "square cube",    "correct": false},
                {"option": "square power",     "correct": false},
                {"option": "square root",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>square root</p>",
            "incorrect": "<p><span>Fail!</span>square root</p>" // no comma here
        },

        { // Question 6
            "q": "Choose your answer",
            "a": [
                {"option": "cubic root",    "correct": true},
                {"option": "square root",     "correct": false},
                {"option": "tri root",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>cubic root</p>",
            "incorrect": "<p><span>Fail!</span>cubic root</p>" // no comma here
        },

        { // Question 7
            "q": "Choose your answer",
            "a": [
                {"option": "base",    "correct": true},
                {"option": "flat",     "correct": false},
                {"option": "plane",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>base</p>",
            "incorrect": "<p><span>Fail!</span>base</p>" // no comma here
        },

        { // Question 8
            "q": "Choose your answer",
            "a": [
                {"option": "diameter",    "correct": false},
                {"option": "radius",     "correct": true},
                {"option": "ulna",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>radius</p>",
            "incorrect": "<p><span>Fail!</span>radius</p>" // no comma here
        },

         { // Question 9
            "q": "Choose your answer",
            "a": [
                {"option": "circumference",    "correct": false},
                {"option": "diameter",    "correct": true},
                {"option": "radius",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>diameter</p>",
            "incorrect": "<p><span>Fail!</span>diameter</p>" // no comma here
        },

        { // Question 10
            "q": "Choose your answer",
            "a": [
                {"option": "circumference",    "correct": true},
                {"option": "diameter",    "correct": false},
                {"option": "radius",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>circumference</p>",
            "incorrect": "<p><span>Fail!</span>circumference</p>" // no comma here
        },

        { // Question 11
            "q": "Choose your answer",
            "a": [
                {"option": "numeral",    "correct": false},
                {"option": "digit",     "correct": false},
                {"option": "both are OK",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>both are OK</p>",
            "incorrect": "<p><span>Fail!</span>both are OK</p>" // no comma here
        },

        { // Question 12
            "q": "Choose your answer",
            "a": [
                {"option": "apex",    "correct": true},
                {"option": "top angle",     "correct": false},
                {"option": "corner point",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>apex</p>",
            "incorrect": "<p><span>Fail!</span>apex</p>" // no comma here
        },

        { // Question 13
            "q": "Choose your answer",
            "a": [
                {"option": "statistics",    "correct": false},
                {"option": "calculus",     "correct": false},
                {"option": "algebra",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>algebra</p>",
            "incorrect": "<p><span>Fail!</span>algebra</p>" // no comma here
        },

        { // Question 14
            "q": "Choose your answer",
            "a": [
                {"option": "heptagon",    "correct": true},
                {"option": "hexagon",     "correct": false},
                {"option": "seven polygon",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>heptagon</p>",
            "incorrect": "<p><span>Fail!</span>heptagon</p>" // no comma here
        },

        { // Question 15
            "q": "Choose your answer",
            "a": [
                {"option": "ninagon",    "correct": false},
                {"option": "nonagon",     "correct": true},
                {"option": "octagon",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>nonagon</p>",
            "incorrect": "<p><span>Fail!</span>nonagon</p>" // no comma here
        },

        { // Question 16
            "q": "Choose your answer",
            "a": [
                {"option": "four-threes",    "correct": false},
                {"option": "fourth-thirds",     "correct": false},
                {"option": "three-quarters",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>three-quarters</p>",
            "incorrect": "<p><span>Fail!</span>three-quarters</p>" // no comma here
        },

        { // Question 17
            "q": "Choose your answer",
            "a": [
                {"option": "five-seconds",    "correct": false},
                {"option": "second-fifths",     "correct": false},
                {"option": "two-fifths",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>two-fifths</p>",
            "incorrect": "<p><span>Fail!</span>two-fifths</p>" // no comma here
        },

         { // Question 18
            "q": "Choose your answer",
            "a": [
                {"option": "compass",    "correct": false},
                {"option": "angle ruler",     "correct": false},
                {"option": "protractor",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>protractor<</p>",
            "incorrect": "<p><span>Fail!</span>protractor</p>" // no comma here
        },

        { // Question 19
            "q": "Choose your answer",
            "a": [
                {"option": "oh dot oh five",    "correct": false},
                {"option": "zero dot oh five",     "correct": false},
                {"option": "zero point zero five",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>zero point zero five</p>",
            "incorrect": "<p><span>Fail!</span>zero point zero five</p>" // no comma here
        },

        { // Question 20
            "q": "Choose your answer",
            "a": [
                {"option": "statistics",    "correct": false},
                {"option": "calculus",     "correct": false},
                {"option": "geometry",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>geometry</p>",
            "incorrect": "<p><span>Fail!</span>geometry</p>" // no comma here
        },  

		{ // Question 21
            "q": "Choose your answer",
            "a": [
                {"option": "abacus",    "correct": true},
                {"option": "slide counter",     "correct": false},
                {"option": "Chinese counter",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>abacus</p>",
            "incorrect": "<p><span>Fail!</span>abacus</p>" // no comma here
        },  		

        { // Question 22
            "q": "Choose your answer",
            "a": [
                {"option": "addition",    "correct": true},
                {"option": "division",     "correct": false},
                {"option": "subtraction",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>addition</p>",
            "incorrect": "<p><span>Fail!</span>addition</p>" // no comma here
        },   

        { // Question 23
            "q": "Choose your answer",
            "a": [
                {"option": "subtraction",    "correct": true},
                {"option": "multiplication",     "correct": false},
                {"option": "addition",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>subtraction</p>",
            "incorrect": "<p><span>Fail!</span>subtraction</p>" // no comma here
        },   

        { // Question 24
            "q": "Choose your answer",
            "a": [
                {"option": "addition",    "correct": false},
                {"option": "division",     "correct": true},
                {"option": "multiplication",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>division</p>",
            "incorrect": "<p><span>Fail!</span>division</p>" // no comma here
        },   

        { // Question 25
            "q": "Choose your answer",
            "a": [
                {"option": "addition",    "correct": false},
                {"option": "multiplication",     "correct": true},
                {"option": "times",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>multiplication</p>",
            "incorrect": "<p><span>Fail!</span>multiplication</p>" // no comma here
        },
		
		{ // Question 26
            "q": "Choose your answer",
            "a": [
                {"option": "sum",    "correct": false},
                {"option": "total",     "correct": false},
                {"option": "both are OK",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>both are OK</p>",
            "incorrect": "<p><span>Fail!</span>both are OK</p>" // no comma here
        }, 
		
		{ // Question 27
            "q": "Choose your answer",
            "a": [
                {"option": "adjacent",    "correct": false},
                {"option": "parallel",     "correct": false},
                {"option": "perpendicular",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span>perpendicular</p>",
            "incorrect": "<p><span>Fail!</span>perpendicular</p>" // no comma here
        }, 
		
		{ // Question 28
            "q": "Choose your answer",
            "a": [
                {"option": "factor / product",    "correct": true},
                {"option": "factotum / sum",     "correct": false},
                {"option": "fact / factor",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span>factor / product</p>",
            "incorrect": "<p><span>Fail!</span>factor / product/p>" // no comma here
        }, 
        
    ]
};
