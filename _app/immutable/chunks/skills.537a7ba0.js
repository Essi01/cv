import{A as n}from"./UIcon.08c92c24.js";const d=`# Svelte

---

[\`Svelte\`](https://svelte.dev/) is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members. Svelte is not a monolithic JavaScript library imported by applications: instead, Svelte compiles HTML templates to specialized code that manipulates the DOM directly, which may reduce the size of transferred files and give better client performance. Application code is also processed by the compiler, inserting calls to automatically recompute data and re-render UI elements when the data they depend on is modified. This also avoids the overhead associated with runtime intermediate representations, such as virtual DOM, unlike traditional frameworks (such as React and Vue) which carry out the bulk of their work at runtime, i.e. in the browser.

The compiler itself is written in TypeScript. Its source code is licensed under MIT License and hosted on GitHub.

<br/>

Svelte is :

- compiled : Svelte shifts as much work as possible out of the browser and into your build step. No more manual optimisations — just faster, more efficient apps.
- compact : Write breathtakingly concise components using languages you already know — HTML, CSS and JavaScript. Oh, and your application bundles will be tiny as well.
- complete : Built-in scoped styling, state management, motion primitives, form bindings and more — don't waste time trawling npm for the bare essentials. It's all here.

<br/>

## Example

\`\`\`ts
<script>
    let count = 1;
    $: doubled = count * 2;
<\/script>

<p>{count} * 2 = {doubled}</p>

<button on:click={() => count = count + 1}>Count</button>
\`\`\`

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

> Svelte is a free and open-source front end component framework or language created by Rich Harris and maintained by the Svelte core team members.
`;function u(t,...o){const s=Object.assign({},t);return Object.keys(s).forEach(r=>{o.includes(r)&&delete s[r]}),s}const e=t=>t,m=[e({name:"Programming Languages",slug:"pro-lang"}),e({name:"Frameworks",slug:"framework"}),e({name:"Libraries",slug:"library"}),e({name:"Langauges",slug:"lang"}),e({name:"Databases",slug:"db"}),e({name:"ORMs",slug:"orm"}),e({name:"DevOps",slug:"devops"}),e({name:"Testing",slug:"test"}),e({name:"Dev Tools",slug:"devtools"}),e({name:"Markup & Style",slug:"markup-style"}),e({name:"Design",slug:"design"}),e({name:"Soft Skills",slug:"soft"}),e({name:"Cybersecurity",slug:"cyber"}),e({name:"Software Development",slug:"software-dev"}),e({name:"Cloud Infrastructure",slug:"cloud"}),e({name:"DevOps",slug:"devops"}),e({name:"Data Communication",slug:"data-comm"}),e({name:"Data Modeling & Databases",slug:"databases"}),e({name:"Algorithms & Data Structures",slug:"algos"}),e({name:"Operating Systems",slug:"os"}),e({name:"Microcontrollers",slug:"microcontrollers"}),e({name:"Mathematics & Physics",slug:"math-physics"}),e({name:"Frameworks",slug:"framework"}),e({name:"Operations",slug:"operations"})],a=t=>{const o=u(t,"category");return t.category&&(o.category=m.find(s=>s.slug===t.category)),o},c=[a({slug:"cybersecurity",color:"red",description:"Protecting systems, networks, and programs from digital attacks.",logo:n.cyber,name:"Cybersecurity",category:"cyber"}),a({slug:"cyber-risk",color:"darkred",description:"Managing risks related to cybersecurity by identifying, analyzing, and responding to potential threats.",logo:n.cyber,name:"Cybersecurity Risk Management",category:"cyber"}),a({slug:"software-dev",color:"blue",description:"Designing, coding, testing, and maintaining software applications.",logo:n.JavaScript,name:"Software Development",category:"software-dev"}),a({slug:"software-security",color:"green",description:"Implementing practices and tools to ensure the security of software throughout its lifecycle.",logo:n.JavaScript,name:"Software Security",category:"software-dev"}),a({slug:"cloud-infra",color:"purple",description:"Designing and managing scalable and reliable cloud infrastructure.",logo:n.Unknown,name:"Cloud Infrastructure",category:"operations"}),a({slug:"network-security",color:"orange",description:"Ensuring the security and privacy of data as it is transmitted across networks.",logo:n.Unknown,name:"Network, Security, and Privacy",category:"data-comm"}),a({slug:"data-modeling",color:"yellow",description:"Creating conceptual and logical models for managing and storing data efficiently.",logo:n.Unknown,name:"Data Modeling and Databases",category:"software-dev"}),a({slug:"algos",color:"darkblue",description:"Designing and analyzing algorithms and data structures to solve computational problems efficiently.",logo:n.Unknown,name:"Algorithms and Data Structures",category:"software-dev"}),a({slug:"os",color:"gray",description:"Understanding and managing the software that controls computer hardware and provides a base for application software.",logo:n.Unknown,name:"Operating Systems",category:"software-dev"}),a({slug:"chaos-engineering",color:"black",description:"Experimenting on a system to build confidence in its capability to withstand turbulent conditions in production.",logo:n.Unknown,name:"Chaos Engineering",category:"operations"}),a({slug:"svelte",color:"orange",description:d,logo:n.Svelte,name:"Svelte",category:"framework"}),a({slug:"devops",color:"cyan",description:"Combining software development and IT operations to shorten the development lifecycle.",logo:n.Unknown,name:"DevOps",category:"operations"})],y="Skills",f=(...t)=>c.filter(o=>t.includes(o.slug)),h=t=>{const o=[],s=[];return c.forEach(r=>{if(t.trim()&&!r.name.toLowerCase().includes(t.trim().toLowerCase()))return;if(!r.category){s.push(r);return}let i=o.find(g=>{var l;return g.category.slug===((l=r.category)==null?void 0:l.slug)});i||(i={items:[],category:r.category},o.push(i)),i.items.push(r)}),s.length!==0&&o.push({category:{name:"Others",slug:"others"},items:s}),o};export{h as a,f as g,c as i,y as t};
