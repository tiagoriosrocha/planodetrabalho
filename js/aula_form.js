$(document).ready( function() {
  $("#aula_form").validate({
    
    
    // Define as regras
    rules:{
      aula_nome:{
        // campoNome será obrigatório (required) e terá tamanho mínimo (minLength)
        required: true, minlength: 5
      },
      aula_curso:{
        // campoNome será obrigatório (required) e terá tamanho mínimo (minLength)
        required: true, minlength: 5
      },
      aula_ch:{
        // campoNome será obrigatório (required) e terá tamanho mínimo (minLength)
        required: true, minlength: 5, number:true
      }
    },
    
    
    
    
    // Define as mensagens de erro para cada regra
    messages:{
      aula_nome:{
        required: "Digite o nome da disciplina",
        minLength: "Este item deve conter ao menos 5 caracteres"
      },
      aula_curso:{
        required: "Digite o curso que será lecionada esta disciplina"
      },
      aula_ch:{
        required: "Digite a carga horária semanal da disciplina",
        number: "Insira um número"
      }
    }
  });
});