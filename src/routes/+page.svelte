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
        title: "Caffè Carichissimo | Caffè con 30% di Caffeina in Più | Energy Coffee",
        description: "Caffè Carichissimo: la miscela italiana con 30% di caffeina in più. Energia 100% naturale per studio, lavoro e sport. Alternative naturale agli energy drink. Daily blend per massima concentrazione.",
        keywords: "caffè carichissimo, caffè energia, caffeina naturale, caffè per studio, caffè per lavoro, caffè per sport, energy coffee, caffè italiano, miscela energetica, alternative energy drink"
    };
</script>

<svelte:head>
    <title>{metadata.title}</title>
    <meta name="description" content={metadata.description} />
    <meta name="keywords" content={metadata.keywords} />
    
    <!-- Open Graph tags -->
    <meta property="og:title" content={metadata.title} />
    <meta property="og:description" content={metadata.description} />
    <meta property="og:image" content="/prodotto.jpeg" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://carichissimo.com" />
    <meta property="og:site_name" content="Caffè Carichissimo" />
    
    <!-- Twitter Card tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={metadata.title} />
    <meta name="twitter:description" content={metadata.description} />
    <meta name="twitter:image" content="/prodotto.jpeg" />

    <!-- Additional SEO meta tags -->
    <meta name="robots" content="index, follow" />
    <meta name="author" content="Carichissimo" />
    <link rel="canonical" href="https://carichissimo.com" />
</svelte:head>

<main>
	<Hero section={{
			logo: `/logoSmall2.png`,
            title: 'Caffè Carichissimo',
			description: 'La miscela con più caffeina',
			image: `/home.jpeg`,
            action: 'Negozio',
            link: 'https://carichissimo-partner.sumupstore.com/prodotti'
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
		badge=""
		title="Ricarica la tua Energia"
		highlightedWords={["Energia"]}
		tagline="Carichissimo la miscela con più caffeina"
		stats={[
				{ number: "30%", label: "+ energia" },
				{ number: "100%", label: "Naturale" }
			]}
		buttons={[
			{ text: "Acquista ora", href: 'https://carichissimo-partner.sumupstore.com/prodotti', secondary: false },
			{ text: "Scopri di più", href: 'https://carichissimo-partner.sumupstore.com', secondary: true }
		]}
		floatingCard={{ icon: "ri-shopping-cart-2-line", text: "Negozio", href: 'https://carichissimo-partner.sumupstore.com/prodotti' }}
		imageUrl={`/prodotto.jpeg`}
	/>

	<Spacer huge />

	<FeatureImage section={{
            items: [
                {
					rectangle1_2: true,
                    title: 'Per lo studio',
                    description: 'Per concentrarti e dare il massimo',
					textLong: "Per tutte quelle volte che un caffè non basta, Carichissimo è il caffè che ti aiuta a concentrarti e a dare il massimo.",
					image: `/study.jpeg`
                },
                {
					rectangle1_2: true,
                    title: 'Per il lavoro', 
                    description: 'Perché senza sarebbe impossibile',
					textLong: "Quando la giornata è lunga, non gettare la spugna, Carichissimo è l'energia che fa raggiungere i tuoi obiettivi.",
					image: `/business.jpeg`
                },
                {
					rectangle1_2: true,
                    title: 'Per lo sport',
                    description: 'Per darti l\'energia di cui hai bisogno',
					textLong: "Per tutti quegli sport che richiedono energia, Carichissimo è l'alternativa tradizionale agli energy drink.",
					image: `/sport.jpeg`
                }
            ]
        }} borderRadiusHuge 
	/>
	
	<Spacer huge />

	<Hero 
		section={{
			background:"linear-gradient(120deg, var(--primary-lighter) 0%, var(--primary-light) 100%)"
		}}
		clip={{ tl: 0.2, tr: 0, br: 0.2, bl: 0 }}
		clip2={{ tl: 0, tr: 0.1, br: 0, bl: 0.1 }}
		curve={{ tlc: 0.5, trc: 0.5, brc: 0, blc: 0 }}
		curve2={{ tlc: 0, trc: 0, brc: 0, blc: 0 }}
		scrollAnimate={true}
		py32
	>
		<Story section={{
            title: 'Il fondatore di Carichissimo',
			image: `/davidealbanese2.png`
        }}
		>
			Sono nato e cresciuto nella patria del caffè espresso: l'Italia.<br />
			A casa mia, sia a colazione che dopo pranzo, non è mai mancata la moka sul fornello. <br /><br />
			Sono entrato nel mondo del caffè quando avevo appena vent'anni. Ho iniziato come venditore nei bar e nei supermercati della zona, ed è stato un vero e proprio colpo di fulmine, poiché sin da subito mi sono appassionato a questo mondo. <br />
			Così, dopo pochi mesi, ho avviato la mia azienda di caffè e nel 2016 nasce "Caffè Carichissimo". <br /><br />
			Da allora sono cambiate tante cose, io in primis, ma una cosa è rimasta sempre la stessa: "La voglia di rendere speciali le giornate delle persone"
		</Story>
	</Hero>

	<Spacer huge />

	<FeatureImage section={{
            items: [
                {
					square: true,
                    title: 'Daily Blend',
                    description: 'Una miscela nata dall\'esigenza quotidiana di ogni lavoratore, studente o atleta.',
					textLong: "Il daily blend di Carichissimo è pensato per chi come te usa tanta energia ogni giorno. In una sola tazzina hai tutto ciò che ti serve per essere al massimo.",
					image: `/miscela2.jpeg`
                },
                {
					square: true,
                    title: '+ caffeina',
                    description: 'Carichissimo contiene naturalmente il 30% di caffeina in più di un normale caffè.',
					textLong: "Questo è il mix di natura e tradizione che ti permette di essere al massimo senza ricorrere ad energy drink e simili.",
					image: `/caffeina.jpeg`
                },
                {
					square: true,
                    title: 'Carichissimo!',
                    description: 'Dopo che lo avrai bevuto anche tu potrai finalmente dire "Sono Carichissimo!"',
					textLong: "Carichissimo è la miscela con più caffeina. È il caffè che ti aiuta a concentrarti e a dare il massimo sia in studio che al lavoro.",
					image: `/carichissimo2.jpeg`
                }
            ]
        }} borderRadiusHuge 
	/>

	<Spacer huge />

	<Claim
		badge=""
		title="Pronti, shop, via!"
		highlightedWords={["shop,"]}
		tagline="Acquista il tuo primo Carichissimo"
		stats={[
				{ number: "30%", label: "+ energia" },
				{ number: "100%", label: "Naturale" }
			]}
		buttons={[
			{ text: "Acquista ora", href: 'https://carichissimo-partner.sumupstore.com/prodotti', secondary: false },
			{ text: "Scopri di più", href: 'https://carichissimo-partner.sumupstore.com', secondary: true }
		]}
		floatingCard={{ icon: "ri-shopping-cart-2-line", text: "Negozio", href: 'https://carichissimo-partner.sumupstore.com/prodotti' }}
		imageUrl={`/shop.jpeg`}
	/>

	<Spacer huge />
</main>

<style>
	main {
		max-width: 100%;
		margin: 0 auto;
	}
</style>
