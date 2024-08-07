// Images - Areas
import bar1 from "../../Assets/Images/Areas/bar_01.jpeg";
import bar2 from "../../Assets/Images/Areas/bar_02.jpeg";
import gard1 from "../../Assets/Images/Areas/gard_01.jpeg";
import gard2 from "../../Assets/Images/Areas/gard_02.jpg";
import rest1 from "../../Assets/Images/Areas/rest_01.jpg";

// Images - menu
import drinksImg from "../Images/Menu/drinksImg.jpeg";
import restaurantImg from "../Images/Menu/drinksImg.jpeg";
import barGardenImg from "../Images/Menu/drinksImg.jpeg";

// Gallary Images
import gal1 from "../Images/Gallary/gal_01.jpeg";

export const galleryImages = [gal1, gal1, gal1, gal1, gal1, gal1, gal1, gal1]; 

export const typeData = {
    table: {
        header: "Book your table now.",
        text: "Would you like to book a table with us? Get in touch by phone. Whether this is for food or just drinks."
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
        link: "/menus/",
        description: "The restaurant is situated at the front of the building. It serves a breakfast and brunch menu.",
        imgLink: [rest1],
    },
    Bar: {
        name: "Bar",
        link: "/menus/",
        description: "The bar serves alcholic drinks and other beverages.",
        imgLink: [bar1, bar2],
    },
    Garden: {
        name: "Garden",
        link: "/menus/",
        description: "The garden is a lovely environment for food and drinks, especially in the summer.",
        imgLink: [gard1, gard2]
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
        image: restaurantImg,
        items: [
            {
                item: "Full English",
                description:
                    "Sausage, bacon, black pudding, hash browns, fresh tomato, mushrooms, egg, beans, tinned tomatoes, toast, fried bread",
                symbols: ["vAvailable"],
                category: "Breakfast",
            },
            {
                item: "Lighter Breakfast",
                description: "Choose 6 items from Full Breakfast",
                symbols: ["vAvailable"],
                category: "Breakfast",
            },
            {
                item: "Cobs & Sandwiches",
                description:
                    "Bacon / Sausage Add extra items including; egg, tomatoes, cheese, black pudding, hash brown, mushrooms",
                symbols: ["vAvailable"],
                category: "Breakfast",
            },
            {
                item: "Eggs Benedict",
                description:
                    "Poached eggs, crispy bacon and hollandaise sauce served on malted toast",
                symbols: [],
                category: "Breakfast",
            },
            {
                item: "Eggs Royale",
                description:
                    "Poached eggs, smoked salmon and hollandaise sauce served on malted toast",
                symbols: [],
                category: "Breakfast",
            },
            {
                item: "Eggs Florentine",
                description:
                    "Poached eggs, spinach and hollandaise sauce serverd on malted toast",
                symbols: [],
                category: "Breakfast",
            },
            {
                item: "Avocado on Toast with chilli flakes",
                description: "",
                symbols: ["hot"],
                category: "Brunch",
            },
            {
                item: "Smoked Salmon, Avocado or Scrambled Eggs on Focaccia Bread",
                description: "",
                symbols: [],
                category: "Brunch",
            },
            {
                item: "Smoked Haddock with Poached Eggs & Hollandaise",
                description: "",
                symbols: [],
                category: "Brunch",
            },
            {
                item: "Welsh Rarebit",
                description: "Add bacon",
                symbols: ["vAvailable"],
                category: "Brunch",
            },
            {
                item: "Sardines on Toast",
                description: "",
                symbols: [],
                category: "Brunch",
            },
            {
                item: "Name an Omelette",
                description: "Choose what you want in your omelette",
                symbols: [],
                category: "Brunch",
            },
            {
                item: "Halloumi, Avocado & Crispy Bacon",
                description: "",
                symbols: ["vAvailable"],
                category: "Brunch",
            },
            {
                item: "Mushrooms on Toasted Focaccia with Cherry Tomatoes",
                description: "",
                symbols: [],
                category: "Brunch",
            },
            {
                item: "Potato & Leek Fritters with Asparagus & Chilli",
                description: "",
                symbols: [],
                category: "Brunch",
            },
            {
                item: "Pancakes with Crispy Bacon & Syrup",
                description: "",
                symbols: ["vAvailable"],
                category: "Breakfast",
            },
            {
                item: "Waffles & Ice Cream with Berries",
                description: "",
                symbols: [],
                category: "Breakfast",
            },
            {
                item: "Berry & Yogurt Granola",
                description: "",
                symbols: [],
                category: "Breakfast",
            },
            {
                item: "Toasted Tea Cake",
                description: "",
                symbols: [],
                category: "Breakfast",
            },
            {
                item: "Toast & Jam",
                description: "",
                symbols: [],
                category: "Breakfast",
            },
            {
                item: "The Best Porridge",
                description: "",
                symbols: [],
                category: "Breakfast",
            },
            {
                item: "Bridge House Sausage & Egg Muffin with Cheese",
                description: "",
                symbols: [],
                category: "Kids",
            },
            {
                item: "Beans on Toastie",
                description: "",
                symbols: [],
                category: "Kids",
            },
            {
                item: "Bacon Sandwich",
                description: "",
                symbols: ["vAvailable"],
                category: "Kids",
            },
            {
                item: "Sausage Sandwich",
                description: "",
                symbols: ["vAvailable"],
                category: "Kids",
            },
            {
                item: "Cheese On Toast",
                description: "",
                symbols: [],
                category: "Kids",
            },
            {
                item: "Pancakes with Maple Syrup & Bacon",
                description: "",
                symbols: [],
                category: "Kids",
            },
            {
                item: "Pancakes with Ice Cream & Berries",
                description: "",
                symbols: [],
                category: "Kids",
            },
            {
                item: "Waffles with Ice Cream & Berries",
                description: "",
                symbols: [],
                category: "Kids",
            },
            {
                item: "Mini Breakfast",
                description: "Sausage, egg, beans, hash brown, toast",
                symbols: ["vAvailable"],
                category: "Kids",
            },
            {
                item: "Toast & Jam",
                description: "The choice of either white or brown toast served with a choice of jams.",
                symbols: [],
                category: "Kids",
            },
            {
                item: "The Best Porridge",
                description: "",
                symbols: [],
                category: "Kids",
            },
        ],
    },
    {
        altName: "Drinks",
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
    {
        altName: "Bar and Garden",
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
    }
]
