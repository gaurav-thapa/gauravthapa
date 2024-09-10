import { certificationData } from "../data";
import CertificationCard from "./CertificationCard";
export default function Certification() {
  return (
    <div className="">
      <div className="font-bold mb-2">Certifications</div>
      <div className="flex flex-row overflow-x-auto scrollbar-hidden sm:flex-wrap gap-2 ">
        {certificationData.map((data) => (
          <CertificationCard key={data.credId} data={data} />
        ))}
      </div>
    </div>
  );
}
