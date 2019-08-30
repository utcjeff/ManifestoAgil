function preencherData() {
    let data = new Date();
    document.getElementById("Hoje").innerHTML = formatarData(data.getDate()) + "/" + formatarData(data.getMonth() + 1
    ) + "/" + data.getFullYear();
}

function formatarData(conteudo) {
    if (conteudo > 9) {
        return conteudo;
    }
    else {
        return "0" + conteudo;
    }
}