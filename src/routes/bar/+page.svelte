<script>
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import Hero from '$lib/components/Hero.svelte';
    import Feature from '$lib/components/Feature.svelte';
    import FeatureImage from '$lib/components/FeatureImage.svelte';
    import Story from '$lib/components/Story.svelte';
    import Spacer from '$lib/components/Spacer.svelte';
    import Claim from '$lib/components/Claim.svelte';

    let visible = false;
    onMount(() => {
        visible = true;
    });

    // Updated metadata for SEO
    const metadata = {
        title: "Carichissimo Business | Formazione Baristi e Caffè Premium per il Tuo Bar",
        description: "Trasforma il tuo bar con Carichissimo Business: formazione baristi, tecniche di vendita e caffè premium. Combiniamo tradizione e innovazione per far crescere il tuo locale e creare un'esperienza WOW.",
        keywords: "formazione baristi, caffè premium, consulenza bar, tecniche di vendita bar, esperienza cliente bar, trasformazione bar, innovazione bar"
    };
</script>

<svelte:head>
    <title>{metadata.title}</title>
    <meta name="description" content={metadata.description} />
    <meta name="keywords" content={metadata.keywords} />
    
    <!-- Open Graph tags -->
    <meta property="og:title" content={metadata.title} />
    <meta property="og:description" content={metadata.description} />
    <meta property="og:image" content="/bar.jpeg" />
    <meta property="og:type" content="website" />
    
    <!-- Twitter Card tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={metadata.title} />
    <meta name="twitter:description" content={metadata.description} />
    <meta name="twitter:image" content="/bar.jpeg" />

    <!-- Additional relevant meta tags -->
    <meta name="author" content="Carichissimo" />
    <meta name="robots" content="index, follow" />
</svelte:head>

<main>
    <Hero section={{
            title: 'Carichissimo Business',
            description: 'Un caffè per fare la differenza nel tuo bar',
            image: `/bar.jpeg`,
            action: 'Contattaci',
            link: 'https://carichissimopartner.it/contatto/'
        }} 
        clip={{ tl: 0, tr: 0, br: 0, bl: 0 }}
        curve={{ tlc: 0, trc: 0, brc: 0, blc: 0 }}
        clip2={{ tl: 0, tr: 0, br: 0.1, bl: 0.2 }}
        curve2={{ tlc: 0, trc: 0, brc: 0.4, blc: 0.8 }}
        white
        shadow
        scrollAnimate={true}
    />

    <Claim
        badge="Per i baristi"
        title="Fai crescere il tuo bar"
        highlightedWords={["crescere"]}
        tagline="Supportiamo i bar italiani nel loro percorso di crescita"
        stats={[
            { number: "100%", label: "Formazione dedicata" },
            { number: "WOW", label: "Ti aiutiamo ad attrarre + clientela" }
        ]}
        buttons={[
            { text: "Richiedi consulenza", href: 'https://carichissimopartner.it/contatto/', secondary: false }
        ]}
        floatingCard={{ icon: "ri-cup-line", text: "Per i Bar", href: 'https://carichissimopartner.it/contatto/' }}
        imageUrl={`/tazzina.jpg`}
    />

    <Spacer huge />

    <FeatureImage section={{
            items: [
                {
                    rectangle1_2: true,
                    title: 'Formazione per i tuoi baristi',
                    description: 'Tecniche di vendita e servizio d\'eccellenza',
                    textLong: "Formiamo i tuoi baristi per offrire un'esperienza WOW ai tuoi clienti.",
                    background: "var(--primary-light)"
                },
                {
                    rectangle1_2: true,
                    title: 'Prodotti Premium',
                    description: 'Un caffè che fa la differenza',
                    textLong: "Ti forniamo un caffè premium che ti distingue dalla concorrenza.",
                    background: "var(--secondary)"
                }
            ]
        }} borderRadiusHuge 
    />

    <Spacer huge />

    <Hero 
        section={{
            background:"linear-gradient(120deg, var(--primary-lighter) 0%, var(--primary-light) 100%)"
        }}
        clip={{ tl: 0.1, tr: 0.1, br: 0.1, bl: 0.1 }}
        curve={{ tlc: 0.3, trc: 0.3, brc: 0.3, blc: 0.3 }}
        scrollAnimate={true}
        py32
    >
        <Story section={{
            title: 'Il Futuro del Bar Italiano',
            image: `/bar-moderno2.jpeg`
        }}>
            Il classico modello di bar italiano sta attraversando una trasformazione epocale. 
            La clientela di oggi ha esigenze diverse e cerca un'esperienza unica.<br /><br />
            Noi di Carichissimo abbiamo sviluppato un metodo che combina tradizione e innovazione, 
            permettendo ai bar di evolversi e prosperare nel mercato moderno.<br /><br />
            La nostra missione è supportare i baristi italiani in questo cambiamento, 
            fornendo gli strumenti e le competenze necessarie per eccellere.
        </Story>
    </Hero>

    <Spacer huge />

    <Claim
        badge="Inizia Oggi"
        title="Trasforma il tuo bar"
        highlightedWords={["Trasforma"]}
        tagline="Scopri come possiamo aiutarti a fare la differenza"
        buttons={[
            { text: "Contattaci ora", href: 'https://carichissimopartner.it/contatto/', secondary: false }
        ]}
        stats={[]}
        floatingCard={{ icon: "ri-cup-line", text: "Per i Bar", href: 'https://carichissimopartner.it/contatto/' }}
        imageUrl={`/consulenza.jpg`}
    />

    <Spacer huge />
</main>

<style>
    main {
        max-width: 100%;
        margin: 0 auto;
    }
</style>
