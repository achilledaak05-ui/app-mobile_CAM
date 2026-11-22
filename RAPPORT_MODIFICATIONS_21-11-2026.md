# CENTRE APOSTOLIQUE METANOÏA
## APPLICATION MOBILE — RETOURS DÉVELOPPEMENT
### Débrief technique — 21 novembre 2026

Travail réalisé **avant la mise sur GitHub**, commit `50f095a` (parent : `fc92291`).
Copie intégrale de la différence : `modifications_21-11-2026.patch` (287 lignes).

---

## 1. INSCRIPTION — FORMULAIRE UTILISATEUR ✅

**Fichier :** `app.js`, fonction `screens.register()`

**Avant :**
```html
<div class="field"><label>Nom et prénom</label><input class="input" placeholder="Esther Kouassi" /></div>
```

**Après :**
```html
<div class="field"><label>Nom</label><input class="input" placeholder="Kouassi" autocomplete="family-name" /></div>
<div class="field"><label>Prénoms</label><input class="input" placeholder="Esther Akoua" autocomplete="given-name" /></div>
```

Deux champs distincts + attributs `autocomplete` (`family-name` / `given-name`) pour faciliter la gestion des profils et le remplissage automatique sur mobile.

---

## 2. PRIÈRE — ANIMATION ET SÉRIE ✅

**Fichiers :** `app.js`, `styles.css`

- Ajout de l'icône `flame` (SVG) dans le registre `I`.
- Ajout de `streak: { prie: 12, medite: 8 }` dans l'état global.
- Les cartes de suivi ont désormais un identifiant (`#track-prie`, `#track-medite`) et affichent un badge :
  `🔥 12 jours consécutifs`.
- Nouvelle fonction `fireAnimation(q)` : crée 16 particules de flammes avec positions, délais et tailles aléatoires, ajoute la classe `fire-active` à la carte, puis nettoie le DOM après 1,6 s.
- Handler `yesno` modifié :
  - mémorise la valeur précédente (`was`) ;
  - si l'utilisateur clique « Oui » et que ce n'était pas déjà « Oui », la série est incrémentée de 1 **une seule fois par jour** ;
  - déclenche `fireAnimation()` via `requestAnimationFrame` (après le re-render) ;
  - affiche un toast : « Série de 13 jours de prière ! ».

**CSS ajouté :** `.streak-badge`, `.track-card.fire-active`, `fireGlow`, `.fire-layer i`, `fireRise`. Le halo et les flammes utilisent le rouge `#E30613` et ses dérivés, conformément à la palette de la charte.

---

## 3. MÉDITATION — ANIMATION ET SÉRIE ✅

Même implémentation que la prière, appliquée à `data-q="medite"` :

- carte `#track-medite`, badge « 8 jours consécutifs » ;
- même `fireAnimation()` et même logique d'incrémentation ;
- toast « Série de 9 jours de méditation ! ».

Cohérence visuelle et fonctionnelle totale entre les deux fonctionnalités.

---

## 4. MUR DES TÉMOIGNAGES ✅

**Fichier :** `app.js`

- Nouveau tableau `testimonies` dans l'état (3 témoignages d'exemple : Nadège C., Koffi B., Aminata M.).
- Nouveau tableau `celebrated: []` pour suivre les « Amen » sans conflit avec le mur de prière (`joined`).
- Nouvel onglet dans le segment : `['War Room', 'Exaucements', 'Mur de prière', 'Mur des témoignages']`.
- Nouvelle branche `tab === 'Mur des témoignages'` dans `screens.priere()` :
  - champ « Publier un témoignage… » ;
  - même interface `.wall-post` que le mur de prière ;
  - compteur « X personnes célèbrent avec vous » ;
  - bouton « Célébrer avec vous » → « Amen, je célèbre ! » (icône `testimony`).
- Nouveau type de feuille `newTestimony` dans `sheet()` :
  - titre « Publier un témoignage » ;
  - description « Partagez ce que DIEU a fait pour vous. Votre témoignage sera visible par tous les membres. » ;
  - bouton « Publier le témoignage » → action `save-testimony`.
- Handler `save-testimony` : ajoute le témoignage en tête de liste avec les initiales de l'auteur, l'heure « À l'instant » et un toast de confirmation.

Objectif atteint : espace de partage et d'édification, visible par tous les membres.

---

## VÉRIFICATIONS

12 tests automatisés (Chrome headless) — tous réussis :

| Test | Résultat |
|------|----------|
| Champs Nom / Prénoms présents | ✅ |
| Cartes `#track-prie` / `#track-medite` présentes | ✅ |
| Séries initiales (12 / 8) | ✅ |
| Incrément après prière (13) | ✅ |
| Particules de feu créées (prière) | ✅ |
| Incrément après méditation (9) | ✅ |
| Particules de feu créées (méditation) | ✅ |
| Pas de double incrément le même jour | ✅ |
| Onglet « Mur des témoignages » présent | ✅ |
| Champ de publication présent | ✅ |
| 3 témoignages visibles | ✅ |
| Ajout d'un nouveau témoignage | ✅ |

---

## FICHIERS MODIFIÉS

| Fichier | Lignes ajoutées | Lignes retirées |
|---------|----------------|----------------|
| `app.js` | ~96 | ~12 |
| `styles.css` | 32 | 1 |
| `README.md` | 4 | 0 |
| **Total** | **129** | **14** |

---

## MISE EN LIGNE

- Commit : `50f095a` — *Retours 21/11 : Nom/Prénoms, animation feu + séries, Mur des témoignages*
- Push : `fc92291..50f095a  main -> main`
- Dépôt : https://github.com/achilledaak05-ui/app-mobile_CAM
- Site public : https://achilledaak05-ui.github.io/app-mobile_CAM/
- Vérifié : la version en ligne contient bien `Prénoms`, `fireAnimation`, `streak-badge` et `Mur des témoignages`.
