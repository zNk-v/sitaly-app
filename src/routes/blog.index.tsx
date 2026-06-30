import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { BLOG_POSTS, formatDate } from "@/data/blog-posts";
import { SitalyLogo } from "@/components/SitalyLogo";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog Sitaly — Plus de clients : site web, Google Ads & automatisation" },
      {
        name: "description",
        content:
          "Le blog Sitaly : guides pratiques pour artisans, indépendants et PME qui veulent générer plus de clients — site internet, référencement Google local, Google Ads et automatisation.",
      },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large" },
      { property: "og:title", content: "Blog Sitaly — Plus de clients : site web, Google Ads & automatisation" },
      {
        property: "og:description",
        content:
          "Guides pratiques pour générer plus de clients : site internet, référencement Google local, Google Ads et automatisation. Pour artisans, indépendants et PME de services.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sitaly.fr/blog" },
      { property: "og:site_name", content: "Sitaly" },
      { property: "og:locale", content: "fr_FR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Blog Sitaly — Plus de clients : site web, Google Ads & automatisation" },
      {
        name: "twitter:description",
        content:
          "Guides pratiques pour générer plus de clients : site internet, référencement Google local, Google Ads et automatisation. Pour artisans, indépendants et PME de services.",
      },
    ],
    links: [{ rel: "canonical", href: "https://sitaly.fr/blog" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Blog Sitaly",
          url: "https://sitaly.fr/blog",
          inLanguage: "fr-FR",
          description:
            "Guides pour générer plus de clients : site internet, référencement Google local, Google Ads et automatisation. Pour artisans, indépendants et PME de services.",
          publisher: {
            "@type": "Organization",
            name: "Sitaly",
            url: "https://sitaly.fr",
          },
          blogPost: BLOG_POSTS.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            description: p.metaDescription,
            datePublished: p.publishedAt,
            dateModified: p.updatedAt ?? p.publishedAt,
            url: `https://sitaly.fr/blog/${p.slug}`,
            author: { "@type": "Organization", name: "Sitaly" },
            articleSection: p.category,
            keywords: p.keyword,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Accueil", item: "https://sitaly.fr" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://sitaly.fr/blog" },
          ],
        }),
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BlogNav />
      <header className="border-b border-border bg-secondary/30">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">Le blog Sitaly</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Générer <span className="gradient-text">plus de clients</span>, quel que soit votre métier
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Site internet, référencement Google local, Google Ads et automatisation : les guides
            pratiques pour artisans, indépendants et PME de services qui veulent développer leur
            activité en 2026.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-6 sm:gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:shadow-elevated sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-accent/10 px-3 py-1 font-semibold text-accent">
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {formatDate(post.publishedAt)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readingTime}
                </span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="transition group-hover:text-accent"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-[15px] text-muted-foreground sm:text-base">{post.excerpt}</p>
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
              >
                Lire l'article
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-accent/30 bg-accent/5 p-8 text-center sm:p-10">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Prêt à générer plus de clients ?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Site internet, Google Ads et automatisation : à partir de 149€/mois en location,
            sans engagement. Réservez un appel gratuit de 15 minutes.
          </p>
          <Link
            to="/"
            hash="contact"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-elevated transition hover:opacity-90"
          >
            Réserver un appel
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </main>

      <BlogFooter />
    </div>
  );
}

function BlogNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center" aria-label="Sitaly — accueil">
          <SitalyLogo />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Accueil
          </Link>
          <Link
            to="/blog"
            className="text-sm font-medium text-foreground"
            activeProps={{ className: "text-sm font-medium text-foreground" }}
          >
            Blog
          </Link>
        </nav>
        <Link
          to="/"
          hash="contact"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
        >
          Réserver un appel
        </Link>
      </div>
    </header>
  );
}

function BlogFooter() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-10 text-center text-sm text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} Sitaly — Création de sites internet pour artisans.{" "}
        <Link to="/" className="font-medium text-foreground hover:text-accent">
          Retour à l'accueil
        </Link>
      </div>
    </footer>
  );
}
