import CustomButton from '@/components/ui/custom/CustomButton';
import Image from 'next/image';
const asFeaturedIn = [
  {
    id: 1,
    title: '/features/TechCrunch.avif.svg',
  },
  {
    id: 2,
    title: '/features/Fortune.avif.svg',
  },
  {
    id: 3,
    title: '/features/Mashable.avif.svg',
  },
  {
    id: 4,
    title: '/features/Fortune.avif.svg',
  },
  {
    id: 5,
    title: '/features/Forbes.avif.svg',
  },
];
const PlansSection = () => {
  return (
    <section className="w-full bg-[#f3f3f1] py-30">
      <div className="mx-auto container text-center flex items-center flex-col justify-center gap-55">
        <div>
          <h2 className="text-text text-5xl max-w-3xl leading-[120%] px-10 font-extrabold ">
            The fast, friendly and powerful link in bio tool.
          </h2>
          <CustomButton className="w-max mt-2.5 rounded-full bg-[#E9C0E9] hover:bg-[#de9fde]">
            Explore all plans
          </CustomButton>{' '}
        </div>
        <div className=" mx-auto px-20">
          <h2 className="text-text text-5xl  leading-[120%] px-10 font-extrabold  ">
            As featured in...
          </h2>
          <ul className="flex items-center mt-10 flex-wrap  justify-center gap-3 ">
            {asFeaturedIn.map((item) => (
              <li
                key={item.id}
                className="bg-white rounded-full py-6 flex max-w-[290px] w-[290px] px-18 items-center justify-center">
                <Image key={item.id} src={item.title} alt={item.title} width={150} height={30} />{' '}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
