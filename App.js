import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";


export default function App() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (taskInput !== "") {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };

  const deleteTask = (task) => {
    setTasks([...tasks.filter((currentTask) => currentTask !== task)]);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>TA 6</Text>
        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputArea}
              onChangeText={(text) => setTaskInput(text)}
              placeholder="Ingresa una tarea..."
              keyboardType="text"
              value={taskInput}
            />
            <TouchableHighlight onPress={addTask} underlayColor="pink">
              <View style={styles.button}>
                <Text>➕</Text>
              </View>
            </TouchableHighlight>
          </View>
          <Text style={styles.text}>Lista de tareas:</Text>
          <View style={styles.taskList}>
            {tasks.map((task, index) => {
              return <Task key={index} task={task} deleteTask={deleteTask} />;
            })}
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

function Task({ task, deleteTask }) {
  return (
    <ReanimatedSwipeable
      renderRightActions={() => (
         <TouchableHighlight
         onPress={() => {
           deleteTask(task);
         }}
         underlayColor="white"
       >
        <View style={styles.deleteContainer}>
           <Text>🗑️</Text>
         </View>
       </TouchableHighlight>
      )}
    >
      <View style={styles.taskContainer}>
        <Text>{task}</Text>
      </View>
    </ReanimatedSwipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    flex: 1,
    backgroundColor: "beige",
    paddingTop: 65,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 270,
    gap: 10,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    backgroundColor: "#f2dbd6",
    padding: 20,
    borderRadius: 15,
    minWidth: 350,
  },
  inputArea: {
    backgroundColor: "pink",
    borderColor: "red",
    width: 230,
    height: 40,
    borderRadius: 20,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 20,
  },
  text: {
    color: "#da9dbc",
    fontWeight: "bold",
    fontSize: 20,
  },
  taskList: {
    minWidth: 300,
    maxWidth: 300,
    height: "auto",
    minHeight: 50,
    borderRadius: 10,
    backgroundColor: "transparent",
    borderWidth: 3,
    borderColor: "#da9dbc",
    padding: 15,
    paddingLwft: 25,
    justifyContent: "flex-start",
    gap: 10,
  },
  output: {
    fontSize: 17,
  },
  button: {
    borderRadius: 50,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
  },
  whiteButton: {
    backgroundColor: "white",
  },
  taskContainer: {
    flexDirection: "row",
    height: 50,
    minwidth: 200,
    borderRadius: 15,
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  deleteContainer: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 75,
    height: "100%",
    borderRadius: 15,
  },
  deleteText: {
    color: "white",
    fontWeight: "bold",
  },
});
