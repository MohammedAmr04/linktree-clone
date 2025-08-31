import Image from "next/image";

const SectionImgs = () => {
  return (
    <section className="px-4 py-30">
      <div className="container mx-auto gap-4 grid grid-cols-1 md:grid-cols-2 ">
        <div className="col-span-1 flex flex-col gap-4">
          <div
            className={`relative bg-[#e9c0e9] flex justify-center flex-col gap-15 items-center overflow-hidden rounded-3xl p-9`}
          >
            <div className="relative w-full h-37 max-h-full">
              {" "}
              <Image
                src={"/all your things-p-500.avif"}
                alt={"products"}
                fill={true}
                className="object-contain !h-full"
              />
            </div>

            <h3 className="text-3xl font-bold  text-text">
              Share your content in limitless ways on your Linktree.
            </h3>
          </div>
          <div
            className={`relative bg-[#d2e823] flex justify-center flex-col gap-15 items-center overflow-hidden rounded-3xl p-9`}
          >
            <div className="relative w-full h-60 ">
              {" "}
              <Image
                src={"/products-p-500.avif"}
                alt={"products"}
                fill={true}
                className="object-contain !h-full"
              />
            </div>

            <h3 className="text-3xl font-bold  text-text">
              Sell products and collect payments. It’s monetization made simple.
            </h3>
          </div>
          {/* 
        <div className="col-start-2 col-end-2">
          <ImgContainer
            text="Grow, own and engage your audience by unifying them in one place."
            color=""
            img={{ src: "", alt: "group" }}
          />{" "}*/}
        </div>
        <div
          className={`relative bg-[#061492] flex justify-center flex-col gap-15 items-center overflow-hidden rounded-3xl p-9`}
        >
          <div className="relative w-full h-full ">
            <Image
              src={"/Group-p-500.avif"}
              alt={"products"}
              fill={true}
              className="object-contain !h-full"
            />
          </div>

          <h3 className="text-3xl text-white font-bold ">
            Sell products and collect payments. It’s monetization made simple.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default SectionImgs;
