import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const EntryList = () => {
  return (
    <View>
      <Text style={styles.title}> Últimos Lançamentos</Text>
      <FlatList
        data={[
          {key: 'Padaria Asa Branca: $10'},
          {key: 'Supermecado Isadora: $190'},
          {key: 'Posto Ipiranga: $190'},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default EntryList;
