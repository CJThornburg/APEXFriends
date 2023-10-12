const btn = document.querySelector(".button");
console.log(btn)
// btn.classList.add("button--loading");
// btn.classList.remove("button--loading");

btn.addEventListener("click", () => {
  console.log("in event listener")
  btn.setAttribute("disabled", "");
  // btn.classList.add("invisClass");
  btn.classList.add("button--loading");

});

// alert("hi");
// browser.runtime.onMessage.addListener(message => {
//   console.log("background: onMessage", message);

//   // Add this line:
//   return Promise.resolve("Dummy response to keep the console quiet");
// });
