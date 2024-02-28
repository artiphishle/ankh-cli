# ZIP (compress/extract)
zip -r archive.zip directory
unzip archive.zip

# TAR GZ (compress/exrtract)
tar -zcvf archive.tar.gz directory
tar -zxvf archive.tar.gz

# GZ (extract)
gunzip archive.gz

# DMG (create/mount/view/eject)
hdiutil create -format UDZO -directory archive.dmg
hdiutil attach archive.dmg
ls -lah /Volumes/archive/
hdiutil eject /Volumes/archive/
