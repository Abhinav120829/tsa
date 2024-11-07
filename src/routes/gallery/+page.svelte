<script>
    // Sample products with images and details
    const products = [
      { name: "Product 1", imageUrl: "gallery/1.jpeg" },
      { name: "Product 2", imageUrl: "gallery/2.jpeg" },
      { name: "Product 3", imageUrl: "gallery/3.jpeg" },
      { name: "Product 4", imageUrl: "gallery/4.jpeg" },
      { name: "Product 5", imageUrl: "gallery/5.jpeg" },
      { name: "Product 6", imageUrl: "gallery/6.jpeg" },
      { name: "Product 7", imageUrl: "gallery/7.jpeg" },
      { name: "Product 8", imageUrl: "gallery/8.jpeg" },
      { name: "Product 9", imageUrl: "gallery/9.jpeg" },
      { name: "Product 10", imageUrl: "gallery/10.jpeg" },
    ];
  </script>
  
  <style>
    /* Gallery Item Hover Effect */
    .gallery-item {
      overflow: hidden;
      border-radius: 8px; /* Optional for rounded corners */
      transition: box-shadow 0.3s ease, opacity 0.3s ease;
    }
  
    .gallery-item img {
      transition: transform 0.3s ease; /* Smooth transition for the image scaling */
    }
  
    .gallery-item:hover img {
      transform: scale(1.05); /* Image scales on hover */
    }
  
    .gallery-item:hover {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      opacity: 1;
    }
  
    /* Fade-in for the gallery items */
    .gallery-container {
      opacity: 0;
      animation: fadeIn 1s forwards; /* Trigger fade-in effect */
    }
  
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  
    /* Slide-in animation from left */
    .gallery-item {
      animation: slideIn 0.6s ease-out forwards;
    }
  
    @keyframes slideIn {
      from {
        transform: translateX(-50px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  </style>
  
  <div class="py-10 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-semibold text-gray-800 text-center mb-8">Our Product Gallery</h2>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 gallery-container">
        {#each products as product, index}
          <div class="gallery-item bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out">
            <img src={product.imageUrl} alt={product.name} class="w-full h-56 object-cover" />
          </div>
        {/each}
      </div>
    </div>
  </div>
  