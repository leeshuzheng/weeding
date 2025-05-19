import { Frame } from "react95";

export const Details = () => {
  return (
    <Frame
      variant="well"
      style={{
        marginTop: "1rem",
        padding: "0.1rem 0.25rem",
        width: "100%",
        fontSize: "18px",
      }}
    >
      Date: 16th August 2025
      <br />
      Time: Anytime between 7pm and 12am
      <br />
      Venue:{" "}
      <a href="https://maps.app.goo.gl/oBEm25JJTk1Zu4sF9" target="_blank" className="!text-blue-700 !underline">
        The Projector @ Golden Mile
      </a>
      <br />
      <br />
      It&apos;s our unlikely little party and we&apos;re gathering some of the friends who&apos;ve seen us through the
      years. No pressure & no programme, just bar bites, drinks, and good company. Come in your Sunday best (but comfy),
      anytime. Just don&apos;t come too hungry lol
      <br />
    </Frame>
  );
};
