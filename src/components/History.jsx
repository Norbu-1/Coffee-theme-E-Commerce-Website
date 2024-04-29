import React from 'react'
import image from "../assets/history.jpg";
import image1 from "../assets/bg.avif";
const History = () => {
  return (
    <div>
        <div className="md:flex   mx-auto w-[90%] md:h-[24rem] bg-yellow-300 "><img className="md:w-[40%] md:h-full" src={image} alt="" />
      <div className="bg-yellow-300 w-auto px-2 md:pl-20 py-6">
      <h2 className="text-2xl font-bold pb-4">Coffee Making Process</h2>
      <p className="pb-2">
        <strong>Selection of Coffee Beans:</strong> Choose beans based on origin and variety.
      </p>
      <p className="pb-2">
        <strong>Harvesting:</strong> Pick ripe coffee cherries from plants.
      </p>
      <p className="pb-2">
        <strong>Processing:</strong> Prepare cherries for roasting using methods like dry or washed processing.
      </p>
      <p className="pb-2">
        <strong>Milling and Sorting:</strong> Mill dried beans and sort them based on quality.
      </p>
      <p className="pb-2">
        <strong>Roasting:</strong> Roast green beans to develop flavor, aroma, and color.
      </p>
      <p className="pb-2">
        <strong>Grinding:</strong> Grind roasted beans to the desired particle size for brewing.
      </p>
      <p className="pb-2">
        <strong>Brewing:</strong> Brew ground coffee using methods like drip, espresso, or French press.
      </p>
      <p className="pb-2">
        <strong>Serving:</strong> Serve brewed coffee hot, with optional additions like milk or sugar.
      </p>
      <p className="pb-2">
        <strong>Enjoyment:</strong> Savor coffee for its rich taste, aroma, and caffeine content.
      </p>
    </div>
      </div>
      <div className="md:flex mx-auto w-[90%] md:h-[24rem] bg-yellow-300 mt-6">
      <img className="md:w-[40%] md:h-full md:order-2 " src={image1} alt="Coffee" />
      <div className="bg-yellow-300 w-auto px-2 md:pl-6 py-6  md:order-1">
        <h2 className="text-2xl font-bold pb-4">Benefits of Coffee</h2>
        <p className="pb-2">
          <strong>Increased Alertness and Concentration:</strong> Coffee contains caffeine, a natural stimulant that can improve alertness and mental clarity.
        </p>
        <p className="pb-2">
          <strong>Improved Physical Performance:</strong> Caffeine can enhance physical performance and endurance.
        </p>
        <p className="pb-2">
          <strong>Antioxidant Properties:</strong> Coffee is rich in antioxidants, which can help fight oxidative stress and inflammation.
        </p>
        <p className="pb-2">
          <strong>Reduced Risk of Certain Diseases:</strong> Some studies suggest that moderate coffee consumption may be linked to a reduced risk of diseases like type 2 diabetes and Parkinson's disease.
        </p>
        <p className="pb-2">
          <strong>Mood Enhancement:</strong> Coffee consumption has been associated with improved mood and a lower risk of depression.
        </p>
        <p className="pb-2">
          <strong>Weight Management:</strong> Caffeine can boost metabolism and promote fat burning, aiding in weight management.
        </p>
        <p className="pb-2">
          <strong>Liver Health:</strong> Coffee consumption may be associated with a reduced risk of liver diseases like cirrhosis and liver cancer.
        </p>
        <p className="pb-2">
          <strong>Social Benefits:</strong> Coffee often serves as a social beverage, facilitating social interaction and networking.
        </p>
      </div>
     
    </div>
    </div>
  )
}

export default History