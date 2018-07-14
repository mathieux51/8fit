import React from "react"
import { View, ImageBackground, Image } from "react-native"
import styled from "styled-components"
import { NavigationActions } from "react-navigation"
import PropTypes from "prop-types"
import GoalItem from "molecules/GoalItem"
import images from "src/assets/img"
import TextMedium from "atoms/TextMedium"
import TextBoldBig from "atoms/TextBoldBig"

const Container = styled(View)`
  position: relative;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`

const BackgroundGrain = styled(ImageBackground)`
  position: absolute;
  flex: 1;
  flex-direction: row;
  width: 100%;
  height: 100%;
`

const ImgBeans = styled(ImageBackground)`
  flex: 1;
`

const LeftColumn = styled(View)`
  flex: 1;
  justify-content: flex-end;
`

const ImgContainer = styled(View)`
  position: relative;
  margin-bottom: 60%;
  margin-left: 70px;
`

const ImgDumbbel = styled(Image)`
  width: 100%;
  margin-bottom: 20px;
`

const ImgMat = styled(Image)`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 5px;
`

const Icon8Logo = styled(Image)`
  margin: 25% 0 10px;
  width: 22px;
  height: 44px;
`

const StyledTextMedium = styled(TextMedium)`
  margin: 10px 0;
`
const StyledTextBoldBig = styled(TextBoldBig)`
  margin: 10px 0 20px;
`

const StyledGoalItem = styled(GoalItem)`
  margin: 10px 0;
`

const formatString = str =>
  str
    .split(" ")
    .join("_")
    .toLowerCase()

const Home = props => {
  const handleOnPress = (key, title) => {
    props.setField({
      goal: formatString(title)
    })
    props.navigation.dispatch(NavigationActions.navigate({ routeName: "Age" }))
  }

  return (
    <Container>
      <BackgroundGrain source={images.backgroundGrain} style={props.style}>
        <ImgBeans source={images.imgBeans} resizeMode="contain" />
        <LeftColumn>
          <ImgContainer>
            <ImgMat source={images.imgMat} resizeMode="contain" />
            <ImgDumbbel source={images.imgDumbbel} resizeMode="contain" />
          </ImgContainer>
        </LeftColumn>
      </BackgroundGrain>
      <Icon8Logo source={images.icon8Logo} />
      <StyledTextMedium>WELCOME TO 8 FIT</StyledTextMedium>
      <StyledTextBoldBig>What&apos;s your goal?</StyledTextBoldBig>
      <StyledGoalItem
        title="Lose weight"
        description="Burn fat & get lean"
        onPress={handleOnPress}
      />
      <StyledGoalItem
        title="Get fitter"
        description="Tone up & feel healthy"
        onPress={handleOnPress}
      />
      <StyledGoalItem
        title="Gain muscle"
        description="Build mass & strength"
        onPress={handleOnPress}
      />
    </Container>
  )
}

Home.propTypes = {
  style: PropTypes.array,
  setField: PropTypes.func.isRequired,
  navigation: PropTypes.object
}

export default Home
