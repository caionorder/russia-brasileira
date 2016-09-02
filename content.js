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
            search:/em Cascavel/gi,
            replace:'na Rússia Brasileira'
        },
        {
            search:/em Londrina/gi,
            replace:'na Rússia Brasileira'
        },
        {
            search:/em Maringa/gi,
            replace:'na Rússia Brasileira'
        },
        {
            search:/em Curitiba/gi,
            replace:'na Rússia Brasileira'
        },
        {
            search:/em Umuarama/gi,
            replace:'na Rússia Brasileira'
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