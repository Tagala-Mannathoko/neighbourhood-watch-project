import React, { useState } from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default function ReportingAnalyticsScreen() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [dateRange, setDateRange] = useState('week');

  const filters = [
    { id: 'all', label: 'All Data' },
    { id: 'patrols', label: 'Patrols' },
    { id: 'alerts', label: 'Alerts' },
    { id: 'incidents', label: 'Incidents' },
  ];

  const dateRanges = [
    { id: 'day', label: 'Today' },
    { id: 'week', label: 'This Week' },
    { id: 'month', label: 'This Month' },
    { id: 'year', label: 'This Year' },
  ];

  const analyticsData = {
    totalPatrols: 156,
    totalAlerts: 23,
    resolvedIncidents: 18,
    activeOfficers: 12,
    averageResponseTime: '4.2 min',
    patrolEfficiency: '87%',
  };

  const recentReports = [
    { id: 1, title: 'Weekly Patrol Summary', date: '2025-01-10', type: 'Patrol Report' },
    { id: 2, title: 'Emergency Response Analysis', date: '2025-01-09', type: 'Alert Report' },
    { id: 3, title: 'Zone Coverage Report', date: '2025-01-08', type: 'Coverage Report' },
    { id: 4, title: 'Incident Resolution Summary', date: '2025-01-07', type: 'Incident Report' },
  ];

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
          <Text style={styles.pageTitle}>Reporting & Analytics</Text>
          <Text style={styles.subtitle}>Data insights and report generation</Text>

          {/* Filter Section */}
          <View style={styles.filterSection}>
            <Text style={styles.sectionTitle}>Filters</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
              {filters.map((filter) => (
                <TouchableOpacity
                  key={filter.id}
                  style={[
                    styles.filterButton,
                    selectedFilter === filter.id && styles.filterButtonActive
                  ]}
                  onPress={() => setSelectedFilter(filter.id)}
                >
                  <Text style={[
                    styles.filterText,
                    selectedFilter === filter.id && styles.filterTextActive
                  ]}>
                    {filter.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Date Range */}
          <View style={styles.dateSection}>
            <Text style={styles.sectionTitle}>Date Range</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateScroll}>
              {dateRanges.map((range) => (
                <TouchableOpacity
                  key={range.id}
                  style={[
                    styles.dateButton,
                    dateRange === range.id && styles.dateButtonActive
                  ]}
                  onPress={() => setDateRange(range.id)}
                >
                  <Text style={[
                    styles.dateText,
                    dateRange === range.id && styles.dateTextActive
                  ]}>
                    {range.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Analytics Overview */}
          <View style={styles.analyticsSection}>
            <Text style={styles.sectionTitle}>Analytics Overview</Text>
            <View style={styles.analyticsGrid}>
              <View style={styles.analyticsCard}>
                <Text style={styles.analyticsNumber}>{analyticsData.totalPatrols}</Text>
                <Text style={styles.analyticsLabel}>Total Patrols</Text>
              </View>
              <View style={styles.analyticsCard}>
                <Text style={styles.analyticsNumber}>{analyticsData.totalAlerts}</Text>
                <Text style={styles.analyticsLabel}>Total Alerts</Text>
              </View>
              <View style={styles.analyticsCard}>
                <Text style={styles.analyticsNumber}>{analyticsData.resolvedIncidents}</Text>
                <Text style={styles.analyticsLabel}>Resolved Incidents</Text>
              </View>
              <View style={styles.analyticsCard}>
                <Text style={styles.analyticsNumber}>{analyticsData.activeOfficers}</Text>
                <Text style={styles.analyticsLabel}>Active Officers</Text>
              </View>
            </View>

            <View style={styles.performanceMetrics}>
              <View style={styles.metricItem}>
                <Text style={styles.metricLabel}>Average Response Time</Text>
                <Text style={styles.metricValue}>{analyticsData.averageResponseTime}</Text>
              </View>
              <View style={styles.metricItem}>
                <Text style={styles.metricLabel}>Patrol Efficiency</Text>
                <Text style={styles.metricValue}>{analyticsData.patrolEfficiency}</Text>
              </View>
            </View>
          </View>

          {/* Recent Reports */}
          <View style={styles.reportsSection}>
            <Text style={styles.sectionTitle}>Recent Reports</Text>
            <View style={styles.reportsList}>
              {recentReports.map((report) => (
                <View key={report.id} style={styles.reportItem}>
                  <View style={styles.reportInfo}>
                    <Text style={styles.reportTitle}>{report.title}</Text>
                    <Text style={styles.reportType}>{report.type}</Text>
                    <Text style={styles.reportDate}>{report.date}</Text>
                  </View>
                  <TouchableOpacity style={styles.downloadButton}>
                    <Text style={styles.downloadText}>Download</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>

          {/* Export Actions */}
          <View style={styles.exportSection}>
            <Text style={styles.sectionTitle}>Export Options</Text>
            <View style={styles.exportButtons}>
              <TouchableOpacity style={styles.exportButton}>
                <Text style={styles.exportButtonText}>Export to PDF</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.exportButton}>
                <Text style={styles.exportButtonText}>Export to Excel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.exportButton}>
                <Text style={styles.exportButtonText}>Generate Report</Text>
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
  filterSection: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 12,
  },
  filterScroll: {
    flexDirection: 'row',
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#333',
    borderRadius: 20,
    marginRight: 8,
  },
  filterButtonActive: {
    backgroundColor: '#007AFF',
  },
  filterText: {
    color: '#cccccc',
    fontSize: 14,
    fontWeight: '600',
  },
  filterTextActive: {
    color: '#ffffff',
  },
  dateSection: {
    marginBottom: 24,
  },
  dateScroll: {
    flexDirection: 'row',
  },
  dateButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#333',
    borderRadius: 20,
    marginRight: 8,
  },
  dateButtonActive: {
    backgroundColor: '#007AFF',
  },
  dateText: {
    color: '#cccccc',
    fontSize: 14,
    fontWeight: '600',
  },
  dateTextActive: {
    color: '#ffffff',
  },
  analyticsSection: {
    marginBottom: 32,
  },
  analyticsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 16,
  },
  analyticsCard: {
    backgroundColor: '#2a2a2a',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    minWidth: '45%',
  },
  analyticsNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  analyticsLabel: {
    fontSize: 12,
    color: '#cccccc',
    textAlign: 'center',
  },
  performanceMetrics: {
    backgroundColor: '#2a2a2a',
    padding: 16,
    borderRadius: 8,
  },
  metricItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  metricLabel: {
    fontSize: 14,
    color: '#cccccc',
  },
  metricValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  reportsSection: {
    marginBottom: 32,
  },
  reportsList: {
    gap: 12,
  },
  reportItem: {
    backgroundColor: '#2a2a2a',
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reportInfo: {
    flex: 1,
  },
  reportTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  reportType: {
    fontSize: 12,
    color: '#007AFF',
    marginBottom: 2,
  },
  reportDate: {
    fontSize: 12,
    color: '#cccccc',
  },
  downloadButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  downloadText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
  exportSection: {
    marginBottom: 32,
  },
  exportButtons: {
    gap: 12,
  },
  exportButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  exportButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

