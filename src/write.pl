#!/usr/bin/perl
use strict; use warnings; use v5.10;

my $file = 'index.md';

system("vim $file");
system("./render.pl $file");

