const deleteBtn = document.querySelector(".deleteBtn");
const items = document.querySelector(".items");
const inputBox = document.querySelector(".inputBox");
const plusBtn = document.querySelector(".plusBtn");

function onAdd() {
    const text = inputBox.value;
    if (text === "") {
        inputBox.focus();
        return;
    }
    console.log(text);

    const item = createItem(text);
    items.appendChild(item);
    item.scrollIntoView({block: "center"});
    inputBox.value = "";
    inputBox.focus();
}

function createItem(text) {
    const itemRow = document.createElement("li");
    itemRow.setAttribute("class", "itemrow");

    const item = document.createElement("div");
    item.setAttribute("class", "item");

    const name = document.createElement('span');
    name.setAttribute("class", 'itemname');
    name.innerText = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "item_delete deleteBtn");
    deleteBtn.innerHTML = "🗑"
    deleteBtn.addEventListener("click", () => {
        console.log("delete")
        items.removeChild(itemRow);
    });

    const itemDivider = document.createElement("div");
    itemDivider.setAttribute("class", "itemdivider");

    item.appendChild(name);
    item.appendChild(deleteBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);
    return itemRow;
}

plusBtn.addEventListener("click", () => {
    onAdd();
});


inputBox.addEventListener("keypress", (event) => {
    console.log('key');
    if (event.key === "Enter") {
        onAdd();
    }
});