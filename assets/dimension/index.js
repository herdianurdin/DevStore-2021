import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width
const size4 = (width / 102.75) | 0
const size6 = (width / 68.5) | 0
const size8 = (width / 51.375) | 0
const size10 = (width / 41.1) | 0
const size11 = (width / 37.363) | 0
const size12 = (width / 34.25) | 0
const size14 = (width / 29.3571) | 0
const size16 = (width / 25.6875) | 0
const size18 = (width / 22.83) | 0
const size20 = (width / 20.55) | 0
const size22 = (width / 18.681) | 0
const size24 = (width / 17.125) | 0
const size26 = (width / 15.807) | 0
const size28 = (width / 14.6785) | 0
const size30 = (width / 13.7) | 0
const size32 = (width / 12.84375) | 0
const size40 = (width / 10.275) | 0
const size42 = (width / 9.785) | 0
const size48 = (width / 8.5625) | 0
const size56 = (width / 7.33928) | 0
const size60 = (width / 6.85) | 0
const size64 = (width / 6.421875) | 0
const size72 = (width / 5.7083) | 0
const size80 = (width / 5.1375) | 0
const size120 = (width / 3.425) | 0
const size180 = (width / 2.283) | 0
const cardWidth = ((width - (size32 * 2 + size28)) / 2) | 0

const dimension = {
    width,
    size4,
    size6,
    size8,
    size10,
    size11,
    size12,
    size14,
    size16,
    size18,
    size20,
    size22,
    size24,
    size26,
    size28,
    size30,
    size32,
    size40,
    size42,
    size48,
    size56,
    size60,
    size64,
    size72,
    size80,
    size120,
    size180,
    cardWidth,
}

export default dimension
