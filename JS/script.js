const processes1 = document.querySelector('.processes1');
const processes2 = document.querySelector('.processes2');
const processes3 = document.querySelector('.processes3');
const processes4 = document.querySelector('.processes4');
const processes5 = document.querySelector('.processes5');
const processes6 = document.querySelector('.processes6');

const mainArea1 = document.querySelector('.main-area1');
const processDescription1 = document.querySelector('.process-description1');
const process1 = document.querySelector('.process1');
const processNumber1 = document.querySelector('.process-number1');


const mainArea2 = document.querySelector('.main-area2');
const processDescription2 = document.querySelector('.process-description2');
const process2 = document.querySelector('.process2');
const processNumber2 = document.querySelector('.process-number2');

const mainArea3 = document.querySelector('.main-area3');
const processDescription3 = document.querySelector('.process-description3');
const process3 = document.querySelector('.process3');
const processNumber3 = document.querySelector('.process-number3');

const mainArea4 = document.querySelector('.main-area4');
const processDescription4 = document.querySelector('.process-description4');
const process4 = document.querySelector('.process4');
const processNumber4 = document.querySelector('.process-number4');

const mainArea5 = document.querySelector('.main-area5');
const processDescription5 = document.querySelector('.process-description5');
const process5 = document.querySelector('.process5');
const processNumber5 = document.querySelector('.process-number5');

const mainArea6 = document.querySelector('.main-area6');
const processDescription6 = document.querySelector('.process-description6');
const process6 = document.querySelector('.process6');
const processNumber6 = document.querySelector('.process-number6');

processes1.addEventListener('mouseenter', function mouseHoverEvent(){
    mainArea1.className = 'main-area-on-hover';
    processDescription1.className = 'process-description-on-hover';
    process1.className = 'process-on-hover';
    processNumber1.className = 'process-number-on-hover';
});
processes2.addEventListener('mouseenter', function mouseHoverEvent(){
    mainArea2.className = 'main-area-on-hover';
    processDescription2.className = 'process-description-on-hover';
    process2.className = 'process-on-hover';
    processNumber2.className = 'process-number-on-hover';
});
processes3.addEventListener('mouseenter', function mouseHoverEvent(){
    mainArea3.className = 'main-area-on-hover';
    processDescription3.className = 'process-description-on-hover';
    process3.className = 'process-on-hover';
    processNumber3.className = 'process-number-on-hover';
});
processes4.addEventListener('mouseenter', function mouseHoverEvent(){
    mainArea4.className = 'main-area-on-hover';
    processDescription4.className = 'process-description-on-hover';
    process4.className = 'process-on-hover';
    processNumber4.className = 'process-number-on-hover';
});
processes5.addEventListener('mouseenter', function mouseHoverEvent(){
    mainArea5.className = 'main-area-on-hover';
    processDescription5.className = 'process-description-on-hover';
    process5.className = 'process-on-hover';
    processNumber5.className = 'process-number-on-hover';
});
processes6.addEventListener('mouseenter', function mouseHoverEvent(){
    mainArea6.className = 'main-area-on-hover';
    processDescription6.className = 'process-description-on-hover';
    process6.className = 'process-on-hover';
    processNumber6.className = 'process-number-on-hover';
});

processes1.addEventListener('mouseleave', function mouseLeaveEvent(){
    mainArea1.className = 'main-area';
    processDescription1.className = 'process-description';
    process1.className = 'process';
    processNumber1.className = 'process-number';
});
processes2.addEventListener('mouseleave', function mouseLeaveEvent(){
    mainArea2.className = 'main-area';
    processDescription2.className = 'process-description';
    process2.className = 'process';
    processNumber2.className = 'process-number';
});
processes3.addEventListener('mouseleave', function mouseLeaveEvent(){
    mainArea3.className = 'main-area';
    processDescription3.className = 'process-description';
    process3.className = 'process';
    processNumber3.className = 'process-number';
});
processes4.addEventListener('mouseleave', function mouseLeaveEvent(){
    mainArea4.className = 'main-area';
    processDescription4.className = 'process-description';
    process4.className = 'process';
    processNumber4.className = 'process-number';
});
processes5.addEventListener('mouseleave', function mouseLeaveEvent(){
    mainArea5.className = 'main-area';
    processDescription5.className = 'process-description';
    process5.className = 'process';
    processNumber5.className = 'process-number';
});
processes6.addEventListener('mouseleave', function mouseLeaveEvent(){
    mainArea6.className = 'main-area';
    processDescription6.className = 'process-description';
    process6.className = 'process';
    processNumber6.className = 'process-number';
});

// function runMouseLeaveEvent(e){

// }


// WEBSITE DEVELOPEMENT FEATURE
let description = document.getElementById('fact-description');
let f1 = document.getElementById('f1');
let factIcon = document.getElementById('fact-icon');
f1.addEventListener('click', function(){
    console.log('hello');
    document.getElementById('desc-para').remove();
    let p = document.createElement('p');
    let content = document.createTextNode("when your website comes on top in search engine results page, you are easily found by potential customers. We can fully assist you in developing web solutions that guarantee your visibility while being suitable for crawling and indexation.");
    p.setAttribute('id', 'desc-para')
    p.appendChild(content);
    description.appendChild(p);

    removeActiveClass();
    f1.classList.add('active-fact');
    removeIconClass();
    document.getElementById('fact-icon').classList.add('seo-new-white'); 
});
let f2 = document.getElementById('f2');
f2.addEventListener('click', function(){
    console.log('hellooooo');
    document.getElementById('desc-para').remove();
    let p = document.createElement('p');
    let content = document.createTextNode("About 40% of site visitors leave immediately in case the site loading time is more than 3 seconds, and 75% never return to the website that took more than 4 seconds to load. Web development service ensures the perfect load speed of your site by minimizing HTTP requests, reducing server response time, using CDNs, APIs, enabling compression and browser caching, upgrading the DB, sharding, etc.");
    p.setAttribute('id', 'desc-para')
    p.appendChild(content);
    description.appendChild(p);

    removeActiveClass();
    f2.classList.add('active-fact');
    removeIconClass();
    document.getElementById('fact-icon').classList.add('roket-white');
});
let f3 = document.getElementById('f3');
f3.addEventListener('click', function(){
    console.log('hello');
    document.getElementById('desc-para').remove();
    let p = document.createElement('p');
    let content = document.createTextNode("We work with all modern browsers and devices and implement the best practices to make our web solutions and the content browser compatible and device-friendly. Our web development specialists work with responsive style sheets, CSS frameworks, javascript libraries, W3C validation, etc., and make websites suitable for any browser and device.");
    p.setAttribute('id', 'desc-para')
    p.appendChild(content);
    description.appendChild(p);

    removeActiveClass();
    f3.classList.add('active-fact');

    removeIconClass();
    document.getElementById('fact-icon').classList.add('responsive-white'); 
});
let f4 = document.getElementById('f4');
f4.addEventListener('click', function(){
    console.log('hello');
    document.getElementById('desc-para').remove();
    let p = document.createElement('p');
    let content = document.createTextNode("A good web solution helps its users find what they look for with a click. An understandable menu, simple navigation, “F-pattern” content layout, good site organization, breadcrumbs, dropdowns, clickable items, etc. present attributes of good website that users will love. We are ready to create value for your users through the “intuitive navigation” approach.");
    p.setAttribute('id', 'desc-para')
    p.appendChild(content);
    description.appendChild(p);

    removeActiveClass();
    f4.classList.add('active-fact');
    removeIconClass();
    document.getElementById('fact-icon').classList.add('man-dev-white'); 
});

function removeActiveClass() {
    if(f1.classList.contains('active-fact'))
        f1.classList.remove('active-fact');
    else if(f2.classList.contains('active-fact'))
        f2.classList.remove('active-fact');
    else if(f3.classList.contains('active-fact'))
        f3.classList.remove('active-fact');
    else if(f4.classList.contains('active-fact'))
        f4.classList.remove('active-fact');
}

function removeIconClass() {
    if(factIcon.classList.contains('roket-white'))
        factIcon.classList.remove('roket-white');
    else if(factIcon.classList.contains('seo-new-white'))
        factIcon.classList.remove('seo-new-white');
    else if(factIcon.classList.contains('responsive-white'))
        factIcon.classList.remove('responsive-white');
    else if(factIcon.classList.contains('man-dev-white'))
        factIcon.classList.remove('man-dev-white'); 
}