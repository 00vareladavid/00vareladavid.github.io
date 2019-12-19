@def title = "Julia Keyword Arguments"
@def hascode = true

# Julia Keyword Arguments

The quick brown fox jumped over the yellow [something](google.com).
The quick brown fox jumped over the yellow [something](google.com).
The quick brown fox jumped over the yellow [something](google.com).
The quick brown fox jumped over the yellow [something](google.com).
The quick brown fox jumped over the yellow [something](google.com).
The quick brown fox jumped over the yellow [something](google.com).

```julia
foo(x) = x + 1
function foo(x::Int)
    x = try x + 1
	catch err
	    @show err
		rethrow()
    end
end
```

The quick brown fox jumped over the yellow [something](google.com).
The quick brown fox jumped over the yellow [something](google.com).
The quick brown fox jumped over the yellow [something](google.com).
The quick brown fox jumped over the yellow [something](google.com).
The quick brown fox jumped over the yellow [something](google.com).

The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.

## Point One

The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.

## Point Two

The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
The quick brown fox jumped over the yellow something.
