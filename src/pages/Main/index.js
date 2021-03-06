import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import ActionFooter, {
  ActionSecondaryButton,
} from '../../components/Core/ActionFooter';

import {cleanUserAuth} from '../../services/Auth';

import Colors from '../../styles/Colors';

const Main = ({navigation}) => {
  const onLogoutPress = async () => {
    await cleanUserAuth();
    navigation.reset({
      index: 0,
      key: null,
      routes: [{name: 'SignIn'}],
    });
  };

  return (
    <View style={styles.container}>
      <BalancePanel onNewEntryPress={() => navigation.navigate('NewEntry')} />
      <ScrollView>
        <EntrySummary
          onPressActionButton={() => navigation.navigate('Report')}
        />
        <EntryList />
      </ScrollView>
      <ActionFooter>
        <ActionSecondaryButton title="Logout" onPress={onLogoutPress} />
      </ActionFooter>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default Main;
