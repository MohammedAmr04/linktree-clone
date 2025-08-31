import Image from "next/image";
interface IProps {
  img: {
    src: string;
    alt: string;
  };
  color: string;
  text: string;
}

const ImgContainer = ({ img, color, text }: IProps) => {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl p-9`}
      style={{ backgroundColor: color }}
    >
      <Image src={img.src} alt={img.alt} fill className="object-cover" />
      <h3>{text}</h3>
    </div>
  );
};

export default ImgContainer;
