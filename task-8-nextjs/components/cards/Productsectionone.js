
import Saleproductcard from "./Saleproductcard";

const Productsectionone = () => {
  return (
    <section>
    
      <div className="">
        <div className="max-w-[1300px] mx-auto px-[20px] grid lg:grid-cols-6 md:grid-cols-3 gap-6">
          <Saleproductcard
            sale="sale"
            image="./images/coffie.jpg"
            category="Drinks"
            Pname="Coffie"
            rating="★★★☆☆"
            newPrice="60.00"
            oldPrice="80.00"
          />
          <Saleproductcard
            sale="sale"
            image="./images/chia_seed.jpg"
            category="Dry Fruits"
            Pname="Chia Seeds"
            rating="★★★★☆"
            newPrice="199.00"
            oldPrice="250.00"
          />
          <Saleproductcard
            sale="sale"
            image="./images/dabar vita.jpg"
            category="Drink"
            Pname="Dabar Vita"
            rating="★★★★☆"
            newPrice="150.00"
            oldPrice="199.00"
          />
          <Saleproductcard
            sale="sale"
            image="./images/Happilo-Makhana.webp"
            category="Snacks"
            Pname="Happilo Makhana"
            rating="★★★☆☆"
            newPrice="60.00"
            oldPrice="80.00"
          />
          <Saleproductcard
            sale="sale"
            image="./images/harbalife.jpg"
            category="Drink"
            Pname="Harbalife"
            rating="★★★★☆"
            newPrice="199.00"
            oldPrice="250.00"
          />
          <Saleproductcard
            sale="sale"
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

export default Productsectionone;
