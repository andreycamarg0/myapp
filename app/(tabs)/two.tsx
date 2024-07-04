import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const CadastroProduto = () => {
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precoBruto, setPrecoBruto] = useState('');
  const [precoVenda, setPrecoVenda] = useState('');
  const [subtitulo, setSubtitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagemUri, setImagemUri] = useState(null);
  const [selectedImage, setSelectedImage] = useState('testa');
  const [takenImage, setTakenImage] = useState('teste');

 const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
     if (!result.cancelled) {
             setSelectedImage(result.assets[0].uri);
           }
         };

         const takePicture = async () => {
           let result = await ImagePicker.launchCameraAsync({
             mediaTypes: ImagePicker.MediaTypeOptions.All,
             allowsEditing: true,
             aspect: [4, 3],
             quality: 1,
           });

           setTakenImage(result.assets[0].uri);
         };

  const salvarProduto = () => {
    console.log({
      nome,
      categoria,
      precoBruto,
      precoVenda,
      subtitulo,
      descricao,
      imagemUri,
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={text => setNome(text)}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Categoria"
        value={categoria}
        onChangeText={text => setCategoria(text)}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Preço Bruto"
        value={precoBruto}
        onChangeText={text => setPrecoBruto(text)}
        keyboardType="numeric"
        style={styles.textInput}
      />
      <TextInput
        placeholder="Preço de Venda"
        value={precoVenda}
        onChangeText={text => setPrecoVenda(text)}
        keyboardType="numeric"
        style={styles.textInput}
      />
      <TextInput
        placeholder="Subtítulo"
        value={subtitulo}
        onChangeText={text => setSubtitulo(text)}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Descrição"
        value={descricao}
        onChangeText={text => setDescricao(text)}
        multiline={true}
        numberOfLines={4}
        style={styles.textInput}
      />

      <View style={styles.imageContainer}>
        <Button title="Tirar uma foto" onPress={takePicture} />
                 {takenImage && <Image source={{ uri: takenImage }} style={styles.image} />}

      </View>

      <Button title="Salvar Produto" onPress={salvarProduto} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textInput: {
    marginBottom: 10,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default CadastroProduto;










