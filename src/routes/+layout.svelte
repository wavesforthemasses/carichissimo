<script>
    import '../app.css';
    import 'remixicon/fonts/remixicon.css';
    import FloatingMenu from '$lib/components/FloatingMenu.svelte';
</script>

<FloatingMenu menuItems={[
    { text: 'Home', href: `/` },
    { text: 'Bar', href: `/bar` },
    { text: 'Shop', href: 'https://carichissimo-partner.sumupstore.com/prodotti' }
]} />

<slot />