import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function TextInputCustom  ({
    placeholder,
    title,
    value,
    onChangeText,
    error,
  }) {
    const [isclick, setisclick] = useState(false);
    const handleFocus = () => {
      setisclick(true);
    };
    const handleBlur = () => {
      setisclick(false);
    };
    return (
      <View>
        <TextInput
          style={[
            isclick ? styles.inputnhaptext : styles.inputchuanhaptext,
            error ? styles.inputerr : null,
            { height: 50 },
          ]}
          placeholder={placeholder}
          placeholderTextColor={isclick ? "black" : "gray"}
          onChangeText={onChangeText}
          value={value}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
        {error ? (
          <Image
            source={{
              uri: "https://img.icons8.com/?size=80&id=42452&format=png",
            }}
            style={{
              height: 22,
              width: 22,
              position: "absolute",
              end: 10,
              tintColor: "red",
              bottom: 40,
            }}
          />
        ) : null}
        {error ? (
          <Text style={{ color: "red", marginStart: 20, fontSize: 13 }}>
            {error}
          </Text>
        ) : null}
      </View>
    );
  };

  

const styles = StyleSheet.create({
    h1: { color: "black", fontSize: 16, fontWeight: "400" },
    inputerr: {
      borderWidth: 1.5,
      marginBottom: 5,
      borderColor: "red",
      backgroundColor: "white",
      borderColor: "#ff6666",
      fontSize: 13,
      borderRadius: 10,
      backgroundColor: "#ffcccc",
      paddingHorizontal: 10,
    },
    inputnhaptext: {
      borderWidth: 1.5,
      borderRadius: 10,
      marginBottom: 5,
      borderColor: "#99d6ff",
      fontSize: 13,
      backgroundColor: "#e6faff",
      paddingHorizontal: 10,
    },
    inputchuanhaptext: {
      borderWidth: 1.5,
      borderRadius: 10,
      marginBottom: 5,
      borderColor: "#f5f5f0",
      fontSize: 13,
      backgroundColor: "white",
      paddingHorizontal: 10,
    },
  });