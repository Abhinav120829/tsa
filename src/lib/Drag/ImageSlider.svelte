<script>
    let sliderValue = 50; // Initial slider position in percentage
    let isDragging = false;
    let buttonPosition = sliderValue; // Store button's position
    
    const handleMouseMove = (event) => {
      if (!isDragging) return;
      const sliderRect = event.currentTarget.getBoundingClientRect();
      const newValue = ((event.clientX - sliderRect.left) / sliderRect.width) * 100;
      sliderValue = Math.min(Math.max(newValue, 0), 100); // Clamp value between 0% and 100%
  
      // Update the button position to follow the slider
      buttonPosition = sliderValue;
    };
  
    const handleMouseUp = () => {
      isDragging = false;
    };
  
    const startDrag = (event) => {
      isDragging = true;
      handleMouseMove(event); // To update the position when the drag starts
    };
  </script>
  
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="slider-wrapper relative w-full h-[70vh] mx-auto overflow-hidden bg-white rounded-lg max-w-5xl"
    on:mousemove={handleMouseMove}
    on:mouseup={handleMouseUp}
    on:mouseleave={handleMouseUp}
    style="user-select: none;"
  >
    <!-- Before Image -->
    <div class="absolute inset-0 p-10">
      <img
        src="./Dragslider/2.jpeg"
        alt="Before"
        class="w-full h-full object-cover"
        draggable="false"
      />
      <div
        class="absolute top-5 left-5 text-white text-xl font-bold"
        style="text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);"
      >
        
      </div>
    </div>
  
    <!-- After Image -->
    <div
      class="absolute inset-0 p-10"
      style="clip-path: polygon(0 0, {sliderValue}% 0, {sliderValue}% 100%, 0% 100%);"
    >
      <img
        src="./Dragslider/1.jpeg"
        alt="After"
        class="w-full h-full object-cover"
        draggable="false"
      />
      <div
        class="absolute top-5 right-5 text-white text-xl font-bold"
        style="text-shadow: 0 0 10px rgba(0, 0, 0, 0.7);"
      >
       
      </div>
    </div>
  
  
    <!-- Draggable Button -->
    <div
      class="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gray-800 text-white flex items-center justify-center rounded-full shadow-lg cursor-pointer"
      style="left: {buttonPosition}%;"
      draggable="false"
      on:mousedown={startDrag}
    >
      Drag
    </div>
  </div>
  