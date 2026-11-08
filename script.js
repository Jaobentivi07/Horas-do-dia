function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var men = window.document.getElementById('mensagem')
    var data = new Date()
    var hora = 22 //data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12 ){
        //Bom dia 
        men.innerHTML = `Bom dia`
        img.src = 'manhã.png'
        document.body.style.background = '#f0cd6c'
    } else if (hora >= 12 && hora <= 18){
        //Boa tarde
        men.innerHTML = `Boa tarde`
        img.src = 'tarde.png'
        document.body.style.background = '#c0770a'
    } else {
       //Boa noite
       men.innerHTML = `Boa noite`
       img.src = 'noite.png'
       document.body.style.background = '#020c45'
    }
}



