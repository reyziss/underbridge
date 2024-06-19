import { Link } from 'react-router-dom'

const imagePaths = [
  './image1.jpg',
  './image2.jpg',
  './image3.jpg',
  './image4.jpg',
  './image5.jpg',
  './image6.jpg'
]

const CategoryName = [
  'Верх',
  'Низ',
  'Верхняя одежда',
  'Сумки',
  'Аксессуары',
  'Обувь'
]

const CategoriesList: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-6 gap-3 mb-12">
      {imagePaths.map((imagePath, index) => (
        <div key={index} className="w-full text-center">
          <Link to="/shop">
            <img
              key={imagePath}
              src={`/images/home/categories/${imagePath}`}
              alt={`Картинка ${imagePath + 1}`}
              className="h-64 w-full mb-4 object-cover"
            />
          </Link>

          <span className="text-lg  font-semibold tracking-tight">
            {CategoryName[index]}
          </span>
        </div>
      ))}
    </div>
  )
}

export default CategoriesList
