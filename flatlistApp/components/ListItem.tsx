import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../styles/colors";
import { dataType } from "@/data/appData";

type propsDataType = {
  item: dataType;
  selectedId: string;
  onPress: (item: dataType) => void;
}
// declare data type for props here

const ListItem: React.FC<propsDataType> = ({ item, selectedId, onPress }) => {
  return ( 
    <TouchableOpacity onPress={() => onPress(item)}>
      <View style={[styles.titleContainer, {
        backgroundColor: 
          item.id === selectedId 
            ? colors.primary 
            : colors.secondary
      },
      ]}>
        <Text style={[styles.titleText, {color: item.id === selectedId ? colors.text.light : colors.text.dark}]}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  )
};

export default ListItem;

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: 'lightblue'
  },
  selectedContainer: {
    backgroundColor: 'blue'
  },
  titleText: {
    fontSize: 24,
    padding: 10,
  }
});
