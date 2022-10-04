import { SafeAreaView, StyleSheet, View, Text, Image, Button } from 'react-native';
 
const Tela1 = ({navigation}) => {
 
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Logo do IFAL abaixo.
        </Text>
        <Image style={styles.image}
        source={require('./logo_ifal.png')}
        />
        
        <Button
          title="Ir à tela 2"
          onPress={() => navigation.navigate('Tela2')}
        />
      </View>
      <Text style={{textAlign: 'center', color: 'grey'}}>
        P Web II - Curso Introdutório ao React Native
      </Text>
    </SafeAreaView>
  );
};
 
export default Tela1;
 
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
    width: 300, 
    borderRadius: 50, 
    borderWidth: 2, 
    borderColor: '#bbb', 
  }
});
