const products = [
  {
    name: "CARTEL CLASSIC",
    description: "The OG. Chocolate chip perfection.",
    price: "$4.25",
    badge: "",
  },
  {
    name: "TRIPLE THREAT",
    description: "Triple chocolate. Triple satisfaction.",
    price: "$4.50",
    badge: "",
  },
  {
    name: "S'MORES SYNDICATE",
    description: "Graham, chocolate, marshmallow. No mercy.",
    price: "$4.75",
    badge: "BEST SELLER",
  },
  {
    name: "COOKIE MONSTER",
    description: "Oreo cookies, chocolate chips, and chaos.",
    price: "$4.50",
    badge: "",
  },
  {
    name: "RED VELVET MOB",
    description: "Red velvet with white chocolate chips.",
    price: "$4.75",
    badge: "LIMITED DROP",
  },
  {
    name: "CARAMEL TAKEOVER",
    description: "Caramel, chocolate, and sea salt.",
    price: "$4.75",
    badge: "NEW",
  },
];
export default function Home() {
  return (
    <main className="min-h-screen bg-[#070706]">

      {/* ANNOUNCEMENT BAR */}
      <div className="border-b border-[var(--border)] bg-[#0b0a08] px-4 py-2 text-center">
        <p className="text-[10px] tracking-[0.32em] text-[var(--gold-light)] sm:text-xs">
          FREE DELIVERY IN SOUTH FLORIDA ON ORDERS $40+
        </p>
      </div>

      {/* NAVIGATION */}
      <header className="border-b border-[var(--border)] bg-black">
        <div className="mx-auto flex h-[84px] max-w-[1450px] items-center px-6 lg:px-10">

          {/* Temporary logo */}
        <div className="flex items-center">
  <img
    src="/images/cookie-cartel-logo.png"
    alt="Cookie Cartel"
    className="h-[72px] w-[72px] object-contain"
  />
</div>

          <nav className="ml-14 hidden items-center gap-9 lg:flex">
            <a
              href="#"
              className="border-b border-[var(--gold)] pb-2 text-xs tracking-[0.17em] text-[var(--gold-light)]"
            >
              HOME
            </a>

            <a
              href="#goods"
              className="text-xs tracking-[0.17em] text-[var(--cream)] transition hover:text-[var(--gold)]"
            >
              THE GOODS
            </a>

            <a
              href="#"
              className="text-xs tracking-[0.17em] text-[var(--cream)] transition hover:text-[var(--gold)]"
            >
              CARTEL BOXES
            </a>

            <a
              href="#"
              className="text-xs tracking-[0.17em] text-[var(--cream)] transition hover:text-[var(--gold)]"
            >
              ABOUT
            </a>

            <a
              href="#"
              className="text-xs tracking-[0.17em] text-[var(--cream)] transition hover:text-[var(--gold)]"
            >
              FAQ
            </a>

            <a
              href="#"
              className="text-xs tracking-[0.17em] text-[var(--cream)] transition hover:text-[var(--gold)]"
            >
              CONTACT
            </a>
          </nav>

          <div className="ml-auto flex items-center gap-3 text-[var(--gold-light)]">
            <span className="text-xl">◯</span>
            <span className="text-xs">0</span>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto grid max-w-[1450px] lg:min-h-[650px] lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center px-6 py-20 lg:px-10 lg:py-24">

            <p className="mb-3 font-[var(--font-display)] text-5xl tracking-[0.04em] text-[var(--cream)] sm:text-6xl lg:text-7xl">
              ILLEGALLY GOOD.
            </p>

            <h1 className="font-[var(--font-display)] text-7xl leading-[0.82] tracking-[0.01em] text-[var(--gold)] sm:text-8xl lg:text-[112px]">
              PREMIUM
              <br />
              COOKIES.
            </h1>

            <p className="mt-7 text-xs tracking-[0.24em] text-[var(--cream)] sm:text-sm">
              HANDMADE. PREMIUM INGREDIENTS. ZERO SHORTCUTS.
            </p>

            <a
              href="#goods"
              className="mt-9 flex w-fit items-center gap-8 bg-[var(--gold)] px-8 py-4 text-xs font-bold tracking-[0.18em] text-black transition hover:bg-[var(--gold-light)]"
            >
              SHOP THE DROP
              <span className="text-xl">→</span>
            </a>

            {/* FEATURES */}
            <div className="mt-14 flex flex-wrap gap-10 sm:gap-14">

              <div className="w-24 text-center">
                <div className="mb-3 text-2xl text-[var(--gold)]">◆</div>
                <p className="text-[9px] leading-4 tracking-[0.16em] text-[var(--gold-light)]">
                  PREMIUM
                  <br />
                  INGREDIENTS
                </p>
              </div>

              <div className="w-24 text-center">
                <div className="mb-3 text-2xl text-[var(--gold)]">♨</div>
                <p className="text-[9px] leading-4 tracking-[0.16em] text-[var(--gold-light)]">
                  BAKED
                  <br />
                  TO ORDER
                </p>
              </div>

              <div className="w-24 text-center">
                <div className="mb-3 text-2xl text-[var(--gold)]">◇</div>
                <p className="text-[9px] leading-4 tracking-[0.16em] text-[var(--gold-light)]">
                  SECURE
                  <br />
                  CHECKOUT
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE - HERO IMAGE PLACEHOLDER */}
          <div className="relative min-h-[450px] overflow-hidden bg-[radial-gradient(circle_at_center,#392513_0%,#17100a_35%,#070706_72%)] lg:min-h-full">

            <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9b5f29] shadow-[0_0_100px_rgba(201,147,50,0.16)] sm:h-[400px] sm:w-[400px]">
              
              <div className="absolute left-[22%] top-[24%] h-10 w-12 rounded-full bg-[#3a1c0d]" />
              <div className="absolute right-[20%] top-[33%] h-11 w-11 rounded-full bg-[#3a1c0d]" />
              <div className="absolute bottom-[23%] left-[30%] h-12 w-10 rounded-full bg-[#3a1c0d]" />
              <div className="absolute bottom-[30%] right-[28%] h-9 w-12 rounded-full bg-[#3a1c0d]" />
              <div className="absolute left-[44%] top-[46%] h-9 w-9 rounded-full bg-[#3a1c0d]" />

            </div>

            <p className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-[10px] tracking-[0.25em] text-[var(--muted)]">
              PRODUCT PHOTO GOES HERE
            </p>

          </div>

        </div>
      </section>
      {/* THE GOODS */}
<section
  id="goods"
  className="border-b border-[var(--border)] bg-[#090806] px-6 py-14 lg:px-10"
>
  <div className="mx-auto max-w-[1450px]">

    {/* SECTION HEADER */}
    <div className="mb-7 flex items-end justify-between">
      <div>
        <p className="mb-1 text-[10px] tracking-[0.25em] text-[var(--gold-light)]">
          CURRENT INVENTORY
        </p>

        <h2 className="font-[var(--font-display)] text-4xl tracking-[0.05em] text-[var(--cream)]">
          THE GOODS
        </h2>
      </div>

      <a
        href="#"
        className="hidden border-b border-[var(--gold)] pb-1 text-[10px] tracking-[0.18em] text-[var(--gold-light)] sm:block"
      >
        VIEW ALL →
      </a>
    </div>

    {/* PRODUCT GRID */}
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {products.map((product) => (
        <div
          key={product.name}
          className="relative flex min-h-[390px] flex-col border border-[var(--border)] bg-[#0c0b08] p-4 transition duration-300 hover:-translate-y-1 hover:border-[var(--gold)]"
        >

          {/* BADGE */}
          {product.badge && (
            <div className="absolute left-0 top-0 z-10 bg-[var(--gold)] px-2 py-1 text-[8px] font-bold tracking-[0.08em] text-black">
              {product.badge}
            </div>
          )}

          {/* TEMPORARY PRODUCT IMAGE */}
          <div className="mb-5 flex h-[175px] items-center justify-center">
            <div className="relative h-[145px] w-[145px] rounded-full bg-[#9a622e] shadow-[0_15px_30px_rgba(0,0,0,0.65)]">

              <span className="absolute left-[22%] top-[25%] h-5 w-6 rounded-full bg-[#40200e]" />
              <span className="absolute right-[22%] top-[22%] h-6 w-5 rounded-full bg-[#40200e]" />
              <span className="absolute bottom-[26%] left-[30%] h-5 w-5 rounded-full bg-[#40200e]" />
              <span className="absolute bottom-[32%] right-[25%] h-6 w-6 rounded-full bg-[#40200e]" />

            </div>
          </div>

          {/* PRODUCT INFO */}
          <h3 className="font-[var(--font-display)] text-xl tracking-[0.03em] text-[var(--gold)]">
            {product.name}
          </h3>

          <p className="mt-2 min-h-[45px] text-[11px] leading-5 text-[var(--cream)] opacity-80">
            {product.description}
          </p>

          <p className="mt-4 text-sm font-bold text-[var(--gold-light)]">
            {product.price}
          </p>

          <button className="mt-auto bg-[var(--gold)] px-3 py-3 text-[10px] font-bold tracking-[0.12em] text-black transition hover:bg-[var(--gold-light)]">
            ADD TO CART
          </button>

        </div>
      ))}
    </div>
  </div>
</section>
{/* BENEFITS STRIP */}
<section className="border-b border-[var(--border)] bg-[#0a0907]">
  <div className="mx-auto grid max-w-[1450px] sm:grid-cols-2 lg:grid-cols-4">

    {/* PREMIUM INGREDIENTS */}
    <div className="flex items-center gap-5 border-b border-[var(--border)] px-8 py-7 sm:border-r lg:border-b-0">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center text-4xl text-[var(--gold)]">
        ♕
      </div>

      <div>
        <h3 className="text-sm tracking-[0.2em] text-[var(--gold-light)]">
          PREMIUM
          <br />
          INGREDIENTS
        </h3>

        <p className="mt-2 text-[11px] leading-5 text-[var(--muted)]">
          Only the best make
          <br />
          it into our cookies.
        </p>
      </div>
    </div>

    {/* BAKED TO ORDER */}
    <div className="flex items-center gap-5 border-b border-[var(--border)] px-8 py-7 lg:border-b-0 lg:border-r">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center text-4xl text-[var(--gold)]">
        ⚒
      </div>

      <div>
        <h3 className="text-sm tracking-[0.2em] text-[var(--gold-light)]">
          BAKED TO
          <br />
          ORDER
        </h3>

        <p className="mt-2 text-[11px] leading-5 text-[var(--muted)]">
          Fresh cookies,
          <br />
          never sitting.
        </p>
      </div>
    </div>

    {/* LOCAL DELIVERY */}
    <div className="flex items-center gap-5 border-b border-[var(--border)] px-8 py-7 sm:border-r lg:border-b-0">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center text-4xl text-[var(--gold)]">
        ⇢
      </div>

      <div>
        <h3 className="text-sm tracking-[0.2em] text-[var(--gold-light)]">
          LOCAL
          <br />
          DELIVERY
        </h3>

        <p className="mt-2 text-[11px] leading-5 text-[var(--muted)]">
          Fast, reliable delivery
          <br />
          in South Florida.
        </p>
      </div>
    </div>

    {/* SECURE PAYMENTS */}
    <div className="flex items-center gap-5 px-8 py-7">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center text-4xl text-[var(--gold)]">
        ♙
      </div>

      <div>
        <h3 className="text-sm tracking-[0.2em] text-[var(--gold-light)]">
          SECURE
          <br />
          PAYMENTS
        </h3>

        <p className="mt-2 text-[11px] leading-5 text-[var(--muted)]">
          Your info stays
          <br />
          in the vault.
        </p>
      </div>
    </div>

  </div>
</section>
{/* THE OPERATION */}
<section className="border-b border-[var(--border)] bg-[#090806]">
  <div className="mx-auto grid max-w-[1450px] lg:grid-cols-2">

    {/* LEFT VISUAL */}
    <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden border-b border-[var(--border)] bg-[radial-gradient(circle_at_center,#1c140c_0%,#0b0906_48%,#070706_78%)] p-10 lg:border-b-0 lg:border-r">

      <div className="absolute h-[360px] w-[360px] rounded-full bg-[var(--gold)] opacity-[0.035] blur-3xl" />

      <img
        src="/images/cookie-cartel-logo.png"
        alt="Cookie Cartel"
        className="relative z-10 w-full max-w-[330px] object-contain opacity-95"
      />

    </div>

    {/* RIGHT COPY */}
    <div className="flex flex-col justify-center px-6 py-16 lg:px-14 lg:py-20">

      <p className="mb-2 text-[10px] tracking-[0.28em] text-[var(--gold-light)]">
        THE OPERATION
      </p>

      <h2 className="font-[var(--font-display)] text-5xl leading-[0.95] tracking-[0.04em] text-[var(--cream)] sm:text-6xl">
        WE DON&apos;T BAKE COOKIES.
        <br />
        WE RUN THE GAME.
      </h2>

      <p className="mt-7 max-w-[600px] text-sm leading-7 text-[var(--muted)]">
        Cookie Cartel was built different. No shortcuts. No fillers.
        Just premium ingredients, insane flavors, and cookies that hit
        every time.
      </p>

      <p className="mt-4 max-w-[600px] text-sm leading-7 text-[var(--muted)]">
        This isn&apos;t just a cookie... it&apos;s a movement.
      </p>

      <a
        href="#"
        className="mt-8 flex w-fit items-center gap-7 border border-[var(--gold)] px-6 py-3 text-[10px] tracking-[0.18em] text-[var(--gold-light)] transition hover:bg-[var(--gold)] hover:text-black"
      >
        LEARN MORE ABOUT THE CARTEL
        <span className="text-lg">→</span>
      </a>

    </div>
  </div>
</section>
{/* WORD ON THE STREET */}
<section className="border-b border-[var(--border)] bg-[#070706] px-6 py-16 lg:px-10">
  <div className="mx-auto max-w-[1450px]">

    {/* SECTION HEADER */}
    <div className="mb-10 text-center">
      <p className="mb-2 text-[10px] tracking-[0.28em] text-[var(--gold-light)]">
        WORD ON THE STREET
      </p>

      <h2 className="font-[var(--font-display)] text-5xl tracking-[0.04em] text-[var(--cream)] sm:text-6xl">
        THE CARTEL HAS SPOKEN.
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[var(--muted)]">
        Real reviews from real cookie addicts.
      </p>
    </div>

    {/* REVIEW CARDS */}
    <div className="grid gap-4 md:grid-cols-3">

      {/* REVIEW 1 */}
      <div className="border border-[var(--border)] bg-[#0c0b08] p-7">
        <div className="mb-5 text-sm tracking-[0.2em] text-[var(--gold)]">
          ★ ★ ★ ★ ★
        </div>

        <p className="text-sm leading-7 text-[var(--cream)]">
          “These cookies are dangerous. Crispy on the outside, soft in the
          middle, and absolutely loaded.”
        </p>

        <div className="mt-7 border-t border-[var(--border)] pt-5">
          <p className="text-xs tracking-[0.18em] text-[var(--gold-light)]">
            SAMPLE REVIEW
          </p>
          <p className="mt-1 text-[10px] tracking-[0.15em] text-[var(--muted)]">
            REPLACE WITH REAL CUSTOMER
          </p>
        </div>
      </div>

      {/* REVIEW 2 */}
      <div className="border border-[var(--gold)] bg-[#0c0b08] p-7">
        <div className="mb-5 text-sm tracking-[0.2em] text-[var(--gold)]">
          ★ ★ ★ ★ ★
        </div>

        <p className="text-sm leading-7 text-[var(--cream)]">
          “The kind of cookie you tell yourself you&apos;ll only eat half of...
          and then suddenly the whole thing is gone.”
        </p>

        <div className="mt-7 border-t border-[var(--border)] pt-5">
          <p className="text-xs tracking-[0.18em] text-[var(--gold-light)]">
            SAMPLE REVIEW
          </p>
          <p className="mt-1 text-[10px] tracking-[0.15em] text-[var(--muted)]">
            REPLACE WITH REAL CUSTOMER
          </p>
        </div>
      </div>

      {/* REVIEW 3 */}
      <div className="border border-[var(--border)] bg-[#0c0b08] p-7">
        <div className="mb-5 text-sm tracking-[0.2em] text-[var(--gold)]">
          ★ ★ ★ ★ ★
        </div>

        <p className="text-sm leading-7 text-[var(--cream)]">
          “You can taste the difference immediately. This is not your average
          grocery store cookie.”
        </p>

        <div className="mt-7 border-t border-[var(--border)] pt-5">
          <p className="text-xs tracking-[0.18em] text-[var(--gold-light)]">
            SAMPLE REVIEW
          </p>
          <p className="mt-1 text-[10px] tracking-[0.15em] text-[var(--muted)]">
            REPLACE WITH REAL CUSTOMER
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
{/* FOOTER */}
<footer className="bg-[#050504]">
  <div className="mx-auto max-w-[1450px] px-6 py-14 lg:px-10">

    <div className="grid gap-12 border-b border-[var(--border)] pb-12 md:grid-cols-2 lg:grid-cols-4">

      {/* BRAND */}
      <div>
        <img
          src="/images/cookie-cartel-logo.png"
          alt="Cookie Cartel"
          className="w-[150px] object-contain"
        />

        <p className="mt-5 max-w-[260px] text-xs leading-6 text-[var(--muted)]">
          Premium cookies made fresh, loaded with flavor, and delivered
          throughout South Florida.
        </p>
      </div>

      {/* SHOP */}
      <div>
        <h3 className="mb-5 text-xs tracking-[0.22em] text-[var(--gold-light)]">
          THE GOODS
        </h3>

        <div className="flex flex-col gap-3 text-xs tracking-[0.08em] text-[var(--cream)]">
          <a href="#goods" className="transition hover:text-[var(--gold)]">
            ALL COOKIES
          </a>
          <a href="#" className="transition hover:text-[var(--gold)]">
            CARTEL BOXES
          </a>
          <a href="#" className="transition hover:text-[var(--gold)]">
            LIMITED DROPS
          </a>
          <a href="#" className="transition hover:text-[var(--gold)]">
            BEST SELLERS
          </a>
        </div>
      </div>

      {/* INFO */}
      <div>
        <h3 className="mb-5 text-xs tracking-[0.22em] text-[var(--gold-light)]">
          THE OPERATION
        </h3>

        <div className="flex flex-col gap-3 text-xs tracking-[0.08em] text-[var(--cream)]">
          <a href="#" className="transition hover:text-[var(--gold)]">
            ABOUT US
          </a>
          <a href="#" className="transition hover:text-[var(--gold)]">
            FAQ
          </a>
          <a href="#" className="transition hover:text-[var(--gold)]">
            CONTACT
          </a>
          <a href="#" className="transition hover:text-[var(--gold)]">
            DELIVERY INFO
          </a>
        </div>
      </div>

      {/* CONTACT */}
      <div>
        <h3 className="mb-5 text-xs tracking-[0.22em] text-[var(--gold-light)]">
          JOIN THE CARTEL
        </h3>

        <p className="text-xs leading-6 text-[var(--muted)]">
          Follow Cookie Cartel for new drops, specials, and everything coming
          out of the kitchen.
        </p>

        <div className="mt-6">
          <a
            href="#"
            className="inline-flex border border-[var(--gold)] px-5 py-3 text-[10px] tracking-[0.18em] text-[var(--gold-light)] transition hover:bg-[var(--gold)] hover:text-black"
          >
            FOLLOW ON INSTAGRAM →
          </a>
        </div>
      </div>

    </div>

    {/* BOTTOM FOOTER */}
    <div className="flex flex-col gap-5 pt-8 md:flex-row md:items-center md:justify-between">

      <p className="text-[10px] tracking-[0.13em] text-[var(--muted)]">
        © 2026 COOKIE CARTEL. ALL RIGHTS RESERVED.
      </p>

      <p className="font-[var(--font-display)] text-xl tracking-[0.08em] text-[var(--gold)]">
        ILLEGALLY GOOD. LEGALLY ADDICTIVE.
      </p>

    </div>

  </div>
</footer>
    </main>
  );
}