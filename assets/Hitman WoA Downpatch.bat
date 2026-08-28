@echo off
Title HITMAN WoA Downpatcher
SET /P _manifest= Manifest ID: 
SET /P _username= Steam Username: 
call DepotDownloader.exe -app 1847520 -depot 1659041 -manifest "%_manifest%" -user "%_username%" -remember-password -dir ".\HITMANWOADOWNPATCH" -validate
rmdir ".\HITMANWOADOWNPATCH\.DepotDownloader" /s /q
echo 1659040 >> .\HITMANWOADOWNPATCH\steam_appid.txt
pause
