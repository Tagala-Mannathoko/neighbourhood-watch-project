import Sidebar from '@/components/sidebar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function DashboardScreen() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [userFullName, setUserFullName] = useState('User');

  useEffect(() => {
    loadUserName();
  }, []);

  const loadUserName = async () => {
    try {
      const name = await AsyncStorage.getItem('userFullName');
      if (name) {
        setUserFullName(name);
      }
    } catch (error) {
      console.error('Error loading user name:', error);
    }
  };

  const handleSignOut = () => {
    router.replace('/login');
  };

  const handleNavigation = (screen: string) => {
    router.push(`/(tabs)/${screen}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <ScrollView style={styles.scrollView}>
        {/* Header with hamburger menu and TRAKM branding */}
        <View style={styles.header}>
          <TouchableOpacity 
            style={styles.hamburgerButton} 
            onPress={() => setSidebarOpen(true)}
          >
            <View style={styles.hamburgerLine} />
            <View style={styles.hamburgerLine} />
            <View style={styles.hamburgerLine} />
          </TouchableOpacity>
          
          <View style={styles.titleContainer}>
            <Image 
              source={require('@/assets/images/TRAKM-icon.png')} 
              style={styles.icon}
              resizeMode="contain"
            />
            <Text style={styles.brandTitle}>TRAKM</Text>
          </View>
          
          <View style={styles.headerSpacer} />
        </View>

        {/* User Greeting */}
        <View style={styles.greetingSection}>
          <Text style={styles.greeting}>Welcome back,</Text>
          <Text style={styles.userName}>{userFullName}</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchSection}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search alerts, officers, or locations..."
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Main Dashboard Grid - 2x2 squares */}
        <View style={styles.dashboardGrid}>
          <TouchableOpacity style={styles.dashboardCard} onPress={() => handleNavigation('patrol-monitoring')}>
            <Text style={styles.cardTitle}>Live Patrol Maps</Text>
            <Text style={styles.cardSubtitle}>Real-time officer locations</Text>
            <View style={styles.cardIcon}>
              <Text style={styles.cardIconText}>🗺️</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.dashboardCard} onPress={() => handleNavigation('reporting-analytics')}>
            <Text style={styles.cardTitle}>Patrol Trends</Text>
            <Text style={styles.cardSubtitle}>Analytics & insights</Text>
            <View style={styles.cardIcon}>
              <Text style={styles.cardIconText}>📊</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.dashboardCard} onPress={() => handleNavigation('emergency-alerts')}>
            <Text style={styles.cardTitle}>Active Alerts</Text>
            <Text style={styles.cardSubtitle}>Emergency notifications</Text>
            <View style={styles.cardIcon}>
              <Text style={styles.cardIconText}>🚨</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.dashboardCard}>
            <Text style={styles.cardTitle}>Scan Option</Text>
            <Text style={styles.cardSubtitle}>QR code scanner</Text>
            <View style={styles.cardIcon}>
              <Text style={styles.cardIconText}>📱</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Active Alerts Section */}
        <View style={styles.alertsSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Active Alerts</Text>
            <Text style={styles.sectionSubtitle}>Ongoing incidents requiring attention</Text>
          </View>
          
          <View style={styles.alertList}>
            <View style={[styles.alertItem, styles.highPriority]}>
              <View style={styles.alertHeader}>
                <Text style={styles.alertTitle}>Armed robbery – Market Street</Text>
                <Text style={styles.priorityHigh}>HIGH</Text>
              </View>
            </View>
            
            <View style={[styles.alertItem, styles.mediumPriority]}>
              <View style={styles.alertHeader}>
                <Text style={styles.alertTitle}>Suspicious vehicle – Zone 4</Text>
                <Text style={styles.priorityMedium}>MED</Text>
              </View>
            </View>
            
            <View style={[styles.alertItem, styles.lowPriority]}>
              <View style={styles.alertHeader}>
                <Text style={styles.alertTitle}>Noise complaint – Block C</Text>
                <Text style={styles.priorityLow}>LOW</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Stats Horizontal Rectangle - 3 columns */}
        <View style={styles.statsRectangle}>
          <View style={styles.statColumn}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Active Alerts</Text>
            <Text style={styles.statSubtext}>2 High Priority</Text>
          </View>
          
          <View style={styles.statDivider} />
          
          <View style={styles.statColumn}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Active Officers</Text>
            <Text style={styles.statSubtext}>On duty now</Text>
          </View>
          
          <View style={styles.statDivider} />
          
          <View style={styles.statColumn}>
            <Text style={styles.statNumber}>14</Text>
            <Text style={styles.statLabel}>Patrols Done</Text>
            <Text style={styles.statSubtext}>This week</Text>
          </View>
        </View>

        {/* Active Zones */}
        <View style={styles.zonesSection}>
          <Text style={styles.sectionTitle}>Active Zones</Text>
          
          <View style={styles.zoneList}>
            <View style={styles.zoneItem}>
              <View style={styles.zoneIndicator} />
              <View style={styles.zoneInfo}>
                <Text style={styles.zoneName}>Zone A – North Block</Text>
                <Text style={styles.zoneStatus}>Patrolling</Text>
              </View>
            </View>
            
            <View style={styles.zoneItem}>
              <View style={[styles.zoneIndicator, styles.zoneUnpatrolled]} />
              <View style={styles.zoneInfo}>
                <Text style={styles.zoneName}>Zone B – East Sector</Text>
                <Text style={styles.zoneStatus}>Unpatrolled</Text>
              </View>
            </View>
            
            <View style={styles.zoneItem}>
              <View style={[styles.zoneIndicator, styles.zonePending]} />
              <View style={styles.zoneInfo}>
                <Text style={styles.zoneName}>Zone C – Market Area</Text>
                <Text style={styles.zoneStatus}>Pending</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.mapButton}>
            <Text style={styles.mapButtonText}>Live Patrol Map</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  hamburgerButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hamburgerLine: {
    width: 20,
    height: 2,
    backgroundColor: '#ffffff',
    marginVertical: 2,
    borderRadius: 1,
  },
  headerSpacer: {
    width: 30,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  brandTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  searchSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  searchInput: {
    backgroundColor: '#2a2a2a',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    color: '#ffffff',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  greetingSection: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  greeting: {
    fontSize: 18,
    color: '#cccccc',
    marginBottom: 4,
  },
  userName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  dashboardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    marginBottom: 24,
    gap: 12,
  },
  dashboardCard: {
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    padding: 16,
    flex: 1,
    minWidth: '45%',
    aspectRatio: 1,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#333',
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardSubtitle: {
    color: '#cccccc',
    fontSize: 12,
    marginBottom: 8,
  },
  cardIcon: {
    alignItems: 'flex-end',
  },
  cardIconText: {
    fontSize: 24,
  },
  alertsSection: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  sectionHeader: {
    marginBottom: 16,
  },
  alertList: {
    gap: 12,
  },
  alertItem: {
    backgroundColor: '#2a2a2a',
    padding: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
  },
  highPriority: {
    borderLeftColor: '#ff4444',
  },
  mediumPriority: {
    borderLeftColor: '#ffaa00',
  },
  lowPriority: {
    borderLeftColor: '#00aa44',
  },
  alertHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  alertTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  priorityHigh: {
    color: '#ff4444',
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: '#ff444420',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  priorityMedium: {
    color: '#ffaa00',
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: '#ffaa0020',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  priorityLow: {
    color: '#00aa44',
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: '#00aa4420',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statsRectangle: {
    flexDirection: 'row',
    backgroundColor: '#2a2a2a',
    marginHorizontal: 20,
    marginBottom: 24,
    borderRadius: 12,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: '#333',
  },
  statColumn: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  statDivider: {
    width: 1,
    backgroundColor: '#333',
    marginVertical: 8,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 2,
  },
  statSubtext: {
    fontSize: 12,
    color: '#cccccc',
    textAlign: 'center',
  },
  zonesSection: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  zoneList: {
    marginBottom: 16,
  },
  zoneItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  zoneIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#00aa44',
    marginRight: 12,
  },
  zoneUnpatrolled: {
    backgroundColor: '#ff4444',
  },
  zonePending: {
    backgroundColor: '#ffaa00',
  },
  zoneInfo: {
    flex: 1,
  },
  zoneName: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  zoneStatus: {
    color: '#cccccc',
    fontSize: 12,
  },
  mapButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  mapButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

