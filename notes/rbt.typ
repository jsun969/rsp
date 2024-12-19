#set page(columns: 2)
#let redt(t) = text(fill: red)[#t]

= Red Black Tree
+ Root is always black
+ No two adjacent临近的 nodes are red
+ Any path between a node and any descendant (lower) node子孙 has the same number of black nodes

#let rotate-image-size = 96%
== Rotate
*Left*
#image("rbt/rotate/left.png", width: rotate-image-size)
*Right*
#image("rbt/rotate/right.png", width: rotate-image-size)

== Insert
=== Root
Change colour to black
=== Violated 2 & Uncle is #redt[*red*]
- Change parent and uncle to black
- Change grandparent to red
- Make grandparent n, and repeat
=== Violated 2 & Uncle is *black*
==== Left Left
rotate right, swap colours of parent and grandparent
==== Left Right
rotate left, then right, swap colours of new node and grandparent
==== Right Right
rotate left, swap colours of parent and grandparent
==== Right Left
rotate right, then left, swap colours of new node and grandparent
#image("rbt/insert.png")

== Delete
=== Simple Cases
- If a node is #redt[red] with nullptr child (no children)
- If a node has 1 child and *either* _the node_ OR _child_ (but not both) is #redt[red]
1. Delete node 2. Updated node #sym.arrow *black* (node replaced the deleted node)

=== Double Black
If both _node to be deleted_ AND _child_ are *black* (or the node has no children), the _updated node_ becomes *double black*

- n's _sibling_ is *black*
  - with at least one #redt[*red*] _child_
    + Rotate (as per insertion following path to #redt[red] _child_)
    + Recolour #redt[red] _child_ to *black*, _sibling_ to #redt[red]
  - with _all children_ *black*
    + Recolour sibling to #redt[red]
    + Push *black* up (*black* _parent_ #sym.arrow *double black*, #redt[red] _parent_ #sym.arrow *black*)
- n's _sibling_ is #redt[*red*]
  + Rotate
  + Recolour _Sibling_ to *black* _Parent_ to #redt[red]
