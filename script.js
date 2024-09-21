const nav=document.querySelector('.nav')
const navHeight=nav.getBoundingClientRect().height
const header=document.querySelector('.header')

// nav link
const navContainer=document.querySelector('.nav-links')
//buttons
const submitBtn=document.querySelector('.send')
//inputs
const inputUsername=document.querySelector('.username');
const inputEmail=document.querySelector('.email');
//textarea
const textarea=document.querySelector('.comment')



//functions
//functions
//functions


//when clicking submit button
submitBtn.addEventListener('click',function(){
inputUsername.value=""
inputEmail.value=""
textarea.value=""
})

//smooth scrolling
navContainer.addEventListener('click',function(e){
    e.preventDefault()
    const link=e.target
    if(link.classList.contains('nav-link')){
        const id=link.getAttribute('href').slice(1)
        // console.log(id)
        document.getElementById(id).scrollIntoView({behavior: 'smooth'})
    }
})



// navigation sticky
const navsticky=(enties=>{
    const [entries]=enties;
    // console.log(entries)
    if(!entries.isIntersecting)nav.classList.add('sticky')
    else nav.classList.remove('sticky')
})

const headeropsever= new IntersectionObserver
(navsticky,{
    root:null,
    threshold:0,
    rootMargin:-navHeight+'px'
})

headeropsever.observe(header)