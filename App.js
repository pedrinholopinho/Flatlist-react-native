import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableWithoutFeedback, Animated } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Livros: [
        { id: '1', nome: 'Harry Potter' },
        { id: '2', nome: 'O Senhor dos Anéis' },
        { id: '3', nome: 'Diário de um Banana' },
        { id: '4', nome: 'Cinquenta Tons de Cinza' },
        { id: '5', nome: 'O Diário de Anne Frank' },
      ],
      scaleValue: new Animated.Value(1), // Valor inicial para a animação de escala
    };
  }

  handlePressIn = () => {
    Animated.spring(this.state.scaleValue, {
      toValue: 0.8, // Valor de escala ao pressionar o botão
      useNativeDriver: true,
    }).start();
  };

  handlePressOut = () => {
    Animated.spring(this.state.scaleValue, {
      toValue: 1, // Valor de escala ao soltar o botão
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  handlePress = () => {
    // Lógica para ação ao pressionar o botão "Voltar"
    console.log('Botão Voltar pressionado!');
  };

  render() {
    const animatedStyle = {
      transform: [{ scale: this.state.scaleValue }],
    };

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.Livros}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.containerLivros}>
              <Text style={styles.text}>{item.nome}</Text>
            </View>
          )}
        />

        <TouchableWithoutFeedback
          onPressIn={this.handlePressIn}
          onPressOut={this.handlePressOut}
          onPress={this.handlePress}
        >
          <Animated.View style={[styles.button, animatedStyle]}>
            <Text style={styles.buttonText}>Voltar</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingBottom: 20,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLivros: {
    backgroundColor: '#4CAF50',
    height: 80,
    width:320,
    marginVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    height: 50,
    width: '70%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    elevation: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
