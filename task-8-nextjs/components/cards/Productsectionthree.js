
import Newproductcard from "./Newproductcard";

const Productsectionthree = () => {
  return (
    <section>
    
      <div className="">
        <div className="max-w-[1300px] mx-auto px-[20px] grid lg:grid-cols-6 md:grid-cols-3 gap-6">
          <Newproductcard
            
            image="./images/milk.jpg"
            category="Dairy"
            Pname="Milk"
            rating="★★★☆☆"
            newPrice="50.00"
            oldPrice="60.00"
          />
          <Newproductcard
            new="new"
            image="./images/mint_green_tea.jpg"
            category="Drink"
            Pname="mint_green_tea"
            rating="★★★★☆"
            newPrice="150.00"
            oldPrice="199.00"
          />
          <Newproductcard
            new="new"
            image="./images/kivi.jpg"
            category="Fruits"
            Pname="Kivi"
            rating="★★★★☆"
            newPrice="90.00"
            oldPrice="120.00"
          />
          <Newproductcard
           
            image="./images/new_real.jpg"
            category="Drink"
            Pname="New Real"
            rating="★★★★☆"
            newPrice="110.00"
            oldPrice="140.00"
          />
          <Newproductcard
            new="new"
            image="./images/Orange.jpg"
            category="Fruits"
            Pname="Orange"
            rating="★★★★☆"
            newPrice="80.00"
            oldPrice="100.00"
          />
          <Newproductcard
            
            image="./images/pop crlsp.jpg"
            category="Snacks"
            Pname="pop crlsp"
            rating="★★★☆☆"
            newPrice="30.00"
            oldPrice="50.00"
          />
        </div>
      </div>
    </section>
  );
};

export default Productsectionthree;
