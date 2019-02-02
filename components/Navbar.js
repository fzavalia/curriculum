import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { colors } from "../utils/constants";
import Localization from "../utils/localization";

const navbarRoutes = () => [
  { path: "/about", label: Localization.getString("navbar.about") },
  { path: "/career", label: Localization.getString("navbar.career") },
  { path: "/tech", label: Localization.getString("navbar.tech") }
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

const navbarButtonActiveBackgroundColor = "rgba(255, 255, 255, 0.11)";

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
          color: ${colors.text.default};
          cursor: pointer;
          border-radius: 10px;
        }
        .not-active {
          transition: 500ms;
        }
        .not-active:hover {
          background-color: ${navbarButtonActiveBackgroundColor};
        }
        .active {
          background-color: ${navbarButtonActiveBackgroundColor};
        }
      `}</style>
      {active && <NavbarButtonArrow />}
    </div>
  );
};

const NavbarButtons = ({ pathname }) => (
  <div style={{ display: "flex", justifyContent: "space-between", padding: 8 }}>
    {navbarRoutes().map(route => (
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
        backgroundColor: "white",
        width: "90%"
      }}
    />
  </div>
);

const Navbar = ({ pathname }) => (
  <div style={{ position: "fixed", width: "100%", zIndex: 5 }}>
    <NavbarButtons pathname={pathname} />
    <NavbarSeparator />
  </div>
);

export default Navbar;
