import { useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  const [name, setName] = useState("");

  const participants = [
    "Marcelo",
    "Igor",
    "Michel",
    "Beatriz",
    "Miguel",
    "Marta",
    "Domingos",
    "Rafael",
    "Nayara",
  ];

  function handleParticipantAdd() {
    if (participants.includes("Marcelo")) {
      return Alert.alert(
        "Nome já existente:",
        "Já existe um participante na lista com esse nome."
      );
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado com sucesso!"),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Ignite 2023</Text>
      <Text style={styles.eventDate}>22 de Fevereiro de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          onChangeText={(name) => setName(name)}
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            key={item}
            removeParticipant={handleParticipantRemove}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes acima.
          </Text>
        )}
      />
    </View>
  );
}
