import Image from 'next/image';
import blueberriesImg from '../../public/images/blueberries.jpg';

const BlueberriesImageSection = () => {
  return (
    <section>
      <div className="mx-24 my-5">
        <Image
          className="rounded w-full"
          style={{ height: '550px' }}
          src={blueberriesImg}
          alt="image description"
          layout="responsive"
          width={500}
          height={550}
        />
      </div>
    
    </section>
  );
};

export default BlueberriesImageSection;
