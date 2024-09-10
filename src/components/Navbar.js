export default function Navbar() {
  return (
    <div className="flex justify-between bg-blue-500 text-white px-10 font-bold py-5">
      <div className="flex gap-5">
        <div>Img</div>
        <div>Gaurav</div>
      </div>
      <div>
        <ul className="flex gap-5">
          <li>Projects</li>
          <li>Certifications</li>
          <li>Experience</li>
          <li>Education</li>
          <li>About</li>
        </ul>
      </div>
    </div>
  );
}
