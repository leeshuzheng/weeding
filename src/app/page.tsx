"use client";

import { useEffect, useState, Suspense } from "react";
import { Window, WindowContent, Tab, TabBody, Tabs, WindowHeader, Hourglass } from "react95";
import { TABS } from "./constants";
import { TabsWrapper } from "./components/tabs";
import { ThemeProvider } from "./components/theme-provider";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <ThemeProvider>
      <Window className="w-full max-w-lg">
        <WindowHeader className="flex justify-between">The Most Unlikely Party</WindowHeader>
        <WindowContent>
          <Suspense fallback={<Hourglass size={48} />}>
            <TabContent activeTab={activeTab} setActiveTab={setActiveTab} />
          </Suspense>
        </WindowContent>
      </Window>
    </ThemeProvider>
  );
}

function TabContent({ activeTab, setActiveTab }: { activeTab: number; setActiveTab: (value: number) => void }) {
  const searchParams = useSearchParams();
  const isRsvpTab = searchParams.get("rsvp");

  useEffect(() => {
    if (isRsvpTab === "") {
      setActiveTab(2);
    }
  }, [isRsvpTab, setActiveTab]);

  return (
    <div>
      <Tabs value={activeTab} onChange={(value) => setActiveTab(value)}>
        {TABS.map((tab) => (
          <Tab key={tab.value} value={tab.value}>
            {tab.label}
          </Tab>
        ))}
      </Tabs>

      <TabBody>
        <TabsWrapper activeTab={activeTab} />
      </TabBody>
    </div>
  );
}
