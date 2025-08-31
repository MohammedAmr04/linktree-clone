import SectionImgs from "../sectionImgs/SectionImgs";
import SwiperImgs from "./swipers/SwiperImgs";
import SwiperTitles from "./swipers/SwiperTitles";

const TrustedBy = () => {
  return (
    <>
      <section className="trust-by  bg-[#f3f3f1] overflow-hidden py-30">
        <div className="flex justify-center flex-col gap-12 items-center">
          <h2
            className="text-3xl md:text-5xl text-center tracking-tight
 text-text font-bold"
          >
            The only link in bio trusted by 70M+
          </h2>
          <SwiperTitles />
        </div>
        <SwiperImgs />
      </section>
      <SectionImgs />
    </>
  );
};

export default TrustedBy;
