const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const sections=document.querySelectorAll('main section');
const links=document.querySelectorAll('.nav a:not(.social):not(.cta)');
window.addEventListener('scroll',()=>{
  let current='';
  sections.forEach(section=>{if(scrollY>=section.offsetTop-120) current=section.id});
  links.forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+current));
});
