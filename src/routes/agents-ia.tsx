import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone,
  Calendar,
  Check,
  ArrowRight,
  PhoneMissed,
  CalendarClock,
  MessageSquare,
  Star,
  Bot,
  Plug,
  ClipboardCheck,
  Sparkles,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { SitalyLogo } from "@/components/SitalyLogo";
import { CALENDLY_URL } from "@/lib/config";

/* Ombres bleutées très subtiles à la Wiza (≤ 32px de flou, ~6-8% d'opacité, teinte bleu-nuit) */
// Cartes & panneaux : pile en couches, flottement "ensoleillé" sans bordure lourde
const FRAME_SHADOW =
  "shadow-[0_32px_24px_-12px_rgba(20,40,92,0.08),0_6px_4px_-2px_rgba(20,40,92,0.03),0_3px_3px_rgba(20,40,92,0.03),0_1px_1px_rgba(20,40,92,0.04)]";
// Cartes standard
const CARD_SHADOW = "shadow-[0_16px_24px_-12px_rgba(20,40,92,0.07),0_2px_4px_rgba(20,40,92,0.04)]";
// Boutons & éléments de nav
const SOFT_SHADOW =
  "shadow-[0_2px_4px_rgba(20,40,92,0.08),0_1px_1px_rgba(20,40,92,0.04),0_0_0_1px_rgba(20,40,92,0.04)]";

const FAQ_ITEMS = [
  {
    q: "Je dois configurer quelque chose ?",
    a: "Non. Sitaly installe et paramètre chaque agent pour votre activité : numéro, messages, horaires, questions à poser. Vous nous confiez les informations une seule fois, on branche tout et l'agent tourne. Vous n'ouvrez aucun logiciel.",
  },
  {
    q: "L'agent va-t-il remplacer le contact humain ?",
    a: "Non. L'agent prend le relais quand vous ne pouvez pas répondre — appel manqué, soir, chantier, week-end — pour ne perdre aucune demande. Vous gardez la main et rappelez vos clients quand vous le souhaitez.",
  },
  {
    q: "Combien de temps pour le mettre en place ?",
    a: "Comptez quelques jours entre l'appel de cadrage et la mise en service. On part de vos besoins réels, on installe un premier agent, puis on en ajoute d'autres seulement s'ils vous font gagner du temps.",
  },
  {
    q: "Et si je veux arrêter ?",
    a: "Sans engagement, comme le reste de Sitaly. Vous pouvez retirer un agent à tout moment avec un simple préavis, sans frais ni durée minimale.",
  },
  {
    q: "Combien ça coûte ?",
    a: "Chaque agent se compose d'une installation unique puis d'un abonnement mensuel, selon le périmètre. On chiffre précisément après l'appel de cadrage, une fois vos besoins clairs. Pas de surprise : vous savez tout à l'avance.",
  },
];

export const Route = createFileRoute("/agents-ia")({
  head: () => ({
    meta: [
      { title: "Agents IA pour artisans & TPE | Sitaly" },
      {
        name: "description",
        content:
          "Des agents IA installés clé en main par Sitaly : standardiste qui ne rate plus un appel, relance des devis, réponse aux messages et prise de rendez-vous. Vous ne configurez rien, on branche tout. Réservez un appel.",
      },
      { property: "og:title", content: "Agents IA pour artisans & TPE | Sitaly" },
      {
        property: "og:description",
        content:
          "Des agents IA installés clé en main par Sitaly : ils répondent, qualifient, relancent et prennent les rendez-vous à votre place. Zéro configuration. Réservez un appel.",
      },
      { property: "og:url", content: "https://sitaly.fr/agents-ia" },
    ],
    links: [{ rel: "canonical", href: "https://sitaly.fr/agents-ia" }],
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
  component: AgentsIA,
});

function AgentsIA() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Problem />
      <Agents />
      <HowItWorks />
      <Benefits />
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  );
}

/* ---------------- NAV (flottante, blanche, sticky) ---------------- */
function Nav() {
  return (
    <div className="sticky top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4">
      <header
        className={`mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border border-border/70 bg-background/80 px-4 backdrop-blur-md sm:px-6 ${SOFT_SHADOW}`}
      >
        <Link to="/" className="flex items-center" aria-label="Sitaly — accueil">
          <SitalyLogo />
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          <a
            href="/#offre"
            className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground"
          >
            Offres
          </a>
          <span
            aria-current="page"
            className="rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent"
          >
            Agents IA
          </span>
          <a
            href="/#exemples"
            className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground"
          >
            Exemples
          </a>
          <Link
            to="/blog"
            className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground"
          >
            Blog
          </Link>
        </nav>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90 ${SOFT_SHADOW}`}
        >
          <Calendar className="h-4 w-4" />
          Réserver un appel
        </a>
      </header>
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="hero-bg relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pt-20 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <div
              className={`inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground ${SOFT_SHADOW}`}
            >
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Nouveau — Agents IA installés clé en main
            </div>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
              Un agent IA qui répond, qualifie et prend vos rendez-vous.{" "}
              <span className="gradient-text">Pendant que vous travaillez.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
              Sitaly installe des agents IA pour votre activité : ils décrochent quand vous êtes sur
              un chantier, relancent vos devis et répondent à vos messages.{" "}
              <strong className="text-foreground">Vous ne configurez rien</strong>, on branche tout.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 rounded-[8px] bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition hover:opacity-90 ${CARD_SHADOW}`}
              >
                <Calendar className="h-5 w-5" />
                Réserver un appel
              </a>
              <a
                href="#agents"
                className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-border bg-card px-6 py-3.5 text-base font-semibold text-foreground transition hover:bg-secondary"
              >
                Voir les agents
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            <ul className="mt-9 grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:text-[15px]">
              {["Zéro appel manqué", "Installé pour vous", "Sans engagement", "Réponses 24/7"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-2 text-foreground/90">
                    <Check className="h-4 w-4 shrink-0 text-success" />
                    {t}
                  </li>
                ),
              )}
            </ul>
          </div>

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
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-4 rounded-[16px] bg-gradient-to-br from-accent/15 to-primary/15 blur-2xl" />
      <div className={`relative overflow-hidden rounded-[8px] bg-card ${FRAME_SHADOW}`}>
        <div className="flex items-center gap-3 border-b border-border bg-secondary/60 px-5 py-4">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-accent/12 text-accent">
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-semibold">Agent standardiste</div>
            <div className="flex items-center gap-1.5 text-xs text-success">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              En ligne · répond en 2 sonneries
            </div>
          </div>
        </div>
        <div className="space-y-3 p-5">
          <div className="max-w-[80%] rounded-[8px] rounded-tl-none bg-secondary px-3.5 py-2.5 text-sm text-foreground/80">
            « Bonjour, avez-vous une dispo cette semaine pour un dépannage ? »
          </div>
          <div className="ml-auto max-w-[85%] rounded-[8px] rounded-tr-none bg-accent/10 px-3.5 py-2.5 text-sm text-foreground">
            « Bien sûr. Je vous propose jeudi 14h ou vendredi 9h. Quel créneau vous arrange ? »
          </div>
          <div className="max-w-[60%] rounded-[8px] rounded-tl-none bg-secondary px-3.5 py-2.5 text-sm text-foreground/80">
            « Jeudi 14h, parfait. »
          </div>
          <div className="flex items-center gap-2 rounded-[8px] border border-success/30 bg-success/10 px-3.5 py-2.5 text-sm font-medium text-foreground">
            <CalendarClock className="h-4 w-4 shrink-0 text-success" />
            Rendez-vous confirmé · jeudi 14h
          </div>
        </div>
      </div>

      <div
        className={`animate-float absolute -bottom-6 -left-6 hidden rounded-[8px] border border-border bg-card p-3 sm:flex sm:items-center sm:gap-3 ${CARD_SHADOW}`}
      >
        <div className="grid h-10 w-10 place-items-center rounded-full bg-success/15 text-success">
          <Phone className="h-5 w-5" />
        </div>
        <div>
          <div className="text-xs text-muted-foreground">Appel pris en charge</div>
          <div className="text-sm font-semibold">1 rendez-vous en plus</div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- PROBLEM ---------------- */
function Problem() {
  const items = [
    {
      icon: PhoneMissed,
      title: "Les appels manqués partent chez le concurrent",
      desc: "Sur un chantier, vous ne pouvez pas décrocher. 6 clients sur 10 ne rappellent jamais et appellent le suivant.",
    },
    {
      icon: Clock,
      title: "Les devis restent sans réponse",
      desc: "Un devis envoyé puis oublié, c'est une vente perdue. Sans relance, la moitié tombe dans l'oubli.",
    },
    {
      icon: MessageSquare,
      title: "Les messages s'accumulent le soir",
      desc: "Formulaires, WhatsApp, Instagram : répondre tard et vite fait donne une image bâclée à vos prospects.",
    },
  ];
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Le constat"
          title="Chaque demande sans réponse est un client perdu"
          subtitle="Vous faites votre métier. Pendant ce temps, les appels, devis et messages attendent — et vos clients, eux, n'attendent pas."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className={`rounded-[8px] border border-border bg-card p-7 transition hover:-translate-y-1 ${CARD_SHADOW}`}
            >
              <div className="grid h-12 w-12 place-items-center rounded-full bg-destructive/10 text-destructive">
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

/* ---------------- AGENTS ---------------- */
const AGENTS = [
  {
    icon: Bot,
    tag: "Le plus demandé",
    name: "Agent standardiste",
    desc: "Il décroche à votre place quand vous ne pouvez pas, répond aux questions courantes, qualifie la demande et propose un créneau.",
    outcome: "Plus aucun appel manqué",
  },
  {
    icon: CalendarClock,
    tag: "Agenda",
    name: "Agent prise de rendez-vous",
    desc: "Il propose vos créneaux disponibles, confirme le rendez-vous et envoie les rappels automatiquement. Fini les allers-retours.",
    outcome: "Un agenda qui se remplit seul",
  },
  {
    icon: ClipboardCheck,
    tag: "Ventes",
    name: "Agent relance de devis",
    desc: "Il relance vos devis en attente au bon moment, avec le bon message, et vous prévient dès qu'un client répond.",
    outcome: "Plus de devis signés",
  },
  {
    icon: MessageSquare,
    tag: "Messagerie",
    name: "Agent messages & réseaux",
    desc: "Il répond aux messages entrants — formulaire, WhatsApp, Instagram — qualifie le besoin et bascule vers un rendez-vous.",
    outcome: "Une réponse en quelques secondes",
  },
  {
    icon: Star,
    tag: "Réputation",
    name: "Agent avis Google",
    desc: "Il sollicite un avis après chaque intervention et répond aux avis reçus pour renforcer votre visibilité locale.",
    outcome: "Plus d'avis, mieux classé",
  },
  {
    icon: PhoneMissed,
    tag: "Rappel",
    name: "Agent appels manqués",
    desc: "Dès qu'un appel est manqué, il envoie un SMS automatique pour garder le contact et proposer de rappeler ou réserver.",
    outcome: "Le lien n'est jamais rompu",
  },
];

function Agents() {
  return (
    <section id="agents" className="hero-bg py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Les agents"
          title="Des agents qui travaillent à votre place"
          subtitle="On installe uniquement ceux qui vous sont utiles. Vous commencez avec un agent, vous en ajoutez d'autres quand ils vous font gagner du temps."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AGENTS.map((a) => (
            <div
              key={a.name}
              className={`flex flex-col rounded-[8px] border border-border bg-card p-7 transition hover:-translate-y-1 ${CARD_SHADOW}`}
            >
              <div className="flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-accent/12 text-accent">
                  <a.icon className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {a.tag}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold">{a.name}</h3>
              <p className="mt-2 flex-1 text-[15px] text-muted-foreground">{a.desc}</p>
              <div className="mt-5 flex items-center gap-2 border-t border-border pt-4 text-sm font-semibold text-accent">
                <Check className="h-4 w-4 shrink-0" />
                {a.outcome}
              </div>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
          Besoin d'un agent sur mesure pour votre métier ? On le conçoit avec vous lors de l'appel.
        </p>
      </div>
    </section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      icon: Phone,
      title: "On cadre vos besoins",
      desc: "Un appel de 20 min pour comprendre votre activité et choisir le ou les agents qui changent la donne pour vous.",
    },
    {
      n: "02",
      icon: Plug,
      title: "On installe et on branche",
      desc: "Numéro, messages, horaires, agenda : Sitaly paramètre l'agent pour vous et le connecte à vos outils. Vous ne touchez à rien.",
    },
    {
      n: "03",
      icon: ShieldCheck,
      title: "Ça tourne, on veille",
      desc: "L'agent répond dès le premier jour. On suit les résultats et on ajuste pour qu'il travaille toujours mieux.",
    },
  ];
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Clé en main"
          title="Vous ne configurez rien. On s'occupe de tout."
          subtitle="C'est toute la différence : vous n'achetez pas un logiciel à paramétrer, vous achetez un résultat installé et entretenu."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className={`relative rounded-[8px] border border-border bg-card p-7 ${CARD_SHADOW}`}
            >
              <div className="flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-accent/12 text-accent">
                  <s.icon className="h-6 w-6" />
                </div>
                <span className="font-display text-3xl font-extrabold text-accent/25">{s.n}</span>
              </div>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-[15px] text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- BENEFITS ---------------- */
function Benefits() {
  const items = [
    { v: "24/7", l: "Vos clients trouvent toujours une réponse" },
    { v: "0", l: "Appel manqué qui part chez le concurrent" },
    { v: "48h", l: "Pour un premier agent en service" },
    { v: "Sans", l: "Engagement, comme tout Sitaly" },
  ];
  return (
    <section className="bg-primary py-20 text-primary-foreground sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-accent">Ce que ça change</div>
          <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">
            Vous récupérez du temps et des clients
          </h2>
          <p className="mt-3 text-primary-foreground/70">
            Pendant que vos agents répondent, qualifient et relancent, vous restez concentré sur votre
            métier.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <div key={i.l} className="rounded-[8px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="font-display text-4xl font-extrabold text-accent">{i.v}</div>
              <div className="mt-2 text-sm text-primary-foreground/75">{i.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function Faq() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="FAQ"
          title="Les questions qu'on nous pose"
          subtitle="Et si vous en avez d'autres, on y répond de vive voix pendant l'appel."
        />
        <div className="mt-12 space-y-4">
          {FAQ_ITEMS.map((it) => (
            <div key={it.q} className={`rounded-[8px] border border-border bg-card p-6 ${SOFT_SHADOW}`}>
              <h3 className="font-semibold">{it.q}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{it.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCta() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 hero-bg" />
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          Prêt à ne plus rien laisser passer ?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Réservez un appel de 20 minutes. On identifie ensemble le premier agent à installer et ce
          qu'il vous rapporte. Sans engagement, ni démarchage.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 rounded-[8px] bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition hover:opacity-90 ${CARD_SHADOW}`}
          >
            <Calendar className="h-5 w-5" />
            Réserver un appel
          </a>
          <a
            href="tel:+33658683372"
            className="inline-flex items-center justify-center gap-2 rounded-[8px] border border-border bg-card px-8 py-4 text-base font-semibold text-foreground transition hover:bg-secondary"
          >
            <Phone className="h-5 w-5" />
            06 58 68 33 72
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-primary py-12 text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <SitalyLogo />
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/70">
            <Link to="/" className="transition hover:text-primary-foreground">Accueil</Link>
            <a href="/#offre" className="transition hover:text-primary-foreground">Offres</a>
            <Link to="/blog" className="transition hover:text-primary-foreground">Blog</Link>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="transition hover:text-primary-foreground">
              Réserver un appel
            </a>
          </nav>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-primary-foreground/60 sm:flex-row">
          <div>© {new Date().getFullYear()} Sitaly. Tous droits réservés.</div>
          <div className="flex flex-wrap justify-center gap-5">
            <Link to="/mentions-legales" className="hover:text-primary-foreground">Mentions légales</Link>
            <Link to="/politique-confidentialite" className="hover:text-primary-foreground">Confidentialité</Link>
            <Link to="/cgv" className="hover:text-primary-foreground">CGV</Link>
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
      <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.02] tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-muted-foreground sm:text-lg">{subtitle}</p>}
    </div>
  );
}
