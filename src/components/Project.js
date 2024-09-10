export default function Project({ project }) {
  const { name, description, link, repo, image, recommended } = project;
  return (
    <a href={link} rel="noreferrer" target="_blank">
      <div
        style={{ backgroundImage: `url('${image}')` }}
        className=" bg-cover bg-center hover:cursor-pointer rounded-xl text-white relative hover:scale-95 transition ease-in-out delay-75"
      >
        {recommended && <div className="bg-blue-500 absolute right-4 p-1 text-xs rounded-b-lg">Must View</div>}
        <div className="bg-black bg-opacity-70 rounded-xl h-48 p-5">
          <div className="font-bold text-2xl mb-2">{name}</div>
          <div>{description}</div>
          <div>{repo}</div>
        </div>
      </div>
    </a>
  );
}

// background-color: #08AEEA;
// background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);
