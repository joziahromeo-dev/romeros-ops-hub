import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
        Romero’s Ops Hub
      </Text>

      <Text style={{ marginTop: 12, textAlign: 'center' }}>
        Plan the week. Track the paperwork. Get paid faster.
      </Text>
    </View>
  );
}