import React, { useState } from "react";
import "./startPage.scss";
import { Dropdown } from "../../components/dropdown/dropdown";
import {
  faAppleAlt,
  faCarrot,
  faLemon,
} from "@fortawesome/free-solid-svg-icons";

export function StartPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [
    referenceButton,
    setReferenceButton,
  ] = useState<HTMLButtonElement | null>();

  function alertMessage(message: string) {
    alert(message);
  }

  return (
    <div className="startPageContainer">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        id="dropdownButton"
        ref={setReferenceButton}
      >
        Menu
      </button>

      <Dropdown
        isOpen={isDropdownOpen}
        setIsOpen={(open) => setIsDropdownOpen(open)}
        anchor={referenceButton}
        menuItems={[
          {
            icon: faAppleAlt,
            text: "Apple",
            redirectTo: "/applePage",
          },
          {
            icon: faCarrot,
            text: "Carrot",
            action: () => alertMessage("Carrot"),
          },
          {
            icon: faLemon,
            text: "Lemon",
            action: () => alertMessage("Lemon"),
          },
        ]}
      />
    </div>
  );
}
