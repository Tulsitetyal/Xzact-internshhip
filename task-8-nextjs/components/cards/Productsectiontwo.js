
import Newproductcard from "./Newproductcard";

const Productsectiontwo = () => {
  return (
    <section>
    
      <div className="">
        <div className="max-w-[1300px] mx-auto px-[20px] grid lg:grid-cols-6 md:grid-cols-3 gap-6">
          <Newproductcard
            new="new"
            image="./images/Brockly.jpg"
            category="Vegetables"
            Pname="Brockly"
            rating="★★★☆☆"
            newPrice="60.00"
            oldPrice="80.00"
          />
          <Newproductcard
            
            image="./images/Choclate.jpg"
            category="Sweets"
            Pname="Choclate"
            rating="★★★★☆"
            newPrice="90.00"
            oldPrice="120.00"
          />
          <Newproductcard
            new="new"
            image="./images/Monster.jpg"
            category="Drink"
            Pname="Monster"
            rating="★★★★☆"
            newPrice="80.00"
            oldPrice="110.00"
          />
          <Newproductcard
           new="new"
            image="./images/troo good.jpg"
            category="Drink"
            Pname="troo good"
            rating="★★★☆☆"
            newPrice="80.00"
            oldPrice="100.00"
          />
          <Newproductcard
            
            image="./images/harbalife.jpg"
            category="Drink"
            Pname="Harbalife"
            rating="★★★★☆"
            newPrice="199.00"
            oldPrice="250.00"
          />
          <Newproductcard
            new="new"
            image="./images/Oats.jpg"
            category="Snacks"
            Pname="Oats"
            rating="★★★★☆"
            newPrice="150.00"
            oldPrice="190.00"
          />
        </div>
      </div>
    </section>
  );
};

export default Productsectiontwo;
