import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Text } from 'react-native'
import params from '../params'
import Mine from './Mine'
import Flag from './Flag'

export default function Field({ mined, opened, nearMines, exploded, flagged }) {
  const styleField = [styles.field]
  // other
  if (!opened && !exploded) styleField.push(styles.regular)
  if (exploded) styleField.push(styles.exploded)
  if (opened) styleField.push(styles.opened)
  if (flagged) styleField.push(styles.flagged)

  let color = null

  if (nearMines > 0) {
    if (nearMines === 1) color = '#2a28d7'
    if (nearMines === 2) color = '#2b520f'
    if (nearMines > 2 && nearMines < 6) color = '#f9f60a'
    if (nearMines >= 6) color = '#f221a9'
  }

  return (
    <View style={styleField}>
      {!mined && opened && nearMines > 0 ? (
        <Text style={[styles.label, { color: color }]}>{nearMines}</Text>
      ) : (
        false
      )}
      {mined && opened ? <Mine /> : false}
      {flagged && !opened ? <Flag /> : false}
    </View>
  )
}

Field.propTypes = {
  mined: PropTypes.bool.isRequired,
  opened: PropTypes.bool.isRequired,
  exploded: PropTypes.bool.isRequired,
  flagged: PropTypes.bool.isRequired,
  nearMines: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize
  },
  regular: {
    backgroundColor: '#999',
    borderLeftColor: '#ccc',
    borderTopColor: '#ccc',
    borderRightColor: '#333',
    borderBottomColor: '#333'
  },
  opened: {
    backgroundColor: '#999',
    borderColor: '#777',
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    fontWeight: 'bold',
    fontSize: params.fontSize
  },
  exploded: {
    backgroundColor: 'red',
    borderColor: 'red'
  }
})
