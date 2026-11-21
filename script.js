const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.main-nav');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'Close':'Menu'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='Menu'}));}


// Reveal the archival portrait gently as the Share Your Story section enters view.
const storyPortrait=document.querySelector('.share-story-portrait');
if(storyPortrait){
  if('IntersectionObserver' in window){
    const storyObserver=new IntersectionObserver((entries,observer)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },{threshold:0.18});
    storyObserver.observe(storyPortrait);
  }else{
    storyPortrait.classList.add('is-visible');
  }
}
