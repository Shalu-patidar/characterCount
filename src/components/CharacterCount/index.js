import {Component} from 'react'
import {v4} from 'uuid'

import UserInput from '../UserInput'

import {
  BgContainer,
  YellowContainer,
  CharacterInfoContainer,
  Heading,
  UserInputsList,
  Image,
  CharacterCountContainer,
  CharacterHeading,
  InputContainer,
  Input,
  AddButton,
} from './styledComponents'

class CharacterCount extends Component {
  state = {
    userInputList: [],
    userInput: '',
  }

  onAddUserInput = event => {
    event.preventDefault()
    const {userInput} = this.state
    const newUserInput = {
      id: v4(),
      userEnteredText: userInput,
      textLength: userInput.length,
    }
    this.setState(prevState => ({
      userInputList: [...prevState.userInputList, newUserInput],
      userInput: '',
    }))
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  renderUserInputs = () => {
    const {userInputList} = this.state
    return userInputList.length === 0 ? (
      <Image
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    ) : (
      userInputList.map(each => (
        <UserInput key={each.id} userInputDetails={each} />
      ))
    )
  }

  render() {
    const {userInput} = this.state
    return (
      <BgContainer>
        <YellowContainer>
          <CharacterInfoContainer>
            <Heading>
              Count the characters like a <br />
              Boss...
            </Heading>
          </CharacterInfoContainer>
          <UserInputsList>{this.renderUserInputs()}</UserInputsList>
        </YellowContainer>
        <CharacterCountContainer>
          <CharacterHeading>Character Counter</CharacterHeading>
          <InputContainer onSubmit={this.onAddUserInput}>
            <Input
              type="text"
              value={userInput}
              onChange={this.onChangeUserInput}
              placeholder="Enter the characters here"
            />
            <AddButton>Add</AddButton>
          </InputContainer>
        </CharacterCountContainer>
      </BgContainer>
    )
  }
}

export default CharacterCount
