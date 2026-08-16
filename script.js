const reveal = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity="1";
      entry.target.style.transform="translateY(0)";
      reveal.unobserve(entry.target);
    }
  });
},{threshold:.12});

document.querySelectorAll(".project-card,.about-card,.values>div,.contact-button").forEach(el=>{
  el.style.opacity="0";
  el.style.transform="translateY(25px)";
  el.style.transition="opacity .7s ease, transform .7s ease";
  reveal.observe(el);
});

document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener("click", e=>{
    const target=document.querySelector(link.getAttribute("href"));
    if(target){e.preventDefault();target.scrollIntoView({behavior:"smooth"});}
  });
});
