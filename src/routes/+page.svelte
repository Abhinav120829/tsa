<script>
    import "@fortawesome/fontawesome-free/css/all.min.css";
    import { onMount } from "svelte";
    import Logo from "../lib/Navbar/Logo.svelte";
    import Navbar from "../lib/Navbar/Navbar.svelte";
	import { slide } from "svelte/transition";
	import Photo from "../lib/Photo/Photo.svelte";
	import Vision from "../lib/MainPageContent/Vision.svelte";
	import ImageSlider from "../lib/Drag/ImageSlider.svelte";

    let scrolled = false;

    function handleScroll() {
        // Toggle `scrolled` based on the scroll position (80 pixels threshold)
        scrolled = window.scrollY > 80;
    }

    onMount(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
</script>
<style>
</style>
<div class="mx-2">
    {#if scrolled}
    <div transition:slide={{delay:50, duration:10}}><Logo /></div>
    {:else}
    <div transition:slide={{delay:50}}><Navbar /></div>
    {/if}
</div>
<div class="p-4 rounded-md">
    <Photo/>
</div>
<Vision/>
<div class="flex flex-row justify-between p-8 gap-8 bg-[#b08d409c]">
    <div class="w-[40%] h-auto shadow-xl rounded-md p-4 bg-white flex flex-col gap-6">
        <div class="flex justify-center">
            <div class="text-2xl bg-slate-200 p-2 rounded-lg shadow-sm">
                THE DIFFERENCE
            </div>
        </div>
        <div class="flex gap-2 flex-col">
            <div class="text-xl">
                Elevate Your Spirituality at Home with This Unique Transformation
            </div>
            <div class="text-sm text-justify">
                Transform any room into a serene sanctuary. With our advanced lighting and design solutions, you can bring a sense of tranquility and spiritual harmony to any space in your home. Whether it’s your living room, bedroom, or even your basement, this unique system allows you to experience peaceful, natural light that enhances your environment. Imagine a space that feels as peaceful as a retreat, right at the comfort of your home. Perfect for creating a calm, spiritual atmosphere in any room.       
            </div>
        </div>
    </div>
        <ImageSlider/>
</div>
