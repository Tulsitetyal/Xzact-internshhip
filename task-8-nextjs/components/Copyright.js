import Image from 'next/image';
import Payment from "../public/images/payment.png";
const Copyright=()=>{
    return(
        <div className="flex justify-between text-gray-500 ">
        <div>Copyright © Grabit all rights reserved. Powered by Grabit.</div>
        <div>
            <Image src={Payment}></Image>
        </div>
   </div>
    );
}
export default Copyright;