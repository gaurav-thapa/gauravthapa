export default function EducationCard({ data }) {
  //   console.log(data);
  const { course, institute, specialization, duration, img } = data;
  return (
    <div className="bg-white rounded-lg px-2 shadow-lg flex items-center">
      <div className=" ">
        <img
        className="w-14 rounded-lg"
          alt="SRM logo"
          src={img}
        />
      </div>
      <div className="px-5 py-2">
        <div className="font-bold">{course}</div>
        {/* {!specialization && <div className="text-white">.</div>} */}
        {specialization && <div>{specialization}</div>}
        <div className="text-gray-700">{institute} . {duration}</div>
        <div className="text-gray-500"></div>
      </div>
    </div>
  );
}
