<script>
    import { onMount } from "svelte";

    let src;
    let photos = ["./ourvision/1.jpeg", "./ourvision/2.jpeg", "./ourvision/3.jpeg", "./ourvision/4.jpeg"];
    let index = 0;

    onMount(() => {
        setInterval(() => {
            src = photos[index];
            index = (index + 1) % photos.length; // This ensures the index wraps around
        }, 2000); // Change the image every 2 seconds
    });

    let text = "";
    let content = "At Tilak Stone Arts, our mission is to craft exceptional and personalized home temples that bring peace, harmony, and spiritual beauty into your home. Using the finest marbles and white stones, we create timeless masterpieces tailored to your unique vision. We are committed to blending tradition with artistry, ensuring each temple is a sacred space of serenity and devotion for generations to come.";

    onMount(() => {
        let words = content.split(" "); // Split content into words
        let i = 0;

        // Function to display one word at a time
        const interval = setInterval(() => {
            text += words[i] + " "; // Add word to the text
            i++;
            if (i === words.length) {
                clearInterval(interval); // Stop the interval once all words are shown
            }
        }, 80); // Display each word with a 40ms delay
    });
</script>

<div class="flex justify-center items-center min-h-screen">
    <div class="flex flex-row items-center space-y-8 p-8 bg-[#b08d409c] rounded-lg shadow-lg gap-20">
        <!-- Text Box -->
        <div class="bg-white p-6 rounded-md shadow-md w-96 text-center">
            <div class="text-justify py-10 px-10">
                {text}
            </div>
        </div>
        
        <!-- Image Gallery -->
        <img src={src} alt="Image Gallery" class="h-[30rem] w-[40rem] object-cover rounded-lg shadow-md">
    </div>
</div>
