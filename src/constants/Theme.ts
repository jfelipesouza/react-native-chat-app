import { RFPercentage as Percent } from 'react-native-responsive-fontsize'
import { Dimensions } from 'react-native'

const tintColorLight = '#fff'
const tintColorDark = '#f0e0d9'

const { width } = Dimensions.get('window')

export default {
  light: {
    text: '#111',
    background: '#edf6f9',
    primary: '#006d77',
    secundary: '#83c5be',
    headerColor: '#fff',
    emphasys: 'tomato',
    tint: tintColorLight,
    tabIconDefault: '#bfbdc4',
    tabIconSelected: tintColorLight,
    fontsize: {
      icons: Percent(3),
      headerTitle: Percent(2.2),
      notFoundText: Percent(3),
      notFoundIcon: Percent(13)
    },
    space: {
      md: Percent(3),
      sm: Percent(2),
      xs: Percent(1)
    },
    sizes: {
      avatar: width * 0.5
    }
  },
  dark: {
    text: '#fff',
    headerColor: '#fff',
    background: '#2b2d42',
    primary: '#5c6378',
    secundary: '#8d99ae',
    emphasys: 'tomato',
    tint: tintColorDark,
    tabIconDefault: '#bfbdc4',
    tabIconSelected: tintColorDark,
    fontsize: {
      icons: Percent(3),
      headerTitle: Percent(2.2),
      notFoundText: Percent(3),
      notFoundIcon: Percent(13)
    },
    space: {
      md: Percent(3),
      sm: Percent(2),
      xs: Percent(1)
    },
    sizes: {
      avatar: width * 0.15
    }
  }
}
