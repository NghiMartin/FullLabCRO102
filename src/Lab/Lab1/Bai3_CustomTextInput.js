import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
  ImageBackground,
} from "react-native";

import TextInputCustom from "./TextInputCustom";
export default function Bai3_CustomTextInput() {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [error, setError] = useState("");
  const [error2, setError2] = useState("");
  const checkten = (text) => {
    if (text.trim() === "") {
      setError("Không được để trống");
    } else {
      setError("");
    }
    setInputValue(text);
  };
  const checktuoi = (text) => {
    if (text.trim() === "") {
      setError2("Không được để trống");
    } else {
      setError2("");
    }
    setInputValue2(text);
  };

  const handleSubmit = () => {
    if (inputValue.trim() === "" && inputValue2.trim() === "") {
      setError("Không được để trống");
      setError2("Không được để trống");
    } else {
      setError("");
      setError2("");
      console.log("Dữ liệu đã được gửi: ", inputValue);
    }
  };

  return (
    <View style={{ padding: 10, marginTop: 50 }}>
      <Text style={styles.h1}>Username</Text>
      <TextInputCustom
        placeholder="Mời nhập dữ liệu"
        value={inputValue}
        onChangeText={checkten}
        error={error}
      />
      <Text style={styles.h1}>Age</Text>
      <TextInputCustom
        placeholder="Mời nhập dữ liệu"
        value={inputValue2}
        onChangeText={checktuoi}
        error={error2}
      />
      <TouchableOpacity
        style={{
          justifyContent: "center",
          backgroundColor: "#59D5E0",
          alignItems: "center",
          borderRadius:20,
          padding: 10,
          marginTop: 10,
          marginHorizontal: 20,
        }}
        onPress={handleSubmit}
      >
        <Text style={{ color: "white", fontSize: 17, fontWeight: "700" }}>
          Submit
        </Text>
      </TouchableOpacity>
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