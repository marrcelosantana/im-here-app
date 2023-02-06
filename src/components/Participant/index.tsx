import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface ParticipantProps {
  name: string;
  removeParticipant: (name: string) => void;
}

export function Participant({ name, removeParticipant }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => removeParticipant(name)}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
