var question = null
var pontos = 0
var index = 1
$(document).ready(function(){
    $('form').submit(function(e){
        e.preventDefault()
        var q1 = $('input[name="t1"]:checked').val()
        pontos += corrigir(q1)
        index += 1
        var q1 = $('input[name="t2"]:checked').val()
        pontos += corrigir(q1)
        index += 1
        var q1 = $('input[name="t3"]:checked').val()
        pontos += corrigir(q1)
        index += 1
        var q1 = $('input[name="t4"]:checked').val()
        pontos += corrigir(q1)
        index += 1
        var q1 = $('input[name="t5"]:checked').val()
        pontos += corrigir(q1)
        index += 1
        var q1 = $('input[name="t6"]:checked').val()
        pontos += corrigir(q1)
        index += 1
        var q1 = $('input[name="t7"]:checked').val()
        pontos += corrigir(q1)
        index += 1
        var q1 = $('input[name="t8"]:checked').val()
        pontos += corrigir(q1)
        index += 1
        var q1 = $('input[name="t9"]:checked').val()
        pontos += corrigir(q1)
        index += 1
        var q1 = $('input[name="t10"]:checked').val()
        pontos += corrigir(q1)
        index += 1
        var q1 = $('input[name="t11"]:checked').val()
        pontos += corrigir(q1)
        index += 1
        var q1 = $('input[name="t12"]:checked').val()
        pontos += corrigir(q1)
        index += 1
        var nota = (pontos/12)*10
        $('#nota').html(`<b>Nota:</b> ${nota.toFixed(2)}`)
        $('#nota').css('display','block')
        $('#reset').css('display','block')

        function corrigir(q){
            if (q != 'true' || typeof(q) == undefined){
                errado(`#q${index}`)
                return 0
            }else{
                certo(`#q${index}`)
                return 1
            }
        }
        function errado(questao){
            $(questao).css('color','red')
        }
        function certo(questao){
            $(questao).css('color','green')
        }
    })

    $('#reset').click(function(){
        location.reload()
    })
})

