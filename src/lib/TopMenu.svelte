<script>
  import { page } from "$app/stores";
  export let topMenus = undefined;
  export let topul = undefined;
  export let topli = undefined;
  let hidden = true;
  let block = false;
  let activeDropdown = undefined;
  const handleDropdown = (dropdown) => {
    console.log("dropdown.id", dropdown.id);
    hidden = !hidden;
    block = !block;
    activeDropdown = dropdown.id;
    console.log("activeDropdown: ", activeDropdown);
  };
  export let textSize = "text-sm";

  export let topMenuDiv = undefined;
  let barHidden = true;
  const handleClickbtn = () => {
    barHidden = !barHidden;
  };
</script>

<div class={topMenuDiv}>
  <button
    on:click={handleClickbtn}
    data-collapse-toggle="mobile-menu"
    type="button"
    class="inline-flex items-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    aria-controls="mobile-menu-2"
    aria-expanded="false"
  >
    <span class="sr-only">Open main menu</span>
    <svg
      class="w-10 h-10"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        fill-rule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clip-rule="evenodd"
      /></svg
    >
    <svg
      class="hidden w-10 h-10"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      ><path
        fill-rule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clip-rule="evenodd"
      /></svg
    >
  </button>
  <div
    class:hidden={barHidden}
    class="w-full md:block md:w-auto"
    id="mobile-menu"
  >
    <ul class={topul}>
      {#each topMenus as { id, name, link, rel, child }}
        {#if child}
          <li>
            <button
              on:click={handleDropdown({ id })}
              class="flex justify-between items-center py-2 pr-4 pl-3 w-full {textSize} font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >{name}
              <svg
                class="ml-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                /></svg
              ></button
            >
            {#if activeDropdown === id}
              <!-- Dropdown menu -->
              <div
                class:hidden
                class:block
                class="z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                style="position: absolute; margin: 0px;"
              >
                <ul class="py-1" aria-labelledby="dropdownLargeButton">
                  {#each child as item}
                    <li>
                      <a
                        href={item.link}
                        {rel}
                        class="block py-2 px-4 text-{textSize} text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                        >{item.name}</a
                      >
                    </li>
                  {/each}
                </ul>
              </div>
            {/if}
          </li>
        {:else}
          <li class={topli}>
            <a
              class:active={$page.url.pathname === link}
              href={link}
              {rel}
              class="block py-2 pr-4 pl-3  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent {textSize}"
              >{name}</a
            >
          </li>
        {/if}
      {/each}
    </ul>
  </div>
</div>
