import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import {saveEntry} from '../../services/Entries';

const Main = ({navigation}) => {
  const currentBalance = 2064.35;

  // () => navigation.navigate('NewEntry')

  const save = () => {
    saveEntry();
  };

  const entriesGrouped = [
    {key: '1', description: 'Alimentação', amount: 200},
    {key: '2', description: 'Combustível', amount: 12},
    {key: '3', description: 'Aluguel', amount: 120},
    {key: '4', description: 'Lazer', amount: 250},
    {key: '5', description: 'Outros', amount: 1200},
  ];

  const entries = [
    {key: '1', description: 'Padaria Asa Branca', amount: '10'},
    {key: '2', description: 'Supermecado Isadora', amount: '190'},
    {key: '3', description: 'Posto Ipiranga', amount: '190'},
  ];

  return (
    <View style={styles.conatiner}>
      <BalancePanel currentBalance={currentBalance} />
      <Button title="Adicionar" onPress={save} />
      <EntrySummary entriesGrouped={entriesGrouped} />
      <EntryList entries={entries} />
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
