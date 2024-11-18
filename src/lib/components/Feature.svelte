<script>
    export const { section, ...classes } = $props();
    let node;
    // Add intersection observer to handle scroll effects
    import { onMount } from 'svelte';

    onMount(() => {
        const cards = node.querySelectorAll('.feature-card');
        
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

        cards.forEach(card => observer.observe(card));

        return () => observer.disconnect();
    });
</script>

<section bind:this={node} class={`features ${Object.keys(classes || {}).filter(key => classes[key]).join(' ')}`}>
    <div class="features-grid">
        {#each section.items as feature}
            <div class="feature-card">
                <div class="icon-wrapper">
                    <i class={feature.icon}></i>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
            </div>
        {/each}
    </div>
</section>

<style>
    .features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 3rem;
		max-width: var(--container-lg);
		margin: 0 auto;
	}

	.feature-card {
		background: var(--white);
        border-radius: var(--radius-xl);
		overflow: hidden;
		text-align: center;
		padding: var(--space-6);
		transition: transform 0.5s ease, box-shadow 0.3s ease, opacity 0.5s ease;
		box-shadow: var(--shadow-md);
		opacity: 0;
		transform: translateY(50px);
		position: relative;
	}

	.feature-card.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.feature-card.scrolled {
		opacity: 0;
		
		transform: translateY(50px);
	}

	.feature-card:hover {
		transform: translateY(-5px);
		box-shadow: var(--shadow-xl);
	}

	.icon-wrapper {
		padding: var(--space-8);
	}

	.icon-wrapper i {
		font-size: var(--text-4xl);
		line-height: var(--leading-4xl);
		color: var(--primary);
	}

	.feature-card h3 {
		padding: var(--space-6) var(--space-6) var(--space-3);
		font-size: var(--text-2xl);
		font-family: var(--font-heading);
		line-height: var(--leading-xl);
		letter-spacing: -0.02em;
	}

	.feature-card p {
		padding: 0 var(--space-6) var(--space-6);
		color: var(--gray-600);
		font-size: var(--text-xl);
		font-family: var(--font-body);
		line-height: var(--leading-xl);
		max-width: 65ch;
		margin: 0 auto;
	}

    .borderRadius .feature-card {
        border-radius: var(--radius-xl);
    }
    .borderRadiusBig .feature-card {
        border-radius: var(--radius-2xl);
    }
    .borderRadiusHuge .feature-card {
        border-radius: var(--radius-2xl);
    }
    .borderRadiusSmall .feature-card {
        border-radius: var(--radius-lg);
    }
    .noBorderRadius .feature-card {
        border-radius: 0;
    }

    .feature-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: inherit;
        padding: 2px; /* Border width */
        background: linear-gradient(
            45deg,
            var(--primary) 0%,
            var(--primary-lightest) 50%,
            var(--primary) 100%
        );
        -webkit-mask: 
            linear-gradient(#fffe 0 0) content-box, 
            linear-gradient(#000d 0 0);
        mask: 
            linear-gradient(#fffe 0 0) content-box, 
            linear-gradient(#000d 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .feature-card:hover::before {
        opacity: 1;
    }
</style>