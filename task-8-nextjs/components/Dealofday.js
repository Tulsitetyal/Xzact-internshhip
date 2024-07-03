const Dealofday=()=>{
    return(
        <div
        className="section-title mb-[20px] relative flex justify-between pb-[20px] z-[5] max-[767px]:flex-col"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="200"
      >
        <div className="section-detail">
          <h2
            className="gi-title mb-[0] text-[25px] font-semibold text-[#4b5966] relative inline p-[0] capitalize leading-[1] font-manrope max-[991px]:text-[24px] max-[767px]:text-[22px] max-[575px]:text-[20px]"
          >
            Day of the <span className="text-[#5caf90]">deal</span>
          </h2>
          <p
            className="max-w-[400px] mt-[10px] text-[14px] text-[#777] leading-[18px]"
          >
            Dont wait. The time will never be just right.
          </p>
        </div>
        <div id="dealend" className="flex justify-between"></div>
      </div>
    )
}

export default Dealofday;