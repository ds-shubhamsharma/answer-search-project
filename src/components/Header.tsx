import * as React from "react";

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
    label: "About",
    url: "#",
  },
  {
    label: "Faq",
    url: "#",
  },
  {
    label: "location",
    url: "#",
  },
];

const Header = () => {
  const linkDoms = links.map((link) => (
    <div key={link.label}>
      <a href={link.url} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    </div>
  ));

  return (
    <div style={{ backgroundColor: "#24262b" }}>
      <div className="centered-container">
        <nav className="py-6 flex items-center justify-between">
          <div className="flex gap-x-4 items-center">
            <div className="pl-40">
              <img src="" width="full" height="50"></img>{" "}
            </div>
            <div
              className="flex gap-x-4 text-sm font-semibold text-body"
              style={{ color: "white", fontSize: "17px" }}
            >
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
