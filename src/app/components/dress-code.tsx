import Image from "next/image";
import dressCode from "@/app/public/assets/dress-code.jpg";
import dressCode2 from "@/app/public/assets/whitechicks.jpg";
import dressCode3 from "@/app/public/assets/theoc.jpg";

export const DressCode = () => {
  return (
    <div className="h-[440px] overflow-y-auto">
      <h2 className="!font-bold !text-2xl">Not too sharp, not too shabby</h2>
      <br />
      <p className="!p-[1px]">
        Chick flick prom x early-2000s house party. Playful fifth date energy with someone you have a big crush on,
        looking cute and ready for someplace fun. That&apos;s the vibe but don&apos;t stress too much, we&apos;re rly
        not fussed. Nothing&apos;s off limits (colours included) as long as you feel confident, comfy, and cute!
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
