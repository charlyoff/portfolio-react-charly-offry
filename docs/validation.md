# Validation du projet

## Build React

Commande utilisée :

```bash
npm run build
```

Résultat : build généré avec succès dans le dossier `dist`.

## Validation HTML W3C

Outil utilisé : W3C Nu HTML Checker.

Fichier testé : `dist/index.html`.

Résultat obtenu :

```json
{
  "version": "26.5.6",
  "messages": []
}
```

Le tableau `messages` vide signifie qu'aucune erreur HTML n'a été remontée par le validateur.

## Points de conformité

- Présence de `<!doctype html>`.
- Présence de `lang="fr"` sur la balise `<html>`.
- Présence des balises `meta charset`, `viewport` et `description`.
- Utilisation de textes alternatifs pour les images importantes.
- Structure responsive prévue pour ordinateur, tablette et mobile.
