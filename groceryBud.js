items = [];

function aniadirBotones(){
    botones = $('<div class="botones"></div>');

    editar = $('<button class="edit"><img src="img/editar.png" alt"botón editar elemento"></button>');
    editar.click(editarItem);
    botones.append(editar);

    borrar = $('<button class="clear"><img src="img/borrar.png" alt"botón borrar elemento"></button>');
    borrar.click(eliminarItem)
    botones.append(borrar);

    nuevoItem.append(botones);
}

function maquetarItem(item){
    nuevoItem = $('<div class="item"></div>');

    textoItem = $('<p class="texto"></p>').html(item);
    
    $('#lista').append(nuevoItem);
    nuevoItem.append(textoItem);

    aniadirBotones();
}

function aniadirItem(){
    texto = $('#entrada_texto').val();
    if (texto != ''){
        if ($('#alerta'))
            $('#alerta').remove();

        nuevoItem = $('<div class="item"></div>');

        textoItem = $('<p class="texto"></p>').html(texto);
        items.push(texto);

        $('#lista').append(nuevoItem);
        nuevoItem.append(textoItem);

        aniadirBotones();

        localStorage.setItem('misItems', JSON.stringify(items));
    }
    else{
        alerta = $('<p id="alerta">El campo de texto no puede estar vacío</p>');
        $('#lista').append(alerta);
    }
}

function borrarTodo(){
    $('#lista').empty();
    localStorage.removeItem('misItems');
}

function editarItem(){
    texto = $('#entrada_texto').val();
    $(this).parent().children('.texto').html(texto);
}

function eliminarItem(){
    $(this).parent().remove();
}

$(document).ready(function (){
    $('#enviar').click(aniadirItem);
    $('#borrar_todo').click(borrarTodo);

    items = JSON.parse(localStorage.getItem('misItems'));
    if (items){
        items.forEach(item => {
            maquetarItem(item);
        });
    }
    else
        items = [];
});