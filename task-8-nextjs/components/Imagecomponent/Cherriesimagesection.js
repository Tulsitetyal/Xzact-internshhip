import Image from 'next/image';
import cherriesImg from '../../public/images/cherries.jpg';

const Cherriesimagesection = () => {
  return (
    <section>
      <div className="mx-24 my-5">
        <Image
          className="rounded w-full"
          style={{ height: '550px' }}
          src={cherriesImg}
          alt="image description"
          layout="responsive"
          width={500}
          height={550}
        />
      </div>
    
    </section>
  );
};

export default Cherriesimagesection;
