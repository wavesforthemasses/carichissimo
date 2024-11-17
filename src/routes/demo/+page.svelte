<script>
  import { fade, fly } from 'svelte/transition';
  let isVisible = true;
</script>

<main class="coffee-landing">
  <!-- Hero Section with full-width design inspired by Loux Ibiza -->
  <section class="hero">
    <div class="hero-content" in:fly="{{ y: 50, duration: 1000, delay: 200 }}">
      <div class="badge">Premium Experience</div>
      <h1>Craft Your Perfect <span class="highlight">Moment</span></h1>
      <p class="tagline">Engineered for those who demand more. Premium coffee with 2x caffeine.</p>
      <div class="stats-row">
        <div class="stat">
          <span class="stat-number">2x</span>
          <span class="stat-label">More Energy</span>
        </div>
        <div class="stat">
          <span class="stat-number">100%</span>
          <span class="stat-label">Natural</span>
        </div>
      </div>
      <div class="cta-group">
        <button class="cta-button">Experience Now</button>
        <button class="secondary-button">Learn More</button>
      </div>
    </div>
    <div class="hero-image">
      <div class="placeholder-image"></div>
      <div class="floating-card">
        <span class="card-icon">⚡️</span>
        <span>Amplified Coffee</span>
      </div>
    </div>
  </section>
</main>

<style>
  .coffee-landing {
    max-width: var(--container-lg);
    margin: 0 auto;
    padding: var(--space-4);
  }

  .hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-16);
    min-height: 90vh;
    align-items: center;
    padding: 0 var(--space-8);
  }

  .hero-content {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  h1 {
    font-family: var(--font-heading);
    font-size: var(--text-6xl);
    color: var(--black);
    line-height: 1;
    letter-spacing: -0.02em;
  }

  .tagline {
    font-size: var(--text-xl);
    color: var(--gray-600);
    max-width: 25ch;
  }

  .cta-button {
    background: var(--primary);
    color: var(--primary-reverse);
    padding: var(--space-4) var(--space-8);
    border-radius: var(--radius-full);
    border: none;
    font-weight: 600;
    font-size: var(--text-lg);
    cursor: pointer;
    transition: all var(--transition-fast) var(--ease-out);
  }

  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  .features {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-6);
    margin: var(--space-24) 0;
  }

  .feature-card {
    background: var(--gray-100);
    padding: var(--space-8);
    border-radius: var(--radius-lg);
    text-align: left;
    transition: transform var(--transition-fast) var(--ease-out);
  }

  .feature-card:hover {
    transform: translateY(-4px);
  }

  .feature-icon {
    font-size: var(--text-4xl);
    margin-bottom: var(--space-4);
    display: block;
  }

  .feature-card h3 {
    font-size: var(--text-xl);
    margin-bottom: var(--space-2);
    color: var(--black);
  }

  .feature-card p {
    color: var(--gray-600);
  }

  .founder {
    background: var(--primary-lightest);
    padding: var(--space-16);
    border-radius: var(--radius-xl);
    margin: var(--space-24) 0;
  }

  .founder-content {
    max-width: 60ch;
    margin: 0 auto;
  }

  .founder h2 {
    font-size: var(--text-3xl);
    margin-bottom: var(--space-6);
    color: var(--primary-darker);
  }

  .founder p {
    font-size: var(--text-xl);
    line-height: 1.6;
    color: var(--primary-dark);
    font-style: italic;
    margin-bottom: var(--space-4);
  }

  .founder-name {
    color: var(--primary-darker);
    font-weight: bold;
  }

  .hero-image {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .placeholder-image {
    width: 100%;
    height: 500px;
    background-color: var(--gray-200);
    border-radius: var(--radius-lg);
  }

  .badge {
    background: var(--primary-lightest);
    color: var(--primary-darker);
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-full);
    font-size: var(--text-sm);
    font-weight: 600;
    width: fit-content;
    margin-bottom: var(--space-4);
  }

  .highlight {
    background: linear-gradient(120deg, var(--primary-lightest) 0%, var(--primary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 0;
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
    font-weight: bold;
    color: var(--primary);
  }

  .stat-label {
    font-size: var(--text-sm);
    color: var(--gray-600);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .cta-group {
    display: flex;
    gap: var(--space-4);
    margin-top: var(--space-4);
  }

  .secondary-button {
    background: transparent;
    color: var(--primary);
    padding: var(--space-4) var(--space-8);
    border-radius: var(--radius-full);
    border: 2px solid var(--primary);
    font-weight: bold;
    font-size: var(--text-lg);
    cursor: pointer;
    transition: all var(--transition-fast) var(--ease-out);
  }

  .secondary-button:hover {
    background: var(--primary-lightest);
    transform: translateY(-2px);
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
    font-weight: 600;
    animation: float 3s ease-in-out infinite;
  }

  .card-icon {
    font-size: var(--text-xl);
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  .hero-image {
    position: relative;
  }

  /* Update mobile styles */
  @media (max-width: 768px) {
    .hero {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .hero-content {
      align-items: center;
    }

    .features {
      grid-template-columns: 1fr;
    }

    .founder {
      padding: var(--space-8);
    }

    .cta-group {
      flex-direction: column;
      width: 100%;
    }

    .cta-button, .secondary-button {
      width: 100%;
    }

    .floating-card {
      bottom: var(--space-4);
      right: var(--space-4);
    }
  }
</style>
