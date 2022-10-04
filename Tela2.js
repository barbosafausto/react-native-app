import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';
 
const Tela2 = ({route}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Image 
        source={require('./minha_foto.jpeg')}
        style={styles.image}
        />
        <Text style={styles.heading}>
          Discente: José Fausto Vital Barbosa
        </Text>
        <Text style={styles.heading}>
          Matrícula: 2019323304
        </Text>
      </View>
      <Text style={{textAlign: 'center', color: 'grey'}}>
        P Web II - Curso Introdutório ao React Native
      </Text>
    </SafeAreaView>
  );
};
 
export default Tela2;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  image: {
    height: 400, 
    width: 230, 
    borderRadius: 100, 
    borderWidth: 1, 
    borderColor: '#bbb', 
  }
});