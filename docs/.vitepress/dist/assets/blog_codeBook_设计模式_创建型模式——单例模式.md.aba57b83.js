import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.a6386e6f.js";const F=JSON.parse('{"title":"创建型模式——单例模式","description":"","frontmatter":{},"headers":[],"relativePath":"blog/codeBook/设计模式/创建型模式——单例模式.md","filePath":"blog/codeBook/设计模式/创建型模式——单例模式.md","lastUpdated":null}'),p={name:"blog/codeBook/设计模式/创建型模式——单例模式.md"},o=l(`<h1 id="创建型模式——单例模式" tabindex="-1">创建型模式——单例模式 <a class="header-anchor" href="#创建型模式——单例模式" aria-label="Permalink to &quot;创建型模式——单例模式&quot;">​</a></h1><p>单例模式（Singleton Pattern）是一种创建型设计模式，它确保一个类只有一个实例，并提供一个全局访问点来访问该实例。这种模式适用于需要在整个系统中共享一个对象实例的情况。</p><h2 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h2><p>单例模式适用于以下情况：</p><ol><li>当一个类只需要一个实例，并且该实例需要在整个系统中被访问时。</li><li>当需要控制对一个资源的并发访问时，例如数据库连接池。</li></ol><h2 id="优点和缺点" tabindex="-1">优点和缺点 <a class="header-anchor" href="#优点和缺点" aria-label="Permalink to &quot;优点和缺点&quot;">​</a></h2><p>优点：</p><ol><li>提供了对唯一实例的全局访问点，方便了对象的访问。</li><li>避免了重复创建对象的开销，提高了性能。</li><li>可以实现对资源的集中管理和控制。</li></ol><p>缺点：</p><ol><li>单例模式可能会引入全局状态，增加了代码的复杂性。</li><li>单例模式的扩展性较差，一旦需要扩展功能，可能需要修改原有的代码。</li></ol><h2 id="代码示例" tabindex="-1">代码示例 <a class="header-anchor" href="#代码示例" aria-label="Permalink to &quot;代码示例&quot;">​</a></h2><div class="language-cs vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">cs</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">using</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">System</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 单例类</span></span>
<span class="line"><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">sealed</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Singleton</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">private</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Singleton</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">_instance</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">private</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">readonly</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">object</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">_lock</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">object</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">private</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Singleton</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 私有构造函数，防止外部实例化</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Singleton</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Instance</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">get</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (_instance </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">lock</span><span style="color:#E1E4E8;"> (_lock)</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (_instance </span><span style="color:#F97583;">==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">                    {</span></span>
<span class="line"><span style="color:#E1E4E8;">                        _instance </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Singleton</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">                    }</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> _instance;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">public</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Display</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        Console.</span><span style="color:#B392F0;">WriteLine</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Singleton instance&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 客户端代码</span></span>
<span class="line"><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Program</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">static</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">void</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Main</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">string</span><span style="color:#E1E4E8;">[] </span><span style="color:#B392F0;">args</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 获取单例实例</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">Singleton</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">singleton</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Singleton.Instance;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 调用单例方法</span></span>
<span class="line"><span style="color:#E1E4E8;">        singleton.</span><span style="color:#B392F0;">Display</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">using</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">System</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 单例类</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">sealed</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Singleton</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Singleton</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">_instance</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">readonly</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">object</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">_lock</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">object</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Singleton</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 私有构造函数，防止外部实例化</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Singleton</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Instance</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">get</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (_instance </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">lock</span><span style="color:#24292E;"> (_lock)</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (_instance </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">                    {</span></span>
<span class="line"><span style="color:#24292E;">                        _instance </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Singleton</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">                    }</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> _instance;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Display</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        Console.</span><span style="color:#6F42C1;">WriteLine</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Singleton instance&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 客户端代码</span></span>
<span class="line"><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Program</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Main</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">string</span><span style="color:#24292E;">[] </span><span style="color:#6F42C1;">args</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 获取单例实例</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">Singleton</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">singleton</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Singleton.Instance;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 调用单例方法</span></span>
<span class="line"><span style="color:#24292E;">        singleton.</span><span style="color:#6F42C1;">Display</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><p>在上面的示例中，我们定义了一个单例类 <code>Singleton</code>，它的构造函数被声明为私有，以防止外部实例化。通过静态属性 <code>Instance</code>，我们提供了对唯一实例的全局访问点。在访问 <code>Instance</code> 属性时，我们使用双重检查锁定来确保只有一个实例被创建。</p><p>在客户端代码中，我们通过 <code>Singleton.Instance</code> 获取单例实例，并调用其方法。</p><p>这样，我们就可以通过单例模式确保一个类只有一个实例，并且可以在整个系统中被访问。</p>`,15),e=[o];function c(r,t,E,y,i,b){return n(),a("div",null,e)}const m=s(p,[["render",c]]);export{F as __pageData,m as default};
