import{_ as e,o as a,c as r,Q as o}from"./chunks/framework.030aafca.js";const b=JSON.parse('{"title":"Record","description":"","frontmatter":{},"headers":[],"relativePath":"blog/codeBook/CSharp/Record.md","filePath":"blog/codeBook/CSharp/Record.md","lastUpdated":1698559739000}'),c={name:"blog/codeBook/CSharp/Record.md"},t=o('<h1 id="record" tabindex="-1">Record <a class="header-anchor" href="#record" aria-label="Permalink to &quot;Record&quot;">​</a></h1><h2 id="class、struct与record的区别" tabindex="-1">class、struct与record的区别 <a class="header-anchor" href="#class、struct与record的区别" aria-label="Permalink to &quot;class、struct与record的区别&quot;">​</a></h2><h3 id="class" tabindex="-1">class <a class="header-anchor" href="#class" aria-label="Permalink to &quot;class&quot;">​</a></h3><p>class是我们日常开发中最常用的类型，属于<code>引用类型</code>，可以继承、支持多态，数据存放于堆上，属于引用类型。在进行两个对象的==比较时，<code>默认比较的是对象的引用地址是否相等</code>。</p><h3 id="struct" tabindex="-1">struct <a class="header-anchor" href="#struct" aria-label="Permalink to &quot;struct&quot;">​</a></h3><p>struct<code>不支持继承和多态</code>，但可以实现接口。struct存放于栈上，<code>属于值类型</code>，故常用于简单类型。==比较时则比较的是struct的<code>真实值数据</code>。</p><h3 id="record-1" tabindex="-1">record <a class="header-anchor" href="#record-1" aria-label="Permalink to &quot;record&quot;">​</a></h3><p>本身属于引用类型，实际上是通过class特殊处理实现其功能，在==或Equals的判断时，判断的是值；如果使用ReferenceEquals判断时会判断引用地址是否相同。</p><p><code>用来存放不可变的、简短的、需要值比较的数据</code></p><h3 id="使用场景" tabindex="-1">使用场景： <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景：&quot;">​</a></h3><ol><li>Web API（用于api返回的数据，通常作为一种一次性的传输型数据，不需要改变）</li><li>并发和多线程计算（作为不可变数据类型对于并行计算和数据共享十分安全。）</li><li>浅拷贝（通过使用with表达式，可以便捷的进行浅拷贝，而无需自己去实现克隆方法。）</li><li>大量数据基于值类型比较和复制的场景</li></ol>',11),s=[t];function d(l,i,h,n,u,_){return a(),r("div",null,s)}const f=e(c,[["render",d]]);export{b as __pageData,f as default};
