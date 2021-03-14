import { Chip } from '@material-ui/core'
import React from 'react'

export default function ChipsView() {
  return (
    <div>
      {
        ['Pro', 'Cuisines', 'Dessert', 'Khatta', 'Meetha'].map((item, index) => {
          return <Chip key={index} variant="default" 
          label={item}
          style={{
            margin: '8px 2px'
          }}
           />
        })
      }
    </div>
  )
}