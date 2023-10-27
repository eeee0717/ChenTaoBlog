import{_ as e,o as a,c as t,Q as o}from"./chunks/framework.a6386e6f.js";const r="/ChenTaoBlog/assets/Image.ad035c33.png",u=JSON.parse('{"title":"2-类型基础","description":"","frontmatter":{},"headers":[],"relativePath":"blog/codeBook/CLR/2-类型基础.md","filePath":"blog/codeBook/CLR/2-类型基础.md","lastUpdated":1698395830000}'),s={name:"blog/codeBook/CLR/2-类型基础.md"},n=o(`<h1 id="_2-类型基础" tabindex="-1">2-类型基础 <a class="header-anchor" href="#_2-类型基础" aria-label="Permalink to &quot;2-类型基础&quot;">​</a></h1><h2 id="_1、所有类型都从system-object派生" tabindex="-1">1、所有类型都从System.Object派生 <a class="header-anchor" href="#_1、所有类型都从system-object派生" aria-label="Permalink to &quot;1、所有类型都从System.Object派生&quot;">​</a></h2><p>new 操作符（CLR要求所有对象都通过new创建）</p><pre><code>  1、计算类型及其所有基类（实例所需字节数、每个对象包含**类型对象指针**和**同步块索引**）

  2、从托管堆中分配类型要求的字节数，并初始化内存、自己为0

  3、初始化对象的**类型对象指针**和**同步块索引**成员

  4、调用类型的构造器，初始化实例对象；最终调用Object构造器，该构造器什么都不做，只是return
</code></pre><hr><h2 id="_2、类型转换" tabindex="-1">2、类型转换 <a class="header-anchor" href="#_2、类型转换" aria-label="Permalink to &quot;2、类型转换&quot;">​</a></h2><p>·类型安全</p><p>使用is 和 as来转型</p><p>is检查对象是否兼容指定类型，只返回true或false，不抛出异常，返回false</p><p>as类似于强制转换，不抛出异常，如果转型不成功则返回null</p><hr><h2 id="_3、运行时的相互关系" tabindex="-1">3、运行时的相互关系 <a class="header-anchor" href="#_3、运行时的相互关系" aria-label="Permalink to &quot;3、运行时的相互关系&quot;">​</a></h2><p>P90</p><p><img src="`+r+'" alt="Image.png"></p>',14),_=[n];function c(l,d,i,p,h,m){return a(),t("div",null,_)}const f=e(s,[["render",c]]);export{u as __pageData,f as default};
