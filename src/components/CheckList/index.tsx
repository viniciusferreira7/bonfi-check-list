import { ChangeEvent, FormEvent, useState } from 'react'
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'
import { AiFillCamera } from 'react-icons/ai'

import {
  ArticleContainer,
  CheckListContainer,
  InputContainer,
  SectionContainer,
} from './styles'

export function CheckList() {
  const [checkedButton, setCheckedButton] = useState(false)
  const [checkedFile, setCheckedFile] = useState(false)
  const [nameFile, setNameFile] = useState('')

  function handleCheckedButtonClick(event: FormEvent<HTMLButtonElement>) {
    event?.preventDefault()
    setCheckedButton((checkedButton) => !checkedButton)
  }

  function handleFileName(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      setCheckedFile((checkedFile) => !checkedFile)
      setNameFile(event.target.files[0].name)
    }
  }

  return (
    <CheckListContainer>
      <header>
        <img src="https://source.unsplash.com/500x500" alt="image de redutor" />
      </header>
      <main>
        <SectionContainer>
          <h4>
            Controle/ <strong>Control</strong>
          </h4>
          <div>
            <p>
              Conferir a plaqueta de identificação. Check the nameplate Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ad similique
              iste magni accusamus ducimus consequuntur ab nemo asperiores
              tempore facilis nobis sit unde aut, delectus repellat quo eius
              reiciendis? Aut! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Quos rerum explicabo blanditiis suscipit
              expedita eligendi! Eaque expedita nihil quia reiciendis mollitia
              quas accusantium consequuntur! Error inventore perspiciatis enim
              quasi veniam.
            </p>
          </div>
        </SectionContainer>
        <ArticleContainer>
          <SectionContainer>
            <h4>
              Frequência/ <strong>Frequency</strong>
            </h4>
            <strong>100%</strong>
          </SectionContainer>
          <SectionContainer>
            <h4>
              Método/ <strong>Method</strong>
            </h4>
            <p>
              Visual/ <strong>Visual</strong>
            </p>
          </SectionContainer>
        </ArticleContainer>
        <SectionContainer>
          <h4>
            Verificado/ <strong>Checked</strong>
          </h4>
          <InputContainer
            checkedButton={checkedButton}
            checkedFile={checkedFile}
          >
            <button onClick={handleCheckedButtonClick}>
              {checkedButton ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}{' '}
              OK
            </button>
            <div>
              <label htmlFor="image">
                <AiFillCamera size={22} />
              </label>
              <input
                type="file"
                id="image"
                accept=".png,.jpeg,.jpg"
                capture="user"
                onChange={handleFileName}
              />
              {nameFile ? <span>{nameFile}</span> : null}
            </div>
          </InputContainer>
        </SectionContainer>
      </main>
    </CheckListContainer>
  )
}
