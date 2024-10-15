import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Switch, FlatList, TouchableOpacity } from 'react-native';
import backgroundImage from '../../assets/Bg.jpg'; // Asegúrate de que la ruta sea correcta

const options = [
  { id: '1', name: 'Notificaciones', screen: 'NotificationsSettings' },
  { id: '2', name: 'Almacenamiento', screen: 'StorageSettings' },
  { id: '3', name: 'Vínculos', screen: 'LinksSettings' },
  { id: '4', name: 'Lenguaje', screen: 'LanguageSettings' },
];

const SettingsScreen = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  const renderOptionItem = ({ item }) => (
    <TouchableOpacity
      style={styles.optionItem}
      onPress={() => navigation.navigate(item.screen)} // Navegar a la opción seleccionada
    >
      <Text style={styles.optionText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Image
        source={backgroundImage}
        style={styles.backgroundImage}
      />
      <View style={styles.overlay}>
        <View style={styles.themeOption}>
          <Text style={styles.title}>Modo Oscuro</Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleSwitch}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
            style={styles.switch}
          />
        </View>
        <View style={styles.gridContainer}>
          <FlatList
            data={options}
            renderItem={renderOptionItem}
            keyExtractor={item => item.id}
            numColumns={2}
            contentContainerStyle={styles.optionList}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  backgroundImage: {
    width: '100%',
    height: '50%',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    paddingTop: '50%',
    width: '100%',
  },
  themeOption: {
    width: '90%',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ededed',
  },
  title: {
    fontSize: 30,
  },
  switch: {
    height: 30,
    width: 50, // Aumentado para mejor visualización
  },
  gridContainer: {
    marginTop: 50,
    width: '90%',
    flex: 2,
    justifyContent: 'space-between',
  },
  optionList: {
    flexGrow: 1,
  },
  optionItem: {
    width: '45%',
    height: 200,
    backgroundColor: '#ededed',
    padding: 10,
    borderRadius: 10, // Añadido para un mejor diseño
    alignItems: 'center', // Centramos el texto
    justifyContent: 'center',
  },
  optionText: {
    fontSize: 18,
  },
});

export default SettingsScreen;
