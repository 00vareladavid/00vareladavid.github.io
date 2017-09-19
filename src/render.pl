#!/usr/bin/perl
use strict; use warnings; use v5.10;

#---------------------------------------
# Constants
my $baseDir = '..';
my $extension = '.html';

#---------------------------------------
# Input
my $filename = shift;

#---------------------------------------
# Main
die "No input specified." unless defined $filename;

if($filename =~ m[(.*)\.md]) {
  system(join ' ',("pandoc",
                   "-s",
                   "-o ${baseDir}/$1${extension}",
                   $filename));
} else {
  die "Invalid filename [$filename]: $!";
}

