import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles,
  Users,
  Star,
  MessageSquare,
  Bell,
  TrendingUp,
  Check,
  ArrowRight,
  Clock,
  Frown,
  Search,
  HelpCircle,
  Smartphone,
  LayoutDashboard,
  Wand2,
  ChevronRight,
} from "lucide-react";
import { SitalyLogo } from "@/components/SitalyLogo";
import { APP_URL, CALENDLY_URL } from "@/lib/config";

export const Route = createFileRoute("/sitaly-app")({
  head: () => ({
    meta: [
      { title: "Sitaly App — L'assistant digital des artisans" },
      {
        name: "description",
        content:
          "Gérez vos clients, obtenez plus d'avis Google, automatisez vos relances et développez votre activité. Gratuit pour commencer.",
      },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: "Sitaly App — L'assistant digital des artisans" },
      {
        property: "og:description",
        content:
          "L'application qui aide les artisans à gérer leur activité et leur présence en ligne. Créez votre compte gratuitement.",
      },
      { property: "og:url", content: "https://sitaly.fr/sitaly-app" },
    ],
    links: [{ rel: "canonical", href: "https://sitaly.fr/sitaly-app" }],
  }),
  component: SitalyAppLanding,
});

const SIGNUP_URL = `${APP_URL}/inscription`;
const LOGIN_URL = `${APP_URL}/connexion`;

function SitalyAppLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AppNav />
      <AppHero />
      <Problems />
      <Features />
      <HowItWorks />
      <Pricing />
      <MobileTeaser />
      <FinalCta />
      <AppFooter />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function AppNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <Link to="/" aria-label="Retour à sitaly.fr" className="flex items-center">
            <SitalyLogo />
          </Link>
          <span className="hidden rounded-full bg-accent/12 px-2.5 py-0.5 text-xs font-semibold text-accent sm:inline">
            App
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={LOGIN_URL}
            className="hidden text-sm font-medium text-muted-foreground hover:text-foreground sm:inline"
          >
            Se connecter
          </a>
          <a
            href={SIGNUP_URL}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
          >
            Créer mon compte
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function AppHero() {
  return (
    <section className="hero-bg relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Nouveau — l'application Sitaly pour artisans
            </div>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Votre assistant digital pour <span className="gradient-text">développer votre activité.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground sm:text-xl">
              Suivez vos clients et prospects, obtenez plus d'avis Google, laissez l'IA rédiger vos
              messages et ne perdez plus aucune opportunité. Pensé pour les artisans, pas pour les
              informaticiens.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-elevated transition hover:opacity-90"
              >
                Créer mon compte gratuitement
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#offres"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-base font-semibold shadow-soft transition hover:bg-secondary"
              >
                Voir les offres
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Gratuit pour commencer · Sans carte bancaire · Sans engagement
            </p>
          </div>
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}

/* Aperçu stylisé de l'application (mockup CSS, pas une capture) */
function DashboardMockup() {
  return (
    <div className="relative">
      <div className="rounded-2xl border border-border bg-card p-4 shadow-elevated sm:p-5">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="h-4 w-4 text-accent" />
            <span className="font-display text-sm font-bold">Tableau de bord</span>
          </div>
          <span className="rounded-full bg-success/15 px-2 py-0.5 text-xs font-medium text-success-foreground">
            Sitaly Pro
          </span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          <MockStat label="Prospects" value="12" />
          <MockStat label="Devis en cours" value="4" />
          <MockStat label="Avis Google" value="27 ★" />
        </div>
        <div className="mt-4 rounded-xl bg-secondary p-3">
          <p className="text-xs font-semibold text-muted-foreground">À FAIRE AUJOURD'HUI</p>
          <MockTask text="Relancer le devis de M. Diallo" tag="Devis" />
          <MockTask text="Demander un avis à Mme Laurent" tag="Avis" />
          <MockTask text="Rappeler le prospect de Brétigny" tag="Nouveau" />
        </div>
        <div className="mt-4 flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/5 p-3">
          <Wand2 className="h-4 w-4 shrink-0 text-accent" />
          <p className="text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">IA :</span> « Bonjour Mme Laurent, merci
            pour votre confiance ! Si notre intervention vous a satisfait… »
          </p>
        </div>
      </div>
      <div className="absolute -right-3 -top-3 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground shadow-elevated">
        Aperçu
      </div>
    </div>
  );
}

function MockStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-background p-3">
      <p className="font-display text-xl font-extrabold">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function MockTask({ text, tag }: { text: string; tag: string }) {
  return (
    <div className="mt-2 flex items-center justify-between rounded-lg bg-card px-3 py-2 shadow-soft">
      <span className="text-xs">{text}</span>
      <span className="rounded-full bg-accent/12 px-2 py-0.5 text-[10px] font-semibold text-accent">{tag}</span>
    </div>
  );
}

/* ---------------- PROBLÈMES ---------------- */
const PROBLEMS = [
  { icon: Clock, text: "« Je manque de temps pour tout suivre. »" },
  { icon: Frown, text: "« Je perds des prospects faute de relance. »" },
  { icon: Star, text: "« Je n'ose pas demander d'avis à mes clients. »" },
  { icon: Search, text: "« Je ne sais pas quoi améliorer sur internet. »" },
  { icon: HelpCircle, text: "« Les outils digitaux, c'est pas mon métier. »" },
];

function Problems() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <SectionHeader
        eyebrow="LE QUOTIDIEN"
        title="Votre métier, c'est le chantier. Pas la paperasse digitale."
        subtitle="Ces phrases, on les entend chez tous les artisans qu'on accompagne."
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {PROBLEMS.map((p) => (
          <div key={p.text} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <p.icon className="h-5 w-5 text-accent" />
            <p className="mt-3 text-sm font-medium">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- FONCTIONNALITÉS ---------------- */
const FEATURES = [
  {
    icon: Users,
    title: "Clients & prospects",
    text: "Toutes vos fiches au même endroit : coordonnées, statut, notes, historique. Fini les post-its et les devis oubliés.",
  },
  {
    icon: Star,
    title: "Avis Google",
    text: "Demandez un avis en un clic par SMS ou WhatsApp, avec le lien direct vers votre fiche. Et répondez avec l'aide de l'IA.",
  },
  {
    icon: Wand2,
    title: "Assistant IA",
    text: "Réponses aux avis, SMS, emails, publications réseaux, descriptions de chantier : l'IA rédige, vous validez.",
  },
  {
    icon: Bell,
    title: "Relances & rappels",
    text: "L'application vous dit chaque matin quoi faire : quel devis relancer, quel prospect rappeler, quel client remercier.",
  },
  {
    icon: TrendingUp,
    title: "Visibilité",
    text: "Suivez votre présence en ligne et recevez des recommandations concrètes pour vous améliorer.",
  },
  {
    icon: MessageSquare,
    title: "Simplicité totale",
    text: "Pensé pour être utilisé entre deux chantiers, depuis le téléphone. Pas de jargon, pas de formation nécessaire.",
  },
];

function Features() {
  return (
    <section className="border-y border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeader
          eyebrow="LA SOLUTION"
          title="Un seul outil pour piloter votre activité"
          subtitle="Sitaly App regroupe ce qui compte vraiment pour un artisan. Rien de plus, rien de moins."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/12">
                <f.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMMENT ÇA MARCHE ---------------- */
const STEPS = [
  {
    n: "1",
    title: "Créez votre compte",
    text: "30 secondes : votre nom d'entreprise, votre métier, c'est parti. Gratuit, sans carte bancaire.",
  },
  {
    n: "2",
    title: "Ajoutez vos clients",
    text: "Entrez vos contacts au fil de l'eau. L'application s'occupe de vous rappeler qui relancer et quand.",
  },
  {
    n: "3",
    title: "Laissez-vous guider",
    text: "Chaque jour, Sitaly vous montre les actions qui développent votre activité : relances, avis, messages.",
  },
];

function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <SectionHeader
        eyebrow="COMMENT ÇA MARCHE"
        title="Opérationnel en 5 minutes"
        subtitle="Pas d'installation, pas de configuration. Ça marche sur ordinateur, tablette et téléphone."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {STEPS.map((s) => (
          <div key={s.n} className="relative rounded-2xl border border-border bg-card p-6 shadow-soft">
            <span className="font-display text-4xl font-extrabold text-accent/25">{s.n}</span>
            <h3 className="mt-2 font-display text-lg font-bold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- OFFRES ---------------- */
const PLANS = [
  {
    name: "Free",
    price: "0€",
    tagline: "Pour découvrir",
    features: ["Profil entreprise", "CRM jusqu'à 20 fiches", "Demandes d'avis Google", "Aperçu de l'assistant IA"],
    cta: "Commencer gratuitement",
    highlight: false,
  },
  {
    name: "Starter",
    price: "19€",
    tagline: "Pour structurer son activité",
    features: [
      "CRM illimité",
      "Notes & suivi des devis",
      "Assistant IA (usage limité)",
      "Réponses aux avis assistées",
    ],
    cta: "Choisir Starter",
    highlight: false,
  },
  {
    name: "Pro",
    price: "49€",
    tagline: "L'offre complète du quotidien",
    features: [
      "Tout Starter, plus :",
      "Assistant IA complet",
      "Connexion fiche Google*",
      "Relances automatiques",
      "Statistiques & recommandations",
    ],
    cta: "Choisir Pro",
    highlight: true,
  },
  {
    name: "Business",
    price: "99€",
    tagline: "Pour les équipes",
    features: [
      "Tout Pro, plus :",
      "Plusieurs utilisateurs",
      "Gestion d'équipe",
      "Statistiques avancées",
      "Reporting",
    ],
    cta: "Choisir Business",
    highlight: false,
  },
];

function Pricing() {
  return (
    <section id="offres" className="border-y border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <SectionHeader
          eyebrow="OFFRES"
          title="Commencez gratuitement, évoluez quand vous en avez besoin"
          subtitle="Sans engagement. Vous changez d'offre ou arrêtez quand vous voulez."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border bg-card p-6 ${
                plan.highlight ? "border-accent shadow-elevated" : "border-border shadow-soft"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                  Recommandé
                </span>
              )}
              <h3 className="font-display text-lg font-bold">{plan.name}</h3>
              <p className="text-sm text-muted-foreground">{plan.tagline}</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-4xl font-extrabold">{plan.price}</span>
                <span className="text-sm text-muted-foreground">/mois</span>
              </div>
              <ul className="mt-5 flex-1 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={SIGNUP_URL}
                className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground shadow-soft hover:opacity-90"
                    : "border border-border bg-background hover:bg-secondary"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          *Connexion à la fiche Google Business en cours de validation par Google. Besoin d'un site
          internet ou d'un accompagnement complet ?{" "}
          <Link to="/" hash="offre" className="font-medium text-accent hover:underline">
            Découvrez les services Sitaly
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

/* ---------------- MOBILE ---------------- */
function MobileTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="grid items-center gap-10 rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-12 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/12 px-3 py-1 text-xs font-semibold text-accent">
            <Smartphone className="h-3.5 w-3.5" />
            Bientôt
          </div>
          <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
            Sitaly dans votre poche
          </h2>
          <p className="mt-3 text-muted-foreground">
            L'application mobile iOS et Android arrive. En attendant, Sitaly App fonctionne
            parfaitement depuis le navigateur de votre téléphone : ajoutez-la à votre écran
            d'accueil et utilisez-la comme une app.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <span className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-border bg-secondary px-6 py-3.5 text-sm font-semibold text-muted-foreground">
             App Store — bientôt
          </span>
          <span className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-border bg-secondary px-6 py-3.5 text-sm font-semibold text-muted-foreground">
            ▶ Google Play — bientôt
          </span>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA FINAL ---------------- */
function FinalCta() {
  return (
    <section className="hero-bg border-t border-border">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          Prêt à reprendre la main sur <span className="gradient-text">votre activité</span> ?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Créez votre compte gratuit. Ajoutez votre premier client. Le reste suit.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={SIGNUP_URL}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-elevated transition hover:opacity-90"
          >
            Créer mon compte gratuitement
            <ArrowRight className="h-5 w-5" />
          </a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-8 py-4 text-base font-semibold shadow-soft transition hover:bg-secondary"
          >
            Parler à un humain
            <ChevronRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function AppFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <div className="flex items-center gap-2">
          <SitalyLogo className="scale-90" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <Link to="/" className="hover:text-foreground">sitaly.fr</Link>
          <Link to="/mentions-legales" className="hover:text-foreground">Mentions légales</Link>
          <Link to="/cgv" className="hover:text-foreground">CGV</Link>
          <Link to="/politique-confidentialite" className="hover:text-foreground">Confidentialité</Link>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- UTILS ---------------- */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-bold tracking-widest text-accent">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-4 text-muted-foreground">{subtitle}</p>
    </div>
  );
}
