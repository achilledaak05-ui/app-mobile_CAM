# METANOÏA — Application mobile (prototype interactif) · Édition Premium Noir & Violet

Application mobile du **Centre Apostolique METANOÏA (CAM)**, conçue à partir :

- de la **Charte graphique institutionnelle — Édition 2026** (`~/Desktop/Charte Graphique CAM.pdf`) ;
- des **maquettes** (`~/Desktop/App Metanoïa — Maquettes.pdf`, 18 écrans) ;
- du guide fonctionnel et du business plan CAM – GeniusPay.

## Ouvrir l'application

Double-cliquez sur `index.html` (ou ouvrez-le dans Chrome / Safari).
Aucune installation, aucun serveur, aucune dépendance : tout est local (`index.html`, `styles.css`, `app.js`).

- Sur **ordinateur** : l'app apparaît dans une maquette de téléphone, avec un habillage de marque à gauche.
- Sur **mobile** : l'application occupe tout l'écran (responsive, `env(safe-area-inset)` pris en charge).

## Utiliser l'application SANS store (installation locale)

Aucun passage par l'App Store ni le Play Store n'est nécessaire. Trois méthodes :

### 1. Le plus simple — ouvrir le fichier
Copiez le dossier `Metanoia-App` sur le téléphone, puis ouvrez `index.html` avec Chrome (Android).
Sur iPhone, Safari n'ouvre pas confortablement un `file://` : utilisez la méthode 2.

### 2. Recommandé — serveur local + « Ajouter à l'écran d'accueil »
1. Sur l'ordinateur, **double-cliquez sur `lancer.command`**. Une fenêtre Terminal s'ouvre et affiche deux adresses.
2. Connectez le téléphone **au même Wi-Fi**.
3. Dans le navigateur du téléphone, ouvrez l'adresse `http://<IP-du-Mac>:8000`.
4. **iPhone (Safari)** : bouton Partager → **« Sur l'écran d'accueil »**.
   **Android (Chrome)** : menu ⋮ → **« Ajouter à l'écran d'accueil »** ou « Installer l'application ».

Résultat : une **icône METANOÏA** sur l'écran du téléphone, ouverture en plein écran, et fonctionnement **hors connexion** grâce au service worker (`sw.js`). Cela donne l'apparence d'une application native, sans store.

### 3. Pour un vrai APK (optionnel)
Avec Capacitor, on peut empaqueter le projet en APK Android et l'installer par câble USB ou en partageant le fichier — toujours sans Play Store. Dites-moi si vous voulez que je prépare cela.

## Brancher vos pages Facebook / Instagram / TikTok

Tout se règle au **même endroit** : l'objet `LINKS` en haut de `app.js`.

```js
const LINKS = {
  facebook:  'https://www.facebook.com/metanoia',
  instagram: 'https://www.instagram.com/metanoia',
  tiktok:    'https://www.tiktok.com/@metanoia',
  brochure:  ''
};
```

Remplacez simplement les trois URL par les **vraies adresses de vos pages** (et renseignez `brochure` avec le lien ou le fichier PDF de votre plaquette). Les boutons « Suivez-nous » de la page *À propos de nous* ouvriront directement vos comptes dans le navigateur.

Si vous me donnez vos vrais liens, je les intégrerai moi-même.

## Écrans implémentés

| # | Écran | Accès |
|---|-------|-------|
| 1 | Démarrage / onboarding | écran initial → « Commencer » |
| 2 | Connexion (avec affichage du mot de passe) | « Commencer » |
| 3 | Création de compte | « Créer un compte » |
| 4 | Accueil (verset du jour, suivi quotidien, accès rapide, prochain programme) | onglet Accueil |
| 5 | Notifications (filtres, « tout marquer comme lu ») | cloche / accueil |
| 6 | Agenda (calendrier + liste, filtres par catégorie) | « Voir l'agenda » |
| 7 | Détail d'un programme | clic sur un événement |
| 8 | Prédications (featured + liste + filtres) | onglet Prédications |
| 9 | Lecteur de prédication (vidéo/audio, progression, contrôles) | clic sur une prédication |
| 10 | Prière — War Room (sujets, cases « exaucé », feuille d'ajout) | onglet Prière |
| 11 | Prière — Exaucements (compteur, mur de reconnaissance) | segment Exaucements |
| 12 | Prière — Mur de prière (publications, « je me joins à vous ») | segment Mur de prière |
| 13 | Méditation — Plan annuel (anneau de progression 86 %, lectures, régularité) | onglet Méditation |
| 14 | Méditation — Mon plan personnel (calendrier, passages lus) | segment Mon plan personnel |
| 15 | Faire un don (montants rapides, montant libre, moyens de paiement, confirmation) | onglet Don |
| 16 | Pointage par QR Code (bonus issu du guide fonctionnel) | Accueil → « Pointage QR » |
| 17 | À propos de nous (vision, mission, valeurs, réseaux sociaux) | Profil → « À propos de nous » |
| 18 | Mon profil (informations privées, paramètres) | via l'avatar |

## Animations

- Transition des écrans (glissement horizontal / retour) et apparition échelonnée des cartes.
- Apparatus de la barre d'onglets avec indicateur animé.
- Anneau de progression de lecture animé, ligne de scan QR en boucle.
- Effets « ripple » sur les boutons, feuille modale glissante, toasts de confirmation.
- Respect de `prefers-reduced-motion` (animations désactivées si demandé par le système).

## Direction artistique — Édition Premium

Le thème privilégie la **profondeur au blanc** : fonds violet profond / anthracite au lieu de surfaces blanches, cartes en verre dépoli translucide avec liseré lavande, accents rouge « bijou » avec halo lumineux, boutons en dégradés violet/rouge avec reflets internes, grain de texture très fin, typos serif pour les accroches.

Cette orientation est **conforme à la charte** : elle s'appuie sur la palette secondaire (`#321A63`, `#B9A2EB`, `#242424`) et sur l'association officielle « Blanc et lavande sur anthracite » (page 26 — composition premium). Le violet, le rouge, le noir et le blanc restent les quatre couleurs fondatrices.

## Conformité à la charte graphique

- **Couleurs** : violet METANOÏA `#6A40C4` (dominante), rouge Alpha `#E30613` (accent 5 %), noir `#000000`, blanc `#FFFFFF`, plus la palette secondaire (`#321A63`, `#B9A2EB`, `#EEE8FA`, `#A80416`, `#242424`, `#FAFAFA`).
- **Hiérarchie chromatique** : version claire (55 % neutres / 30 % violet / 10 % noir / 5 % rouge) et version **premium** livrée ici (dominante violet profond + anthracite, blanc réservé au texte et aux accents, rouge en signature).
- **Contrastes** : violet sur blanc 6,7:1, blanc sur violet 6,7:1, rouge sur blanc 4,8:1 (WCAG AA). Le rouge n'est jamais utilisé sur du violet pour du texte de lecture.
- **Typographie** : `Avenir Next` (avec repli système) pour toute l'interface ; `The Seasons` (repli serif) réservé au logotype, aux verses et aux grandes accroches.
- **Composition** : alignement à gauche des textes, centrage réservé aux titres courts/citations, interlignage 140–160 % pour les paragraphes, espacement accentué des petites capitales, compositions aérées et sobres.
- **Règles du logo** : le tracé officiel du monogramme alpha n'étant pas fourni dans les PDF, un **α indicatif** est utilisé à titre de placeholder. Remplacez-le par le fichier vectoriel officiel (SVG) dès que vous l'avez, sans recomposition typographique.

## Pour aller plus loin

Ce prototype est une application web mobile autonome. Si vous souhaitez une **application native** (React Native / Expo, iOS et Android) avec les mêmes écrans et la même identité visuelle, je peux la convertir — dites-le-moi.
