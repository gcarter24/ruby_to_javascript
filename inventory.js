// add("Shirt")
// add("Trouser")
// getList()
// ("Shirt", "Trouser")
// remove("Trouser")
// getList()
"use strict";

function inventoryList() {
  var inventoryItems = [
    {
      name: "Shirt",
    },
    {
      name: "Trouser",
    },
  ];

  const add = (name) => {
    const names = inventoryItems.filter(function (item) {
      item.name === name;
    });
    if (names.length === 0) {
      inventoryItems.push({ name: name });
    }
  };

  const remove = (name) => {
    inventoryItems = inventoryItems.filter(function (item) {
      item.name !== name;
    });
  };

  const getList = () => {
    // console.log(inventoryItems)
    return inventoryItems;
  };

  return { add, remove, getList };
}

console.log(inventoryList());
