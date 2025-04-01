<script>
    export let name;
    export let img;
    export let slogan;
    export let id;
    export let timeUpdate;
    
  </script>
  
  <div class="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
    <!-- Club Image -->
    <div class="relative bg-gray-100">
      <img src={img} alt={name} class="w-full h-60 object-cover">
    </div>
  
    <!-- Club Info -->
    <div class="p-4 flex flex-col flex-grow bg-gray-50">
      <h6 class="text-lg font-semibold">{name}</h6>
      <p class="text-sm text-gray-600 truncate">{slogan}</p>
      <a href={`/view/${id}`} class="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700 transition">
        Learn more
      </a>
    </div>
  
    <!-- Card Footer -->
    <div class="bg-gray-100 px-4 py-2 text-xs text-gray-500">
      <small>Last updated: {timeUpdate}</small>
    </div>
  </div>
  