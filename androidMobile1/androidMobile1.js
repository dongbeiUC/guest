import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';


export default class AndroidMobile1 extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="10ddb96e-c2f4-46d8-8bc5-1a5d2036243a" style={styles.androidMobile1}>
        <ReactImage data-layer="411b293d-f372-4379-8bcf-fb7b273aa148" source={require('./assets/gruppeMaskieren2.png')} style={styles.androidMobile1_gruppeMaskieren2} />
        <ReactImage data-layer="a52e7ab3-706f-4877-b7e2-14d2508e6cfe" source={require('./assets/image853.png')} style={styles.androidMobile1_image853} />
        <ReactImage data-layer="52bc0c08-c6f5-412e-b186-3962ac6d4cf2" source={require('./assets/gruppeMaskieren3.png')} style={styles.androidMobile1_gruppeMaskieren3} />
        <View data-layer="f574023e-d0d4-4b7e-bc1f-997f328c8497" style={styles.androidMobile1_rechteck8}></View>
        <ReactImage data-layer="2112dd33-44d9-442b-bfa5-b85fd7feab7d" source={require('./assets/layer16686e987.png')} style={styles.androidMobile1_layer16686e987} />
        <Text data-layer="65a047f4-523b-41d2-b5d6-f8df5548d409" style={styles.androidMobile1_willkommenIn}>WILLKOMMEN IN</Text>
        <Text data-layer="51be3e65-2bd9-4f77-a235-3a571c5720b6" style={styles.androidMobile1_kalifornien}>KALIFORNIEN</Text>
        <View data-layer="698270a5-8745-4546-ab7f-fb805481e429" style={styles.androidMobile1_rechteck4}></View>
        <ReactImage data-layer="ab915d31-8b33-4a7b-999d-238698082cee" source={require('./assets/layer1.png')} style={styles.androidMobile1_layer1} />
    </ScrollView>
    );
  }
}

AndroidMobile1.propTypes = {

}

AndroidMobile1.defaultProps = {

}


const styles = StyleSheet.create({
  "androidMobile1": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 360,
    "height": 1283,
    "left": 0,
    "top": 0
  },
  "androidMobile1_gruppeMaskieren2": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 218,
    "height": 44,
    "left": 71,
    "top": 7
  },
  "androidMobile1_gruppeMaskieren2_layer13ddb2aca": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 180.14,
    "height": 44,
    "left": 18.93,
    "top": 0
  },
  "androidMobile1_gruppeMaskieren2_layer13ddb2aca_g815315ab9c8": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 180.14,
    "height": 44,
    "left": 0,
    "top": 0
  },
  "androidMobile1_gruppeMaskieren2_layer13ddb2aca_g815315ab9c8_path825ada7677b": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 180.14,
    "height": 44,
    "left": 0,
    "top": 0
  },
  "androidMobile1_gruppeMaskieren2_rechteck5": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 218,
    "height": 44,
    "left": 0,
    "top": 0
  },
  "androidMobile1_image853": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 361,
    "height": 645,
    "left": -1,
    "top": 0
  },
  "androidMobile1_gruppeMaskieren3": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 42,
    "height": 42,
    "left": 159,
    "top": 560
  },
  "androidMobile1_gruppeMaskieren3_layer1f018f1e8": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 37.56,
    "height": 27.36,
    "left": 2.22,
    "top": 7.3
  },
  "androidMobile1_gruppeMaskieren3_layer1f018f1e8_path850": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 43.84,
    "height": 25.76,
    "left": -3.14,
    "top": 4.74
  },
  "androidMobile1_gruppeMaskieren3_layer1f018f1e8_path852": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 33.47,
    "height": 19.85,
    "left": 2.05,
    "top": -3.14
  },
  "androidMobile1_gruppeMaskieren3_ellipse2": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 42,
    "height": 42,
    "left": 0,
    "top": 0
  },
  "androidMobile1_rechteck8": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(127, 207, 207, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 361,
    "height": 78,
    "left": -1,
    "top": 0
  },
  "androidMobile1_layer16686e987": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 54.1,
    "height": 47.76,
    "left": 152.9,
    "top": 211.39
  },
  "androidMobile1_layer16686e987_path857": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 0,
    "height": 0,
    "left": 2.55,
    "top": 4.53
  },
  "androidMobile1_layer16686e987_g1059": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 54.1,
    "height": 47.76,
    "left": 0,
    "top": 0
  },
  "androidMobile1_layer16686e987_g1059_g1034": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 54.1,
    "height": 47.76,
    "left": 0,
    "top": 0
  },
  "androidMobile1_layer16686e987_g1059_g1034_g859": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 54.1,
    "height": 47.76,
    "left": 0,
    "top": 0
  },
  "androidMobile1_layer16686e987_g1059_g1034_g859_path873": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 54.1,
    "height": 47.76,
    "left": 0,
    "top": 0
  },
  "androidMobile1_willkommenIn": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(32, 26, 26, 1)",
    "fontSize": 22,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "DengXian",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 167,
    "height": 23,
    "left": 100,
    "top": 272
  },
  "androidMobile1_kalifornien": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(32, 26, 26, 1)",
    "fontSize": 29,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "DengXian",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 172,
    "height": 30,
    "left": 97,
    "top": 295
  },
  "androidMobile1_rechteck4": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(23, 27, 67, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 361,
    "height": 641,
    "left": -1,
    "top": 642
  },
  "androidMobile1_layer1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "width": 181.39,
    "height": 44.3,
    "left": 89,
    "top": 18
  },
  "androidMobile1_layer1_g815": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 181.39,
    "height": 44.3,
    "left": 0,
    "top": 0
  },
  "androidMobile1_layer1_g815_path825": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 181.39,
    "height": 44.3,
    "left": 0,
    "top": 0
  }
});