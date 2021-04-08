# Getting Started with Pkg

Julia ships with a package manager: Pkg.
It installs and organizes packages.

The goal of this tutorial is to cover basics concepts needed to use Pkg effectively.

# The Pkg REPL Interface

There are two ways to use Pkg: a REPL interface and a standard API.
To use the REPL interface, enter the right square bracket `]` in the Julia REPL.
You should see the Pkg prompt `pkg>` replace the Julia prompt `julia>`.

An example of starting the Julia REPL from the shell and switching to the Pkg REPL:

```
[david@blue ~] $ julia
julia> 1 + 1
2

(v1.3) pkg> 
```

# Installing and Loading a Package

You can see available packages with the `status` command.

```
(v1.3) pkg> status
    Status `/tmp/depot/environments/v1.3/Project.toml`
  (empty environment)
```

You should see similar feedback on a fresh install.
`empty environment` means no packages are available.
  
To install a package, use the `add` command.
Install the `JSON` package:

```
(v1.3) pkg> add JSON
```

You should see feedback as Pkg installs the package.
Use `status` to confirm the operation was successful:

```
(v1.3) pkg> status
Status `/tmp/depot/environments/v1.3/Project.toml`
  [682c06a0] JSON v0.21.0
```

The feedback now shows `JSON` is available.
To use the package, return to the Julia REPL by pressing the `BACKSPACE` key.
You can now load `JSON` and begin using it:
  
```
julia> import JSON

julia> JSON.parse("{\"a_number\" : 5.0, \"an_array\" : [\"string\", 9]}")
Dict{String,Any} with 2 entries:
  "an_array" => Any["string", 9]
  "a_number" => 5.0
```

This is all you need to know if you quickly need to use a package:
1. `add` will make a package available
2. `import` will import a package.
  
# A closer look

What does it mean to _make a package available_?

A package can be imported only when two conditions are met:
1. The package is installed on the system
2. The package is declared as a dependency

Having to declare dependencies (condition 2) may seem unnecessarily restrictive.
Indeed, traditional package managers do not enforce this restriction.
This approach is initally simpler, but quickly results in the dereaded [dependency hell](https://en.wikipedia.org/wiki/Dependency_hell).
By enforcing this condition, Pkg not only avoids depenency hell, but also supports rich features such as reproducible environments.

This bears repeating: the set of installed packages is distinct from the set of importable packages.
To use Pkg effectively, allow it to automatically manage package installations, instead focus on declaring your intent.

# Basic operations

Let's try a few more operations.
Recall that our example environment already declares `JSON` as a dependency.

You can print the set of declared dependencies with `status`:
```
(demo) pkg> status
Status `/tmp/demo/Project.toml`
  [682c06a0] JSON v0.21.0
```

To declare more dependencies simply use `add` again:
```
(demo) pkg> add DataStructures
  Resolving package versions...
   Updating `~/demo/Project.toml`
  [864edb3b] + DataStructures v0.17.9
   Updating `~/demo/Manifest.toml`
  [864edb3b] + DataStructures v0.17.9
  [bac558e1] + OrderedCollections v1.1.0
```

Both `JSON` and `DataStructures` are now delcared as dependencies:
```
(demo) pkg> status
Status `~/demo/Project.toml`
  [864edb3b] DataStructures v0.17.9
  [682c06a0] JSON v0.21.0
```

To remove a declaration, use `rm`:
```
(demo) pkg> rm JSON
   Updating `~/demo/Project.toml`
  [682c06a0] - JSON v0.21.0
   Updating `~/demo/Manifest.toml`
  [682c06a0] - JSON v0.21.0
  [69de0a69] - Parsers v0.3.11
  [ade2ca70] - Dates 
  [a63ad114] - Mmap 
  [de0858da] - Printf 
  [4ec0a83e] - Unicode 

(demo) pkg> status
Status `~/demo/Project.toml`
  [864edb3b] DataStructures v0.17.9
```

`rm` will *not* uninstall a package from your system.
Instead, it will update the declarations to reflect that you no longer depend on that package.
Because of this property, Pkg operations tend to be fast: they usually only manipulate the declarations.

You now know how to add, remove, and print dependency declarations.

# Pkg Projects

So far, I've refered to a *set of dependency delcarations* in the abstract sense.
Pkg stores this set of declarations in a **project file**.

You may have noticed that the first line of `status` mentions some `Project.toml` file.
Let's take a look inside:
```
[david@blue ~/demo] $ cat Project.toml
[deps]
DataStructures = "864edb3b-99cc-5e75-8d2d-829cb0a9cfe8"
```

The `deps` table maps the name of a dependency to a unique identifier
A project file is simply [TOML formatted](https://github.com/toml-lang/toml/blob/master/README.md) file


A **project** is the basic unit of organization: it keeps track of the packages that you depend on.
When you need a package, declare it as a dependency with `add`.

Whenever you use Pkg, you usually interact with some project.
The project which is the target of Pkg commands called the **active project**.

---
This bears repeating: **the set of installed packages is distinct from the set of importable packages.**

# Projects v Package

# Package Structure

## Project file

## Manifest file


# Built-in help
