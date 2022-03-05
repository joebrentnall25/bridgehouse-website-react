// Images - Areas
import bar1 from "../../Assets/Images/Areas/bar_01.jpg";
import bar2 from "../../Assets/Images/Areas/bar_02.jpeg";
import gard1 from "../../Assets/Images/Areas/gard_01.jpeg";
import rest1 from "../../Assets/Images/Areas/rest_01.jpg";

// Images - menu
import drinksImg from "../Images/Menu/drinksImg.jpeg";
import restaurantImg from "../Images/Menu/drinksImg.jpeg";
import barGardenImg from "../Images/Menu/drinksImg.jpeg";

export const areasData = {
    Restaurant: {
        name: "Restaurant",
        link: "/menus/restaurant",
        description: "The restaurant is situated at the front of the building. It serves a breakfast and brunch menu.",
        imgLink: [rest1],
    },
    Bar: {
        name: "Bar",
        link: "/menus/bar_garden",
        description: "The bar can be found around the back of the restaurant accessed via the steps to the left of the building. The bar serves alcholic drinks and other beverages. The bar serves a champagne breakfast menu.",
        imgLink: [bar1, bar2],
    },
    Garden: {
        name: "Garden",
        link: "/menus/bar_garden",
        description: "The garden is around the back of the building, accessed via the stairs to the left of the building. The garden is a lovely environment for food and drinks, especially in the summer.",
        imgLink: [gard1]
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
export const menu = {
    restaurant: {
        altName: "RESTAURANT",
        image: restaurantImg,
        items: [
            {
                item: "Full English",
                description:
                    "Sausage, bacon, black pudding, hash browns, fresh tomato, mushrooms, egg, beans, tinned tomatoes, toast, fried bread",
                symbols: ["vAvailable"],
                category: "breakfast",
            },
            {
                item: "Lighter Breakfast",
                description: "Choose 6 items from Full Breakfast",
                symbols: ["vAvailable"],
                category: "breakfast",
            },
            {
                item: "Cobs & Sandwiches",
                description:
                    "Bacon / Sausage Add extra items including; egg, tomatoes, cheese, black pudding, hash brown, mushrooms",
                symbols: ["vAvailable"],
                category: "breakfast",
            },
            {
                item: "Eggs Benedict",
                description:
                    "Poached eggs, crispy bacon and hollandaise sauce served on malted toast",
                symbols: [],
                category: "breakfast",
            },
            {
                item: "Eggs Royale",
                description:
                    "Poached eggs, smoked salmon and hollandaise sauce served on malted toast",
                symbols: [],
                category: "breakfast",
            },
            {
                item: "Eggs Florentine",
                description:
                    "Poached eggs, spinach and hollandaise sauce serverd on malted toast",
                symbols: [],
                category: "breakfast",
            },
            {
                item: "Avocado on Toast with chilli flakes",
                description: "",
                symbols: ["hot"],
                category: "brunch",
            },
            {
                item: "Smoked Salmon, Avocado or Scrambled Eggs on Focaccia Bread",
                description: "",
                symbols: [],
                category: "brunch",
            },
            {
                item: "Smoked Haddock with Poached Eggs & Hollandaise",
                description: "",
                symbols: [],
                category: "brunch",
            },
            {
                item: "Welsh Rarebit",
                description: "Add bacon",
                symbols: ["vAvailable"],
                category: "brunch",
            },
            {
                item: "Sardines on Toast",
                description: "",
                symbols: [],
                category: "brunch",
            },
            {
                item: "Name an Omelette",
                description: "Choose what you want in your omelette",
                symbols: [],
                category: "brunch",
            },
            {
                item: "Halloumi, Avocado & Crispy Bacon",
                description: "",
                symbols: ["vAvailable"],
                category: "brunch",
            },
            {
                item: "Mushrooms on Toasted Focaccia with Cherry Tomatoes",
                description: "",
                symbols: [],
                category: "brunch",
            },
            {
                item: "Potato & Leek Fritters with Asparagus & Chilli",
                description: "",
                symbols: [],
                category: "brunch",
            },
            {
                item: "Pancakes with Crispy Bacon & Syrup",
                description: "",
                symbols: ["vAvailable"],
                category: "breakfast",
            },
            {
                item: "Waffles & Ice Cream with Berries",
                description: "",
                symbols: [],
                category: "breakfast",
            },
            {
                item: "Berry & Yogurt Granola",
                description: "",
                symbols: [],
                category: "breakfast",
            },
            {
                item: "Toasted Tea Cake",
                description: "",
                symbols: [],
                category: "breakfast",
            },
            {
                item: "Toast & Jam",
                description: "",
                symbols: [],
                category: "breakfast",
            },
            {
                item: "The Best Porridge",
                description: "",
                symbols: [],
                category: "breakfast",
            },
            {
                item: "Bridge House Sausage & Egg Muffin with Cheese",
                description: "",
                symbols: [],
                category: "children",
            },
            {
                item: "Beans on Toastie",
                description: "",
                symbols: [],
                category: "children",
            },
            {
                item: "Bacon Sandwich",
                description: "",
                symbols: ["vAvailable"],
                category: "children",
            },
            {
                item: "Sausage Sandwich",
                description: "",
                symbols: ["vAvailable"],
                category: "children",
            },
            {
                item: "Cheese On Toast",
                description: "",
                symbols: [],
                category: "children",
            },
            {
                item: "Pancakes with Maple Syrup & Bacon",
                description: "",
                symbols: [],
                category: "children",
            },
            {
                item: "Pancakes with Ice Cream & Berries",
                description: "",
                symbols: [],
                category: "children",
            },
            {
                item: "Waffles with Ice Cream & Berries",
                description: "",
                symbols: [],
                category: "children",
            },
            {
                item: "Mini Breakfast",
                description: "Sausage, egg, beans, hash brown, toast",
                symbols: ["vAvailable"],
                category: "children",
            },
            {
                item: "Toast & Jam",
                description: "The choice of either white or brown toast served with a choice of jams.",
                symbols: [],
                category: "children",
            },
            {
                item: "The Best Porridge",
                description: "",
                symbols: [],
                category: "children",
            },
        ],
    },
    drinks: {
        altName: "DRINKS",
        image: drinksImg,
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
    },
    bar_garden: {
        altName: "BAR & GARDEN",
        image: barGardenImg,
        items: [
            {
                item: "Prosecco",
                description: "",
                category: "Drinks",
            },
            {
                item: "Orange Juice",
                description: "",
                category: "Drinks",
            },
            {
                item: "Coffee",
                description: "",
                category: "Drinks",
            },
            {
                item: "Tea",
                description: "",
                category: "Drinks",
            },
            {
                item: "Berries, Granola & Yogurt",
                description: "",
                category: "Start with",
            },
            {
                item: "Croissants & Rolls",
                description: "",
                category: "Start with",
            },
            {
                item: "Eggs Benedict",
                description: "Poached eggs and bacon on toasted muffins topped with hollandaise sauce",
                category: "Option 1",
            },
            {
                item: "Eggs Royale",
                description: "Poached eggs and smoked salmon on toasted muffins topped with hollandaise sauce",
                category: "Option 1",
            },
            {
                item: "Eggs Florentine",
                description: "Poached eggs with spinach on toasted muffins topped with hollandaise sauce",
                category: "Option 1",
            },
            {
                item: "",
                description: "All served buffet style on sharing platters.",
                category: "Option 2",
            },
            {
                item: "Scrambled Eggs",
                description: "",
                category: "Option 2",
            },
            {
                item: "Bacon & Sausage",
                description: "",
                category: "Option 2",
            },
            {
                item: "Vine Tomatoes",
                description: "",
                category: "Option 2",
            },
            {
                item: "Mushrooms",
                description: "",
                category: "Option 2",
            },
            {
                item: "Smoked Salmon",
                description: "",
                category: "Option 2",
            },
            {
                item: "Avocado",
                description: "",
                category: "Option 2",
            },
            {
                item: "Creme Fraiche",
                description: "",
                category: "Option 2",
            },
        ],
    },
    takeaway: {
        altName: "TAKEAWAY",
        image: drinksImg,
        items: [
            {
                item: "Info",
                description: "Right now we only support takeaway orders over the phone. Eventually you will be able to order online."
            }
        ]
    }
};
