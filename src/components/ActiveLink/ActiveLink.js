import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const ActiveLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div>
      <Link style={{ color: match ? "#FFC107" : "#FFFFFF" }} to={to} {...props}>
        {children}
      </Link>
    </div>
  );
};

export default ActiveLink;
