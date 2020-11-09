import { StyleSheet } from 'react-native'
import { colors } from '../../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${colors.primary}`
  },

  header: {
    flexDirection: 'row',
    paddingHorizontal: 39,
    paddingVertical: 45,
    width: '100%',
    height: 99,
    position: "relative",
    backgroundColor: `${colors.violet}`,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
  },

  main: {

  },

  mainTitle: {
    justifyContent: "space-between",
    paddingHorizontal: 39,
    paddingVertical: 39
  },

  title: {
    color: '#f4f4f4',
    fontSize: 22,
    fontWeight: '700'
  },

  subTitle: {
    color: '#f4f4f4',
    fontSize: 22,
    fontWeight: '300'
  }
})

export default styles