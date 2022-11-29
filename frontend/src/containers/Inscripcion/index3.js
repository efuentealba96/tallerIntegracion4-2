import React, { useState } from "react";
import MultiSelectListBox from "react-multiselect-listbox";

const DemoMultiSelectListBox = () => {
  const [selectedTwo, setSelectedTwo] = useState([]);

  return (
    <div className="container">
      <MultiSelectListBox
        className={"multi-select"}
        overrideStrings={{
          search: "Buscar...",
          selectAll: "Añadir Seleccionados",
          removeAll: "Remover Seleccionados",
          selectedInfo: "Items selected"
        }}
        sortable={true}
        options={getOptions(2000)}
        textField="desc"
        valueField="value"
        value={selectedTwo}
        rowHeight={25}
        onSelect={({ item, sortedList }) => {
          setSelectedTwo(sortedList.map(i => i.value));
        }}
        onRemove={({ item }) => {
          setSelectedTwo([...selectedTwo.filter(i => i !== item.value)]);
        }}
        onSelectAll={selectedItems => {
          const selected = [
            ...selectedTwo,
            ...selectedItems.map(item => item.value)
          ];
          setSelectedTwo(selected);
        }}
        onRemoveAll={() => setSelectedTwo([])}
        onSort={({ sortedList }) =>
          setSelectedTwo([...sortedList.map(i => i.value)])
        }
      />
    </div>
  );
};

const getOptions = qty => {
  let options = [];
  for (let i = 0; i < qty; i++) {
    options.push({
      desc: "Item " + i,
      value: i
    });
  }
  return options;
};
export default DemoMultiSelectListBox;
