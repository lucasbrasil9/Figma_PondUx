import React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, Text } from 'react-native';
import NotificationCard from '../components/NotificationsCard'; // Adjust path if necessary
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

const NotificationScreen = () => {
  const notifications = [
    {
      id: '1',
      title: 'Analise o perfil de Anna',
      message: 'Anna está com toda sua carteira aplicada em ações.',
      time: '24h atrás',
      count: 1,
      iconName: 'person-circle-outline' as keyof typeof Ionicons.glyphMap,
      iconColor: '#3B82F6',
      iconBgColor: 'bg-blue-50',
    },
    {
      id: '2',
      title: 'Atualização do Sistema',
      message: 'Uma nova versão do aplicativo está disponível. Atualize agora!',
      time: '2d atrás',
      count: 0,
      iconName: 'arrow-down-circle-outline' as keyof typeof Ionicons.glyphMap,
      iconColor: '#10B981',
      iconBgColor: 'bg-green-50',
    },
    {
      id: '3',
      title: 'Lembrete Importante',
      message: 'Sua reunião com a equipe de design é amanhã às 10:00.',
      time: '1h atrás',
      count: 1,
      iconName: 'alarm-outline' as keyof typeof Ionicons.glyphMap,
      iconColor: '#F59E0B',
      iconBgColor: 'bg-amber-50',
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Notificações</Text>
        <View style={styles.cardList}>
          {notifications.map((notification) => (
            <NotificationCard
              key={notification.id}
              title={notification.title}
              message={notification.message}
              time={notification.time}
              iconName={notification.iconName}
              iconColor={notification.iconColor}
              iconBgColor={notification.iconBgColor}
              onPress={() => console.log(`Notification ${notification.id} tapped!`)}
            />
          ))}
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  container: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 10,
    color: '#333',
  },
  cardList: {
    paddingHorizontal: 16,
    gap: 12,
    alignItems: 'center',
  },
});

export default NotificationScreen;