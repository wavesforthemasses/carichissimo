<script>
    export const { section, ...classes } = $props();
</script>

<section id="spacer" class={`spacer ${Object.keys(classes || {}).filter(key => classes[key]).join(' ')}`}>
</section>

<style>
    .spacer.tiny {
        height: 0.5rem;
    }
    .spacer.small {
        height: 1rem;
    }
    .spacer {
        height: 2rem;
    }
    .spacer.large {
        height: 4rem;
    }
    .spacer.huge {
        height: 8rem;
    }
</style>