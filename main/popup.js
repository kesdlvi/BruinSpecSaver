const button1 = document.getElementById('toggle-font-btn');
const button2 = document.getElementById('toggle-font-btn2')
const button3 = document.getElementById('toggle-font-btn3')
const button4 = document.getElementById('toggle-font-btn4')
const button5 = document.getElementById('toggle-font-btn5')
const resetbtn = document.getElementById("toggle-font-btn-reset")


const github = document.getElementById("github-link")

button1.addEventListener('click', () => {
    let queryOptions = { active: true, currentWindow: true };

    tabs = chrome.tabs.query(queryOptions, tabs => {
        console.log(tabs[0].id);

        chrome.tabs.sendMessage (
            tabs[0].id,
            {
                task: "iamTesting"
            }, 
            function(response){
                console.log(response.status);
            }
        );
    });
})

button2.addEventListener('click', () => {
    let queryOptions = { active: true, currentWindow: true };

    tabs = chrome.tabs.query(queryOptions, tabs => {
        console.log(tabs[0].id);

        chrome.tabs.sendMessage (
            tabs[0].id,
            {
                task: "iamTesting1"
            }, 
            function(response){
                console.log(response.status);
            }
        );
    });
})

button3.addEventListener('click', () => {
    let queryOptions = { active: true, currentWindow: true };

    tabs = chrome.tabs.query(queryOptions, tabs => {
        console.log(tabs[0].id);

        chrome.tabs.sendMessage (
            tabs[0].id,
            {
                task: "iamTesting2"
            }, 
            function(response){
                console.log(response.status);
            }
        );
    });
})


button4.addEventListener('click', () => {
    let queryOptions = { active: true, currentWindow: true };

    tabs = chrome.tabs.query(queryOptions, tabs => {
        console.log(tabs[0].id);

        chrome.tabs.sendMessage (
            tabs[0].id,
            {
                task: "iamTesting4"
            }, 
            function(response){
                console.log(response.status);
            }
        );
    });
})

button5.addEventListener('click', () => {
    let queryOptions = { active: true, currentWindow: true };

    tabs = chrome.tabs.query(queryOptions, tabs => {
        console.log(tabs[0].id);

        chrome.tabs.sendMessage (
            tabs[0].id,
            {
                task: "iamTesting5"
            }, 
            function(response){
                console.log(response.status);
            }
        );
    });
})


resetbtn.addEventListener('click', () => {
    let queryOptions = { active: true, currentWindow: true };

    tabs = chrome.tabs.query(queryOptions, tabs => {
        console.log(tabs[0].id);

        chrome.tabs.sendMessage (
            tabs[0].id,
            {
                task: "iamTesting3"
            }, 
            function(response){
                console.log(response.status);
            }
        );
    });
})


github.addEventListener('click', () => {
    let queryOptions = { active: true, currentWindow: true };

    tabs = chrome.tabs.query(queryOptions, tabs => {
        console.log(tabs[0].id);

        chrome.tabs.sendMessage (
            tabs[0].id,
            {
                task: "clickedGithub"
            }, 
            function(response){
                console.log(response.status);
            }
        );
    });

    chrome.tabs.create({url: "https://github.com/kesdlvi"})
})

//create event listeners for other links 
// checking if github works
