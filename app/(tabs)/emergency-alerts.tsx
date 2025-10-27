import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function EmergencyAlertsScreen() {
  const alerts = [
    {
      id: 1,
      title: 'Armed robbery – Market Street',
      priority: 'HIGH',
      time: '2 minutes ago',
      description: 'Reported armed robbery in progress at Market Street intersection. Multiple suspects reported.',
      status: 'Active'
    },
    {
      id: 2,
      title: 'Suspicious vehicle – Zone 4',
      priority: 'MED',
      time: '15 minutes ago',
      description: 'Suspicious vehicle reported circling residential area. Vehicle description: White sedan, license plate ABC-123.',
      status: 'Under Investigation'
    },
    {
      id: 3,
      title: 'Noise complaint – Block C',
      priority: 'LOW',
      time: '1 hour ago',
      description: 'Residents reporting excessive noise from construction site. Ongoing issue.',
      status: 'Pending'
    },
    {
      id: 4,
      title: 'Traffic accident – Highway 101',
      priority: 'MED',
      time: '2 hours ago',
      description: 'Multi-vehicle accident reported on Highway 101. Emergency services dispatched.',
      status: 'Resolved'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'HIGH': return '#ff4444';
      case 'MED': return '#ffaa00';
      case 'LOW': return '#00aa44';
      default: return '#666';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return '#ff4444';
      case 'Under Investigation': return '#ffaa00';
      case 'Pending': return '#ffaa00';
      case 'Resolved': return '#00aa44';
      default: return '#666';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Image 
              source={require('@/assets/images/TRAKM-icon.png')} 
              style={styles.icon}
              resizeMode="contain"
            />
            <Text style={styles.brandTitle}>TRAKM</Text>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.pageTitle}>Emergency Alerts</Text>
          <Text style={styles.subtitle}>Real-time incident monitoring and response</Text>

          {/* Alert Statistics */}
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>4</Text>
              <Text style={styles.statLabel}>Total Alerts</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>1</Text>
              <Text style={styles.statLabel}>Active</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>2</Text>
              <Text style={styles.statLabel}>In Progress</Text>
            </View>
          </View>

          {/* Alerts List */}
          <View style={styles.alertsContainer}>
            {alerts.map((alert) => (
              <View key={alert.id} style={styles.alertCard}>
                <View style={styles.alertHeader}>
                  <View style={styles.alertTitleContainer}>
                    <Text style={styles.alertTitle}>{alert.title}</Text>
                    <View style={styles.priorityContainer}>
                      <Text style={[styles.priority, { color: getPriorityColor(alert.priority) }]}>
                        {alert.priority}
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.alertTime}>{alert.time}</Text>
                </View>
                
                <Text style={styles.alertDescription}>{alert.description}</Text>
                
                <View style={styles.alertFooter}>
                  <View style={[styles.statusBadge, { backgroundColor: getStatusColor(alert.status) + '20' }]}>
                    <Text style={[styles.statusText, { color: getStatusColor(alert.status) }]}>
                      {alert.status}
                    </Text>
                  </View>
                  
                  <TouchableOpacity style={styles.actionButton}>
                    <Text style={styles.actionButtonText}>View Details</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>

          {/* Quick Actions */}
          <View style={styles.quickActions}>
            <Text style={styles.sectionTitle}>Quick Actions</Text>
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.primaryAction}>
                <Text style={styles.primaryActionText}>Report New Alert</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.secondaryAction}>
                <Text style={styles.secondaryActionText}>View Map</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
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
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#cccccc',
    textAlign: 'center',
    marginBottom: 32,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 32,
  },
  statItem: {
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    padding: 16,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 4,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#cccccc',
    textAlign: 'center',
  },
  alertsContainer: {
    marginBottom: 32,
  },
  alertCard: {
    backgroundColor: '#2a2a2a',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  alertHeader: {
    marginBottom: 12,
  },
  alertTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    flex: 1,
    marginRight: 12,
  },
  priorityContainer: {
    backgroundColor: '#333',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  priority: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  alertTime: {
    fontSize: 12,
    color: '#cccccc',
  },
  alertDescription: {
    fontSize: 14,
    color: '#cccccc',
    lineHeight: 20,
    marginBottom: 16,
  },
  alertFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  actionButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  actionButtonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  quickActions: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  primaryAction: {
    flex: 1,
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryActionText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryAction: {
    flex: 1,
    backgroundColor: '#333',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  secondaryActionText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

