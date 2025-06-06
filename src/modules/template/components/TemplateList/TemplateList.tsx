import TemplateCard from '@/modules/template/components/Card/TemplateCard'

const TemplateList = () => {
  const templates = [{ id: '123123', title: 'Template 1' }]
  return (
    <div className='mt-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {templates.map((item) => (
          <TemplateCard key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default TemplateList
