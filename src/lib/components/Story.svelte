<script>
    export const { section, ...classes } = $props();

    // Add intersection observer to handle scroll effects
    import { onMount } from 'svelte';
    let node;

    onMount(() => {
        const content = node.querySelector('.story-content');
        const image = node.querySelector('.story-image');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    entry.target.classList.remove('scrolled');
                } else {
                    entry.target.classList.remove('visible');
                    entry.target.classList.add('scrolled');
                }
            });
        }, { threshold: 0.1 });

        observer.observe(content);
        observer.observe(image);

        return () => observer.disconnect();
    });
</script>

<section bind:this={node} class={`story ${Object.keys(classes || {}).filter(key => classes[key]).join(' ')}`}>
    <div class="story-image">
        <img src={section.image} alt={section.title} />
    </div>
    <div class="story-content">
        <h2>{section.title}</h2>
        <slot />
    </div>
</section>

<style>
    .story {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-16);
        align-items: center;
        max-width: 100%;
        box-sizing: border-box;
        overflow-x: hidden;
        width: var(--container-lg);
        margin: 0 auto;
    }

    .story-content {
        padding: var(--space-8);
        opacity: 0;
        text-align: left;
        transform: translateX(-50px);
        transition: transform var(--transition-slow) var(--ease-out), 
                   opacity var(--transition-slow) var(--ease-out);
    }
    .story.image-left .story-content {
        text-align: right;
    }

    .story-content.visible {
        opacity: 1;
        transform: translateX(0);
    }

    .story-content.scrolled {
        opacity: 0;
        transform: translateX(-50px);
    }

    .story-content h2 {
        font-size: var(--text-4xl);
        line-height: var(--leading-4xl);
        margin-bottom: var(--space-6);
        color: var(--secondary);
        font-family: var(--font-heading);
        text-transform: uppercase;
    }

    .story-content p {
        color: var(--gray-700);
        font-size: var(--text-xl);
        line-height: var(--leading-xl);
        font-family: var(--font-body);
    }

    .story-image {
        opacity: 0;
        transform: translateX(50px);
        transition: transform 0.5s ease, opacity 0.5s ease;
    }
    .story.image-left .story-image {
        order: 1;
    }

    .story-image.visible {
        opacity: 1;
        transform: translateX(0);
    }

    .story-image.scrolled {
        opacity: 0;
        transform: translateX(50px);
    }

    .story-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: var(--radius-2xl);
    }

    @media (max-width: 768px) {
        .story {
            grid-template-columns: 1fr;
            gap: var(--space-8);
        }

        .story-content {
            padding: var(--space-4);
        }

        .story-content h2 {
            font-size: var(--text-3xl);
            line-height: var(--leading-3xl);
        }
    }
</style>
