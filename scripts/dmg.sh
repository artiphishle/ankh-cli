#/bin/sh

# DMG (create/mount/view/eject)
hdiutil create -format UDZO -directory archive.dmg
hdiutil attach archive.dmg
ls -lah /Volumes/archive/
hdiutil eject /Volumes/archive/
