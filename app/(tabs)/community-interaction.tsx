import React, { useState } from 'react';
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

export default function CommunityInteractionScreen() {
  const [message, setMessage] = useState('');

  const communityUpdates = [
    {
      id: 1,
      title: 'Community Safety Meeting',
      date: '2025-01-15',
      time: '7:00 PM',
      location: 'Community Center',
      description: 'Monthly community safety meeting to discuss neighborhood concerns and patrol updates.',
      type: 'Meeting'
    },
    {
      id: 2,
      title: 'Neighborhood Watch Program',
      date: '2025-01-12',
      time: '6:30 PM',
      location: 'Block A Community Hall',
      description: 'Introduction to the new neighborhood watch program and volunteer opportunities.',
      type: 'Program'
    },
    {
      id: 3,
      title: 'Safety Awareness Campaign',
      date: '2025-01-10',
      time: 'All Day',
      location: 'Market Square',
      description: 'Public safety awareness campaign with information booths and safety demonstrations.',
      type: 'Campaign'
    }
  ];

  const recentInteractions = [
    {
      id: 1,
      resident: 'Sarah Johnson',
      location: 'Block B, Unit 15',
      concern: 'Suspicious activity near playground',
      status: 'Resolved',
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      resident: 'Mike Chen',
      location: 'Block A, Unit 8',
      concern: 'Noise complaint from construction',
      status: 'Under Review',
      timestamp: '4 hours ago'
    },
    {
      id: 3,
      resident: 'Lisa Rodriguez',
      location: 'Block C, Unit 22',
      concern: 'Request for increased patrol frequency',
      status: 'In Progress',
      timestamp: '1 day ago'
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message
      setMessage('');
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
          <Text style={styles.pageTitle}>Community Interaction</Text>
          <Text style={styles.subtitle}>Engage with residents and community events</Text>

          {/* Quick Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>24</Text>
              <Text style={styles.statLabel}>Active Residents</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>8</Text>
              <Text style={styles.statLabel}>Pending Concerns</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>3</Text>
              <Text style={styles.statLabel}>Upcoming Events</Text>
            </View>
          </View>

          {/* Community Updates */}
          <View style={styles.updatesSection}>
            <Text style={styles.sectionTitle}>Community Updates</Text>
            <View style={styles.updatesList}>
              {communityUpdates.map((update) => (
                <View key={update.id} style={styles.updateCard}>
                  <View style={styles.updateHeader}>
                    <Text style={styles.updateTitle}>{update.title}</Text>
                    <View style={styles.updateType}>
                      <Text style={styles.updateTypeText}>{update.type}</Text>
                    </View>
                  </View>
                  <Text style={styles.updateDescription}>{update.description}</Text>
                  <View style={styles.updateDetails}>
                    <Text style={styles.updateDate}>{update.date} at {update.time}</Text>
                    <Text style={styles.updateLocation}>{update.location}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* Recent Interactions */}
          <View style={styles.interactionsSection}>
            <Text style={styles.sectionTitle}>Recent Interactions</Text>
            <View style={styles.interactionsList}>
              {recentInteractions.map((interaction) => (
                <View key={interaction.id} style={styles.interactionCard}>
                  <View style={styles.interactionHeader}>
                    <Text style={styles.residentName}>{interaction.resident}</Text>
                    <View style={[
                      styles.statusBadge,
                      { backgroundColor: interaction.status === 'Resolved' ? '#00aa4420' : 
                                        interaction.status === 'Under Review' ? '#ffaa0020' : '#007AFF20' }
                    ]}>
                      <Text style={[
                        styles.statusText,
                        { color: interaction.status === 'Resolved' ? '#00aa44' : 
                                  interaction.status === 'Under Review' ? '#ffaa00' : '#007AFF' }
                      ]}>
                        {interaction.status}
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.concernText}>{interaction.concern}</Text>
                  <View style={styles.interactionFooter}>
                    <Text style={styles.locationText}>{interaction.location}</Text>
                    <Text style={styles.timestampText}>{interaction.timestamp}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* Quick Message */}
          <View style={styles.messageSection}>
            <Text style={styles.sectionTitle}>Quick Message</Text>
            <View style={styles.messageContainer}>
              <TextInput
                style={styles.messageInput}
                placeholder="Send a message to the community..."
                placeholderTextColor="#666"
                value={message}
                onChangeText={setMessage}
                multiline
                numberOfLines={3}
              />
              <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
                <Text style={styles.sendButtonText}>Send</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionSection}>
            <TouchableOpacity style={styles.primaryAction}>
              <Text style={styles.primaryActionText}>Schedule Community Meeting</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.secondaryAction}>
              <Text style={styles.secondaryActionText}>View All Residents</Text>
            </TouchableOpacity>
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
  statCard: {
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
  updatesSection: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
  },
  updatesList: {
    gap: 12,
  },
  updateCard: {
    backgroundColor: '#2a2a2a',
    padding: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  updateHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  updateTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    flex: 1,
    marginRight: 12,
  },
  updateType: {
    backgroundColor: '#333',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  updateTypeText: {
    fontSize: 12,
    color: '#007AFF',
    fontWeight: '600',
  },
  updateDescription: {
    fontSize: 14,
    color: '#cccccc',
    lineHeight: 20,
    marginBottom: 12,
  },
  updateDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  updateDate: {
    fontSize: 12,
    color: '#ffffff',
  },
  updateLocation: {
    fontSize: 12,
    color: '#cccccc',
  },
  interactionsSection: {
    marginBottom: 32,
  },
  interactionsList: {
    gap: 12,
  },
  interactionCard: {
    backgroundColor: '#2a2a2a',
    padding: 16,
    borderRadius: 8,
  },
  interactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  residentName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  concernText: {
    fontSize: 14,
    color: '#cccccc',
    marginBottom: 8,
  },
  interactionFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationText: {
    fontSize: 12,
    color: '#007AFF',
  },
  timestampText: {
    fontSize: 12,
    color: '#cccccc',
  },
  messageSection: {
    marginBottom: 32,
  },
  messageContainer: {
    backgroundColor: '#2a2a2a',
    borderRadius: 8,
    padding: 16,
  },
  messageInput: {
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    color: '#ffffff',
    textAlignVertical: 'top',
    marginBottom: 12,
    minHeight: 80,
  },
  sendButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  actionSection: {
    gap: 12,
  },
  primaryAction: {
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

