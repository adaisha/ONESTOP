import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ParentingTime() {
  const [selectedState, setSelectedState] = useState('');
  const [scheduleType, setScheduleType] = useState('');
  const [yearRule, setYearRule] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [breakName, setBreakName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [notes, setNotes] = useState('');
  const [guidelineClause, setGuidelineClause] = useState('');

  const states = ['Michigan', 'Ohio', 'Indiana', 'Illinois'];
  const scheduleTypes = [
    'Regular Parenting Time',
    'Holiday Parenting Time',
    'School Break',
    'Summer Parenting Time',
    'Special Occasion',
  ];
  const yearRules = ['Every Year', 'Odd Years', 'Even Years'];
  const parentOptions = ['CP', 'NCP'];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Parenting Time</Text>
        <Text style={styles.subtitle}>
          Privacy-first scheduling using public state guideline structure only
        </Text>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Select State Guideline</Text>
          <View style={styles.optionWrap}>
            {states.map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.crayonOption,
                  selectedState === item && styles.crayonOptionSelected,
                ]}
                onPress={() => setSelectedState(item)}
              >
                <Text
                  style={[
                    styles.crayonOptionText,
                    selectedState === item && styles.crayonOptionTextSelected,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Parenting Time Type</Text>
          <View style={styles.optionWrap}>
            {scheduleTypes.map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.crayonOption,
                  scheduleType === item && styles.crayonOptionSelected,
                ]}
                onPress={() => setScheduleType(item)}
              >
                <Text
                  style={[
                    styles.crayonOptionText,
                    scheduleType === item && styles.crayonOptionTextSelected,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Year Rule</Text>
          <View style={styles.optionWrap}>
            {yearRules.map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.crayonOption,
                  yearRule === item && styles.crayonOptionSelected,
                ]}
                onPress={() => setYearRule(item)}
              >
                <Text
                  style={[
                    styles.crayonOptionText,
                    yearRule === item && styles.crayonOptionTextSelected,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Assigned To</Text>
          <View style={styles.optionWrap}>
            {parentOptions.map((item) => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.crayonOption,
                  assignedTo === item && styles.crayonOptionSelected,
                ]}
                onPress={() => setAssignedTo(item)}
              >
                <Text
                  style={[
                    styles.crayonOptionText,
                    assignedTo === item && styles.crayonOptionTextSelected,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Break / Time Details</Text>

          <Text style={styles.label}>Break Name</Text>
          <TextInput
            value={breakName}
            onChangeText={setBreakName}
            placeholder="Spring Break, Winter Break, etc."
            placeholderTextColor="gray"
            style={styles.input}
          />

          <Text style={styles.label}>Start Time / Date</Text>
          <TextInput
            value={startTime}
            onChangeText={setStartTime}
            placeholder="Friday 6:00 PM"
            placeholderTextColor="gray"
            style={styles.input}
          />

          <Text style={styles.label}>End Time / Date</Text>
          <TextInput
            value={endTime}
            onChangeText={setEndTime}
            placeholder="Sunday 6:00 PM"
            placeholderTextColor="gray"
            style={styles.input}
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Notes</Text>
          <TextInput
            value={notes}
            onChangeText={setNotes}
            placeholder="Add neutral planning notes"
            placeholderTextColor="gray"
            style={[styles.input, styles.multiInput]}
            multiline
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Public Guideline Clause Reference</Text>
          <Text style={styles.helperText}>
            Paste only public state guideline language here. No personal court orders or private documents.
          </Text>
          <TextInput
            value={guidelineClause}
            onChangeText={setGuidelineClause}
            placeholder="Paste public state parenting-time guideline text"
            placeholderTextColor="gray"
            style={[styles.input, styles.largeInput]}
            multiline
          />
        </View>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Parenting Time</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(95, 122, 90)',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    color: 'rgb(247, 242, 234)',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: 'rgb(239, 231, 218)',
    marginTop: 6,
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'rgb(193, 154, 107)',
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: 'black',
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: 'rgb(30, 30, 30)',
    marginBottom: 12,
  },
  optionWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  crayonOption: {
    backgroundColor: 'rgb(232, 212, 181)',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginBottom: 8,
  },
  crayonOptionSelected: {
    backgroundColor: 'rgb(136, 168, 138)',
  },
  crayonOptionText: {
    color: 'rgb(30, 30, 30)',
    fontWeight: '600',
  },
  crayonOptionTextSelected: {
    color: 'white',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: 'rgb(30, 30, 30)',
    marginBottom: 6,
    marginTop: 8,
  },
  input: {
    backgroundColor: 'rgb(245, 230, 207)',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 12,
    padding: 12,
    color: 'rgb(30, 30, 30)',
    marginBottom: 8,
  },
  multiInput: {
    minHeight: 90,
    textAlignVertical: 'top',
  },
  largeInput: {
    minHeight: 130,
    textAlignVertical: 'top',
  },
  helperText: {
    fontSize: 12,
    color: 'rgb(47, 47, 47)',
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: 'rgb(47, 74, 50)',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 6,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});