//config/................
function loadSide() {
            fetch('side.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('side').innerHTML = data;
                    side();
                });
        }
        
document.addEventListener('DOMContentLoaded', loadSide);

 function loadHeader() {
            fetch('header.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('header').innerHTML = data;
                    DarkModeToggle();
                    side();
                    notiPage();
                });
        }
        
document.addEventListener('DOMContentLoaded', loadHeader);


// side page js.................................................
function side() {
    const side = document.querySelector(".side")
    const menuBtn = document.getElementById("menu-btn");
    const closeSide = document.querySelector(".close-side")
    menuBtn.addEventListener("click", function () {
        side.style.zIndex = 1;
    })
    closeSide.addEventListener('click', function () {
        side.style.zIndex = 0;
    })
}

    //dark mode js................................................
function DarkModeToggle() {
    const toggleButton = document.getElementById("toggleButton");
    const htmlElement = document.documentElement;


    toggleButton.addEventListener('click', function (e) {
        if (htmlElement.classList.contains('dark-mode')) {
            htmlElement.classList.remove('dark-mode');

        } else {
            htmlElement.classList.add('dark-mode');
        }
    });

}








function loadNavbar() {
    fetch('navbar.html')
    .then(response => response.text())
    .then(navbar => {
        document.getElementById('navtop').innerHTML = navbar;
        navbar()
        
    });
        }
        
        document.addEventListener('DOMContentLoaded', loadNavbar);
        
        // Function to load the footer
        function loadFooter() {
            fetch('footer.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('footer').innerHTML = data;
                footer(); // Call footer() after the content is loaded
            });
        }
        
        document.addEventListener('DOMContentLoaded', loadFooter);
        
        function footer() {
            const footerDivs = document.querySelectorAll('#footer div'); // Select footer divs after footer is loaded
            footerDivs.forEach(div => {
                div.addEventListener('click', function () {
                    const idname = this.id;
                    if (idname === "home") {
                        window.location.href = 'main.html'; 
                    }
                    else if (idname === "munshi") {
                        
                        window.location.href = 'munshi.html'; 
                    }
                    else if (idname === "create") {
                        window.location.href = 'create.html'; 
                    }
                    else if (idname === "member") {
                        window.location.href = 'member.html'; 
                    }
                    else if (idname === "user") {
                        window.location.href = 'user.html'; 
                    }
                });
            });
        }
        
        
        

        
        
        
        
        
        
        
        
        
        // Get all elements with class 'footerdiv'........................
        
        
        const footerDivs = document.querySelectorAll('.footerdiv');
        const homepage = document.querySelector(".homepage")
        const munshiAll = document.querySelector(".munshi-all")
        const memberAll = document.querySelector(".member-all")
        const userAll = document.querySelector(".user-all")
        
// notipage.........................

function loadNotipage() {
            fetch('notipage.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('noti-page').innerHTML = data;
                   });
        }
        
document.addEventListener('DOMContentLoaded', loadNotipage);



        
function notiPage() {
    
const notiBtn = document.querySelector(".noti-icon1")
    const notipage = document.querySelector(".noti-page")
    

notiBtn.addEventListener('click', (e) => {
    
    const notiicon = document.querySelector(".noti-icon1")
    if (notiicon.innerHTML == `<i class="fa-solid fa-xmark"></i>`) {
        notiicon.innerHTML = `<i class="fa-solid fa-bell"></i>`
        notipage.style.display = "none";
    }
    else {
        notiicon.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        notipage.style.display = "block";
    }
  
   
    console.log(notiicon.innerHTML);

    
})
        
}
        
        
        
        
        
        //create- page js....................................................
        
        
        document.addEventListener('DOMContentLoaded', function () {
            toggleFields();
        });
        
        function toggleFields() {
            const userType = document.getElementById('usertype').value;
            const extraFields = document.getElementById('extraFields');
            
            if (userType === 'user') {
                extraFields.style.display = 'none';
        } else {
            extraFields.style.display = 'block';
        }
    }

const create = document.querySelector(".create-page")