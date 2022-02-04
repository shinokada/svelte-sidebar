<script>
  import Aside from "$lib/Aside.svelte";
  import Nav from "$lib/Nav.svelte";
  import SidebarList from "$lib/SidebarList.svelte";
  import Navbar from "$lib/Navbar.svelte";
  let siteName = "Svelte-sidebar Multiple-menu Default";
  let lists = [
    { url: "", name: "Home" },
    { url: "sidebar-default", name: "Sidebar Default" },
    { url: "sidebar-custom", name: "Sidebar Custom Style" },
    { url: "sidebar-multi-default", name: "Multi-menu Default" },
    { url: "sidebar-multi-custom", name: "Multip-menu Custom Style" },
  ];
  let lists2 = [
    { url: "", name: "Home" },
    { url: "sidebar-default", name: "Sidebar Default" },
    { url: "sidebar-custom", name: "Sidebar Custom Style" },
    { url: "sidebar-multi-default", name: "Multi-menu Default" },
    { url: "sidebar-multi-custom", name: "Multip-menu Custom Style" },
  ];
  let topMenus = [
    { route: "", name: "Home", relext: "external" },
    { route: "about", name: "About", relext: "external" },
    { route: "profile", name: "Profile", relext: "external" },
  ];
  let topul =
    "flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium pt-1 pr-16 tp-2";
  let topli = "text-red-900 text-lg";
</script>

<Navbar {siteName} {topMenus} {topul} {topli} />
<Aside>
  <Nav>
    <h3>Menu 1</h3>
    {#each lists as list}
      <SidebarList url={list.url} name={list.name} />
    {/each}
  </Nav>
  <Nav>
    <h3>Menu 2</h3>
    {#each lists2 as list}
      <SidebarList url={list.url} name={list.name} />
    {/each}
  </Nav>
</Aside>

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
