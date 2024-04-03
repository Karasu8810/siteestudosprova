var question = null
var pontos = 0
$(document).ready(function(){
    $('form').submit(function(e){
        e.preventDefault()
        var q1 = $('input[name="t1"]:checked').val()
        var q2 = $('input[name="t2"]:checked').val()
        var q3 = $('input[name="t3"]:checked').val()
        var q4 = $('input[name="t4"]:checked').val()
        var q5 = $('input[name="t5"]:checked').val()
        var q6 = $('input[name="t6"]:checked').val()
        var q7 = $('input[name="t7"]:checked').val()
        var q8 = $('input[name="t8"]:checked').val()
        var q9 = $('input[name="t9"]:checked').val()
        var q10 = $('input[name="t10"]:checked').val()
        var q11 = $('input[name="t11"]:checked').val()
        var q12 = $('input[name="t12"]:checked').val()
        var q13 = $('input[name="t13"]:checked').val()
        var q14 = $('input[name="t14"]:checked').val()
        corrigir()

        function corrigir(){
            if (q1 == 'Matiz'){
                pontos += 1
                certo('#t1')
            }else{
                errado('#t1')
            }
            if (q2 == 'Quentes'){
                pontos += 1
                certo('#t2')
            }else{
                errado('#t2')
            }
            if (q3 == 'Complementares'){
                pontos += 1
                certo('#t3')
            }else{
                errado('#t3')
            }
            if (q4 == 'RGB'){
                pontos += 1
                certo('#t4')
            }else{
                errado('#t4')
            }
            if (q5 == 'Análogas'){
                pontos += 1
                certo('#t5')
            }else{
                errado('#t5')
            }
            if (q6 == 'Neutras'){
                pontos += 1
                certo('#t6')
            }else{
                errado('#t6')
            }
            if (q7 == 'Monocromática'){
                pontos += 1
                certo('#t7')
            }else{
                errado('#t7')
            }
            if (q8 == 'Frias'){
                pontos += 1
                certo('#t8')
            }else{
                errado('#t8')
            }
            if (q9 == 'Saturação'){
                pontos += 1
                certo('#t9')
            }else{
                errado('#t9')
            }
            if (q10 == 'Intensidade'){
                pontos += 1
                certo('#t10')
            }else{
                errado('#t10')
            }
            if (q11 == 'Triádica'){
                pontos += 1
                certo('#t11')
            }else{
                errado('#t11')
            }
            if (q12 == 'Vermelho'){
                pontos += 1
                certo('#t12')
            }else{
                errado('#t12')
            }
            if (q13 == 'Azul'){
                pontos += 1
                certo('#t13')
            }else{
                errado('#t13')
            }
            if (q14 == 'Preto'){
                pontos += 1
                certo('#t14')
            }else{
                errado('#t14')
            }
            var nota = (pontos/14)*10
            $('#nota').html(`<b>Nota:</b> ${nota.toFixed(2)}`)
            $('#nota').css('display','block')
            $('#reset').css('display','block')
        }

        function certo(questao){
            $(questao).css('color','green')
        }

        function errado(questao){
            $(questao).css('color','red')
        }
    })

    $('#reset').click(function(){
        reset('#t1')
        reset('#t2')
        reset('#t3')
        reset('#t4')
        reset('#t5')
        reset('#t6')
        reset('#t7')
        reset('#t8')
        reset('#t9')
        reset('#t10')
        reset('#t11')
        reset('#t12')
        reset('#t13')
        reset('#t14')

        function reset(questao){
            $(questao).css('color','white')
            $('#nota').css('display','none')
            $('#reset').css('display','none')
        }
    })
})

