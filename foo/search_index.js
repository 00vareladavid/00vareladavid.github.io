var documenterSearchIndex = {"docs": [

{
    "location": "SystemdD-nspawn/#",
    "page": "Setting up ssh inside of systemd-nspawn",
    "title": "Setting up ssh inside of systemd-nspawn",
    "category": "page",
    "text": ""
},

{
    "location": "SystemdD-nspawn/#Setting-up-ssh-inside-of-systemd-nspawn-1",
    "page": "Setting up ssh inside of systemd-nspawn",
    "title": "Setting up ssh inside of systemd-nspawn",
    "category": "section",
    "text": ""
},

{
    "location": "SystemdD-nspawn/#Motivation-1",
    "page": "Setting up ssh inside of systemd-nspawn",
    "title": "Motivation",
    "category": "section",
    "text": "The adoption of systemd by the major linux distributions   means that systemd-nspawn is the most painless way to run a container. I do most of my work inside of containers;   which means multiple interactive processes per container. It is cumbersome to interact with a container through a single, dumb IO stream. In general, there are two solutions to this problem:run a multiplexer (e.g. tmux) after an ssh connection is made\nconnect to the container using multiple ssh connections; one connection per processBoth options have strengths and weaknesses. Two weaknesses of terminal multiplexers:   they consume key-bindings   and they add complexity to the IO stream. I recommend setting up ssh for the added flexibility   even if you choose to run a multiplexer."
},

{
    "location": "SystemdD-nspawn/#Instructions-1",
    "page": "Setting up ssh inside of systemd-nspawn",
    "title": "Instructions",
    "category": "section",
    "text": "Outside of the containermake sure the systemd-nspawn container is running: systemd-nspawn <...>Inside the containerinstall an ssh daemon: pacman -S openssh\nof course if you are not running arch, replace pacman with apt, yum, ...\nconfigure ssh:  a good starting point is this guide\ngenerate ssh keys locally\ntransfer keys to the container\nconfigure sshd\ndisable root login\ndisable password login\nenable the ssh daemon through systemd: systemctl enable sshd\ndo not forget to start the daemon!: systemctl start sshdOutside the containerlogin via ssh: ssh <username>@localhost"
},

{
    "location": "SystemdD-nspawn/#TODO-1",
    "page": "Setting up ssh inside of systemd-nspawn",
    "title": "TODO",
    "category": "section",
    "text": "enable systemd-nspawn automatically"
},

{
    "location": "dlog/#",
    "page": "dlog: the engine behind this blog",
    "title": "dlog: the engine behind this blog",
    "category": "page",
    "text": ""
},

{
    "location": "dlog/#dlog:-the-engine-behind-this-blog-1",
    "page": "dlog: the engine behind this blog",
    "title": "dlog: the engine behind this blog",
    "category": "section",
    "text": "dlog is a simple blog engine that integrates well with other linux tools."
},

{
    "location": "dlog/#goals-1",
    "page": "dlog: the engine behind this blog",
    "title": "goals",
    "category": "section",
    "text": "creating content should be no more complex than editing a markdown file\nintegrates well with tools following the UNIX philosophy\nlight payload\nminimal, but complete API\na focus on the readablility of the end product"
},

{
    "location": "dlog/#api-1",
    "page": "dlog: the engine behind this blog",
    "title": "api",
    "category": "section",
    "text": "new/remove: register or remove a post from dlog\'s database\nlive_demo: serve the a debuggable version of the site locally\nlive_prod: serve the end product locally\npublish/unpublish: mark/unmark posts to be included in the production payload\nedit: edit the markdown version of a post (with a text editor of the user\'s choice)\nprint: print out a line-oriented representation of dlog\'s database"
},

{
    "location": "dlog/#other-features-1",
    "page": "dlog: the engine behind this blog",
    "title": "other features",
    "category": "section",
    "text": "view logging output of internal commands (eg with less +F)\nlive, local view of site\nskeleton.css is used as a base, easy to configure from that point"
},

{
    "location": "dlog/#example-workflow-1",
    "page": "dlog: the engine behind this blog",
    "title": "example workflow",
    "category": "section",
    "text": "Edit markdown files while checking local mirror as a reference. When things look good, push to github. That\'s it!"
},

{
    "location": "dlog/#acknowledgements-1",
    "page": "dlog: the engine behind this blog",
    "title": "acknowledgements",
    "category": "section",
    "text": "skeleteon.css\nmithril\nmistletoe\nnix\nentr"
},

{
    "location": "#",
    "page": "This is a test",
    "title": "This is a test",
    "category": "page",
    "text": ""
},

{
    "location": "#This-is-a-test-1",
    "page": "This is a test",
    "title": "This is a test",
    "category": "section",
    "text": "foo\nbar"
},

]}
