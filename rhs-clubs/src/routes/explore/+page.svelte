<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import ClubList from "$lib/components/ClubList.svelte";

    let categories = [
    {
      category_name: "STEM Clubs",
      clubs: [
        {
          name: "Math Club",
          img: "/images/math-club.jpg",
          slogan: "Solving problems, one equation at a time.",
          id: "math-club",
          timeUpdate: "2025-03-29"
        },
        {
          name: "Robotics Club",
          img: "/images/robotics-club.jpg",
          slogan: "Building the future, one bot at a time.",
          id: "robotics-club",
          timeUpdate: "2025-03-28"
        }
      ]
    },
    {
      category_name: "Arts & Culture",
      clubs: [
        {
          name: "Music Club",
          img: "/images/music-club.jpg",
          slogan: "Bringing harmony to RHS.",
          id: "music-club",
          timeUpdate: "2025-03-26"
        },
        {
          name: "Drama Club",
          img: "/images/drama-club.jpg",
          slogan: "Lights, camera, action!",
          id: "drama-club",
          timeUpdate: "2025-03-25"
        }
      ]
    }
  ];
</script>

<Navbar activePage = "/explore"/>
<h1 class="text-center mt-10 text-3xl font-bold">Our Clubs</h1>

<div class="container mt-6">
  {#each categories as { category_name, clubs }}
    <h2 class="text-xl font-semibold mt-6">{category_name}</h2>
    <ClubList {clubs} />
  {/each}
</div>

  
  <!-- <ClubList {clubs} /> -->
  <Footer />
  <!-- <slot />  -->