#!/bin/bash

# Script de post-déploiement
echo "🚀 Post-déploiement en cours..."

# Mettre à jour la date du sitemap
echo "📅 Mise à jour du sitemap..."
node generate-sitemap.js

# Vérifier que le sitemap est accessible
echo "🔍 Vérification du sitemap en ligne..."
curl -s -o /dev/null -w "%{http_code}" https://portofolio-eta-azure.vercel.app/sitemap.xml

echo "✅ Post-déploiement terminé!"
echo ""
echo "🔗 URLs importantes:"
echo "   Site principal: https://portofolio-eta-azure.vercel.app"
echo "   Sitemap: https://portofolio-eta-azure.vercel.app/sitemap.xml"
echo "   Robots.txt: https://portofolio-eta-azure.vercel.app/robots.txt"
echo ""
echo "📋 Actions à faire manuellement:"
echo "   1. Vérifier le sitemap dans Google Search Console"
echo "   2. Revalider le sitemap si nécessaire"
echo "   3. Vérifier l'indexation des pages"