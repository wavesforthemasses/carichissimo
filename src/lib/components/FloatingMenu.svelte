<script>
    import { onMount } from 'svelte';
    export const { menuItems = [{ text: 'Home', href: '/' }] } = $props();
    
    let scrollCurrent = $state(0);
    let isCompact = $derived(scrollCurrent > 50);
</script>

<svelte:window bind:scrollY={scrollCurrent} />

<div class="floating-menu" class:compact={isCompact}>
    <nav class="menu">
        {#each menuItems as item}
            <a href={item.href} class="menu-item">
                <span class="text">{item.text}</span>
                <span class="hover-line"></span>
            </a>
        {/each}
    </nav>
</div>

<slot />

<style>
    .floating-menu {
        transition: all var(--transition-normal) var(--ease-in-out);
    }

    .floating-menu.compact {
        position: fixed;
        top: var(--space-8);
        left: 50%;
        transform: translateX(-50%);
        z-index: var(--z-50);
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(8px);
        border-radius: var(--radius-full);
        box-shadow: var(--shadow-lg);
        padding: var(--space-2) var(--space-6);
    }

    .floating-menu:not(.compact) {
        position: fixed;
        top: 0;
        width: 100%;
        background: var(--white);
        z-index: 9999;
        padding: var(--space-6);
    }

    .menu {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: var(--space-8);
    }

    .menu-item {
        position: relative;
        text-decoration: none;
        color: var(--gray-700);
        font-family: var(--font-body);
        font-size: var(--text-sm);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        padding: var(--space-2) var(--space-1);
        transition: color var(--transition-normal) var(--ease-in-out);
    }

    .menu-item:hover {
        color: var(--primary);
    }

    .hover-line {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: var(--primary);
        transition: width var(--transition-normal) var(--ease-out);
    }

    .menu-item:hover .hover-line {
        width: 100%;
    }

    @media (max-width: 640px) {
        .floating-menu.compact {
            bottom: var(--space-8);
            top: auto;
            width: 90%;
        }

        .menu {
            justify-content: space-around;
            gap: var(--space-4);
        }
    }
</style>