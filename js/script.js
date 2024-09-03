const form = document.querySelector("form");
const input = document.querySelector("input");
const clearBtn = document.querySelector(".clear-btn");
const bottom = document.querySelector(".list-bottom");
const countValue = document.querySelector(".list-count");
const ul = document.querySelector("ul");

let count = 0;

form.onsubmit = (e) => {
    e.preventDefault();

    const deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

    const li = document.createElement("li");
    li.innerHTML = input.value;
    li.appendChild(deleteBtn);
    ul.appendChild(li);

    count++;
    countValue.innerHTML = `${count}`;
    input.value = "";
    countfnc();
    set();

    deleteBtn.onclick = (v) => {
        li.remove();
        count--;
        countValue.innerHTML = `${count}`;
        countfnc();
        set();
    }
    li.onclick = () => {
        li.style.textDecoration = "line-through";
        set();
    };

    li.ondblclick = () => {
        li.style.textDecoration = "none";
        set();
    };

    clearBtn.onclick = () => {
        ul.innerHTML = "";
        count = 0;
        countValue.innerHTML = `${count}`;
        countfnc();
        set();
        localStorage.clear();
    };
};
    
function set() {
    localStorage.setItem("data", ul.innerHTML);
}

function countfnc() {
    localStorage.setItem("count", countValue.innerHTML);
}

ul.innerHTML = localStorage.getItem("data");
countValue.innerHTML = localStorage.getItem("count");