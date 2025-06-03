import Tabs from "../general/Tabs";
import Timeline from "./Timeline";

export default function Bio() {
  return (
    <div className="flex flex-col gap-5 py-8">
      <Tabs />
      <Timeline />
    </div>
  );
}
