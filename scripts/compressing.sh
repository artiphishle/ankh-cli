#/bin/bash

# Manuals
man zip
man unzip
man gunzip
man tar

# ZIP (compress/extract)
zip -r archive.zip directory
unzip archive.zip

# TAR GZ (compress/exrtract)
tar -zcvf archive.tar.gz directory
tar -zxvf archive.tar.gz

# GZ (extract)
gunzip archive.gz

