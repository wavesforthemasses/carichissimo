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
</script>

<main>
	<Hero section={{
			logo: '/logoSmall.png',
            title: 'Caffè Carichissimo',
			description: 'Il caffè che ti fa sentire al massimo',
			image: '/home.jpeg',
            action: 'Negozio',
            link: '/'
        }} 
		clip={{ tl: 0, tr: 0, br: 0.3, bl: 0.1 }}
		curve={{ tlc: 0, trc: 0, brc: 0.4, blc: 0.2 }}
		white
		scrollAnimate={true}
	/>

	<Claim
		badge="Novità"
		title="Ricarica la tua Energia"
		highlightedWords={["Energia"]}
		tagline="Carichissimo è il caffè ti fa sentire al massimo"
		stats={[
				{ number: "3x", label: "Più energia" },
				{ number: "99%", label: "Soddisfazione" }
			]}
		buttons={[
			{ text: "Acquista ora", onClick: () => console.log('clicked'), secondary: false },
			{ text: "Scopri di più", onClick: () => console.log('demo'), secondary: true }
		]}
		floatingCard={{ icon: "ri-shopping-cart-2-line", text: "Negozio" }}
		imageUrl="/ricarica.jpeg"
		/>

	<Spacer huge />

	<Hero section={{
			logo: '/logoSmall.png',
            title: 'Esplosione di energia',
			description: 'Carichissimo ti fa sentire come un super eroe',
			image: '/home.jpeg',
            action: 'Negozio',
            link: '/'
        }} 
		clip={{ tl: 0, tr: 0.1, br: 0.1, bl: 0 }}
		curve={{ tlc: 0.2, trc: 0.1, brc: 0.4, blc: 0.3 }}
		white
		scrollAnimate={true}
	/>

	<Spacer huge />

	<FeatureImage section={{
            items: [
                {
                    title: 'Per chi studia',
                    description: 'Per concentrarti e dare il massimo',
					background: "url(/study.jpeg)",
					textLong: "Con Carichissimo avrai il focus di un genio. La nostra miscela speciale ti aiuterà a mantenere la concentrazione più a lungo, permettendoti di affrontare le sfide dello studio con energia e determinazione. Sentirai la differenza fin dal primo sorso."
                },
                {
                    title: 'Per chi lavora', 
                    description: 'Perché senza sarebbe impossibile',
					background: "url(/business.jpeg)",
					textLong: "Con Carichissimo superi la giornata con successo. La nostra miscela è progettata per aiutarti a superare i momenti di stanchezza e mantenere il tuo rendimento al massimo. Con ogni tazza, sentirai la differenza e sarai pronto per affrontare ogni sfida."
                },
                {
                    title: 'Per chi fa sport',
                    description: 'Per darti l\'energia di cui hai bisogno',
					background: "url(/sport.jpeg)",
					textLong: "Con Carichissimo superi ogni ostacolo e diventi un campione. La nostra miscela è progettata per aiutarti a superare i momenti di stanchezza e mantenere il tuo rendimento al massimo. Con ogni tazza, sentirai la differenza e sarai pronto per affrontare ogni sfida."
                }
            ]
        }} borderRadiusHuge 
	/>
	
	<Spacer huge />

	<Story section={{
            title: 'Il fondatore di Carichissimo',
            content: `"Sono nato e cresciuto nella patria del caffè espresso: l'Italia. A casa mia, sia a colazione che dopo pranzo, non è mai mancata la moka sul fornello. Sono entrato nel mondo del caffè quando avevo appena vent'anni. Ho iniziato come venditore nei bar e nei supermercati della zona, ed è stato un vero e proprio colpo di fulmine, poiché sin da subito mi sono appassionato a questo mondo. Così, dopo pochi mesi, ho avviato la mia azienda di caffè e nel 2016 nasce "Caffè Carichissimo". Da allora sono cambiate tante cose, io in primis, ma una cosa è rimasta sempre la stessa: "La voglia di rendere speciali le giornate delle persone".`,
			image: '/davidealbanese2.png'
        }}
	/>

	<Spacer huge />

	<Feature section={{
		items: [
			{
				title: 'Miscela quotidiana',
				description: 'La nostra miscela nasce dall\'esigenza quotidiana di ogni lavoratore, studente o sportivo.',
				icon: 'ri-sun-fill'
			},
			{
				title: 'Più caffeina',
				description: 'Carichissimo contiene naturalmente il 30% di caffeina in più rispetto ad un normale caffè.',
				icon: 'ri-flashlight-fill'
			},
			{
				title: 'Sei carichissimo!',
				description: 'Dopo che lo avrai bevuto anche tu potrai finalmente dire "Sono Carichissimo!"',
				icon: 'ri-fire-fill'
			}
			]
		}} borderRadiusHuge 
	/>
</main>

<style>
	main {
		max-width: 100%;
		margin: 0 auto;
	}
</style>
