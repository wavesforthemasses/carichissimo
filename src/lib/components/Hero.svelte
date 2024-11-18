<script>
    export const { 
        section, 
        scrollAnimate = false, 
        clip = {tl: 0, tr: 0, br: 0, bl: 0}, 
        curve = {tlc: 0, trc: 0, brc: 0, blc: 0}, 
        clip2 = {tl: 0, tr: 0, br: 0, bl: 0}, 
        curve2 = {tlc: 0, trc: 0, brc: 0, blc: 0}, 
        overlay = false, 
        ...otherProps 
    } = $props();
    let scrollY;
    let randomIntegerBig = Math.floor(Math.random() * 1000000000000000000);
    let width = $state(0);
    let height = $state(0);
    let clientHeight = $state(0);
    let scrollCurrent = $state(0);
    let node = $state(null);
    let scrollPerc = $derived.by(() => {
        const top = node ? node.getBoundingClientRect().top : 0;
        if(!scrollAnimate) return -1;
        if(scrollCurrent < top) return 0;
        if((scrollCurrent - top) > (height + clientHeight)) return 1;
        return (scrollCurrent - top) / (height + clientHeight);
    })

    const getClipPath = (clip, curve, width, height, scrollPerc, clip2, curve2) => {
        if(!width || !height) return "";
        let { tl = 0, tr = 0, br = 0, bl = 0 } = clip;
        let { tlc = 0, trc = 0, brc = 0, blc = 0 } = curve;
        let { tl: tl2 = 0, tr: tr2 = 0, br: br2 = 0, bl: bl2 = 0 } = clip2;
        let { tlc: tlc2 = 0, trc: trc2 = 0, brc: brc2 = 0, blc: blc2 = 0 } = curve2;
        if(scrollPerc >= 0){
            tl = tl2 * scrollPerc + tl * (1 - scrollPerc);
            tr = tr2 * scrollPerc + tr * (1 - scrollPerc);
            br = br2 * scrollPerc + br * (1 - scrollPerc);
            bl = bl2 * scrollPerc + bl * (1 - scrollPerc);
            tlc = tlc2 * scrollPerc + tlc * (1 - scrollPerc);
            trc = trc2 * scrollPerc + trc * (1 - scrollPerc);
            brc = brc2 * scrollPerc + brc * (1 - scrollPerc);
            blc = blc2 * scrollPerc + blc * (1 - scrollPerc);
        }
        let p = `M `
        let points = []
        // Base points for rectangle (clockwise from top-left)
        let basePoints = [
            [0, 0],           // Top Left
            [1, 0],           // Top Right 
            [1, 1],           // Bottom Right
            [0, 1]            // Bottom Left
        ];

        // Adjust points for clip angles
        if (tl > 0) {
            basePoints[0] = [0, tl];
        }
        if (tr > 0) {
            basePoints[1] = [1, tr];
        }
        if (br > 0) {
            basePoints[2] = [1, 1 - br];
        }
        if (bl > 0) {
            basePoints[3] = [0, 1 - bl];
        }

        // Add curve control points where needed
        if (tlc > 0) {
            // Calculate curve points based on basePoints[0]
            let [x, y] = basePoints[0];
            let [px, py] = basePoints[3];
            let [nx, ny] = basePoints[1];

            let x0 = px + (x - px) * (1 - tlc);
            let y0 = py + (y - py) * (1 - tlc);
            let x1 = nx + (x - nx) * (1 - tlc);
            let y1 = ny + (y - ny) * (1 - tlc);

            points.push([x1, y1]); // Control point moving right from base point
        } else {
            points.push(basePoints[0]);
            points.push(basePoints[0]);
        }

        if (trc > 0) {
            let [x, y] = basePoints[1];
            let [px, py] = basePoints[0];
            let [nx, ny] = basePoints[2];

            let x0 = px + (x - px) * (1 - trc);
            let y0 = py + (y - py) * (1 - trc);
            let x1 = nx + (x - nx) * (1 - trc);
            let y1 = ny + (y - ny) * (1 - trc);

            points.push([x0, y0]); // Control point moving up from base point
            points.push([x1, y1]); // Control point moving right from base point
        } else {
            points.push(basePoints[1]);
            points.push(basePoints[1]);
        }

        if (brc > 0) {
            let [x, y] = basePoints[2];
            let [px, py] = basePoints[1];
            let [nx, ny] = basePoints[3];

            let x0 = px + (x - px) * (1 - brc);
            let y0 = py + (y - py) * (1 - brc);
            let x1 = nx + (x - nx) * (1 - brc);
            let y1 = ny + (y - ny) * (1 - brc);

            points.push([x0, y0]); // Control point moving up from base point
            points.push([x1, y1]); // Control point moving right from base point
        } else {
            points.push(basePoints[2]);
            points.push(basePoints[2]);
        }

        if (blc > 0) {
            let [x, y] = basePoints[3];
            let [px, py] = basePoints[2];
            let [nx, ny] = basePoints[0];

            let x0 = px + (x - px) * (1 - blc);
            let y0 = py + (y - py) * (1 - blc);
            let x1 = nx + (x - nx) * (1 - blc);
            let y1 = ny + (y - ny) * (1 - blc);

            points.push([x0, y0]); // Control point moving up from base point
            points.push([x1, y1]); // Control point moving right from base point
        } else {
            points.push(basePoints[3]);
            points.push(basePoints[3]);
        }

        // Add curve control points where needed
        if (tlc > 0) {
            // Calculate curve points based on basePoints[0]
            let [x, y] = basePoints[0];
            let [px, py] = basePoints[3];
            let [nx, ny] = basePoints[1];

            let x0 = px + (x - px) * (1 - tlc);
            let y0 = py + (y - py) * (1 - tlc);
            let x1 = nx + (x - nx) * (1 - tlc);
            let y1 = ny + (y - ny) * (1 - tlc);

            points.push([x0, y0]); // Control point moving up from base point
        }

        // Build the path string
        p += `${points[0][0] * width} ${points[0][1] * height}`;
        
        for (let i = 1; i < points.length; i++) {
            const currentPoint = points[i];
            const nextPoint = i < points.length - 1 ? points[i+1] : points[0];
            const middlePoint = [
                (currentPoint[0] + nextPoint[0]) / 2,
                (currentPoint[1] + nextPoint[1]) / 2
            ];
            p += ` L ${currentPoint[0] * width} ${currentPoint[1] * height}`;
            // calculate the closest basePoint to the middlePoint
            const closestBasePoint = basePoints.reduce((closest, point) => {
                const distance = Math.sqrt((point[0] - middlePoint[0])**2 + (point[1] - middlePoint[1])**2);
                return distance < closest.distance ? { point, distance } : closest;
            }, { distance: Infinity }).point;
            p += ` S ${closestBasePoint[0] * width} ${closestBasePoint[1] * height} ${nextPoint[0] * width} ${nextPoint[1] * height}`;
        }

        // Close the path
        p += ' Z';
        return p;
    }
</script>

<svelte:window bind:scrollY={scrollCurrent} bind:innerHeight={clientHeight} />

<section 
    class={`hero ${Object.keys(otherProps || {}).filter(key => ![null, false].includes(otherProps[key])).join(' ')}`}
    style={`${section.image ? `background-image: url('${section.image}');` : `background: ${section.background};`} --clip1: path("${getClipPath(clip, curve, width, height, scrollPerc, clip2, curve2)}");`}
    role="banner"
    aria-labelledby="hero-title"
    bind:clientWidth={width}
    bind:clientHeight={height}
    bind:this={node}
>
    {#if overlay}
        <div class="hero-overlay" aria-hidden="true"></div>
    {/if}
    <div class="hero-content">
        {#if section.logo}
            <img src={section.logo} alt="Carichissimo" class="logo" />
        {/if}
        {#if section.action}
            <a href={section.link} type="button" class="cta">
                <i class="ri-shopping-cart-fill" aria-hidden="true"></i>
                <span>{section.action}</span>
            </a>
        {/if}
        {#if section.title}
            <div class="hero-title">{section.title}</div>
        {/if}
        {#if section.description}
            <div class="hero-description">{section.description}</div>
        {/if}
        <slot />
    </div>
</section>

<style>

    .logo {
        width: 200px;
        margin: 0 auto;
        margin-bottom: var(--space-8);
    }

    .hero-content {
        position: relative;
        z-index: var(--z-20);
        max-width: var(--container-lg);
        padding: var(--space-2);
        text-align: center;
        margin: 0 auto;
        opacity: 0;
        transform: translateY(20px);
        animation: fadeInUp 2s .5s ease-in-out forwards;
    }

    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .cta {
        display: inline-flex;
        align-items: center;
        gap: var(--space-2);
        padding: var(--space-4) var(--space-16);
        font-size: var(--text-base);
        line-height: var(--leading-base);
        color: var(--primary);
        background: hsla(var(--secondaryHSL), 0.3);
        border-radius: var(--radius-full);
        cursor: pointer;
        transition: all var(--transition-normal) var(--ease-in-out);
        letter-spacing: 1px;
    }

    .cta:hover {
        background: var(--white);
        color: var(--primary);
        transform: translateY(-3px);
        box-shadow: var(--shadow-lg);
    }
    .hero{
        position: relative;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--secondary);
        background-size: cover;
        background-position: center;
        clip-path: var(--clip1);
        &>svg{
            position: fixed;
            top: 0;
            left: 0;
        }
        .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            mix-blend-mode: overlay;
            background: linear-gradient(
                135deg,
                hsla(var(--primaryHSL), 0.6) 0%,
                hsla(var(--primaryHSL), 1) 50%,
                hsla(var(--primaryHSL), 0.8) 100%
            );
            z-index: 1;
        }
        .hero-title{
            background: linear-gradient(135deg, var(--secondary-light) 0%, var(--secondary-dark) 100%);
            font-family: var(--font-heading);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-top: var(--space-16);
        }
        .hero-title {
            font-size: var(--text-4xl);
            line-height: var(--leading-4xl);
            max-width: var(--container-md);
            margin-bottom: var(--space-2);
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .hero-description{
            font-family: var(--font-body);
            font-size: var(--text-2xl);
            line-height: var(--leading-2xl);
            max-width: var(--container-md);
            margin-left: auto;
            margin-right: auto;
        }
        &.secondary{
            color: var(--secondary);
            .hero-overlay {
                background: linear-gradient(
                    135deg,
                    hsla(var(--primaryHSL), 0.4) 0%,
                    hsla(var(--primaryHSL), 0.6) 50%,
                    hsla(var(--primaryHSL), 0.5) 100%
                );
            }
            .hero-title{
                background: linear-gradient(135deg, var(--secondary-light) 0%, var(--secondary-dark) 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            .cta {
                color: var(--secondary);
                background: hsla(var(--primaryHSL), 0.8);
            }

            .cta:hover {
                background: var(--secondary);
                color: var(--secondary-reverse);
            }
        }

        &.primary{
            color: var(--primary);
            .hero-overlay {
                background: linear-gradient(
                    135deg,
                    hsla(var(--secondaryHSL), 0.4) 0%,
                    hsla(var(--secondaryHSL), 0.6) 50%,
                    hsla(var(--secondaryHSL), 0.5) 100%
                );
            }
            .hero-title{
                background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary-dark) 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            .cta {
                color: var(--primary);
                background: hsla(var(--secondaryHSL), 0.8);
            }

            .cta:hover {
                background: var(--primary);
                color: var(--primary-reverse);
            }
        }

        &.white{
            color: var(--white);
            .hero-overlay {
                background: linear-gradient(
                    135deg,
                    hsla(var(--secondaryHSL), 0.4) 0%,
                    hsla(var(--secondaryHSL), 0.6) 50%,
                    hsla(var(--secondaryHSL), 0.5) 100%
                );
            }
            .hero-title{
                background: linear-gradient(135deg, var(--white) 0%, var(--gray-100) 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            .cta {
                color: var(--white);
                background: hsla(var(--secondaryHSL), 0.8);
            }

            .cta:hover {
                background: var(--white);
                color: var(--white-reverse);
            }
        }

        &.black{
            color: var(--black);
            .hero-overlay {
                background: linear-gradient(
                    135deg,
                    hsla(var(--primaryHSL), 0.4) 0%,
                    hsla(var(--primaryHSL), 0.6) 50%,
                    hsla(var(--primaryHSL), 0.5) 100%
                );
            }
            .hero-title{
                background: linear-gradient(135deg, var(--black) 0%, var(--gray-900) 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            .cta {
                color: var(--black);
                background: hsla(var(--primaryHSL), 0.8);
            }

            .cta:hover {
                background: var(--black);
                color: var(--black-reverse);
            }
        }
    }
    @media (max-width: 768px) {
        .hero {
            /* Remove static clip-path from here */
        }

        .hero .hero-title {
            font-size: var(--text-4xl);
            line-height: var(--leading-4xl);
        }

        .hero .hero-description {
            font-size: var(--text-base);
            line-height: var(--leading-base);
        }
    }

    section.shadow:before{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: inherit;
            clip-path: inherit;
            box-shadow: inset 0 0 10rem rgba(0, 0, 0, 0.5);
            pointer-events: none;
    }
</style>