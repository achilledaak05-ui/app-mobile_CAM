# METANOÏA — Transformer l'application en vraie application installable

L'application web est terminée. Voici comment la distribuer sur **Android**, **iPhone**, **iPad/tablettes** — sans passer par les stores.

---

## 🤖 ANDROID — fichier APK installable ✅

**Statut : compilation en cours** via Capacitor (Java 21 + SDK Android présents sur votre Mac).

### Une fois l'APK obtenu

Le fichier se trouve ici :
```
~/Documents/Metanoia-App/native/android/app/build/outputs/apk/debug/app-debug.apk
```

### Installer sur un téléphone ou une tablette Android

1. Copiez le fichier `.apk` sur le téléphone (câble USB, AirDrop, Google Drive, WhatsApp, e-mail…).
2. Sur le téléphone, ouvrez le fichier.
3. Android demande d'autoriser l'installation de sources inconnues → acceptez.
4. Installez. L'icône **METANOÏA** (violet + alpha rouge) apparaît sur l'écran d'accueil.

Alternative par câble, avec le SDK installé :
```bash
~/Library/Android/sdk/platform-tools/adb install -r chemin/vers/app-debug.apk
```

L'APK fonctionne **hors ligne** : toute l'application est embarquée dedans.

---

## 🍎 IPHONE / IPAD — trois solutions

### Solution A — PWA « Ajouter à l'écran d'accueil » (immédiate, sans store)

Depuis **Safari** sur l'iPhone :

1. Ouvrez l'adresse HTTPS de l'application.
2. Bouton **Partager** (carré avec flèche vers le haut).
3. **Sur l'écran d'accueil**.
4. L'icône METANOÏA apparaît, ouverture plein écran.

Le projet iOS Capacitor est prêt dans `native/ios/App/App.xcworkspace` si vous voulez ensuite une vraie app iOS.

### Solution B — Vraie app iOS (nécessite Xcode)

Xcode **n'est pas installé** sur ce Mac. Pour compiler une app iOS :

1. Installez **Xcode** depuis le Mac App Store (gratuit, ~7 Go, nécessite un Apple ID).
2. Ouvrez `native/ios/App/App.xcworkspace`.
3. Sélectionnez votre équipe de développement dans les réglages du projet (signing).
4. Choisissez un appareil ou un simulateur → **Run**.
5. Pour distribuer : *Archive* → *Distribute* → TestFlight ou Ad Hoc (appareils enregistrés par leur UDID).

Sans compte développeur Apple payant, TestFlight est limité (appareils enregistrés).

### Solution C — Service de build cloud

Des services (Codemagic, Bitrise, GitHub Actions macOS) peuvent compiler l'IPA à votre place, moyennant un compte développeur Apple pour la signature. Dites-moi si vous voulez que je prépare la configuration.

---

## 📦 Tablettes

- **Tablette Android** : le même APK s'installe et s'adapte à l'écran (l'application est responsive).
- **iPad** : utilisez la Solution A (PWA) ou la Solution B (build iOS).

---

## 🔄 Modifier l'application ensuite

1. Modifiez les fichiers à la racine (`index.html`, `styles.css`, `app.js`).
2. Lancez :
```bash
cd ~/Documents/Metanoia-App/native
./sync-assets.sh
npx cap sync
```
3. Recompilez l'APK :
```bash
cd android
./gradlew assembleDebug
```

---

## 📝 Notes techniques

- `appId` : `ci.metanoia.cam.app`
- `appName` : `METANOÏA`
- Version web : 1.0.0
- Android : `minSdk` Capacitor par défaut, `targetSdk`/`compileSdk` selon la version du SDK installé (36/37 disponibles).
- iOS : projet généré avec CocoaPods 1.17.
- Le dépôt GitHub reste en ligne comme sauvegarde du code ; il n'est plus nécessaire pour utiliser l'application native.
