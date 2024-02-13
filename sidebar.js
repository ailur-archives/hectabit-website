        document.getElementById("sidebutton").addEventListener("click", function() {
            var sidebar = document.querySelector(".sidebar");
            var content = document.querySelector(".content");
            var closebar = document.querySelector(".closebar");
            closebar.classList.toggle("expanded");
            sidebar.classList.toggle("hidden");
            content.classList.toggle("expanded");
        });
