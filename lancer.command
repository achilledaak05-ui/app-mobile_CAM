#!/bin/bash
cd "$(dirname "$0")"

PORT=8000
IP=$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null)

echo ""
echo "  ╔══════════════════════════════════════════════╗"
echo "  ║   METANOÏA — SERVEUR LOCAL                   ║"
echo "  ╚══════════════════════════════════════════════╝"
echo ""
echo "  Sur cet ordinateur :  http://localhost:$PORT"
if [ -n "$IP" ]; then
  echo "  Sur votre téléphone (même Wi-Fi) :"
  echo "                        http://$IP:$PORT"
else
  echo "  (Impossible de détecter l'IP Wi-Fi — vérifiez que"
  echo "   vous êtes connecté à un réseau.)"
fi
echo ""
echo "  Pour installer l'app sur le téléphone :"
echo "  ouvrez l'adresse dans le navigateur, puis menu"
echo "  « Partager » → « Sur l'écran d'accueil »."
echo ""
echo "  Appuyez sur Ctrl+C pour arrêter le serveur."
echo ""

python3 -m http.server $PORT
