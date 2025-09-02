import CustomButton from '@/components/ui/custom/CustomButton';

const ShareSection = () => {
  return (
    <section className="bg-[#780016] min-h-screen flex items-center justify-center py-[10vw] md:py-0">
      <div className="w-[90vw] mx-auto flex flex-col md:justify-between items-start md:items-center md:flex-row gap-y-0 gap-x-20">
        <div className="flex flex-col flex-1">
          <h2 className="text-3xl md:text-5xl tracking-tight text-[#e9c0e9] font-black mb-6">
            Share your Linktree from your Instagram, TikTok, Twitter and other bios
          </h2>
          <p className="text-base leading-6 text-white">
            Add your unique Linktree URL to all the platforms and places you find your audience.
            Then use your QR code to drive your offline traffic online.
          </p>
          <CustomButton className="mt-11 bg-[#e9c0e9] hover:bg-[#de9fde]">
            Get started for free
          </CustomButton>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <video src="/videos/share.mp4" width={600} height={600} autoPlay loop muted />
        </div>
      </div>
    </section>
  );
};

export default ShareSection;
