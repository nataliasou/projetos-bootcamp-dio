$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function detalhes(elemento){
     document.getElementById("expansao-detalhes").style.display = 'block';
     var valor = document.getElementById(elemento);
         document.getElementById("ano").innerHTML = "2020 1h57min";
         document.getElementById("resumo").innerHTML = "Em Bangladesh, o mercenário Tyler Rake luta para sobreviver durante a missão para resgatar o filho de um chefão do crime.";
         document.getElementById("ator").innerHTML = "Chris Hermsworth, David Harbour, mais";
         document.getElementById("genero").innerHTML = "Ação";
         document.getElementById("momento").innerHTML = "Emocionantes";
 }
function detalhes1(elemento){
     document.getElementById("expansao-detalhes").style.display = 'block';
     var valor = document.getElementById(elemento);
         document.getElementById("ano").innerHTML = "2021 1h54min";
         document.getElementById("resumo").innerHTML = "Em um futuro próximo, um piloto de drone e um androide ultrassecreto trabalham lado a lado no campo de batalha para evitar um ataque nuclear.";
         document.getElementById("ator").innerHTML = "Anthony Mackie, Damson Idris, mais";
         document.getElementById("genero").innerHTML = "Ação";
         document.getElementById("momento").innerHTML = "Tensão";
 }
 function detalhes2(elemento){
     document.getElementById("expansao-detalhes").style.display = 'block';
     var valor = document.getElementById(elemento);
         document.getElementById("ano").innerHTML = "2019 2h03min";
         document.getElementById("resumo").innerHTML = "Tentado em revisitar o mundo de Jumanji, Spencer (Alex Wolff) decide consertar o jogo de videogame que permite que os jogadores sejam transportados ao local. Logo o quarteto formado por Smolder Bravestone (Dwayne Johnson), Moose Finbar (Kevin Hart), Shelly Oberon (Jack Black) e Ruby Roundhouse (Karen Gillan) ressurge, agora comandado por outras pessoas: os avôs de Spencer e Fridge (Danny DeVito e Danny Glover) assumem as personas de Bravestone e Finbar, enquanto o próprio Fridge (Ser'Darius Blain) agora está sob a pele de Oberon.";
         document.getElementById("ator").innerHTML = "Dwayne Johnson, Kevin Hart, mais";
         document.getElementById("genero").innerHTML = "Ação, Comédia";
         document.getElementById("momento").innerHTML = "Emocionantes";
 }
 function detalhes3(elemento){
     document.getElementById("expansao-detalhes").style.display = 'block';
     var valor = document.getElementById(elemento);
         document.getElementById("ano").innerHTML = "2016 5 temporadas";
         document.getElementById("resumo").innerHTML = "Entediado com a vida nas trevas, o diabo se muda para Los Angeles, abre um piano-bar e empresta sua sabedoria a uma investigadora de assassinatos.";
         document.getElementById("ator").innerHTML = "Tom Ellis, Lauren German, mais";
         document.getElementById("genero").innerHTML = "Ação";
         document.getElementById("momento").innerHTML = "Emocionantes";
 }