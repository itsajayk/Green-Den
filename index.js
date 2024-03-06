// selecting side navbar, menu icon

var  sidenav = document.getElementById('sidenav');
var  menuIcon = document.getElementById('menuicon');
var  closeNav = document.getElementById( 'closeNav' );

menuIcon.addEventListener( 'click', function(){
    sidenav.style.right=0
})

closeNav.addEventListener('click', function(){
    sidenav.style.right='-50%'
})