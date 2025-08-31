import SwiperImgs from "./swipers/SwiperImgs";
import SwiperTitles from "./swipers/SwiperTitles";

const TrustedBy = () => {
  return (
    <section className="trust-by  bg-[#f3f3f1] overflow-hidden py-30">
      <div className="flex justify-center flex-col gap-6 md:gap-12 items-center">
        <h2
          className="text-3xl md:text-5xl text-center tracking-tight
 text-[#1e2330] font-bold"
        >
          The only link in bio trusted by 70M+
        </h2>
        <SwiperTitles />
      </div>
      <SwiperImgs />
    </section>
  );
};

export default TrustedBy;
