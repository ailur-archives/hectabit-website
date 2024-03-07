        document.getElementById("sidebutton").addEventListener("click", function() {
            var sidecontainer = document.querySelector(".sidecontainer");
            var content = document.querySelector(".content");
            var closebar = document.querySelector(".closebar");
            closebar.classList.toggle("expanded");
            sidecontainer.classList.toggle("hidden");
            content.classList.toggle("expanded");
        });
