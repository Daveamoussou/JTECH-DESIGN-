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

   ⚠️ IMPORTANT : chaque bloc { ... } doit se terminer par "}," (accolade
   fermante + virgule) avant de commencer le bloc suivant "{". Si tu en
   oublies un, le fichier entier casse et AUCUN produit ne s'affiche.
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
    // ⚠️ Vérifie l'extension du fichier (.jpg, .jpeg ou .png) et fais
    // correspondre exactement le nom de la photo que tu vas uploader
    image: "lenovo-t16g1.jpg",
    badge: "Neuf en carton",
    stock: "1 unité en stock",
    titre: "Lenovo Thinkpad T16 Gen 1",
    reference: "CP-4B62",
    prix: "400 000 FCFA",
    caracteristiques: [
      "**Processeur :** Intel Core i7-1265U (12e gén.), 10 cœurs / 12 threads, 1.8 GHz Turbo 4.8 GHz",
      "**Mémoire :** 16 Go — **Stockage :** 512 Go SSD",
      "**Écran :** 16\" Full HD (1920 x 1200), anti-reflet LED, dalle IPS — couleurs lumineuses et angles de vision larges",
      "**Graphique :** Intel Iris Xe Graphics",
      "**Autonomie :** jusqu'à 6h (selon la configuration et l'utilisation)",
      "**Connectique :** Wi-Fi 6, Bluetooth, 2 ports USB 3.0, HDMI, Type-C",
      "**Webcam** HD intégrée — adaptateur Lenovo",
      "**OS :** Windows 11 Professionnel 64 bits authentique"
    ],
    garantie: "Garantie vendeur — 12 mois"
  },

  {
    image: "tour-gaming-asus.jpg",
    badge: "Neuf en carton",
    stock: "1 unité en stock",
    titre: "Tour Gaming by Asus",
    reference: "CP-2C7B",
    prix: "865 000 FCFA",
    caracteristiques: [
      "**Carte mère :** Asus Prime X570-P — **Processeur :** AMD Ryzen 7-5700X, 8 cœurs / 16 threads, 3.4 GHz Turbo 4.6 GHz",
      "**Mémoire :** 32 Go — **Stockage :** 1 To SSD",
      "**Carte graphique :** Nvidia GeForce RTX 3060, 12 Go GDDR6",
      "**Refroidissement :** Water-cooling AIO",
      "**Boîtier :** Lian-Li O11 Vision Compact",
      "**Connectique :** Wi-Fi, USB 3.0, 2x USB Type-C (support HDMI, DisplayPort, Ethernet)",
      "**OS :** Windows 11 Professionnel 64 bits authentique",
      "Unité centrale livrée seule (écran, clavier et souris non inclus)"
    ],
    garantie: "Garantie vendeur — 1 an"
  },

  {
    image: "hp-elitebook-640g9.jpg",
    badge: "Neuf soldes en sac",
    stock: "1 unité en stock",
    titre: "HP EliteBook 640 G9",
    reference: "CP-EA0B",
    prix: "285 000 FCFA",
    caracteristiques: [
      "**Processeur :** Intel Core i5 (12e gén.), 10 cœurs / 12 threads, cache 12 Mo, Turbo 4.4 GHz",
      "**Mémoire :** 16 Go — **Stockage :** 512 Go SSD",
      "**Écran :** 14\" Full HD (1920 x 1080), anti-reflet, 100% sRGB, vision large",
      "**Graphique :** Intel Iris Xe Graphics",
      "**Autonomie :** jusqu'à 7h, recharge rapide",
      "**Connectique :** Wi-Fi 6, Bluetooth 5.3, 3x USB 3.0 (support HDMI et USB-C)",
      "**Webcam** HD intégrée — adaptateur HP",
      "**OS :** Windows 11 Professionnel 64 bits authentique"
    ],
    garantie: "Garantie vendeur — 10 mois"
  },

  /* ---------------------------------------------------------------------
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
