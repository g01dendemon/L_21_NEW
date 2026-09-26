const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");
const deleteButton = document.getElementById("deleteButton");

addButton.addEventListener("click", function() {
    const product = productInput.value.trim();
    if (product === "") {
        return;
    }
    const li = document.createElement("li");

    li.textContent = product;

    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    productList.appendChild(li);

    productInput.value = "";
    productInput.focus(); //Не работает

});

productInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addButton.click();
    }
});

//не по задаче, но решил попробовать сам сделать

deleteButton.addEventListener("click", function() {
    productList.innerHTML = "";
})