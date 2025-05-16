import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface NotificationCardProps {
  title: string;
  message: string;
  time: string;
  iconName?: keyof typeof Ionicons.glyphMap;
  iconColor?: string;
  iconBgColor?: string;
  iconComponent?: React.ReactElement;
  onPress?: () => void;
}

const NotificationCard = ({
  title,
  message,
  time,
  iconName,
  iconColor,
  iconBgColor,
  iconComponent,
  onPress,
}: NotificationCardProps) => {

  return (
    <View
      className="w-96 h-24 relative bg-white rounded-2xl overflow-hidden shadow-md"
      onTouchEnd={onPress}>
      <View
        className={`w-12 h-12 left-4 top-[20px] absolute ${iconBgColor} rounded-full flex items-center justify-center overflow-hidden`}>
        {iconComponent ? iconComponent : <Ionicons name={iconName} size={24} color={iconColor} />}
      </View>

      <View className="absolute left-[72px] top-[14px] flex flex-col gap-1 pr-4">
        <Text className="text-black text-sm font-plusjakartasans-semibold leading-normal tracking-tight">
          {title}
        </Text>
        <Text className="w-64 text-slate-600 text-xs font-plusjakartasans-regular leading-tight tracking-tight">
          {message}
        </Text>
      </View>

      <Text className="absolute right-4 top-[14px] text-slate-600 text-xs font-plusjakartasans-semibold leading-normal tracking-tight">
        {time}
      </Text>
    </View>
  );
};

export default NotificationCard;
