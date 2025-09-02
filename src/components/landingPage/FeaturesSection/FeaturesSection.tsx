import CustomButton from '@/components/ui/custom/CustomButton';

const FeaturesSection = () => {
  return (
    <section className="bg-[#e9c0e9] min-h-screen flex items-center justify-center py-[10vw] md:py-0">
      <div className="w-[90vw] mx-auto flex flex-col md:justify-between items-start md:items-center md:flex-row-reverse gap-y-0 gap-x-20">
        <div className="flex flex-col flex-1">
          <h2 className="text-3xl md:text-5xl tracking-tight text-[#502274] font-black mb-6">
            Create and customize your Linktree in minutes
          </h2>
          <p className="text-base leading-6">
            Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events
            and more. It all comes together in a link in bio landing page designed to convert.
          </p>
          <CustomButton className="mt-11 bg-[#502274] hover:bg-[#5e347f] text-white">
            Get started for free
          </CustomButton>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <video src="/videos/features.mp4" width={600} height={600} autoPlay loop muted />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
