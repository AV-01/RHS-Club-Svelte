<script>
    let images = [
      "/icons/club-rush-1.png",
      "/icons/club-rush-2.png",
      "/icons/club-rush-3.jpg"
    ];
    let activeIndex = 0;
  
    function next() {
      activeIndex = (activeIndex + 1) % images.length;
    }
  
    function prev() {
      activeIndex = (activeIndex - 1 + images.length) % images.length;
    }

  </script>
  
  <div class="relative w-full max-w-2xl mx-auto">
    <!-- Images -->
    {#each images as img, i}
      <!-- svelte-ignore a11y_img_redundant_alt -->
      <img src={img} alt="Club Rush Image"
        class="w-full h-64 object-cover rounded-lg transition-opacity duration-700
          {i === activeIndex ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'}">
    {/each}
  
    <!-- Navigation Buttons -->
    <button on:click={prev} class="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600">
      &#10094;
    </button>
    <button on:click={next} class="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-600">
      &#10095;
    </button>
  
    <!-- Dots -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {#each images as _, i}
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <button on:click={() => activeIndex = i} class="w-3 h-3 rounded-full {i === activeIndex ? 'bg-white' : 'bg-gray-400'}"></button>
      {/each}
    </div>
  </div>
  