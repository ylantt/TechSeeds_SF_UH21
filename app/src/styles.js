import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const bases = StyleSheet.create({
  container: {
    fontFamily: '',
    padding: wp('2%'),
    flex: 1,
    backgroundColor: '#fff'
  }
});

const utilities = StyleSheet.create({
  flexStretch: {
    flex: 1
  },
  mt7: {
    marginTop: hp('7%'),
  },
  mt3: {
    marginTop: hp('3%'),
  },
  mt15: {
    marginTop: hp('15%'),
  },
  col2: {
    width: wp('47%')
  }
});

const texts = StyleSheet.create({
  bigText: {
    textAlign: 'center',
    fontSize: wp('8%'),
  },
  midText: {
    textAlign: 'center',
    fontSize: wp('6%'),
  },
  normalText: {
    textAlign: 'center',
    fontSize: wp('4%'),
  },
  purpleText: {
    fontWeight: 700,
    color: '#BF5AF2',
  }
});

const buttons = StyleSheet.create({
  btn: {
    color: '#fff',
    textAlign: 'center',
    height: hp('7%'),
    lineHeight: hp('7%'),
    fontSize: wp('5%'),
    marginBottom: hp('2%')
  },
  bottomBtn: {
    backgroundColor: '#BF5AF2',
    borderRadius: 8,
  },
  roundBtn: {
    borderRadius: 20,
  }
});

const images = StyleSheet.create({
  introImg: {
    width: hp('40%'),
    height: hp('35%'),
    alignSelf: 'center',
    marginTop: hp('8%'),
  },
  avtIcon: {
    width: hp('6%'),
    height: hp('6%'),
    alignSelf: 'center',
    marginTop: hp('5%'),
  }
})

const formFields = StyleSheet.create({
  input: {
    borderColor: '#DEE1E6',
    borderWidth: 1,
    padding: 5,
    marginBottom: 5
  },
  horizontalStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export { bases, buttons, texts, images, utilities, formFields }