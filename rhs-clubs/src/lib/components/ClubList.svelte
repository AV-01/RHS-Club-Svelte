<script>
    import ClubCard from "./ClubCard.svelte";
    /**
	 * @type {any[]}
	 */
     export let clubs = [];  // Expecting an array of club dictionaries
  </script>
  
  <!-- <h1 class="text-center mt-10 text-3xl font-bold">Our Clubs</h1> -->
  
  <div class="container mt-6">
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
      {#each clubs as { name, img, slogan, id, timeUpdate }}
        <ClubCard {name} {img} {slogan} {id} {timeUpdate} />
      {/each}
    </div>
  </div>
  