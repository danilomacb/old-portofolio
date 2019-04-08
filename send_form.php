<?php

    header("Content-type: text/html; charset=utf-8");

    if(isset($_POST['email'])) {
        $email_to = "danilo.bakun@gmail.com";

        function died($error) {
            echo "Lamentamos, mas houveram erros no formulário que você enviou.<br><br>";
            echo "Os erros irão aparecer abaixo.<br><br>";
            echo $error."<br><br>";
            echo "Por favor, volte e corrija esses erros.<br><br>";
            die();
        }

        if(!isset($_POST['nome']) || !isset($_POST['email']) || !isset($_POST['assunto']) || !isset($_POST['mensagem'])) {
            died('Lamentamos, mas parece haver um problema com o formulário que você enviou.');       
        }
            
        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $assunto = $_POST['assunto'];
        $mensagem = $_POST['mensagem'];
        
        $error_message = "";
        $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
            
        if(!preg_match($email_exp,$email)) {
            $error_message .= 'O email que você inseriu não é válido.<br>';
        }
            
        $string_exp = "/^[A-Za-z .'-]+$/";
        
        if(!preg_match($string_exp,$nome)) {
            $error_message .= 'O nome que você inseriu não parece ser válido.<br>';
        }
        
        if(!preg_match($string_exp,$assunto)) {
            $error_message .= 'O assunto que você inseriu não parece ser válido.<br>';
        }
        
        if(strlen($mensagem) < 2) {
            $error_message .= 'A mensagem que você inseriu não parece ser válida.<br>';
        }
        
        if(strlen($error_message) > 0) {
            died($error_message);
        }
        
        $email_message = "Detalhes do formulário abaixo.\n\n";
        
        function clean_string($string) {
            $bad = array("content-type","bcc:","to:","cc:","href");
            return str_replace($bad,"",$string);
        }
        
        $email_message .= "Nome: ".clean_string($nome)."\n";
        $email_message .= "Email: ".clean_string($email)."\n";
        $email_message .= "Assunto: ".clean_string($assunto)."\n";
        $email_message .= "Mensagem: ".clean_string($mensagem)."\n";
        
        $headers = 'From: '.$email."\r\n".
        'Reply-To: '.$email."\r\n" .
        'X-Mailer: PHP/' . phpversion();
        @mail($email_to, $assunto, $email_message, $headers);

        ?>
        
        <script>
            alert("Sua mensagem foi enviada com sucesso!");

            window.history.back();
        </script>
        
        <?php

    }

?>