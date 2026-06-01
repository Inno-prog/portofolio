#!/bin/bash

echo "🔍 Test d'optimisation SEO pour les images..."
echo ""

# Test 1: Vérifier que l'image existe
echo "1. Vérification de l'existence de l'image:"
if [ -f "public/assets/photo.png" ]; then
    echo "   ✅ photo.png existe"
else
    echo "   ❌ photo.png manquante"
fi

# Test 2: Vérifier la page dédiée à l'image
echo ""
echo "2. Vérification de la page dédiée:"
if [ -f "public/photo-innocent-dembele.html" ]; then
    echo "   ✅ Page photo-innocent-dembele.html créée"
else
    echo "   ❌ Page dédiée manquante"
fi

# Test 3: Vérifier le sitemap
echo ""
echo "3. Vérification du sitemap:"
if grep -q "photo-innocent-dembele.html" public/sitemap.xml; then
    echo "   ✅ Page photo incluse dans le sitemap"
else
    echo "   ❌ Page photo absente du sitemap"
fi

# Test 4: Vérifier le robots.txt
echo ""
echo "4. Vérification du robots.txt:"
if grep -q "photo.png" public/robots.txt; then
    echo "   ✅ Image autorisée dans robots.txt"
else
    echo "   ❌ Image non mentionnée dans robots.txt"
fi

# Test 5: Vérifier les métadonnées dans index.html
echo ""
echo "5. Vérification des métadonnées:"
if grep -q "portofolio-eta-azure.vercel.app/assets/photo.png" src/index.html; then
    echo "   ✅ URLs d'image mises à jour dans index.html"
else
    echo "   ❌ URLs d'image non mises à jour"
fi

echo ""
echo "📋 Résumé des optimisations SEO pour l'image:"
echo "   • Page dédiée avec métadonnées complètes"
echo "   • Données structurées Schema.org"
echo "   • Variantes du nom (majuscules/minuscules)"
echo "   • Inclusion dans le sitemap"
echo "   • Optimisation robots.txt"
echo "   • Attributs alt et title optimisés"
echo ""
echo "🚀 Prochaines étapes:"
echo "   1. Déployer les changements"
echo "   2. Soumettre le nouveau sitemap à Google"
echo "   3. Tester l'URL: https://portofolio-eta-azure.vercel.app/photo-innocent-dembele.html"