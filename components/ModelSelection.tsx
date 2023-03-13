'use client'

import useSWR from 'swr'
import Select from 'react-select'

const fetchModels = () => fetch('/api/getEngines').then((res) => res.json())

function ModelSelection() {
  const { data: models, isLoading } = useSWR('models', fetchModels)
  const { data: model, mutate: setModel } = useSWR('model', {
    fallbackData: 'text-davinci-003'
  })
  

  return (
    <Select 
      className='my-2' 
      defaultValue={model} 
      options={models?.modelOptions} 
      placeholder={model} 
      isSearchable 
      isLoading={isLoading} 
      menuPosition='fixed' 
      classNames={{ control: (state) => 'bg-[#434654] border-[#434654] text-white'}}
      onChange={(e) => setModel(e.value)}
    />
  )
}

export default ModelSelection
