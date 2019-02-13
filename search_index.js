var documenterSearchIndex = {"docs": [

{
    "location": "AboutMe/#",
    "page": "About Me",
    "title": "About Me",
    "category": "page",
    "text": ""
},

{
    "location": "AboutMe/#David-Varela-1",
    "page": "About Me",
    "title": "David Varela",
    "category": "section",
    "text": ""
},

{
    "location": "AboutMe/#Contact-1",
    "page": "About Me",
    "title": "Contact",
    "category": "section",
    "text": "github\ntwitter"
},

{
    "location": "AboutMe/#Bio-1",
    "page": "About Me",
    "title": "Bio",
    "category": "section",
    "text": ""
},

{
    "location": "AboutMe/#Open-Source-Projects-1",
    "page": "About Me",
    "title": "Open Source Projects",
    "category": "section",
    "text": "Pkg"
},

{
    "location": "AboutMe/#CV-1",
    "page": "About Me",
    "title": "CV",
    "category": "section",
    "text": ""
},

{
    "location": "declarative_repl/#",
    "page": "Declarative or Imperative",
    "title": "Declarative or Imperative",
    "category": "page",
    "text": ""
},

{
    "location": "declarative_repl/#Declarative-or-Imperative?-[12-Feb-2019]-1",
    "page": "Declarative or Imperative",
    "title": "Declarative or Imperative? [12 Feb 2019]",
    "category": "section",
    "text": "An analysys if what has stabilized over many iterations. Now that the REPL for Pkg has stabilized,   I want to take the opportunity to reflect on some design decisions. A core part of the REPL is the specification of the behavior of each command.An example of the declarative specification for the rm operation in Pkg:[ :kind        => CMD_RM,\n  :name        => \"remove\",\n  :short_name  => \"rm\",\n  :handler     => do_rm!,\n  :arg_count   => 1 => Inf,\n  :arg_parser  => parse_pkg,\n  :option_spec => OptionDeclaration[\n      [:name => \"project\",  :short_name => \"p\", :api => :mode => PKGMODE_PROJECT],\n      [:name => \"manifest\", :short_name => \"m\", :api => :mode => PKGMODE_MANIFEST],\n  ],\n  :completions => complete_installed_packages,\n  :description => \"remove packages from project or manifest\",\n]"
},

{
    "location": "declarative_repl/#Advantages-1",
    "page": "Declarative or Imperative",
    "title": "Advantages",
    "category": "section",
    "text": "determine behavior at a glance\neasily tweak behavior "
},

{
    "location": "declarative_repl/#Declaration-Framework-1",
    "page": "Declarative or Imperative",
    "title": "Declaration Framework",
    "category": "section",
    "text": "reuse Julia\'s built in mechanisms\nJulia has expressive syntax for core data structures: symbols, pairs, enums\njust dispatch to spec = CommandSpec(;declaration...) and done!\ncombined: expressive and natural spec, no extra parsing required!\nsmall things: no positional data, labeled data, sensible defaults"
},

{
    "location": "declarative_repl/#Careful!-1",
    "page": "Declarative or Imperative",
    "title": "Careful!",
    "category": "section",
    "text": "declarative is nice, but it can easily turn your code brittle\nonly use declarative for well understood operations\nfor example options\nfor complex (as in search space) operations (e.g. completions) use pocket function\nprovide some room for flexibility \"handler\""
},

]}
