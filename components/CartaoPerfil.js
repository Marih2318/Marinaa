import React from 'react';
import { View, StyleSheet } from 'react-native';
import CartaoPerfil from './components/CartaoPerfil';

export default fuction CartaoPerfil({nome, profissao, cidade, email})

return(
    <View>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.profissao}>{profissao}</Text>
      <Text style={styles.cidade}>{cidade}</Text>
      <Text style={styles.email}>{email}</Text>

      <TouchableOpacity style={styles.botao} onPress={enviarEmail}>
        <Text style={styles.textoBotao}>Enviar E-mail</Text>
      </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 12,
        elevation: 5,
        alignItems: "center",
        width: 200,
    }

    nome: {
        fontSize: 20,
        fontWeight: "bold",
    }

    profissao: {
        fontSize: 16,
        color: "#555"
    }

    cidade: {
        fontSize: 14,
        color: "#777"
    }

    email: {
        fontSize: 14,
        color: "#999"
    }


})