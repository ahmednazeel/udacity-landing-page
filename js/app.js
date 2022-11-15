
// Get the variables =>(ul , sections)
const navUl = document.getElementById("navbar__list");
const mySections =Array.from(document.querySelectorAll("section"));
// create the list item in this bage
function createMyListItems(){
    for(i of mySections){
        let listItem = document.createElement("li");
        listItem.innerHTML =`<li><a href="#${i.id}" data-nav="${i.id}" class="menu__link">${i.dataset.nav}</a></li>`
        navUl.appendChild(listItem);
    };
};
createMyListItems()
//Add class 'active' to section when near top of viewport
const observerMySections =() => {
    const observing = new IntersectionObserver(
        function(ent){
            ent.forEach((enter) =>{
                let activeLink = navUl.querySelector(`[data-nav=${enter.target.id}]`);
                if(enter.isIntersecting){
                    // add class to section and List item ul
                    enter.target.classList.add("your-active-class");
                    activeLink.classList.add("menu__ather__link");
                }else{
                    // remove class to section and List item ul
                    enter.target.classList.remove("your-active-class");
                    activeLink.classList.remove("menu__ather__link");
                }
            })
        },
        // options
        {
            threshold:0.7,
        }
    );
    return document.querySelectorAll("section").forEach((section) =>{
        observing.observe(section)
    })
};
// Scroll to anchor ID using scrollTO event
navUl.addEventListener("click",(eve) =>{
    eve.preventDefault();
    if(eve.target.dataset.nav){
        document.getElementById(`${eve.target.dataset.nav}`)
        .scrollIntoView({
            behavior:"smooth",
        });
    };
});
observerMySections();
// Climb to the top when pressing the button toTop
let toTop= document.querySelector(".top");
toTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
});
