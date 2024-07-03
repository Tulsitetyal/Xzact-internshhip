 import Saletag from "./Saletag";
 const Saleproductcard=(props)=> {
    return (
      <div className="relative max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
             <Saletag sale={props.sale} /> 
  
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={props.image}
                  className="w-full h-48 object-cover transition-transform duration-1000 hover:scale-110"
                  alt={props.Pname}
                />
              </div>
  
              {/* Product Details */}
              <div className="p-5">
                <h6 className="text-sm text-gray-500">{props.category}</h6>
                <h5 className="text-lg text-gray-800">{props.Pname}</h5>
                <br />
                <span>{props.rating}</span>
                <div className="items-center space-x-2 mt-2">
                  <span className="new-price text-gray-600 font-bold text-xl">{props.newPrice}</span>
                  <span className="old-price text-gray-400 text-base line-through">{props.oldPrice}</span>
                </div>
              </div>
            </div>
    )
  }

  export default Saleproductcard;