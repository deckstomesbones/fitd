#!/bin/sh 

search_dir=packs
for entry in "$search_dir"/*
do
  directory=$(basename $entry)
  fvtt package unpack $directory
done
 