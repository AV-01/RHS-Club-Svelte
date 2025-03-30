<script>
    let isOpen = false;
    let searchQuery = '';
    export let activePage = "";
  </script>
  
  <nav class="bg-white border-gray-200 px-4 py-2.5 shadow-md">
    <div class="container mx-auto flex flex-wrap items-center justify-between">
      <!-- Logo -->
      <a href="/" class="flex items-center">
        <svg class="h-10 mr-3" width="51" height="70" viewBox="0 0 51 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <path d="M1 53H27.9022C40.6587 53 51 42.7025 51 30H24.0978C11.3412 30 1 40.2975 1 53Z" fill="#76A9FA"></path>
            <path d="M-0.876544 32.1644L-0.876544 66.411C11.9849 66.411 22.4111 55.9847 22.4111 43.1233L22.4111 8.87674C10.1196 8.98051 0.518714 19.5571 -0.876544 32.1644Z" fill="#A4CAFE"></path>
            <path d="M50 5H23.0978C10.3413 5 0 15.2975 0 28H26.9022C39.6588 28 50 17.7025 50 5Z" fill="#1C64F2"></path>
          </g>
          <defs><clipPath id="clip0"><rect width="51" height="70" fill="white"></rect></clipPath></defs>
        </svg>
        <span class="self-center text-lg font-semibold whitespace-nowrap">RHS Clubs</span>
      </a>
  
      
  
      <!-- Hamburger Button (Mobile) -->
      <button 
        class="md:hidden text-gray-400 hover:text-gray-900 focus:ring-2 focus:ring-blue-300 rounded-lg p-2" 
        aria-controls="navbar-menu"
        on:click={() => isOpen = !isOpen}>
        {#if isOpen}
          <!-- Close Icon -->
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
        {:else}
          <!-- Menu Icon -->
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
          </svg>
        {/if}
      </button>
  
      <!-- Navbar Links -->
      <div class={`w-full md:flex md:items-center md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-menu">
        <ul class="flex flex-col md:flex-row md:space-x-8 md:mt-0 mt-4 text-sm font-medium">
          <li><a href="/" class="{activePage === '/' ? 'text-blue-700 font-bold' : 'text-gray-700 hover:text-blue-600'}    px-3 py-2 rounded">Home</a></li>
          <li><a href="/explore" class="{activePage === '/explore' ? 'text-blue-700 font-bold' : 'text-gray-700 hover:text-blue-600'}       px-3 py-2 rounded">Explore</a></li>
          <li><a href="/faq" class="{activePage === '/faq' ? 'text-blue-700 font-bold' : 'text-gray-700 hover:text-blue-600'} px-3 py-2 rounded">FAQ</a></li>

        </ul>
      </div>
  <!-- Search Bar -->
  <div class="relative hidden md:block">
    <input type="text" bind:value={searchQuery} placeholder="Search..." class="bg-gray-100 border border-gray-300 text-gray-900 rounded-lg px-3 py-1 w-40 focus:ring-blue-500 focus:border-blue-500">
  </div>
      <!-- Right Side Buttons -->
      <div class="hidden md:flex items-center space-x-3">
        <a href="/create_new_club" class="border border-green-500 text-green-500 px-3 py-1 rounded hover:bg-green-500 hover:text-white">Add your club!</a>
        <a href="/admin" class="border border-red-500 text-red-500 px-3 py-1 rounded hover:bg-red-500 hover:text-white">Admin</a>
      </div>
    </div>
  </nav>
  