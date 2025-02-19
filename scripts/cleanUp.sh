#!/bin/sh 
#
# A little script to clean up the database files when doing a refresh.

find packs -type f -print | grep -i -e ldb -e log -e current -e lock -e manifest | grep -vi scurlock | grep -vi lockpicks | grep -vi G__Manifest | xargs rm
