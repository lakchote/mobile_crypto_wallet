import React, { useRef } from "react"
import { View, SafeAreaView, Text, Image, Pressable } from "react-native"
import AppIntroSlider from "react-native-app-intro-slider"
import styles from "./styles"
import { data } from "./constants"
import { RenderPaginationProps, IntroProps } from "./types"
import { LinearGradient } from "expo-linear-gradient"
import MaskedView from "@react-native-masked-view/masked-view"
import theme from "../../styles/theme"

const renderItem = ({ item }: { item: typeof data[0] }) => (
  <View style={styles.slide}>
    <Image source={item.image} style={theme.IMAGE} />
    <View style={styles.titleContainer}>
      {item.emphasis_pos === "bottom" ? (
        <>
          <Text style={styles.title}>{item.title}</Text>
          <MaskedView style={styles.maskedView} maskElement={<Text style={styles.title}>{item.emphasis}</Text>}>
            <LinearGradient colors={theme.LINEAR_GRADIENT} style={theme.FLEX} />
          </MaskedView>
        </>
      ) : (
        <>
          <MaskedView style={styles.maskedView} maskElement={<Text style={styles.title}>{item.emphasis}</Text>}>
            <LinearGradient colors={theme.LINEAR_GRADIENT} style={theme.FLEX} />
          </MaskedView>
          <Text style={styles.title}>{item.title}</Text>
        </>
      )}
    </View>
  </View>
)

const RenderPagination = ({ activeIndex, slider, data, onIntroCompleted }: RenderPaginationProps) => {
  const handleIntroCompleted = () => {
    onIntroCompleted()
  }
  return (
    <View style={styles.paginationContainer}>
      <SafeAreaView>
        <View style={styles.paginationDots}>
          {data.length > 1 &&
            data.map((_, i) => (
              <Pressable
                key={i}
                style={[styles.dot, i === activeIndex ? styles.dotActive : styles.dotInactive]}
                onPress={() => slider?.goToSlide(i, true)}
              />
            ))}
        </View>
        <View>
          <Pressable style={theme.BUTTON} onPress={handleIntroCompleted}>
            <Text style={styles.text}>Get Start</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  )
}

export const Intro = ({ navigation }: IntroProps) => {
  const sliderEl = useRef(null)

  const keyExtractor = (item: typeof data[0]) => item.title

  const onIntroCompleted = () => {
    navigation.navigate("GetStart")
  }

  return (
    <View style={theme.FLEX}>
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderPagination={(activeIndex) => (
          <RenderPagination
            data={data}
            activeIndex={activeIndex}
            slider={sliderEl.current}
            onIntroCompleted={onIntroCompleted}
          />
        )}
        data={data}
        ref={sliderEl}
      />
    </View>
  )
}
