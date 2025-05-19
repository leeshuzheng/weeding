import { Monitor } from "react95";

export const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="!text-2xl !font-bold">Chris and Hadi are getting married!</h1>
      <div>
        <Monitor
          backgroundStyles={{
            background: "url('/us2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>
    </div>
  );
};
