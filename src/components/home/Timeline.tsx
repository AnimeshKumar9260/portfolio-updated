import { workDat, eduDat, certDat } from "@/data/homeData";
import TimeCard from "./TimeCard";

export default function Timeline({ tab }: { tab: string }) {
  return (
    <div className="cust-bord rounded-md">
      {tab === "tab1"
        ? workDat.map((item, index) => <TimeCard key={index} {...item} />)
        : tab === "tab2"
          ? eduDat.map((item, index) => <TimeCard key={index} {...item} />)
          : certDat.map((item, index) => <TimeCard key={index} {...item} />)}
    </div>
  );
}
