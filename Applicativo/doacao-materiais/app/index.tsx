// Data de criação: 2024-06-01
// Nome: Ariel Vieira - doacao-materiais
// Descrição: Aplicativo para cadastro de doações de materiais, focado nos ODS 1 (Erradicação da Pobreza) e ODS 10 (Redução das Desigualdades). Permite que os usuários registrem doações, incluindo o material, quantidade e local, facilitando a conexão entre doadores e instituições necessitadas. O aplicativo é simples e intuitivo, promovendo a solidariedade e o apoio às comunidades vulneráveis.
// Email: ariel.vieira@yandex.com


import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

interface Doacao {
  id: string;
  material: string;
  quantidade: string;
  local: string;
}

export default function HomeScreen() {

  const [material, setMaterial] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [local, setLocal] = useState('');

  const [doacoes, setDoacoes] = useState<Doacao[]>([]);

  function adicionarDoacao() {

    if (!material || !quantidade || !local) {
      alert('Preencha todos os campos');
      return;
    }

    const novaDoacao: Doacao = {
      id: Math.random().toString(),
      material,
      quantidade,
      local
    };

    setDoacoes([...doacoes, novaDoacao]);

    setMaterial('');
    setQuantidade('');
    setLocal('');
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Doação de Materiais
      </Text>

      <Text style={styles.subtitulo}>
        ODS 1 e ODS 10
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Material"
        value={material}
        onChangeText={setMaterial}
      />

      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
      />

      <TextInput
        style={styles.input}
        placeholder="Local"
        value={local}
        onChangeText={setLocal}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={adicionarDoacao}
      >
        <Text style={styles.textoBotao}>
          Cadastrar Doação
        </Text>
      </TouchableOpacity>

      <FlatList
        data={doacoes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>Material: {item.material}</Text>
            <Text>Quantidade: {item.quantidade}</Text>
            <Text>Local: {item.local}</Text>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
    backgroundColor: '#fff'
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5
  },

  subtitulo: {
    fontSize: 16,
    marginBottom: 20,
    color: '#555'
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10
  },

  botao: {
    backgroundColor: '#2e86de',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold'
  },

  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10
  }

});