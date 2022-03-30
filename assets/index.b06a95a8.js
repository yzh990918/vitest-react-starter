import{u as p,r as d,j as u,a as m,b as f,B as h,R as g,c as l,d as b,e as x}from"./vendor.ece4dda0.js";const v=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}};v();function y(){const{isDarkMode:n,toggle:r}=p();return d.exports.useEffect(()=>{n?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[n]),{isDark:n,toggleDark:r}}const e=u.exports.jsx,i=u.exports.jsxs;function N(){const{isDark:n,toggleDark:r}=y();return i("nav",{className:"text-xl mt-6 inline-flex gap-2",children:[e("button",{className:"icon-btn !outline-none",onClick:()=>r(),children:n?e("div",{className:"i-carbon-moon"}):e("div",{className:"i-carbon-sun"})}),e("a",{className:"icon-btn i-carbon-logo-github",rel:"noreferrer",href:"https://github.com/antfu/vitesse-lite",target:"_blank",title:"GitHub"})]})}function k(){const n=d.exports.useRef(null),r=m(),s=()=>{n.current&&r(`/hi/${encodeURIComponent(n.current.value)}`)};return i("div",{children:[e("div",{className:"i-carbon-campsite text-4xl inline-block"}),e("p",{children:e("a",{rel:"noreferrer",href:"https://github.com/antfu/vitesse-lite",target:"_blank",children:"Vitesse Lite"})}),e("p",{children:e("em",{className:"text-sm op75",children:"Opinionated Vite Starter Template"})}),e("div",{className:"py-4"}),e("input",{ref:n,id:"input",placeholder:"What's your name?",type:"text",className:"px-4 py-2 w-250px text-center bg-transparent outline-none outline-active:none border border-rounded border-gray-200 border-dark:gray-700",onKeyDown:({key:a})=>a==="Enter"&&s()}),e("div",{children:e("button",{className:"m-3 text-sm btn",disabled:!n,onClick:()=>s(),children:"Go"})})]})}function D(){const n=m(),r=f();return i("div",{children:[e("div",{className:"i-carbon-pedestrian text-4xl inline-block"}),i("p",{children:["Hi, ",r.name]}),e("p",{className:"text-sm op50",children:e("em",{children:"Dynamic route!"})}),e("div",{children:e("button",{className:"btn m-3 text-sm mt-8",onClick:()=>n(-1),children:"Back"})})]})}const R=()=>e("div",{children:"Not Found"});function L(){return i("main",{className:"font-sans px-4 py-10 text-center text-gray-700 dark:text-gray-200",children:[e(h,{children:i(g,{children:[e(l,{path:"/",element:e(k,{})}),e(l,{path:"/hi/:name",element:e(D,{})}),e(l,{path:"/*",element:e(R,{})})]})}),e(N,{})]})}b.render(e(x.StrictMode,{children:e(L,{})}),document.getElementById("root"));
