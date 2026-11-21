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


// Load editable homepage and About copy. If the content file is unavailable,
// the original HTML copy remains visible as a safe fallback.
fetch('content/pages/home.json')
  .then(response => {
    if (!response.ok) throw new Error('Homepage content could not be loaded');
    return response.json();
  })
  .then(content => {
    document.querySelectorAll('[data-cms]').forEach(element => {
      const key = element.dataset.cms;
      if (typeof content[key] === 'string') {
        element.textContent = content[key];
      }
    });
  })
  .catch(error => {
    console.warn('Using the built-in homepage text:', error);
  });
