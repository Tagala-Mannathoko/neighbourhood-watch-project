import { router } from 'expo-router';
import React from 'react';
import {
    Animated,
    Dimensions,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const { width: screenWidth } = Dimensions.get('window');

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const slideAnimation = React.useRef(new Animated.Value(-screenWidth)).current;

  React.useEffect(() => {
    if (isOpen) {
      Animated.timing(slideAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnimation, {
        toValue: -screenWidth,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isOpen]);

  const handleNavigation = (screen: string) => {
    onClose();
    router.push(`/(tabs)/${screen}`);
  };

  const handleSignOut = () => {
    onClose();
    router.replace('/login');
  };

  if (!isOpen) return null;

  return (
    <>
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      />
      <Animated.View
        style={[
          styles.sidebar,
          {
            transform: [{ translateX: slideAnimation }],
          },
        ]}
      >
        <SafeAreaView style={styles.sidebarContent}>
          {/* Header */}
          <View style={styles.sidebarHeader}>
            <View style={styles.titleContainer}>
              <Image 
                source={require('@/assets/images/TRAKM-icon.png')} 
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={styles.brandTitle}>TRAKM</Text>
            </View>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>×</Text>
            </TouchableOpacity>
          </View>

          {/* Navigation Items */}
          <View style={styles.navigationSection}>
            <TouchableOpacity
              style={styles.navItem}
              onPress={() => handleNavigation('dashboard')}
            >
              <Text style={styles.navText}>Dashboard</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.navItem}
              onPress={() => handleNavigation('patrol-monitoring')}
            >
              <Text style={styles.navText}>Patrol Monitoring</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.navItem}
              onPress={() => handleNavigation('emergency-alerts')}
            >
              <Text style={styles.navText}>Emergency Alerts</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.navItem}
              onPress={() => handleNavigation('community-interaction')}
            >
              <Text style={styles.navText}>Community Interaction</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.navItem}
              onPress={() => handleNavigation('reporting-analytics')}
            >
              <Text style={styles.navText}>Reporting & Analytics</Text>
            </TouchableOpacity>
          </View>

          {/* User Info and Sign Out */}
          <View style={styles.userSection}>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>Kevin T. Mannathoko</Text>
              <Text style={styles.userRole}>Security Officer</Text>
            </View>
            <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
              <Text style={styles.signOutText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 998,
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: screenWidth * 0.8,
    backgroundColor: '#1a1a1a',
    zIndex: 999,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sidebarContent: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sidebarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    marginBottom: 20,
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
  closeButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  navigationSection: {
    flex: 1,
  },
  navItem: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#2a2a2a',
  },
  navText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  userSection: {
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  userInfo: {
    marginBottom: 16,
  },
  userName: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  userRole: {
    color: '#cccccc',
    fontSize: 14,
  },
  signOutButton: {
    backgroundColor: '#ff4444',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  signOutText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
