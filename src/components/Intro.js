import { introData } from "../data";

export default function Intro() {
  const { bgimage, image, name, pronouns, title, location, email, phone } =
    introData;
  return (
    <div className="bg-white shadow-xl rounded -m-3 sm:m-0">
      <div className="relative pb-12">
        <img
          className="h-48 min-w-full rounded"
          src={bgimage}
          alt={name + " image"}
        />
        <div className="absolute top-12 left-5">
          <img
            className="h-48 w-48 rounded-full border-4"
            src={image}
            alt={name + " image"}
          />
        </div>
      </div>
      <div className="p-5 flex sm:flex-row flex-col justify-between gap-4 sm:items-end">
        <div>
          <div>
            <span className="text-2xl font-bold">{name}</span>
            <span className="ms-3">({pronouns})</span>
          </div>
          <div className="text-lg">{title}</div>
          {/* <div>{location}</div> */}
          <div>{email}</div>
          <div>{phone}</div>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex gap-2">
            <img
              className="w-8"
              src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
              alt="linked in"
            ></img>{" "}
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/grv-thapa/">
              https://www.linkedin.com/in/grv-thapa/
            </a>
          </div>
          <div className="flex gap-2">
            <img
              className="w-8"
              src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png"
              alt="linked in"
            ></img>{" "}
            <a target="_blank" rel="noreferrer" href="https://github.com/gaurav-thapa">
            https://github.com/gaurav-thapa
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
