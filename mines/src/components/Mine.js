import React from 'react'
import { View, StyleSheet } from 'react-native'

export default () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.coreMine} />
        <View style={styles.line} />
        <View style={[styles.line, { transform: [{ rotate: '45deg' }] }]} />
        <View style={[styles.line, { transform: [{ rotate: '90deg' }] }]} />
        <View style={[styles.line, { transform: [{ rotate: '135deg' }] }]} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  coreMine: {
    height: 14,
    width: 14,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  line: {
    position: 'absolute',
    height: 3,
    borderRadius: 3,
    width: 70,
    backgroundColor: '#000'
  }
})
