/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *@description Make section active
 *@param {Event} event - the click event
 */
function makeSectionActive(event) {
  const activedElement = document.querySelector(".your-active-class");
  // if the class="your-active-class" exists in the element remove it and continue the code
  if (activedElement && !activedElement.classList.toggle("your-active-class")) {
    const dataNav = event.target.textContent;
    const tragetElement = document.querySelector(`[data-nav="${dataNav}"]`);
    tragetElement.classList.add("your-active-class");
  }
}

/**
 *@description Add Section
 */
function addSection() {
  // section Number
  let num = document.querySelector("#navbar__list").children.length + 1;

  // Nav section
  const parentNav = document.querySelector("#navbar__list");
  parentNav.innerHTML += `<li><a href="#section${num}" class="menu__link">Section ${num}</a></li>`;

  // Main section
  const parentMain = document.querySelector("main");
  parentMain.innerHTML += `<section id="section${num}" data-nav="Section ${num}">
  <div class="landing__container">
    <h2>Section ${num}</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
      fermentum metus faucibus lectus pharetra dapibus. Suspendisse
      potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget
      lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed
      convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla
      eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam
      nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis
      lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a
      tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus
      vitae elit. Integer nec libero venenatis libero ultricies molestie
      semper in tellus. Sed congue et odio sed euismod.
    </p>

    <p>
      Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar
      gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam.
      Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum
      consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget
      elementum tortor mollis non.
    </p>
  </div>
</section>`;
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// Set sections as active
// TODO: Add class 'active' to section when near top of viewport
document.addEventListener("scroll", () => {
  let sections = document.querySelectorAll("[data-nav]");
  let rect = {};
  sections.forEach((section) => {
    rect = section.getBoundingClientRect();
    if (rect.top > -100 && rect.top < rect.height) {
      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
    }
  });
});

// TODO: Scroll to section on link click
// select ul to delegate event
document
  .querySelector("#navbar__list")
  .addEventListener("click", (event) => makeSectionActive(event));

// TODO: build the nav
// TODO: Build menu
document.querySelector("nav button").addEventListener("click", addSection);

// TODO: Add a scroll to the top button on the page
const btnUp = document.querySelector(".btn-up");
window.onscroll = () => {
  const threshold = window.visualViewport.height;
  window.scrollY > threshold
    ? btnUp.classList.add("btn-show")
    : btnUp.classList.remove("btn-show");
};
btnUp.onclick = () => {
  window.scrollTo({
    top: 0,
  });
};

// TODO: Scroll to anchor ID using scrollTO event
const header = document.querySelector(".page__header");
let isScrolling;
document.onscroll = () => {
  header.classList.remove("hide-header");
  clearTimeout(isScrolling);
  isScrolling = setTimeout(() => {
    header.classList.add("hide-header");
  }, 3000);
  if (window.scrollY >= -10 && window.scrollY <= 200) {
    clearTimeout(isScrolling);
    header.classList.remove("hide-header");
  }
};
/**
 * End Main Functions
 * Begin Events
 *
 */
