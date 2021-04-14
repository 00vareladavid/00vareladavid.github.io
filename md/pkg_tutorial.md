
Julia ships with a package manager: Pkg.
It installs and organizes packages.

The goal of this tutorial is to cover basics concepts needed to use Pkg effectively.

# The Pkg REPL Interface

There are two ways to use Pkg: a REPL interface and a standard API.
To use the REPL interface, enter the right square bracket `]` in the Julia REPL.
You should see the Pkg prompt `pkg>` replace the Julia prompt `julia>`.

Start the Julia REPL and switch to the Pkg REPL:

```
[david@blue ~] $ julia
julia> 1 + 1
2

(@v1.6) pkg>
```

# Installing and Loading a Package

You can see available packages with `status`:

```
(@v1.6) pkg> status
      Status `~/.julia/environments/v1.6/Project.toml` (empty project)
```

You should see similar feedback on a fresh install.
`empty project` means no packages are available for use.
  
To install a package, use `add`.
Install the `JSON` package:

```
(@v1.6) pkg> add JSON
```

You should see feedback as Pkg installs the package.
Use `status` to confirm the operation was successful:

```
(@v1.6) pkg> status
      Status `~/.julia/environments/v1.6/Project.toml`
  [682c06a0] JSON v0.21.1
```

The feedback shows `JSON` is available.
To use the package, return to the Julia REPL by pressing the `BACKSPACE` key.
You can now load `JSON` with `import` and begin using it:
  
```
julia> import JSON

julia> JSON.parse("""{"a_number" : 5.0, "an_array" : ["foo", 9]}""")
Dict{String, Any} with 2 entries:
  "an_array" => Any["foo", 9]
  "a_number" => 5.0
```

This is all you need to know if you quickly need to use a package:
1. `add` will make a package available
2. `import` will load the package in your current session
  
# Avoiding Dependency Hell

What does it mean to _make a package available_?

A package can be imported only when two conditions are met:
1. The package is installed on the system
2. The package is declared as a dependency

Having to declare dependencies (condition 2) may seem unnecessarily restrictive.
Indeed, traditional package managers do not enforce this restriction.
This approach is initally simpler, but quickly results in the dereaded [dependency hell](https://en.wikipedia.org/wiki/Dependency_hell).
By enforcing this condition, Pkg not only avoids depenency hell, but also supports features such as reproducible projects.

This bears repeating: **the set of installed packages is distinct from the set of importable packages.**
To use Pkg effectively, allow it to automatically manage package installations. Instead, focus on declaring intent.

# Basic operations

Let's try a few more operations.
Recall that our example project already declares `JSON` as a dependency.

You can print the set of declared dependencies with `status`:
```
(@v1.6) pkg> status
      Status `~/.julia/environments/v1.6/Project.toml`
  [682c06a0] JSON v0.21.1
```

To declare more dependencies simply use `add` again:
```
(@v1.6) pkg> add JSON
```

Both `JSON` and `DataStructures` are now delcared as dependencies:
```
(@v1.6) pkg> status
      Status `~/.julia/environments/v1.6/Project.toml`
  [864edb3b] DataStructures v0.18.9
  [682c06a0] JSON v0.21.1
```

To remove a declaration, use `rm`:
```
(@v1.6) pkg> rm JSON
```

```
(@v1.6) pkg> status
      Status `~/.julia/environments/v1.6/Project.toml`
  [864edb3b] DataStructures v0.18.9
```

`rm` will *not* uninstall a package from your system.
Instead, it will update the declarations to reflect that you no longer require that package.
Because of this property, Pkg operations tend to be fast: they usually only manipulate the declarations.

You now know how to add, remove, and print dependency declarations.

# Projects

So far, I've refered to a *set of dependency delcarations* in the abstract sense.
Pkg organizes sets of dependency delcarations into organizational units called **projects**.
When you enter the Pkg REPL, you automatically target the **default project**.
All the commands executed so far targeted the default project.

Initially, it is enough to use the default project.
Eventually, everyone reaches the point where dependency requirements conflict and
  they enter the dreaded [dependency hell](https://en.wikipedia.org/wiki/Dependency_hell).

For example, say you have some task which requires version 1 of a package, but
  a different task requires version 2.
Pkg allows you to meet both requirements by isolating each into a project.

Projects are encoded in your file system as **project files**.

Let's look at the current project file:
```
[deps]
DataStructures = "864edb3b-99cc-5e75-8d2d-829cb0a9cfe8"
```

The `deps` table maps the name of a dependency to a unique identifier.
A project file is a [TOML formatted](https://github.com/toml-lang/toml/blob/master/README.md) file
  which records the dependency requirements of a project.


# Packages

When you have declared all the dependcies you need

---

# todo

* Projects v Package
* Package Structure
* Project file
* Manifest file
* Built-in help
