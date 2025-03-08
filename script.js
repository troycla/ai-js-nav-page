// Create a nav bar using JavaScript
const navBar = document.createElement("nav");
const navList = document.createElement("ul");

const navItems = [
    { name: "Home", link: "#" },
    { name: "About", link: "#" },
    { name: "Services", link: "#" },
    { name: "Contact", link: "#" }
];

// Loop through the nav items and add them to the nav list
navItems.forEach(item => {
    const listItem = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.textContent = item.name;
    anchor.href = item.link;
    listItem.appendChild(anchor);
    navList.appendChild(listItem);
});

// Append the list to the nav bar
navBar.appendChild(navList);

// Append the nav bar to the body
document.body.appendChild(navBar);
