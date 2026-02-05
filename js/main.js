$(document).ready(function () {

    $('#carousel-imagens').slick({
        autoplay: true,
        arrow: false
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-6789'
    })

    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    })

    $('#cep').mask('00000-000', {
        placeholder: '012345-678'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            },
        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            $('#telefone').mascara('(00) 00000-0000', {
    placeholder: '(DDD) 12345-6789'
})

$('#cpf').mascara('000.000.000-00', {
    placeholder: '123.456.789-00'
})

$('#cep').mascara('00000-000', {
    placeholder: '012345-678'
})

$('form').validate({
    rules: {
        nome: {
            requerido: true
        },
        email: {
            requerido: true,
            email: true
        },
        telefone: {
            requerido: true
        },
        endereco: {
            requerido: true
        },
        cep: {
            requerido: true
        },
        cpf: {
            requerido: true
        },
    },
    submitHandler: function (form) {
        alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
        form.reset();
    },
    invalidHandler: function (form, validator) {
        alert("Por favor, preencha os campos para prosseguir com a compra!");
    }
})
        },
        invalidHandler: function (form, validator) {
            let camposInvalidos = validator.numberOfInvalids();
            if (camposInvalidos) {
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        }}
    })
})