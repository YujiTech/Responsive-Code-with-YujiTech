const navbar = document.getElementById("navbar");
        window.onscroll = (e) =>{
          const scrollValue = window.scrollY;
          console.log(scrollValue);
          const valuescroll = 150;
          if(window.scrollY > valuescroll){
            navbar.style.backgroundColor = "#802000";
            navbar.style.transition = "0.5s"
            navbar.style.padding = "0px 0px";
          }
          else{
            navbar.style.backgroundColor = "transparent";
            navbar.style.transition = "0.5s"
            navbar.style.padding = "15px 0px";
          }
        }
// change picture
      function onOver() {
          document.getElementById("objpic").src = "./image/AboutUn2.webp"
          
      }
      function onOut() {
          document.getElementById("objpic").src = "./image/AboutUn1.png";
      }
// Input Information about student
      var Table = '';
      function Add(){
      var Name,Gender,School,Number1;
      Name = document.student.user.value;
      Gender = document.student.sex.value;
      School = document.student.sc.value;
      Number1 = document.student.number.value;
      Table += Number1+"\t" +Name+ "\t" + Gender + "\t" + School + "\n";
      document.student.db.value = Table;
      }