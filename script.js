function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var dia_sem = data.getDay()
    var dia = data.getDate()
    var mes = data.getMonth()
    var ano = data.getFullYear()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    switch (dia_sem){
        case 0:
            var dia_semana = 'Domingo'
            break;
        case 1:
            var dia_semana = 'Segunda-feira'
            break;
        case 2:
            var dia_semana = 'Terça-feira'
            break;
        case 3:
            var dia_semana = 'Quarta-feira'
            break;
        case 4:
            var dia_semana = 'Quinta-feira'
            break;
        case 5:
            var dia_semana = 'Sexta-feira'
            break;
        case 6:
            var dia_semana = 'Sábado'
            break;
    }

    switch (minutos){
        case 0:
            var minutos = '00'
            break;
        case 1:
            var minutos = '01'
            break;
        case 2:
            var minutos = '02'
            break;
        case 3:
            var minutos = '03'
            break;
        case 4:
            var minutos = '04'
            break;
        case 5:
            var minutos = '05'
            break;
        case 6:
            var minutos = '06'
            break;
        case 7:
            var minutos = '07'
            break;
        case 8:
            var minutos = '08'
            break;
        case 9:
            var minutos = '09'
            break;
    }

    switch (mes){
        case 1:
            var mes = 'Janeiro'
            break;
        case 2:
            var mes = 'Fevereiro'
            break;
        case 3:
            var mes = 'Março'
            break;
        case 4:
            var mes = 'Abril'
            break;
        case 5:
            var mes = 'Maio'
            break;
        case 6:
            var mes = 'Junho'
            break;
        case 7:
            var mes = 'Julho'
            break;
        case 8:
            var mes = 'Agosto'
            break;
        case 9:
            var mes = 'Setembro'
            break;
        case 10:
            var mes = 'Outubro'
            break;
        case 11:
            var mes = 'Novembro'
            break;
        case 12:
            var mes = 'Dezembro'
            break;
    }

    if(hora >=0 && hora < 12){
        msg.innerHTML = `Bom dia!<br>Hoje é ${dia_semana}, ${dia}/${mes}/${ano}<br>Agora são ${hora}:${minutos} horas.`
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora < 18){
        msg.innerHTML = `Boa tarde!<br>Hoje é ${dia_semana}, ${dia}/${mes}/${ano}<br>Agora são ${hora}:${minutos} horas.`
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    }else{
        msg.innerHTML = `Boa noite!<br>Hoje é ${dia_semana}, ${dia}/${mes}/${ano}<br>Agora são ${hora}:${minutos} horas.`
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
}