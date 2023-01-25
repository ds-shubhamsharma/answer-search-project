import imag from "../assets/images/Untitleds.png"

type Link = {

  label: string;
  url: string;
};

const links: Link[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "MenuItem",
    url: "/menuitem",
  },
  {
    label: "Faq",
    url: "/faqs",
  },
  {
    label: "location",
    url: "/locations",
  },
];

const Header = () => {
  const linkDoms = links.map((link) => (
    <div key={link.label} style={{ color: "#ffff", fontSize: "17px" }}>
      <a href={link.url} rel="noreferrer">
        {link.label}
      </a>
    </div>
  ));
  return (
    <div style={{ backgroundColor: "#24262b" }}>
      <div className="centered-container">
        <nav className="py-6 flex items-center justify-between">
          <div className="flex gap-x-4 items-center">
            <div className="" style={{marginRight:"90px"}}>
              <img src={imag}></img>
              {""}
            </div>
            <div className="flex gap-x-4 text-sm font-semibold text-body">
              {linkDoms}
            </div>
          </div>
          <div className="space-x-5"></div>
          <div className="flex gap-x-4">
            <div className=" h-12 pt-4 "></div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
