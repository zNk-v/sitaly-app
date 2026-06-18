import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  Phone,
  Calendar,
  Check,
  ArrowRight,
  Search,
  Clock,
  Frown,
  Wrench,
  TrendingUp,
  Shield,
  HeadphonesIcon,
  Star,
  ChevronDown,
  Sparkles,
  MapPin,
  Mail,
  Globe,
} from "lucide-react";
import exampleRenovation from "@/assets/example-renovation.jpg";
import examplePlombier from "@/assets/example-plombier.jpg";
import exampleElectricien from "@/assets/example-electricien.jpg";
import { SitalyLogo } from "@/components/SitalyLogo";

const FAQ_ITEMS = [
  {
    q: "Quel est le tarif ?",
    a: "790€ couvrent la création complète de votre site sur mesure, livré en 48h. L'offre maintenance à 99€/mois inclut la création du site, l'hébergement, la sécurité, les mises à jour, les petites modifications et le support. Engagement minimum de 12 mois pour l'offre maintenance. Vous pouvez aussi prendre uniquement le site sans maintenance.",
  },
  {
    q: "Est-ce que je peux modifier mon site ?",
    a: "Oui. Les petites modifications (textes, photos, infos) sont incluses dans l'option maintenance. Pour des évolutions plus importantes, on vous propose un devis transparent.",
  },
  {
    q: "Suis-je propriétaire du site ?",
    a: "Oui, le contenu de votre site vous appartient. Vous pouvez héberger le site où vous le souhaitez si vous ne prenez pas l'option maintenance.",
  },
  {
    q: "Combien de temps pour le mettre en ligne ?",
    a: "Votre site est livré en 48h après l'appel découverte et la fourniture des contenus.",
  },
  {
    q: "Puis-je arrêter l'option maintenance ?",
    a: "Oui, l'option est sans engagement. Vous pouvez l'arrêter à tout moment avec un simple préavis.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Création site internet artisan | Sitaly — 790€ ou 99€/mois" },
      {
        name: "description",
        content:
          "Sitaly crée votre site internet artisan professionnel. 790€ paiement unique ou 99€/mois tout inclus. Livré en 48h. Réservez votre appel !",
      },
      { property: "og:title", content: "Création site internet artisan | Sitaly" },
      {
        property: "og:description",
        content: "Site pro pour artisan livré en 48h. 790€ unique ou 99€/mois création + maintenance incluses. Réservez votre appel gratuit.",
      },
      { property: "og:url", content: "https://sitaly.fr/" },
    ],
    links: [{ rel: "canonical", href: "https://sitaly.fr/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_ITEMS.map((it) => ({
            "@type": "Question",
            name: it.q,
            acceptedAnswer: { "@type": "Answer", text: it.a },
          })),
        }),
      },
    ],
  }),
  component: SitalyHome,
});

function SitalyHome() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <TrustBar />
      <Problem />
      <Solution />
      <Pricing />
      <Options />
      <Examples />
      <Process />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center" aria-label="Sitaly — accueil">
          <SitalyLogo />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#offre" className="text-sm font-medium text-muted-foreground hover:text-foreground">Offre</a>
          <a href="#exemples" className="text-sm font-medium text-muted-foreground hover:text-foreground">Exemples</a>
          <a href="#process" className="text-sm font-medium text-muted-foreground hover:text-foreground">Process</a>
          <Link to="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground">Blog</Link>
          <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground">FAQ</a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
        >
          <Calendar className="h-4 w-4" />
          Réserver un appel
        </a>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="hero-bg relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Solution clé en main pour artisans & TPE
            </div>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Un site internet conçu pour vous <span className="gradient-text">générer des appels&nbsp;</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground sm:text-xl">
              Deux offres simples : création de votre site à <strong className="text-foreground">790€</strong>, ou site + maintenance à <strong className="text-foreground">99€/mois</strong> (création incluse). Livré en <strong className="text-foreground">48h</strong>.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-elevated transition hover:opacity-90"
              >
                <Calendar className="h-5 w-5" />
                Réserver un appel
              </a>
              <a
                href="#exemples"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-base font-semibold text-foreground transition hover:bg-secondary"
              >
                Voir des exemples
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-4 sm:text-[15px]">
              {[
                "Site sur mesure",
                "Visible sur Google",
                "Maintenance incluse",
                "Support continu",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2 text-foreground/90">
                  <Check className="h-4 w-4 shrink-0 text-success" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual mock */}
          <div className="relative">
            <HeroMock />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroMock() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/20 to-primary/20 blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
        <div className="flex items-center gap-1.5 border-b border-border bg-secondary px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
          <span className="ml-3 truncate rounded bg-background px-2 py-0.5 text-xs text-muted-foreground">
            votre-entreprise.fr
          </span>
        </div>
        <div className="space-y-4 p-6">
          <div className="flex items-center justify-between">
            <div className="h-6 w-24 rounded bg-primary/90" />
            <div className="flex gap-2">
              <div className="h-3 w-10 rounded bg-muted" />
              <div className="h-3 w-10 rounded bg-muted" />
              <div className="h-3 w-10 rounded bg-muted" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-7 w-3/4 rounded bg-foreground/85" />
            <div className="h-7 w-2/3 rounded bg-foreground/85" />
            <div className="h-3 w-full rounded bg-muted" />
            <div className="h-3 w-5/6 rounded bg-muted" />
          </div>
          <div className="flex gap-2 pt-1">
            <div className="h-9 w-32 rounded-lg bg-accent" />
            <div className="h-9 w-28 rounded-lg border border-border" />
          </div>
          <div className="grid grid-cols-3 gap-3 pt-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg border border-border p-3">
                <div className="mb-2 h-6 w-6 rounded bg-accent/20" />
                <div className="h-2 w-full rounded bg-muted" />
                <div className="mt-1 h-2 w-2/3 rounded bg-muted" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* floating card */}
      <div className="animate-float absolute -bottom-6 -left-6 hidden rounded-xl border border-border bg-card p-3 shadow-elevated sm:flex sm:items-center sm:gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-lg bg-success/15 text-success">
          <Phone className="h-5 w-5" />
        </div>
        <div>
          <div className="text-xs text-muted-foreground">Nouveau appel</div>
          <div className="text-sm font-semibold">+ 3 devis cette semaine</div>
        </div>
      </div>
    </div>
  );
}

function TrustBar() {
  const items = [
    { v: "790€", l: "Création unique" },
    { v: "99€/mois", l: "Création + maintenance" },
    { v: "48h", l: "Mise en ligne" },
    { v: "Support", l: "Réactif 7j/7" },
  ];
  return (
    <div className="border-y border-border bg-secondary/50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden md:grid-cols-4">
        {items.map((i) => (
          <div key={i.l} className="bg-secondary/50 px-4 py-5 text-center">
            <div className="font-display text-xl font-bold text-foreground sm:text-2xl">{i.v}</div>
            <div className="text-xs text-muted-foreground sm:text-sm">{i.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- PROBLEM ---------------- */
function Problem() {
  const items = [
    {
      icon: Search,
      title: "Pas de site internet",
      desc: "Vos clients vous cherchent sur Google… et trouvent vos concurrents à votre place.",
    },
    {
      icon: Frown,
      title: "Site ancien ou amateur",
      desc: "Un site daté donne une mauvaise première impression et fait fuir les prospects sérieux.",
    },
    {
      icon: Clock,
      title: "Pas le temps de vous en occuper",
      desc: "Vous êtes artisan, pas développeur. Gérer un site, c'est une perte de temps et d'énergie.",
    },
  ];
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Le constat"
          title="Votre site actuel vous fait perdre des clients"
          subtitle="Aujourd'hui, 8 clients sur 10 vérifient un site web avant de vous contacter."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-soft transition hover:shadow-elevated"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-destructive/10 text-destructive">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{it.title}</h3>
              <p className="mt-2 text-[15px] text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SOLUTION ---------------- */
function Solution() {
  const items = [
    { icon: Wrench, title: "Création du site", desc: "Un site sur mesure, moderne et adapté à votre métier." },
    { icon: MapPin, title: "Référencement local", desc: "Soyez visible sur Google quand vos clients vous cherchent." },
    { icon: Shield, title: "Maintenance & sécurité", desc: "Hébergement, mises à jour et sauvegardes inclus." },
    { icon: HeadphonesIcon, title: "Accompagnement", desc: "Un interlocuteur dédié pour vos questions et modifications." },
  ];
  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Notre solution"
          title="Une solution clé en main"
          subtitle="On s'occupe de tout. Vous, vous vous concentrez sur votre métier."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/12 text-accent">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-bold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRICING ---------------- */
function Pricing() {
  return (
    <section id="offre" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Tarifs"
          title="Choisissez l'offre qui vous convient"
          subtitle="Deux options simples. Aucune surprise."
        />

        <div className="mx-auto mt-14 flex max-w-5xl flex-col items-stretch gap-0 md:flex-row md:items-center">
          {/* OFFER 1 — Left */}
          <div className="flex-1 rounded-3xl border border-border bg-card shadow-soft md:rounded-r-none">
            <div className="p-8 sm:p-10">
              <h3 className="text-center text-xl font-bold sm:text-2xl">
                Site internet clé en main
              </h3>
              <div className="mt-4 flex items-baseline justify-center gap-1">
                <span className="font-display text-5xl font-extrabold tracking-tight sm:text-6xl">
                  790 €
                </span>
              </div>
              <p className="mt-2 text-center text-sm font-medium text-muted-foreground">
                Paiement unique
              </p>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Votre site internet livré prêt à l'emploi.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  "Création complète du site internet",
                  "Design personnalisé",
                  "Optimisation mobile",
                  "Formulaire de contact",
                  "Intégration Google Maps",
                  "SEO local de base",
                  "Mise en ligne",
                  "Propriétaire du site",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px]">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://buy.stripe.com/28E14nfny52A03X6aJgjC00"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-secondary px-6 py-3.5 text-base font-semibold text-secondary-foreground transition hover:bg-muted"
              >
                Commander mon site
              </a>
            </div>
          </div>

          {/* SEPARATOR */}
          <div className="flex items-center justify-center py-4 md:flex-col md:py-0">
            <div className="h-px w-12 bg-border md:h-12 md:w-px" />
            <span className="mx-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground md:my-2">
              OU
            </span>
            <div className="h-px w-12 bg-border md:h-12 md:w-px" />
          </div>

          {/* OFFER 2 — Recommended */}
          <div className="relative flex-1 rounded-3xl border-2 border-accent bg-card shadow-glow md:rounded-l-none">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground shadow-elevated">
              Recommandé
            </div>
            <div className="p-8 sm:p-10">
              <h3 className="text-center text-xl font-bold sm:text-2xl">
                Site internet + maintenance
              </h3>
              <div className="mt-4 flex items-baseline justify-center gap-1">
                <span className="font-display text-5xl font-extrabold tracking-tight sm:text-6xl">
                  99 €
                </span>
                <span className="text-lg text-muted-foreground">/mois</span>
              </div>
              <p className="mt-2 text-center text-sm font-medium text-accent">
                Création du site incluse, sans frais de départ.
              </p>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Un site internet professionnel créé et entièrement géré pour vous.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  "Création complète du site internet",
                  "Mise en ligne",
                  "Hébergement sécurisé",
                  "Maintenance technique continue",
                  "Sauvegardes automatiques",
                  "Mises à jour régulières",
                  "Petites modifications incluses",
                  "Support réactif",
                  "SEO local de base",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px]">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-center text-xs text-muted-foreground">
                Engagement minimum de 12 mois
              </p>

              <a
                href="https://buy.stripe.com/fZu7sL7V652A181fLjgjC01"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground shadow-elevated transition hover:opacity-90"
              >
                Commencer mon site
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------------- OPTIONS ---------------- */
function Options() {
  const opts = [
    "Référencement SEO avancé",
    "Publicité Google Ads",
    "Rédaction de contenus",
    "Photos professionnelles",
    "Logo et identité visuelle",
    "Pages supplémentaires",
    "Prise de rendez-vous en ligne",
  ];
  return (
    <section className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Sur mesure"
          title="Options disponibles selon vos besoins"
          subtitle="Ajoutez uniquement ce qui vous est utile. Rien d'imposé."
        />
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2">
          {opts.map((o) => (
            <div
              key={o}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-soft transition hover:border-accent/40"
            >
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                <TrendingUp className="h-5 w-5" />
              </div>
              <span className="font-medium">{o}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- EXAMPLES ---------------- */
function Examples() {
  type Item = {
    img?: string;
    embedUrl?: string;
    tag: string;
    title: string;
    desc: string;
    align: "left" | "right";
  };

  const items: Item[] = [
    {
      embedUrl: "https://znk-v.github.io/ks-artisan/",
      tag: "Couvreur / Façadier",
      title: "Couvreur-Façadier — Essonne",
      desc: "Site vitrine local réalisé pour un couvreur-façadier en Essonne. Scrollez directement dans l'aperçu pour visiter le site.",
      align: "left",
    },
    {
      embedUrl: "https://znk-v.github.io/yacine-menuiserie/",
      tag: "Menuiserie",
      title: "Menuiserie — Île-de-France",
      desc: "Site vitrine réalisé pour un artisan menuisier. Scrollez directement dans l'aperçu pour visiter le site.",
      align: "right",
    },
  ];

  return (
    <section id="exemples" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Exemples"
          title="Des sites pensés pour convertir"
          subtitle="Quelques exemples de sites réalisés pour des artisans. Naviguez directement dans l'aperçu."
        />

        <div className="mt-16 space-y-12 sm:mt-20 sm:space-y-28">
          {items.map((it) => (
            <article
              key={it.title}
              className={`grid gap-6 sm:items-center ${
                it.align === "right"
                  ? "sm:grid-cols-[1fr_1.15fr]"
                  : "sm:grid-cols-[1.15fr_1fr]"
              }`}
            >
              {/* Text card — first on mobile when right-aligned, else second */}
              <div
                className={`order-2 rounded-2xl border border-border bg-card p-6 shadow-elevated sm:p-8 ${
                  it.align === "right" ? "sm:order-1" : "sm:order-2"
                }`}
              >
                <span className="inline-block rounded-full bg-accent/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-accent sm:text-xs">
                  {it.tag}
                </span>
                <h3 className="mt-2 text-lg font-bold text-foreground sm:text-xl">
                  {it.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {it.desc}
                </p>
                {it.embedUrl && (
                  <a
                    href={it.embedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition hover:gap-2.5"
                  >
                    Ouvrir en plein écran
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </div>

              {/* Media */}
              <div
                className={`order-1 overflow-hidden rounded-2xl border border-border bg-secondary shadow-elevated transition duration-500 hover:-translate-y-2 ${
                  it.align === "right" ? "sm:order-2" : "sm:order-1"
                }`}
              >
                {it.embedUrl ? (
                  <EmbedPreview url={it.embedUrl} title={it.title} />
                ) : (
                  <div className="aspect-[4/5] sm:aspect-[16/10]">
                    <img
                      src={it.img}
                      alt={it.title}
                      loading="lazy"
                      width={800}
                      height={1000}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Scaled-down live preview of an external site */
function EmbedPreview({ url, title }: { url: string; title: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);
  const DESIGN_W = 1440;
  const DESIGN_H = 900;

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / DESIGN_W);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative w-full overflow-hidden bg-white"
      style={{ height: DESIGN_H * scale }}
    >
      <iframe
        src={url}
        title={`Aperçu du site ${title}`}
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        referrerPolicy="no-referrer-when-downgrade"
        scrolling="yes"
        className="absolute left-0 top-0 border-0 bg-white"
        style={{
          width: DESIGN_W,
          height: DESIGN_H,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      />
    </div>
  );
}

/* ---------------- PROCESS ---------------- */
function Process() {
  const steps = [
    { n: "01", t: "Appel découverte", d: "On comprend votre activité et vos besoins (20 min)." },
    { n: "02", t: "Création du site", d: "Nos équipes conçoivent votre site sur mesure." },
    { n: "03", t: "Validation", d: "Vous validez le rendu, on ajuste si besoin." },
    { n: "04", t: "Mise en ligne", d: "Hébergement, nom de domaine, SEO local : on s'occupe de tout." },
    { n: "05", t: "Suivi mensuel", d: "Maintenance, mises à jour et modifications incluses." },
  ];
  return (
    <section id="process" className="bg-primary py-20 text-primary-foreground sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent">Process</div>
          <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Comment ça se passe ?</h2>
          <p className="mt-3 text-primary-foreground/70">
            5 étapes simples pour avoir un site qui travaille pour vous.
          </p>
        </div>
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s) => (
            <li
              key={s.n}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="font-display text-3xl font-extrabold text-accent">{s.n}</div>
              <div className="mt-3 font-bold">{s.t}</div>
              <div className="mt-1.5 text-sm text-primary-foreground/70">{s.d}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const items = [
    {
      name: "J. M.",
      role: "Plombier — Lyon",
      quote:
        "Depuis que mon site est en ligne, je reçois 3 à 5 appels par semaine de nouveaux clients. Le rapport qualité-prix est imbattable.",
    },
    {
      name: "S. R.",
      role: "Artisan rénovation — Bordeaux",
      quote:
        "Sitaly a tout pris en charge. En 48h, j'avais un site magnifique et des demandes de devis dès le premier mois.",
    },
    {
      name: "K. B.",
      role: "Électricien — Toulouse",
      quote:
        "Simple, clair, efficace. Je n'ai rien à gérer et je peux me concentrer sur mes chantiers. Je recommande sans hésiter.",
    },
  ];
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Témoignages"
          title="Ils ont fait confiance à Sitaly"
          subtitle="Des artisans qui reçoivent enfin des appels grâce à leur site."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <div className="flex gap-0.5 text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground/90">
                « {t.quote} »
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-primary font-bold text-primary-foreground">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function Faq() {
  const items = FAQ_ITEMS;
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeader eyebrow="FAQ" title="Questions fréquentes" subtitle="Tout ce que vous voulez savoir, simplement." />
        <div className="mt-10 space-y-3">
          {items.map((it, i) => (
            <div key={it.q} className="overflow-hidden rounded-xl border border-border bg-card shadow-soft">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold"
              >
                <span>{it.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-[15px] leading-relaxed text-muted-foreground">{it.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 hero-bg" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-accent">Contact</div>
          <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">
            Discutons de votre projet
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Laissez-nous vos coordonnées, on vous rappelle sous 24h pour un échange simple et sans engagement.
          </p>
          <ul className="mt-8 space-y-4 text-[15px]">
            <li className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
                <Phone className="h-5 w-5" />
              </div>
              Un appel découverte de 20 min
            </li>
            <li className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
                <Check className="h-5 w-5" />
              </div>
              Sans engagement, ni démarchage
            </li>
            <li className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent">
                <Clock className="h-5 w-5" />
              </div>
              Réponse sous 24h
            </li>
          </ul>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const fd = new FormData(e.currentTarget);
            const name = String(fd.get("name") || "");
            const firstname = String(fd.get("firstname") || "");
            const company = String(fd.get("company") || "");
            const phone = String(fd.get("phone") || "");
            const message = String(fd.get("message") || "");
            const fullName = `${firstname} ${name}`.trim();
            const body = `Bonjour, je suis ${fullName}${company ? ` (${company})` : ""}.\nTéléphone : ${phone}\n\n${message}`;
            const sitalyPhone = "+33658683372";
            const ua = navigator.userAgent;
            const isIOS = /iPad|iPhone|iPod/.test(ua);
            const separator = isIOS ? "&" : "?";
            window.location.href = `sms:${sitalyPhone}${separator}body=${encodeURIComponent(body)}`;
            setSent(true);
          }}
          className="rounded-2xl border border-border bg-card p-6 shadow-elevated sm:p-8"
        >
          {sent ? (
            <div className="py-10 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-success/15 text-success">
                <Check className="h-7 w-7" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold">Merci !</h3>
              <p className="mt-2 text-muted-foreground">
                Votre application de messagerie s'ouvre avec votre message pré-rempli. Il ne vous reste plus qu'à l'envoyer.
              </p>
            </div>
          ) : (
            <>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nom" name="name" required />
                <Field label="Prénom" name="firstname" required />
                <Field label="Téléphone" name="phone" type="tel" required />
                <Field label="Entreprise" name="company" />
              </div>
              <div className="mt-4">
                <label htmlFor="contact-message" className="text-sm font-medium">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-[15px] outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                  placeholder="Parlez-nous brièvement de votre activité…"
                />
              </div>
              <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
              >
                <Phone className="h-5 w-5" />
                Envoyer un message
              </button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Votre application de messagerie s'ouvrira avec le message pré-rempli.
              </p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  const id = `field-${name}`;
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        maxLength={150}
        className="mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-[15px] outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
      />
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-primary py-12 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <SitalyLogo />
            </div>
            <p className="mt-3 text-sm text-primary-foreground/70">
              Création de sites internet pour artisans et TPE.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold">Navigation</div>
            <ul className="mt-3 space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#offre" className="hover:text-primary-foreground">Offre</a></li>
              <li><a href="#exemples" className="hover:text-primary-foreground">Exemples</a></li>
              <li><a href="#process" className="hover:text-primary-foreground">Process</a></li>
              <li><a href="#faq" className="hover:text-primary-foreground">FAQ</a></li>
              <li><Link to="/blog" className="hover:text-primary-foreground">Blog</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> contact@sitaly.fr</li>
              <li className="flex items-center gap-2"><Globe className="h-4 w-4" /> sitaly.fr</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-primary-foreground/60 sm:flex-row">
          <div>© {new Date().getFullYear()} Sitaly. Tous droits réservés.</div>
          <div className="flex flex-wrap justify-center gap-5">
            <Link to="/mentions-legales" className="hover:text-primary-foreground">Mentions légales</Link>
            <Link to="/politique-confidentialite" className="hover:text-primary-foreground">Confidentialité</Link>
            <Link to="/cgv" className="hover:text-primary-foreground">CGV</Link>
            <Link to="/cookies" className="hover:text-primary-foreground">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- SHARED ---------------- */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="text-xs font-semibold uppercase tracking-wider text-accent">{eyebrow}</div>
      <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground sm:text-lg">{subtitle}</p>}
    </div>
  );
}
