import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/exemples/ks-artisan")({
  head: () => ({
    meta: [
      { title: "Exemple — Couvreur-Façadier en Essonne | Sitaly" },
      {
        name: "description",
        content:
          "Découvrez un exemple de site internet réalisé par Sitaly pour un couvreur-façadier en Essonne.",
      },
      { property: "og:title", content: "Exemple — Couvreur-Façadier en Essonne | Sitaly" },
      {
        property: "og:description",
        content: "Site vitrine artisan (couvreur, façadier) en Essonne réalisé par Sitaly.",
      },
      { property: "og:url", content: "https://sitaly.fr/exemples/ks-artisan" },
    ],
    links: [{ rel: "canonical", href: "https://sitaly.fr/exemples/ks-artisan" }],
  }),
  component: CouvreurExample,
});

function CouvreurExample() {
  const url = "https://znk-v.github.io/ks-artisan/";
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link
            to="/"
            hash="exemples"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux exemples
          </Link>
          <h1 className="hidden text-sm font-semibold sm:block">
            Exemple de réalisation : Couvreur & Façadier — Essonne
          </h1>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-soft transition hover:opacity-90 sm:text-sm"
          >
            Ouvrir dans un nouvel onglet
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </header>

      <div className="flex-1 bg-secondary">
        <iframe
          src={url}
          title="Exemple de site Sitaly — Couvreur-Façadier en Essonne"
          className="h-[calc(100vh-4rem)] w-full border-0"
          loading="lazy"
        />
      </div>
    </div>
  );
}
