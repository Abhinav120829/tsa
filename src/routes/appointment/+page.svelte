<script>
    let name = '';
    let email = '';
    let appointmentDate = '';
    let deliveryOption = '';
    let successMessage = '';
    
    const handleSubmit = (e) => {
      e.preventDefault();
      successMessage = `Appointment booked successfully for ${name} on ${appointmentDate} with the delivery option: ${deliveryOption}`;
    };
  </script>
  
  <div class="relative bg-cover bg-center h-screen" style="background-image: url('/om.jpg'); background-size: 50%;"> <!-- Reducing the size of the background image -->
    <div class="absolute inset-0 bg-black bg-opacity-30 z-1"></div>
  
    <div class="relative z-2 flex items-center justify-center h-full">
      <div class="bg-white bg-opacity-80 rounded-lg p-8 w-full sm:w-96 animate-slide-up">
        <h1 class="text-3xl font-semibold text-center text-gray-800 mb-6 animate-fade-in">Book an Appointment</h1>
  
        <form on:submit={handleSubmit} class="space-y-4">
          <!-- Name Field -->
          <div class="space-y-2 animate-fade-in animate-delay-300">
            <label for="name" class="font-medium text-gray-800">Your Name</label>
            <input type="text" id="name" bind:value={name} required class="border p-2 rounded w-full focus:ring-2 focus:ring-blue-500 transition" />
          </div>
  
          <!-- Email Field -->
          <div class="space-y-2 animate-fade-in animate-delay-500">
            <label for="email" class="font-medium text-gray-800">Your Email</label>
            <input type="email" id="email" bind:value={email} required class="border p-2 rounded w-full focus:ring-2 focus:ring-blue-500 transition" />
          </div>
  
          <!-- Date Field -->
          <div class="space-y-2 animate-fade-in animate-delay-700">
            <label for="appointmentDate" class="font-medium text-gray-800">Appointment Date</label>
            <input type="date" id="appointmentDate" bind:value={appointmentDate} required class="border p-2 rounded w-full focus:ring-2 focus:ring-blue-500 transition" />
          </div>
  
          <!-- Delivery Option -->
          <div class="space-y-2 animate-fade-in animate-delay-900">
            <label for="deliveryOption" class="font-medium text-gray-800">Delivery Option</label>
            <select id="deliveryOption" bind:value={deliveryOption} class="border p-2 rounded w-full focus:ring-2 focus:ring-blue-500 transition">
              <option value="">Select Delivery Option</option>
              <option value="In-Person">In-Person</option>
              <option value="Online">Online</option>
              <option value="Mail">Mail</option>
            </select>
          </div>
  
          <!-- Submit Button -->
          <div class="animate-fade-in animate-delay-1100">
            <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transform hover:scale-105 transition">
              Book Appointment
            </button>
          </div>
        </form>
  
        {#if successMessage}
          <div class="mt-6 p-4 bg-green-100 text-green-700 rounded-md animate-slide-in">
            {successMessage}
          </div>
        {/if}
      </div>
    </div>
  </div>
  
  <style>
    /* Custom Tailwind Animations */
    @keyframes fade-in {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
  
    @keyframes slide-up {
      0% { transform: translateY(20px); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }
  
    @keyframes slide-in {
      0% { transform: translateY(10px); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }
  
    /* Add animation utilities in Tailwind */
    .animate-fade-in {
      animation: fade-in 1s ease-in-out;
    }
  
    .animate-slide-up {
      animation: slide-up 1s ease-out;
    }
  
    .animate-slide-in {
      animation: slide-in 0.5s ease-out;
    }
  
    /* Add delay for staggered animations */
    .animate-delay-300 {
      animation-delay: 0.3s;
    }
  
    .animate-delay-500 {
      animation-delay: 0.5s;
    }
  
    .animate-delay-700 {
      animation-delay: 0.7s;
    }
  
    .animate-delay-900 {
      animation-delay: 0.9s;
    }
  
    .animate-delay-1100 {
      animation-delay: 1.1s;
    }
  </style>
  