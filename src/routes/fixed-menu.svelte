<script>
  import Aside from "$lib/Aside.svelte";
  import Nav from "$lib/Nav.svelte";
  import SidebarList from "$lib/SidebarList.svelte";
  import Navbar from "$lib/Navbar.svelte";
  let svelteflows = [
    { url: "/getting-started", name: "Getting Started", rel: "external" },
    { url: "about", name: "About", rel: "external" },
  ];
  let siteName = "Svelte Flow";
  let asideClass = "absolute w-auto bg-white pt-8 shadow-lg z-50 px-8";
  let headerClass =
    "bg-white py-3 px-10 items-center text-gray-600 border-b-2 pl-8";
  let navClass = "px-4 text-xl";
  let components = [
    { url: "alerts", name: "Alerts", rel: "external" },
    { url: "buttons", name: "Buttons", rel: "external" },
    { url: "cards", name: "Cards", rel: "external" },
    { url: "list-group", name: "List Group", rel: "external" },
    { url: "modals", name: "Modals", rel: "external" },
    { url: "tabs", name: "Tabs", rel: "external" },
  ];
  let topMenus = [
    { route: "", name: "Home", rel: "external" },
    { route: "about", name: "About", rel: "external" },
    { route: "github", name: "GitHub", rel: "external" },
  ];
</script>

<div class="fixed z-50 top-0 left-0 w-full">
  <Navbar {siteName} {asideClass} {headerClass} {navClass} {topMenus} />
  <Aside>
    <Nav>
      <h3>Svelte-Flow</h3>
      {#each svelteflows as { url, name, rel }}
        <SidebarList {url} {name} {rel} />
      {/each}
    </Nav>
    <Nav>
      <h3>Components</h3>
      {#each components as { url, name, rel }}
        <SidebarList {url} {name} {rel} />
      {/each}
    </Nav>
  </Aside>
</div>

<main class="container mx-auto p-8">
  <h1>{siteName}</h1>

  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta distinctio
    autem aperiam hic quis animi magnam alias voluptas voluptatibus doloremque
    nisi sapiente tempore quidem, exercitationem pariatur natus a dignissimos
    consequuntur. Ea soluta voluptate voluptates dolore vel dolorum doloribus
    aut pariatur. Itaque, quam molestiae adipisci vel libero aspernatur, ea quae
    voluptatibus, ullam dignissimos iusto doloremque voluptatem saepe iste
    expedita perferendis quasi! Atque necessitatibus vel distinctio, voluptatum
    culpa tempora error quas illo eum impedit. Necessitatibus vitae eos tenetur,
    ipsa, modi odio architecto rerum ipsum incidunt eligendi asperiores.
    Deserunt saepe dolor neque dolorum! Animi eveniet cupiditate cum sint, quam,
    praesentium illum optio ipsum neque deserunt magni, sed vitae minima eius
    quis laudantium quisquam accusamus sapiente necessitatibus et quidem! Ipsum
    inventore nemo nam deserunt. Beatae deleniti quod aspernatur labore natus
    iusto odit, quaerat modi culpa repudiandae, voluptatum eum, recusandae
    voluptas corrupti cum soluta quos facere a in animi laudantium vel esse
    veniam quibusdam? Quis.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta distinctio
    autem aperiam hic quis animi magnam alias voluptas voluptatibus doloremque
    nisi sapiente tempore quidem, exercitationem pariatur natus a dignissimos
    consequuntur. Ea soluta voluptate voluptates dolore vel dolorum doloribus
    aut pariatur. Itaque, quam molestiae adipisci vel libero aspernatur, ea quae
    voluptatibus, ullam dignissimos iusto doloremque voluptatem saepe iste
    expedita perferendis quasi! Atque necessitatibus vel distinctio, voluptatum
    culpa tempora error quas illo eum impedit. Necessitatibus vitae eos tenetur,
    ipsa, modi odio architecto rerum ipsum incidunt eligendi asperiores.
    Deserunt saepe dolor neque dolorum! Animi eveniet cupiditate cum sint, quam,
    praesentium illum optio ipsum neque deserunt magni, sed vitae minima eius
    quis laudantium quisquam accusamus sapiente necessitatibus et quidem! Ipsum
    inventore nemo nam deserunt. Beatae deleniti quod aspernatur labore natus
    iusto odit, quaerat modi culpa repudiandae, voluptatum eum, recusandae
    voluptas corrupti cum soluta quos facere a in animi laudantium vel esse
    veniam quibusdam? Quis.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta distinctio
    autem aperiam hic quis animi magnam alias voluptas voluptatibus doloremque
    nisi sapiente tempore quidem, exercitationem pariatur natus a dignissimos
    consequuntur. Ea soluta voluptate voluptates dolore vel dolorum doloribus
    aut pariatur. Itaque, quam molestiae adipisci vel libero aspernatur, ea quae
    voluptatibus, ullam dignissimos iusto doloremque voluptatem saepe iste
    expedita perferendis quasi! Atque necessitatibus vel distinctio, voluptatum
    culpa tempora error quas illo eum impedit. Necessitatibus vitae eos tenetur,
    ipsa, modi odio architecto rerum ipsum incidunt eligendi asperiores.
    Deserunt saepe dolor neque dolorum! Animi eveniet cupiditate cum sint, quam,
    praesentium illum optio ipsum neque deserunt magni, sed vitae minima eius
    quis laudantium quisquam accusamus sapiente necessitatibus et quidem! Ipsum
    inventore nemo nam deserunt. Beatae deleniti quod aspernatur labore natus
    iusto odit, quaerat modi culpa repudiandae, voluptatum eum, recusandae
    voluptas corrupti cum soluta quos facere a in animi laudantium vel esse
    veniam quibusdam? Quis.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta distinctio
    autem aperiam hic quis animi magnam alias voluptas voluptatibus doloremque
    nisi sapiente tempore quidem, exercitationem pariatur natus a dignissimos
    consequuntur. Ea soluta voluptate voluptates dolore vel dolorum doloribus
    aut pariatur. Itaque, quam molestiae adipisci vel libero aspernatur, ea quae
    voluptatibus, ullam dignissimos iusto doloremque voluptatem saepe iste
    expedita perferendis quasi! Atque necessitatibus vel distinctio, voluptatum
    culpa tempora error quas illo eum impedit. Necessitatibus vitae eos tenetur,
    ipsa, modi odio architecto rerum ipsum incidunt eligendi asperiores.
    Deserunt saepe dolor neque dolorum! Animi eveniet cupiditate cum sint, quam,
    praesentium illum optio ipsum neque deserunt magni, sed vitae minima eius
    quis laudantium quisquam accusamus sapiente necessitatibus et quidem! Ipsum
    inventore nemo nam deserunt. Beatae deleniti quod aspernatur labore natus
    iusto odit, quaerat modi culpa repudiandae, voluptatum eum, recusandae
    voluptas corrupti cum soluta quos facere a in animi laudantium vel esse
    veniam quibusdam? Quis.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta distinctio
    autem aperiam hic quis animi magnam alias voluptas voluptatibus doloremque
    nisi sapiente tempore quidem, exercitationem pariatur natus a dignissimos
    consequuntur. Ea soluta voluptate voluptates dolore vel dolorum doloribus
    aut pariatur. Itaque, quam molestiae adipisci vel libero aspernatur, ea quae
    voluptatibus, ullam dignissimos iusto doloremque voluptatem saepe iste
    expedita perferendis quasi! Atque necessitatibus vel distinctio, voluptatum
    culpa tempora error quas illo eum impedit. Necessitatibus vitae eos tenetur,
    ipsa, modi odio architecto rerum ipsum incidunt eligendi asperiores.
    Deserunt saepe dolor neque dolorum! Animi eveniet cupiditate cum sint, quam,
    praesentium illum optio ipsum neque deserunt magni, sed vitae minima eius
    quis laudantium quisquam accusamus sapiente necessitatibus et quidem! Ipsum
    inventore nemo nam deserunt. Beatae deleniti quod aspernatur labore natus
    iusto odit, quaerat modi culpa repudiandae, voluptatum eum, recusandae
    voluptas corrupti cum soluta quos facere a in animi laudantium vel esse
    veniam quibusdam? Quis.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta distinctio
    autem aperiam hic quis animi magnam alias voluptas voluptatibus doloremque
    nisi sapiente tempore quidem, exercitationem pariatur natus a dignissimos
    consequuntur. Ea soluta voluptate voluptates dolore vel dolorum doloribus
    aut pariatur. Itaque, quam molestiae adipisci vel libero aspernatur, ea quae
    voluptatibus, ullam dignissimos iusto doloremque voluptatem saepe iste
    expedita perferendis quasi! Atque necessitatibus vel distinctio, voluptatum
    culpa tempora error quas illo eum impedit. Necessitatibus vitae eos tenetur,
    ipsa, modi odio architecto rerum ipsum incidunt eligendi asperiores.
    Deserunt saepe dolor neque dolorum! Animi eveniet cupiditate cum sint, quam,
    praesentium illum optio ipsum neque deserunt magni, sed vitae minima eius
    quis laudantium quisquam accusamus sapiente necessitatibus et quidem! Ipsum
    inventore nemo nam deserunt. Beatae deleniti quod aspernatur labore natus
    iusto odit, quaerat modi culpa repudiandae, voluptatum eum, recusandae
    voluptas corrupti cum soluta quos facere a in animi laudantium vel esse
    veniam quibusdam? Quis.
  </p>
</main>
