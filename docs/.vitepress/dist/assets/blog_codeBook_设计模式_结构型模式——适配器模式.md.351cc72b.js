import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.01af844e.js";const u=JSON.parse('{"title":"结构型模式——适配器模式","description":"","frontmatter":{},"headers":[],"relativePath":"blog/codeBook/设计模式/结构型模式——适配器模式.md","filePath":"blog/codeBook/设计模式/结构型模式——适配器模式.md","lastUpdated":1698394224000}'),l={name:"blog/codeBook/设计模式/结构型模式——适配器模式.md"},e=p(`<h1 id="结构型模式——适配器模式" tabindex="-1">结构型模式——适配器模式 <a class="header-anchor" href="#结构型模式——适配器模式" aria-label="Permalink to &quot;结构型模式——适配器模式&quot;">​</a></h1><p>适配器模式（Adapter Pattern）是一种结构型设计模式，它允许将一个类的接口转换成客户端所期望的另一个接口。适配器模式使得原本由于接口不兼容而不能一起工作的类可以协同工作。</p><h2 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h2><p>适配器模式适用于以下情况：</p><ol><li>当需要将一个类的接口转换成另一个接口时。</li><li>当需要复用已有的类，但其接口与系统要求的接口不一致时。</li></ol><h2 id="优点和缺点" tabindex="-1">优点和缺点 <a class="header-anchor" href="#优点和缺点" aria-label="Permalink to &quot;优点和缺点&quot;">​</a></h2><p>优点：</p><ol><li>可以让不兼容的类协同工作，提高代码的复用性。</li><li>可以将适配器类作为一个中间层，解耦了客户端和被适配者之间的依赖关系。</li></ol><p>缺点：</p><ol><li>增加了代码的复杂性，引入了额外的类和接口。</li><li>适配器模式可能会导致系统中类的数量增加。</li></ol><h2 id="代码示例" tabindex="-1">代码示例 <a class="header-anchor" href="#代码示例" aria-label="Permalink to &quot;代码示例&quot;">​</a></h2><div class="language-cs vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cs</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">System</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 目标接口</span></span>
<span class="line"><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ITarget</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Request</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 需要适配的类</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Adaptee</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">SpecificRequest</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        Console.</span><span style="color:#B392F0;">WriteLine</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Adaptee&#39;s specific request&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 适配器类</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Adapter</span><span style="color:#E1E4E8;"> : </span><span style="color:#B392F0;">ITarget</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">private</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Adaptee</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">_adaptee</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Adapter</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">Adaptee</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">adaptee</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        _adaptee </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> adaptee;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Request</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        _adaptee.</span><span style="color:#B392F0;">SpecificRequest</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 客户端代码</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Program</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Main</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">args</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 创建被适配者对象</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">Adaptee</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">adaptee</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Adaptee</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 创建适配器对象</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">ITarget</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">adapter</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Adapter</span><span style="color:#E1E4E8;">(adaptee);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 调用目标接口方法</span></span>
<span class="line"><span style="color:#E1E4E8;">        adapter.</span><span style="color:#B392F0;">Request</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">System</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 目标接口</span></span>
<span class="line"><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ITarget</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Request</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 需要适配的类</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Adaptee</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SpecificRequest</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        Console.</span><span style="color:#6F42C1;">WriteLine</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Adaptee&#39;s specific request&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 适配器类</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Adapter</span><span style="color:#24292E;"> : </span><span style="color:#6F42C1;">ITarget</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Adaptee</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">_adaptee</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Adapter</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">Adaptee</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">adaptee</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        _adaptee </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> adaptee;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Request</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        _adaptee.</span><span style="color:#6F42C1;">SpecificRequest</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 客户端代码</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Program</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Main</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">string</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">args</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 创建被适配者对象</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">Adaptee</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">adaptee</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Adaptee</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 创建适配器对象</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">ITarget</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">adapter</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Adapter</span><span style="color:#24292E;">(adaptee);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 调用目标接口方法</span></span>
<span class="line"><span style="color:#24292E;">        adapter.</span><span style="color:#6F42C1;">Request</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><p>在上面的示例中，我们定义了一个目标接口 <code>ITarget</code>，其中包含一个 <code>Request</code> 方法。然后，我们创建了一个需要适配的类 <code>Adaptee</code>，它有一个 <code>SpecificRequest</code> 方法。接着，我们创建了一个适配器类 <code>Adapter</code>，它实现了目标接口，并在其 <code>Request</code> 方法中调用了被适配者的 <code>SpecificRequest</code> 方法。</p><p>在客户端代码中，我们创建了被适配者对象 <code>adaptee</code>，然后通过适配器对象 <code>adapter</code> 调用目标接口的方法 <code>Request</code>。</p><p>这样，我们就可以通过适配器模式将一个类的接口转换成另一个接口，使得原本不兼容的类可以协同工作。</p>`,15),o=[e];function c(r,t,E,y,i,b){return n(),a("div",null,o)}const F=s(l,[["render",c]]);export{u as __pageData,F as default};
