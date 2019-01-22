import React from "react";
import Link from "next/link";
import classNames from "classnames";
import * as constants from "../utils/constants";

const navbarRoutes = [
  { path: "/about", label: "About" },
  { path: "/career", label: "Career" },
  { path: "/tech", label: "Tech" },
  { path: "/portfolio", label: "Portfolio" }
];

const NavbarButtonArrow = () => (
  <div
    style={{
      position: "absolute",
      width: "95%",
      display: "flex",
      justifyContent: "center"
    }}
  >
    <img
      style={{ width: 25, height: 25, filter: "invert(1)" }}
      src={"/static/img/app/triangle.png"}
    />
  </div>
);

const NavbarButton = ({ label, active, path }) => {
  return (
    <div style={{ flex: 1, position: "relative" }}>
      <Link href={path}>
        <div
          className={classNames(
            "button",
            { active },
            { "not-active": !active }
          )}
        >
          <span style={{ userSelect: "none" }}>{label}</span>
        </div>
      </Link>
      <style jsx>{`
        .button {
          width: 95%;
          height: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${constants.colors.text.default};
          cursor: pointer;
          border-radius: 10px;
        }
        .not-active {
          transition: 500ms;
        }
        .not-active:hover {
          background-color: #ffffff1c;
        }
        .active {
          background-color: #ffffff1c;
        }
      `}</style>
      {active && <NavbarButtonArrow />}
    </div>
  );
};

const NavbarButtons = ({ pathname }) => (
  <div style={{ display: "flex", justifyContent: "space-between", padding: 8 }}>
    {navbarRoutes.map(route => (
      <NavbarButton
        key={route.path}
        path={route.path}
        label={route.label}
        active={pathname === route.path}
      />
    ))}
  </div>
);

const NavbarSeparator = () => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div
      style={{
        height: 1,
        marginTop: 1,
        backgroundColor: 'white',
        width: "90%"
      }}
    />
  </div>
);

const Navbar = ({ pathname }) => (
  <React.Fragment>
    <NavbarButtons pathname={pathname} />
    <NavbarSeparator />
  </React.Fragment>
);

export default Navbar;
