// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Science",
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
                {"option": "helium",    "correct": false},
                {"option": "hydrogen",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail.</span> hydrogen</p>" // no comma here
        },
        { // Question 2
            "q": "Choose your answer",
            "a": [
                {"option": "lead",    "correct": false},
                {"option": "mercury",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span> </p>",
            "incorrect": "<p><span>Fail.</span> mercury</p>" // no comma here
        },
       
        { // Question 3
            "q": "Choose your answer",
            "a": [
                {"option": "nitrogen",     "correct": true},
                {"option": "nitroxide",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> nitrogen</p>" // no comma here
        },
    
        { // Question 4
            "q": "Choose your answer",
            "a": [
                {"option": "lead",     "correct": true},
                {"option": "mercury",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span> </p>",
            "incorrect": "<p><span>Fail!</span> lead</p>" // no comma here
        },

         { // Question 5
            "q": "Choose your answer",
            "a": [
                {"option": "キセノン",     "correct": false},
                {"option": "ゼィーノン",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> ゼィーノン</p>" // no comma here
        },

        { // Question 6
            "q": "Choose your answer",
            "a": [
                {"option": "sulphur",     "correct": true},
                {"option": "selenium",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> sulphur</p>" // no comma here
        },

        { // Question 7
            "q": "Choose your answer",
            "a": [
                {"option": "aluminium",     "correct": false},
                {"option": "silver",      "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> silver</p>" // no comma here
        },

        { // Question 8
            "q": "Choose your answer",
            "a": [
                {"option": "chlorine",     "correct": true},
                {"option": "clorium",      "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> chlorine</p>" // no comma here
        },

         { // Question 9
            "q": "Choose your answer",
            "a": [
                {"option": "fluorine",    "correct": true},
                {"option": "flouride",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> fluorine</p>" // no comma here
        },

        { // Question 10
            "q": "Choose your answer",
            "a": [
                {"option": "natrium",    "correct": false},
                {"option": "sodium",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> sodium</p>" // no comma here
        },

        { // Question 11
            "q": "Choose your answer",
            "a": [
                {"option": "ニオン",    "correct": true},
                {"option": "ネオン",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> ニオン</p>" // no comma here
        },

        { // Question 12
            "q": "Choose your answer",
            "a": [
                {"option": "kallium",     "correct": false},
                {"option": "potassium",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> potassium</p>" // no comma here
        },

        { // Question 13
            "q": "Choose your answer",
            "a": [
                {"option": "The Big Bang",    "correct": true},
                {"option": "big ban",     "correct": false},
                {"option": "the big cosmic",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> The Big Bang</p>" // no comma here
        },

        { // Question 14
            "q": "Choose your answer",
            "a": [
                {"option": "evolution",    "correct": true},
                {"option": "revolution",     "correct": false},
                {"option": "devolution",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> evolution</p>" // no comma here
        },

        { // Question 15
            "q": "Choose your answer",
            "a": [
                {"option": "genetics",    "correct": true},
                {"option": "gene therapy",     "correct": false},
                {"option": "gene collusion",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> genetics</p>" // no comma here
        },

        { // Question 16
            "q": "Choose your answer",
            "a": [
                {"option": "molecule",    "correct": true},
                {"option": "atom",     "correct": false},
                {"option": "particle",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> molecule</p>" // no comma here
        },

        { // Question 17
            "q": "Choose your answer",
            "a": [
                {"option": "particle",    "correct": true},
                {"option": "molecule",     "correct": false},
                {"option": "atom",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> particle</p>" // no comma here
        },

         { // Question 18
            "q": "Choose your answer",
            "a": [
                {"option": "vacuum",    "correct": true},
                {"option": "airless",     "correct": false},
                {"option": "vacuosity",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> vacuum</p>" // no comma here
        },

        { // Question 19
            "q": "Choose your answer",
            "a": [
                {"option": "neutron",    "correct": true},
                {"option": "proton",     "correct": false},
                {"option": "electron",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> neutron</p>" // no comma here
        },

        { // Question 20
            "q": "Choose your answer",
            "a": [
                {"option": "hypothesis",    "correct": true},
                {"option": "theory",     "correct": false},
                {"option": "law",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> hypothesis</p>" // no comma here
        },   

        { // Question 21
            "q": "Choose your answer",
            "a": [
                {"option": "pourer",    "correct": false},
                {"option": "beaker",     "correct": true},
                {"option": "flask",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> beaker</p>" // no comma here
        },   

        { // Question 22
            "q": "Choose your answer",
            "a": [
                {"option": "pourer",    "correct": false},
                {"option": "funnel",     "correct": true},
                {"option": "sieve",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> funnel</p>" // no comma here
        },   

        { // Question 23
            "q": "Choose your answer",
            "a": [
                {"option": "test tube",    "correct": true},
                {"option": "beaker",     "correct": false},
                {"option": "flask",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> test tube</p>" // no comma here
        },  

        { // Question 24
            "q": "Choose your answer",
            "a": [
                {"option": "barometer",    "correct": true},
                {"option": "thermometer",     "correct": false},
                {"option": "weather meter",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> barometer</p>" // no comma here
        },  

        { // Question 25
            "q": "Choose your answer",
            "a": [
                {"option": "balance meter",    "correct": false},
                {"option": "balance scale",     "correct": true},
                {"option": "balancer",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> balance scale</p>" // no comma here
        },  

        { // Question 26
            "q": "Choose your answer",
            "a": [
                {"option": "astrology",    "correct": false},
                {"option": "star science",     "correct": false},
                {"option": "astronomy",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> astronomy</p>" // no comma here
        },  

        { // Question 27
            "q": "Choose your answer",
            "a": [
                {"option": "seismic science",    "correct": false},
                {"option": "earth science",     "correct": false},
                {"option": "geology",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> geology</p>" // no comma here
        },  


        { // Question 28
            "q": "Choose your answer",
            "a": [
                {"option": "geology",    "correct": false},
                {"option": "biology",     "correct": false},
                {"option": "physics",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> physics</p>" // no comma here
        },  


        { // Question 29
            "q": "Choose your answer",
            "a": [
                {"option": "zoology",    "correct": true},
                {"option": "animal science",     "correct": false},
                {"option": "cryptology",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> zoology</p>" // no comma here
        },  

        { // Question 30
            "q": "Choose your answer",
            "a": [
                {"option": "plant science",    "correct": false},
                {"option": "biology",     "correct": true},
                {"option": "geology",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> biology</p>" // no comma here
        },  
		
		{ // Question 31
            "q": "Choose your answer",
            "a": [
                {"option": "geology",    "correct": false},
                {"option": "anthropology",     "correct": false},
                {"option": "archaeology",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> archaeology</p>" // no comma here
        }, 
		
		{ // Question 32
            "q": "Choose your answer",
            "a": [
                {"option": "Isaac Newton",    "correct": true},
                {"option": "Copernicus",     "correct": false},
                {"option": "Thomas Edison",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Isaac Newton</p>" // no comma here
        }, 
		
		{ // Question 33
            "q": "Choose your answer",
            "a": [
                {"option": "Isaac Newton",    "correct": false},
                {"option": "Charles Darwin",     "correct": true},
                {"option": "Steven Hawking",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Charles Darwin</p>" // no comma here
        }, 
		
		{ // Question 34
            "q": "Choose your answer",
            "a": [
                {"option": "Marie Curie",    "correct": true},
                {"option": "Cynthia Curie",     "correct": false},
                {"option": "Marge Simpson",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Marie Curie</p>" // no comma here
        }, 
		
		{ // Question 35
            "q": "Choose your answer",
            "a": [
                {"option": "Thomas Edison",    "correct": false},
                {"option": "Nicola Tesla",     "correct": true},
                {"option": "Galileo Galilei",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Nicola Tesla</p>" // no comma here
        }, 
		
		{ // Question 36
            "q": "Choose your answer",
            "a": [
                {"option": "Leonardo Da Vinci",    "correct": true},
                {"option": "Charles Darwin",     "correct": false},
                {"option": "Isaac Newton",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Correct!</span></p>",
            "incorrect": "<p><span>Fail!</span> Leonardo Da Vinci</p>" // no comma here
        },


    ]
};
