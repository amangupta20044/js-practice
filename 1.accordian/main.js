// Dummy data about India
const data = [
  {
    id: 1,
    title: "Population & Area",
    content:
      "India is the second-most populous country in the world and has a diverse range of climates and landscapes, from the Himalayas in the north to tropical coasts in the south."
  },
  {
    id: 2,
    title: "National Symbols",
    content:
      "National symbols include the flag (Tiranga), the national anthem (Jana Gana Mana), the Bengal tiger (national animal), and the lotus (national flower)."
  },
  {
    id: 3,
    title: "Major Festivals",
    content:
      "India celebrates many festivals such as Diwali, Holi, Eid, Christmas, Navratri and Pongal — each with local customs, special foods and colourful traditions."
  },
  {
    id: 4,
    title: "Languages",
    content:
      "India has many languages. Hindi and English are official for central government purposes, and the Constitution recognises 22 scheduled languages including Bengali, Telugu, Marathi, Tamil and Urdu."
  },
  {
    id: 5,
    title: "Famous Landmarks",
    content:
      "Well-known landmarks include the Taj Mahal (Agra), Qutub Minar (Delhi), Gateway of India (Mumbai), Hampi ruins (Karnataka) and the backwaters of Kerala."
  }
];

// Select the container
const container = document.getElementById("accordion");

// Generate accordion items dynamically
data.forEach((item) => {
  const el = document.createElement("div");
  el.className = "accordion-item";
  el.innerHTML = `
    <button class="accordion-header" aria-expanded="false" aria-controls="body-${item.id}" id="head-${item.id}">
      <span>${item.title}</span>
      <span class="chev" aria-hidden="true">▶</span>
    </button>
    <div id="body-${item.id}" class="accordion-body" role="region" aria-labelledby="head-${item.id}">
      ${item.content}
    </div>
  `;
  container.appendChild(el);

  const header = el.querySelector(".accordion-header");
  const body = el.querySelector(".accordion-body");
  const chev = el.querySelector(".chev");

  // Click to open/close
  header.addEventListener("click", () => {
    const open = header.getAttribute("aria-expanded") === "true";

    // Close all (for single open behavior)
    document.querySelectorAll(".accordion-header").forEach((h) => {
      h.setAttribute("aria-expanded", "false");
      h.nextElementSibling.style.display = "none";
      h.querySelector(".chev")?.classList.remove("open");
    });

    // Toggle current
    if (!open) {
      header.setAttribute("aria-expanded", "true");
      body.style.display = "block";
      chev.classList.add("open");
    } else {
      header.setAttribute("aria-expanded", "false");
      body.style.display = "none";
      chev.classList.remove("open");
    }
  });
});
