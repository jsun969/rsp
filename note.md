# Note

## P vs NP

```text
                 +-------------------------+
                 |                         |
                 |                         |
 +---------------|--------------+          |
 |               |              |          |
 |   +----+      |              |          |
 |   | P  |  NP  | NP-Complete  |  NP-Hard |
 |   +----+      |              |          |
 |               |              |          |
 +---------------|--------------+          |
                 |                         |
                 |                         |
                 +-------------------------+
```

| Type                     | Discovery          | Verification       | Note                                            |
| ------------------------ | ------------------ | ------------------ | ----------------------------------------------- |
| P                        | Polynomial         | Polynomial         |                                                 |
| NP                       | Exponential        | Polynomial         |                                                 |
| NP-Complete              | Exponential        | Polynomial         | Can be reduced to 3SAT                          |
| NP but not P/NP-Complete | Exponential        | Polynomial         | e.g. Topological Sorting, Integer Factorization |
| NP-Hard                  | Exponential or N/A | Exponential or N/A |                                                 |
