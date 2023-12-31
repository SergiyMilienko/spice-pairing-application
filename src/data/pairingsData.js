const goodPairings = [
    ["cardamon","clove"],
    ["cardamon","lemongrass"],
    ["cardamon","oregano"],
    ["cardamon","saffron"],
    ["cardamon","thyme"],
    ["cardamon","turmeric"],
    ["cardamon","rosemary"],
    ["cardamon","fennel"],
    ["cardamon","black pepper"],
    ["cardamon","caraway"],
    ["cardamon","bay leaves"],
    ["cardamon","carob"],
    ["cardamon","poppy seeds"],
    ["cinnamon","clove"],
    ["cinnamon","cumin"],
    ["cinnamon","thyme"],
    ["cinnamon","vanilla"],
    ["cinnamon","ginger"],
    ["cinnamon","paprika"],
    ["cinnamon","rosemary"],
    ["cinnamon","coriander"],
    ["cinnamon","garlic"],
    ["cinnamon","basil"],
    ["cinnamon","black pepper"],
    ["cinnamon","dill"],
    ["cinnamon","chives"],
    ["cinnamon","marjoram"],
    ["cinnamon","poppy seeds"],
    ["clove","saffron"],
    ["clove","thyme"],
    ["clove","paprika"],
    ["clove","fennel"],
    ["clove","garlic"],
    ["clove","curry powder"],
    ["clove","fenugreek"],
    ["clove","sage"],
    ["clove","carob"],
    ["clove","marjoram"],
    ["cumin","thyme"],
    ["cumin","paprika"],
    ["cumin","fennel"],
    ["cumin","basil"],
    ["cumin","chili powder"],
    ["cumin","fenugreek"],
    ["cumin","mustard seeds"],
    ["cumin","parsley"],
    ["cumin","bay leaves"],
    ["cumin","marjoram"],
    ["lemongrass","thyme"],
    ["lemongrass","dill"],
    ["lemongrass","mustard seeds"],
    ["lemongrass","parsley"],
    ["lemongrass","bay leaves"],
    ["lemongrass","carob"],
    ["lemongrass","tarragon"],
    ["saffron","thyme"],
    ["saffron","paprika"],
    ["saffron","garlic"],
    ["saffron","basil"],
    ["saffron","anise"],
    ["thyme","ginger"],
    ["thyme","paprika"],
    ["thyme","rosemary"],
    ["thyme","nutmeg"],
    ["thyme","garlic"],
    ["thyme","chili powder"],
    ["thyme","fenugreek"],
    ["thyme","mustard seeds"],
    ["thyme","parsley"],
    ["thyme","anise"],
    ["thyme","marjoram"],
    ["thyme","tarragon"],
    ["turmeric","nutmeg"],
    ["turmeric","chili powder"],
    ["turmeric","fenugreek"],
    ["turmeric","anise"],
    ["turmeric","carob"],
    ["turmeric","tarragon"],
    ["vanilla","paprika"],
    ["vanilla","nutmeg"],
    ["vanilla","curry powder"],
    ["vanilla","dill"],
    ["vanilla","parsley"],
    ["vanilla","anise"],
    ["vanilla","carob"],
    ["vanilla","poppy seeds"],
    ["ginger","sage"],
    ["ginger","carob"],
    ["ginger","poppy seeds"],
    ["paprika","rosemary"],
    ["paprika","nutmeg"],
    ["paprika","chili powder"],
    ["paprika","dill"],
    ["paprika","mustard seeds"],
    ["paprika","sage"],
    ["paprika","bay leaves"],
    ["paprika","chives"],
    ["paprika","tarragon"],
    ["rosemary","garlic"],
    ["rosemary","black pepper"],
    ["rosemary","caraway"],
    ["rosemary","chili powder"],
    ["rosemary","curry powder"],
    ["rosemary","mustard seeds"],
    ["rosemary","parsley"],
    ["rosemary","tarragon"],
    ["nutmeg","coriander"],
    ["nutmeg","basil"],
    ["nutmeg","mustard seeds"],
    ["nutmeg","parsley"],
    ["nutmeg","anise"],
    ["nutmeg","chives"],
    ["coriander","fennel"],
    ["coriander","garlic"],
    ["coriander","black pepper"],
    ["coriander","mustard seeds"],
    ["coriander","parsley"],
    ["coriander","anise"],
    ["coriander","carob"],
    ["coriander","marjoram"],
    ["coriander","poppy seeds"],
    ["fennel","garlic"],
    ["fennel","caraway"],
    ["fennel","dill"],
    ["fennel","fenugreek"],
    ["fennel","sage"],
    ["fennel","bay leaves"],
    ["fennel","marjoram"],
    ["fennel","tarragon"],
    ["garlic","fenugreek"],
    ["garlic","parsley"],
    ["garlic","chives"],
    ["garlic","marjoram"],
    ["garlic","poppy seeds"],
    ["basil","chili powder"],
    ["basil","curry powder"],
    ["basil","dill"],
    ["basil","mustard seeds"],
    ["basil","sage"],
    ["basil","poppy seeds"],
    ["black pepper","caraway"],
    ["black pepper","curry powder"],
    ["black pepper","sage"],
    ["black pepper","anise"],
    ["black pepper","bay leaves"],
    ["black pepper","carob"],
    ["black pepper","poppy seeds"],
    ["caraway","chili powder"],
    ["caraway","curry powder"],
    ["chili powder","dill"],
    ["chili powder","mustard seeds"],
    ["chili powder","anise"],
    ["chili powder","marjoram"],
    ["chili powder","tarragon"],
    ["curry powder","dill"],
    ["curry powder","carob"],
    ["curry powder","chives"],
    ["curry powder","marjoram"],
    ["dill","sage"],
    ["dill","anise"],
    ["dill","carob"],
    ["fenugreek","parsley"],
    ["fenugreek","sage"],
    ["fenugreek","carob"],
    ["fenugreek","chives"],
    ["mustard seeds","anise"],
    ["mustard seeds","bay leaves"],
    ["mustard seeds","chives"],
    ["mustard seeds","marjoram"],
    ["mustard seeds","tarragon"],
    ["parsley","anise"],
    ["parsley","tarragon"],
    ["sage","anise"],
    ["sage","tarragon"],
    ["anise","bay leaves"],
    ["anise","carob"],
    ["anise","chives"],
    ["anise","marjoram"],
    ["anise","tarragon"],
    ["bay leaves","carob"],
    ["bay leaves","marjoram"],
    ["marjoram","poppy seeds"],
    ["marjoram","tarragon"],
    ['oregano', 'saffron'],
    ['oregano', 'vanilla'],
    ['oregano', 'rosemary'],
    ['oregano', 'fennel'],
    ['oregano', 'black pepper'],
    ['oregano', 'curry powder'],
    ['oregano', 'mustard seeds'],
    ['oregano', 'anise'],
    ['oregano', 'chives'],
    ['oregano', 'tarragon'],
]

const neutralPairings = [
    ["cardamon","cinnamon"],
    ["cardamon","cumin"],
    ["cardamon","coriander"],
    ["cardamon","garlic"],
    ["cardamon","basil"],
    ["cardamon","chili powder"],
    ["cardamon","curry powder"],
    ["cardamon","dill"],
    ["cardamon","fenugreek"],
    ["cardamon","mustard seeds"],
    ["cardamon","anise"],
    ["cinnamon","saffron"],
    ["cinnamon","nutmeg"],
    ["cinnamon","fennel"],
    ["cinnamon","chili powder"],
    ["cinnamon","curry powder"],
    ["cinnamon","fenugreek"],
    ["cinnamon","mustard seeds"],
    ["cinnamon","anise"],
    ["cinnamon","bay leaves"],
    ["cinnamon","carob"],
    ["cinnamon","tarragon"],
    ["clove","cumin"],
    ["clove","lemongrass"],
    ["clove","oregano"],
    ["clove","ginger"],
    ["clove","coriander"],
    ["clove","basil"],
    ["clove","caraway"],
    ["clove","mustard seeds"],
    ["clove","bay leaves"],
    ["clove","poppy seeds"],
    ["cumin","oregano"],
    ["cumin","saffron"],
    ["cumin","turmeric"],
    ["cumin","ginger"],
    ["cumin","rosemary"],
    ["cumin","coriander"],
    ["cumin","black pepper"],
    ["cumin","caraway"],
    ["cumin","curry powder"],
    ["cumin","sage"],
    ["cumin","anise"],
    ["cumin","chives"],
    ["lemongrass","oregano"],
    ["lemongrass","saffron"],
    ["lemongrass","turmeric"],
    ["lemongrass","vanilla"],
    ["lemongrass","paprika"],
    ["lemongrass","nutmeg"],
    ["lemongrass","coriander"],
    ["lemongrass","fennel"],
    ["lemongrass","garlic"],
    ["lemongrass","basil"],
    ["lemongrass","chili powder"],
    ["lemongrass","curry powder"],
    ["lemongrass","fenugreek"],
    ["lemongrass","chives"],
    ["saffron","ginger"],
    ["saffron","nutmeg"],
    ["saffron","caraway"],
    ["saffron","curry powder"],
    ["saffron","dill"],
    ["saffron","mustard seeds"],
    ["saffron","carob"],
    ["saffron","marjoram"],
    ["thyme","turmeric"],
    ["thyme","coriander"],
    ["thyme","basil"],
    ["thyme","black pepper"],
    ["thyme","caraway"],
    ["thyme","sage"],
    ["thyme","bay leaves"],
    ["thyme","carob"],
    ["thyme","poppy seeds"],
    ["turmeric","vanilla"],
    ["turmeric","ginger"],
    ["turmeric","rosemary"],
    ["turmeric","caraway"],
    ["turmeric","curry powder"],
    ["turmeric","dill"],
    ["turmeric","sage"],
    ["turmeric","poppy seeds"],
    ["vanilla","rosemary"],
    ["vanilla","garlic"],
    ["vanilla","basil"],
    ["vanilla","chili powder"],
    ["vanilla","mustard seeds"],
    ["vanilla","bay leaves"],
    ["vanilla","tarragon"],
    ["ginger","paprika"],
    ["ginger","nutmeg"],
    ["ginger","fennel"],
    ["ginger","garlic"],
    ["ginger","basil"],
    ["ginger","black pepper"],
    ["ginger","caraway"],
    ["ginger","curry powder"],
    ["ginger","mustard seeds"],
    ["ginger","parsley"],
    ["paprika","fennel"],
    ["paprika","caraway"],
    ["paprika","fenugreek"],
    ["paprika","parsley"],
    ["paprika","anise"],
    ["paprika","carob"],
    ["rosemary","basil"],
    ["rosemary","dill"],
    ["rosemary","anise"],
    ["rosemary","carob"],
    ["rosemary","chives"],
    ["rosemary","marjoram"],
    ["rosemary","poppy seeds"],
    ["nutmeg","garlic"],
    ["nutmeg","chili powder"],
    ["nutmeg","dill"],
    ["nutmeg","sage"],
    ["nutmeg","carob"],
    ["coriander","dill"],
    ["coriander","bay leaves"],
    ["coriander","chives"],
    ["fennel","chili powder"],
    ["fennel","mustard seeds"],
    ["fennel","parsley"],
    ["fennel","anise"],
    ["fennel","carob"],
    ["garlic","basil"],
    ["garlic","black pepper"],
    ["garlic","curry powder"],
    ["garlic","dill"],
    ["garlic","mustard seeds"],
    ["garlic","bay leaves"],
    ["garlic","carob"],
    ["garlic","tarragon"],
    ["basil","anise"],
    ["basil","chives"],
    ["black pepper","fenugreek"],
    ["black pepper","mustard seeds"],
    ["black pepper","parsley"],
    ["black pepper","marjoram"],
    ["caraway","fenugreek"],
    ["caraway","bay leaves"],
    ["caraway","carob"],
    ["caraway","chives"],
    ["caraway","tarragon"],
    ["chili powder","fenugreek"],
    ["chili powder","parsley"],
    ["chili powder","carob"],
    ["chili powder","chives"],
    ["chili powder","poppy seeds"],
    ["curry powder","fenugreek"],
    ["curry powder","anise"],
    ["dill","mustard seeds"],
    ["dill","parsley"],
    ["dill","bay leaves"],
    ["dill","chives"],
    ["dill","poppy seeds"],
    ["fenugreek","mustard seeds"],
    ["fenugreek","marjoram"],
    ["fenugreek","poppy seeds"],
    ["mustard seeds","parsley"],
    ["mustard seeds","poppy seeds"],
    ["parsley","sage"],
    ["parsley","bay leaves"],
    ["parsley","chives"],
    ["parsley","poppy seeds"],
    ["sage","bay leaves"],
    ["sage","carob"],
    ["sage","marjoram"],
    ["sage","poppy seeds"],
    ["bay leaves","poppy seeds"],
    ["bay leaves","tarragon"],
    ["carob","poppy seeds"],
    ["carob","tarragon"],
    ["poppy seeds","tarragon"],
    ['oregano', 'thyme'],
    ['oregano', 'turmeric'],
    ['oregano', 'ginger'],
    ['oregano', 'paprika'],
    ['oregano', 'nutmeg'],
    ['oregano', 'fenugreek'],
    ['oregano', 'carob'],
    ['oregano', 'poppy seeds'],
    ['oregano', 'basil'],
]

const badPairings = [
    ["cardamon","vanilla"],
    ["cardamon","ginger"],
    ["cardamon","paprika"],
    ["cardamon","nutmeg"],
    ["cardamon","parsley"],
    ["cardamon","sage"],
    ["cardamon","chives"],
    ["cardamon","marjoram"],
    ["cardamon","tarragon"],
    ["cinnamon","lemongrass"],
    ["cinnamon","oregano"],
    ["cinnamon","turmeric"],
    ["cinnamon","caraway"],
    ["cinnamon","parsley"],
    ["cinnamon","sage"],
    ["clove","turmeric"],
    ["clove","vanilla"],
    ["clove","rosemary"],
    ["clove","nutmeg"],
    ["clove","black pepper"],
    ["clove","chili powder"],
    ["clove","dill"],
    ["clove","parsley"],
    ["clove","anise"],
    ["clove","chives"],
    ["clove","tarragon"],
    ["cumin","lemongrass"],
    ["cumin","vanilla"],
    ["cumin","nutmeg"],
    ["cumin","garlic"],
    ["cumin","dill"],
    ["cumin","carob"],
    ["cumin","poppy seeds"],
    ["cumin","tarragon"],
    ["lemongrass","ginger"],
    ["lemongrass","rosemary"],
    ["lemongrass","black pepper"],
    ["lemongrass","caraway"],
    ["lemongrass","sage"],
    ["lemongrass","anise"],
    ["lemongrass","marjoram"],
    ["lemongrass","poppy seeds"],
    ["saffron","turmeric"],
    ["saffron","vanilla"],
    ["saffron","rosemary"],
    ["saffron","coriander"],
    ["saffron","fennel"],
    ["saffron","black pepper"],
    ["saffron","chili powder"],
    ["saffron","fenugreek"],
    ["saffron","parsley"],
    ["saffron","sage"],
    ["saffron","bay leaves"],
    ["saffron","chives"],
    ["saffron","poppy seeds"],
    ["saffron","tarragon"],
    ["thyme","vanilla"],
    ["thyme","fennel"],
    ["thyme","curry powder"],
    ["thyme","dill"],
    ["thyme","chives"],
    ["turmeric","paprika"],
    ["turmeric","coriander"],
    ["turmeric","fennel"],
    ["turmeric","garlic"],
    ["turmeric","basil"],
    ["turmeric","black pepper"],
    ["turmeric","mustard seeds"],
    ["turmeric","parsley"],
    ["turmeric","bay leaves"],
    ["turmeric","chives"],
    ["turmeric","marjoram"],
    ["vanilla","ginger"],
    ["vanilla","coriander"],
    ["vanilla","fennel"],
    ["vanilla","black pepper"],
    ["vanilla","caraway"],
    ["vanilla","fenugreek"],
    ["vanilla","sage"],
    ["vanilla","chives"],
    ["vanilla","marjoram"],
    ["ginger","rosemary"],
    ["ginger","coriander"],
    ["ginger","chili powder"],
    ["ginger","dill"],
    ["ginger","fenugreek"],
    ["ginger","anise"],
    ["ginger","bay leaves"],
    ["ginger","chives"],
    ["ginger","marjoram"],
    ["ginger","tarragon"],
    ["paprika","coriander"],
    ["paprika","garlic"],
    ["paprika","basil"],
    ["paprika","black pepper"],
    ["paprika","curry powder"],
    ["paprika","marjoram"],
    ["paprika","poppy seeds"],
    ["rosemary","nutmeg"],
    ["rosemary","coriander"],
    ["rosemary","fennel"],
    ["rosemary","fenugreek"],
    ["rosemary","sage"],
    ["rosemary","bay leaves"],
    ["nutmeg","fennel"],
    ["nutmeg","black pepper"],
    ["nutmeg","caraway"],
    ["nutmeg","curry powder"],
    ["nutmeg","fenugreek"],
    ["nutmeg","bay leaves"],
    ["nutmeg","marjoram"],
    ["nutmeg","poppy seeds"],
    ["nutmeg","tarragon"],
    ["coriander","basil"],
    ["coriander","caraway"],
    ["coriander","chili powder"],
    ["coriander","curry powder"],
    ["coriander","fenugreek"],
    ["coriander","sage"],
    ["coriander","tarragon"],
    ["fennel","basil"],
    ["fennel","black pepper"],
    ["fennel","curry powder"],
    ["fennel","chives"],
    ["fennel","poppy seeds"],
    ["garlic","caraway"],
    ["garlic","chili powder"],
    ["garlic","sage"],
    ["garlic","anise"],
    ["basil","black pepper"],
    ["basil","caraway"],
    ["basil","fenugreek"],
    ["basil","parsley"],
    ["basil","bay leaves"],
    ["basil","carob"],
    ["basil","marjoram"],
    ["basil","tarragon"],
    ["black pepper","chili powder"],
    ["black pepper","dill"],
    ["black pepper","chives"],
    ["black pepper","tarragon"],
    ["caraway","dill"],
    ["caraway","mustard seeds"],
    ["caraway","parsley"],
    ["caraway","sage"],
    ["caraway","anise"],
    ["caraway","marjoram"],
    ["caraway","poppy seeds"],
    ["chili powder","curry powder"],
    ["chili powder","sage"],
    ["chili powder","bay leaves"],
    ["curry powder","mustard seeds"],
    ["curry powder","parsley"],
    ["curry powder","sage"],
    ["curry powder","bay leaves"],
    ["curry powder","poppy seeds"],
    ["curry powder","tarragon"],
    ["dill","fenugreek"],
    ["dill","marjoram"],
    ["dill","tarragon"],
    ["fenugreek","anise"],
    ["fenugreek","bay leaves"],
    ["fenugreek","tarragon"],
    ["mustard seeds","sage"],
    ["mustard seeds","carob"],
    ["parsley","carob"],
    ["parsley","marjoram"],
    ["sage","chives"],
    ["anise","poppy seeds"],
    ["bay leaves","chives"],
    ["carob","chives"],
    ["carob","marjoram"],
    ["chives","marjoram"],
    ["chives","poppy seeds"],
    ["chives","tarragon"],
    ['oregano', 'coriander'],
    ['oregano', 'garlic'],
    ['oregano', 'caraway'],
    ['oregano', 'chili powder'],
    ['oregano', 'dill'],
    ['oregano', 'parsley'],
    ['oregano', 'sage'],
    ['oregano', 'bay leaves'],
    ['oregano', 'marjoram'],
];

export { goodPairings, neutralPairings, badPairings };