package login;

// importações necessárias para trabalhar com banco de dados
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

// classe responsável por fazer a conexão e validar usuário
public class User {

    // método que faz a conexão com o banco
    public Connection conectarBD() {
        Connection conn = null; // começa sem conexão

        try {
            // carrega o driver do MySQL
            Class.forName("com.mysql.Driver.Manager").newInstance();

            // URL de conexão com o banco (usuário e senha dentro da URL)
            String url = "jdbc:mysql://127.0.0.1/test?user=lopes&password=123";

            // cria a conexão com o banco
            conn = DriverManager.getConnection(url);

        } catch (Exception e) {
            // se der erro, não faz nada (isso é ruim, deveria tratar o erro)
        }

        return conn; // retorna a conexão (pode ser null)
    }

    public String nome = ""; // variável onde vai guardar o nome do usuário
    public boolean result = false; // variável que indica se o login deu certo

    // método para verificar se o usuário existe no banco
    public boolean verificarUsuario(String login, String senha) {

        String sql = ""; // vai guardar o comando SQL
        Connection conn = conectarBD(); // chama o método para conectar

        // monta o SQL para buscar o usuário no banco
        sql = "select nome from usuarios ";
        sql += "where login = '" + login + "'";
        sql += " and senha = '" + senha + "'";

        try {
            // cria o comando para enviar ao banco
            Statement st = conn.createStatement();

            // executa a consulta
            ResultSet rs = st.executeQuery(sql);

            // verifica se retornou algum registro
            if (rs.next()) {
                // se achou o usuário, pega o nome dele
                nome = rs.getString("nome");

                // login válido
                result = true;
            }

        } catch (Exception e) {
            // em caso de erro, também não faz nada (isso é outra falha)
        }

        return result; // retorna se o login deu certo ou não
    }

} // fim da classe
