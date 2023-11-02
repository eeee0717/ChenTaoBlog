import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.030aafca.js";const F=JSON.parse('{"title":"创建型模式——原型对象","description":"","frontmatter":{},"headers":[],"relativePath":"blog/codeBook/设计模式/创建型模式——原型对象.md","filePath":"blog/codeBook/设计模式/创建型模式——原型对象.md","lastUpdated":1698394224000}'),p={name:"blog/codeBook/设计模式/创建型模式——原型对象.md"},o=l(`<h1 id="创建型模式——原型对象" tabindex="-1">创建型模式——原型对象 <a class="header-anchor" href="#创建型模式——原型对象" aria-label="Permalink to &quot;创建型模式——原型对象&quot;">​</a></h1><h1 id="原型模式-prototype-pattern" tabindex="-1">原型模式（Prototype Pattern） <a class="header-anchor" href="#原型模式-prototype-pattern" aria-label="Permalink to &quot;原型模式（Prototype Pattern）&quot;">​</a></h1><p>原型模式是一种创建型设计模式，它使用现有对象作为原型，通过复制这些原型来创建新的对象。这种模式允许我们创建对象的副本，而无需暴露对象的创建逻辑。</p><h2 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h2><p>原型模式适用于以下情况：</p><ol><li>当一个系统需要独立于其产品的创建、组合和表示时。</li><li>当需要避免通过子类化来创建对象的情况。</li></ol><h2 id="优点和缺点" tabindex="-1">优点和缺点 <a class="header-anchor" href="#优点和缺点" aria-label="Permalink to &quot;优点和缺点&quot;">​</a></h2><p>优点：</p><ol><li>可以动态添加或删除产品的部件。</li><li>可以更好地控制对象的创建过程。</li><li>可以减少子类的数量，提高代码的可维护性。</li></ol><p>缺点：</p><ol><li>需要为每个具体原型类编写克隆方法。</li><li>克隆方法的实现可能会比较复杂。</li></ol><h2 id="代码示例" tabindex="-1">代码示例 <a class="header-anchor" href="#代码示例" aria-label="Permalink to &quot;代码示例&quot;">​</a></h2><div class="language-cs vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cs</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">System</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 原型类</span></span>
<span class="line"><span style="color:#F97583;">abstract</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Prototype</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">abstract</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Prototype</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Clone</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 具体原型类</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ConcretePrototype</span><span style="color:#E1E4E8;"> : </span><span style="color:#B392F0;">Prototype</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">private</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">_name</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ConcretePrototype</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        _name </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> name;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">override</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Prototype</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Clone</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ConcretePrototype</span><span style="color:#E1E4E8;">(_name);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Display</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        Console.</span><span style="color:#B392F0;">WriteLine</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">$&quot;Name: {</span><span style="color:#E1E4E8;">_name</span><span style="color:#9ECBFF;">}&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 客户端代码</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Program</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Main</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">args</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 创建原型对象</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">Prototype</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">prototype</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ConcretePrototype</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Prototype&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 克隆原型对象</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">Prototype</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> prototype.</span><span style="color:#B392F0;">Clone</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 显示原型和克隆对象的信息</span></span>
<span class="line"><span style="color:#E1E4E8;">        prototype.</span><span style="color:#B392F0;">Display</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        clone.</span><span style="color:#B392F0;">Display</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">System</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 原型类</span></span>
<span class="line"><span style="color:#D73A49;">abstract</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Prototype</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">abstract</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Prototype</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Clone</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 具体原型类</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ConcretePrototype</span><span style="color:#24292E;"> : </span><span style="color:#6F42C1;">Prototype</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">string</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">_name</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ConcretePrototype</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">string</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        _name </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> name;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">override</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Prototype</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Clone</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ConcretePrototype</span><span style="color:#24292E;">(_name);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Display</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        Console.</span><span style="color:#6F42C1;">WriteLine</span><span style="color:#24292E;">(</span><span style="color:#032F62;">$&quot;Name: {</span><span style="color:#24292E;">_name</span><span style="color:#032F62;">}&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 客户端代码</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Program</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Main</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">string</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">args</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 创建原型对象</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">Prototype</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">prototype</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ConcretePrototype</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Prototype&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 克隆原型对象</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">Prototype</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">clone</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> prototype.</span><span style="color:#6F42C1;">Clone</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 显示原型和克隆对象的信息</span></span>
<span class="line"><span style="color:#24292E;">        prototype.</span><span style="color:#6F42C1;">Display</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        clone.</span><span style="color:#6F42C1;">Display</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><p>在上面的示例中，我们定义了一个抽象的原型类 <code>Prototype</code>，其中包含一个抽象的克隆方法 <code>Clone</code>。然后，我们创建了一个具体的原型类 <code>ConcretePrototype</code>，它实现了克隆方法，并且可以克隆自身。最后，我们在客户端代码中创建了一个原型对象，并通过克隆方法创建了一个克隆对象，然后分别显示它们的信息。</p><p>这样，我们就可以通过原型模式创建新的对象，而无需关心对象的创建细节。</p>`,15),e=[o];function c(r,t,E,y,i,b){return n(),a("div",null,e)}const m=s(p,[["render",c]]);export{F as __pageData,m as default};
