
import { StyleSheet, Text, View } from 'react-native';

export default function Requestt() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Requestt</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title:{
    fontSize: 23,
    fontWeight:'bold'
  }
});
