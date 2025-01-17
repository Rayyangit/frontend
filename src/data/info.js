const categories = [
  { id: 1, name: "The Gourmet Spot" },
  { id: 2, name: "Burger Paradise" },
  { id: 3, name: "Sushi World" },
  { id: 4, name: "Taco Fiesta" },
  { id: 5, name: "Pasta Heaven" },
  { id: 6, name: "Vegan Delights" },
  { id: 7, name: "Indian Spice" },
  { id: 8, name: "BBQ Grill" },
  { id: 9, name: "Dessert Haven" },
  { id: 10, name: "Pizza Planet" },
];

const restaurants = [
  {
    id: 1,
    name: "The Gourmet Spot",
    image: "https://source.unsplash.com/500x300/?restaurant,gourmet",
    location: "123 Foodie Lane, Flavor Town",
    description: "A premium dining experience with exquisite flavors.",
    types: ["Dine-In", "Takeaway", "Delivery"],
    features: ["Free Wi-Fi", "Outdoor Seating", "Valet Parking"],
    menu: [
      {
        category: "Appetizers",
        items: ["Garlic Bread", "Stuffed Mushrooms", "Spring Rolls"],
      },
      {
        category: "Main Course",
        items: ["Grilled Salmon", "Pasta Alfredo", "Steak Diane"],
      },
      {
        category: "Desserts",
        items: ["Cheesecake", "Tiramisu", "Brownie Sundae"],
      },
    ],
    offers: [
      { title: "Weekend Special", description: "20% off on main courses." },
      { title: "Dash Special", description: "70% off on staters ." },
    ],
    topDishes: [
      {
        name: "Spaghetti Carbonara",
        image: "https://source.unsplash.com/500x300/?pasta",
      },
    ],
    cuisines: ["Italian", "Continental", "Seafood"],
  },
  {
    id: 2,
    name: "Burger Paradise",
    image: "https://source.unsplash.com/500x300/?burger,fastfood",
    location: "45 Snack Street, Fast Food City",
    description: "The best burgers and fries in town, served with love.",
    types: ["Fast Food", "Delivery"],
    features: ["Drive-Thru", "Kids' Play Area"],
    menu: [
      {
        category: "Burgers",
        items: ["Classic Cheeseburger", "BBQ Bacon Burger", "Veggie Burger"],
      },
      {
        category: "Sides",
        items: ["French Fries", "Onion Rings", "Mozzarella Sticks"],
      },
    ],
    offers: [
      { title: "Family Pack", description: "Buy 2 large meals, get 1 free." },
    ],
    topDishes: [
      {
        name: "Double Patty Melt",
        image: "https://source.unsplash.com/500x300/?burger",
      },
    ],
    cuisines: ["American", "Fast Food"],
  },
  {
    id: 3,
    name: "Sushi World",
    image: "https://source.unsplash.com/500x300/?sushi,restaurant",
    location: "88 Ocean Drive, Sushi City",
    description: "Authentic sushi crafted by world-class chefs.",
    types: ["Dine-In", "Takeaway"],
    features: ["Private Booths", "Live Sushi Bar"],
    menu: [
      {
        category: "Rolls",
        items: ["California Roll", "Spicy Tuna Roll", "Dragon Roll"],
      },
      {
        category: "Sashimi",
        items: ["Salmon Sashimi", "Tuna Sashimi", "Octopus Sashimi"],
      },
    ],
    offers: [
      {
        title: "Lunch Special",
        description: "10% off all rolls from 12 PM to 3 PM.",
      },
    ],
    topDishes: [
      {
        name: "Rainbow Roll",
        image: "https://source.unsplash.com/500x300/?sushi",
      },
    ],
    cuisines: ["Japanese"],
  },
  {
    id: 4,
    name: "Taco Fiesta",
    image: "https://source.unsplash.com/500x300/?tacos,mexicanfood",
    location: "12 Spice Road, Fiesta Town",
    description: "A vibrant spot for authentic Mexican flavors.",
    types: ["Fast Food", "Delivery"],
    features: ["Late Night Service", "Outdoor Seating"],
    menu: [
      {
        category: "Tacos",
        items: ["Beef Tacos", "Chicken Tacos", "Veggie Tacos"],
      },
      {
        category: "Sides",
        items: ["Nachos", "Quesadilla", "Mexican Rice"],
      },
    ],
    offers: [
      { title: "Taco Tuesday", description: "Buy 2 tacos, get 1 free." },
    ],
    topDishes: [
      {
        name: "Loaded Nachos",
        image: "https://source.unsplash.com/500x300/?nachos",
      },
    ],
    cuisines: ["Mexican"],
  },
  {
    id: 5,
    name: "Pasta Heaven",
    image: "https://source.unsplash.com/500x300/?pasta,restaurant",
    location: "67 Italy Lane, Pasta City",
    description: "Where pasta dreams come true with homemade recipes.",
    types: ["Dine-In", "Delivery"],
    features: ["Kid-Friendly", "Cozy Ambiance"],
    menu: [
      {
        category: "Pasta",
        items: ["Spaghetti Bolognese", "Fettuccine Alfredo", "Penne Arrabiata"],
      },
      {
        category: "Salads",
        items: ["Caesar Salad", "Caprese Salad"],
      },
    ],
    offers: [
      {
        title: "Wine & Dine",
        description: "Free glass of wine with any pasta dish.",
      },
    ],
    topDishes: [
      {
        name: "Pesto Pasta",
        image: "https://source.unsplash.com/500x300/?pesto",
      },
    ],
    cuisines: ["Italian"],
  },
  {
    id: 6,
    name: "Vegan Delights",
    image: "https://source.unsplash.com/500x300/?vegan,food",
    location: "21 Green Street, Health Haven",
    description: "Delicious vegan dishes made with organic ingredients.",
    types: ["Dine-In", "Takeaway", "Delivery"],
    features: ["Gluten-Free Options", "Plant-Based Menu"],
    menu: [
      {
        category: "Bowls",
        items: ["Buddha Bowl", "Quinoa Salad Bowl", "Avocado Toast"],
      },
      {
        category: "Desserts",
        items: ["Vegan Brownies", "Coconut Yogurt"],
      },
    ],
    offers: [
      { title: "Healthy Monday", description: "15% off all vegan bowls." },
    ],
    topDishes: [
      {
        name: "Tofu Stir Fry",
        image: "https://source.unsplash.com/500x300/?vegan",
      },
    ],
    cuisines: ["Vegan", "Healthy"],
  },
  {
    id: 7,
    name: "Indian Spice",
    image: "https://source.unsplash.com/500x300/?curry,indianfood",
    location: "34 Curry Lane, Spicy Town",
    description: "Traditional Indian cuisine with a modern twist.",
    types: ["Dine-In", "Delivery"],
    features: ["Spicy Levels", "Family-Friendly"],
    menu: [
      {
        category: "Curries",
        items: ["Butter Chicken", "Paneer Tikka Masala", "Lamb Rogan Josh"],
      },
      {
        category: "Breads",
        items: ["Naan", "Garlic Naan", "Stuffed Paratha"],
      },
    ],
    offers: [
      {
        title: "Festival Feast",
        description: "10% off during Indian festivals.",
      },
    ],
    topDishes: [
      {
        name: "Chicken Tikka",
        image: "https://source.unsplash.com/500x300/?chicken",
      },
    ],
    cuisines: ["Indian"],
  },
  {
    id: 8,
    name: "BBQ Grill",
    image: "https://source.unsplash.com/500x300/?bbq,grill",
    location: "98 Smoke Road, BBQ Town",
    description: "Barbecue at its best with smoky flavors and tender meats.",
    types: ["Dine-In", "Takeaway"],
    features: ["Live Grill", "Large Portions"],
    menu: [
      {
        category: "Meats",
        items: ["Grilled Chicken", "Pork Ribs", "Smoked Brisket"],
      },
      {
        category: "Sides",
        items: ["Cornbread", "Coleslaw", "Baked Beans"],
      },
    ],
    offers: [
      {
        title: "Weekend BBQ",
        description: "Free side with every BBQ platter.",
      },
    ],
    topDishes: [
      {
        name: "BBQ Ribs",
        image: "https://source.unsplash.com/500x300/?ribs",
      },
    ],
    cuisines: ["American", "BBQ"],
  },
  {
    id: 9,
    name: "Dessert Haven",
    image: "https://source.unsplash.com/500x300/?dessert,cake",
    location: "56 Sweet Street, Dessert City",
    description: "Heaven for dessert lovers with a variety of sweet treats.",
    types: ["Dine-In", "Takeaway"],
    features: ["Custom Cakes", "Coffee Pairings"],
    menu: [
      {
        category: "Cakes",
        items: ["Chocolate Lava Cake", "Red Velvet Cake", "Fruit Tart"],
      },
      {
        category: "Ice Cream",
        items: ["Vanilla Bean", "Mint Chocolate Chip", "Salted Caramel"],
      },
    ],
    offers: [
      { title: "Sweet Deal", description: "Buy 2 desserts, get 1 free." },
    ],
    topDishes: [
      {
        name: "Molten Chocolate Cake",
        image: "https://source.unsplash.com/500x300/?cake",
      },
    ],
    cuisines: ["Desserts"],
  },
  {
    id: 10,
    name: "Pizza Planet",
    image: "https://source.unsplash.com/500x300/?pizza,restaurant",
    location: "23 Cheesy Lane, Pizza Town",
    description: "The ultimate destination for pizza lovers.",
    types: ["Dine-In", "Takeaway", "Delivery"],
    features: ["Unlimited Toppings", "Pizza Buffet"],
    menu: [
      {
        category: "Pizzas",
        items: ["Margherita", "Pepperoni", "Veggie Supreme"],
      },
      {
        category: "Sides",
        items: ["Garlic Knots", "Cheesy Breadsticks"],
      },
    ],
    offers: [
      {
        title: "Pizza Party",
        description: "Buy 1 pizza, get the 2nd 50% off.",
      },
    ],
    topDishes: [
      {
        name: "Pepperoni Pizza",
        image: "https://source.unsplash.com/500x300/?pepperoni",
      },
    ],
    cuisines: ["Italian", "Pizza"],
  },
];

const resData = {
  id: "RESTAURANT_ID_001",
  name: "The Gourmet Kitchen",
  imageUrl: "https://source.unsplash.com/500x300/?restaurant,dining",
  address: "123 Food Street, City Center",
  description: "A fine dining experience with cuisines from around the world.",
  serviceTypes: [
    { id: "SERVICE_TYPE_DINE_IN", type: "Dine-In" },
    { id: "SERVICE_TYPE_TAKEAWAY", type: "Tiffin" },
  ],
  restaurantFeatures: [
    { id: "RESTAURANT_FEATURE_VALET_PARKING", feature: "Valet Parking" },
    { id: "RESTAURANT_FEATURE_PRIVATE_DINING", feature: "Private Dining" },
  ],
  menu: [
    {
      id: "MENU_CATEGORY_ID_STARTERS",
      category: "Starters",
      items: [
        { id: "MENU_ITEM_ID_BRUSCHETTA", item: "Bruschetta" },
        { id: "MENU_ITEM_ID_CAESAR_SALAD", item: "Caesar Salad" },
      ],
    },
  ],
  offers: [
    {
      id: "OFFER_ID_WEEKDAY_SPECIAL",
      title: "Weekday Special",
      description: "20% off on all meals.",
    },
  ],
  topDishes: [
    {
      id: "TOP_DISH_ID_GRILLED_SALMON",
      name: "Grilled Salmon",
      imageUrl: "https://source.unsplash.com/500x300/?salmon",
    },
  ],
  cuisines: [
    { id: "CUISINE_ID_ITALIAN", cuisine: "Italian" },
    { id: "CUISINE_ID_CONTINENTAL", cuisine: "Continental" },
  ],
  ambiance: "Fine Dining",
  paymentOptions: ["Credit Card", "Debit Card", "Cash", "Google Pay"],
  deliveryAreas: ["City Center", "Downtown", "Suburbs"],
  openingHours: {
    Monday: "11:00 AM - 11:00 PM",
    Tuesday: "11:00 AM - 11:00 PM",
    Wednesday: "11:00 AM - 11:00 PM",
    Thursday: "11:00 AM - 11:00 PM",
    Friday: "11:00 AM - 1:00 AM",
    Saturday: "10:00 AM - 1:00 AM",
    Sunday: "10:00 AM - 10:00 PM",
  },
  contact: {
    contactNumber: "+123-456-7890",
    email: "info@thegourmetkitchen.com",
    website: "www.thegourmetkitchen.com",
  },
  socialMedia: {
    facebook: "facebook.com/thegourmetkitchen",
    instagram: "instagram.com/thegourmetkitchen",
  },
  dressCode: "Smart Casual",
  parking: "Valet Parking Available",
  accessibility: "Wheelchair Accessible",
  wifi: "Free Wi-Fi Available",
  liveMusic: "Live Jazz on Fridays and Saturdays",
  reservations: true,
};

const features = [
  "Full Bar Available",
  "Restroom available",
  "Live Music",
  "Serves Cocktails",
  "Serves Alcohol",
  "Table reservation required",
  "Restricted Entry",
  "Drinking Age Applicable",
  "Luxury Dining",
  "Smoking Area",
  "Party Music",
  "Celebrity Frequented",
  "Live Entertainment",
  "Nightlife",
];

const features2 = [
  "Valet Parking Available",
  "Romantic Dining",
  "4/5 Star",
  "Table booking for Groups",
  "Resto Bar",
  "Family Friendly",
  "Dress Code Applicable",
  "Air Purifier",
  "Premium Dining",
  "Desserts and Bakes",
  "Lunch Menu",
  "High Tea",
  "Dance Floor",
  "Live Sports Screening",
  "Gin Bar",
  "Wine Tasting",
];

const listedTabs = [
  { id: "overview", label: "Overview", tab: "tab1" },
  { id: "facilities", label: "Facilities", tab: "tab2" },
  { id: "menu", label: "Menu", tab: "tab3" },
  { id: "Comments", label: "Comments", tab: "tab4" },
];

const offers = [
  {
    title: "50% Off on All Electronics",
    description:
      "Get the best deals on the latest electronics. Offer valid until January 31, 2025.",
  },
  {
    title: "Buy 1 Get 1 Free on Shoes",
    description:
      "Limited time offer! Buy one pair of shoes and get another pair absolutely free.",
  },
  {
    title: "Exclusive Membership Discount",
    description:
      "Sign up for our premium membership and enjoy 20% off on all purchases.",
  },
  {
    title: "Free Shipping on Orders Above $50",
    description:
      "Shop now and enjoy free shipping on all orders over $50. No promo code needed.",
  },
  {
    title: "New Year Clearance Sale",
    description:
      "Up to 70% off on clothing, accessories, and more. Hurry, while stocks last!",
  },
];

export {
  features,
  features2,
  resData,
  categories,
  restaurants,
  listedTabs,
  offers,
};
