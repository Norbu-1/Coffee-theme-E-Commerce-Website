import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Blog from "./Blog";
import ProductList from "./section";
import LoadingSpinner from "./LoadingSpinner";

const List = () => {
  const data=[
    {
      "title": "Black Coffee",
      "description": "Black coffee is as simple as it gets with ground coffee beans soaked in hot water, served hot. And if you want to sound fancy, you can call black coffee by its proper name: café noir.",
      "ingredients": [
        "Coffee"
      ],
      "image": "https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "id": 1
    },
    {
      "title": "Latte",
      "description": "As the most popular coffee drink out there, the latte consists of a shot of espresso and steamed milk with just a hint of foam. It can be ordered unflavored or flavored with everything from vanilla to pumpkin spice.",
      "ingredients": [
        "Espresso",
        "Steamed milk"
      ],
      "image": "https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhdHRlfGVufDB8fDB8fHww",
      "id": 2
    },
    {
      "title": "Caramel Latte",
      "description": "If you like lattes with a special flavor, the caramel latte may be the best option to give you an experience of the natural sweetness and creaminess of steamed milk and caramel.",
      "ingredients": [
        "Espresso",
        "Steamed milk",
        "Caramel syrup"
      ],
      "image": "https://images.unsplash.com/photo-1599398054066-846f28917f38?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "id": 3
    },
    {
      "title": "Cappuccino",
      "description": "Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top. Sometimes you can find variations that use cream instead of milk or ones that add flavorings as well.",
      "ingredients": [
        "Espresso",
        "Steamed milk",
        "Foam"
      ],
      "image": "https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "id": 4
    },
    {
      "title": "Americano",
      "description": "With a similar flavor to black coffee, americano consists of an espresso shot diluted with hot water.",
      "ingredients": [
        "Espresso",
        "Hot water"
      ],
      "image": "https://images.unsplash.com/photo-1532004491497-ba35c367d634?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "id": 5
    },
    {
      "title": "Espresso",
      "description": "An espresso shot can be served on its own or used as a base for most coffee drinks, such as lattes and macchiatos",
      "ingredients": [
        "Espresso"
      ],
      "image": "https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "id": 6
    },
    {
      "title": "Macchiato",
      "description": "Macchiato is another espresso-based drink that has a small amount of foam on top. It is the happy medium between a cappuccino and a doppio.",
      "ingredients": [
        "Espresso",
        "Foam"
      ],
      "image": "https://images.unsplash.com/photo-1557772611-722dabe20327?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "id": 7
    },
    {
      "title": "Mocha",
      "description": "For all the chocolate lovers out there, you will fall in love with a mocha. Mocha is a chocolate espresso drink with steamed milk and foam.",
      "ingredients": [
        "Espresso",
        "Steamed milk",
        "Chocolate"
      ],
      "image": "https://images.unsplash.com/photo-1607260550778-aa9d29444ce1?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "id": 8
    },
    {
      "title": "Hot Chocolate",
      "description": "On cold winter days, a cup of hot chocolate makes you feel comfortable and happy. It also makes you feel good because it contains energizing caffeine.",
      "ingredients": [
        "Chocolate",
        "Milk"
      ],
      "image": "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGhvdCUyMGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
      "id": 9
    },
    {
      "title": "Chai Latte",
      "description": "If you are looking for a flavorful hot drink in the middle of winter, choose chai latte. The combination of cardamom and cinnamon provides a wonderful flavor.",
      "ingredients": [
        "Tea",
        "Milk",
        "Ginger",
        "Cardamom",
        "Cinnamon"
      ],
      "image": "https://images.unsplash.com/photo-1578899952107-9c390f1af1b7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoYWklMjBsYXR0ZXxlbnwwfHwwfHx8MA%3D%3D",
      "id": 10
    },
    {
        "title": "Matcha Latte",
        "description": "Matcha latte is a green, healthy coffee drink with finely crushed matcha tea and milk, offering mild sweetness, a unique flavor and a mild caffeine kick.",
        "ingredients": [
          "Matcha powder",
          "Milk",
          "Sugar*"
        ],
        "image": "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWF0Y2hhJTIwbGF0dGV8ZW58MHx8MHx8fDA%3D",
        "id": 11
      },
      {
        "title": "Seasonal Brew",
        "description": "Seasonal coffee with different flavors like caramel, fruit and chocolate",
        "ingredients": [
          "Coffee"
        ],
        "image": "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg1fHxibGFjayUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
        "id": 12
      },
      {
        "title": "Black Tea",
        "description": "Black tea was born in China. It is made from the leaves of a plant called Camellia and can be flavored differently with fruits for example. A pleasant, warm, flavorful and aromatic drink suitable for everyday life.",
        "ingredients": [
          "Tea"
        ],
        "image": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlYXxlbnwwfHwwfHx8MA%3D%3D",
        "id": 13
      },
      {
        "title": "Iced latte",
        "description": "Iced latte is a chilled coffee drink made by blending espresso and chilled milk. It is served with ice cubes and is also known as cafè latte iced or latte on the rocks.",
        "ingredients": [
          "Espresso",
          "Milk",
          "Ice",
          "Syrup"
        ],
        "image": "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aWNlZCUyMGxhdHRlfGVufDB8fDB8fHww",
        "id": 14
      },
      {
        "title": "Iced latte Mocha",
        "description": "Iced latte Mocha is a combination of latte and mocha, which itself is a combination of chocolate and coffee. It gives cold drink lovers a delicious experience of chocolate and coffee.",
        "ingredients": [
          "Espresso",
          "Ice",
          "Milk",
          "Chocolate"
        ],
        "image": "https://images.unsplash.com/photo-1642647391072-6a2416f048e5?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGljZWQlMjBtb2NoYSUyMGxhdHRlfGVufDB8fDB8fHww",
        "id": 15
      },
      {
        "title": "Frapino Caramel",
        "description": "It is a blended or better said shaken coffee with whipped cream on top. A must for hot summer days.",
        "ingredients": [
          "coffee",
          "ice",
          "milk",
          "caramel syrup",
          "Whipped cream*",
          "Caramel sauce"
        ],
        "image": "https://images.unsplash.com/photo-1662047102608-a6f2e492411f?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJhcGlubyUyMGNhcmFtZWx8ZW58MHx8MHx8fDA%3D",
        "id": 16
      },
      {
        "title": "Frapino Mocha",
        "description": "Another famous and delicious cold drink for those who prefer chocolate. Imagine the taste of a shake with chocolate and whipped cream on top.",
        "ingredients": [
          "Coffee",
          "Ice",
          "Milk",
          "Cocoa",
          "Whipped cream*"
        ],
        "image": "https://images.unsplash.com/photo-1530373239216-42518e6b4063?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJhcGlubyUyMG1vY2hhfGVufDB8fDB8fHww",
        "id": 17
      },
      {
        "title": "Orange Juice",
        "description": "We have nothing to say about our freshly squeezed orange juice. You have to try it yourself.",
        "ingredients": [
          "Fresh Oranges",
          "Ice"
        ],
        "image": "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fG9yYW5nZSUyMGp1aWNlfGVufDB8fDB8fHww",
        "id": 18
      },
      {
        "title": "Frozen Lemonade",
        "description": "Frozen lemonade is a refreshing summer drink that combines freshly squeezed lemon juice, ice and sweetening to create a cool, tart and sweet-tart taste sensation.",
        "ingredients": [
          "Lemon juice",
          "Ice",
          "Sugar*"
        ],
        "image": "https://images.unsplash.com/photo-1523371054106-bbf80586c38c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxlbW9uYWRlJTIwd2l0aCUyMGljZXxlbnwwfHwwfHx8MA%3D%3D",
        "id": 19
      },
      {
        "title": "Lemonade",
        "description": "First known in Paris and then becoming very popular throughout Europe, this sweet, colorless, carbonated drink is made by mixing lemon juice and carbonated water",
        "ingredients": [
          "Lemon juice",
          "Carbonated water",
          "Honey"
        ],
        "image": "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGVtb25hZGV8ZW58MHx8MHx8fDA%3D",
        "id": 20
      }
]
  const [selectedBlog, setSelectedBlog] = useState({
    title: "Black Coffee",
    description:
      "Black coffee is as simple as it gets with ground coffee beans soaked in hot water, served hot. And if you want to sound fancy, you can call black coffee by its proper name: café noir.",
    ingredients: ["Coffee"],
    image:
      "https://images.unsplash.com/photo-1494314671902-399b18174975?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: 1,
  }); // Changed initial value to null
  const location = useLocation(); // Get current location


  const handleBlog = (id) => {
    const selected = data.find((item) => item.id === id);
    setSelectedBlog(selected);
  };

  return (
    <div className={`${location.pathname === "/Blog" ? "pt-28" : ""}`}>
      {/* Render Blog component only when in the root path */}
      {location.pathname === "/Blog" && selectedBlog && (
        <Blog item={selectedBlog} />
      )}
      <p className="w-auto mx-auto flex justify-center">
        {!data ? (
          <LoadingSpinner />
        ) : (
          <ProductList data={data} handleBlog={handleBlog} />
        )}
      </p>
    </div>
  );
};

export default List;
