import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Todo } from './entities/Todo';
import { useState } from 'react';

export default function App() {
  const [text, onChangeText] = useState('');
  const [todos, setTodos] = useState<Todo[]>(
    [
      new Todo(1, 'Feed the cats', false), 
      new Todo(2, 'Feed the dog', false),
      new Todo(3, 'Take over the world', false),
    ])

  const handleAddTodo = () => {
    const newTodo = new Todo(todos[todos.length-1].id +1, text, false);
    console.log(newTodo);
    setTodos((prevState) => [...prevState, newTodo])
    
    console.log(todos);
  }

  return (
    <View style={styles.container}>
      <Text>Our first Todo application</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
});
