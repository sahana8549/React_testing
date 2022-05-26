import { useState, useEffect, useContext } from "react";
import Card from "./components/Card";
import { RootContext } from "./RootContext";
import axios from "axios";
import RadioButtons from "./components/RadioButton";
import "./App.css";
const list = [
  { id: 0, label: "AU" },
  { id: 1, label: "BR" },
  { id: 2, label: "CA" },
  { id: 3, label: "CH" },
  { id: 4, label: "DE" },
  { id: 5, label: "DK" },
  { id: 6, label: "ES" },
  { id: 7, label: "FI" },
  { id: 8, label: "FR" },
  { id: 9, label: "GB" },
  { id: 10, label: "IE" },
  { id: 11, label: "IR" },
  { id: 12, label: "NO" },
  { id: 13, label: "NL" },
  { id: 14, label: "NZ" },
  { id: 15, label: "TR" },
  { id: 16, label: "US" },
];

function App() {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(list);
  const [selectedItem, setSelectedItem] = useState(null);
  const { setImage, place, setPlace, gender1, setGender, na } =
    useContext(RootContext);
  const Url = `https://randomuser.me/api/?results=20&nat=${place}&inc=name,gender,email,nat,picture&gender=${gender1}`;
  const appendData = () => {
    axios.get(Url).then((body) => setImage(body.data.results));
  };

  useEffect(() => {
    appendData();
  }, [gender1, selectedItem]);
  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    setPlace(items[id].label);
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    setOpen(false);
  };
  return (
    <div className="appContainer">
      <RadioButtons />
      <h5>Select Nationality:</h5>
      <div className="dropdown">
        <div
          data-test-id="test-span"
          className="dropdown-header"
          onClick={toggleDropdown}
        >
          {selectedItem
            ? items.find((item) => item.id == selectedItem).label
            : "AU"}
          <i className={`fa fa-chevron-down icon ${isOpen && "open"}`}></i>
        </div>
        <div className={`dropdown-body ${isOpen && "open"}`}>
          {items.map((item, i) => (
            <div
              role="combobox"
              key={i}
              className="dropdown-item"
              onClick={(e) => handleItemClick(e.target.id)}
              id={item.id}
            >
              <span
                role="option"
                title="delete"
                className={`dropdown-item-dot ${
                  item.id === selectedItem && "selected"
                }`}
              >
                •{" "}
              </span>
              {item.label}
            </div>
          ))}
        </div>
      </div>
      <Card />
    </div>
  );
}
export default App;
