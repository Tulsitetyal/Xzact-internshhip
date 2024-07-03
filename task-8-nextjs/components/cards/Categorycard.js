const Categorycard = (  props) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-3">
      <div className="gi-cat-box transition-all duration-300 ease-in-out p-4 rounded-md relative bg-[#f6e6d3]">
        <div className="gi-cat-icon h-full p-4 flex flex-col items-center justify-center bg-white relative rounded-md z-10">
          <span className="gi-lbl px-2 absolute top-0 right-0 bg-[#5caf90] text-white text-xs font-semibold rounded-bl-md rounded-tr-md">
            {props.discount}
          </span>
          <i className="fi fi-tr-peach transition-all duration-300 ease-in-out text-4xl my-2 text-[#5caf90] leading-none"></i>
          <div className="gi-cat-detail text-center">

              <a href="shop-left-sidebar-col-3.html">
                <h4 className="gi-cat-title m-0 text-base font-semibold text-[#4b5966] capitalize">
                  {props.category}
                </h4>
              </a>
           
            <p className="items m-0 text-sm text-[#777]">{props.items}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categorycard;
