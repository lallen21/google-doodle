console.log('OK');

// Bounce-in effect (when page loads)
gsap.from([".letter"], {
    y: -10, // Start from above
    opacity: 0,
    duration: 1,
    stagger: 0.2, // Delays each letter
    ease: "bounce.out"
  });
  
  // Floating animation (zero gravity)
  gsap.to([".letter",], {
    y: "+=10", // Moves slightly up
    duration: 2,
    repeat: -1, 
    yoyo: true, 
    ease: "sine.inOut"
  });
  
  // Slight rotation effect (space drift)
  gsap.to([".letter"], {
    rotation: 2,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });
  

  gsap.to([".letter"], {
    filter: "drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.8))",
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });
  
  

  
  // Get the dimensions and position of the bg element
  const bg = document.querySelector("#bg");
  const bgRect = bg.getBoundingClientRect();
  
  // Set the initial position of the rocket just outside the left side of the bg element
  gsap.set("#rocket", {
    x: bgRect.left - 700, // Adjust the value to position the rocket just outside the left side
    y: "-=20" // Move the rocket up by 20 pixels
  });
  
  // Move the rocket across the screen
  gsap.to("#rocket", {
    x: bgRect.right - 630, // Adjust the value to position the rocket just outside the right side
    duration: 10,
    ease: "linear",
    repeat: -1,
    onUpdate: function () {
      let rocket = document.querySelector("#rocket");
      let trail = document.querySelector("#rocket-trail");
      let rocketPos = rocket.getBoundingClientRect();
      
      // Position the trail slightly behind the rocket
      gsap.set(trail, {
        left: rocketPos.left - 85, // Adjust position to fit behind
        top: rocketPos.top + 30, // Adjust for correct alignment
        opacity: 1
      });
    }
  });
  
  // Trail fade effect
  gsap.to("#rocket-trail", {
    opacity: 0,
    duration: 1,
    repeat: -1,
    yoyo: true
  });
  
  
  // Function to make stars flicker randomly
  function flickerStars() {
    gsap.to(".star", {
      opacity: 0, // Stars turn off
      duration: gsap.utils.random(0.2, 1.5), // Random fade-out speed
      repeat: -1, // Infinite loop
      yoyo: true, // Makes them fade back in
      ease: "power1.inOut",
      delay: () => gsap.utils.random(0, 2) // Random start delay per star
    });
  }
  
  // Run the flicker effect
  flickerStars();
  
  
  gsap.to("#earth", {
    y: "+=8",
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
  
  // Pulsating effect
  gsap.to("#earth", {
    scale: 1.05,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });
  
  gsap.to("#earth", {
    rotate: 360, // Full spin
    transformOrigin: "50% 50%", 
    duration: 10, 
    repeat: -1,
    ease: "linear"
  });
  
  gsap.to("#planet", {
    filter: "drop-shadow(0px 0px 15px rgba(197, 77, 77, 0.8))",
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });


  const body = document.querySelector('body');

  colorkit.sparkle(body);
