<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Carousel from "$lib/components/Carousel.svelte";
</script>


<div class="min-h-screen flex flex-col">
    <Navbar activePage = "/"/>
    <div class="flex flex-col md:flex-row items-center justify-center w-full h-auto md:h-[80vh] px-6 py-10 gap-8">
        <!-- Hero Section -->
        <div class="w-full md:w-1/2 text-center md:text-left">
            <h1 class="text-3xl md:text-5xl font-bold text-gray-900 ">
                Clubs at Rocklin High School
            </h1>
            <p class="mt-5 text-lg text-gray-600">
                Explore and join clubs that interest you!
            </p>
            <a href="/explore" class="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg shadow-md hover:bg-blue-700 transition">
                See All Clubs →
            </a>
        </div>
    
        <!-- Carousel Section -->
        <div class="w-full md:w-1/2">
            <Carousel />
        </div>
    </div>
  
    <!-- Footer -->
    <Footer />
  </div>
  