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
            <div class="feature-card-wrapper">
                <div class="feature-card" class:square={feature.square} class:circle={feature.circle} class:rectangle1_2={feature.rectangle1_2} class:rectangle2_1={feature.rectangle2_1} style={`${feature?.image ? `background-image: url(${feature.image});` : (feature.background ? `background-color: ${feature.background};` : '')}`}>
                    <div class="feature-card-content">
                        {#if feature.icon}
                            <div class="icon-wrapper">
                                <i class={feature.icon}></i>
                            </div>
                        {/if}
                        <h3>{feature.title}</h3>
                    </div>
                </div>
                {#if feature.description}
                    <div class="description">{feature.description}</div>
                {/if}
                {#if feature.textLong}
                    <div class="text-long">{feature.textLong}</div>
                {/if}
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
        padding: var(--space-6);
		background: var(--white);
        border-radius: var(--radius-xl);
		overflow: hidden;
		text-align: center;
		transition: transform 0.5s ease, box-shadow 0.3s ease, opacity 0.5s ease, background-size 2s ease;
		box-shadow: var(--shadow-md);
		opacity: 0;
		transform: translateY(50px);
		position: relative;
		background-size: 110%;
		background-position: center;
		background-repeat: no-repeat;
		color: var(--white);
	}

	.feature-card-content {
		position: absolute;
		top: 0;
		left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
	}

    .feature-card.circle {
        border-radius: 50% !important;
        height: 0;
        padding-bottom: 100%;
        background-size: 200%;
    }

    .feature-card.circle:hover {
        background-size: 300%;
    }

    .feature-card.rectangle1_2 {
		height: 0;
		padding-bottom: 50%;
        background-size: 100%;
	}

    .feature-card.rectangle1_2:hover {
        background-size: 150%;
    }

    .feature-card.rectangle2_1 {
		height: 0;
		padding-bottom: 200%;
        background-size: 120%;
	}

    .feature-card.rectangle2_1:hover {
        background-size: 150%;
    }

	.feature-card.square {
		height: 0;
		padding-bottom: 100%;
        background-size: 120%;
	}

    .feature-card.square:hover {
        background-size: 150%;
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
		background-size: 150%;
	}

	.icon-wrapper {
		padding: var(--space-8);
	}

	.icon-wrapper i {
		font-size: var(--text-6xl);
		line-height: var(--leading-6xl);
		color: var(--primary);
	}

	.feature-card h3 {
		font-size: var(--text-2xl);
		font-family: var(--font-heading);
		line-height: var(--leading-2xl);
		letter-spacing: -0.02em;
		font-weight: 500;
		text-shadow: 0 0 1rem rgba(0, 0, 0, 0.75);
	}

	.feature-card p {
		padding: 0 var(--space-6) var(--space-6);
		color: var(--gray-100);
		font-size: var(--text-xl);
		font-family: var(--font-body);
		line-height: var(--leading-xl);
		max-width: 65ch;
		margin: 0 auto;
		text-shadow: 0 0 1rem rgba(0, 0, 0, 0.75);
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

    .text-long {
        padding-top: var(--space-6);
        font-size: var(--text-xl);
        font-family: var(--font-body);
        line-height: var(--leading-xl);
        max-width: 65ch;
        margin: 0 auto;
        padding-left: var(--space-3);
        padding-right: var(--space-3);
        text-align: justify;
    }

    .description {
        font-size: var(--text-xl);
        font-family: var(--font-body);
        line-height: var(--leading-xl);
        padding-top: var(--space-6);
        font-weight: 500;
        padding-left: var(--space-3);
        padding-right: var(--space-3);
        text-align: center;
    }
</style>