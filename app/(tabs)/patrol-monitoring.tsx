import React, { useState } from 'react';
import {
    Alert,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function PatrolMonitoringScreen() {
  const [comment, setComment] = useState('');
  const [scanHistory] = useState([
    { id: 1, timestamp: '10/10/2025 03:45', location: 'Zone A - North Block' },
    { id: 2, timestamp: '10/10/2025 05:30', location: 'Zone B - East Sector' },
    { id: 3, timestamp: '10/10/2025 07:15', location: 'Zone C - Market Area' },
    { id: 4, timestamp: '10/10/2025 09:00', location: 'Zone A - North Block' },
  ]);

  const handleSave = () => {
    if (!comment.trim()) {
      Alert.alert('Error', 'Please add a comment before saving');
      return;
    }
    
    Alert.alert('Success', 'Scan saved!', [
      { text: 'OK', onPress: () => setComment('') }
    ]);
  };

  const handleBackToHome = () => {
    // Navigation would be handled by the tab system
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
          <Text style={styles.pageTitle}>Patrol Logging</Text>
          
          {/* Comment Section */}
          <View style={styles.commentSection}>
            <Text style={styles.sectionTitle}>Add Comment</Text>
            <TextInput
              style={styles.commentInput}
              placeholder="Add Comment..."
              placeholderTextColor="#666"
              value={comment}
              onChangeText={setComment}
              multiline
              numberOfLines={4}
            />
          </View>

          {/* Scan History */}
          <View style={styles.historySection}>
            <Text style={styles.sectionTitle}>Scan History</Text>
            <View style={styles.historyList}>
              {scanHistory.map((scan) => (
                <View key={scan.id} style={styles.historyItem}>
                  <Text style={styles.scanNumber}>Scan {scan.id}</Text>
                  <Text style={styles.scanTimestamp}>{scan.timestamp}</Text>
                  <Text style={styles.scanLocation}>{scan.location}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonSection}>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.backButton} onPress={handleBackToHome}>
              <Text style={styles.backButtonText}>Back to Home</Text>
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
    marginBottom: 32,
    textAlign: 'center',
  },
  commentSection: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 12,
  },
  commentInput: {
    backgroundColor: '#2a2a2a',
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    color: '#ffffff',
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#333',
  },
  historySection: {
    marginBottom: 32,
  },
  historyList: {
    gap: 12,
  },
  historyItem: {
    backgroundColor: '#2a2a2a',
    padding: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  scanNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 4,
  },
  scanTimestamp: {
    fontSize: 14,
    color: '#cccccc',
    marginBottom: 2,
  },
  scanLocation: {
    fontSize: 14,
    color: '#ffffff',
  },
  buttonSection: {
    gap: 16,
  },
  saveButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  backButton: {
    backgroundColor: '#333',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});

