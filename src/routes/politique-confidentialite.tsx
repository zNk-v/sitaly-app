import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/politique-confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — Sitaly" },
      { name: "description", content: "Politique de confidentialité et protection des données personnelles (RGPD) de Sitaly." },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: "Politique de confidentialité — Sitaly" },
      { property: "og:description", content: "Comment Sitaly collecte, utilise et protège vos données personnelles conformément au RGPD." },
      { property: "og:url", content: "https://sitaly.fr/politique-confidentialite" },
    ],
    links: [{ rel: "canonical", href: "https://sitaly.fr/politique-confidentialite" }],
  }),
  component: PolitiqueConfidentialite,
});

function PolitiqueConfidentialite() {
  return (
    <LegalLayout title="Politique de confidentialité" updated="17 juin 2026">
      <p>
        La présente politique de confidentialité a pour objet d'informer les utilisateurs du site
        Sitaly sur la manière dont leurs données personnelles sont collectées et traitées,
        conformément au Règlement (UE) 2016/679 du 27 avril 2016 (RGPD) et à la loi française
        « Informatique et Libertés » du 6 janvier 1978 modifiée.
      </p>

      <h2>1. Responsable du traitement</h2>
      <p>
        Le responsable du traitement des données est <strong>Sitaly</strong>, auto-entrepreneur,
        dont le siège social est situé 25 allée des jardins, 91220, Brétigny-Sur-Orge, immatriculée sous le numéro SIRET
        83384883100032.
        <br />Contact : <a href="mailto:contact@sitaly.fr">contact@sitaly.fr</a>
      </p>

      <h2>2. Données collectées</h2>
      <p>Nous collectons les données suivantes :</p>
      <ul>
        <li><strong>Données d'identification</strong> : nom, prénom, adresse e-mail, numéro de téléphone (formulaire de contact / demande de devis).</li>
        <li><strong>Données professionnelles</strong> : entreprise, secteur d'activité, ville.</li>
        <li><strong>Données de connexion</strong> : adresse IP, type de navigateur, pages visitées, date et heure de connexion (à des fins de sécurité et de statistiques).</li>
      </ul>

      <h2>3. Finalités du traitement</h2>
      <ul>
        <li>Répondre aux demandes de contact et de devis ;</li>
        <li>Établir et exécuter les prestations contractuelles ;</li>
        <li>Assurer la facturation et le respect de nos obligations légales et comptables ;</li>
        <li>Réaliser des statistiques de fréquentation du site ;</li>
        <li>Vous adresser des informations commerciales (sous réserve de votre consentement préalable).</li>
      </ul>

      <h2>4. Bases légales</h2>
      <p>
        Les traitements reposent sur : votre <strong>consentement</strong> (formulaires, cookies non
        essentiels), l'<strong>exécution d'un contrat</strong> ou de mesures précontractuelles
        (devis, prestations), le respect d'une <strong>obligation légale</strong> (comptabilité,
        facturation) et notre <strong>intérêt légitime</strong> (sécurité, amélioration du site).
      </p>

      <h2>5. Destinataires des données</h2>
      <p>
        Vos données sont destinées exclusivement à Sitaly et à ses sous-traitants techniques
        (hébergeur, outil d'envoi d'e-mails, service de paiement, comptable). Aucune donnée n'est
        cédée ou vendue à des tiers à des fins commerciales.
      </p>

      <h2>6. Durée de conservation</h2>
      <ul>
        <li>Données de prospects / demandes de contact : <strong>3 ans</strong> à compter du dernier contact.</li>
        <li>Données clients (contrats, factures) : <strong>10 ans</strong> conformément aux obligations légales et comptables.</li>
        <li>Données de connexion : <strong>13 mois</strong> maximum.</li>
        <li>Cookies : voir la <a href="/cookies">politique cookies</a>.</li>
      </ul>

      <h2>7. Vos droits</h2>
      <p>
        Conformément au RGPD, vous disposez des droits suivants : droit d'accès, de rectification,
        d'effacement, de limitation, d'opposition, à la portabilité, et de définir le sort de vos
        données après votre décès. Vous pouvez exercer ces droits en écrivant à{" "}
        <a href="mailto:contact@sitaly.fr">contact@sitaly.fr</a>, en justifiant de votre identité.
      </p>
      <p>
        Vous disposez également du droit d'introduire une réclamation auprès de la{" "}
        <strong>Commission Nationale de l'Informatique et des Libertés (CNIL)</strong> :{" "}
        <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>.
      </p>

      <h2>8. Transfert de données hors UE</h2>
      <p>
        Certains de nos prestataires techniques (hébergement, e-mailing) peuvent être situés en
        dehors de l'Union européenne. Dans ce cas, des garanties appropriées (clauses contractuelles
        types de la Commission européenne) sont mises en place pour assurer un niveau de protection
        adéquat.
      </p>

      <h2>9. Sécurité</h2>
      <p>
        Sitaly met en œuvre les mesures techniques et organisationnelles appropriées pour garantir
        la sécurité et la confidentialité de vos données (chiffrement HTTPS, accès restreints,
        sauvegardes régulières).
      </p>
    </LegalLayout>
  );
}
