import React from "react";
import Link from "next/link";
import classNames from "classnames";
import * as constants from "../utils/constants";

const navbarRoutes = [
  { path: "/about", extraPath: "/", label: "About" },
  { path: "/experience", label: "Experience" },
  { path: "/tech", label: "Tech" },
  { path: "/portfolio", label: "Portfolio" }
];

const NavbarButton = ({ label, active, path }) => {
  return (
    <div style={{ flex: 1 }}>
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
          width: 90%;
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
          background-color: #c6c6c6;
          color: white;
        }
        .active {
          background-color: #c6c6c6;
          color: white;
        }
      `}</style>
    </div>
  );
};

const Navbar = ({ pathname }) => (
  <React.Fragment>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {navbarRoutes.map(route => (
        <NavbarButton
          key={route.path}
          path={route.path}
          label={route.label}
          active={pathname === route.path || pathname === route.extraPath}
        />
      ))}
    </div>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          height: 1,
          marginTop: 10,
          backgroundImage:
            "linear-gradient(to right, #ffffff00, #6d6d6d, #ffffff00)",
          width: "90%"
        }}
      />
    </div>
  </React.Fragment>
);

export default Navbar;
