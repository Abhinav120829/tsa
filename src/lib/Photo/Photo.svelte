<script>
    let showBefore = true;
</script>

<div class="relative max-w-full mx-auto h-screen overflow-hidden bg-[#b08c40] rounded-lg">
    <!-- Before Image -->
    <img 
        src="photos/1.jpeg" 
        alt="Before" 
        class="w-full h-full object-cover transition-opacity duration-500 absolute top-0 left-0 p-4" 
        class:hidden={!showBefore} 
    />

    <!-- After Image -->
    <img 
        src="photos/2.jpeg" 
        alt="After" 
        class="w-full h-full object-cover transition-opacity duration-500 absolute top-0 left-0 p-4" 
        class:hidden={showBefore} 
    />

    <!-- Buttons -->
    <div class="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-6 z-10">
        <button 
            class="px-6 py-3 bg-black bg-opacity-70 text-white rounded-md hover:bg-opacity-90" 
            on:click={() => showBefore = true}
        >
            Before
        </button>
        <button 
            class="px-6 py-3 bg-black bg-opacity-70 text-white rounded-md hover:bg-opacity-90" 
            on:click={() => showBefore = false}
        >
            After
        </button>
    </div>
</div>

<style>
    .hidden { display: none; }
</style>
