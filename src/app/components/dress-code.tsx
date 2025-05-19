import Image from "next/image";
import dressCode from "@/app/public/assets/dress-code.jpg";
import dressCode2 from "@/app/public/assets/dress-code-2.jpeg";
import dressCode3 from "@/app/public/assets/dress-code-3.jpeg";

export const DressCode = () => {
  return (
    <div className="h-[440px] overflow-y-auto">
      <h2 className="!font-bold !text-2xl">Not too sharp, not too shabby</h2>
      <br />
      <p className="!p-[1px]">
        Fun and cute, like chick flick prom x early-2000s house party. Whatever you feel most confident and comfortable
        in! Just no ripped jeans and cargo pants please...
        <br />
        <br />
        <br />
      </p>
      <div className="flex flex-col gap-6">
        <Image src={dressCode} alt="dress code" width={500} height={100} />
        <Image src={dressCode3} alt="dress code" width={500} height={100} />
        <Image src={dressCode2} alt="dress code" width={500} height={100} />
      </div>
    </div>
  );
};
