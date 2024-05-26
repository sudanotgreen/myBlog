import{_ as s,o as a,c as e,a as n,b as t}from"./app--ias0FLC.js";const p={},o=n("p",null,"卡车有两个油箱。给你两个整数，mainTank 表示主油箱中的燃料（以升为单位），additionalTank 表示副油箱中的燃料（以升为单位）。",-1),c=n("p",null,"该卡车每耗费 1 升燃料都可以行驶 10 km。每当主油箱使用了 5 升燃料时，如果副油箱至少有 1 升燃料，则会将 1 升燃料从副油箱转移到主油箱。",-1),l=n("p",null,"返回卡车可以行驶的最大距离。",-1),i=n("p",null,"注意：从副油箱向主油箱注入燃料不是连续行为。这一事件会在每消耗 5 升燃料时突然且立即发生。",-1),r=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("p",null,"依据题意模拟即可，可以使用除法计算当前可加入的总次数以减少while循环时间。")],-1),u=t(`<p>实现code：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
  <span class="token keyword">int</span> <span class="token function">distanceTraveled</span><span class="token punctuation">(</span><span class="token keyword">int</span> mainTank<span class="token punctuation">,</span> <span class="token keyword">int</span> additionalTank<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> loop <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>mainTank <span class="token operator">&gt;=</span> <span class="token number">5</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      loop <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      mainTank <span class="token operator">-=</span> <span class="token number">5</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>additionalTank<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        mainTank <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        additionalTank <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> loop <span class="token operator">*</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> mainTank <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">;</span>  
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),d=[o,c,l,i,r,u];function k(m,v){return a(),e("div",null,d)}const _=s(p,[["render",k],["__file","2739.html.vue"]]);export{_ as default};
