import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./dropdown.scss";
import { usePopper } from "react-popper";
import { VirtualElement } from "@popperjs/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface IDropdown {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  anchor: Element | VirtualElement | null | undefined;
  menuItems: IMenuItems[];
}

export interface IMenuItems {
  icon?: any;
  text?: string;
  redirectTo?: string;
  action?: () => void;
}

export function Dropdown(props: IDropdown) {
  const { isOpen, setIsOpen, anchor, menuItems } = props;
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const { styles } = usePopper(anchor, popperElement, {});

  useEffect(() => {
    const handleClick = (e: any) => {
      if (!popperElement?.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [popperElement, setIsOpen]);

  function dropdownItem(icon?: any, text?: string) {
    return (
      <div className="dropdownItems">
        {icon && (
          <FontAwesomeIcon icon={icon} className={icon && text && "icon"} />
        )}
        {text && <p>{text}</p>}
      </div>
    );
  }

  return (
    <>
      {isOpen && menuItems.length > 0 && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          className="dropdownContainer"
        >
          {menuItems.map((item, index) => {
            return (
              <>
                {item.redirectTo && (
                  <Link key={index} to={item.redirectTo}>
                    {dropdownItem(item.icon, item.text)}
                  </Link>
                )}

                {item.action && (
                  <button
                    key={index}
                    onClick={item.action}
                    className="buttonItem"
                  >
                    {dropdownItem(item.icon, item.text)}
                  </button>
                )}

                {!item.action &&
                  !item.redirectTo &&
                  dropdownItem(item.icon, item.text)}
              </>
            );
          })}
        </div>
      )}
    </>
  );
}
