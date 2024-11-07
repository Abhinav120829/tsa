<script>
    import {goto} from "$app/navigation";
</script>
<div class="relative flex flex-col gap-4 p-4 bg-white border-b border-gray-200">
    <!-- Top Navbar -->
    <div class="flex flex-row justify-between items-center">
        <!-- Left Icons -->
        <div class="flex flex-row gap-4 text-gray-700">
            <div class="flex items-center gap-2 cursor-pointer hover:text-blue-600">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div class="flex items-center gap-2 cursor-pointer hover:text-blue-600">
                <i class="fa-solid fa-location-dot"></i>
            </div>
        </div>

        <!-- Center Logo - Title -->
        <div class="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold fontchange flex items-center gap-3">
            <div>TILAK</div> <div class="flex flex-row gap-1">ST<img src="./logo.png" alt="logo" class="h-8">NE </div> <div>ARTS</div>
        </div>

        <!-- Right Icons -->
        <div class="flex flex-row gap-4 text-gray-700">
            <div class="flex items-center gap-2 cursor-pointer hover:text-blue-600">
                <i class="fa-regular fa-calendar"></i>
                <button on:click={()=> goto("/appointment")}>Book an Appointment</button>
            </div>
            <div class="flex items-center gap-2 cursor-pointer hover:text-blue-600">
                <i class="fa-solid fa-user"></i>
            </div>
        </div>
    </div>

    <!-- Bottom Navbar Links -->
    <div class="flex flex-row justify-center gap-6 text-gray-600 font-medium">
        <div class="cursor-pointer hover:text-blue-600">Home</div>
        <div class="cursor-pointer hover:text-blue-600">Products</div>
        <button class="cursor-pointer hover:text-blue-600" on:click={() => goto("/gallery")}>Gallery</button>
        <div class="cursor-pointer hover:text-blue-600">About</div>
        <div class="cursor-pointer hover:text-blue-600">Contact Us</div>
    </div>
</div>

<style>
    .fontchange {
        font-family: "Hubot Sans", sans-serif;
    }
</style>
