import Categorycard from "./Categorycard";
const Categorysection =()=>{
      return (
        <section className="gi-category body-bg py-10 max-sm:py-8 wow fadeInUp" data-wow-duration="2s">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full flex flex-wrap">
              <div className="w-full border-content-color">
                <div className="gi-category-block owl-carousel flex flex-wrap">
                  <Categorycard discount="30%" category="Fruits" items="320 Items"/>
                  <Categorycard discount="20%" category="Dairy" items="250 Items"/>
                  <Categorycard discount="10%" category="Snacks" items="150 Items"/>
                  <Categorycard discount="18%" category="Vegetables" items="230 Items"/>
                  <Categorycard discount="12%" category="Drinks" items="170 Items"/>
                  <Categorycard discount="15%" category="Dry Fruits" items="80 Items"/>
                </div>
              </div>
            </div>
          </div>
        </div>
     
      </section>
      );
}

export default Categorysection;