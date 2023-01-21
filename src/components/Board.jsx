import React, { useState, useEffect } from "react"
import "./Board.css"

const ChessBoard = () => {
  const initialBoxes = [
    "#fff",
    "#000",
    "#fff",
    "#000",
    "#fff",
    "#000",
    "#fff",
    "#000",
    "#fff",
    "#000",
    "#fff",
    "#000",
    "#fff",
    "#000",
    "#fff",
    "#000",
    "#fff",
    "#000",
    "#fff",
    "#000",
  ]

  const [boxes, setBoxes] = useState(initialBoxes)
  const [boxIdx, setBoxIdx] = useState(0)
  const [generateColor, setGenerateColor] = useState(false)

  const switchBoxes = (initialValue) => {
    const modifiedBoxIndex = boxIdx === initialBoxes.length ? 0 : boxIdx + 1
    setBoxIdx(initialValue || modifiedBoxIndex)
  }

  const generateRandomColors = () => {
    setGenerateColor(true)
    switchBoxes(1)
  }

  const resetBoxColors = () => {
    setGenerateColor(false)
    setBoxes(initialBoxes)
  }

  useEffect(() => {
    if (generateColor) {
      const getRandomColor = `#${Math.floor(Math.random() * 16777215).toString(
        16
      )}`

      const initialBoxClone = [...initialBoxes]

      initialBoxClone[boxIdx - 1] = getRandomColor
      setBoxes(initialBoxClone)

      setTimeout(() => {
        switchBoxes()
      }, 1000)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boxIdx])

  return (
    <div className="container">
      <h1>Board</h1>
      <div className="board-box">
        {boxes.map((box, index) => {
          return (
            <div
              key={`${box + index}`}
              className="board-box__layout"
              style={{ backgroundColor: box }}
            >
              <p className="color-code">{box}</p>
            </div>
          )
        })}
      </div>
      <div className="buttons">
        <button onClick={generateRandomColors}>Start</button>
        <button onClick={resetBoxColors}>Reset</button>
      </div>
    </div>
  )
}

export default ChessBoard
