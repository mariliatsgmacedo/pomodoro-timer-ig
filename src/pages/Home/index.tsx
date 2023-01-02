import { Play } from 'phosphor-react'
import {
  CountDownContainer,
  Divider,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  StartCountDownButton,
  TaskInput,
} from './style'

export const Home = () => {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput id="task" placeholder="Dê um nome para o seu projeto" />

          <label htmlFor="">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
          />
          <span>minutos.</span>
        </FormContainer>
        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Divider>:</Divider>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>
        <StartCountDownButton type="submit">
          <Play size={24} />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}
