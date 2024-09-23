(function() {var type_impls = {
"hir_expand":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-SpanMap%3CS%3E\" class=\"impl\"><a href=\"#impl-Clone-for-SpanMap%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for SpanMap&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; SpanMap&lt;S&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.81.0/src/core/clone.rs.html#172\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.81.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","hir_expand::span_map::ExpansionSpanMap"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-SpanMap%3CS%3E\" class=\"impl\"><a href=\"#impl-Debug-for-SpanMap%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for SpanMap&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.81.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","hir_expand::span_map::ExpansionSpanMap"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-SpanMap%3CS%3E\" class=\"impl\"><a href=\"#impl-Hash-for-SpanMap%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for SpanMap&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;mut __H</a>)<div class=\"where\">where\n    __H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,</div></h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.81.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.81.0/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.81.0/src/core/hash/mod.rs.html#238-240\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.81.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.81.0/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","hir_expand::span_map::ExpansionSpanMap"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-SpanMap%3CS%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-SpanMap%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for SpanMap&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;SpanMap&lt;S&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.81.0/src/core/cmp.rs.html#262\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","hir_expand::span_map::ExpansionSpanMap"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SpanMap%3CS%3E\" class=\"impl\"><a href=\"#impl-SpanMap%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; SpanMap&lt;S&gt;<div class=\"where\">where\n    SpanData&lt;S&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.empty\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">empty</a>() -&gt; SpanMap&lt;S&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a new empty [<code>SpanMap</code>].</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">finish</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>Finalizes the [<code>SpanMap</code>], shrinking its backing storage and validating that the offsets are\nin order.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.push\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">push</a>(&amp;mut self, offset: TextSize, span: SpanData&lt;S&gt;)</h4></section></summary><div class=\"docblock\"><p>Pushes a new span onto the [<code>SpanMap</code>].</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ranges_with_span_exact\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">ranges_with_span_exact</a>(\n    &amp;self,\n    span: SpanData&lt;S&gt;,\n) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = TextRange&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</div></h4></section></summary><div class=\"docblock\"><p>Returns all [<code>TextRange</code>]s that correspond to the given span.</p>\n<p>Note this does a linear search through the entire backing vector.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ranges_with_span\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">ranges_with_span</a>(\n    &amp;self,\n    span: SpanData&lt;S&gt;,\n) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = TextRange&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</div></h4></section></summary><div class=\"docblock\"><p>Returns all [<code>TextRange</code>]s whose spans contain the given span.</p>\n<p>Note this does a linear search through the entire backing vector.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.span_at\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">span_at</a>(&amp;self, offset: TextSize) -&gt; SpanData&lt;S&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the span at the given position.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.spans_for_range\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">spans_for_range</a>(\n    &amp;self,\n    range: TextRange,\n) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = SpanData&lt;S&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the spans associated with the given range.\nIn other words, this will return all spans that correspond to all offsets within the given range.</p>\n</div></details><section id=\"method.iter\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">iter</a>(&amp;self) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = (TextSize, SpanData&lt;S&gt;)&gt;</h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.merge\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">merge</a>(\n    &amp;mut self,\n    other_range: TextRange,\n    other_size: TextSize,\n    other: &amp;SpanMap&lt;S&gt;,\n)</h4></section></summary><div class=\"docblock\"><p>Merges this span map with another span map, where <code>other</code> is inserted at (and replaces) <code>other_range</code>.</p>\n<p>The length of the replacement node needs to be <code>other_size</code>.</p>\n</div></details></div></details>",0,"hir_expand::span_map::ExpansionSpanMap"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SpanMapper%3CSpanData%3CS%3E%3E-for-SpanMap%3CS%3E\" class=\"impl\"><a href=\"#impl-SpanMapper%3CSpanData%3CS%3E%3E-for-SpanMap%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; SpanMapper&lt;SpanData&lt;S&gt;&gt; for SpanMap&lt;S&gt;<div class=\"where\">where\n    SpanData&lt;S&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.span_for\" class=\"method trait-impl\"><a href=\"#method.span_for\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">span_for</a>(&amp;self, range: TextRange) -&gt; SpanData&lt;S&gt;</h4></section></div></details>","SpanMapper<SpanData<S>>","hir_expand::span_map::ExpansionSpanMap"],["<section id=\"impl-Eq-for-SpanMap%3CS%3E\" class=\"impl\"><a href=\"#impl-Eq-for-SpanMap%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for SpanMap&lt;S&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div></h3></section>","Eq","hir_expand::span_map::ExpansionSpanMap"],["<section id=\"impl-StructuralPartialEq-for-SpanMap%3CS%3E\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-SpanMap%3CS%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for SpanMap&lt;S&gt;</h3></section>","StructuralPartialEq","hir_expand::span_map::ExpansionSpanMap"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()