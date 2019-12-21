@def title = "Getting Started With Pkg"
@def hascode = true

# Getting Started with Pkg

Getting started with Julia and ready to use existing Julia packages?
This tutorial should orient you in Julia's package ecosystem.

Julia ships with a built in package manager: Pkg.
It downloads, installs, and organizes Julia packages.

## The Pkg REPL Interface

There are two ways to use Pkg: a REPL interface and a standard API.
To enter the REPL interface,
  fire up the Julia REPL and press the right square bracket key (`]`).
You should see the Pkg prompt (`pkg>`) replace the Julia prompt (`julia>`).

## Installing a Single Package
You can see which packages are available with the `status` command.

```
(v1.3) pkg> status
    Status `/tmp/depot/environments/v1.3/Project.toml`
  (empty environment)
```

You should see similar feedback on a fresh install.
`empty environment` means there are no packages available.
  
To install a package, use the `add` command.
Try installing the `JSON` package:

```
(v1.3) pkg> add JSON
```

You should see feedback as Pkg installs the package.
Use `status` to confirm Pkg was successful:

```
(v1.3) pkg> status
    Status `/tmp/depot/environments/v1.3/Project.toml`
  [682c06a0] JSON v0.21.0
```

The feedback changed to show `JSON` is now available.
To use the package, return to the Julia REPL by pressing the `BACKSPACE` key.
You can now load the `JSON` module and begin using it:
  
```
julia> import JSON

julia> JSON.parse("{\"a_number\" : 5.0, \"an_array\" : [\"string\", 9]}")
Dict{String,Any} with 2 entries:
  "an_array" => Any["string", 9]
  "a_number" => 5.0
```
