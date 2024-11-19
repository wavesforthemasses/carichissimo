<script>
  import { fade, fly } from 'svelte/transition';

  // Props for customization
  export let badge = "Lorem";
  export let title = "Lorem ipsum dolor sit amet";
  export let highlightedWords = ["amet"];
  export let tagline = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
 
  // Stats data
  export let stats = [
    { number: "2x", label: "Lorem ipsum" }
  ];
  
  // CTA buttons
  export let buttons = [{
    text: "Buy now",
    onClick: () => console.log('clicked'),
    href: '/',
    secondary: false
  }]
  
  // Floating card
  export let floatingCard = {
    icon: "ri-shopping-cart-2-line",
    text: "Lorem ipsum",
    href: "/"
  };
  
  // Optional image URL
  export let imageUrl = "";
</script>

<main class="coffee-landing">
  <section class="hero">
    <div class="hero-content" in:fly="{{ y: 50, duration: 1000, delay: 200 }}">
      {#if badge}
        <div class="badge">{badge}</div>
      {/if}
      <h1>
        {#each title.split(' ') as word, index}
          {#if highlightedWords.includes(word)}
            <span class="highlight">{word}</span>
          {:else}
            {word}
          {/if}
          {#if index < title.split(' ').length - 1}
             
          {/if}
        {/each}
      </h1>
      {#if tagline}
        <p class="tagline">{tagline}</p>
      {/if}
      
      {#if stats.length > 0}
        <div class="stats-row">
            {#each stats as stat}
            <div class="stat">
                <span class="stat-number">{stat.number}</span>
                <span class="stat-label">{stat.label}</span>
            </div>
            {/each}
        </div>
      {/if}
      
      {#if buttons.length > 0}
        <div class="cta-group">
          {#each buttons as button}
            {#if button.href}
              <a href={button.href} class="cta-button" class:secondary-button={button.secondary}>{button.text}</a>
            {:else}
              <button class="cta-button" class:secondary-button={button.secondary} on:click={button.onClick}>{button.text}</button>
            {/if}
          {/each}
        </div>
      {/if}
      
      <slot />
    </div>
    
    <div class="hero-image">
      {#if imageUrl}
        <div class="wrapper-image">
          <img src={imageUrl} alt={title} class="hero-img" />
        </div>
      {:else}
        <div class="placeholder-image"></div>
      {/if}
      {#if floatingCard}
        {#if floatingCard.href}
          <a href={floatingCard.href} class="floating-card">
              <span class="card-icon"><i class={floatingCard.icon}></i></span>
            <span>{floatingCard.text}</span>
          </a>
        {:else}
          <div class="floating-card">
              <span class="card-icon"><i class={floatingCard.icon}></i></span>
              <span>{floatingCard.text}</span>
          </div>
        {/if}
      {/if}
    </div>
  </section>
</main>

<style>
  .coffee-landing {
    max-width: var(--container-lg);
    margin: 0 auto;
  }

  .hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-16);
    min-height: 90vh;
    align-items: center;
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  h1 {
    font-family: var(--font-heading);
    font-size: var(--text-6xl);
    color: var(--secondary);
    line-height: var(--leading-6xl);
    letter-spacing: -0.02em;
  }

  .tagline {
    font-size: var(--text-xl);
    line-height: var(--leading-xl);
    color: var(--gray-600);
  }

  .badge {
    background: var(--primary-light);
    color: var(--white);
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-full);
    font-size: var(--text-sm);
    line-height: var(--leading-sm);
    font-weight: 500;
    width: fit-content;
    margin-bottom: var(--space-4);
  }

  .highlight {
    background: linear-gradient(120deg, var(--primary-light) 0%, var(--primary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .stats-row {
    display: flex;
    gap: var(--space-8);
    margin: var(--space-6) 0;
  }

  .stat {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .stat-number {
    font-size: var(--text-4xl);
    line-height: var(--leading-4xl);
    font-weight: bold;
    color: var(--primary);
  }

  .stat-label {
    font-size: var(--text-sm);
    line-height: var(--leading-sm);
    color: var(--gray-600);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .cta-group {
    display: flex;
    gap: var(--space-4);
    margin-top: var(--space-4);
  }

  .cta-button, .secondary-button {
    padding: var(--space-4) var(--space-8);
    border-radius: var(--radius-full);
    font-weight: 500;
    font-size: var(--text-xl);
    line-height: var(--leading-xl);
    cursor: pointer;
    transition: all var(--transition-fast) var(--ease-out);
  }

  .cta-button {
    background: linear-gradient(120deg, var(--primary-light) 0%, var(--primary) 100%);
    color: var(--primary-reverse);
    border: none;
  }

  .secondary-button {
    background: transparent;
    color: var(--primary);
    border: 2px solid var(--primary);
  }

  .cta-button:hover, .secondary-button:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  .hero-image {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero-img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: var(--radius-lg);
  }

  .placeholder-image {
    width: 100%;
    height: 500px;
    background-color: var(--gray-200);
    border-radius: var(--radius-lg);
  }

  .floating-card {
    position: absolute;
    bottom: var(--space-8);
    right: var(--space-8);
    background: var(--white);
    padding: var(--space-4);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    display: flex;
    align-items: center;
    gap: var(--space-2);
    font-weight: 500;
    animation: float 3s ease-in-out infinite;
  }

  .card-icon {
    font-size: var(--text-xl);
    line-height: var(--leading-xl);
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  @media (max-width: 768px) {
    .coffee-landing {
      padding: 0 var(--space-4);
    }

    .hero {
      grid-template-columns: 1fr;
      text-align: center;
      gap: var(--space-8);
      min-height: auto;
      padding: var(--space-8) 0;
    }

    .hero-content {
      align-items: center;
      order: 1;
    }

    h1 {
      font-size: var(--text-4xl);
      line-height: var(--leading-4xl);
    }

    .tagline {
      font-size: var(--text-lg);
      line-height: var(--leading-lg);
      max-width: 35ch;
    }

    .stats-row {
      flex-direction: column;
      gap: var(--space-6);
      margin: var(--space-4) 0;
    }

    .stat {
      align-items: center;
    }

    .cta-group {
      flex-direction: column;
      width: 100%;
      max-width: 400px;
    }

    .cta-button, .secondary-button {
      width: 100%;
      font-size: var(--text-lg);
      padding: var(--space-3) var(--space-6);
    }

    .hero-image {
      order: 0;
    }

    .hero-img, .placeholder-image {
      height: 300px;
    }

    .floating-card {
      bottom: var(--space-4);
      right: var(--space-4);
      padding: var(--space-3);
      font-size: var(--text-sm);
    }

    .card-icon {
      font-size: var(--text-lg);
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: var(--text-4xl);
      line-height: var(--leading-4xl);
    }

    .tagline {
      font-size: var(--text-lg);
      line-height: var(--leading-lg);
    }

    .hero-img, .placeholder-image {
      height: 250px;
    }
  }

  .wrapper-image {
    height: max-content;
    position: relative;
  }

  .wrapper-image:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      var(--white) 0px,
      var(--white) 2%,
      transparent 2%,
      transparent 4%,
      var(--white) 4%,
      var(--white) 6%,
      transparent 6%,
      transparent 8%,
      var(--white) 8%,
      var(--white) 10%,
      transparent 10%,
      transparent 12%,
      var(--white) 12%,
      var(--white) 14%,
      transparent 14%
    );
  }
</style>
