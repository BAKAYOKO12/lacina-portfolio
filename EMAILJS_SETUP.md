# 📧 Configuration EmailJS - Guide Complet

## 🎯 Objectif
Configurer EmailJS pour recevoir les emails de contact directement dans votre boîte mail.

## 📋 Étapes de Configuration

### 1. Créer un compte EmailJS
1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Cliquez sur "Sign Up" et créez un compte gratuit
3. Vérifiez votre email

### 2. Ajouter un Service Email
1. Dans le dashboard EmailJS, allez dans "Email Services"
2. Cliquez sur "Add New Service"
3. Choisissez votre fournisseur email :
   - **Gmail** (recommandé)
   - **Outlook**
   - **Yahoo**
   - Ou autre
4. Suivez les instructions pour connecter votre compte email
5. **Copiez le Service ID** (ex: `service_xxxxxxx`)

### 3. Créer un Template d'Email
1. Allez dans "Email Templates"
2. Cliquez sur "Create New Template"
3. Configurez le template comme ceci :

**Sujet de l'email :**
```
Nouveau message de contact - {{subject}}
```

**Contenu de l'email :**
```
Bonjour Lacina,

Vous avez reçu un nouveau message de contact :

Nom : {{from_name}}
Email : {{from_email}}
Sujet : {{subject}}

Message :
{{message}}

---
Ce message a été envoyé depuis votre portfolio.
```

4. **Copiez le Template ID** (ex: `template_xxxxxxx`)

### 4. Obtenir votre Public Key
1. Allez dans "Account" → "General"
2. **Copiez votre Public Key** (ex: `xxxxxxxxxxxxxxxxxxxxxxxx`)

### 5. Configurer le Code
1. Ouvrez le fichier `src/config/emailjs.ts`
2. Remplacez les valeurs par vos vraies clés :

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_xxxxxxx', // Votre Service ID
  TEMPLATE_ID: 'template_xxxxxxx', // Votre Template ID
  PUBLIC_KEY: 'xxxxxxxxxxxxxxxxxxxxxxxx', // Votre Public Key
  TO_EMAIL: 'blacina34@gmail.com' // Votre email de réception
};
```

## 🧪 Test
1. Redémarrez votre serveur de développement
2. Allez sur la page de contact
3. Envoyez un message de test
4. Vérifiez que vous recevez l'email

## 🚨 Limites Gratuites
- **200 emails/mois** avec le plan gratuit
- Suffisant pour un portfolio personnel

## 🔧 Dépannage
- Vérifiez que vos clés sont correctes
- Assurez-vous que votre service email est bien connecté
- Vérifiez la console du navigateur pour les erreurs

## 📞 Support
Si vous avez des problèmes, consultez la [documentation EmailJS](https://www.emailjs.com/docs/).
