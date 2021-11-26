import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface Props {
  name: string;
  isActive?: boolean;
  image: string;
  children: React.ReactNode;
}

function Profile({
  name,
  isActive,
  image = 'https://www.thesprucepets.com/thmb/QDw4vt7XXQejL2IRztKeRLow6hA=/2776x1561/smart/filters:no_upscale()/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg',
  children,
}: Props) {
  return (
    <View style={isActive && styles.activeStyle}>
      <Image source={{uri: image}} />
      <Text>{name}</Text>
      <View>{children}</View>
    </View>
  );
}

Profile.defaultProps = {
  image:
    'https://www.thesprucepets.com/thmb/QDw4vt7XXQejL2IRztKeRLow6hA=/2776x1561/smart/filters:no_upscale()/cat-talk-eyes-553942-hero-df606397b6ff47b19f3ab98589c3e2ce.jpg',
};

const styles = StyleSheet.create({
  activeStyle: {
    backgroundColor: 'yellow',
  },
});

export default Profile;
