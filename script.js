document.addEventListener("DOMContentLoaded", function () {
    const scroller = scrollama();
    const graphicItems = document.querySelectorAll(".graphic-item");
    const textSteps = document.querySelectorAll(".text-step");
  
    scroller
      .setup({
        step: ".graphic-item",
        offset: 0.5,
        debug: false
      })
      .onStepEnter(response => {
        // Hide all text steps
        textSteps.forEach(step => step.style.display = "none");
  
        // Show the matching one
        const index = response.index;
        document.getElementById(`text-step-${index}`).style.display = "block";
      });
  
    window.addEventListener("resize", scroller.resize);
  });
  

