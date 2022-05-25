import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const RightNav = ({ open }) => {
  return (
    <RightNavStyled open={open}>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-class" : "none")}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-class" : "none")}
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/resume"
            className={({ isActive }) => (isActive ? "active-class" : "none")}
          >
            Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? "active-class" : "none")}
          >
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active-class" : "none")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="footer">
        <p>@2022 My Portfolio Website</p>
      </div>
    </RightNavStyled>
  );
};

const RightNavStyled = styled.div`
  display: none;
  @media (max-width: 768px) {
    position: fixed;
    display: flex;
    flex-flow: column nowrap;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 5rem;
    margin: 0 auto;
    background-color: var(--sidebar-dark-color);
    z-index: 10;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;
  }
  .nav-items {
    width: 100%;
    text-align: center;
    .active-class {
      background-color: var(--primary-color);
    }
    li {
      display: block;
      list-style: none;
      a {
        display: block;
        padding: 0.35rem 0;
        position: relative;
        text-decoration: none;
        font-weight: 600;
        letter-spacing: 1px;
        &:hover {
          cursor: pointer;
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color);
          transition: all 0.4s cubic-bezier(1, -0.14, 0.25, 0.95);

          opacity: 0.21;
        }
      }
      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }
  .footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 2rem 0;
      font-size: 1.1rem;
      display: block;
      text-align: center;
    }
  }
`;

export default RightNav;
