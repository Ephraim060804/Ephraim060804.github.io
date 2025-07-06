 const title = document.querySelector("h1");
  const subtitle = document.querySelector("h4");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      title.classList.add("scrolled");
      subtitle.classList.add("scrolled");
    } else {
      title.classList.remove("scrolled");
      subtitle.classList.remove("scrolled");
    }
  });

  window.onload = function () {
    const popup = document.getElementById("popup");
    
   
    setTimeout(() => {
      popup.classList.add("show");

      
      setTimeout(() => {
        popup.classList.remove("show");
        popup.classList.add("hide");
      }, 30000);
    }, 1000);
  };