import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
  users: UserType[] // need to fix any
  addUserCallback: (name: string) => void // need to fix any
}


type TPureAddUser = (
  name: string,
  setError: (error: string) => void,
  setName: (name: string) => void,
  addUserCallback: (name: string) => void
) => void

type TPureOnBlur = (
  name: string,
  setError: (error: string) => void
) => void

type TPureOnEnter = (
  e: KeyboardEvent<HTMLInputElement>,
  addUser: () => void
) => void


export const pureAddUser: TPureAddUser = (name, setError, setName, addUserCallback) => {
  // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
  const trimmedName = name.trim()
  
  if (trimmedName) {
    addUserCallback(trimmedName)
    setName('')
    addUserCallback(trimmedName)
    
  } else {
    setError("Ошибка! Введите имя!")
  }
  
}

export const pureOnBlur: TPureOnBlur = (name, setError) => { // если имя пустое - показать ошибку
  const trimmedName = name.trim()
  if (trimmedName.length === 0) {
    setError("Ошибка! Введите имя!")
  }
}

export const pureOnEnter: TPureOnEnter = (e, addUser) => { // если нажата кнопка Enter - добавить
  if (e.key === 'Enter') {
    addUser()
  }
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                   users,
                                                                   addUserCallback,
                                                                 }) => {
  // деструктуризация пропсов
  const [name, setName] = useState<string>('') // need to fix any
  
  const [error, setError] = useState<string>('') // need to fix any
  
  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
    setName(e.target.value) // need to fix
    
    error && setError('')
  }
  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback)
  }
  
  const onBlur = () => {
    pureOnBlur(name, setError)
  }
  
  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    pureOnEnter(e, addUser)
  }
  
  const totalUsers = users.length // need to fix
  const lastUserName = users.length > 0 ? users[users.length - 1].name : ''// need to fix
  
  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onBlur={onBlur}
      onEnter={onEnter}
      error={error}
      totalUsers={totalUsers}
      lastUserName={lastUserName}
    />
  )
}

export default GreetingContainer
