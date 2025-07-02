import { create } from "zustand";

export const usedbStore = create(() => ({
  FollowUpStatus: ["Contacted", "No Answer", "Not Contacted", "Unavailable"],

  CustomerStatusList: ["Active", "Inactive", "Pending"],

  CustomerFeedback: [
    "No Feedback",
    "Not Satisfied",
    "Satisfied",
    "Very Disatisfied",
    "Very Satisfied",
  ],
  ManagersList: ["Ahmed", "Deepesh", "Maysa", "Nizar", "Ziyad", "Habeeb"],

  SourceList: ["Customer Service", "Dietitian"],

  ChannelList: ["Calls", "IN-APP Chat", "Instagram", "Whatsapp"],

  TypeList: ["Complaint", "Recomendation", "Review"],

  CustomerTypeList: ["Customer", "Lead"],

  DepartmentsList: [
    "Food",
    "Delivery",
    "Packaging",
    "Application",
    "Marketing",
    "Customer Service",
    "Other",
  ],
  ApplicationOptionsList: [
    "Application update",
    "Application issue",
    "Server issue",
    "Payment issue",
    "Menu updates issue",
    "Freshwork",
    "Bugs",
  ],
  CsComplaintsList: [
    "Rude",
    "Unresponsive",
    "Slow",
    "Unhelpful",
    "Unavailable",
    "Inconsistent",
    "Dismissive",
    "Impolite",
    "Sarcastic",
    "Unprofessional",
    "Neglectful",
    "Confusing",
    "Friendly Responsive",
    "Helpful",
    "Effecient",
    "Professional",
    "Courteous",
    "Attentive",
    "Knowledgeable",
    "Prompt",
    "Polite",
    "disappointed",
  ],
  DishComplaintsOptionsList: [
    "Unhygienic (Hair, external object)",
    "chewy",
    "dry",
    "Overcooked",
    "Expired",
    "Food Quality",
    "Frozen and jelly",
    "Greasy",
    "Great Menu Variation",
    "Hard",
    "Limited Menu",
    "Meal portion",
    "Missing an ingredient",
    "Molded",
    "Tasteless",
    "Poorly presented",
    "Salty",
    "Smelly",
    "Spicy",
    "Spoiled",
    "Undercooked",
  ],
  CustomerRequest: [
    "Cancelation Request",
    "Misleading Message",
    "Refund Request",
    "Requested lunch and dinner only",
  ],
  PackagingOptionsList: [
    "Damaged",
    "Incorrect items",
    "Missing Cutlery",
    "Missing items",
    "Can't open it",
    "Leaking",
    "Messy",
    "Smelly",
    "Not-eco-friendly",
  ],
  DeliveryOptionsList: [
    "Driver Behavior",
    "Incomplete",
    "Incorrect address",
    "Late",
    "Mishandled",
    "Missed instruction",
    "Missing",
  ],
  FoodNames: [
    "Chicken",
    "Beef",
    "Fish",
    "Dessert",
    "Salad",
    "Soup",
    "Pasta",
    "Rice",
  ],
  IngredientsList: [
    "Chicken Breast",
    "Ground Beef",
    "Salmon",
    "Broccoli",
    "Carrots",
    "Rice",
    "Pasta",
    "Lettuce",
    "Tomato",
    "Cucumber",
    "Olive Oil",
    "Garlic",
    "Onion",
    "Spices",
  ],
  DeliveryList: [
    "Delivery 1",
    "Delivery 2",
    "Delivery 3",
    "Delivery 4",
    "Delivery 5",
    "Delivery 6",
    "Delivery 7",
    "Delivery 8",
    "Delivery 9",
    "Delivery 10",
  ],
   DriverNameList: [
    "Driver 1", "Driver 2", "Driver 3", "Driver 4", "Driver 5", "Driver 6", "Driver 7", "Driver 8", "Driver 9", "Driver 10", ],
  

}));


export const compdbStore = create((set) => ({

  complaints: [], 

  addComplaint: (newComplaint) => set((state) => ({
    complaints: [...state.complaints,newComplaint,]
    
  }))
  
    
}));

