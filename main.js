import { Platform, StyleSheet } from 'react-native';

const AdvancedStylesheet = {
  create(styles) {
    const styleKeys = Object.keys(styles);
    const keptStyles = {};

    styleKeys.forEach((key) => {
      const { ios, android, ...style } = styles[key];

      keptStyles[key] = { ...style, ...Platform.select({ ios, android }) };
    });

    return StyleSheet.create(keptStyles);
  },
};


export default AdvancedStylesheet;
