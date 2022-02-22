<script>
  import SimpleBar from "simplebar";
  import "simplebar/dist/simplebar.css";

  let simplebar;
  export let options;

  function simpleBar(node) {
    simplebar = new SimpleBar(node, options);

    return {
      destroy() {
        simplebar.unMount();
      },
    };
  }
</script>

<div use:simpleBar><slot /></div>
