import * as React from 'react';
import {View, Text, Button} from 'react-native';

function Home({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is the Home Screen!! Navigation Oke.</Text>
      <Button
        title="Click me to go Details Screens!"
        onPress={() => navigation.navigate('DetailScreen')}
      />
    </View>
  );
}

export default Home;
