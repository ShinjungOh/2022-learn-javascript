const deleteBtn = document.querySelector(".deleteBtn");
const items = document.querySelector(".items");
const inputBox = document.querySelector(".inputBox");
const plusBtn = document.querySelector(".plusBtn");
const form = document.querySelector(".newForm");

form.addEventListener('submit', (event) => {
    event.preventDefault();  //submit이후 브라우저의 자동 로딩 방지
    onAdd();
});

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

let id = 0;

function createItem(text) {
    const itemRow = document.createElement("li");
    itemRow.setAttribute("class", "itemrow");
    itemRow.setAttribute("data-id", id);
    itemRow.innerHTML = `
            <div class="item"}>
                <span class="itemname">${text}</span>
                <button class="item_delete deleteBtn" data-id=${id}>🗑</button>
            </div>    
            <div class="itemdivider"></div>
        `;
    id++;
    /*
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
     */

    return itemRow;
}

items.addEventListener('click', event => {
    const id = event.target.dataset.id;
    const nodeName = event.target.nodeName;
    if (id && nodeName === "BUTTON") {
        console.log('delete');
        //console.log(event.target.nodeName);
        const toBeDeleted = document.querySelector(`.itemrow[data-id="${id}"]`);
        toBeDeleted.remove();
    }
});