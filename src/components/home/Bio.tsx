"use client";

import { useState } from "react";
import Tabs from "../general/Tabs";
import Timeline from "./Timeline";

export default function Bio() {
  const [tab, setTab] = useState<string>("tab1");

  return (
    <div className="flex flex-col gap-5 py-8">
      <Tabs funcAction={setTab} tab={tab} />
      <Timeline tab={tab} />
    </div>
  );
}
