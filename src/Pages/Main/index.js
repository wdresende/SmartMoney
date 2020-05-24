import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Main = ({navigation}) => {
  return (
    <View style={styles.conatiner}>
      <BalancePanel />
      <Button
        title="Adicionar"
        onPress={() => navigation.navigate('NewEntry')}
      />
      <EntrySummary />
      <EntryList />
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    padding: 10,
  },
});

export default Main;
