import { RsvpForm } from "./rsvp-form";
import { Home } from "./home";
import { Details } from "./details";
import { DressCode } from "./dress-code";
import { FAQ } from "./faq";
export const TabsWrapper = ({ activeTab }: { activeTab: number }) => {
  return (
    <section className="p-4 min-h-[404px]">
      {activeTab === 0 && <Home />}
      {activeTab === 1 && <Details />}
      {activeTab === 2 && <RsvpForm />}
      {activeTab === 3 && <DressCode />}
      {activeTab === 4 && <FAQ />}
    </section>
  );
};
