import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const TodoApp = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), text: text, completed: false }]);
    setText('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, text: newText } : todo));
  };

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Adicione um item"
      />
      <Button title="Adicionar" onPress={addTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.text}</Text>
            <Button title="Excluir" onPress={() => deleteTodo(item.id)} />
            <Button title="Editar" onPress={() => updateTodo(item.id, 'Novo texto')} />
          </View>
        )}
      />
    </View>
  );
};

export default TodoApp;
