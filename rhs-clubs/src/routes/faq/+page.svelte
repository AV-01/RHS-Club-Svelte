<script>
    import Navbar from "$lib/components/Navbar.svelte";

    import Footer from "$lib/components/Footer.svelte";
  </script>
  
  <Navbar activePage="/faq" />
  
  <header class="container mx-auto mt-10">
    <h1 class="text-center text-3xl font-bold">Frequently Asked Questions</h1>
    <div class="mt-5 px-5">
      <div class="border border-gray-300 rounded-lg overflow-hidden">
        <details class="p-4 border-b border-gray-300">
          <summary class="cursor-pointer text-lg font-medium">How do I create a club at Rocklin High School?</summary>
          <div class="mt-2 text-gray-700">
            <p>Starting a club is really simple, here's what you need to do!</p>
            <ol class="list-decimal list-inside mt-2 space-y-1">
              <li><strong>Have an idea for a club.</strong> Make sure it's unique and interesting!</li>
              <li><strong>Find a club advisor.</strong> Ask a teacher at Rocklin High to host your meetings.</li>
              <li><strong>Fill out a club form.</strong> Obtain and submit the required paperwork.</li>
            </ol>
          </div>
        </details>
      </div>
    </div>
  </header>
  
  <Footer />