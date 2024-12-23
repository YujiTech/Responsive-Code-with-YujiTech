const navbar = document.getElementById("navbar");
        window.onscroll = (e) =>{
          const scrollValue = window.scrollY;
          console.log(scrollValue);
          const valuescroll = 50;
          if(window.scrollY > valuescroll){
            // navbar.style.backgroundColor = "yellow";
            navbar.style.transition = "0.5s"
            navbar.style.padding = "0px 0px";
          }
          else{
            // navbar.style.backgroundColor = " rgba(0, 0, 0.2, 0.44)";
            navbar.style.transition = "0.5s"
            navbar.style.padding = "8px 0px";
          }
        }