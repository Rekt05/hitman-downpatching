#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

read -r -p "Manifest ID: " manifest
read -r -p "Steam Username: " username

if [[ -f ./DepotDownloader ]]; then
  chmod +x ./DepotDownloader
  dd=./DepotDownloader
else
  echo "DepotDownloader not found in this folder. Download the Linux zip from the DepotDownloader releases page and unzip it here."
  exit 1
fi

"$dd" -app 1847520 -depot 1659041 -manifest "$manifest" -user "$username" -remember-password -dir "./HITMANWOADOWNPATCH" -validate
rm -rf "./HITMANWOADOWNPATCH/.DepotDownloader"
mkdir -p "./HITMANWOADOWNPATCH/Retail"
printf '1659040\n' > "./HITMANWOADOWNPATCH/Retail/steam_appid.txt"
