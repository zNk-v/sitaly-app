import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/cgv")({
  head: () => ({
    meta: [
      { title: "CGV — Conditions Générales de Vente — Sitaly" },
      { name: "description", content: "Conditions générales de vente des prestations Sitaly : création et maintenance de sites internet." },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: "Conditions Générales de Vente — Sitaly" },
      { property: "og:description", content: "Les conditions générales de vente régissant les prestations de création et maintenance de sites internet par Sitaly." },
      { property: "og:url", content: "https://sitaly.fr/cgv" },
    ],
    links: [{ rel: "canonical", href: "https://sitaly.fr/cgv" }],
  }),
  component: CGV,
});

function CGV() {
  return (
    <LegalLayout title="Conditions Générales de Vente" updated="17 juin 2026">
      <p>
        Les présentes Conditions Générales de Vente (ci-après « CGV ») régissent les relations
        contractuelles entre <strong>Sitaly</strong>, Auto-Entrepreneur, dont le siège social est
        situé 25 allée des jardins, 91220, Brétigny-Sur-Orge, immatriculée au RCS de Evry sous le numéro SIRET n° 83384883100032
        (ci-après le « Prestataire »), et toute personne physique ou morale (ci-après le « Client »)
        souhaitant bénéficier de ses prestations.
      </p>

      <h2>1. Objet</h2>
      <p>
        Le Prestataire propose des prestations de création, d'hébergement et de maintenance de sites
        internet à destination des artisans, TPE et professionnels indépendants.
      </p>

      <h2>2. Devis et commande</h2>
      <p>
        Toute prestation fait l'objet d'un devis personnalisé. Le devis est valable 30 jours à
        compter de sa date d'émission. La signature du devis vaut acceptation sans réserve des
        présentes CGV.
      </p>

      <h2>3. Tarifs et modalités de paiement</h2>
      <p>
        Les prix sont indiqués en euros. Le service est proposé en location, sans frais
        d'installation, selon trois formules mensuelles : <strong>Visibilité 149 € HT/mois</strong>,{" "}
        <strong>Acquisition 349 € HT/mois</strong> et <strong>Performance 590 € HT/mois</strong>.
        Pour les formules Acquisition et Performance, le budget publicitaire Google n'est pas
        inclus. La TVA est applicable selon le régime du Prestataire (mention « TVA non applicable,
        art. 293 B du CGI » le cas échéant).
      </p>
      <p>
        Modalités : l'abonnement mensuel est prélevé chaque mois à terme à échoir, sans frais
        d'installation ni engagement de durée. En cas de retard de paiement, des pénalités égales à
        trois fois le taux d'intérêt légal, ainsi qu'une indemnité forfaitaire de recouvrement de
        40 € (article D.441-5 du Code de commerce), seront automatiquement appliquées.
      </p>

      <h2>4. Délais d'exécution</h2>
      <p>
        Le site est livré dans un délai de 48h à 7 jours ouvrés à compter de la réception de
        l'ensemble des éléments nécessaires (contenus, photos, accès). Les délais peuvent être
        ajustés en cas de demandes complémentaires du Client.
      </p>

      <h2>5. Obligations du Client</h2>
      <p>
        Le Client s'engage à fournir l'ensemble des informations et contenus nécessaires à la
        réalisation de la prestation, et garantit qu'il dispose des droits de propriété
        intellectuelle sur les éléments transmis.
      </p>

      <h2>6. Propriété intellectuelle</h2>
      <p>
        Le service étant fourni en location, le site, son code source et les éléments techniques
        développés par le Prestataire restent sa propriété exclusive pendant toute la durée de
        l'abonnement. Le Client dispose d'un droit d'usage personnel et non exclusif sur le site
        tant que l'abonnement est actif. Les contenus fournis par le Client (textes, photos, logo)
        restent sa propriété. Un rachat du site reste possible sur demande, aux conditions
        convenues entre les parties.
      </p>

      <h2>7. Maintenance et hébergement</h2>
      <p>
        L'abonnement mensuel inclut l'hébergement, les mises à jour techniques, les sauvegardes,
        les modifications mineures de contenu et le support. Il est conclu pour une durée
        indéterminée, sans engagement ni durée minimale, et résiliable par chacune des parties
        moyennant un préavis d'un mois, par e-mail à{" "}
        <a href="mailto:contact@sitaly.fr">contact@sitaly.fr</a>.
      </p>

      <h2>8. Droit de rétractation</h2>
      <p>
        Conformément à l'article L.221-3 du Code de la consommation, le droit de rétractation
        s'applique aux contrats conclus à distance avec les professionnels employant moins de cinq
        salariés et pour des prestations hors champ de leur activité principale. Le Client dispose
        alors d'un délai de <strong>14 jours</strong> pour se rétracter. Le droit de rétractation
        ne s'applique pas aux professionnels dans le cadre de leur activité principale.
      </p>

      <h2>9. Responsabilité</h2>
      <p>
        Le Prestataire est tenu à une obligation de moyens. Sa responsabilité ne saurait être
        engagée en cas de force majeure, de mauvaise utilisation du site par le Client, ou
        d'intervention de tiers. La responsabilité du Prestataire est en tout état de cause
        limitée au montant des sommes effectivement versées par le Client au titre de la
        prestation concernée.
      </p>

      <h2>10. Données personnelles</h2>
      <p>
        Le traitement des données personnelles est régi par la{" "}
        <a href="/politique-confidentialite">politique de confidentialité</a>.
      </p>

      <h2>11. Médiation et règlement des litiges</h2>
      <p>
        En cas de litige, le Client consommateur peut recourir gratuitement au service de médiation
        de la consommation. Conformément à l'article L.612-1 du Code de la consommation, la liste
        des médiateurs agréés est disponible sur :{" "}
        <a href="https://www.economie.gouv.fr/mediation-conso" target="_blank" rel="noopener noreferrer">
          economie.gouv.fr/mediation-conso
        </a>.
      </p>
      <p>
        Plateforme européenne de règlement en ligne des litiges :{" "}
        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
          ec.europa.eu/consumers/odr
        </a>.
      </p>

      <h2>12. Loi applicable</h2>
      <p>
        Les présentes CGV sont soumises au droit français. Tout litige relèvera de la compétence
        exclusive des tribunaux du ressort du siège social du Prestataire, sous réserve des
        dispositions impératives applicables aux consommateurs.
      </p>
    </LegalLayout>
  );
}
