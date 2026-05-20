# Guide d'utilisation du script d'indexation Google

## Fichiers créés pour l'indexation :
✅ `/public/services-dembele-innocent.html` - Page avec JobPosting Schema
✅ `/public/sitemap.xml` - Sitemap mis à jour
✅ Pages optimisées pour "DEMBELE Innocent" + "IBAM Burkina"

## Étapes pour utiliser le script d'indexation Google :

### 1. Déployer les nouveaux fichiers
```bash
npm run build:prod
vercel --prod
```

### 2. Vérifier que les pages sont accessibles :
- https://portofolio-eta-azure.vercel.app/services-dembele-innocent.html
- https://portofolio-eta-azure.vercel.app/dembele-innocent.html
- https://portofolio-eta-azure.vercel.app/sitemap.xml

### 3. Configuration Google Cloud (prérequis) :

#### A. Créer un projet Google Cloud :
1. Aller sur https://console.cloud.google.com/
2. Créer un nouveau projet
3. Activer les APIs :
   - Web Search Indexing API
   - Google Search Console API

#### B. Créer un compte de service :
1. Aller dans "IAM et administration" > "Comptes de service"
2. Créer un compte de service
3. Télécharger le fichier JSON des identifiants
4. Renommer le fichier : `service_account.json`

#### C. Ajouter le compte de service à Search Console :
1. Aller sur https://search.google.com/search-console/
2. Ajouter votre site : `https://portofolio-eta-azure.vercel.app`
3. Vérifier la propriété
4. Ajouter l'email du compte de service comme propriétaire

### 4. Installation du script d'indexation :

```bash
# Installer Node.js (version 20+)
node --version

# Installer le script globalement
npm i -g google-indexing-script

# Créer le dossier de configuration
mkdir ~/.gis
mv service_account.json ~/.gis/
```

### 5. Soumettre le sitemap à Search Console :
1. Dans Search Console, aller dans "Sitemaps"
2. Ajouter : `https://portofolio-eta-azure.vercel.app/sitemap.xml`
3. Attendre que Google traite le sitemap

### 6. Exécuter le script d'indexation :

```bash
# Indexer tout le domaine
gis portofolio-eta-azure.vercel.app

# Ou indexer une URL spécifique
gis https://portofolio-eta-azure.vercel.app/services-dembele-innocent.html
```

### 7. Vérification :
Le script va :
- Lire votre sitemap
- Trouver les pages avec JobPosting/BroadcastEvent
- Les soumettre à l'API d'indexation Google
- Afficher le statut de chaque URL

## Pages optimisées créées :

### 1. `/services-dembele-innocent.html` :
- ✅ Schema JobPosting (requis pour le script)
- ✅ Optimisée pour "DEMBELE Innocent"
- ✅ Mention "IBAM Burkina"
- ✅ Toutes les compétences techniques

### 2. `/dembele-innocent.html` :
- ✅ Schema Person
- ✅ Profil personnel optimisé
- ✅ Photo et description

## Résultat attendu :
- Indexation rapide (24-48h au lieu de semaines)
- Meilleure visibilité pour "DEMBELE Innocent"
- Apparition dans Google avec photo et description

## Important :
- Le script ne fonctionne QUE sur les pages avec JobPosting/BroadcastEvent
- Votre sitemap DOIT être soumis à Search Console
- Vous devez être propriétaire vérifié du site dans Search Console

## Commandes de test :
```bash
# Vérifier l'installation
gis --version

# Tester avec votre domaine
gis portofolio-eta-azure.vercel.app --dry-run
```