# World Tour

Site web responsive "World Tour" présentant des destinations de voyage inspirantes avec un slider vidéo en homepage, une page d'exploration de lieux et une galerie photo. Développé en HTML5, CSS3 et JavaScript vanilla pour une expérience immersive et mobile-first.


## Fonctionnalités

- **Homepage immersive** : Slider automatique avec 4 vidéos (plages, camping, road trip, nature) et contenus synchronisés, contrôlable par boutons de navigation.
- **Navigation responsive** : Menu hamburger mobile qui se transforme en navigation horizontale sur desktop, avec effets hover et sticky header.
- **Page Explorer** : Grille de 6 cartes destinations (Italie, Turquie, Thaïlande, Kenya, Pérou, Australie) avec icônes Font Awesome, photos Unsplash, périodes idéales et descriptions.
- **Page Galerie** : Grille de 6 photos de villes emblématiques (Norvège, Afrique du Sud, Espagne, Brésil, Corée du Sud, Canada) avec crédits photographes.
- **Design moderne** : Variables CSS personnalisées (--brand-tuscany, etc.), reset CSS, Google Fonts (Poppins), effets hover (scale, shadow), media queries pour tablette/desktop.
- **Accessibilité** : Rôles ARIA (banner, navigation, main), sémantique HTML, alt texts sur images.


## Structure du projet

```
/
├── index.html              # Homepage avec slider vidéo
├── src/
│   ├── pages/
│   │   ├── discover.html   # Page Explorer (6 destinations)
│   │   └── galery.html     # Page Galerie (6 photos)
│   ├── style/
│   │   ├── reset.css       # Reset CSS universel
│   │   ├── travel-header.css # Styles header/navigation
│   │   ├── travel.css      # Styles homepage slider
│   │   └── index.css       # Styles pages discover/galery (partagé)
│   ├── index.js            # JS commun : menu mobile + slider
│   ├── images/             # Icônes menu, photos destinations/galerie
│   └── videos/             # 4 vidéos background (beach.mp4, etc.)
├── planet-earth.jpg        # Favicon
└── README.md
```

## Utilisation

- **Navigation** : Cliquez sur le burger menu en mobile pour ouvrir/fermer.
- **Slider homepage** : Cliquez sur les points de navigation pour changer de slide (transition clip-path circulaire).
- **Pages** : Liens relatifs vers `/src/pages/discover.html` et `/src/pages/galery.html`.
- **Responsive** : Testé pour mobile (<768px), tablette (768-1023px), desktop (>1023px) avec flexbox et media queries.


## Technologies utilisées

| Technologie | Usage |
| :-- | :-- |
| HTML5 | Structure sémantique, vidéos, articles |
| CSS3 | Flexbox, variables CSS, animations (clip-path, transitions), media queries |
| JavaScript ES6+ | Événements DOM, toggle classes (menu/slider) |
| Font Awesome 6 | Icônes (location, calendar, file) via CDN |
| Google Fonts | Police Poppins |
| Unsplash | Images libres de droits avec crédits |
