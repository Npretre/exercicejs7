function controle(form1){
          var pointure = document.form1.pointure.value;
          var birthyear = document.form1.annee.value;
          var result = (pointure * 2 + 5) * 50 - birthyear + 1766;
          alert(result);
      }
