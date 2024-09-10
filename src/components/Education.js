import { educationData } from "../data";
import EducationCard from "./EducationCard";

export default function Education() {
  return (
    <div className="">
      <div className="font-bold mb-2">Education</div>
      <div className="flex flex-col gap-2">
        {educationData.map((data) => (
          <EducationCard key={data.course} data={data} />
        ))}
      </div>
    </div>
  );
}
