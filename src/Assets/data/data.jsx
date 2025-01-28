// Images - Areas
import restaurant1 from "../Images/Areas/Restaurant1.jpeg"
import restaurant2 from "../Images/Areas/Restaurant2.jpeg"
import bar1 from "../Images/Areas/Bar1.jpeg"
import bar2 from "../Images/Areas/Bar2.jpeg"
import garden1 from "../Images/Areas/Garden1.jpeg"
import garden2 from "../Images/Areas/Garden2.jpeg"

export const typeData = {
    table: {
        header: "Book your table now.",
        text: "Looking to book a table? Give us a call! Whether you're here for a meal or just drinks, we're happy to host you"
    },
    event: {
        header: "Book your event now.",
        text: "Would you like to book an event with us? Get in touch by phone. We will accomodate for your needs."
    },
    default: {
        header: "",
        text: ""
    }
}

export const areasData = {
    Restaurant: {
        name: "Restaurant",
        displayName: "Restaurant",
        link: "/menus/",
        description: "The restaurant is situated at the front of the building. It serves a breakfast and brunch menu.",
        imgLink: [restaurant1, restaurant2],
    },
    Bar: {
        name: "Bar",
        displayName: "Finley's Bar",
        link: "/menus/",
        description: "The bar serves alcholic drinks and other beverages. Call to book your event here.",
        imgLink: [bar1, bar2],
    },
    Garden: {
        name: "Garden",
        displayName: "Poppy's Secret Garden",
        link: "/menus/",
        description: "The garden is a lovely environment for food and drinks, especially in the summer.",
        imgLink: [garden1, garden2]
    }
};

export const reviews = [
    {
        name: "Trevor",
        year: "November 2021",
        text: "Fabulous birthday breakfast spent with my family at Bridge House, superb breakfasts enjoyed by everyone including my two young boys aged 3 and 5. Staff were very friendly and extremely helpful, Thank you Bridge House for making this occasion so special! ",
    },
    {
        name: "Susan",
        year: "September 2021",
        text: "Wow what fab food, presentation lovely and generous portions. Good value for money. Friendly welcoming staff and a clean and good service. What more could you want! Thank you, Highly recommended!",
    },
    {
        name: "Kylie",
        year: "January 2022",
        text: "First visit here with friends and absolutely blown away with the breakfast! Full English was absolutely huge (not for the faint hearted) and the eggs benedict was the best I have ever had. Great service, menu and prices for the quality and amount of food served."
    },
    {
        name: "Unknown",
        year: "January 2022",
        text: "Bridge House is just amazing! The owners have done a great job renovating the place and the menu is extensive. In addition they also provide a great Vegan Menu! Great food & great service… really impressed.",
    },
];
export const menu = [
    {
        altName: "Restaurant",
        items: [
            {
                item: "Full english",
                description:
                    "Sausage, Bacon, Egg, Hash Brown, Black Pudding, Mushrooms, Fresh Tomatoes, Beans, Tinned Tomatoes, Fried Bread & Toast",
                symbols: ["vAvailable"],
                category: "Breakfast",
            },
            {
                item: "Lighter breakfast",
                description: "Choose 6 items from Full Breakfast",
                symbols: ["vAvailable"],
                category: "Breakfast",
            },
            {
                item: "Eggs benedict",
                description:
                    "Poached eggs, crispy bacon & hollandaise sauce served on malted toast",
                symbols: [],
                category: "Breakfast",
            },
            {
                item: "Eggs royale",
                description:
                    "Poached eggs, smoked salmon & hollandaise sauce served on malted toast",
                symbols: [],
                category: "Breakfast",
            },
            {
                item: "Eggs florentine",
                description:
                    "Poached eggs, spinach & hollandaise sauce serverd on malted toast",
                symbols: [],
                category: "Breakfast",
            },
            {
                item: "Eggs forestiere",
                description:
                    "Poached eggs, mushrooms & hollandaise sauce serverd on malted toast",
                symbols: [],
                category: "Breakfast",
            },
            {
                item: "Welsh rarebit on toasted soda bread",
                description: "Add bacon",
                symbols: ["vAvailable"],
                category: "Brunch",
            },
            {
                item: "Avocado on toasted soda bread with chilli flakes",
                description: "Add bacon / poached eggs",
                symbols: ["vAvailable"],
                category: "Brunch",
            },
            {
                item: "Smoked haddock fishcakes with poached eggs & hollandaise sauce",
                description: "",
                symbols: ["vAvailable"],
                category: "Brunch",
            },
            {
                item: "Vegan feta & tomato bruschetta with spring onions & sunflower seeds",
                description: "",
                symbols: ["vAvailable"],
                category: "Brunch",
            },
            {
                item: "Pancakes with crispy bacon or berries with maple syrup",
                description: "",
                symbols: ["vAvailable"],
                category: "Breakfast",
            },
            {
                item: "Brie, bacon & apple toastie",
                description: "",
                symbols: ["vAvailable"],
                category: "Breakfast",
            },
            {
                item: "Bacon, cheese & hashbrown toastie",
                description: "",
                symbols: ["vAvailable"],
                category: "Breakfast",
            },            
            {
                item: "Smoked bacon, avocado & halloumi toastie",
                description: "",
                symbols: ["vAvailable"],
                category: "Breakfast",
            },            
            {
                item: "Bacon or Sausage cob/sandwich",
                description: "",
                symbols: ["vAvailable"],
                category: "Breakfast",
            },            
            {
                item: "Best porridge ever",
                description: "",
                symbols: ["vAvailable"],
                category: "Breakfast",
            },            
            {
                item: "Toasted teacake",
                description: "",
                symbols: ["vAvailable"],
                category: "Breakfast",
            },            
            {
                item: "Toast & jam/marmalade",
                description: "",
                symbols: ["vAvailable"],
                category: "Breakfast",
            },            
            {
                item: "Breakfast nest with quails eggs",
                description: "Cheese, sausage, bacon, onions & peppers",
                symbols: ["vAvailable"],
                category: "Breakfast",
            },            
            {
                item: "Smoked salmon filled potato skins",
                description: "Served with scrambled eggs, cucumber & hollandaise sauce",
                symbols: ["vAvailable"],
                category: "Brunch",
            },            
            {
                item: "Haggis filled potato skins",
                description: "Served with smoked cheese & scrambled eggs with BBQ dip",
                symbols: ["vAvailable"],
                category: "Brunch",
            },            
            {
                item: "Vegan cheese & mushroom filled potato skins",
                description: "Served with BBQ dip",
                symbols: ["vAvailable"],
                category: "Brunch",
            },            
            {
                item: "Goats cheese, bacon & avocado potato skins",
                description: "Served with sour cream",
                symbols: ["vAvailable"],
                category: "Brunch",
            },            
            {
                item: "Gorgonzola rarebit",
                description: "Served with poached pears & balsamic glaze",
                symbols: ["vAvailable"],
                category: "Brunch",
            },            
            {
                item: "Smoked oyster rosti",
                description: "Served with spinach & quails eggs",
                symbols: ["vAvailable"],
                category: "Brunch",
            },            
            {
                item: "Name your own omelette",
                description: "",
                symbols: ["vAvailable"],
                category: "Breakfast",
            },            
            {
                item: "Poached eggs, asparagus & smoked salmon",
                description: "Served with hollandaise sauce",
                symbols: ["vAvailable"],
                category: "Brunch",
            }, 
            {
                item: "Fresh fig & goats cheese flat bread",
                description: "Served with chilli, spring onion & hoisin sauce",
                symbols: ["vAvailable"],
                category: "Brunch",
            },               
            {
                item: "Beans, sausage, bacon, hash browns & cheese",
                description: "",
                symbols: ["vAvailable"],
                category: "Breakfast",
            },               
            {
                item: "Thai crab cakes",
                description: "Served with chilli & chive sour cream",
                symbols: ["vAvailable"],
                category: "Brunch",
            },               
            {
                item: "Sausage, hash browns, scrambled eggs",
                description: "Served with pancakes & maple syrup",
                symbols: ["vAvailable"],
                category: "Breakfast",
            },               
            {
                item: "Hot smoked salmon",
                description: "Served with scrambled eggs, avocado on toasted soda bread",
                symbols: ["vAvailable"],
                category: "Breakfast",
            }             
        ]
    },
    {
        altName: "Drinks",
        items: [
            {
                item: "Latte",
                description: "",
                category: "Coffee",
            },
            {
                item: "Cappuccino",
                description: "",
                category: "Coffee",
            },
            {
                item: "Espresso",
                description: "",
                category: "Coffee",
            },
            {
                item: "Black Coffee",
                description: "Americano",
                category: "Coffee",
            },
            {
                item: "Flat White",
                description: "",
                category: "Coffee",
            },
            {
                item: "Macchiato",
                description: "",
                category: "Coffee",
            },
            {
                item: "Coffee & Cream",
                description: "",
                category: "Coffee",
            },
            {
                item: "Mocha",
                description: "",
                category: "Coffee",
            },
            {
                item: "Plain Hot Chocolate",
                description: "",
                category: "Hot Chocolate",
            },
            {
                item: "Loaded Hot Chocolate",
                description: "",
                category: "Hot Chocolate",
            },
            {
                item: "English Breakfast",
                description: "",
                category: "Tea",
            },
            {
                item: "Earl Grey",
                description: "",
                category: "Tea",
            },
            {
                item: "Lady Grey",
                description: "",
                category: "Tea",
            },
            {
                item: "Red Bush",
                description: "",
                category: "Tea",
            },
            {
                item: "Green Tea",
                description: "",
                category: "Tea",
            },
            {
                item: "Berry",
                description: "",
                category: "Tea",
            },
            {
                item: "Chamomile",
                description: "",
                category: "Tea",
            },
            {
                item: "Orange Juice",
                description: "",
                category: "Cold",
            },
            {
                item: "Apple Juice",
                description: "",
                category: "Cold",
            },
            {
                item: "Cranberry Juice",
                description: "",
                category: "Cold",
            },
            {
                item: "Bottled Still Water",
                description: "",
                category: "Cold",
            },
            {
                item: "Bottled Carbonated Water",
                description: "",
                category: "Cold",
            },
        ],
    }
]
