import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ParentingTime() {
  const [selectedState, setSelectedState] = useState("");
  const [scheduleType, setScheduleType] = useState("");
  const [yearRule, setYearRule] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [breakName, setBreakName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [notes, setNotes] = useState("");

  const states = ["Michigan", "Ohio", "Indiana", "Illinois"];
  const types = [
    "Regular",
    "Holiday",
    "School Break",
    "Summer",
    "Special",
  ];
  const years = ["Every Year", "Odd Years", "Even Years"];
  const parents = ["CP", "NCP"];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Parenting Time</Text>

        <View style={styles.card}>
          <Text style={styles.section}>State</Text>
          {states.map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.option}
              onPress={() => setSelectedState(item)}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.section}>Type</Text>
          {types.map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.option}
              onPress={() => setScheduleType(item)}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.section}>Year Rule</Text>
          {years.map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.option}
              onPress={() => setYearRule(item)}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.section}>Assigned To</Text>
          {parents.map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.option}
              onPress={() => setAssignedTo(item)}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.section}>Details</Text>

          <TextInput
            placeholder="Break Name"
            placeholderTextColor="gray"
            value={breakName}
            onChangeText={setBreakName}
            style={styles.input}
          />

          <TextInput
            placeholder="Start Time"
            placeholderTextColor="gray"
            value={startTime}
            onChangeText={setStartTime}
            style={styles.input}
          />

          <TextInput
            placeholder="End Time"
            placeholderTextColor="gray"
            value={endTime}
            onChangeText={setEndTime}
            style={styles.input}
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.section}>Notes</Text>
          <TextInput
            placeholder="Notes"
            placeholderTextColor="gray"
            value={notes}
            onChangeText={setNotes}
            style={styles.input}
            multiline
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkgreen",
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "tan",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "black",
  },
  section: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  option: {
    backgroundColor: "beige",
    padding: 10,
    marginBottom: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "black",
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "black",
  },
  button: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});