function d(){}function y(t){return t()}function C(){return Object.create(null)}function _(t){t.forEach(y)}function M(t){return typeof t=="function"}function B(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function P(t){return Object.keys(t).length===0}function j(t,e){t.appendChild(e)}function N(t,e,n){t.insertBefore(e,n||null)}function O(t){t.parentNode.removeChild(t)}function R(t){return document.createElement(t)}function L(t){return document.createTextNode(t)}function V(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function q(t){return Array.from(t.childNodes)}function z(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function D(t){const e={};for(const n of t)e[n.name]=n.value;return e}let k;function h(t){k=t}const a=[],S=[],$=[],T=[],F=Promise.resolve();let g=!1;function G(){g||(g=!0,F.then(H))}function b(t){$.push(t)}const p=new Set;let m=0;function H(){const t=k;do{for(;m<a.length;){const e=a[m];m++,h(e),I(e.$$)}for(h(null),a.length=0,m=0;S.length;)S.pop()();for(let e=0;e<$.length;e+=1){const n=$[e];p.has(n)||(p.add(n),n())}$.length=0}while(a.length);for(;T.length;)T.pop()();g=!1,p.clear(),h(t)}function I(t){if(t.fragment!==null){t.update(),_(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(b)}}const J=new Set;function K(t,e){t&&t.i&&(J.delete(t),t.i(e))}function Q(t,e,n,o){const{fragment:i,on_mount:f,on_destroy:c,after_update:u}=t.$$;i&&i.m(e,n),o||b(()=>{const l=f.map(y).filter(M);c?c.push(...l):_(l),t.$$.on_mount=[]}),u.forEach(b)}function U(t,e){const n=t.$$;n.fragment!==null&&(_(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function W(t,e){t.$$.dirty[0]===-1&&(a.push(t),G(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(t,e,n,o,i,f,c,u=[-1]){const l=k;h(t);const r=t.$$={fragment:null,ctx:null,props:f,update:d,not_equal:i,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:C(),dirty:u,skip_bound:!1,root:e.target||l.$$.root};c&&c(r.root);let x=!1;if(r.ctx=n?n(t,e.props||{},(s,E,...w)=>{const v=w.length?w[0]:E;return r.ctx&&i(r.ctx[s],r.ctx[s]=v)&&(!r.skip_bound&&r.bound[s]&&r.bound[s](v),x&&W(t,s)),E}):[],r.update(),x=!0,_(r.before_update),r.fragment=o?o(r.ctx):!1,e.target){if(e.hydrate){const s=q(e.target);r.fragment&&r.fragment.l(s),s.forEach(O)}else r.fragment&&r.fragment.c();e.intro&&K(t.$$.fragment),Q(t,e.target,e.anchor,e.customElement),H()}h(l)}let A;typeof HTMLElement=="function"&&(A=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(y).filter(M);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){_(this.$$.on_disconnect)}$destroy(){U(this,1),this.$destroy=d}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const o=n.indexOf(e);o!==-1&&n.splice(o,1)}}$set(t){this.$$set&&!P(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});function Y(t){let e,n,o,i,f;return{c(){e=R("button"),n=L("count is "),o=L(t[0]),this.c=d},m(c,u){N(c,e,u),j(e,n),j(e,o),i||(f=V(e,"click",t[1]),i=!0)},p(c,[u]){u&1&&z(o,c[0])},i:d,o:d,d(c){c&&O(e),i=!1,f()}}}function Z(t,e,n){let o=0;return[o,()=>{n(0,o+=1)}]}class tt extends A{constructor(e){super(),X(this,{target:this.shadowRoot,props:D(this.attributes),customElement:!0},Z,Y,B,{},null),e&&e.target&&N(e.target,this,e.anchor)}}customElements.define("my-counter",tt);