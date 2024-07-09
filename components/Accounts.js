import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

const accountsData = [
  { id: '1', name: 'ກຳລັງກວດສອບບັນຊີ', balance: '₭50,000,000' },
  { id: '2', name: 'ບັນ​ຊີ​ເງິນ​ຝາກ​ປະ​ຢັດ', balance: '₭10,000,000' },
  { id: '3', name: 'ບັນຊີການລົງທຶນ', balance: '₭25,000,000' },
  { id: '4', name: 'ບັນ​ຊີ​ເງິນ​ຝາກ​ປະ​ຢັດ', balance: '₭225,000,000' },
  { id: '5', name: 'ບັນຊີການລົງທຶນ', balance: '₭125,000,000' },
  { id: '6', name: 'ບັນ​ຊີ​ເງິນ​ຝາກ​ປະ​ຢັດ', balance: '₭100,000,000' },
];

const AccountItem = ({ name, balance }) => (
  <View style={styles.accountItem}>
    <Text style={styles.accountName}>{name}</Text>
    <Text style={styles.accountBalance}>{balance}</Text>
  </View>
);

const Accounts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ບັນຊີ</Text>
      <FlatList
        data={accountsData}
        renderItem={({ item }) => <AccountItem name={item.name} balance={item.balance} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Accounts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontFamily:'Phetsarath OT',
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  accountItem: {
    fontFamily:'Phetsarath OT',
    backgroundColor: '#ffffff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  accountName: {
    fontSize: 18,
    fontFamily:'Phetsarath OT',
    fontWeight: '600',
  },
  accountBalance: {
    fontFamily:'Phetsarath OT',
    fontSize: 16,
    color: '#888',
  },
});
