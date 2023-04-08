import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {KakaoMapView} from '@jiggag/react-native-kakao-maps';

const App = () => {
  const wt = Dimensions.get('window').width;
  const ht = Dimensions.get('window').height;
  return (
    <View style={styles.container}>
      <KakaoMapView
        markerImageName="customImageName" // 옵션1
        markerImageUrl="https://github.com/jiggag/react-native-kakao-maps/blob/develop/example/custom_image.png?raw=true" // 옵션2
        markerList={[
          {
            lat: 37.59523,
            lng: 127.086,
            markerName: 'marker',
          },
          {
            lat: 37.59523,
            lng: 127.08705,
            markerName: 'marker2',
          },
        ]}
        width={wt}
        height={ht}
        centerPoint={{
          lat: 37.59523,
          lng: 127.086,
        }}
        onChange={event => {
          // event.nativeEvent
          console.log(event);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default App;
