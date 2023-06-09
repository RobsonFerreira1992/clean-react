import { RenderResult, fireEvent, render } from '@testing-library/react'
import React from 'react'
import Input from './input'
import Context from '@/presentation/context/form/form-context'
import faker from 'faker'
const makeSut = (fieldName: string): RenderResult => {
  return render(
    <Context.Provider value={{ state: {} }}>
        <Input name={fieldName}/>
    </Context.Provider>
  )
}
describe('Input component', () => {
  test('Should begin with readOnly', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const input = sut.getByTestId(field) as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })

  test('Should remove readOnly on focus', () => {
    const field = faker.database.column()
    const sut = makeSut(field)
    const input = sut.getByTestId(field) as HTMLInputElement
    fireEvent.focus(input)
    expect(input.readOnly).toBe(false)
  })
})
