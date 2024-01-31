document.addEventListener("DOMContentLoaded", function () {
    const tablinks = document.getElementsByClassName("tab-links");
    const tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(event, tabname) {
        for (let tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (let tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }
    for (let tablink of tablinks) {
        tablink.addEventListener("click", function (event) {
            opentab(event, this.getAttribute("data-tabname"));
        });

        //pop up windows
        const viewSampleLinks = document.querySelectorAll('.view-sample');
        viewSampleLinks.forEach(link => {
            link.addEventListener('click', function () {
                const modalId = this.getAttribute('data-modal'); // or use 'onclick'
                openPopup(modalId);
            });
        });
        const closeButtonElements = document.querySelectorAll('.close-popup');
        closeButtonElements.forEach(closeButton => {
            closeButton.addEventListener('click', function () {
                const modalId = this.getAttribute('data-modal'); // or use 'onclick'
                closePopup(modalId);
            });
        });
    }

    var menu = document.getElementById("sidemenu");

    window.openmenu = function () {
        menu.style.right = "0";
    };

    window.closemenu = function () {
        menu.style.right = "-200px";
    };

    //for the form not related to any js 
    const scriptURL = 'https://script.google.com/macros/s/AKfycby_Dgu-xAIj7CtBQR4mbTDa_kLwE4fC8TsKi_pcIKuq5b03cU4xs7524NrAcRmvzK9JiA/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                msg.innerHTML = "Message sent succesfully"
                setTimeout(function () {
                    msg.innerHTML = ""
                }, 6000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
    })

});
// popup windows
function openPopup(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closePopup(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}