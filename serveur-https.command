#!/bin/bash
# Serveur HTTPS local pour installer la PWA METANOÏA sur iPhone/iPad
cd "$(dirname "$0")"

CERT="certificats/10.10.10.166+2.pem"
KEY="certificats/10.10.10.166+2-key.pem"
PORT=8443

if [ ! -f "$CERT" ]; then
  echo "Certificat absent. Relancez la génération des certificats."
  exit 1
fi

IP=$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1)
echo ""
echo "  ╔══════════════════════════════════════════════╗"
echo "  ║   METANOÏA — SERVEUR HTTPS (iPhone/iPad)     ║"
echo "  ╚══════════════════════════════════════════════╝"
echo ""
echo "  Sur l'iPhone / iPad (même Wi-Fi), ouvrez Safari :"
echo ""
echo "        https://$IP:$PORT"
echo ""
echo "  1. Safari affiche un avertissement (certificat local) :"
echo "     touchez « Avancé » → « Accepter le risque »."
echo "  2. Bouton Partager → « Sur l'écran d'accueil »."
echo "  3. Installez aussi le profil certificat (voir GUIDE)."
echo ""
echo "  Ctrl+C pour arrêter."
echo ""

python3 - << PY
import http.server, ssl, os
os.chdir("$(pwd)")
ctx = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
ctx.load_cert_chain("$CERT", "$KEY")
httpd = http.server.HTTPServer(("0.0.0.0", $PORT), http.server.SimpleHTTPRequestHandler)
httpd.socket = ctx.wrap_socket(httpd.socket, server_side=True)
print("Serveur HTTPS actif sur https://$IP:$PORT")
httpd.serve_forever()
PY
