/* ==========================================================================
   LISTE DES ORDINATEURS EN VENTE
   ==========================================================================
   Pour AJOUTER un article :
   1. Copie tout un bloc { ... } ci-dessous (du "{" au "}," inclus)
   2. Colle-le juste avant le "];" tout en bas
   3. Remplace les textes entre guillemets " " par les infos du nouvel article
   4. Mets la photo (ex: "hp-elitebook.jpg") dans le même dossier que ce
      fichier sur GitHub, avec EXACTEMENT le même nom que dans "image"

   Pour RETIRER un article : supprime tout son bloc { ... },

   Pour MODIFIER un article (prix, stock...) : change juste le texte concerné.

   Ne touche pas aux guillemets, virgules ou accolades { } [ ] — seulement
   le texte à l'intérieur des guillemets " ".
   ========================================================================== */

const PRODUITS = [

  {
    // Photo : doit être un fichier présent dans le même dossier sur GitHub
    image: "dell-pro14.jpg",

    // Petit badge affiché sur la photo (ex: "Neuf en carton", "Occasion")
    badge: "Neuf en carton",

    // Affiché en haut à droite de la photo
    stock: "1 unité en stock",

    // Nom complet de l'ordinateur
    titre: "Dell Pro 14 Premium PA14250",

    // Référence — sert aussi au message envoyé sur WhatsApp
    reference: "CP-8893",

    // Prix affiché (écris-le exactement comme tu veux qu'il apparaisse)
    prix: "800 000 FCFA",

    // Liste des caractéristiques — une ligne par élément de la liste.
    // Tu peux mettre **avant et après** un mot pour le mettre en gras,
    // comme ici avec **Processeur :**
    caracteristiques: [
      "**Processeur :** Intel Core Ultra 5-238V (15e gén.), 2.10 GHz Turbo 4.7 GHz, 8 cœurs / 8 threads, 8 Mo cache, IA intégrée",
      "**Mémoire :** 32 Go (8533 MHz) — **Stockage :** 512 Go SSD",
      "**Écran :** 14\" Full HD (1920 x 1200), anti-reflet, 100% sRGB, vision large",
      "**Graphique :** Intel Arc Graphics",
      "**Autonomie :** jusqu'à 21h, recharge rapide",
      "**Connectique :** Wi-Fi 7, Bluetooth, 2x USB-C, 1x USB 3.2 (support HDMI)",
      "**Webcam** HD intégrée — adaptateur secteur inclus",
      "**OS :** Windows 11 Professionnel 64 bits authentique"
    ],

    // Ligne affichée en couleur juste avant le bouton de commande
    garantie: "Garantie vendeur — 12 mois"
  },

  {
    image: "dell14plus.jpg",
    badge: "Neuf en carton",
    stock: "1 unité en stock",
    titre: "Dell 14 Plus DB14250",
    reference: "CP-7244",
    prix: "1 000 000 FCFA",
    caracteristiques: [
      "**Processeur :** Intel Core Ultra 7-256V (15e gén.), 2.20 GHz Turbo 4.8 GHz, 8 cœurs / 8 threads, 12 Mo cache, IA intégrée",
      "**Mémoire :** 16 Go (8533 MHz) — **Stockage :** 512 Go SSD",
      "**Écran :** 14\" Full HD (1920 x 1200), anti-reflet, 100% sRGB, vision large",
      "**Graphique :** Intel Arc 140V (8 Go)",
      "**Autonomie :** jusqu'à 10h, recharge rapide",
      "**Connectique :** Wi-Fi 7, Bluetooth, 2x USB-C, 1x USB 3.2 (support HDMI)",
      "**Webcam** HD intégrée — adaptateur secteur inclus",
      "**OS :** Windows 11 Professionnel 64 bits authentique"
    ],
    garantie: "Garantie vendeur — 12 mois"
  },

    {
    // Photo : doit être un fichier présent dans le même dossier sur GitHub
    image: "lenovo-t16g1.jpg",

    // Petit badge affiché sur la photo (ex: "Neuf en carton", "Occasion")
    badge: "Neuf en carton",

    // Affiché en haut à droite de la photo
    stock: "1 unité en stock",

    // Nom complet de l'ordinateur
    titre: "LENOVO THINKPAD T16 GEN 1",

    // Référence — sert aussi au message envoyé sur WhatsApp
    reference: "CP-4B62",

    // Prix affiché (écris-le exactement comme tu veux qu'il apparaisse)
    prix: "400 000 FCFA",

    // Liste des caractéristiques — une ligne par élément de la liste.
    // Tu peux mettre **avant et après** un mot pour le mettre en gras,
    // comme ici avec **Processeur :**
    caracteristiques: [
      "**Processeur :** INTEL COREI7 -1265U 12Th GEN 10coeur/12CPU 1.8Ghz avec Turbo Boost à 4.8Ghz",
      "**Mémoire :** 16 Go — **Stockage :** 512 Go SSD",
      "**Écran :** 16/  avec résolution Full HD (1920 x 1200) Écran Anti-reflet LED FHD - ** Dalle IPS : couleurs lumineuses et angles de vision larges ",
      "**Graphique :** INTEL IRIS Xe GRAPHIC",
      "**Autonomie :** offrant jusqu'à 6H d'autonomie* (selon la coNfiguration et l'utilisation)",
      "**Connectique :** Wi-Fi 6 AC et Bluetooth 2 ports USB 3.0 ET HDMI et Type - c",
      "**Webcam** HD intégrée — adaptateur LENOVO",
      "**OS :** Windows 11 Professionnel 64 bits authentique"
    ],
    
      garantie: "Garantie vendeur — 12 mois"
    },
   ---------------------------------------------------------------------
     MODÈLE VIDE À COPIER POUR UN NOUVEL ARTICLE (décommente et remplis) :

  {
    image: "nom-de-la-photo.jpg",
    badge: "Neuf en carton",
    stock: "2 unités en stock",
    titre: "Nom complet de l'ordinateur",
    reference: "CP-XXXX",
    prix: "000 000 FCFA",
    caracteristiques: [
      "**Processeur :** ...",
      "**Mémoire :** ... — **Stockage :** ...",
      "**Écran :** ...",
      "**Graphique :** ...",
      "**Autonomie :** ...",
      "**Connectique :** ...",
      "**OS :** ..."
    ],
    garantie: "Garantie vendeur — 12 mois"
  },

  --------------------------------------------------------------------- */

];
