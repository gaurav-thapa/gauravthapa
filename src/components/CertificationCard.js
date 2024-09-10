export default function CertificationCard({ data }) {
  const { logo, credId, credLink, title, issuer, issueDate, skills } = data;
  return (
    <div className="min-w-fit">
      <div className="bg-gray-50 flex gap-2 p-2 rounded-lg shadow-lg hover:scale-95 transition ease-in-out delay-75">
        <div className="min-w-fit">
          <img className="w-10 rounded" alt={issuer + " image"} src={logo} />
        </div>
        <div>
          <div className="">{title}</div>
          <div className="text-xs">
            <div>
              {issuer} | Issued - {issueDate}
            </div>
            <div></div>
            {/* <div>Credential ID {credId}</div> */}
            <div className="my-2">
              <a href={credLink} className="bg-green-200 rounded p-1">
                Show Certificate
              </a>
            </div>
            {/* <div>Skills - {skills}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
