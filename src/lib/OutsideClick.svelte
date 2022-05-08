<script lang="ts">
	import { clickOutside, sidebarOpen, sidebarIsInert, sidebarStayOpen } from '$lib/index';

	const handleOutClick = () => {
		// sidebarStatus = false;
		if ($sidebarStayOpen === false) {
			sidebarOpen.update((n) => (n = false));
			sidebarIsInert.update((n) => (n = true));
		}
		// ariaHidden = true;
	};
</script>

<div use:clickOutside on:outclick={handleOutClick}>
	<slot />
</div>
