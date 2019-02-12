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
    "location": "AboutMe/#Projects-1",
    "page": "About Me",
    "title": "Projects",
    "category": "section",
    "text": "foo\nbar\nbaz"
},

{
    "location": "declarative_repl/#",
    "page": "Declarative or Imperative",
    "title": "Declarative or Imperative",
    "category": "page",
    "text": ""
},

{
    "location": "declarative_repl/#Declarative-or-Imperative-[12-Feb-2019]-1",
    "page": "Declarative or Imperative",
    "title": "Declarative or Imperative [12 Feb 2019]",
    "category": "section",
    "text": "Now that the REPL for Pkg has stabilized,   I want to take the opportunity to analyze some design decisions. A core part of the REPL is the specification for the behavior of each command.An example of the declarative specification for the rm operation in Pkg:[ :kind        => CMD_RM,\n  :name        => \"remove\",\n  :short_name  => \"rm\",\n  :handler     => do_rm!,\n  :arg_count   => 1 => Inf,\n  :arg_parser  => parse_pkg,\n  :option_spec => OptionDeclaration[\n      [:name => \"project\",  :short_name => \"p\", :api => :mode => PKGMODE_PROJECT],\n      [:name => \"manifest\", :short_name => \"m\", :api => :mode => PKGMODE_MANIFEST],\n  ],\n  :completions => complete_installed_packages,\n  :description => \"remove packages from project or manifest\","
},

]}
