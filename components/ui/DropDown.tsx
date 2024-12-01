// DropDown.tsx
import React from "react";

export const DropDown: React.FC<
  {
    children: React.ReactNode;
  } & React.ComponentPropsWithoutRef<"div">
> = ({ children, ...props }) => {
  return (
    <div {...props} className={`group ${props.className || ""}`}>
      {children}
    </div>
  );
};

export const DropDownButton: React.FC<
  {
    children: React.ReactNode;
  } & React.ComponentPropsWithoutRef<"button">
> = ({ children, ...props }) => {
  return (
    <button
      type="button"
      aria-expanded="false"
      aria-haspopup="true"
      {...props}
      className={`group-focus-within:opacity-100 ${props.className || ""}`}
    >
      {children}
    </button>
  );
};

export const DropDownList: React.FC<
  {
    children: React.ReactNode;
  } & React.ComponentPropsWithoutRef<"ul">
> = ({ children, ...props }) => {
  return (
    <ul
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabIndex={-1}
      {...props}
      className={`hidden hover:block group-focus-within:block group-aria-expanded:block ${props.className || ""}`}
    >
      {children}
    </ul>
  );
};
