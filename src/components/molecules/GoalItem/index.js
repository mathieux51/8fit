import React from "react"
import { TouchableOpacity, Image, View } from "react-native"
import styled from "styled-components"
import PropTypes from "prop-types"
import TextBold from "atoms/TextBold"
import TextRegular from "atoms/TextRegular"
import images from "src/assets/img"

const Container = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.lGrey};
  border-radius: 5px;
  padding: 20px;
  width: 90%;
  height: 100px;
  shadow-color: ${({ theme }) => theme.black};
  shadow-offset: 0 3px;
  shadow-opacity: 0.15;
  shadow-radius: 2px;
`

const TextContainer = styled(View)``

const Title = styled(TextBold)`
  margin-bottom: 5px;
`

const Description = styled(TextRegular)`
  margin-top: 5px;
`

const StyledImage = styled(Image)`
  width: 7px;
  height: 12px;
`

const GoalItem = props => (
  <Container
    style={props.style}
    onPress={evt => props.onPress(evt, props.title)}
  >
    <TextContainer>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </TextContainer>
    <StyledImage source={images.chevronRight} />
  </Container>
)

GoalItem.propTypes = {
  style: PropTypes.array,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default GoalItem
