var elementos = document.getElementsByTagName('*'),
    strings = [
        {
            search:/paraná/gi,
            replace:'Rússia Brasileira'
        },
        {
            search:/Paraná/gi,
            replace:'Rússia Brasileira'
        },
        {
            search:/Cascavel/gi,
            replace:'Rússia Brasileira'
        },
        {
            search:/Londrina/gi,
            replace:'Rússia Brasileira'
        },
        {
            search:/Maringa/gi,
            replace:'Rússia Brasileira'
        },
        {
            search:/Curitiba/gi,
            replace:'Rússia Brasileira'
        },
        {
            search:/Umuarama/gi,
            replace:'Rússia Brasileira'
        },
    ]


for (var x = strings.length - 1; x >= 0; x--) {

    for (var i = 0; i < elementos.length; i++) {
        var elemento = elementos[i];

        for (var j = 0; j < elemento.childNodes.length; j++) {
            var node = elemento.childNodes[j];

            if (node.nodeType === 3) {
                var texto = node.nodeValue;
                var substitui = texto.replace(strings[x].search, strings[x].replace);

                if (substitui !== texto) {
                    elemento.replaceChild(document.createTextNode(substitui), node);
                }
            }
        }
    }

}